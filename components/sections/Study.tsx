"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import {
  IconBook,
  IconBrush,
  IconCertificate,
  IconCode,
  IconDeviceLaptop,
  IconHash,
  IconRocket,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { studies } from "@/data/courses";
import type { Study } from "@/data/types";
import { EASE } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, ComponentType<{ size?: number; stroke?: number; "aria-hidden"?: boolean }>> = {
  "Instituto PROA": IconUsers,
  Rocketseat: IconRocket,
  "Hashtag Treinamentos": IconHash,
  EBAC: IconSchool,
  "Brainstorm Academy": IconBrush,
  Alura: IconBook,
  DIO: IconDeviceLaptop,
  Udemy: IconCode,
  Microsoft: IconCertificate,
};

function CourseCard({ item, index }: { item: Study; index: number }) {
  const Icon = icons[item.place] ?? IconSchool;
  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: EASE }}
      className="group flex gap-3 rounded-2xl border border-ink/12 bg-paper p-4 transition-colors duration-300 hover:border-ink/35 dark:border-white/12 dark:bg-night dark:hover:border-white/35"
    >
      <span
        className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-sun transition-colors duration-300 group-hover:bg-sun group-hover:text-ink"
        aria-hidden="true"
      >
        <Icon size={20} stroke={1.75} />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-base leading-tight font-semibold tracking-[-0.02em]">{item.title}</h3>
        <p className="mt-1 font-label text-xs font-extrabold tracking-[0.04em] text-ink/80 uppercase italic dark:text-white/80">
          {item.period ? `${item.place} · ${item.period}` : item.place}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink/85 dark:text-white/80">{item.text}</p>
        {item.href && (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-ember-ink underline-offset-2 hover:underline">
            github.com/devrafcks/50days_50projects
          </a>
        )}
      </div>
    </m.article>
  );
}

const tabs = [
  ["formacao", "Formação"],
  ["cursos", "Cursos e certificações"],
] as const;

export function Study() {
  const [tab, setTab] = useState<"formacao" | "cursos">("formacao");
  const formacao = studies.filter((item) => item.group === "formacao");
  const cursos = studies.filter((item) => item.group === "curso");

  return (
    <section id="estudos" className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading title="Formação e cursos" />
        <div role="tablist" aria-label="Formação e cursos" className="relative flex gap-6">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`painel-${id}`}
              onClick={() => setTab(id)}
              className={`relative pb-1 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic transition-colors ${tab === id ? "text-ink dark:text-white" : "text-ink/80 hover:text-ink dark:text-white/80 dark:hover:text-white"}`}
            >
              {label}
              {tab === id && (
                <m.span
                  layoutId="study-tab"
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-sun"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={tab}
          id={`painel-${tab}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {(tab === "formacao" ? formacao : cursos).map((item, index) => (
            <CourseCard key={item.title} item={item} index={index} />
          ))}
        </m.div>
      </AnimatePresence>
    </section>
  );
}
