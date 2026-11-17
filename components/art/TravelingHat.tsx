"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import type { HatScene } from "@/components/art/hat-scene";

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * O chapéu 3D numa camada fixa que acompanha o scroll: começa na âncora da
 * Hero, sai voando de um lado para o outro da página quando você rola e pousa
 * no topo do "B" do footer quando a página chega ao fim. A posição sai de dois
 * pontos reais (a âncora e a letra), então funciona em qualquer tamanho de tela.
 * Funciona em qualquer largura; com "reduzir movimento" ele fica parado na Hero.
 */
export function TravelingHat() {
  const reduce = useReducedMotion() ?? false;
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let scene: HatScene | null = null;
    let raf = 0;
    let cancelled = false;
    let size = 0;
    let bornAt = 0;

    // posições no documento, guardadas para não ler layout a cada frame
    type Box = { left: number; top: number; width: number; height: number };
    const read = (node: Element | null): Box | null => {
      if (!node) return null;
      const r = node.getBoundingClientRect();
      return { left: r.left, top: r.top + window.scrollY, width: r.width, height: r.height };
    };
    let anchorBox: Box | null = null;
    let letterBox: Box | null = null;
    let bandBox: Box | null = null;
    let frames = 0;
    const measure = () => {
      anchorBox = read(document.getElementById("hat-anchor"));
      // a primeira letra da palavra carimbada no footer
      letterBox = read(document.querySelector(".dcf .dcf-letter .dcf-glyph"));
      // a faixa amarela: é ali que o chapéu passa rente à tela
      bandBox = read(document.getElementById("faixa"));
    };
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const place = () => {
      raf = requestAnimationFrame(place);
      // nos primeiros segundos a âncora e o footer ainda estão animando; depois, releitura a cada ~half segundo
      if (frames < 150 || frames % 30 === 0) measure();
      frames++;
      const a = anchorBox;
      if (!a) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const y = window.scrollY;
      if (Math.abs(a.width - size) > 1) {
        size = a.width;
        el.style.width = el.style.height = `${size}px`;
      }

      // ponto 1: a âncora na Hero
      let cx = a.left + a.width / 2;
      let cy = a.top - y + a.height / 2;
      let scale = 1;
      let fly = 0;
      let land = 0;
      let flyby = 0;

      if (!reduce) {
        const max = document.documentElement.scrollHeight - vh;
        // saída da Hero
        fly = ease(clamp01(y / (vh * 0.6)));
        // passeio: vai e volta pelas laterais, sobe e desce um pouco
        const flyCx = vw * (0.5 + 0.36 * Math.sin(y / 700 + 1.1));
        const flyCy = vh * (0.5 + 0.12 * Math.sin(y / 520));
        // voando: ~210px no desktop, ~130px no celular
        const flyScale = Math.min(1, (vw < 640 ? 130 : 210) / size);
        cx = lerp(cx, flyCx, fly);
        cy = lerp(cy, flyCy, fly);
        scale = lerp(1, flyScale, fly);

        // passagem: perto da faixa amarela o chapéu vem enorme na direção da tela e se afasta até sumir no fundo
        if (bandBox) {
          const top = bandBox.top - y;
          const q = clamp01((vh * 1.05 - top) / (vh * 1.7));
          if (q > 0 && q < 1) {
            flyby = clamp01(q / 0.12) * clamp01((1 - q) / 0.15);
            const big = (Math.max(vw, vh) * 0.95) / (size * 0.65);
            const far = flyScale * 0.22;
            let passScale: number;
            if (q < 0.32) passScale = lerp(flyScale, big, ease(q / 0.32));
            else if (q < 0.85) passScale = lerp(big, far, ease((q - 0.32) / 0.53));
            else passScale = lerp(far, flyScale, ease((q - 0.85) / 0.15));
            // parte de onde o chapéu já está, cresce vindo pro centro e depois foge pro alto à direita
            const passCx = q < 0.32 ? lerp(cx, vw * 0.44, ease(q / 0.32)) : lerp(vw * 0.44, vw * 0.86, ease((q - 0.32) / 0.68));
            const passCy = q < 0.32 ? lerp(cy, vh * 0.56, ease(q / 0.32)) : lerp(vh * 0.56, vh * 0.3, ease((q - 0.32) / 0.68));
            cx = lerp(cx, passCx, flyby);
            cy = lerp(cy, passCy, flyby);
            scale = lerp(scale, passScale, flyby);
          }
        }

        // pouso: termina exatamente no fim da página, em cima do B
        const b = letterBox;
        if (b && b.width > 0) {
          land = ease(clamp01(1 - (max - y) / (vh * 0.9)));
          if (land > 0) {
            // o chapéu ocupa ~65% do canvas; no pouso fica só um pouco mais largo que a letra
            const landScale = (b.width * 1.15) / (size * 0.65);
            const landCx = b.left + b.width * 0.48;
            // o retângulo do texto inclui o espaço acima das maiúsculas: o topo real do B fica ~20% abaixo
            const capTop = b.top - y + b.height * 0.2;
            // a base da aba fica ~12,7% do canvas abaixo do centro; ela encosta no topo da letra
            const landCy = capTop + b.height * 0.03 - 0.127 * size * landScale;
            cx = lerp(cx, landCx, land);
            cy = lerp(cy, landCy, land);
            scale = lerp(scale, landScale, land);
          }
        }
      }

      // nascimento: o 3D cai de leve no lugar do SVG em vez de só aparecer por cima
      if (bornAt && !reduce) {
        const t = clamp01((performance.now() - bornAt) / 800);
        if (t < 1) {
          const e = 1 - (1 - t) ** 3;
          scale *= 0.8 + 0.2 * e;
          cy -= (1 - e) * 36;
        }
      }

      el.style.transform = `translate3d(${cx - size / 2}px, ${cy - size / 2}px, 0) scale(${scale})`;
      // voando não bloqueia cliques; parado na Hero ou pousado dá para clicar e girar
      el.style.pointerEvents = (fly < 0.1 || land > 0.95) && flyby < 0.05 ? "auto" : "none";
      scene?.setPhase(Math.min(1, fly * (1 - land) + flyby), land);
      // resolução acompanha o tamanho na tela: nítido quando passa grande, barato quando está pequeno
      scene?.setScale(scale);
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(async () => {
      try {
        const { createHatScene } = await import("@/components/art/hat-scene");
        if (cancelled) return;
        place();
        scene = createHatScene(el, { reduceMotion: reduce });
        // só mostra depois que o primeiro quadro já foi desenhado no tamanho certo
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (cancelled) return;
            bornAt = performance.now();
            el.style.opacity = "1";
            window.dispatchEvent(new Event("hat:ready"));
          }),
        );
      } catch {
        // sem WebGL: o SVG da Hero continua
      }
    });

    const onSpin = () => scene?.spin();
    window.addEventListener("hat:spin", onSpin);

    return () => {
      window.removeEventListener("hat:spin", onSpin);
      cancelled = true;
      cancelIdle(handle as number);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      scene?.dispose();
    };
  }, [reduce]);

  return (
    <div
      ref={host}
      aria-hidden="true"
      onClick={() => window.dispatchEvent(new Event("hat:spin"))}
      className="fixed top-0 left-0 z-30 block origin-center cursor-pointer opacity-0 transition-opacity duration-500 will-change-transform"
    />
  );
}
