"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, summary, select, label[for], [role='button'], [role='tab'], .cursor-pointer";

/**
 * Anel cor de sol que segue a seta com um pequeno atraso. Em links, botões e cards
 * ele cresce e se enche; no clique, encolhe. Só com mouse e sem "reduzir movimento".
 * Só transform e opacity, num elemento fixo: não mexe no layout.
 */
export function CursorRing() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let scale = 1;
    let target = 1;
    let visible = false;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const k = 1 - Math.exp(-dt * 18);
      rx += (x - rx) * k;
      ry += (y - ry) * k;
      scale += (target - scale) * (1 - Math.exp(-dt * 14));
      el.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      // para quando alcançou o cursor: nada de rAF rodando à toa
      if (Math.abs(x - rx) > 0.2 || Math.abs(y - ry) > 0.2 || Math.abs(target - scale) > 0.005) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const kick = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        el.style.opacity = "1";
      }
      const hot = event.target instanceof Element && event.target.closest(INTERACTIVE);
      target = hot ? 1.9 : 1;
      el.dataset.hot = hot ? "true" : "false";
      kick();
    };
    const onDown = () => {
      target = 0.7;
      kick();
    };
    const onUp = () => {
      target = el.dataset.hot === "true" ? 1.9 : 1;
      kick();
    };
    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.classList.add("has-cursor-ring");
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-cursor-ring");
    };
  }, []);

  return <div ref={ring} aria-hidden="true" className="cursor-ring" />;
}
