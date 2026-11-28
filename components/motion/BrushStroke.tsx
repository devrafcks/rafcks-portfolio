"use client";

import { m } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

/**
 * Pincelada cor de sol que se desenha embaixo do título quando ele entra na tela,
 * como um traço feito à mão. Só decoração.
 */
export function BrushStroke({ className = "", delay = 0.35 }: { className?: string; delay?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 22" fill="none" className={`brush-stroke block h-auto overflow-visible ${className}`}>
      <m.path
        d="M5 15.5C38 9 71 6.5 108 8.5c31 1.7 55 5.8 74 6.4 12 .4 23-1.6 33-5.2"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ pathLength: { duration: 0.9, delay, ease: EASE }, opacity: { duration: 0.01, delay } }}
      />
    </svg>
  );
}
