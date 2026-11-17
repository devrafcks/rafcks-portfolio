"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

/** Puxa o conteúdo um pouco na direção do cursor. Só em mouse, nunca no toque. */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function move(event: PointerEvent<HTMLSpanElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.span style={{ x: sx, y: sy }} onPointerMove={move} onPointerLeave={leave} className={`inline-flex ${className}`}>
      {children}
    </m.span>
  );
}
