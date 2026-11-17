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

    const anchor = () => document.getElementById("hat-anchor");
    // a primeira letra da palavra carimbada no footer
    const letterB = () => document.querySelector<SVGGElement>(".dcf .dcf-letter .dcf-glyph");

    const place = () => {
      raf = requestAnimationFrame(place);
      const a = anchor();
      if (!a) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const ar = a.getBoundingClientRect();
      if (Math.abs(ar.width - size) > 1) {
        size = ar.width;
        el.style.width = el.style.height = `${size}px`;
      }

      // ponto 1: a âncora na Hero
      let cx = ar.left + ar.width / 2;
      let cy = ar.top + ar.height / 2;
      let scale = 1;
      let fly = 0;
      let land = 0;

      if (!reduce) {
        const y = window.scrollY;
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

        // pouso: termina exatamente no fim da página, em cima do B
        const b = letterB();
        if (b) {
          const br = b.getBoundingClientRect();
          land = ease(clamp01(1 - (max - y) / (vh * 0.9)));
          if (land > 0 && br.width > 0) {
            // o chapéu ocupa ~65% do canvas; no pouso fica só um pouco mais largo que a letra
            const landScale = (br.width * 1.15) / (size * 0.65);
            const landCx = br.left + br.width * 0.48;
            // o retângulo do texto inclui o espaço acima das maiúsculas: o topo real do B fica ~20% abaixo
            const capTop = br.top + br.height * 0.2;
            // a base da aba fica ~12,7% do canvas abaixo do centro; ela encosta no topo da letra
            const landCy = capTop + br.height * 0.03 - 0.127 * size * landScale;
            cx = lerp(cx, landCx, land);
            cy = lerp(cy, landCy, land);
            scale = lerp(scale, landScale, land);
          }
        }
      }

      el.style.transform = `translate3d(${cx - size / 2}px, ${cy - size / 2}px, 0) scale(${scale})`;
      // voando não bloqueia cliques; parado na Hero ou pousado dá para clicar e girar
      el.style.pointerEvents = fly < 0.1 || land > 0.95 ? "auto" : "none";
      scene?.setPhase(fly * (1 - land), land);
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(async () => {
      try {
        const { createHatScene } = await import("@/components/art/hat-scene");
        if (cancelled) return;
        place();
        scene = createHatScene(el, { reduceMotion: reduce });
        el.style.opacity = "1";
        window.dispatchEvent(new Event("hat:ready"));
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
      scene?.dispose();
    };
  }, [reduce]);

  return (
    <div
      ref={host}
      aria-hidden="true"
      onClick={() => window.dispatchEvent(new Event("hat:spin"))}
      className="fixed top-0 left-0 z-30 block origin-center cursor-pointer opacity-0 transition-opacity duration-700 will-change-transform md:block"
    />
  );
}
