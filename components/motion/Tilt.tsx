"use client";

import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

/** Inclina o card em 3D seguindo o mouse, com um brilho que acompanha. */
export function Tilt({ children, max = 6, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, rgba(255,188,0,0.45), transparent 55%)`;
  const glowOpacity = useSpring(0, spring);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
    glowOpacity.set(1);
  }

  function leave() {
    px.set(0.5);
    py.set(0.5);
    glowOpacity.set(0);
  }

  return (
    <m.div
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={`relative ${className}`}
    >
      {children}
      <m.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light"
        style={{
          opacity: glowOpacity,
          background: glow,
        }}
      />
    </m.div>
  );
}
