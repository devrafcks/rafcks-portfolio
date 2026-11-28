"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { IconPlus } from "@tabler/icons-react";
import type { Study, StudyArea, StudyLink } from "@/data/types";
import { EASE } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IssuerMarks } from "@/components/ui/IssuerLogo";
import { useI18n } from "@/lib/i18n/I18nProvider";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const VISIBLE = 8;
const areas = ["all", "frontend", "backend", "ia", "carreira", "design"] as const;
type AreaFilter = (typeof areas)[number];

/** Formação: cartões grandes, com número, selo de andamento e o texto completo. */
function DegreeCard({ item, index }: { item: Study; index: number }) {
  const { t } = useI18n();
  const ongoing = item.status === "andamento";
  return (
    <m.article
      initial={{ opacity: 0, y: 28, rotate: index % 2 ? 1.2 : -1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-ink/12 bg-paper p-6 transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_44px_-20px_rgba(43,30,32,0.3)] sm:p-7 dark:border-white/12 dark:bg-night dark:hover:border-white/30"
    >
      {/* número grande vazado no canto, como marca d'água */}
      <span
        aria-hidden="true"
        className="study-number pointer-events-none absolute -top-3 right-4 font-display text-[5.5rem] leading-none font-bold transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-4deg]"
      >
        {pad(index)}
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {item.status && (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-label text-[0.64rem] font-extrabold tracking-[0.08em] uppercase italic ${ongoing ? "bg-sun text-ink" : "bg-ink text-sun dark:bg-white dark:text-ink"}`}
          >
            <span aria-hidden="true" className={`size-1.5 rounded-full ${ongoing ? "live-dot bg-ink" : "bg-sun dark:bg-ink"}`} />
            {t.study.status[item.status]}
          </span>
        )}
        <span className="font-label text-[0.7rem] font-extrabold tracking-[0.06em] text-ink/75 uppercase italic dark:text-white/75">{item.period}</span>
      </div>
      <h3 className="relative mt-5 max-w-[22ch] font-display text-[clamp(1.2rem,1rem+0.6vw,1.55rem)] leading-tight font-semibold tracking-[-0.03em]">
        {item.title}
      </h3>
      <p className="mt-2 font-label text-xs font-extrabold tracking-[0.04em] text-ember-ink uppercase italic">{item.place}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink/85 dark:text-white/80">{item.text}</p>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-sun transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
    </m.article>
  );
}

function studyLinkLabel(link: StudyLink, labels: { credential: string; repo: string; site: string }) {
  if (link.kind === "credential") return labels.credential;
  const prefix = link.kind === "repo" ? labels.repo : labels.site;
  return link.name ? `${prefix} · ${link.name}` : prefix;
}

/** Curso: uma linha com número, logo e escola; o texto abre como sanfona. */
function CourseRow({ item, index }: { item: Study; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const { t } = useI18n();
  const meta = [item.place, item.period].filter(Boolean).join(" · ");
  return (
    <m.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.04, ease: EASE }}
      className="border-b border-ink/12 dark:border-white/12"
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="group grid w-full grid-cols-[1.4rem_2.75rem_minmax(0,1fr)_auto] items-center gap-2.5 py-3.5 text-left sm:grid-cols-[2.2rem_3.75rem_minmax(0,1fr)_auto] sm:gap-4 sm:py-4"
        >
          <span className="font-label text-xs font-extrabold text-ink/50 italic tabular-nums dark:text-white/50">{pad(index)}</span>
          <IssuerMarks ids={item.issuers} title={item.title} />
          <span className="min-w-0">
            <span className="block font-display text-[clamp(1rem,0.92rem+0.3vw,1.2rem)] leading-tight font-semibold tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
              {item.title}
            </span>
            {meta && (
              <span className="mt-1 block font-label text-[0.7rem] font-extrabold tracking-[0.04em] text-ink/75 uppercase italic dark:text-white/75">
                {meta}
              </span>
            )}
          </span>
          <span
            aria-hidden="true"
            className={`grid size-9 place-items-center rounded-full border transition-colors duration-300 ${open ? "border-sun bg-sun text-ink" : "border-ink/20 group-hover:border-ink dark:border-white/25 dark:group-hover:border-white"}`}
          >
            <IconPlus size={16} stroke={2.25} className={`transition-transform duration-500 ${open ? "rotate-45" : ""}`} />
          </span>
        </button>
      </h3>
      <div
        id={id}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pl-[calc(1.4rem+2.75rem+1.25rem)] sm:pl-[calc(2.2rem+3.75rem+2rem)] sm:pr-14">
            <p className="max-w-3xl text-sm leading-relaxed text-ink/85 dark:text-white/80">{item.text}</p>
            {item.links && item.links.length > 0 && (
              <ul className="mt-3 flex max-w-3xl flex-wrap gap-x-4 gap-y-1.5">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-ember-ink underline-offset-2 hover:underline">
                      {studyLinkLabel(link, t.study.links)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </m.li>
  );
}

function CourseList({ courses }: { courses: Study[] }) {
  const { t } = useI18n();
  const [area, setArea] = useState<AreaFilter>("all");
  const [more, setMore] = useState(false);
  const panelId = useId();
  const counts = {
    all: courses.length,
    frontend: courses.filter((item) => item.areas?.includes("frontend")).length,
    backend: courses.filter((item) => item.areas?.includes("backend")).length,
    ia: courses.filter((item) => item.areas?.includes("ia")).length,
    carreira: courses.filter((item) => item.areas?.includes("carreira")).length,
    design: courses.filter((item) => item.areas?.includes("design")).length,
  };
  const available = areas.filter((id) => id === "all" || counts[id] > 0);
  const filtered = area === "all" ? courses : courses.filter((item) => item.areas?.includes(area as StudyArea));
  const collapsible = filtered.length > VISIBLE + 1;
  const head = collapsible ? filtered.slice(0, VISIBLE) : filtered;
  const tail = collapsible ? filtered.slice(VISIBLE) : [];

  return (
    <div>
      <div role="group" aria-label={t.study.filtersLabel} className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {available.map((id) => {
          const selected = area === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setArea(id);
                setMore(false);
              }}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 font-label text-[0.72rem] font-extrabold tracking-[0.06em] uppercase italic transition-colors duration-300 ${selected ? "bg-ink text-sun dark:bg-white dark:text-ink" : "bg-ink/5 text-ink/75 hover:text-ink dark:bg-white/8 dark:text-white/75 dark:hover:text-white"}`}
            >
              {t.study.areas[id]}
              <span className={`tabular-nums not-italic ${selected ? "text-sun/80 dark:text-ink/70" : "text-ink/45 dark:text-white/45"}`}>{counts[id]}</span>
            </button>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-ink/70 dark:text-white/70">{t.study.empty}</p>
      ) : (
        <>
          <ul className="border-t border-ink/12 dark:border-white/12">
            {head.map((item, index) => (
              <CourseRow key={item.title} item={item} index={index} />
            ))}
          </ul>
          {collapsible && (
            <>
              <div
                id={panelId}
                inert={!more}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${more ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <ul className="overflow-hidden">
                  {tail.map((item, index) => (
                    <CourseRow key={item.title} item={item} index={index + VISIBLE} />
                  ))}
                </ul>
              </div>
              <button
                type="button"
                aria-expanded={more}
                aria-controls={panelId}
                onClick={() => setMore((value) => !value)}
                className="group mt-5 inline-flex items-center gap-2 font-label text-xs font-extrabold tracking-[0.08em] text-ember-ink uppercase italic"
              >
                <span className="grid size-6 place-items-center rounded-full bg-ink text-sun transition-colors duration-300 group-hover:bg-sun group-hover:text-ink dark:bg-white dark:text-ink">
                  <IconPlus size={14} stroke={2.5} aria-hidden="true" className={`transition-transform duration-500 ${more ? "rotate-45" : ""}`} />
                </span>
                {more ? t.study.less : `${t.study.more} (${tail.length})`}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

const tabs = ["formacao", "cursos"] as const;

export function Study({ studies }: { studies: Study[] }) {
  const { t } = useI18n();
  const [tab, setTab] = useState<"formacao" | "cursos">("formacao");
  const formacao = studies.filter((item) => item.group === "formacao");
  const cursos = studies.filter((item) => item.group === "curso");
  const counts = { formacao: formacao.length, cursos: cursos.length };

  return (
    <section id="estudos" className="shell py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading title={t.study.title} />
        <div role="tablist" aria-label={t.study.title} className="relative flex gap-1 rounded-full bg-ink/5 p-1 dark:bg-white/8">
          {tabs.map((id) => (
            <button
              key={id}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`painel-${id}`}
              onClick={() => setTab(id)}
              className={`relative isolate inline-flex items-center gap-2 rounded-full px-4 py-2 font-label text-[0.72rem] font-extrabold tracking-[0.06em] uppercase italic transition-colors duration-300 ${tab === id ? "text-ink" : "text-ink/75 hover:text-ink dark:text-white/75 dark:hover:text-white"}`}
            >
              {tab === id && (
                <m.span
                  layoutId="study-tab"
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-sun"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t.study.tabs[id]}
              <span
                className={`grid min-w-5 place-items-center rounded-full px-1.5 text-[0.62rem] tabular-nums not-italic ${tab === id ? "bg-ink text-sun" : "bg-ink/10 dark:bg-white/15"}`}
              >
                {counts[id]}
              </span>
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
          className="mt-10"
        >
          {tab === "formacao" ? (
            <div className="grid gap-5 md:grid-cols-2">
              {formacao.map((item, index) => (
                <DegreeCard key={item.title} item={item} index={index} />
              ))}
            </div>
          ) : (
            <CourseList courses={cursos} />
          )}
        </m.div>
      </AnimatePresence>
    </section>
  );
}
