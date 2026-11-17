"use client";

import { m, useInView, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { EASE } from "@/components/motion/Reveal";

/**
 * Revela o conteúdo de baixo para cima e dá um parallax leve enquanto rola.
 * O "está na tela?" é medido no invólucro, porque um elemento todo recortado
 * por clip-path nunca conta como visível para o IntersectionObserver.
 */
export function ImageReveal({ children, className = "", parallax = 40 }: { children: ReactNode; className?: string; parallax?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <div ref={ref} className={className}>
      <m.div
        className="overflow-hidden"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.3, ease: EASE }}
      >
        <m.div style={{ y, scale: 1 + (parallax * 2.5) / 1000 }}>{children}</m.div>
      </m.div>
    </div>
  );
}
