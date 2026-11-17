"use client";

import { IconBriefcase, IconHome, IconLayoutGrid, IconMail, IconUser } from "@tabler/icons-react";
import { m } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#inicio", label: "Início", Icon: IconHome },
  { href: "#sobre", label: "Sobre", Icon: IconUser },
  { href: "#experiencia", label: "Experiência", Icon: IconBriefcase },
  { href: "#projetos", label: "Projetos", Icon: IconLayoutGrid },
  { href: "#contato", label: "Contato", Icon: IconMail },
];

/** Seções que acendem cada item do menu. Estudos conta como Experiência; Recomendações, como Projetos. */
const owners: Record<string, string> = {
  inicio: "#inicio",
  sobre: "#sobre",
  experiencia: "#experiencia",
  estudos: "#experiencia",
  "no-ar": "#projetos",
  projetos: "#projetos",
  recomendacoes: "#projetos",
  contato: "#contato",
};

function useActiveSection() {
  const [active, setActive] = useState("#inicio");
  useEffect(() => {
    const sections = Object.keys(owners)
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    let frame = 0;
    // a seção ativa é a última cujo topo já passou da metade da tela
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.5;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      if (current) setActive(owners[current.id]);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

export function SiteNav() {
  const active = useActiveSection();

  return (
    <>
      <div
        className="nav-in-top pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8"
      >
        <a href="#inicio" className="pointer-events-auto transition-transform duration-500 hover:-rotate-3" aria-label="Rafael Blanco, início">
          <Image src="/images/logo-light.svg" alt="" width={92} height={40} className="h-8 w-auto dark:hidden" />
          <Image src="/images/logo-dark.svg" alt="" width={92} height={40} className="hidden h-8 w-auto dark:block" />
        </a>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Seções"
        className="nav-in-bottom fixed bottom-4 left-1/2 z-40 -translate-x-1/2 flex max-w-[calc(100%-1.5rem)] items-center gap-1 rounded-full bg-ink/95 px-2 py-2 text-white shadow-[0_16px_40px_rgba(43,30,32,0.28)] ring-1 ring-white/10"
      >
        {links.map((link) => {
          const current = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              aria-current={current ? "location" : undefined}
              title={link.label}
              className={`relative isolate inline-flex size-11 items-center justify-center rounded-full transition-colors duration-300 sm:h-auto sm:w-auto sm:px-4 sm:py-2 ${current ? "text-ink" : "hover:bg-white/10"}`}
            >
              {current && (
                <m.span
                  layoutId="nav-pill"
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-sun"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <link.Icon size={22} stroke={1.75} aria-hidden="true" className="sm:hidden" />
              <span className="hidden font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic sm:inline">{link.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
