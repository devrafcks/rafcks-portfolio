"use client";

import { useEffect } from "react";

/**
 * Scroll com inércia na roda do mouse: o alvo anda pelo delta da roda e a página
 * desliza até ele, desacelerando no fim. Continua sendo o scroll real da janela,
 * então useScroll, sticky e âncoras seguem funcionando.
 * Só com mouse e sem "reduzir movimento". A roda volta ao normal quando:
 * - há um elemento rolável debaixo do cursor (diálogo, faixa de miniaturas);
 * - a página está travada (overflow hidden no html/body, ex.: diálogo aberto);
 * - é zoom (ctrl/cmd) ou rolagem lateral.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    let current = window.scrollY;
    let target = current;
    let frame = 0;
    let last = 0;
    let lastSet = -1;

    const max = () => Math.max(0, root.scrollHeight - window.innerHeight);
    const clamp = (value: number) => Math.min(max(), Math.max(0, value));
    const to = (y: number) => {
      lastSet = y;
      // instant: o html tem scroll-behavior: smooth e cada passo viraria outra animação
      window.scrollTo({ top: y, behavior: "instant" });
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 1 / 60);
      last = now;
      // ~0,14 por quadro a 60 fps, igual em qualquer taxa de atualização
      current += (target - current) * (1 - Math.exp(-dt * 9));
      if (Math.abs(target - current) < 0.4) {
        current = target;
        to(current);
        frame = 0;
        return;
      }
      to(current);
      frame = requestAnimationFrame(tick);
    };

    const locked = () => {
      const html = getComputedStyle(root).overflowY;
      const body = getComputedStyle(document.body).overflowY;
      return html === "hidden" || body === "hidden";
    };

    const scrollableAncestor = (start: EventTarget | null, dy: number) => {
      let node = start instanceof Element ? start : null;
      while (node && node !== document.body && node !== root) {
        const style = getComputedStyle(node);
        if (/(auto|scroll|overlay)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1) {
          const atTop = node.scrollTop <= 0;
          const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
          if ((dy < 0 && !atTop) || (dy > 0 && !atBottom)) return true;
        }
        node = node.parentElement;
      }
      return false;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (locked() || scrollableAncestor(event.target, event.deltaY)) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 36 : event.deltaMode === 2 ? window.innerHeight : 1;
      const delta = Math.max(-260, Math.min(260, event.deltaY * unit));
      if (!frame) {
        current = window.scrollY;
        target = current;
      }
      target = clamp(target + delta);
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    // qualquer scroll que não veio daqui (teclado, âncora, barra) vira o novo ponto de partida
    const onScroll = () => {
      // o scroll que este componente mesmo pediu chega aqui também: esse não conta
      if (Math.abs(window.scrollY - lastSet) <= 2) return;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      current = target = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
