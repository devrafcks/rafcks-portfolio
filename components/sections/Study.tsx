"use client";

import { useState } from "react";
import { studies } from "@/data/courses";

export function Study() {
  const [group, setGroup] = useState<"formacao" | "curso">("formacao");
  const visible = studies.filter((item) => item.group === group);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember italic">Estudos</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
            Formação e cursos
          </h2>
        </div>
        <div role="tablist" aria-label="Formação e cursos" className="flex gap-6">
          {(
            [
              ["formacao", "Formação"],
              ["curso", "Cursos"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={group === id}
              onClick={() => setGroup(id)}
              className={`border-b-2 pb-1 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic ${group === id ? "border-sun text-ink dark:text-white" : "border-transparent text-ink/50 dark:text-white/50"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {visible.map((item) => (
          <article key={item.title}>
            <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-1 font-label text-xs font-extrabold uppercase tracking-[0.06em] text-ink/60 italic dark:text-white/60">
              {item.place} · {item.period}
            </p>
            <p className="mt-3 leading-relaxed text-ink/85 dark:text-white/80">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
