"use client";

import { m, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Linha vertical que se preenche de amarelo conforme a seção passa pela tela. */
export function TimelineLine({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] hidden w-px bg-ink/15 sm:block dark:bg-white/15">
        <m.div style={{ scaleY }} className="absolute inset-0 origin-top bg-gradient-to-b from-sun via-ember to-ember" />
      </div>
      {children}
    </div>
  );
}
