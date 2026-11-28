"use client";

import { m } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

/**
 * Bolinha da linha do tempo: chega vazia e se enche de brasa quando o item entra na tela,
 * acompanhando a linha que se preenche. O cargo atual ganha um anel pulsando em volta.
 */
export function TimelineDot({ current = false, className = "" }: { current?: boolean; className?: string }) {
  return (
    <span aria-hidden="true" className={`grid size-[13px] place-items-center ${className}`}>
      {current && <span className="timeline-pulse absolute size-[13px] rounded-full bg-ember/50" />}
      <m.span
        className="relative size-[13px] rounded-full border-2 border-ember"
        initial={{ backgroundColor: "rgba(255,127,26,0)", scale: 0.6 }}
        whileInView={{ backgroundColor: "rgba(255,127,26,1)", scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </span>
  );
}
