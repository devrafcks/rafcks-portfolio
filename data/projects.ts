import type { Project, ProjectTag } from "./types";

const laptop = (src: string, alt: string) => ({ src, alt, device: "laptop" as const });
const phone = (src: string, alt: string) => ({ src, alt, device: "phone" as const });

const mirante = (file: string, alt: string, tall = false, width = 1600, height = 893) => ({
  src: `/images/projects/${file}`,
  alt,
  device: "laptop" as const,
  tall,
  width,
  height,
});

const miranteShots = [
  mirante("mirante-01-dashboard.webp", "Dashboard: KPIs e gráficos", true, 1400, 1915),
  mirante("mirante-01b-faturamento.webp", "Dashboard: faturamento e projeção"),
  mirante("mirante-01c-categorias.webp", "Dashboard: categorias e atividade recente"),
  mirante("mirante-02-estoque.webp", "Produtos e estoque: alertas abaixo do mínimo"),
  mirante("mirante-03-estoque-dashboard.webp", "Dashboard de estoque: produtos abaixo do mínimo"),
  mirante("mirante-04-pdv.webp", "PDV: frente de caixa"),
  mirante("mirante-05-pdv-pagamento.webp", "PDV: pagamento e finalizar venda"),
  mirante("mirante-06-pedidos.webp", "Pedidos de venda"),
  mirante("mirante-07-pedido-novo.webp", "Pedido de venda novo"),
  mirante("mirante-08-orcamento.webp", "Orçamento novo"),
  mirante("mirante-09-orcamentos.webp", "Orçamentos"),
  mirante("mirante-10-receber.webp", "Contas a receber"),
  mirante("mirante-11-pagar.webp", "Contas a pagar"),
  mirante("mirante-12-pessoas.webp", "Cadastro de pessoas"),
  mirante("mirante-13-caixa.webp", "Gestão de caixa"),
  mirante("mirante-16-compras.webp", "Solicitações de compra"),
  mirante("mirante-17-compra-nova.webp", "Solicitação de compra nova"),
  mirante("mirante-18-compra-aprovar.webp", "Solicitação de compra: aprovar ou rejeitar"),
  mirante("mirante-19-xml.webp", "Entrada de mercadorias por XML"),
  mirante("mirante-21-config.webp", "Configurações"),
  mirante("mirante-22-busca.webp", "Busca global, Ctrl+K"),
  mirante("mirante-23-empresas.webp", "Empresas e filiais"),
  mirante("mirante-24-usuarios.webp", "Usuários e permissões"),
  mirante("mirante-25-auditoria.webp", "Log de auditoria"),
  mirante("mirante-26-tema.webp", "Personalização de tema"),
];

export const filters: Array<"Geral" | ProjectTag> = [
  "Geral",
  "Landing pages",
  "Sites",
  "Apps",
  "PWA",
  "SaaS",
  "E-commerce",
  "Sistemas",
  "Extensões",
];

export const projects: Project[] = [
  {
    id: "t2",
    title: "T2 Educação",
    summary:
      "Cuido da tecnologia da T2: o Hub interno, as integrações, o site, o blog, a documentação e as landing pages. A plataforma nova do aluno é de outro time e não entra aqui.",
    points: [
      "Hub em Next.js com Pages Router e API Routes, React, TypeScript, Tailwind, Radix e o design system Midas, com NextAuth, Supabase e PostgreSQL.",
      "Módulos de tarefas, atendimento, financeiro com conciliação, marketing, contatos, afiliados, biblioteca de aulas, B2B, posts, blog, redes e vídeos verticais.",
      "Site, blog, docs e landing pages em Next.js 16, React 19, Tailwind, GSAP, Three.js e shadcn, com Core Web Vitals, SEO técnico e acessibilidade.",
      "Infra em Vercel, Supabase, Cloudflare e CI/CD. IA com Crisp AI, agentes via MCP e RAG.",
      "Integrações: Crisp e Crisp AI, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas, Instagram Graph API, YouTube Analytics, WhatsApp, Google Reviews, importação ANBIMA, GitHub, Cloudflare Turnstile e GA4.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Cloudflare", "Vercel"],
    tags: ["Sites", "Landing pages", "Sistemas"],
    links: [
      { href: "https://t2.com.br", label: "Site", kind: "site" },
      { href: "https://blog.t2.com.br", label: "Blog", kind: "blog" },
    ],
    images: [
      laptop("/images/projects/t2-home.webp", "Página inicial do site da T2 Educação"),
      laptop("/images/projects/t2-baixo.webp", "Trecho interno da página da T2 Educação"),
      laptop("/images/projects/t2-blog.webp", "Blog da T2 Educação"),
      phone("/images/projects/t2-mobile.webp", "Site da T2 Educação no celular"),
    ],
  },
  {
    id: "t2-blog",
    title: "Blog T2",
    summary:
      "Blog de artigos, guias e conteúdos sobre carreira, certificações e mercado financeiro. O conteúdo vem do Ghost, em modo headless.",
    points: [
      "Next.js 16 com App Router, React 19, TypeScript e Tailwind CSS 4.",
      "SEO técnico, Core Web Vitals e GA4.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Ghost", "GA4"],
    tags: ["Sites"],
    links: [{ href: "https://blog.t2.com.br", label: "Ver site", kind: "blog" }],
    images: [
      laptop("/images/projects/t2-blog-home.webp", "Página inicial do Blog T2"),
      laptop("/images/projects/t2-blog-artigo.webp", "Artigo público do Blog T2 sobre a prova C-Pro R"),
    ],
  },
  {
    id: "t2-docs",
    title: "T2 Materiais Gratuitos",
    summary:
      "Portal de apostilas, simulados e resumos gratuitos para certificações financeiras, como CPA, C-Pro, CFP e ANCORD.",
    points: ["Next.js com Ghost em modo headless. Os materiais publicados são de estudo, sem dados de alunos."],
    stack: ["Next.js", "Ghost"],
    tags: ["Sites", "Sistemas"],
    links: [{ href: "https://docs.t2.com.br", label: "Ver site", kind: "site" }],
    images: [
      laptop("/images/projects/t2-docs-home.webp", "Página inicial dos materiais gratuitos da T2"),
      laptop("/images/projects/t2-docs-materiais.webp", "Lista pública de materiais gratuitos da T2"),
    ],
  },
  {
    id: "mirante",
    title: "Mirante ERP",
    summary: "ERP completo com PDV, financeiro, estoque, compras e notas fiscais, multiempresa.",
    points: [
      "Os prints são de uma conta de teste, com dados fictícios.",
      "Dashboard executivo com KPIs, gráficos, faturamento, projeção, categorias e atividade recente.",
      "PDV com frente de caixa e pagamento, pedidos de venda e orçamentos.",
      "Financeiro com contas a pagar, contas a receber e caixa. Estoque com alertas de produtos abaixo do mínimo.",
      "Compras com solicitação, aprovação ou rejeição, e entrada de mercadorias por XML.",
      "Notas fiscais, multiempresa e filiais, usuários e permissões, log de auditoria, busca global com Ctrl+K e personalização de tema.",
    ],
    stack: ["Next.js"],
    tags: ["Sistemas", "SaaS"],
    links: [{ href: "https://miranteerp.com.br", label: "Site", kind: "site" }],
    images: miranteShots,
    cover: mirante("mirante-01b-faturamento.webp", "Dashboard: faturamento e projeção"),
  },
  {
    id: "carretel",
    title: "Carretel",
    summary:
      "SaaS próprio, em pré-lançamento. Caderno digital para oficinas de costura: registrar o corte, comprovar a entrega e organizar a cobrança pelo celular, inclusive sem sinal.",
    points: ["A aplicação publicada é feita em Next.js."],
    stack: ["Next.js"],
    tags: ["SaaS", "Sites", "PWA"],
    links: [{ href: "https://carretel.vercel.app", label: "Site", kind: "site" }],
    images: [
      laptop("/images/projects/carretel.webp", "Página inicial do Carretel"),
      laptop("/images/projects/carretel-passos.webp", "Seção de como o Carretel funciona"),
      phone("/images/projects/carretel-mobile.webp", "Carretel no celular"),
    ],
  },
  {
    id: "cresce",
    title: "Cresce+ Futuro",
    summary:
      "SaaS para micro e pequenos negócios organizarem estoque, vendas, tarefas e equipe. Reestruturei o produto e a infraestrutura.",
    points: [
      "Next.js 16, Tailwind, Mercado Pago e autenticação.",
      "Saí de Azure, Railway e Hostinger para Neon e Vercel. A troca reduziu mais de R$ 400 por mês.",
    ],
    stack: ["Next.js", "Tailwind", "Mercado Pago", "PostgreSQL"],
    tags: ["SaaS", "Sistemas"],
    links: [{ href: "https://crescemaistech.com.br/", label: "Site", kind: "site" }],
    images: [
      laptop("/images/projects/cresce.webp", "Página da Cresce+ Futuro"),
      phone("/images/projects/cresce-mobile.webp", "Cresce+ Futuro no celular"),
    ],
  },
  {
    id: "xerox",
    title: "Xerox Manager",
    summary:
      "Sistema para gráfica no lugar do vale-caixa de papel. O funcionário lança cópias, impressões e encadernações. O estoque baixa a cada operação e há relatórios em PDF. O SeeB entra na interface.",
    points: ["Next.js, Prisma, PostgreSQL, JWT e interface com shadcn e Tailwind."],
    stack: ["Next.js", "Prisma", "PostgreSQL", "JWT"],
    tags: ["Sistemas"],
    links: [
      { href: "https://sistema-grafica.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/sistema-grafica", label: "Repositório", kind: "repo" },
    ],
    images: [laptop("/images/projects/xerox.webp", "Tela de acesso do Xerox Manager")],
  },
  {
    id: "somnus",
    title: "Somnus",
    summary: "Aplicação web para registrar o sono e ver padrões, com gráficos e conta por usuário. O SeeB faz parte da interface.",
    points: ["Next.js, Prisma, PostgreSQL, Clerk e Tailwind."],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk"],
    tags: ["Sites"],
    links: [
      { href: "https://somnus-track.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/somnus-next", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/somnus.webp", "Página inicial do Somnus"),
      phone("/images/projects/somnus-mobile.webp", "Somnus no celular"),
    ],
  },
  {
    id: "bicus",
    title: "Bicus",
    summary:
      "Aplicativo de serviços, produtos, aluguéis e lojas da cidade, com mapa e chat. Está na App Store e na Google Play. A versão web usa Expo e React Native.",
    points: ["Na loja, o app descreve busca por proximidade, vendedores verificados e conversa dentro do aplicativo."],
    stack: ["Expo", "React Native"],
    tags: ["Apps", "PWA", "E-commerce"],
    links: [
      { href: "https://bicus.com.br", label: "Site", kind: "site" },
      { href: "https://apps.apple.com/br/app/bicus/id6802697550", label: "App Store", kind: "apple" },
      { href: "https://play.google.com/store/apps/details?id=com.bicus.app&hl=pt_BR", label: "Google Play", kind: "play" },
    ],
    images: [
      laptop("/images/projects/bicus.webp", "Versão web do Bicus"),
      phone("/images/projects/bicus-mobile.webp", "Bicus no celular, versão web"),
      laptop("/images/projects/bicus-playpage.webp", "Página do Bicus na Google Play"),
      phone("/images/projects/bicus-play-1.webp", "Tela do Bicus publicada na Google Play"),
      phone("/images/projects/bicus-play-2.webp", "Outra tela do Bicus publicada na Google Play"),
      phone("/images/projects/bicus-ios-1.webp", "Tela do Bicus publicada na App Store"),
      phone("/images/projects/bicus-ios-2.webp", "Outra tela do Bicus publicada na App Store"),
    ],
  },
  {
    id: "apertou",
    title: "Apertou Comprou",
    summary:
      "Marketplace para comprar de lojas da cidade pelo celular, com chat, pedido condicional e pagamento por Pix ou cartão. Tem site, App Store e Google Play.",
    points: ["A página da loja descreve receber em casa ou retirar no local, e pedir peças para provar antes de pagar."],
    stack: [],
    tags: ["Apps", "Landing pages", "E-commerce"],
    links: [
      { href: "https://apertoucomprou.com.br/lp", label: "Site", kind: "site" },
      { href: "https://apps.apple.com/us/app/apertou-comprou/id6774382208", label: "App Store", kind: "apple" },
      { href: "https://play.google.com/store/apps/details?id=com.apertoucomprou.app&hl=pt_BR", label: "Google Play", kind: "play" },
    ],
    images: [
      laptop("/images/projects/apertou.webp", "Página do Apertou Comprou"),
      laptop("/images/projects/apertou-baixo.webp", "Trecho da página do Apertou Comprou"),
      phone("/images/projects/apertou-mobile.webp", "Apertou Comprou no celular"),
      laptop("/images/projects/apertou-appstore.webp", "Página do Apertou Comprou na App Store"),
      laptop("/images/projects/apertou-playpage.webp", "Página do Apertou Comprou na Google Play"),
      phone("/images/projects/apertou-ios-1.webp", "Tela do app publicada na App Store"),
      phone("/images/projects/apertou-ios-2.webp", "Outra tela do app publicada na App Store"),
      phone("/images/projects/apertou-play-1.webp", "Tela do app publicada na Google Play"),
      phone("/images/projects/apertou-play-2.webp", "Outra tela do app publicada na Google Play"),
    ],
  },
  {
    id: "junto",
    title: "Junto",
    summary:
      "Aplicativo para encontrar treinos de corrida em grupo na cidade, confirmar presença, criar treinos e conversar no chat do grupo. Dá para conectar o Strava. Na Google Play o nome é Corra junto.",
    points: ["A página da loja também cita treinos filtrados por distância, horário e ritmo, e treinos exclusivos para mulheres."],
    stack: [],
    tags: ["Apps", "PWA"],
    links: [
      { href: "https://play.google.com/store/apps/details?id=br.com.juntoapp.app&hl=pt_BR", label: "Google Play", kind: "play" },
    ],
    images: [
      laptop("/images/projects/junto-playpage.webp", "Página do Junto na Google Play"),
      phone("/images/projects/junto-play-1.webp", "Tela do Junto publicada na Google Play"),
      phone("/images/projects/junto-play-2.webp", "Outra tela do Junto publicada na Google Play"),
      phone("/images/projects/junto-play-3.webp", "Terceira tela do Junto publicada na Google Play"),
    ],
  },
  {
    id: "voxx",
    title: "Agência Voxx",
    summary:
      "Site da Agência Voxx, de marketing digital em Itapetininga. A página apresenta planejamento, redes sociais, identidade visual e tráfego pago.",
    points: ["Next.js 16, React 19, TypeScript, Tailwind CSS e Framer Motion, conferidos no repositório público e no site no ar."],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    tags: ["Sites"],
    links: [
      { href: "https://www.agenciavoxx.com.br/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/site-agencia-voxx", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/voxx.webp", "Página inicial da Agência Voxx"),
      laptop("/images/projects/voxx-baixo.webp", "Serviços na página da Agência Voxx"),
      phone("/images/projects/voxx-mobile.webp", "Agência Voxx no celular"),
    ],
  },
  {
    id: "jotape",
    title: "Jotape Relógios",
    summary: "Loja de relógios originais, projeto freelance. Catálogo por marca, busca, acompanhamento de pedido e atendimento pelo WhatsApp.",
    points: ["A stack não aparece no site público, então não está listada aqui."],
    stack: [],
    tags: ["E-commerce", "Sites", "PWA"],
    links: [{ href: "https://jotaperelogios.store", label: "Site", kind: "site" }],
    images: [
      laptop("/images/projects/jotape.webp", "Página da Jotape Relógios"),
      laptop("/images/projects/jotape-baixo.webp", "Catálogo da Jotape Relógios"),
      phone("/images/projects/jotape-mobile.webp", "Jotape Relógios no celular"),
    ],
  },
  {
    id: "seeb",
    title: "SeeB",
    summary:
      "Extensão para Chromium, Manifest V3, e widget de uma linha. Foi o TCC na ETEC Parque Belém. Ajusta fonte e contraste, filtros de daltonismo, guia de leitura, cursor ampliado e pausa de animações. Não coleta dados.",
    points: ["O widget entra com uma linha de script. A página e a extensão são JavaScript, sem framework."],
    stack: ["JavaScript", "Manifest V3"],
    tags: ["Extensões"],
    links: [
      { href: "https://seeb-page.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/seeb-widget", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/seeb-hero.webp", "Abertura da página do SeeB"),
      laptop("/images/projects/seeb-recursos.webp", "Recursos do SeeB"),
    ],
  },
];
