const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
const labels = document.querySelectorAll('.form-control label');
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const footer = document.querySelector('footer');

const testimonials = [
    {
        name: 'Maria Eduarda',
        position: 'Colega do curso técnico',
        photo: 'https://api.dicebear.com/9.x/micah/svg?seed=Amaya',
        text: 'Durante o curso técnico, o Rafael sempre foi uma referência para mim. Sempre disposto a ajudar, ele nunca se cansou de esclarecer minhas dúvidas e me apoiar nos trabalhos, mesmo quando estava ocupado. Com ele, aprendi não só sobre tecnologia, mas também sobre dedicação e paciência. Ter um colega assim fez toda a diferença na minha jornada acadêmica.',
    },
    {
        name: "Vitor Alexandre",
        position: "Amigo e colega de curso técnico",
        photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=Sawyer",
        text: "Estudamos juntos por três anos no curso técnico e, durante todo esse tempo, sempre contei com ele para resolver dúvidas e ajudar nas atividades mais difíceis. Ele tem uma paciência incrível, explica com clareza e domina os conteúdos com profundidade. Mais que isso, é alguém em quem se pode confiar para colaborar de verdade, sempre disposto a dar o seu melhor para ajudar os colegas. Ter ele como amigo e parceiro de estudos fez toda a diferença para meu aprendizado."
    },
    {
        name: "Massiel Condori",
        position: "Coautora de TCC e colega de curso técnico",
        photo: "https://api.dicebear.com/9.x/micah/svg?seed=Liam",
        text: "Trabalhar com ele no nosso TCC foi uma experiência muito positiva. Ele é um desenvolvedor dedicado, com grande atenção aos detalhes e um senso de responsabilidade admirável. Sempre busca as melhores soluções técnicas e tem uma habilidade incrível de transformar ideias em código funcional e limpo. Durante o projeto, mostrou iniciativa, organização e um cuidado especial com a qualidade do que entrega. É uma pessoa que realmente veste a camisa e faz a diferença na equipe."
    }
];

let testimonialIdx = 1;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

    anime({
        targets: toggleTheme,
        rotate: [0, 360],
        scale: [0.8, 1.2, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .5)',
    });
}

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[testimonialIdx];

    anime({
        targets: [testimonial, userImage, username, role],
        opacity: [1, 0],
        translateY: [0, -20],
        duration: 300,
        easing: 'easeInQuad',
        complete: () => {
            testimonial.innerHTML = text;
            userImage.src = photo;
            username.innerHTML = name;
            role.innerHTML = position;

            anime({
                targets: [testimonial, userImage, username, role],
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 500,
                easing: 'easeOutQuad'
            });
        }
    });

    testimonialIdx++;
    if (testimonialIdx > testimonials.length - 1) {
        testimonialIdx = 0;
    }
}

function animateAccordionItem(item, isActive) {
    const body = item.querySelector('.accordion__body');
    const icon = item.querySelector('.bi-caret-down-fill');
    const duration = 300;

    if (isActive) {
        anime({
            targets: body,
            height: [body.scrollHeight, 0],
            opacity: [1, 0],
            easing: 'easeOutQuad',
            duration: duration,
            complete: () => {
                item.classList.remove('active');
                body.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    } else {
        body.style.display = 'block';
        anime({
            targets: body,
            height: [0, body.scrollHeight],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: duration,
            complete: () => {
                item.classList.add('active');
                body.style.height = 'auto';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    }
}

const createScrollObserver = (selector, animateIn, animateOut, threshold = 0.05) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateIn(entry.target);
            } else {
                animateOut(entry.target);
            }
        });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
};

const animateTechnologiesIn = (target) => {
    anime({
        targets: target.querySelectorAll('.technologies__item'),
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1200,
        delay: anime.stagger(80)
    });
};

const animateTechnologiesOut = (target) => {
    anime({
        targets: target.querySelectorAll('.technologies__item'),
        opacity: [1, 0],
        translateY: [0, 30],
        scale: [1, 0.9],
        easing: 'easeInQuad',
        duration: 400,
        delay: anime.stagger(40, {direction: 'reverse'})
    });
};

const animateAboutIn = (target) => {
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    })
    .add({
        targets: target.querySelector('.about__content1'),
        translateX: [-80, 0],
        opacity: [0, 1],
        easing: 'easeOutQuint',
        duration: 800
    })
    .add({
        targets: target.querySelector('.about__content2'),
        translateX: [80, 0],
        opacity: [0, 1],
        easing: 'easeOutQuint',
        duration: 800
    }, '-=700')
    .add({
        targets: target.querySelectorAll('.about__content1 .about__photo, .about__content1 .about__description h2, .about__content1 .about__description p, .about__content1 .about__icons, .about__content1 .description__buttons'),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutSine',
        duration: 600,
        delay: anime.stagger(70)
    }, '-=500')
    .add({
        targets: target.querySelectorAll('.about__content2 .col1 > div, .about__content2 .col2 h3, #accordion .accordion__item'),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutSine',
        duration: 600,
        delay: anime.stagger(70)
    }, '-=500');
};

const animateAboutOut = (target) => {
    anime.timeline({
        easing: 'easeInQuad',
        duration: 500
    })
    .add({
        targets: target.querySelectorAll('.about__content1 .about__photo, .about__content1 .about__description h2, .about__content1 .about__description p, .about__content1 .about__icons, .about__content1 .description__buttons, .about__content2 .col1 > div, .about__content2 .col2 h3, #accordion .accordion__item'),
        translateY: [0, 30],
        opacity: [1, 0],
        delay: anime.stagger(40, {direction: 'reverse'})
    })
    .add({
        targets: target.querySelector('.about__content1'),
        translateX: [0, -80],
        opacity: [1, 0],
        easing: 'easeInQuad',
        duration: 400
    }, '-=300')
    .add({
        targets: target.querySelector('.about__content2'),
        translateX: [0, 80],
        opacity: [1, 0],
        easing: 'easeInQuad',
        duration: 400
    }, '-=400');
};

const animateProjectsIn = (target) => {
    anime.timeline({
        easing: 'easeOutCubic',
        duration: 1000
    })
    .add({
        targets: target.querySelector('h2'),
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutQuad',
        duration: 600,
    })
    .add({
        targets: target.querySelectorAll('.projects__card'),
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.95, 1],
        easing: 'easeOutBack(1.2)',
        duration: 800,
        delay: anime.stagger(150)
    }, '-=500')
    .add({
        targets: target.querySelector('.projects .btn--primary'),
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 400,
    }, '-=400');
};

const animateProjectsOut = (target) => {
    anime.timeline({
        easing: 'easeInQuad',
        duration: 600
    })
    .add({
        targets: target.querySelector('.projects .btn--primary'),
        opacity: [1, 0],
        translateY: [0, 20],
        duration: 300
    })
    .add({
        targets: target.querySelectorAll('.projects__card'),
        opacity: [1, 0],
        scale: [1, 0.95],
        translateY: [0, 50],
        easing: 'easeInQuad',
        duration: 400,
        delay: anime.stagger(100, {direction: 'reverse'})
    }, '-=200')
    .add({
        targets: target.querySelector('h2'),
        opacity: [1, 0],
        translateY: [0, 30],
        duration: 300,
    }, '-=300');
};

const animateContactIn = (target) => {
    anime.timeline({
        easing: 'easeOutQuad',
        duration: 800
    })
    .add({
        targets: target.querySelector('h2'),
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutElastic(1, .8)',
        duration: 800,
    })
    .add({
        targets: target.querySelector('p'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
    }, '-=600')
    .add({
        targets: target.querySelectorAll('.form-control input, .form-control textarea'),
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 300,
        delay: anime.stagger(100)
    }, '-=500')
    .add({
        targets: target.querySelector('#contact-form button'),
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [30, 0],
        easing: 'easeOutBack',
        duration: 500,
    }, '-=300')
    .add({
        targets: target.querySelectorAll('.contact .menu--social li'),
        opacity: [0, 1],
        translateX: [-50, 0],
        easing: 'easeOutElastic(1, .8)',
        duration: 600,
        delay: anime.stagger(100)
    }, '-=400');
};

const animateContactOut = (target) => {
    anime.timeline({
        easing: 'easeInQuad',
        duration: 600
    })
    .add({
        targets: target.querySelectorAll('.contact .menu--social li'),
        opacity: [1, 0],
        translateX: [0, -50],
        duration: 300,
        delay: anime.stagger(50, {direction: 'reverse'})
    })
    .add({
        targets: target.querySelector('#contact-form button'),
        opacity: [1, 0],
        scale: [1, 0.8],
        translateY: [0, 30],
        duration: 300,
    }, '-=200')
    .add({
        targets: target.querySelectorAll('.form-control input, .form-control textarea'),
        opacity: [1, 0],
        translateY: [0, 20],
        duration: 200,
        delay: anime.stagger(50, {direction: 'reverse'})
    }, '-=200')
    .add({
        targets: target.querySelector('p'),
        opacity: [1, 0],
        translateY: [0, 30],
        duration: 300,
    }, '-=200')
    .add({
        targets: target.querySelector('h2'),
        opacity: [1, 0],
        translateY: [0, 50],
        duration: 300,
    }, '-=100');
};

const animateTestimonialIn = (target) => {
    anime.timeline({
        easing: 'easeOutBack',
        duration: 800
    })
    .add({
        targets: target,
        scale: [0.9, 1],
        opacity: [0, 1],
        translateY: [30, 0],
    })
    .add({
        targets: target.querySelector('.fa-quote'),
        opacity: [0, 1],
        scale: [0.7, 1],
        easing: 'easeOutBounce',
        duration: 500
    }, '-=400')
    .add({
        targets: target.querySelector('p.testimonial'),
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 400
    }, '-=300')
    .add({
        targets: target.querySelector('.user'),
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 400
    }, '-=200');
};

const animateTestimonialOut = (target) => {
    anime.timeline({
        easing: 'easeInQuad',
        duration: 400
    })
    .add({
        targets: target.querySelector('.user'),
        opacity: [1, 0],
        translateX: [0, -20],
        duration: 200
    })
    .add({
        targets: target.querySelector('p.testimonial'),
        opacity: [1, 0],
        translateY: [0, 15],
        duration: 200
    }, '-=150')
    .add({
        targets: target.querySelector('.fa-quote'),
        opacity: [1, 0],
        scale: [1, 0.7],
        duration: 200
    }, '-=150')
    .add({
        targets: target,
        scale: [1, 0.9],
        opacity: [1, 0],
        translateY: [0, 30],
    }, '-=100');
};

const animateFooterIn = (target) => {
    anime({
        targets: target,
        translateY: ['-10%', '0%'], 
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 700,
    });
};

const animateFooterOut = (target) => {
    anime({
        targets: target,
        translateY: ['0%', '10%'],
        opacity: [1, 0],
        easing: 'easeInQuad',
        duration: 400,
    });
};

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        document.querySelectorAll('.accordion__item.active').forEach(openItem => {
            if (openItem !== accordionItem) {
                animateAccordionItem(openItem, true);
            }
        });
        animateAccordionItem(accordionItem, accordionActive);
    });
});

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenLoader = document.getElementById('fullscreen-loader');
    const mainContent = document.querySelector('main');
    document.body.style.overflow = 'hidden';

    const loaderDisplayTime = 2300;
    setTimeout(() => {
        if (fullscreenLoader) {
            fullscreenLoader.classList.add('hidden');
            fullscreenLoader.addEventListener('transitionend', () => {
                fullscreenLoader.remove();
                document.body.style.overflow = 'auto';
                if (mainContent) mainContent.style.display = 'block';

                anime({
                    targets: mainContent,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
            }, { once: true });
        } else {
            document.body.style.overflow = 'auto';
            if (mainContent) mainContent.style.display = 'block';
        }
    }, loaderDisplayTime);
});

setInterval(updateTestimonial, 5000);

createScrollObserver('.technologies', animateTechnologiesIn, animateTechnologiesOut, 0.1);
createScrollObserver('#sobre', animateAboutIn, animateAboutOut, 0.05);
createScrollObserver('#projetos', animateProjectsIn, animateProjectsOut, 0.05);
createScrollObserver('#contato', animateContactIn, animateContactOut, 0.03);
createScrollObserver('.testimonials-container', animateTestimonialIn, animateTestimonialOut, 0.1);
createScrollObserver('footer', animateFooterIn, animateFooterOut, 0.05);