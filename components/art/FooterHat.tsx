"use client";

import { useEffect, useRef, useState } from "react";

type Box = { left: number; top: number; width: number; height: number };

/**
 * Celular: sem o chapéu 3D voando, ele já fica pousado no "B" do rodapé, em SVG.
 * A posição sai da letra de verdade (medida), então encaixa em qualquer largura.
 */
export function FooterHat() {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const glyph = host.querySelector(".dcf .dcf-letter .dcf-glyph");
      if (!glyph) return;
      const h = host.getBoundingClientRect();
      const r = glyph.getBoundingClientRect();
      setBox((prev) => {
        const next = { left: r.left - h.left, top: r.top - h.top, width: r.width, height: r.height };
        return prev && Math.abs(prev.left - next.left) < 0.5 && Math.abs(prev.top - next.top) < 0.5 && Math.abs(prev.width - next.width) < 0.5 ? prev : next;
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const ro = new ResizeObserver(schedule);
    ro.observe(host);
    const mo = new MutationObserver(schedule);
    mo.observe(host, { childList: true, subtree: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // largura um pouco maior que a letra; a base da aba encosta no topo real do B (~20% abaixo da caixa do texto)
  const width = box ? box.width * 1.25 : 0;
  const height = width * 0.5;
  const capTop = box ? box.top + box.height * 0.22 : 0;

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
      {box && (
        <svg
          viewBox="0 0 120 60"
          className="absolute -rotate-[8deg]"
          style={{ left: box.left + box.width * 0.48 - width / 2, top: capTop - height * 0.95, width, height }}
        >
          <g stroke="#2b1e20" strokeWidth="2.4" strokeLinejoin="round">
            <ellipse cx="60" cy="46" rx="57" ry="11" fill="#f2c14e" />
            <path d="M30 44c0-22 13-38 30-38s30 16 30 38z" fill="#f2c14e" />
            <path d="M31 33h58v9H31z" fill="#c8322a" />
            <path d="M14 46c12 4 30 6 46 6s34-2 46-6" fill="none" stroke="#c9922e" strokeWidth="1.4" />
          </g>
        </svg>
      )}
    </div>
  );
}
