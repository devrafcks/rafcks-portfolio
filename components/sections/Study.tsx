import {
  IconBook,
  IconBrush,
  IconCertificate,
  IconCode,
  IconDeviceLaptop,
  IconHash,
  IconLanguage,
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
  "United Idiomas": IconLanguage,
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
        <p className="mt-1 text-sm leading-snug text-ink/85 dark:text-white/80">{item.text}</p>
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
  const livres = studies.filter((item) => item.group === "curso" && item.track !== "certificacao");
  const certificacoes = studies.filter((item) => item.group === "curso" && item.track === "certificacao");
  const formacao = studies.filter((item) => item.group === "formacao");

  return (
    <section id="estudos" className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">Estudos</p>
      <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
        Formação e cursos
      </h2>
      <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.03em]">Formação</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {formacao.map((item) => (
          <article key={item.title} className="rounded-2xl bg-cream p-4 dark:bg-night-2">
            <h4 className="font-display text-base font-semibold tracking-[-0.02em]">{item.title}</h4>
            <p className="mt-1 font-label text-xs font-extrabold tracking-[0.04em] text-ink/80 uppercase italic dark:text-white/80">
              {item.place} · {item.period}
            </p>
            <p className="mt-1 text-sm leading-snug text-ink/85 dark:text-white/80">{item.text}</p>
          </article>
        ))}
      </div>
      <h3 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">Cursos livres</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {livres.map((item) => (
          <CourseCard key={item.title} item={item} />
        ))}
      </div>
      <h3 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">Certificações</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {certificacoes.map((item) => (
          <CourseCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
