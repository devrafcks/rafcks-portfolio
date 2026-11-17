import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full Stack",
    org: "T2 Educação",
    period: "jun. 2026 até agora",
    mode: "Remoto",
    summary:
      "Cuido da tecnologia da empresa: o Hub interno, as integrações entre plataformas, automações, banco, infraestrutura e a presença digital.",
    did: [
      "Entrei em maio de 2026 no front-end do site e, no mês seguinte, o escopo passou a ser full stack.",
      "Hub em Next.js, React e TypeScript, com módulos de tarefas, atendimento, financeiro, marketing, contatos, afiliados, biblioteca de aulas e B2B.",
      "Site, blog, documentação e landing pages, com performance, SEO técnico, acessibilidade e tracking.",
      "Integrações com Crisp e Crisp AI, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas, Instagram, YouTube, WhatsApp, Google Reviews, ANBIMA, GitHub, Turnstile e GA4.",
    ],
    result: { value: "1 mês", label: "da entrada no front-end à atuação full stack" },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare", "Vercel"],
  },
  {
    role: "Engenheiro de Software, AI-First",
    org: "ByStartup",
    period: "mar. 2026 a ago. 2026",
    mode: "Remoto",
    summary:
      "Produtos SaaS, web e mobile para startups, do requisito ao deploy. O Mirante ERP foi um dos sistemas desse período.",
    did: [
      "MVPs, marketplaces e aplicativos publicados nas lojas.",
      "Infra em VPS com Docker e Coolify, além de pagamentos e autenticação.",
    ],
    stack: ["React", "Next.js", "React Native", "Docker"],
  },
  {
    role: "Desenvolvedor Full Stack",
    org: "Cresce+ Futuro",
    period: "jan. 2026 a mar. 2026",
    mode: "Remoto",
    summary:
      "Reestruturei o SaaS que organiza estoque, vendas, tarefas e equipe de micro e pequenos negócios.",
    did: [
      "Aplicação em Next.js 16, com Tailwind, Mercado Pago e autenticação.",
      "Migração de Azure, Railway e Hostinger para Neon e Vercel.",
    ],
    result: { value: "R$ 400", label: "a menos por mês em infraestrutura" },
    stack: ["Next.js", "Tailwind", "Mercado Pago", "PostgreSQL"],
  },
  {
    role: "Estagiário de marketing",
    org: "Digital LZ",
    period: "ago. 2024 a dez. 2024",
    mode: "Presencial",
    summary: "Redes sociais, campanhas, peças em Photoshop e atendimento da ouvidoria no WhatsApp.",
    did: [],
    stack: ["Photoshop"],
  },
];
