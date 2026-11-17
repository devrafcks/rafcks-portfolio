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
  "IA",
  "Extensões",
  "Jogos",
];

export const projects: Project[] = [
  {
    id: "t2",
    title: "T2 Educação",
    summary:
      "Site institucional da T2 Educação, com cursos preparatórios, páginas de certificações e a área para empresas. A plataforma do aluno é de outro time e não entra aqui.",
    points: [
      "O site público apresenta cursos como CPA, C-Pro e páginas para empresas.",
      "Também cuido do blog, dos materiais gratuitos e das landing pages ligadas a essa presença.",
      "O Hub interno, as integrações e o banco não aparecem nestes prints.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Cloudflare", "Vercel"],
    tags: ["Sites", "Landing pages", "Sistemas"],
    links: [
      { href: "https://t2.com.br", label: "Site", kind: "site" },
      { href: "https://blog.t2.com.br", label: "Blog", kind: "blog" },
    ],
    images: [
      laptop("/images/projects/t2-home-d.webp", "Página inicial do site da T2 Educação"),
      laptop("/images/projects/t2-home-d-2.webp", "Trecho da página inicial da T2 Educação"),
      laptop("/images/projects/t2-cpa-d.webp", "Página do curso CPA no site da T2"),
      laptop("/images/projects/t2-cpa-d-2.webp", "Continuação da página de CPA da T2"),
      laptop("/images/projects/t2-empresas-d.webp", "Página da T2 para empresas"),
      laptop("/images/projects/t2-empresas-d-2.webp", "Trecho da página da T2 para empresas"),
      phone("/images/projects/t2-home-m.webp", "Site da T2 Educação no celular"),
    ],
  },
  {
    id: "t2-blog",
    title: "Blog T2",
    summary:
      "Blog público de artigos e guias sobre carreira, certificações e mercado financeiro.",
    points: [
      "A home destaca matérias como a prova C-Pro R e a lista de artigos.",
      "Há artigos públicos, por exemplo sobre a nova CPA e a C-Pro R, com autoria e data visíveis.",
      "O conteúdo publicado é editorial. Não há dados de alunos nestes prints.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Ghost", "GA4"],
    tags: ["Sites"],
    links: [{ href: "https://blog.t2.com.br", label: "Ver site", kind: "blog" }],
    images: [
      laptop("/images/projects/blog-home-d.webp", "Página inicial do Blog T2"),
      laptop("/images/projects/blog-home-d-2.webp", "Trecho da home do Blog T2"),
      laptop("/images/projects/blog-artigos-d.webp", "Lista de artigos do Blog T2"),
      laptop("/images/projects/blog-artigos-d-2.webp", "Mais artigos do Blog T2"),
      laptop("/images/projects/blog-artigo2-d.webp", "Artigo público sobre a nova CPA"),
      laptop("/images/projects/blog-artigo2-d-2.webp", "Continuação do artigo sobre a nova CPA"),
      phone("/images/projects/blog-home-m.webp", "Blog T2 no celular"),
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
      laptop("/images/projects/docs-home-d.webp", "Página inicial dos materiais gratuitos da T2"),
      laptop("/images/projects/docs-home-d-2.webp", "Trecho da página de materiais gratuitos da T2"),
      laptop("/images/projects/t2-docs-materiais.webp", "Lista pública de materiais gratuitos da T2"),
      phone("/images/projects/docs-home-m.webp", "Materiais gratuitos da T2 no celular"),
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
      "Caderno digital para oficinas de costura: registrar o corte, comprovar a entrega e cobrar pelo celular, inclusive com sinal fraco.",
    points: [
      "Registrar corte com foto, quantidade, preço, prazo e aviamentos, e a produção por pessoa e operação.",
      "Link público para o contratante conferir fotos, grade e valor e confirmar pelo WhatsApp, sem criar conta.",
      "Cobrança com quem está devendo, mensagem de WhatsApp, Pix Copia e Cola e baixa total ou parcial.",
      "O repositório público descreve Next.js 16, React 19, TypeScript, Tailwind 4, Neon Postgres, Drizzle, next-intl e PWA.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Drizzle", "PWA"],
    tags: ["SaaS", "Sites", "PWA"],
    links: [
      { href: "https://carretel.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/Carretel", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/carretel-d.webp", "Página inicial do Carretel"),
      laptop("/images/projects/carretel-d-2.webp", "Trecho da página do Carretel"),
      laptop("/images/projects/carretel.webp", "Outra vista da página do Carretel"),
      laptop("/images/projects/carretel-passos.webp", "Seção de como o Carretel funciona"),
      phone("/images/projects/carretel-m.webp", "Carretel no celular"),
      phone("/images/projects/carretel-mobile.webp", "Outra tela do Carretel no celular"),
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
      laptop("/images/projects/cresce-d.webp", "Página da Cresce+ Futuro"),
      phone("/images/projects/cresce-m.webp", "Cresce+ Futuro no celular"),
    ],
  },
  {
    id: "xerox",
    title: "Xerox Manager",
    summary:
      "Sistema de produção para gráfica. Substitui o vale-caixa de papel: o funcionário lança o serviço e o administrador acompanha a equipe.",
    points: [
      "Dois perfis: administrador, que cuida de funcionários, produtos, estoque e relatórios, e funcionário, que registra o dia.",
      "Busca de produto por código, com nome e preço preenchidos, e estoque que baixa a cada lançamento.",
      "Relatórios em Excel e PDF. O repositório cita Next.js 16, TypeScript, Neon, Prisma, JWT, shadcn e Tailwind 4.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Tailwind"],
    tags: ["Sistemas"],
    links: [
      { href: "https://sistema-grafica.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/sistema-grafica", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/xerox-d.webp", "Tela de acesso do Xerox Manager"),
      laptop("/images/projects/xerox-d-2.webp", "Trecho da tela de acesso do Xerox Manager"),
      laptop("/images/projects/xerox.webp", "Outra vista do acesso do Xerox Manager"),
      phone("/images/projects/xerox-m.webp", "Xerox Manager no celular"),
    ],
  },
  {
    id: "somnus",
    title: "Somnus",
    summary:
      "Aplicação para registrar horas de sono e ver padrões ao longo do tempo, com conta por usuário.",
    points: [
      "A página pública apresenta o monitoramento e o acesso ao painel.",
      "O repositório descreve registro de sono, métricas e gráficos.",
      "A stack publicada no repositório é Next.js 15, React 19, TypeScript, Prisma, PostgreSQL na Neon, Clerk e Tailwind, na Vercel.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind"],
    tags: ["Sites"],
    links: [
      { href: "https://somnus-track.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/somnus-next", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/somnus-d.webp", "Página inicial do Somnus"),
      laptop("/images/projects/somnus.webp", "Outra vista da página do Somnus"),
      phone("/images/projects/somnus-m.webp", "Somnus no celular"),
      phone("/images/projects/somnus-mobile.webp", "Outra tela do Somnus no celular"),
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
      laptop("/images/projects/apertou-d.webp", "Página do Apertou Comprou"),
      laptop("/images/projects/apertou-d-2.webp", "Trecho da página do Apertou Comprou"),
      laptop("/images/projects/apertou.webp", "Outra vista da página do Apertou Comprou"),
      laptop("/images/projects/apertou-baixo.webp", "Mais um trecho da página do Apertou Comprou"),
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
    points: [
      "O repositório público descreve o site da agência com Next.js 16, React 19, TypeScript, Tailwind e Framer Motion.",
      "A página apresenta planejamento, redes sociais, identidade visual e tráfego pago.",
    ],
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
      laptop("/images/projects/jotape-d.webp", "Página da Jotape Relógios"),
      laptop("/images/projects/jotape-d-2.webp", "Trecho da página da Jotape Relógios"),
      laptop("/images/projects/jotape.webp", "Outra vista da Jotape Relógios"),
      laptop("/images/projects/jotape-baixo.webp", "Catálogo da Jotape Relógios"),
      phone("/images/projects/jotape-m.webp", "Jotape Relógios no celular"),
      phone("/images/projects/jotape-mobile.webp", "Outra tela da Jotape Relógios no celular"),
    ],
  },
  {
    id: "seeb",
    title: "SeeB",
    summary:
      "Extensão para Chromium, Manifest V3, e widget de uma linha. Foi o TCC na ETEC Parque Belém. Ajusta fonte e contraste, filtros de daltonismo, guia de leitura, cursor ampliado e pausa de animações. Não coleta dados.",
    points: [
      "O widget entra com uma linha de script e reúne filtros de daltonismo, contraste, régua de leitura, pausa de animações e ajuste de texto.",
      "A página pública e o repositório do widget estão em JavaScript, sem framework.",
      "A documentação pública fica em seeb-page.vercel.app/docs.html.",
    ],
    stack: ["JavaScript", "Manifest V3"],
    tags: ["Extensões"],
    links: [
      { href: "https://seeb-page.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/seeb-widget", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/seeb-hero.webp", "Abertura da página do SeeB"),
      laptop("/images/projects/seeb-recursos.webp", "Recursos do SeeB"),
      laptop("/images/projects/seeb-docs-d.webp", "Documentação pública do SeeB"),
      laptop("/images/projects/seeb-docs-d-2.webp", "Trecho da documentação do SeeB"),
    ],
  },
  {
    id: "giz",
    title: "GIZ, assistente de IA",
    summary:
      "Projeto acadêmico “Seu Primeiro Agente de IA”. Assistente de comunicação para uma rede de academias que transforma um briefing curto em textos para WhatsApp, Instagram e e-mail.",
    points: [
      "O agente tem quatro etapas. O servidor mascara CPF, telefone, e-mail e cartão antes de qualquer envio ao modelo. Depois entende o pedido, escreve e revisa. Uma pessoa lê, edita e aprova. Nada é publicado sozinho.",
      "As etapas com modelo usam persona, meta-prompting, few-shot e verificação por perguntas. O modelo é o Gemini 3.5 Flash-Lite, com gemini-flash-lite-latest de reserva.",
      "O back-end são funções Node.js na Vercel, com resposta em streaming NDJSON. O front é HTML, CSS e JavaScript em módulos, sem framework. O package.json não declara dependências de runtime: pede Node.js 20.11 ou mais novo e pnpm.",
    ],
    stack: ["Node.js", "Gemini 3.5 Flash-Lite", "Vercel", "JavaScript"],
    tags: ["Sistemas", "IA"],
    links: [
      { href: "https://giz-assistente-ia.vercel.app", label: "Site", kind: "site" },
      { href: "https://giz-assistente-ia.vercel.app/?demo", label: "Demo", kind: "site" },
      { href: "https://github.com/devrafcks/giz-assistente-ia", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/giz-04-site.webp", "Site da Giz: briefing e etapas do agente"),
      laptop("/images/projects/giz-05-demo.webp", "Giz no modo demonstração"),
      laptop("/images/projects/giz-06-demo-form.webp", "Formulário da Giz: canal, tom e gerar comunicação"),
      laptop("/images/projects/giz-01-inicio.webp", "Evidência: tela inicial da Giz"),
      laptop("/images/projects/giz-02-etapas.webp", "Evidência: agente em etapas"),
      laptop("/images/projects/giz-03-revisao.webp", "Evidência: revisão e verificação"),
    ],
  },
  {
    id: "steal-a-boo",
    title: "STEAL A BOO!",
    summary:
      "Simulator social numa feira noturna, para até 8 jogadores. Sustos leves, para todas as idades. Feito com ajuda de IA, por diversão, como experimento pessoal.",
    points: [
      "Capture Boos de 7 raridades e coloque na base para gerar Cash. Treine Speed e Throw Power e construa até 6 andares.",
      "Roube das bases com o portão aberto e defenda com sustos cômicos. Tem Rebirth, baú diário e ranking.",
      "O repositório usa Luau, Rojo 7.6.1, Wally e ProfileStore.",
    ],
    stack: ["Luau", "Rojo", "Wally", "ProfileStore"],
    tags: ["Jogos"],
    links: [
      { href: "https://www.roblox.com/games/127475605109985/Steal-a-Boo", label: "Jogar no Roblox", kind: "roblox" },
      { href: "https://github.com/devrafcks/steal-a-boo", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/boo-01-visao.webp", "Visão geral do parque de Steal a Boo"),
      laptop("/images/projects/boo-02-praca.webp", "Praça central de Steal a Boo"),
      laptop("/images/projects/boo-03-base.webp", "Base com andares de Steal a Boo"),
      laptop("/images/projects/boo-04-zona.webp", "Zona de captura de Steal a Boo"),
      laptop("/images/projects/boo-05-tenda.webp", "Tenda secreta de Steal a Boo"),
    ],
  },
  {
    id: "67-noites",
    title: "67 NOITES COM EXU",
    summary:
      "Survival cooperativo de 1 a 5 jogadores num terreiro no meio da mata. Manter o caldeirão aceso, sobreviver 67 noites e chegar ao confronto com o Zé Pilintra. Feito com ajuda de IA, por diversão, como experimento pessoal.",
    notice:
      "Este jogo é uma obra de ficção feita com total respeito à Umbanda e à cultura afro-brasileira, sem nenhuma intenção de ofender. As entidades aparecem como guardiões que testam o jogador, e o jogo não reproduz rituais, pontos ou rezas reais. O humor está nas situações do jogo, nunca na religião.",
    points: [
      "Invasões e quatro entidades. O combate é simples: combo, esquiva e aparar, e o confronto final é com o Zé Pilintra.",
      "Luau, Rojo 7.6.1, Wally, ProfileStore 1.0.3, Lune, Selene e StyLua. O README marca 646 testes de balanço.",
    ],
    stack: ["Luau", "Rojo", "Wally", "ProfileStore", "Lune", "Selene", "StyLua"],
    tags: ["Jogos"],
    links: [
      { href: "https://www.roblox.com/games/119571245262683/67-Noites-com-Exu", label: "Jogar no Roblox", kind: "roblox" },
      { href: "https://github.com/devrafcks/67-noites-com-exu", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/exu-01-lobby.webp", "Lobby de 67 Noites com Exu"),
      laptop("/images/projects/exu-02-terreiro.webp", "Terreiro com ipê e capim alto"),
      laptop("/images/projects/exu-03-pedreira.webp", "Bioma da pedreira"),
      laptop("/images/projects/exu-04-invasao.webp", "Invasão no caldeirão"),
      laptop("/images/projects/exu-05-cabana.webp", "Cabana na mata"),
      laptop("/images/projects/exu-06-noite.webp", "Noite com o caldeirão aceso"),
      laptop("/images/projects/exu-07-bichos.webp", "Bichos do jogo"),
      laptop("/images/projects/exu-08-motosserra.webp", "Árvore derrubada com motosserra"),
      laptop("/images/projects/exu-00-banner.webp", "Banner de 67 Noites com Exu"),
    ],
  },
];
