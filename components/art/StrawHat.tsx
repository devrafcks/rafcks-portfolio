"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Chapéu de palha em SVG puro (o mesmo do README do GitHub, agora "em 3D"):
 * inclina seguindo o mouse, flutua devagar e dá um giro quando clicado.
 * Não carrega nada além deste arquivo. Decorativo.
 */
export function StrawHat({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 90, damping: 16, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-22, 22]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [16, -10]), spring);
  const shadowX = useTransform(rotateY, (v) => v * -1.2);
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    let ex = 0;
    let ey = 0;
    const onMove = (event: PointerEvent) => {
      ex = event.clientX / window.innerWidth - 0.5;
      ey = event.clientY / window.innerHeight - 0.5;
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          px.set(ex);
          py.set(ey);
        });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [px, py, reduce]);

  return (
    <div aria-hidden="true" className={`[perspective:900px] ${className}`}>
      <div className="hat-bob">
        <m.div
          className="pointer-events-auto cursor-pointer [transform-style:preserve-3d]"
          style={{ rotateX, rotateY }}
          animate={{ rotateZ: spin }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          onClick={() => !reduce && setSpin((value) => value + 360)}
        >
          <svg viewBox="0 0 400 290" className="h-auto w-full overflow-visible drop-shadow-[0_18px_22px_rgba(180,83,9,0.28)]">
            <defs>
              <radialGradient id="hat-brim" cx="45%" cy="35%" r="75%">
                <stop offset="0" stopColor="#ffe08a" />
                <stop offset="0.55" stopColor="#f4c24f" />
                <stop offset="1" stopColor="#d99a2b" />
              </radialGradient>
              <radialGradient id="hat-crown" cx="40%" cy="25%" r="80%">
                <stop offset="0" stopColor="#ffe7a3" />
                <stop offset="0.6" stopColor="#f2bd45" />
                <stop offset="1" stopColor="#c98a22" />
              </radialGradient>
              <linearGradient id="hat-band" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e2402f" />
                <stop offset="1" stopColor="#a8231b" />
              </linearGradient>
              <clipPath id="hat-brim-clip">
                <ellipse cx="200" cy="190" rx="182" ry="60" />
              </clipPath>
            </defs>

            {/* aba */}
            <ellipse cx="200" cy="190" rx="182" ry="60" fill="url(#hat-brim)" stroke="#b67a1c" strokeWidth="3" />
            <g clipPath="url(#hat-brim-clip)" fill="none" stroke="#b67a1c" strokeOpacity="0.45" strokeWidth="2">
              <ellipse cx="200" cy="190" rx="160" ry="51" />
              <ellipse cx="200" cy="190" rx="138" ry="43" />
              <ellipse cx="200" cy="190" rx="116" ry="35" />
              <path d="M30 186 l14 -4 M60 214 l12 -6 M340 214 l-12 -6 M370 186 l-14 -4 M120 236 l6 -8 M280 236 l-6 -8 M200 246 v-9" strokeOpacity="0.35" />
            </g>

            {/* copa */}
            <path d="M108 188 C102 112 148 70 200 70 C252 70 298 112 292 188 Z" fill="url(#hat-crown)" stroke="#b67a1c" strokeWidth="3" />
            <g fill="none" stroke="#b67a1c" strokeOpacity="0.4" strokeWidth="2">
              <path d="M128 140 C160 124 240 124 272 140" />
              <path d="M120 112 C150 96 250 96 280 112" strokeOpacity="0.3" />
              <path d="M162 84 C150 110 146 140 146 158 M238 84 C250 110 254 140 254 158" strokeOpacity="0.25" />
            </g>
            <ellipse cx="170" cy="100" rx="34" ry="14" fill="#fff6d6" opacity="0.55" transform="rotate(-18 170 100)" />

            {/* faixa vermelha */}
            <path d="M106 166 C140 150 260 150 294 166 L293 190 C258 174 142 174 107 190 Z" fill="url(#hat-band)" />
            <path d="M107 190 C142 174 258 174 293 190" fill="none" stroke="#7d1812" strokeWidth="2" strokeOpacity="0.6" />

            {/* borda da frente da aba, para a copa "sentar" dentro */}
            <path d="M18 190 C40 226 120 250 200 250 C280 250 360 226 382 190" fill="none" stroke="#b67a1c" strokeWidth="3" />
          </svg>
        </m.div>
      </div>
      {/* sombra no chão */}
      <m.div style={{ x: shadowX }} className="hat-shadow mx-auto -mt-2 h-4 w-[62%] rounded-[50%] bg-ink/15 blur-[6px] dark:bg-black/40" />
    </div>
  );
}
