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
  "Link na bio",
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
      "Site institucional da T2 Educação, com cursos preparatórios para certificações financeiras, área para empresas e landing pages. Refeito em Next.js 16 com foco em performance, SEO e conversão.",
    points: [
      "A T2 prepara profissionais para certificações do mercado financeiro, como CPA e C-Pro. O site precisava carregar rápido, aparecer bem no Google e levar o visitante até a matrícula, e antes dependia de um construtor visual.",
      "Reconstruí o site em Next.js 16 com App Router, React 19 e Tailwind CSS 4, com páginas de cursos, de certificações e a área para empresas, além das landing pages de campanha.",
      "Cuidei de Core Web Vitals, SEO técnico, acessibilidade, animações com GSAP e Three.js e do tracking de conversão e checkout no GA4. O site usa Supabase e Resend, e o domínio passa pela Cloudflare.",
      "Sou o desenvolvedor responsável pela tecnologia da empresa. Os prints mostram só páginas públicas. O Hub interno, as integrações e a plataforma do aluno não aparecem aqui.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "GSAP", "Three.js", "Supabase", "PostgreSQL", "Resend", "GA4", "Cloudflare", "Vercel"],
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
      "Blog público da T2 com artigos e guias sobre certificações financeiras, carreira e mercado, feito para ser lido no celular e encontrado no Google.",
    points: [
      "O blog é a principal porta de entrada orgânica da T2. Precisava de SEO técnico forte, leitura confortável no celular e um fluxo simples para o time publicar.",
      "Construí o front em Next.js com o Ghost como CMS headless. A home destaca matérias, como a prova C-Pro R, e cada artigo mostra autoria e data.",
      "O SEO técnico e o GA4 acompanham cada publicação. Os prints mostram só conteúdo editorial público.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ghost (headless CMS)", "GA4", "Vercel", "Cloudflare"],
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
      "Portal de apostilas, simulados e resumos gratuitos para certificações financeiras como CPA, C-Pro, CFP e ANCORD, com Next.js e Ghost headless.",
    points: [
      "A T2 oferece materiais de estudo gratuitos para quem se prepara para certificações. O portal organiza apostilas, simulados e resumos por certificação, de um jeito fácil de navegar e de encontrar pelo Google.",
      "Fiz o portal em Next.js consumindo o Ghost em modo headless, para que o time publique sem mexer em código.",
      "Os materiais publicados são de estudo. Nenhum dado de aluno aparece no portal.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ghost (headless CMS)", "Vercel", "Cloudflare"],
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
    summary:
      "ERP multiempresa com PDV, NF-e integrada à SEFAZ, financeiro com conciliação, estoque, compras e K8 Pay para Pix e boleto. O maior sistema que já construí.",
    points: [
      "Empresas pequenas e médias costumam controlar venda, estoque, compra e financeiro em ferramentas soltas. O Mirante junta tudo num sistema só, com várias empresas e filiais na mesma conta e um seletor de unidade no topo.",
      "Vendas: PDV de frente de caixa com pagamento e fechamento, pedidos de venda com vendedores e orçamentos. Estoque com dashboard de produtos abaixo do mínimo ou negativos, catálogo, preços, categorias e serviços.",
      "Fiscal e compras: emissão e gestão de NF-e integrada à SEFAZ com certificado A1, painel de notas recebidas com manifestação, solicitações de compra com aprovação ou rejeição e entrada de mercadorias por XML, pela chave da NF-e ou manual.",
      "Financeiro: contas a pagar e a receber, abertura e fechamento de caixa, contas bancárias com extrato e conciliação, adiantamentos, reparcelamento, centro de custo e plano de contas. Também integrei ao ERP o K8 Pay, gateway da K8 Fintech, para cobrança por Pix e boleto.",
      "Gestão: dashboard com KPIs, faturamento ano a ano e projeção de vendas, cadastro unificado de clientes, fornecedores e funcionários, usuários e permissões, log de auditoria exportável, busca global e ações rápidas com Ctrl+K e personalização de tema, densidade e animações.",
      "Fiz o sistema na ByStartup, em cerca de três meses. Do cliente veio a ideia do produto. O protótipo, o desenho do produto, o desenvolvimento full stack e a infraestrutura ficaram comigo, do front-end ao banco, às integrações e ao deploy. Os prints são de uma conta de teste, com dados fictícios.",
    ],
    stack: ["Next.js (App Router)", "React", "TypeScript", "Supabase", "PostgreSQL", "Zod", "K8 Pay (Pix e boleto)", "NF-e / SEFAZ", "Docker", "Coolify", "VPS", "Google Tag Manager"],
    tags: ["Sistemas", "SaaS"],
    links: [{ href: "https://miranteerp.com.br", label: "Site", kind: "site" }],
    images: miranteShots,
    cover: mirante("mirante-01b-faturamento.webp", "Dashboard: faturamento e projeção"),
  },
  {
    id: "carretel",
    title: "Carretel",
    summary:
      "Meu SaaS próprio para oficinas de costura: registra o corte, comprova a entrega e cobra por Pix pelo celular, mesmo com sinal fraco. Bilíngue, em português e espanhol.",
    points: [
      "Donos e donas de oficinas de costura, muitos da comunidade boliviana em São Paulo, controlam cortes, entregas e pagamentos no caderno e no WhatsApp. Quando surge uma divergência de quantidade ou de valor, não existe prova de nada. O Carretel resolve isso com três verbos: registra, comprova e cobra.",
      "Registrar: o corte recebido entra com foto, quantidade e preço falados por voz, grade, prazo e aviamentos, e a produção é anotada por pessoa, operação e máquina. Comprovar: um link público mostra fotos, grade, valor e código de verificação, e o contratante confirma pelo WhatsApp sem criar conta. O aceite guarda horário, navegador e IP e fica imutável no banco.",
      "Cobrar: a tela mostra quem deve e há quantos dias, gera a mensagem pronta para o WhatsApp com Pix Copia e Cola e QR Code (BR Code com CRC16 feito no próprio projeto) e aceita baixa total ou parcial. Também tem acerto semanal com recibo bilíngue, calculadora de preço justo por peça, exportação de dados pela LGPD e exclusão de conta.",
      "O app é offline first: as ações entram numa fila idempotente no IndexedDB e sincronizam quando o sinal volta, com service worker e instalação como PWA. É multi-tenant, com isolamento por oficina testado contra um Postgres real.",
      "A assinatura roda pela AbacatePay, com webhook validado por HMAC-SHA256. A interface segue WCAG 2.2 AA, com alvos de toque grandes e o SeeB embutido, e o projeto tem testes com Vitest, testes de propriedade com fast-check e testes de acessibilidade com Playwright e axe.",
      "É um produto meu, da ideia à especificação, ao design e ao código. Está em pré-lançamento.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "shadcn/ui", "Neon Postgres", "Drizzle ORM", "Better Auth (Neon Auth)", "next-intl", "AbacatePay", "Pix BR Code", "IndexedDB", "Service Worker / PWA", "Vercel Blob", "Vercel Cron", "Zod", "ExcelJS", "Vitest", "fast-check", "Playwright", "axe-core", "SeeB"],
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
      laptop("/images/projects/carretel-01-hoje.webp", "Painel Hoje do Carretel, com o que a oficina deve, peças em produção e o acerto da semana"),
      laptop("/images/projects/carretel-02-cortes.webp", "Lista de cortes da oficina no Carretel, com status de costura e entrega"),
      laptop("/images/projects/carretel-04-corte-entregue.webp", "Corte entregue no Carretel, com grade, operações e preço por peça"),
      laptop("/images/projects/carretel-08-cobrancas.webp", "Cobranças do Carretel por dias de atraso, com botão para cobrar no WhatsApp"),
      laptop("/images/projects/carretel-10-pix-qr.webp", "QR Code do Pix gerado pelo Carretel para uma cobrança"),
      laptop("/images/projects/carretel-11-producao.webp", "Produção do dia no Carretel, com peças e valor a pagar por pessoa"),
      laptop("/images/projects/carretel-13-acerto.webp", "Acerto semanal da equipe no Carretel"),
      laptop("/images/projects/carretel-15-calculadora.webp", "Calculadora do Carretel para ver se um corte dá lucro"),
      laptop("/images/projects/carretel-16-relatorios.webp", "Relatórios do Carretel, com cortes do mês e faturamento"),
      laptop("/images/projects/carretel-22-comprovantes.webp", "Comprovante de entrega confirmado no Carretel, com código de verificação"),
      phone("/images/projects/carretel-20-hoje-mobile.webp", "Painel Hoje do Carretel no celular"),
      phone("/images/projects/carretel-21-cobrancas-mobile.webp", "Cobranças do Carretel no celular"),
    ],
  },
  {
    id: "gatelite",
    title: "Gatélite",
    summary:
      "A Terra de hoje, vista de cima: escolha um lugar e veja a imagem de satélite do dia, quais satélites passaram por cima, como ele mudou desde 2000 e o que está acontecendo perto dele agora. Tudo com dados abertos da NASA, sem login e sem banco de dados.",
    points: [
      "O nome junta gato e satélite. As imagens de satélite da NASA são abertas, mas ficam espalhadas em portais técnicos. O Gatélite junta tudo num site só, pensado para quem quer ver o próprio bairro, a própria cidade ou o planeta inteiro de cima.",
      "Explorar: um globo com o mosaico diário dos satélites da NASA (VIIRS e MODIS), Landsat e Sentinel a 30 m, infravermelho, luzes da noite, temperatura e fumaça. Quando o zoom passa do que a imagem do dia mostra, o mapa troca sozinho para uma camada de alta resolução, em que dá para ver casas, quadras e o Cristo Redentor. A visão inteira fica na URL.",
      "A aba Tempo mostra os últimos 14 dias do lugar lado a lado e estima a nuvem de cada um pela cor da imagem, com o nascer e o pôr do Sol. As passagens de 14 satélites nas últimas e nas próximas 24 horas são calculadas no navegador, com SGP4 num Web Worker. Também tem time-lapse do mesmo dia do ano desde 2001 e antes e depois com cortina arrastável.",
      "O planeta agora: um mapa-múndi com o dia e a noite andando em tempo real, as luzes das cidades, a frota de satélites ao vivo, os eventos naturais ativos (queimadas, tempestades, vulcões e icebergs) e as fotos da câmera EPIC, tiradas a 1,5 milhão de km.",
      "Não tem conta nem banco: a URL guarda a visão, o aparelho guarda os lugares salvos e o servidor só faz cache das APIs externas. O domínio (órbitas, nuvens, Sol e eventos) é feito de regras puras testadas com Vitest. É um projeto pessoal de código aberto, com licença MIT e sem ligação oficial com a NASA.",
    ],
    stack: ["Next.js 16 (App Router, Cache Components)", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Base UI", "MapLibre GL", "satellite.js (SGP4)", "Web Worker", "astronomy-engine", "d3-geo", "nuqs", "Zustand", "TanStack Query", "Zod", "NASA GIBS, EPIC, EONET e APOD", "CelesTrak", "Vitest", "Biome", "Vercel"],
    tags: ["Sites"],
    links: [
      { href: "https://gatelite.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/gatelite", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/gatelite-01-inicio.webp", "Página inicial do Gatélite, com a Terra fotografada hoje pela câmera EPIC"),
      laptop("/images/projects/gatelite-02-epic.webp", "O planeta inteiro em fotos do dia e a contagem de passagens sobre cidades brasileiras"),
      laptop("/images/projects/gatelite-03-explorar.webp", "Explorador do Gatélite com o Rio de Janeiro na imagem de satélite do dia"),
      laptop("/images/projects/gatelite-04-detalhe.webp", "Camada de alta resolução com zoom no Alto da Boa Vista, no Rio de Janeiro"),
      laptop("/images/projects/gatelite-05-tempo.webp", "Aba Tempo com os últimos 14 dias do lugar, a nuvem de cada um e o nascer e o pôr do Sol"),
      laptop("/images/projects/gatelite-06-passagens.webp", "Passagens dos satélites sobre o lugar nas últimas e nas próximas 24 horas"),
      laptop("/images/projects/gatelite-07-eventos.webp", "Explorador com o globo inteiro e a aba de eventos naturais aberta"),
      laptop("/images/projects/gatelite-08-planeta.webp", "Mapa do planeta agora, com o dia, a noite e as luzes das cidades"),
      laptop("/images/projects/gatelite-09-epic-dia.webp", "Fotos da câmera EPIC dia a dia, tiradas a 1,5 milhão de km"),
      laptop("/images/projects/gatelite-10-satelites.webp", "Frota de satélites ao vivo, com a ficha do Landsat 9"),
      laptop("/images/projects/gatelite-11-frota.webp", "Tabela dos satélites acompanhados, por resolução e largura da faixa"),
      laptop("/images/projects/gatelite-12-marca.webp", "Página da marca do Gatélite"),
      laptop("/images/projects/gatelite-13-404.webp", "Página 404 do Gatélite, Fora da faixa"),
      phone("/images/projects/gatelite-20-inicio-mobile.webp", "Página inicial do Gatélite no celular"),
      phone("/images/projects/gatelite-21-tempo-mobile.webp", "Explorador no celular, com a aba Tempo aberta"),
      phone("/images/projects/gatelite-22-planeta-mobile.webp", "O planeta agora no celular"),
    ],
  },
  {
    id: "cresce",
    title: "Cresce+ Futuro",
    summary:
      "SaaS de gestão para micro e pequenos negócios. Reescrevi o produto em Next.js 16 e migrei a infraestrutura para Neon e Vercel.",
    points: [
      "O SaaS da Cresce+ organiza estoque, vendas, tarefas e equipe de micro e pequenos negócios. A versão anterior estava espalhada entre Azure, Railway e Hostinger, cara de manter e difícil de evoluir.",
      "Reescrevi a aplicação em Next.js 16 full stack com App Router e Tailwind CSS, com autenticação e pagamentos pelo Mercado Pago.",
      "Levei o banco para o Neon PostgreSQL e a aplicação para a Vercel, e centralizei o domínio.",
      "Também fiz o site institucional da consultoria, que está em outro card.",
    ],
    stack: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Mercado Pago", "Neon", "PostgreSQL", "Vercel"],
    tags: ["SaaS", "Sistemas"],
    links: [{ href: "https://crescemaistech.com.br/", label: "Site", kind: "site" }],
    images: [
      laptop("/images/projects/cresce-01-painel.webp", "Painel da Cresce+ Futuro, com faturamento, dias de venda e ticket médio"),
      laptop("/images/projects/cresce-03-vendas.webp", "Histórico de vendas da Cresce+ Futuro, com canal e forma de pagamento"),
    ],
  },
  {
    id: "xerox",
    title: "Xerox Manager",
    summary:
      "Sistema de produção para gráficas que substituiu o vale-caixa de papel e as planilhas por lançamentos digitais, estoque automático e relatórios em Excel e PDF.",
    points: [
      "Em muitas gráficas e copiadoras, cada serviço é anotado num vale de papel e somado em planilha no fechamento do dia. Isso gera erro, perda de histórico e nenhum controle de estoque. O Xerox Manager troca esse fluxo por um sistema simples, rastreável e em tempo real.",
      "O funcionário digita o código do produto, e nome e preço aparecem sozinhos. Ele ajusta quantidade e preço, confirma, e o estoque baixa automaticamente. Edição e exclusão só valem no mesmo dia.",
      "O administrador cuida de funcionários, produtos e estoque, com alerta de estoque baixo e ajuste manual, e tira relatórios por período com produção por funcionário e consumo de estoque, exportados em Excel com três abas e em PDF.",
      "A segurança foi tratada com cuidado: senhas com bcrypt, sessões em JWT num cookie httpOnly com tabela de sessões que pode ser invalidada, verificação de permissão em toda Server Action e filtros validados com Zod.",
      "É uma versão de demonstração que segue a mesma lógica do sistema usado em produção. Fiz tudo, do banco à interface, com o SeeB integrado.",
    ],
    stack: ["Next.js 16 (App Router, Server Actions)", "React 19", "TypeScript", "Prisma", "Neon", "PostgreSQL", "JWT (jose)", "bcryptjs", "Zod", "React Hook Form", "shadcn/ui", "Tailwind CSS 4", "TanStack Table", "Recharts", "SheetJS (xlsx)", "React PDF", "date-fns", "SeeB", "Vercel"],
    tags: ["Sistemas"],
    links: [
      { href: "https://sistema-grafica.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/sistema-grafica", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/xerox-01-login-clean.webp", "Tela de acesso do Xerox Manager"),
      laptop("/images/projects/xerox-02-admin-dashboard.webp", "Painel do administrador no Xerox Manager, com receita do dia, estoque e produtos mais vendidos"),
      laptop("/images/projects/xerox-04-admin-team-summary.webp", "Resumo por funcionário no painel do Xerox Manager"),
      laptop("/images/projects/xerox-05-employees.webp", "Cadastro de funcionários do Xerox Manager"),
      laptop("/images/projects/xerox-08-products-stock.webp", "Produtos e estoque do Xerox Manager, com alerta de estoque baixo"),
      laptop("/images/projects/xerox-11-reports.webp", "Relatórios de produção e estoque do Xerox Manager"),
      laptop("/images/projects/xerox-13-report-pdf.webp", "Relatório em PDF do Xerox Manager, com consumo de estoque e desempenho da equipe"),
      laptop("/images/projects/xerox-14-employee-dashboard.webp", "Painel do funcionário no Xerox Manager, com a produção do dia"),
      laptop("/images/projects/xerox-16-entry-form.webp", "Novo lançamento no Xerox Manager, com produto, quantidade e estoque disponível"),
      phone("/images/projects/xerox-19-mobile-employee-dashboard.webp", "Painel do funcionário no Xerox Manager, no celular"),
      phone("/images/projects/xerox-21-mobile-entry-form.webp", "Novo lançamento no Xerox Manager, no celular"),
    ],
  },
  {
    id: "somnus",
    title: "Somnus",
    summary:
      "App para registrar as horas de sono e enxergar padrões: média, melhor e pior noite e gráficos de evolução, com conta por usuário e acessibilidade embutida.",
    points: [
      "Quem quer melhorar o sono precisa de dados simples e consistentes, sem apps cheios de recursos que ninguém usa. O Somnus faz uma coisa bem: registrar e analisar as horas dormidas.",
      "O fluxo é direto: entra, registra a noite e vê a análise. O painel mostra média de sono, melhor e pior noite, histórico completo e gráficos de evolução.",
      "A autenticação usa Clerk, e cada pessoa só vê os próprios dados. O back-end roda em Server Actions do Next.js, tipado de ponta a ponta com Prisma e PostgreSQL no Neon.",
      "Acessibilidade entrou como requisito desde o começo, com o SeeB integrado. Fiz o projeto sozinho, do banco ao deploy na Vercel.",
    ],
    stack: ["Next.js 15 (App Router, Server Actions)", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "Neon", "PostgreSQL", "Clerk", "Chart.js", "react-chartjs-2", "Framer Motion", "SeeB", "Vercel"],
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
      "App de serviços, produtos, aluguéis e lojas da cidade, com mapa, chat e anúncios em destaque pagos por Pix, cartão ou boleto. Na App Store, na Google Play e na web.",
    points: [
      "O Bicus junta serviços, produtos, aluguéis e lojas da cidade num app só, com busca por proximidade e vendedores verificados.",
      "O app mostra anúncios no mapa, com escolha de localização e busca de endereço, e tem chat dentro do aplicativo para combinar direto com o vendedor.",
      "Quem anuncia pode turbinar o anúncio. O pagamento é feito pelo Mercado Pago, por Pix, cartão ou boleto, e o destaque liga sozinho depois da confirmação. O app não recebe nem guarda dados de cartão.",
      "Um único código em Expo e React Native gera os apps de iOS e Android e a versão web. Do cliente recebi a ideia do produto. Protótipo, produto, desenvolvimento full stack e infraestrutura ficaram comigo.",
    ],
    stack: ["React Native", "Expo", "Expo Router (web)", "React Native Web", "TypeScript", "Supabase", "Mercado Pago", "Leaflet", "OpenStreetMap (Nominatim)", "Expo Notifications"],
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
      "Marketplace para lojas físicas venderem pelo celular, com app, painel do lojista e administração. Pix ou cartão, split automático para cada loja e pedido condicional.",
    points: [
      "Lojas de bairro perdem venda porque não estão no celular do cliente, e montar um e-commerce próprio custa caro. O Apertou Comprou coloca essas lojas num marketplace local, com entrega em casa ou retirada no local.",
      "O cliente compra pelo app ou pelo site, conversa com a loja pelo chat e pode pedir peças para provar antes de pagar, no pedido condicional. O pagamento é por Pix ou cartão.",
      "Cada loja tem um recebedor no Pagar.me, e o valor de cada venda é dividido automaticamente por split e transferido para a conta bancária do lojista. O painel guia o cadastro bancário e bloqueia a ativação da loja até ele estar completo.",
      "O produto tem três frentes: o app para o cliente, o painel do lojista e a administração do marketplace, com gráficos de acompanhamento. A ideia veio do cliente. Eu fiz o protótipo, o produto, o desenvolvimento full stack e a infraestrutura.",
    ],
    stack: ["React", "TypeScript", "Vite", "React Native", "Expo", "Supabase", "Pagar.me (recebedores e split)", "Pix", "Radix UI", "Recharts", "Motion", "Three.js", "Cloudflare"],
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
      "App para achar treinos de corrida em grupo na cidade, confirmar presença, criar treinos e conversar com o grupo. Conecta com o Strava. Na Google Play e aprovado na App Store.",
    points: [
      "Correr sozinho desanima, e achar um grupo com o mesmo ritmo e horário é difícil. O Junto mostra os treinos de corrida perto de você.",
      "Dá para filtrar treinos por distância, horário e ritmo, confirmar presença, criar o próprio treino e conversar no chat do grupo. Também há treinos exclusivos para mulheres.",
      "A conta pode ser ligada ao Strava. Na Google Play o app se chama Corra junto, e a versão para iOS, \"junto: companhia para correr\", foi aprovada na App Store. Do cliente veio a ideia do app. Protótipo, produto, desenvolvimento full stack e infraestrutura foram trabalho meu.",
    ],
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
      "Site da Agência Voxx, de marketing digital em Itapetininga, com animações em Framer Motion, e formulário de contato com envio de e-mail.",
    points: [
      "A agência precisava de um site que mostrasse o trabalho com a mesma qualidade visual que ela entrega aos clientes, sem ficar pesado no celular.",
      "A página apresenta planejamento, redes sociais, identidade visual e tráfego pago, com animações de entrada e de scroll feitas em Framer Motion.",
      "Fiz em Next.js 16 com App Router, Tailwind CSS e fontes do Google (Besley e DM Sans). O formulário de contato manda e-mail pelo Resend com Nodemailer, e o Google Analytics entra pelo @next/third-parties.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Nodemailer", "Google Analytics (@next/third-parties)", "Lucide", "Phosphor Icons", "SeeB", "Vercel"],
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
    summary:
      "E-commerce de relógios originais, feito como freelance: catálogo por marca, busca, checkout com Pix ou cartão pelo Mercado Pago, acompanhamento de pedido e WhatsApp.",
    points: [
      "Loja de relógios originais que precisava de um e-commerce próprio, em que o cliente compra sozinho, a qualquer hora.",
      "O catálogo é organizado por marca, com busca, página de produto e carrinho. O pagamento é feito no próprio site, por Pix ou cartão de crédito, processado pelo Mercado Pago.",
      "O cliente acompanha o pedido pelo site e fala com a loja pelo WhatsApp. A loja também pode ser instalada como app no celular. Recebi a ideia da loja e conduzi o resto: protótipo, produto, desenvolvimento full stack e infraestrutura.",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "Mercado Pago", "Pix", "PWA", "Cloudflare"],
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
      "Widget e extensão de acessibilidade open source, criados no meu TCC. Com uma linha de script, qualquer site ganha contraste, filtros de daltonismo, leitor de voz e mais, sem coletar dados.",
    points: [
      "Muita gente com baixa visão, daltonismo ou TDAH encontra barreiras para ler a web, e a maioria dos sites não oferece ajuste nenhum. O SeeB nasceu como extensão gratuita para Chromium e virou também um widget que qualquer site embute com uma linha.",
      "O painel reúne filtros de protanopia, deuteranopia, tritanopia e monocromático, alto contraste, inversão de cores e modo escuro, texto ampliado, espaçamento, negrito, links sublinhados e destacados, régua e linha de foco de leitura, brilho e saturação, ocultar imagens, parar animações, realce de foco por teclado, cursor grande e leitor de voz com escolha de voz e velocidade.",
      "O widget é servido por CDN no Cloudflare Pages, então toda melhoria chega na hora para quem já usa. A documentação pública ensina a integrar em HTML puro, Vite, Vue, Angular e Next.js com App Router, incluindo os cuidados com SSR e hydration que eu mesmo resolvi ao embutir o widget em projetos Next.js.",
      "A extensão usa Manifest V3, só pede as permissões storage e activeTab e está na Chrome Web Store. Nada é coletado: as preferências ficam no próprio navegador.",
      "Hoje o SeeB vai embutido nos meus projetos, como Carretel, Xerox Manager, Somnus, Giz, Velory, o dashboard de Excel, a Agência Voxx e o site institucional da Cresce+ Futuro. Fiz a parte técnica do TCC na ETEC Parque Belém e sigo mantendo o projeto aberto no GitHub.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Manifest V3", "Chrome Extensions API", "Webpack", "Web Speech API", "Cloudflare Pages", "Chrome Web Store", "Vercel"],
    tags: ["Extensões"],
    links: [
      { href: "https://seeb-page.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/seeb-widget", label: "Repositório", kind: "repo" },
      { href: "https://chromewebstore.google.com/detail/faoblfaonpejepiealfiogalnkoakdni", label: "Chrome Web Store", kind: "site" },
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
      "Agente de IA que recebe um briefing curto e escreve os textos para WhatsApp, Instagram e e-mail. Protege dados pessoais antes de chamar o modelo e só publica com aprovação humana.",
    points: [
      "Projeto do desafio \"Seu Primeiro Agente de IA\". A Giz é uma rede de academias fictícia em que a equipe perde tempo escrevendo avisos e campanhas para cada canal.",
      "O agente trabalha em quatro etapas. Primeiro o servidor mascara CPF, telefone, e-mail e cartão antes de qualquer envio ao modelo. Depois ele entende o pedido, escreve e revisa. No fim, uma pessoa lê, edita e aprova. Nada é publicado sozinho.",
      "As etapas com modelo usam persona, meta-prompting, few-shot e verificação por perguntas, com saída em JSON para encadear uma etapa na outra e temperatura diferente por tarefa (0,2 na triagem e revisão, 0,8 na escrita).",
      "O texto do colaborador entra delimitado e é tratado como dado, para evitar injeção de prompt. O guia de marca proíbe prometer resultado físico, dar orientação de saúde e inventar informação.",
      "O back-end são funções serverless Node.js na Vercel, com resposta em streaming NDJSON. O front é HTML, CSS e JavaScript em módulos, sem framework. O modelo é o Gemini 3.5 Flash-Lite, com o gemini-flash-lite-latest de reserva.",
    ],
    stack: ["Google Gemini API (3.5 Flash-Lite)", "Node.js 20", "Vercel Functions (serverless)", "NDJSON streaming", "JavaScript (ES Modules)", "HTML", "CSS", "prompt engineering (persona, few-shot, meta-prompting)", "JSON estruturado", "pnpm", "SeeB"],
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
      "Simulator social para Roblox numa feira noturna, para até 8 jogadores: capture Boos, monte a base, gere Cash, roube dos amigos e defenda o que é seu. Feito com IA, por diversão.",
    points: [
      "Experimento pessoal para aprender o desenvolvimento de jogos no Roblox com um fluxo profissional, usando IA como apoio.",
      "Você captura Boos de 7 raridades e coloca na base para gerar Cash por segundo. Treina Speed e Throw Power e constrói até 6 andares.",
      "Dá para roubar das bases com o portão aberto e defender com sustos cômicos. Tem Rebirth, baú diário e ranking. Os sustos são leves, para todas as idades.",
      "O código fica fora do Studio, em Luau versionado no Git, sincronizado com Rojo, pacotes pelo Wally e dados dos jogadores salvos com ProfileStore.",
    ],
    stack: ["Luau", "Roblox Studio", "Rojo 7.6", "Wally", "Rokit", "ProfileStore", "Git"],
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
      "Survival cooperativo de 1 a 5 jogadores num terreiro no meio da mata: manter o caldeirão aceso e sobreviver 67 noites até o confronto com o Zé Pilintra. Feito com IA, por diversão.",
    notice:
      "Este jogo é uma obra de ficção feita com total respeito à Umbanda e à cultura afro-brasileira, sem nenhuma intenção de ofender. As entidades aparecem como guardiões que testam o jogador, e o jogo não reproduz rituais, pontos ou rezas reais. O humor está nas situações do jogo, nunca na religião.",
    points: [
      "Experimento pessoal de survival cooperativo no Roblox, feito com ajuda de IA e com total respeito à Umbanda e à cultura afro-brasileira.",
      "A cada noite, o grupo defende o caldeirão de invasões e encontra quatro entidades, que aparecem como guardiões que testam o jogador. O combate é simples, com combo, esquiva e aparar.",
      "O mapa tem biomas como o terreiro, a pedreira e a cabana na mata.",
      "O código é Luau versionado com Rojo e Wally, dados salvos com ProfileStore, lint com Selene, formatação com StyLua e scripts com Lune. O README registra 646 testes de balanço.",
    ],
    stack: ["Luau", "Roblox Studio", "Rojo 7.6", "Wally", "Rokit", "ProfileStore 1.0.3", "Lune", "Selene", "StyLua", "Git"],
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
  {
    id: "offscope",
    title: "OFFSCOPE",
    summary:
      "FPS online em primeira pessoa para Roblox, focado no no-scope: uma sniper, uma faca, três mapas, ranked com ELO e servidor que valida cada tiro. Feito com IA, por diversão.",
    notice: "Leve, 16+, violência leve, sem sangue",
    points: [
      "Projeto pessoal para aprender netcode e jogo competitivo, feito com ajuda de IA (Claude Code).",
      "Modos Duelo 1v1 e Duplas 2v2, casual e ranked com ELO, mais Equipes 4v4 e Todos contra todos para 8 jogadores. No fim da partida, um voto de 20 segundos escolhe o próximo mapa.",
      "O servidor decide cada tiro. O cliente manda a intenção com uma semente determinística, e o servidor refaz a direção, volta as hitboxes no tempo (lag compensation a 30 Hz, até 0,45 s) e confirma o acerto. A faca mata com um golpe pelas costas.",
      "Três mapas feitos só com código, com terreno real via WriteVoxels: Cais 09, um porto ao amanhecer, Avenida 11, o centro à noite, e Posto 47, na serra. Arma, braços e faca são montados com Parts e animados por código, e os 22 sons e as texturas também são gerados no repositório.",
      "Cosméticos só visuais, sem caixas e sem pay-to-win, com loja diária igual em todos os servidores e compra confirmada só depois que o ProfileStore salva. O README marca 13,5 mil linhas de Luau, e o CI roda rojo build, type-check com luau-lsp e Selene a cada push.",
    ],
    stack: ["Luau", "Roblox Studio", "Rojo", "Wally", "Rokit", "ProfileStore", "Lune", "Selene", "StyLua", "luau-lsp", "GitHub Actions"],
    tags: ["Jogos"],
    links: [
      { href: "https://www.roblox.com/games/133650768159073/OFFSCOPE", label: "Jogar no Roblox", kind: "roblox" },
      { href: "https://github.com/devrafcks/OFFSCOPE", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/offscope-01-match.webp", "Partida no Posto 47, no mapa do OFFSCOPE"),
      laptop("/images/projects/offscope-02-scope.webp", "Luneta da sniper no OFFSCOPE"),
      laptop("/images/projects/offscope-03-knife.webp", "Faca em primeira pessoa no OFFSCOPE"),
      laptop("/images/projects/offscope-04-aereo.webp", "Base do OFFSCOPE vista de cima"),
      laptop("/images/projects/offscope-05-praca.webp", "Praça com os portais de fila do OFFSCOPE"),
      laptop("/images/projects/offscope-06-cais.webp", "Mapa Cais 09 do OFFSCOPE"),
      laptop("/images/projects/offscope-07-avenida.webp", "Mapa Avenida 11 do OFFSCOPE"),
      laptop("/images/projects/offscope-08-banner.webp", "Banner do OFFSCOPE"),
    ],
  },
  {
    id: "mapinion",
    title: "Mapinion",
    summary:
      "App mobile para descobrir e recomendar lugares, com foto, nota de 1 a 5 e comentário, e um feed com as recomendações de outras pessoas. Fiz o app e a API.",
    points: [
      "Recomendação de lugar costuma se perder em conversa de grupo. O Mapinion guarda tudo num feed: você publica o local com foto, nota e comentário e acompanha o que as outras pessoas indicam.",
      "O app em React Native com Expo e Expo Router tem login, cadastro e três abas: feed, nova recomendação e perfil. A sessão fica no Zustand com AsyncStorage, e a foto vem da galeria pelo Expo Image Picker.",
      "No perfil, você vê, edita e apaga as suas recomendações.",
      "A API também é minha: Node.js com Express, MongoDB com Mongoose, senhas com bcrypt, login com JWT de 15 dias e imagens no Cloudinary. O feed é paginado, o avatar é gerado pelo DiceBear e um cron mantém o servidor ativo.",
    ],
    stack: ["React Native", "Expo", "Expo Router", "TypeScript", "Zustand", "AsyncStorage", "Expo Image Picker", "React Navigation", "Reanimated", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Cloudinary", "DiceBear", "cron"],
    tags: ["Apps"],
    links: [
      { href: "https://github.com/devrafcks/React-native_mapinion-app", label: "Repositório do app", kind: "repo" },
      { href: "https://github.com/devrafcks/React-native-mapinion", label: "Repositório da API", kind: "repo" },
    ],
    images: [
      { ...phone("/images/projects/mapinion-01-login.webp", "Tela de login do Mapinion"), width: 539, height: 929 },
      { ...phone("/images/projects/mapinion-02-cadastro.webp", "Tela de cadastro do Mapinion"), width: 529, height: 842 },
      { ...phone("/images/projects/mapinion-03-compartilhar.webp", "Tela de nova recomendação do Mapinion"), width: 529, height: 952 },
    ],
  },
  {
    id: "excel-dashboard",
    title: "Dashboard de vendas do Excel",
    summary:
      "Teste técnico: você sobe uma planilha de vendas e o app limpa os dados e monta um dashboard com métricas, quatro gráficos, filtros e tabela completa, tudo no navegador.",
    points: [
      "Planilhas de vendas reais vêm com linha vazia, categoria escrita de jeitos diferentes e mês fora do padrão. O desafio era chegar a um painel útil sem back-end.",
      "O app lê a primeira aba do .xlsx ou .xls com SheetJS, descarta linhas sem categoria, produto ou receita e normaliza categorias e meses.",
      "O painel mostra receita total, pedidos e ticket médio, e quatro gráficos em Recharts: vendas por categoria, vendas por mês, quantidade por mês e top 5 produtos por receita.",
      "Os filtros por categoria e mês alimentam uma tabela com ordenação, paginação, busca em tempo real e 10, 25, 50 ou 100 itens por página. O SeeB entra no index.html.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Recharts", "SheetJS (xlsx)", "Lucide", "ESLint", "SeeB", "Vercel"],
    tags: ["Sistemas"],
    links: [
      { href: "https://desafio-excel.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/excel-dashboard-challenge", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/excel-01-dashboard.webp", "Dashboard de vendas com gráficos"),
      laptop("/images/projects/excel-02-upload.webp", "Tela de upload da planilha Excel"),
    ],
  },
  {
    id: "bystartup-web-qa",
    title: "bystartup-web-qa",
    summary:
      "Skill para agentes de IA como Claude Code e Gemini CLI gerarem, rodarem e corrigirem testes E2E com Playwright em aplicações web. Criada no Bystartup Labs.",
    points: [
      "Escrever e manter testes de ponta a ponta toma tempo e costuma ficar para depois. A skill entrega esse trabalho para o agente de IA, com regras claras.",
      "O agente lê os arquivos do front, encontra botões, formulários, navegação, chamadas de API e estados de erro, carregamento e sucesso, e escreve os testes em testes/[feature].e2e.test.ts, criando a pasta quando ela não existe.",
      "Depois roda os testes, tenta de novo, corrige o que falhou e atualiza testes antigos sem perder a cobertura que já funcionava.",
      "Detecta login com JWT, cookies, localStorage, NextAuth, Clerk, Firebase Auth e Auth0, guarda a sessão e gera cenários para celular, tablet e desktop, com seletores semânticos e acessíveis.",
      "Funciona com React, Next.js, Vue, Angular e outras interfaces web. Criei a skill no programa interno de inovação da ByStartup.",
    ],
    stack: ["Playwright", "@playwright/test", "TypeScript", "Claude Code", "Gemini CLI", "Agent Skills (Markdown)", "E2E testing"],
    tags: ["IA"],
    links: [{ href: "https://github.com/devrafcks/bystartup-web-qa", label: "Repositório", kind: "repo" }],
    images: [laptop("/images/projects/bystartup-banner.webp", "Banner da skill bystartup-web-qa")],
  },
  {
    id: "iran-tapetes",
    title: "Iran Tapetes Orientais",
    summary:
      "Página de link na bio para a Iran Tapetes Orientais, loja nos Jardins, em São Paulo: WhatsApp, loja online, Instagram, mapa e horário num visual premium.",
    points: [
      "A loja precisava de um link na bio à altura dos tapetes que vende, com tudo o que o cliente procura num toque só.",
      "A página reúne WhatsApp, loja online, Instagram, e-mail, o mapa da loja física e o horário de funcionamento.",
      "É mobile first, com gradiente animado, glassmorphism e layout em CSS Grid, mapa do Google embutido e manifest com ícones para a tela inicial.",
    ],
    stack: ["HTML", "Tailwind CSS", "Font Awesome", "Google Fonts", "Google Maps embed", "Web App Manifest", "Vercel"],
    tags: ["Link na bio"],
    links: [
      { href: "https://irantapetes.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/Linkbio-irantapetes", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/iran-desktop.webp", "Página da Iran Tapetes Orientais no computador"),
      phone("/images/projects/iran-mobile.webp", "Página da Iran Tapetes Orientais no celular"),
    ],
  },
  {
    id: "pizzaria-relampago",
    title: "Pizzaria Relâmpago",
    summary:
      "Página de link na bio para a Pizzaria Relâmpago, pizzaria artesanal em Itu (SP), que leva direto para o pedido online, WhatsApp, redes sociais e mapa.",
    points: [
      "O objetivo era simples: quem chega pelo Instagram precisa conseguir pedir em um toque.",
      "O botão de pedido fica em destaque, seguido de WhatsApp, Instagram, Facebook e o mapa com o endereço.",
      "Fiz em HTML e CSS puros, sem framework nem dependências, para carregar quase na hora no celular. O fundo é trocado por uma variável CSS.",
    ],
    stack: ["HTML", "CSS", "Google Maps embed", "Vercel"],
    tags: ["Link na bio"],
    links: [{ href: "https://relampagopizzaria.vercel.app", label: "Site", kind: "site" }],
    images: [
      laptop("/images/projects/pizza-desktop.webp", "Página da Pizzaria Relâmpago no computador"),
      phone("/images/projects/pizza-mobile.webp", "Página da Pizzaria Relâmpago no celular"),
    ],
  },
  {
    id: "linkbio",
    title: "Linkbio",
    summary:
      "Minha página de link na bio, com a minha identidade visual: portfólio, LinkedIn, GitHub, e-mail e as músicas que eu escuto, com embeds do Spotify.",
    points: [
      "Reúne um cartão de apresentação com foto, uma frase de destaque e os links para portfólio, LinkedIn, GitHub, Spotify e e-mail.",
      "Segue a identidade do meu banner, com Unbounded e Montserrat Black Italic, amarelo e laranja sobre fundo escuro. O verde aparece só nas partes do Spotify, que mostram playlists e álbuns favoritos na própria página.",
      "HTML e CSS com variáveis, Flexbox e animações, metadados Open Graph e manifest.",
    ],
    stack: ["HTML", "CSS", "Google Fonts (Unbounded, Montserrat)", "Spotify embeds", "Open Graph", "Web App Manifest", "GitHub Pages"],
    tags: ["Link na bio"],
    links: [
      { href: "https://devrafcks.github.io/Linkbio/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/Linkbio", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/linkbio-desktop.webp", "Página de link na bio no computador"),
      phone("/images/projects/linkbio-mobile.webp", "Página de link na bio no celular"),
    ],
  },
  {
    id: "agenda-manager",
    title: "Agenda",
    summary:
      "Teste técnico de front-end: agenda das 8h às 18h com criação e remoção de horários, validação de formulário, estatísticas e gráfico da distribuição por horário.",
    points: [
      "O desafio pedia uma agenda diária clara, com regras de validação e uma visão rápida de como o dia está distribuído.",
      "A home apresenta o produto. A agenda agrupa os horários do dia, abre um modal para criar um agendamento e permite remover.",
      "O formulário usa React Hook Form com Zod: título e cliente de 3 a 100 caracteres, horários em HH:mm e descrição opcional de até 500 caracteres.",
      "O estado fica no Redux Toolkit, com quatro agendamentos de exemplo que duram a sessão, e as estatísticas aparecem num gráfico em Recharts.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "React Hook Form", "Zod", "shadcn/ui", "Radix UI", "Tailwind CSS 4", "Recharts", "Lucide", "Vercel"],
    tags: ["Sistemas"],
    links: [
      { href: "https://agenda-manager.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/agenda-manager", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/agenda-02-dia.webp", "Agenda do dia com o gráfico de horários"),
      laptop("/images/projects/agenda-01-home.webp", "Página inicial da agenda"),
      phone("/images/projects/agenda-03-mobile.webp", "Agenda no celular"),
    ],
  },
  {
    id: "epic-musical",
    title: "Epic: The Musical",
    summary:
      "Landing page de fã de Epic: The Musical, com seções interativas, animações de scroll em GSAP, carrossel de álbuns do Spotify e FAQ.",
    points: [
      "Projeto pessoal para treinar animação e narrativa visual numa página longa.",
      "O layout usa Flexbox, Grid e variáveis de cor, com o breakpoint principal em 768px.",
      "GSAP 3 com ScrollTrigger faz as entradas e os efeitos de scroll. Os álbuns entram pelo embed do Spotify, e os ícones vêm do Font Awesome e do Material Symbols.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Spotify embed", "Font Awesome", "Material Symbols", "Vercel"],
    tags: ["Landing pages"],
    links: [
      { href: "https://epic-musical.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/epic-musical-landing", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/epic-desktop.webp", "Abertura da landing de Epic: The Musical"),
      phone("/images/projects/epic-mobile.webp", "Landing de Epic: The Musical no celular"),
    ],
  },
  {
    id: "velory",
    title: "Velory",
    summary:
      "Projeto final do Engenheiro Front-end da EBAC: catálogo de restaurantes com avaliações, carrinho e checkout com entrega e pagamento simulado, em React e TypeScript.",
    points: [
      "O desafio final do curso era juntar tudo o que eu tinha estudado num produto completo de delivery.",
      "A listagem mostra restaurantes com categoria e nota, e cada um tem seu cardápio. O carrinho fica no Redux Toolkit, e o contador aparece no topo.",
      "O checkout passa por revisão dos itens, endereço de entrega, dados de cartão simulados e confirmação do pedido. Os dados vêm de uma API consumida com Axios, e as rotas usam React Router.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Redux Toolkit", "React Redux", "React Router", "styled-components", "Axios", "React Icons", "SeeB", "Vercel"],
    tags: ["E-commerce", "Sites"],
    links: [
      { href: "https://velory-ebac.vercel.app/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/velory-ebac", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/velory-desktop.webp", "Catálogo de restaurantes da Velory"),
      phone("/images/projects/velory-mobile.webp", "Velory no celular"),
    ],
  },
  {
    id: "matemagika",
    title: "MatemaGika",
    summary:
      "Aplicação educativa de matemática feita em grupo como trabalho escolar: resolve equações do 1º e do 2º grau com passo a passo e faz interpolação linear com gráfico.",
    points: [
      "O trabalho pedia uma ferramenta que ajudasse a estudar matemática computacional.",
      "O cálculo mostra as raízes e o passo a passo. Para uma equação do 1º grau, o coeficiente a fica vazio ou zero.",
      "A interpolação recebe pares de pontos e desenha a reta no Chart.js. A página deixa claro que o trabalho é de um grupo.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Chart.js", "Font Awesome", "GitHub Pages"],
    tags: ["Sites"],
    links: [
      { href: "https://devrafcks.github.io/MatemaGika/", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/MatemaGika", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/mate-desktop.webp", "Resolução de equações e interpolação no MatemaGika"),
      phone("/images/projects/mate-mobile.webp", "MatemaGika no celular"),
    ],
  },
  {
    id: "marina-kamiya",
    title: "Cresce+ Futuro, site institucional",
    summary:
      "Landing page da consultoria Cresce+ Futuro, liderada por Marina Kamiya, sobre empreendedorismo feminino, tecnologia e IA aplicada a negócios.",
    points: [
      "A consultoria precisava de um site próprio, separado do SaaS, para apresentar o trabalho e os programas.",
      "Fiz em HTML, CSS e JavaScript, com animações de scroll em GSAP e ScrollTrigger e ícones do Font Awesome.",
      "O SeeB vem embutido, como em todos os meus projetos recentes.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Font Awesome", "SeeB", "Vercel"],
    tags: ["Landing pages"],
    links: [
      { href: "https://marinamya.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/marina-kamiya", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/marina-desktop.webp", "Abertura do site institucional da Cresce+ Futuro"),
      phone("/images/projects/marina-mobile.webp", "Site institucional da Cresce+ Futuro no celular"),
    ],
  },
  {
    id: "portfolio",
    title: "Portfólio",
    summary:
      "Este site: projetos com filtros e diálogo com galeria, modo escuro, PWA, SEO completo e atenção a acessibilidade e performance.",
    points: [
      "Queria um portfólio que mostrasse o trabalho do jeito que eu construo produto: rápido, acessível e com detalhe.",
      "A grade separa os trabalhos por tipo, com cards grandes em ziguezague, e cada projeto abre um diálogo com galeria, stack e links. As imagens carregam só quando aparecem na tela.",
      "O tema claro ou escuro usa next-themes. Metadados, Open Graph, sitemap, robots e dados estruturados cobrem o SEO, e o site é um PWA com manifest, ícones e service worker com página offline.",
      "O formulário de contato envia o e-mail direto, as animações usam Motion e o SeeB vem embutido.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Motion", "Three.js", "i18n (PT, EN, ES)", "next-themes", "Tabler Icons", "Service Worker / PWA", "Nodemailer", "SeeB", "Vercel"],
    tags: ["Sites", "Landing pages"],
    links: [
      { href: "https://rafaelblanco.vercel.app", label: "Site", kind: "site" },
      { href: "https://github.com/devrafcks/rafcks-portfolio", label: "Repositório", kind: "repo" },
    ],
    images: [
      laptop("/images/projects/portfolio-hero-desktop.webp", "Hero do portfólio no computador"),
      phone("/images/projects/portfolio-hero-mobile.webp", "Hero do portfólio no celular"),
      laptop("/images/projects/portfolio-grid.webp", "Grade de projetos do portfólio"),
    ],
  },
];
