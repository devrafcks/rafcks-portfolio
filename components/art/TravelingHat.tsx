"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { HatScene } from "@/components/art/hat-scene";

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
};

/**
 * O chapéu 3D numa camada fixa. Nasce na Hero; quando você rola ele sai voando e
 * passa a acompanhar o cursor de pertinho, com um atraso de quem está flutuando e
 * inclinando para o lado em que vai (no celular, sem cursor, segue um caminho guiado
 * pelo scroll). No fim da página pousa no topo do "B" do footer.
 * A resolução do 3D é fixa: só o transform da camada muda, então o custo é constante.
 * Com "reduzir movimento" ele fica parado na Hero.
 */
export function TravelingHat() {
  const reduce = useReducedMotion() ?? false;
  const host = useRef<HTMLDivElement>(null);
  // no celular o chapéu não aparece: atrapalharia a leitura e nem baixa o 3D
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!el || !wide) return;
    let scene: HatScene | null = null;
    let raf = 0;
    let cancelled = false;
    let size = 0;
    let bornAt = 0;
    let lastKey = "";

    type Box = { left: number; top: number; width: number; height: number };
    const read = (node: Element | null): Box | null => {
      if (!node) return null;
      const r = node.getBoundingClientRect();
      return { left: r.left, top: r.top + window.scrollY, width: r.width, height: r.height };
    };
    let anchorBox: Box | null = null;
    let letterBox: Box | null = null;
    let frames = 0;
    const measure = () => {
      anchorBox = read(document.getElementById("hat-anchor"));
      letterBox = read(document.querySelector(".dcf .dcf-letter .dcf-glyph"));
    };
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    // cursor: só mouse/trackpad de verdade; no toque o chapéu segue o scroll
    let mouseX = -1;
    let mouseY = -1;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // posição que persegue o alvo (atraso de flutuar)
    let fx = -1;
    let fy = -1;
    let fs = 0.4;
    let lastY = window.scrollY;
    let lean = 0;
    let last = performance.now();

    const place = (now: number) => {
      raf = requestAnimationFrame(place);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (frames < 90 || frames % 30 === 0) measure();
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

      // na Hero
      const heroX = a.left + a.width / 2;
      const heroY = a.top - y + a.height / 2;
      let cx = heroX;
      let cy = heroY;
      let scale = 1;
      // pendurado no "l": inclinado e balançando de leve como um pêndulo
      let turn = reduce ? -14 : -14 + Math.sin(now / 1000 * 1.4) * 3.5;
      let phase = 0;
      let land = 0;
      let flying = false;

      if (!reduce) {
        const flyScale = Math.min(1, (vw < 640 ? 96 : 130) / (size * 0.65));
        const max = document.documentElement.scrollHeight - vh;

        // alvo do voo: logo acima e à direita do cursor; sem cursor, um passeio guiado pelo scroll
        let tx: number;
        let ty: number;
        if (mouseX >= 0) {
          tx = Math.min(vw - 60, Math.max(60, mouseX + 70));
          ty = Math.min(vh - 60, Math.max(60, mouseY - 90));
        } else {
          tx = vw * (0.5 + 0.34 * Math.sin(y / 700 + 1.1));
          ty = vh * (0.42 + 0.12 * Math.sin(y / 520));
        }
        const ts = flyScale;
        const follow = 5; // quanto mais alto, mais grudado no alvo

        if (fx < 0) {
          fx = tx;
          fy = ty;
          fs = ts;
        }
        const k = 1 - Math.exp(-dt * follow);
        fx += (tx - fx) * k;
        fy += (ty - fy) * k;
        fs += (ts - fs) * k;

        // inclina na direção do movimento e com a velocidade do scroll
        const vx = (tx - fx) / Math.max(vw, 1);
        const vy = (y - lastY) / Math.max(dt, 0.001) / 4000;
        lastY = y;
        lean += (Math.max(-1, Math.min(1, vx * 6 + vy)) * 10 - lean) * Math.min(1, dt * 6);

        // saída da Hero: da âncora até o voo
        const exit = ease(clamp01(y / (vh * 0.7)));
        cx = lerp(heroX, fx, exit);
        cy = lerp(heroY, fy, exit);
        scale = lerp(1, fs, exit);
        turn = lerp(turn, lean, exit);
        phase = exit;
        flying = exit > 0.1;

        // pouso no topo do B quando a página chega ao fim
        const b = letterBox;
        if (b && b.width > 0) {
          land = ease(clamp01(1 - (max - y) / (vh * 0.9)));
          if (land > 0) {
            const landScale = (b.width * 1.15) / (size * 0.65);
            const landCx = b.left + b.width * 0.48;
            const capTop = b.top - y + b.height * 0.2;
            const landCy = capTop + b.height * 0.03 - 0.127 * size * landScale;
            cx = lerp(cx, landCx, land);
            cy = lerp(cy, landCy, land);
            scale = lerp(scale, landScale, land);
            turn = lerp(turn, 0, land);
            phase = phase * (1 - land);
            flying = land < 0.95;
          }
        }
      }

      // nascimento: o 3D cai de leve no lugar do SVG
      if (bornAt && !reduce) {
        const t = clamp01((performance.now() - bornAt) / 800);
        if (t < 1) {
          const e = 1 - (1 - t) ** 3;
          scale *= 0.8 + 0.2 * e;
          cy -= (1 - e) * 36;
        }
      }

      const transform = `translate3d(${(cx - size / 2).toFixed(1)}px, ${(cy - size / 2).toFixed(1)}px, 0) rotate(${turn.toFixed(1)}deg) scale(${scale.toFixed(4)})`;
      if (transform !== lastKey) {
        lastKey = transform;
        el.style.transform = transform;
        // voando ao lado do cursor nunca bloqueia clique; parado na Hero ou pousado dá para girar
        el.style.pointerEvents = flying ? "none" : "auto";
        scene?.setPhase(Math.min(1, phase), land);
        // qualidade com folga para não ficar trocando: alta parado ou pousado, baixa voando
        if (phase > 0.6 && land < 0.4) scene?.setQuality("low");
        else if (phase < 0.3 || land > 0.7) scene?.setQuality("high");
      }
    };

    // espera o navegador folgar, mas no máximo 2,5 s (rolando sem parar, o "folgar" nunca chega)
    const idle = window.requestIdleCallback
      ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 2500 })
      : (cb: () => void) => window.setTimeout(cb, 600);
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(async () => {
      try {
        const { createHatScene } = await import("@/components/art/hat-scene");
        if (cancelled) return;
        last = performance.now();
        place(last);
        scene = createHatScene(el, { reduceMotion: reduce });
        lastKey = "";
        // só mostra depois que o primeiro quadro já foi desenhado no tamanho certo
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (cancelled) return;
            bornAt = performance.now();
            el.style.opacity = "1";
            document.documentElement.dataset.hat = "ready";
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
      window.removeEventListener("pointermove", onMove);
      cancelled = true;
      cancelIdle(handle as number);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      scene?.dispose();
    };
  }, [reduce, wide]);

  return (
    <div
      ref={host}
      aria-hidden="true"
      onClick={() => window.dispatchEvent(new Event("hat:spin"))}
      className="fixed top-0 left-0 z-30 hidden origin-center md:block cursor-pointer opacity-0 transition-opacity duration-500 will-change-transform"
    />
  );
}
