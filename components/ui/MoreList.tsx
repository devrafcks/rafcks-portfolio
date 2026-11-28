"use client";

import { IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";

/**
 * Lista com marcadores cor de sol que mostra os primeiros itens e guarda o resto atrás
 * de um "Ver mais". O resto já vem no HTML (bom para SEO): fica recolhido com
 * grid-rows 0fr e `inert`, e abre deslizando.
 */
export function MoreList({ items, visible = 3, more, less }: { items: string[]; visible?: number; more: string; less: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  // só recolhe quando sobra mais de um item escondido; esconder um só não compensa o clique
  const collapsible = items.length > visible + 1;
  const head = collapsible ? items.slice(0, visible) : items;
  const tail = collapsible ? items.slice(visible) : [];

  const item = (line: string) => (
    <li key={line} className="relative pl-6">
      <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-[3px] w-3 rounded-full bg-sun" />
      {line}
    </li>
  );

  return (
    <div className="mt-4">
      <ul className="space-y-3 leading-relaxed text-ink/85 dark:text-white/80">{head.map(item)}</ul>
      {collapsible && (
        <>
          <div
            id={id}
            inert={!open}
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <ul className="space-y-3 overflow-hidden pt-3 leading-relaxed text-ink/85 dark:text-white/80">{tail.map(item)}</ul>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen((value) => !value)}
            className="group mt-4 inline-flex items-center gap-2 font-label text-xs font-extrabold tracking-[0.08em] text-ember-ink uppercase italic"
          >
            <span className="grid size-6 place-items-center rounded-full bg-ink text-sun transition-colors duration-300 group-hover:bg-sun group-hover:text-ink dark:bg-white dark:text-ink">
              <IconPlus size={14} stroke={2.5} aria-hidden="true" className={`transition-transform duration-500 ${open ? "rotate-45" : ""}`} />
            </span>
            {open ? less : `${more} (${tail.length})`}
          </button>
        </>
      )}
    </div>
  );
}
