"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Conta de 0 até o número dentro do texto ("+R$ 20.000") quando aparece na tela.
 * O HTML já sai com o valor final, então SEO e quem está sem JS veem o número certo.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    const match = value.match(/\d[\d.]*/);
    if (!node || !inView || reduce || !match) return;
    const target = Number(match[0].replace(/\./g, ""));
    const [before, after] = [value.slice(0, match.index), value.slice((match.index ?? 0) + match[0].length)];
    const format = (n: number) => `${before}${Math.round(n).toLocaleString("pt-BR")}${after}`;
    node.textContent = format(0);
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        node.textContent = format(n);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true" className={`tabular-nums ${className ?? ""}`}>
        {value}
      </span>
    </>
  );
}
