"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { IconArrowUpRight } from "@tabler/icons-react";
import { filters, projects } from "@/data/projects";
import type { Project, ProjectTag } from "@/data/types";
import { m } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const ProjectDialog = dynamic(() => import("@/components/ui/ProjectDialog").then((mod) => mod.ProjectDialog), { ssr: false });

const GERAL_PAGE = 12;

type Filter = "Geral" | ProjectTag;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("Geral");
  const [open, setOpen] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const [geralSecond, setGeralSecond] = useState<string | null>(null);
  const [geralThird, setGeralThird] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [filterPick, setFilterPick] = useState<string | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const available = filters.filter((item) => item === "Geral" || projects.some((project) => project.tags.includes(item)));
  const visible = filter === "Geral" ? projects : projects.filter((project) => project.tags.includes(filter));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (filter === "Geral") {
      const others = projects.filter((project) => project.id !== "mirante");
      const first = Math.floor(Math.random() * others.length);
      let second = Math.floor(Math.random() * Math.max(others.length - 1, 1));
      if (second >= first) second += 1;
      setGeralSecond(others[first]?.id ?? null);
      setGeralThird(others[second]?.id ?? null);
      return;
    }
    const pool = projects.filter((project) => project.tags.includes(filter));
    setFilterPick(pool[Math.floor(Math.random() * pool.length)]?.id ?? null);
  }, [filter, mounted]);

  const ordered = useMemo(() => {
    if (filter !== "Geral") {
      if (!filterPick) return visible;
      const featured = visible.find((project) => project.id === filterPick);
      if (!featured) return visible;
      return [featured, ...visible.filter((project) => project.id !== filterPick)];
    }
    const mirante = visible.find((project) => project.id === "mirante");
    const second = geralSecond ? visible.find((project) => project.id === geralSecond) : undefined;
    const third = geralThird ? visible.find((project) => project.id === geralThird) : undefined;
    const rest = visible.filter((project) => project.id !== "mirante" && project.id !== geralSecond && project.id !== geralThird);
    return [mirante, ...rest.slice(0, 4), second, ...rest.slice(4, 8), third, ...rest.slice(8)].filter((project): project is Project => Boolean(project));
  }, [filter, visible, filterPick, geralSecond, geralThird]);

  const shown = filter === "Geral" && !showAll ? ordered.slice(0, GERAL_PAGE) : ordered;

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <SectionHeading title="Projetos" />
      <div role="tablist" aria-label="Filtros de projetos" className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {available.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => {
              setFilter(item);
              setShowAll(false);
            }}
            className={`relative isolate shrink-0 rounded-full px-3 py-2 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.06em] italic transition-colors duration-300 ${filter === item ? "text-white dark:text-ink" : "text-ink/80 hover:text-ink dark:text-white/80 dark:hover:text-white"}`}
          >
            {filter === item && (
              <m.span
                layoutId="project-filter"
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-ink dark:bg-sun"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {item}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-ink/70 dark:text-white/70">Ainda não tem projeto neste filtro.</p>
      ) : (
        <div className="mt-8 grid grid-flow-dense gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((project, cardIndex) => {
            const geralLead = filter === "Geral" && project.id === "mirante";
            const geralInverse = filter === "Geral" && project.id === geralSecond;
            const geralThirdLead = filter === "Geral" && project.id === geralThird;
            const filterLead = filter !== "Geral" && project.id === filterPick;
            const large = geralLead || geralInverse || geralThirdLead || filterLead;
            const place = geralInverse ? "xl:col-start-2" : "";
            return (
            <m.button
              key={project.id}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open?.id === project.id}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setOpen(project);
              }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: (cardIndex % 3) * 0.08, ease: EASE }}
              className={`project-card group cursor-pointer text-left ${large ? `sm:col-span-2 xl:col-span-2 ${place}` : ""}`}
            >
              <Tilt max={large ? 3 : 5}>
                <div className="rounded-2xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_50px_-12px_rgba(43,30,32,0.28)]">
                  <DeviceMockup {...(project.cover ?? project.images[0])} hover wide={large} />
                </div>
              </Tilt>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/80 dark:text-white/80">{project.summary}</p>
              {project.notice && (
                <p className="mt-3 rounded-xl border border-ink/15 bg-sun/35 px-3 py-2 text-sm leading-relaxed text-ink dark:border-white/20 dark:bg-white/10 dark:text-white">
                  {project.notice}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 font-label text-xs font-extrabold tracking-[0.08em] text-ember-ink uppercase italic">
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1.5px]">
                  Ver projeto
                </span>
                <IconArrowUpRight size={16} stroke={1.75} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </m.button>
            );
          })}
        </div>
      )}
      {filter === "Geral" && !showAll && ordered.length > GERAL_PAGE && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full bg-sun px-5 py-3 font-label text-xs font-extrabold tracking-[0.08em] text-ink uppercase italic hover:bg-ember"
          >
            Ver mais projetos
          </button>
        </div>
      )}
      {open && (
        <ProjectDialog
          key={open.id}
          project={open}
          returnFocus={trigger.current}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
