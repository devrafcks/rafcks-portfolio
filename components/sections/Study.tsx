"use client";

import { useState } from "react";
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

function CourseCard({ item }: { item: Study }) {
  const Icon = icons[item.place] ?? IconSchool;
  return (
    <article className="flex gap-3 rounded-2xl bg-cream p-4 dark:bg-night-2">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-sun" aria-hidden="true">
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
    </article>
  );
}

export function Study() {
  const [tab, setTab] = useState<"formacao" | "cursos">("formacao");
  const formacao = studies.filter((item) => item.group === "formacao");
  const cursos = studies.filter((item) => item.group === "curso");

  return (
    <section id="estudos" className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">Estudos</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
            Formação e cursos
          </h2>
        </div>
        <div role="tablist" aria-label="Formação e cursos" className="flex gap-6">
          {(
            [
              ["formacao", "Formação"],
              ["cursos", "Cursos e certificações"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`border-b-2 pb-1 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic ${tab === id ? "border-sun text-ink dark:text-white" : "border-transparent text-ink/80 dark:text-white/80"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2" hidden={tab !== "formacao"}>
        {formacao.map((item) => (
          <CourseCard key={item.title} item={item} />
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2" hidden={tab !== "cursos"}>
        {cursos.map((item) => (
          <CourseCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
