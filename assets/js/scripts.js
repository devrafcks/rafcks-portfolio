const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll('.accordion__header');
const menuLinks = document.querySelectorAll('.menu__link');
const labels = document.querySelectorAll('.form-control label');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const progressBar = document.querySelector('.progress-bar');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const testimonials = [
  {
    name: 'Ivan Roberto',
    position: 'Desenvolvedor Full Stack, mesma equipe na ByStartup (agosto de 2026)',
    photo: 'assets/images/avatar-ivan.webp',
    text: 'Tive a oportunidade de trabalhar com o Rafael Henrique Blanco na ByStartup e posso dizer que ele foi um dos profissionais mais sólidos e confiáveis com quem já colaborei.\n\nUma das suas maiores forças é a capacidade de conduzir projetos de alta complexidade com velocidade e qualidade, sem perder o controle nem a calma. Ele entrega com consistência, organiza bem o trabalho e transforma desafios técnicos difíceis em soluções claras e bem executadas.\n\nAlém do excelente conhecimento técnico e da experiência em desenvolvimento de software, o Rafael é extremamente profissional, responsável e organizado. Tem postura madura sob pressão, comunica com objetividade e eleva o nível do time ao seu redor.\n\nRecomendo o Rafael sem dúvidas. Tenho certeza de que será um grande diferencial para qualquer equipe que busque alguém experiente, confiável e capaz de entregar projetos complexos com excelência.'
  },
  {
    name: 'Daniel Lugli',
    position: 'COO de Tecnologia, supervisionou Rafael diretamente na ByStartup (agosto de 2026)',
    photo: 'assets/images/avatar-daniel.webp',
    text: 'O Rafael é o tipo de desenvolvedor que traz tranquilidade para o time. Durante nossas interações, ficou muito claro o seu forte domínio técnico e a sua proatividade.\n\nEle não espera os problemas acontecerem; ele se antecipa nas reuniões de planejamento, sugere boas práticas e garante que o produto final tenha a melhor qualidade possível.\n\nExcelente profissional!'
  }
];

let testimonialIdx = 0;
let testimonialTimer;

function animate(opts) {
  if (reduceMotion || typeof anime !== 'function') {
    if (opts.complete) opts.complete();
    return;
  }
  anime(opts);
}

function syncThemeControls() {
  const dark = rootHtml.getAttribute('data-theme') === 'dark';
  if (!toggleTheme) return;
  toggleTheme.setAttribute('aria-pressed', String(dark));
  toggleTheme.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#1E1416' : '#FFFBF2');
  const favicon = document.getElementById('favicon');
  if (favicon) favicon.setAttribute('href', dark ? 'assets/images/logo-dark.svg' : 'assets/images/logo-light.svg');
}

function changeTheme() {
  const next = rootHtml.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  rootHtml.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch (error) {
    /* armazenamento indisponível: o modo vale só nesta visita */
  }
  syncThemeControls();
  animate({
    targets: toggleTheme,
    rotate: [0, 360],
    scale: [0.9, 1],
    duration: 500,
    easing: 'easeOutQuad'
  });
}

function setQuote(text) {
  testimonial.replaceChildren();
  text.split(/\n\n+/).forEach((part) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = part.trim();
    testimonial.appendChild(paragraph);
  });
}

function restartProgress() {
  if (!progressBar || reduceMotion) return;
  progressBar.style.animation = 'none';
  void progressBar.offsetWidth;
  progressBar.style.animation = '';
}

function renderTestimonial(index, withMotion) {
  const item = testimonials[index];
  const apply = () => {
    setQuote(item.text);
    userImage.src = item.photo;
    userImage.alt = 'Iniciais de ' + item.name;
    username.textContent = item.name;
    role.textContent = item.position;
  };

  if (!withMotion) {
    apply();
    return;
  }

  animate({
    targets: [testimonial, userImage, username, role],
    opacity: [1, 0],
    translateY: [0, -10],
    duration: 180,
    easing: 'easeInOutQuad',
    complete: () => {
      apply();
      animate({
        targets: [testimonial, userImage, username, role],
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 250,
        easing: 'easeOutQuad'
      });
    }
  });
}

function showTestimonial(index, withMotion) {
  testimonialIdx = (index + testimonials.length) % testimonials.length;
  renderTestimonial(testimonialIdx, withMotion);
  restartProgress();
}

function queueTestimonials() {
  if (reduceMotion) return;
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    showTestimonial(testimonialIdx + 1, true);
  }, 20000);
}

function animateAccordionItem(item, isActive) {
  const body = item.querySelector('.accordion__body');
  const icon = item.querySelector('.bi-caret-down-fill');
  const header = item.querySelector('.accordion__header');
  const duration = 200;

  if (isActive) {
    animate({
      targets: body,
      height: [body.scrollHeight, 0],
      opacity: [1, 0],
      duration,
      easing: 'easeOutQuad',
      complete: () => {
        body.style.display = 'none';
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  } else {
    body.style.display = 'block';
    animate({
      targets: body,
      height: [0, body.scrollHeight],
      opacity: [0, 1],
      duration,
      easing: 'easeOutQuad',
      complete: () => {
        body.style.height = 'auto';
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  }
}

const createScrollObserver = (selector, animateIn, animateOut, threshold = 0.05) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length || reduceMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? animateIn(entry.target) : animateOut(entry.target);
    });
  }, { threshold });

  elements.forEach((el) => observer.observe(el));
};

const simpleFadeIn = (target) => {
  animate({
    targets: target,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 350,
    easing: 'easeOutQuad'
  });
};

const simpleFadeOut = (target) => {
  animate({
    targets: target,
    opacity: [1, 0],
    translateY: [0, 30],
    duration: 250,
    easing: 'easeInQuad'
  });
};

syncThemeControls();

if (toggleTheme) {
  toggleTheme.addEventListener('click', changeTheme);
}

accordionHeaders.forEach((header) => {
  const item = header.parentElement;
  header.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion__item.active').forEach((openItem) => {
      if (openItem !== accordionItem) animateAccordionItem(openItem, true);
    });

    animateAccordionItem(accordionItem, accordionActive);
  });
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    const href = item.getAttribute('href');
    menuLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === href);
    });
  });
});

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
    .join('');
});

document.querySelector('.testimonial-prev')?.addEventListener('click', () => {
  showTestimonial(testimonialIdx - 1, !reduceMotion);
  queueTestimonials();
});

document.querySelector('.testimonial-next')?.addEventListener('click', () => {
  showTestimonial(testimonialIdx + 1, !reduceMotion);
  queueTestimonials();
});

document.addEventListener('DOMContentLoaded', () => {
  const fullscreenLoader = document.getElementById('fullscreen-loader');
  const mainContent = document.querySelector('main');
  const wait = reduceMotion ? 0 : 1200;

  if (!reduceMotion) document.body.style.overflow = 'hidden';

  window.setTimeout(() => {
    if (!fullscreenLoader) return;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      fullscreenLoader.remove();
      document.body.style.overflow = '';
      if (!reduceMotion && mainContent) {
        animate({
          targets: mainContent,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 400,
          easing: 'easeOutQuad'
        });
      }
    };

    if (reduceMotion) {
      finish();
      return;
    }

    fullscreenLoader.classList.add('hidden');
    fullscreenLoader.addEventListener('transitionend', finish, { once: true });
    window.setTimeout(finish, 800);
  }, wait);
});

queueTestimonials();

const PROJECTS = {
  t2: {
    title: 'T2 Educação',
    summary: 'Na T2 eu cuido da tecnologia da empresa: o Hub interno, as integrações, o site, o blog, a documentação e as landing pages. A plataforma nova do aluno fica com outro time e não entra aqui.',
    points: [
      'Hub interno em Next.js (Pages Router e API Routes), React, TypeScript, Tailwind, Radix e o design system Midas, com NextAuth, Supabase e PostgreSQL.',
      'Módulos de tarefas, atendimento, financeiro com conciliação, marketing, contatos, afiliados, biblioteca de aulas, B2B, posts, blog, redes sociais e vídeos verticais.',
      'Site t2.com.br, blog, docs e landing pages em Next.js 16, React 19, Tailwind, TypeScript, GSAP, Three.js e shadcn, com Core Web Vitals, SEO técnico e acessibilidade.',
      'Infra em Vercel, Supabase, Cloudflare e CI/CD. IA aplicada com Crisp AI, agentes via MCP e RAG.',
      'Integrações: Crisp (chat, autoatribuição, conversas e Crisp AI), ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas, Instagram Graph API, YouTube Analytics, WhatsApp, Google Reviews, importação ANBIMA, GitHub, Cloudflare Turnstile e GA4.'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL', 'Cloudflare', 'Vercel'],
    links: [
      { href: 'https://t2.com.br', label: 'Site' },
      { href: 'https://blog.t2.com.br', label: 'Blog', kind: 'repo' }
    ],
    images: [
      ['assets/images/projects/t2-home.webp', 'Página inicial do site da T2 Educação'],
      ['assets/images/projects/t2-baixo.webp', 'Trecho da página da T2 Educação'],
      ['assets/images/projects/t2-blog.webp', 'Blog da T2 Educação'],
      ['assets/images/projects/t2-mobile.webp', 'Site da T2 Educação no celular']
    ]
  },
  mirante: {
    title: 'Mirante ERP',
    summary: 'ERP desenvolvido na ByStartup. A página pública descreve vendas, estoque, financeiro, notas fiscais, multiempresa, emissão de NF-e e NFS-e com a SEFAZ e dashboards.',
    points: [
      'No painel de demonstração, com dados fictícios, aparecem atalhos de venda no PDV, recebimento, cliente, entrada de mercadorias, pagamentos e pedido de compra.',
      'O módulo financeiro mostra contas a receber e a pagar, caixas, contas bancárias, adiantamentos e reparcelamento.'
    ],
    stack: ['Next.js'],
    links: [{ href: 'https://miranteerp.com.br', label: 'Projeto' }],
    images: [
      ['assets/images/projects/mirante-dash.webp', 'Visão geral do Mirante ERP, conta de teste com dados fictícios'],
      ['assets/images/projects/mirante-pessoas.webp', 'Cadastro de pessoas do Mirante ERP, dados fictícios'],
      ['assets/images/projects/mirante-vendas.webp', 'Módulo de vendas do Mirante ERP, com PDV, pedidos e orçamentos'],
      ['assets/images/projects/mirante-notas.webp', 'Notas fiscais do Mirante ERP, dados fictícios'],
      ['assets/images/projects/mirante-fin.webp', 'Módulo financeiro do Mirante ERP, dados fictícios'],
      ['assets/images/projects/mirante-config.webp', 'Configurações do Mirante ERP, dados fictícios'],
      ['assets/images/projects/mirante-cadastro.webp', 'Cadastro no Mirante ERP, dados fictícios'],
      ['assets/images/projects/mirante-acesso.webp', 'Tela de acesso do Mirante ERP']
    ]
  },
  carretel: {
    title: 'Carretel',
    summary: 'SaaS próprio, em pré-lançamento. Caderno digital para oficinas de costura: registrar o corte, comprovar a entrega e organizar a cobrança pelo celular, inclusive sem sinal.',
    points: ['A aplicação publicada é feita em Next.js.'],
    stack: ['Next.js'],
    links: [{ href: 'https://carretel.vercel.app', label: 'Projeto' }],
    images: [
      ['assets/images/projects/carretel.webp', 'Página inicial do Carretel'],
      ['assets/images/projects/carretel-passos.webp', 'Seção de como o Carretel funciona'],
      ['assets/images/projects/carretel-mobile.webp', 'Carretel no celular']
    ]
  },
  cresce: {
    title: 'Cresce+ Futuro',
    summary: 'Plataforma para micro e pequenos negócios organizarem estoque, vendas, tarefas e equipe. Reestruturei o SaaS e a infraestrutura.',
    points: [
      'Next.js 16, Tailwind, Mercado Pago e autenticação.',
      'Migração de Azure, Railway e Hostinger para Neon e Vercel.'
    ],
    stack: ['Next.js', 'Tailwind', 'Mercado Pago', 'PostgreSQL'],
    links: [{ href: 'https://crescemaistech.com.br/', label: 'Projeto' }],
    images: [
      ['assets/images/projects/cresce.webp', 'Página da Cresce+ Futuro'],
      ['assets/images/projects/cresce-mobile.webp', 'Cresce+ Futuro no celular']
    ]
  },
  xerox: {
    title: 'Xerox Manager',
    summary: 'Sistema para gráfica no lugar do vale-caixa de papel. O funcionário registra cópias, impressões e encadernações. O estoque baixa a cada operação e há relatórios em PDF. O SeeB entra na interface.',
    points: ['Next.js, Prisma, PostgreSQL, autenticação com JWT e interface com shadcn e Tailwind.'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'JWT'],
    links: [
      { href: 'https://sistema-grafica.vercel.app', label: 'Projeto' },
      { href: 'https://github.com/devrafcks/sistema-grafica', label: 'Repositório', kind: 'repo' }
    ],
    images: [
      ['assets/images/projects/xerox.webp', 'Tela de acesso do Xerox Manager']
    ]
  },
  somnus: {
    title: 'Somnus',
    summary: 'Aplicação web para registrar o sono e ver padrões, com gráficos e conta por usuário. O SeeB faz parte da interface.',
    points: ['Next.js, Prisma, PostgreSQL, Clerk e Tailwind.'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk'],
    links: [
      { href: 'https://somnus-track.vercel.app/', label: 'Projeto' },
      { href: 'https://github.com/devrafcks/somnus-next', label: 'Repositório', kind: 'repo' }
    ],
    images: [
      ['assets/images/projects/somnus.webp', 'Página inicial do Somnus'],
      ['assets/images/projects/somnus-mobile.webp', 'Somnus no celular']
    ]
  },
  bicus: {
    title: 'Bicus',
    summary: 'Aplicativo de serviços, produtos, aluguéis e lojas da cidade, com mapa e chat. Está na App Store e na Google Play. A versão web usa Expo e React Native.',
    points: ['Na loja, o app descreve busca por proximidade, vendedores verificados e conversa dentro do aplicativo.'],
    stack: ['Expo', 'React Native'],
    links: [
      { href: 'https://bicus.com.br', label: 'Site' },
      { href: 'https://apps.apple.com/br/app/bicus/id6802697550', label: 'App Store', kind: 'apple' },
      { href: 'https://play.google.com/store/apps/details?id=com.bicus.app&hl=pt_BR', label: 'Google Play', kind: 'play' }
    ],
    images: [
      ['assets/images/projects/bicus.webp', 'Versão web do Bicus'],
      ['assets/images/projects/bicus-mobile.webp', 'Bicus no celular, versão web'],
      ['assets/images/projects/bicus-playpage.webp', 'Página do Bicus na Google Play'],
      ['assets/images/projects/bicus-play-1.webp', 'Tela do aplicativo Bicus publicada na Google Play'],
      ['assets/images/projects/bicus-play-2.webp', 'Outra tela do Bicus publicada na Google Play'],
      ['assets/images/projects/bicus-ios-1.webp', 'Tela do Bicus publicada na App Store'],
      ['assets/images/projects/bicus-ios-2.webp', 'Outra tela do Bicus publicada na App Store']
    ]
  },
  apertou: {
    title: 'Apertou Comprou',
    summary: 'Marketplace para comprar de lojas da cidade pelo celular, com chat, pedido condicional e pagamento por Pix ou cartão. Tem site, App Store e Google Play.',
    points: ['A página da loja descreve receber em casa ou retirar no local, e pedir peças para provar antes de pagar.'],
    stack: [],
    links: [
      { href: 'https://apertoucomprou.com.br/lp', label: 'Site' },
      { href: 'https://apps.apple.com/us/app/apertou-comprou/id6774382208', label: 'App Store', kind: 'apple' },
      { href: 'https://play.google.com/store/apps/details?id=com.apertoucomprou.app&hl=pt_BR', label: 'Google Play', kind: 'play' }
    ],
    images: [
      ['assets/images/projects/apertou.webp', 'Página do Apertou Comprou'],
      ['assets/images/projects/apertou-baixo.webp', 'Trecho da página do Apertou Comprou'],
      ['assets/images/projects/apertou-mobile.webp', 'Apertou Comprou no celular'],
      ['assets/images/projects/apertou-appstore.webp', 'Página do Apertou Comprou na App Store'],
      ['assets/images/projects/apertou-playpage.webp', 'Página do Apertou Comprou na Google Play'],
      ['assets/images/projects/apertou-ios-1.webp', 'Tela do app publicada na App Store'],
      ['assets/images/projects/apertou-ios-2.webp', 'Outra tela do app publicada na App Store'],
      ['assets/images/projects/apertou-play-1.webp', 'Tela do app publicada na Google Play'],
      ['assets/images/projects/apertou-play-2.webp', 'Outra tela do app publicada na Google Play']
    ]
  },
  junto: {
    title: 'Junto',
    summary: 'Aplicativo para encontrar treinos de corrida em grupo na cidade, confirmar presença, criar treinos e conversar no chat do grupo. Dá para conectar o Strava. Na Google Play o nome é Corra junto.',
    points: ['A página da loja também cita treinos filtrados por distância, horário e ritmo, e treinos exclusivos para mulheres.'],
    stack: [],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=br.com.juntoapp.app&hl=pt_BR', label: 'Google Play', kind: 'play' }
    ],
    images: [
      ['assets/images/projects/junto-playpage.webp', 'Página do Junto na Google Play'],
      ['assets/images/projects/junto-play-1.webp', 'Tela do Junto publicada na Google Play'],
      ['assets/images/projects/junto-play-2.webp', 'Outra tela do Junto publicada na Google Play'],
      ['assets/images/projects/junto-play-3.webp', 'Terceira tela do Junto publicada na Google Play']
    ]
  },
  voxx: {
    title: 'Agência Voxx',
    summary: 'Site da Agência Voxx, de marketing digital em Itapetininga. A página apresenta planejamento, redes sociais, identidade visual e tráfego pago.',
    points: ['Next.js 16, React 19, TypeScript, Tailwind CSS e Framer Motion, conferidos no repositório público e no site no ar.'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    links: [
      { href: 'https://www.agenciavoxx.com.br/', label: 'Site' },
      { href: 'https://github.com/devrafcks/site-agencia-voxx', label: 'Repositório', kind: 'repo' }
    ],
    images: [
      ['assets/images/projects/voxx.webp', 'Página inicial da Agência Voxx'],
      ['assets/images/projects/voxx-baixo.webp', 'Serviços na página da Agência Voxx'],
      ['assets/images/projects/voxx-mobile.webp', 'Agência Voxx no celular']
    ]
  },
  jotape: {
    title: 'Jotape Relógios',
    summary: 'Loja de relógios originais, projeto freelance. Catálogo por marca, busca, acompanhamento de pedido e atendimento pelo WhatsApp.',
    points: ['A stack não aparece no site público, então não está listada aqui.'],
    stack: [],
    links: [{ href: 'https://jotaperelogios.store', label: 'Projeto' }],
    images: [
      ['assets/images/projects/jotape.webp', 'Página da Jotape Relógios'],
      ['assets/images/projects/jotape-baixo.webp', 'Catálogo da Jotape Relógios'],
      ['assets/images/projects/jotape-mobile.webp', 'Jotape Relógios no celular']
    ]
  },
  seeb: {
    title: 'SeeB',
    summary: 'Extensão para Chromium, Manifest V3, e widget de uma linha. Foi o TCC na ETEC Parque Belém. Dá para ajustar fonte e contraste, usar filtros de daltonismo, guia de leitura e cursor ampliado, e pausar animações. O widget não coleta dados.',
    points: ['O widget entra com uma linha de script. A página e a extensão são JavaScript, sem framework.'],
    stack: ['JavaScript', 'Manifest V3'],
    links: [
      { href: 'https://seeb-page.vercel.app/', label: 'Página' },
      { href: 'https://github.com/devrafcks/seeb-widget', label: 'Repositório', kind: 'repo' }
    ],
    images: [
      ['assets/images/projects/seeb-hero.webp', 'Abertura da página do SeeB'],
      ['assets/images/projects/seeb-recursos.webp', 'Recursos do SeeB']
    ]
  }
};

const dialog = document.getElementById('project-dialog');
const dialogShot = dialog?.querySelector('.dialog__shot');
const dialogCount = dialog?.querySelector('[data-count]');
let dialogProject = null;
let dialogIndex = 0;
let dialogTrigger = null;

function fillList(node, items, asHtml) {
  node.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    if (asHtml === 'card') li.className = 'card__item';
    node.appendChild(li);
  });
}

function showShot() {
  if (!dialogProject) return;
  const images = dialogProject.images;
  const current = images[dialogIndex];
  dialogShot.src = current[0];
  dialogShot.alt = current[1];
  const small = current[0].replace('.webp', '-640.webp');
  dialogShot.srcset = small + ' 640w, ' + current[0] + ' 1280w';
  dialogShot.sizes = '(max-width: 700px) 92vw, 640px';
  dialogCount.textContent = (dialogIndex + 1) + ' / ' + images.length;
  dialog.querySelector('[data-prev]').hidden = images.length < 2;
  dialog.querySelector('[data-next]').hidden = images.length < 2;
  dialogCount.hidden = images.length < 2;
}

function openProject(id, trigger) {
  const data = PROJECTS[id];
  if (!data || !dialog) return;
  dialogProject = data;
  dialogIndex = 0;
  dialogTrigger = trigger;
  dialog.querySelector('#dialog-title').textContent = data.title;
  dialog.querySelector('[data-summary]').textContent = data.summary;
  const points = dialog.querySelector('[data-points]');
  const stack = dialog.querySelector('[data-stack]');
  fillList(points, data.points, 'card');
  fillList(stack, data.stack);
  points.hidden = data.points.length === 0;
  stack.hidden = data.stack.length === 0;
  const links = dialog.querySelector('[data-links]');
  links.replaceChildren();
  data.links.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    const span = document.createElement('span');
    span.textContent = link.label;
    if (link.kind === 'apple' || link.kind === 'play') {
      a.className = 'store-link';
      a.insertAdjacentHTML('afterbegin', link.kind === 'apple'
        ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M11.2 8.4c0-1.6 1.3-2.4 1.4-2.4-.8-.1-1.6.5-2 .5s-1.1-.5-1.8-.4c-.9 0-1.8.5-2.2 1.4-1 1.7-.2 4.2.7 5.6.4.7 1 1.4 1.7 1.4s.9-.5 1.8-.5 1.1.5 1.8.4 1.2-.7 1.6-1.4c.5-.8.7-1.5.7-1.6-.1 0-1.5-.6-1.5-2.4zM9.8 4.8c.4-.5.6-1.1.6-1.8 0-.1 0-.1 0-.2-.6 0-1.2.4-1.6.8-.3.4-.7 1.1-.6 1.8.1 0 .1 0 .2 0 .5 0 1.1-.3 1.4-.6z"/></svg>'
        : '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M2.2 1.4 9.4 8 2.2 14.6c-.3-.3-.5-.8-.5-1.4V2.8c0-.6.2-1.1.5-1.4zm8 5.8 1.6-1.5 3.2-1.8c.4-.2.8 0 .8.5v8.2c0 .5-.4.7-.8.5l-3.2-1.8-1.6-1.5 2.4-1.3-2.4-1.3zM3.2 1.1l7.2 4.1-1.7 1.5L3.2 1.1zm0 13.8 5.5-5.6 1.7 1.5-7.2 4.1z"/></svg>');
    } else {
      a.className = link.kind === 'repo' ? 'btn' : 'btn btn--primary';
    }
    a.appendChild(span);
    links.appendChild(a);
  });
  showShot();
  dialog.showModal();
}

document.querySelectorAll('.pcard').forEach((card) => {
  card.addEventListener('click', () => openProject(card.dataset.project, card));
});

dialog?.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
dialog?.querySelector('[data-prev]')?.addEventListener('click', () => {
  if (!dialogProject) return;
  dialogIndex = (dialogIndex - 1 + dialogProject.images.length) % dialogProject.images.length;
  showShot();
});
dialog?.querySelector('[data-next]')?.addEventListener('click', () => {
  if (!dialogProject) return;
  dialogIndex = (dialogIndex + 1) % dialogProject.images.length;
  showShot();
});
dialog?.addEventListener('close', () => {
  dialogTrigger?.focus();
});

function wireTabs(tablist) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tabs, index));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      selectTab(tabs, next);
    });
  });
}

function selectTab(tabs, index) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', selected ? 'true' : 'false');
    tab.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) panel.hidden = !selected;
  });
}

document.querySelectorAll('[role="tablist"]').forEach(wireTabs);
