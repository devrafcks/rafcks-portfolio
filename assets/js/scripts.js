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

createScrollObserver('#sobre', simpleFadeIn, simpleFadeOut, 0.1);
createScrollObserver('#contato', simpleFadeIn, simpleFadeOut, 0.1);
createScrollObserver('.testimonial-container', simpleFadeIn, simpleFadeOut, 0.15);
createScrollObserver('footer', simpleFadeIn, simpleFadeOut, 0.05);
