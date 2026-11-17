"use client";

import { m } from "motion/react";

const rings = [
  { r: 96, w: 10, tone: "sun", gap: 0.28 },
  { r: 128, w: 3, tone: "ember", gap: 0.4 },
  { r: 156, w: 14, tone: "sun", gap: 0.18 },
  { r: 192, w: 2, tone: "ink", gap: 0.5 },
  { r: 218, w: 6, tone: "ember", gap: 0.32 },
  { r: 250, w: 2, tone: "sun", gap: 0.12 },
  { r: 282, w: 18, tone: "sun", gap: 0.46 },
] as const;

const tones = {
  sun: "stroke-sun",
  ember: "stroke-ember",
  ink: "stroke-ink/25 dark:stroke-white/25",
};

/**
 * Arcos concêntricos do banner. Cada arco se desenha na entrada
 * e o conjunto gira devagar. Puramente decorativo.
 */
export function Rings({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true" focusable="false" className={className} fill="none">
      <g>
        {rings.map((ring, index) => {
          const length = 1 - ring.gap;
          return (
            <m.circle
              key={ring.r}
              cx="300"
              cy="300"
              r={ring.r}
              strokeWidth={ring.w}
              strokeLinecap="round"
              className={tones[ring.tone]}
              transform={`rotate(${index * 47} 300 300)`}
              initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: length, opacity: 1 }}
              whileInView={{ pathLength: length, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.25 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
      </g>
    </svg>
  );
}
