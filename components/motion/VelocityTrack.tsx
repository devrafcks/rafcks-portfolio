"use client";

import {
  m,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Faixa infinita que anda sozinha e acelera com a velocidade do scroll.
 * Se a pessoa rola para cima, a faixa inverte. Para no hover.
 */
export function VelocityTrack({
  children,
  speed = 2.4,
  direction = -1,
  className = "",
  copies = 4,
}: {
  children: ReactNode;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
  copies?: number;
}) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-100 / copies, 0, v)}%`);
  const dir = useRef(direction);
  const paused = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  // só anda quando está na tela
  const visible = useInView(root, { margin: "100px 0px" });

  useAnimationFrame((_, delta) => {
    if (reduce || paused.current || !visible) return;
    const f = factor.get();
    if (f < -0.05) dir.current = (-direction) as 1 | -1;
    else if (f > 0.05) dir.current = direction;
    const step = dir.current * speed * (delta / 1000) * (1 + Math.min(Math.abs(f), 6));
    base.set(base.get() + step);
  });

  return (
    <div
      ref={root}
      className={`overflow-hidden ${className}`}
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      <m.div style={{ x }} className="flex w-max will-change-transform">
        {Array.from({ length: copies }, (_, index) => (
          <div key={index} aria-hidden={index > 0 || undefined} className="flex shrink-0">
            {children}
          </div>
        ))}
      </m.div>
    </div>
  );
}
