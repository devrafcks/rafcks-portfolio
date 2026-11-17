"use client";

import dynamic from "next/dynamic";
import { NearView } from "@/components/motion/NearView";
import type { CrewMember, FooterColumn } from "@/components/ui/doodle-crew-footer";

const DoodleCrewFooter = dynamic(() => import("@/components/ui/doodle-crew-footer"), { ssr: false });

// B L A N C O → índices 0 a 5. O topo do B fica livre: é onde o chapéu pousa.
const crew: CrewMember[] = [
  { kind: "bird", letter: 4, seat: "top", offset: 0.1, name: "Pip", says: "Piu! Já viu os projetos?" },
  { kind: "kid", letter: 2, seat: "top", offset: -0.05, name: "Juno", says: "Daqui de cima dá pra ver o deploy." },
  { kind: "ghost", letter: 3, seat: "behind", offset: 0, name: "Bu", says: "Bu! …desculpa. Oi." },
  { kind: "cat", letter: 5, seat: "front", offset: 0.42, flip: true, name: "Patch", says: "Bonito esse cursor." },
];

const columns: FooterColumn[] = [
  {
    title: "Site",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Estudos", href: "#estudos" },
    ],
  },
  {
    title: "Trabalho",
    links: [
      { label: "Projetos", href: "#projetos" },
      { label: "Recomendações", href: "#recomendacoes" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Redes",
    links: [
      { label: "GitHub", href: "https://github.com/devrafcks", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", external: true },
      { label: "LinkBio", href: "https://devrafcks.github.io/Linkbio/", external: true },
    ],
  },
];

/** Versão simples que já vem no HTML (SEO e sem JS) e segura o espaço até o footer animado chegar. */
function StaticFooter() {
  return (
    <footer className="mx-auto flex min-h-[680px] max-w-[1360px] flex-col gap-10 px-[clamp(16px,4vw,56px)] pt-14">
      <div className="grid gap-8 sm:grid-cols-[1.1fr_2fr]">
        <div>
          <p className="font-display text-lg font-bold">Rafael Henrique Blanco</p>
          <p className="mt-2 text-sm text-ink/80 dark:text-white/80">Desenvolvedor full stack · SaaS e produtos digitais</p>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.08em]">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/80 dark:text-white/80">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <p className="mt-auto pb-6 text-sm text-ink/80 dark:text-white/80">© 2026 Rafael Blanco</p>
    </footer>
  );
}

export function Footer() {
  return (
    <NearView className="pb-24" fallback={<StaticFooter />}>
      <DoodleCrewFooter
        wordmark="BLANCO"
        brand="Rafael Henrique Blanco"
        blurb="Desenvolvedor full stack · SaaS e produtos digitais"
        tagline="Do problema ao produto no ar."
        columns={columns}
        actions={[
          { label: "Ver projetos", href: "#projetos", icon: "star", variant: "outline" },
          { label: "Vamos conversar", href: "#contato", icon: "bolt", variant: "solid" },
        ]}
        copyright="© 2026 Rafael Blanco"
        backToTopLabel="Voltar ao topo"
        navLabel="Rodapé"
        crewLabel="a turma do rodapé"
        crew={crew}
        doodles={["star", "bolt", "flame", "sparkle"]}
        doodleCount={9}
        palette={{ background: "var(--site-bg)", ink: "var(--site-ink)", accent: "#ff7f1a" }}
        fontFamily="var(--font-unbounded), ui-sans-serif, sans-serif"
        fontWeight={800}
        serifFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        tracking={-0.03}
        height="680px"
      />
    </NearView>
  );
}
