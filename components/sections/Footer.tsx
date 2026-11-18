"use client";

import dynamic from "next/dynamic";
import { FooterHat } from "@/components/art/FooterHat";
import { NearView } from "@/components/motion/NearView";
import type { CrewMember, FooterColumn } from "@/components/ui/doodle-crew-footer";
import type { Dict } from "@/lib/i18n/dictionaries/pt";
import { useI18n } from "@/lib/i18n/I18nProvider";

const DoodleCrewFooter = dynamic(() => import("@/components/ui/doodle-crew-footer"), { ssr: false });

// B L A N C O → índices 0 a 5. O topo do B fica livre: é onde o chapéu pousa.
const CNPJ = "CNPJ 65.605.980/0001-00";

const crewOf = (t: Dict["footer"]): CrewMember[] => [
  { kind: "bird", letter: 4, seat: "top", offset: 0.1, name: "Pip", says: t.crew.bird },
  { kind: "kid", letter: 2, seat: "top", offset: -0.05, name: "Juno", says: t.crew.kid },
  { kind: "ghost", letter: 3, seat: "behind", offset: 0, name: "Bu", says: t.crew.ghost },
  { kind: "cat", letter: 5, seat: "front", offset: 0.42, flip: true, name: "Patch", says: t.crew.cat },
];

const columnsOf = (t: Dict["footer"]): FooterColumn[] => [
  {
    title: t.columns.site,
    links: [
      { label: t.links.inicio, href: "#inicio" },
      { label: t.links.sobre, href: "#sobre" },
      { label: t.links.experiencia, href: "#experiencia" },
      { label: t.links.estudos, href: "#estudos" },
    ],
  },
  {
    title: t.columns.work,
    links: [
      { label: t.links.projetos, href: "#projetos" },
      { label: t.links.recomendacoes, href: "#recomendacoes" },
      { label: t.links.contato, href: "#contato" },
    ],
  },
  {
    title: t.columns.social,
    links: [
      { label: "GitHub", href: "https://github.com/devrafcks", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", external: true },
      { label: "LinkBio", href: "https://devrafcks.github.io/Linkbio/", external: true },
    ],
  },
];

/** Versão simples que já vem no HTML (SEO e sem JS) e segura o espaço até o footer animado chegar. */
function StaticFooter({ t }: { t: Dict["footer"] }) {
  const columns = columnsOf(t);
  return (
    <footer className="mx-auto flex min-h-[680px] max-w-[1360px] flex-col gap-10 px-[clamp(16px,4vw,56px)] pt-14">
      <div className="grid gap-8 sm:grid-cols-[1.1fr_2fr]">
        <div>
          <p className="font-display text-lg font-bold">Rafael Henrique Blanco</p>
          <p className="mt-2 text-sm text-ink/80 dark:text-white/80">{t.blurb}</p>
        </div>
        <nav aria-label={t.navLabel} className="grid grid-cols-2 gap-6 sm:grid-cols-3">
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
      <p className="mt-auto pb-6 text-sm text-ink/80 dark:text-white/80">{t.copyright} · {CNPJ}</p>
    </footer>
  );
}

export function Footer() {
  const t = useI18n().t.footer;
  return (
    <NearView className="relative pb-24" fallback={<StaticFooter t={t} />}>
      <DoodleCrewFooter
        wordmark="BLANCO"
        brand="Rafael Henrique Blanco"
        blurb={t.blurb}
        tagline={t.tagline}
        columns={columnsOf(t)}
        actions={[
          { label: t.actions.projects, href: "#projetos", icon: "star", variant: "outline" },
          { label: t.actions.talk, href: "#contato", icon: "bolt", variant: "solid" },
        ]}
        copyright={`${t.copyright} · ${CNPJ}`}
        backToTopLabel={t.backToTop}
        navLabel={t.navLabel}
        crewLabel={t.crewLabel}
        crew={crewOf(t)}
        doodles={["star", "bolt", "flame", "sparkle"]}
        doodleCount={9}
        palette={{ background: "var(--site-bg)", ink: "var(--site-ink)", accent: "#ff7f1a" }}
        fontFamily="var(--font-unbounded), ui-sans-serif, sans-serif"
        fontWeight={800}
        serifFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        tracking={-0.03}
        height="680px"
      />
      {/* no celular o chapéu já está pousado no B */}
      <FooterHat />
    </NearView>
  );
}
