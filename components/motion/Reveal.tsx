"use client";

import { m, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "section" | "article" | "li" | "ul" | "p" | "span" | "figure" | "header";

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
  id?: string;
};

/** Sobe e aparece quando entra na tela, uma vez só. */
export function Reveal({ children, as = "div", className, delay = 0, y = 28, x = 0, amount = 0.2, id }: RevealProps) {
  const Component = m[as] as typeof m.div;
  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

const group: Variants = {
  hidden: {},
  show: (stagger: number = 0.08) => ({ transition: { staggerChildren: stagger } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function RevealGroup({
  children,
  as = "div",
  className,
  stagger = 0.08,
  amount = 0.15,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  const Component = m[as] as typeof m.div;
  return (
    <Component
      className={className}
      variants={group}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, as = "div", className }: { children: ReactNode; as?: Tag; className?: string }) {
  const Component = m[as] as typeof m.div;
  return (
    <Component className={className} variants={item}>
      {children}
    </Component>
  );
}
