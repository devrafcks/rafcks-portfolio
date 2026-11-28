"use client";

import { m, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Entrada presa ao scroll: o card sobe de um lado, levemente girado, e assenta no lugar
 * enquanto atravessa a parte de baixo da tela. `side` alterna esquerda e direita para a
 * grade ganhar ritmo. Medido no invólucro (que não se mexe), então a conta não treme.
 * Com "reduzir movimento" o CSS (.tilt-in) deixa o card parado no lugar.
 */
export function TiltIn({
  children,
  side = "left",
  className = "",
  distance = 64,
}: {
  children: ReactNode;
  side?: "left" | "right";
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 100%", "start 58%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.35 });
  const sign = side === "left" ? -1 : 1;
  const y = useTransform(progress, [0, 1], [distance, 0]);
  const x = useTransform(progress, [0, 1], [sign * 18, 0]);
  const rotate = useTransform(progress, [0, 1], [sign * 2.2, 0]);
  const opacity = useTransform(progress, [0, 0.55], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <m.div style={{ y, x, rotate, opacity, transformOrigin: "50% 80%" }} className="tilt-in h-full">
        {children}
      </m.div>
    </div>
  );
}
