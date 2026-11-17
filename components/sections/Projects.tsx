"use client";

import { useRef, useState } from "react";
import { filters, projects } from "@/data/projects";
import type { Project, ProjectTag } from "@/data/types";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { ProjectDialog } from "@/components/ui/ProjectDialog";
import { Tag } from "@/components/ui/Tag";

type Filter = "Geral" | ProjectTag;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("Geral");
  const [open, setOpen] = useState<Project | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const visible = filter === "Geral" ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-20 sm:px-10 lg:px-0">
      <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember italic">Trabalho</p>
      <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
        Projetos
      </h2>
      <div role="tablist" aria-label="Filtros de projetos" className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={`shrink-0 rounded-full px-3 py-2 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.06em] italic ${filter === item ? "bg-ink text-white dark:bg-sun dark:text-ink" : "text-ink/70 dark:text-white/70"}`}
          >
            {item}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-ink/70 dark:text-white/70">Nenhum projeto verificado neste filtro.</p>
      ) : (
        <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <button
              key={project.id}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open?.id === project.id}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setOpen(project);
              }}
              className="text-left"
            >
              <DeviceMockup {...project.images[0]} />
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/75 dark:text-white/75">{project.summary}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </button>
          ))}
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
