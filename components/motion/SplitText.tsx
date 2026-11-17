"use client";

import { m, type Variants } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

const word: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/**
 * Quebra o texto em palavras que sobem de dentro de uma máscara.
 * O leitor de tela recebe o texto inteiro uma vez só. O gatilho de
 * "entrou na tela" fica no invólucro visível, nunca na palavra escondida.
 */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.06,
  onMount = false,
  className = "",
}: {
  text: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
  className?: string;
}) {
  const words = text.split(" ");
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.5 } };

  return (
    <>
      <span className="sr-only">{text}</span>
      <m.span
        aria-hidden="true"
        className={className}
        initial="hidden"
        {...trigger}
        variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {words.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <m.span className="inline-block will-change-transform" variants={word}>
              {item}
            </m.span>
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </m.span>
    </>
  );
}
