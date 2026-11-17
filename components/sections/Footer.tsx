"use client";

import DoodleCrewFooter, { type CrewMember } from "@/components/ui/doodle-crew-footer";

// B L A N C O → índices 0 a 5. O topo do B fica livre: é onde o chapéu pousa.
const crew: CrewMember[] = [
  { kind: "bird", letter: 4, seat: "top", offset: 0.1, name: "Pip", says: "Piu! Já viu os projetos?" },
  { kind: "kid", letter: 2, seat: "top", offset: -0.05, name: "Juno", says: "Daqui de cima dá pra ver o deploy." },
  { kind: "ghost", letter: 3, seat: "behind", offset: 0, name: "Bu", says: "Bu! …desculpa. Oi." },
  { kind: "cat", letter: 5, seat: "front", offset: 0.42, flip: true, name: "Patch", says: "Bonito esse cursor." },
];

export function Footer() {
  return (
    <div className="pb-24">
      <DoodleCrewFooter
        wordmark="BLANCO"
        brand="Rafael Henrique Blanco"
        blurb="Desenvolvedor full stack · SaaS e produtos digitais"
        tagline="Do problema ao produto no ar."
        columns={[
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
        ]}
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
    </div>
  );
}
