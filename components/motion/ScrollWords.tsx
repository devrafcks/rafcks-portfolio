"use client";

import { splitWords } from "@/lib/splitWords";
import { m, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, ["0.35em", "0em"]);
  return (
    <m.span className="scroll-word inline-block will-change-[opacity,transform]" style={{ opacity, y }}>
      {word}
    </m.span>
  );
}

/**
 * Texto que acende palavra por palavra conforme a página rola: começa apagado e cada
 * palavra ganha tinta quando a linha de leitura passa por ela. Preso ao scroll, então
 * volta a apagar se a pessoa sobe. O leitor de tela recebe o texto inteiro uma vez só.
 * Com "reduzir movimento" o CSS (.scroll-word) mostra tudo aceso.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = splitWords(text);

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = Math.min(1, start + 2.5 / words.length);
          return (
            <span key={`${word.text}-${index}`}>
              <Word word={word.text} progress={scrollYProgress} range={[start, end]} />
              {word.space ? " " : null}
            </span>
          );
        })}
      </span>
    </p>
  );
}
