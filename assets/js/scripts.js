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

const testimonials = [
    {
        name: 'Maria Eduarda',
        position: 'Colega do curso técnico',
        photo: 'https://api.dicebear.com/9.x/micah/svg?seed=Amaya',
        text: 'O Rafael sempre foi uma das pessoas em quem eu mais confiei no curso. Sempre disposto a ajudar, mesmo quando tinha muita coisa pra fazer. Aprendi muito com ele, tanto nas matérias quanto na forma de lidar com as dificuldades.',
    },
    {
        name: "Vitor Alexandre",
        position: "Amigo e colega de curso técnico",
        photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=Sawyer",
        text: "Estudamos juntos por três anos e o Rafael sempre foi a pessoa que todo mundo procurava quando tinha dúvida. Ele explicava com calma e sempre ajudava de verdade. Muito parceiro.",
    },
    {
        name: "Massiel Condori",
        position: "Coautora de TCC e colega de curso técnico",
        photo: "https://api.dicebear.com/9.x/micah/svg?seed=Liam",
        text: "Fazer o TCC com o Rafael foi tranquilo porque ele sempre foi muito responsável. Se preocupava em entregar tudo certo e no prazo. Resolvia o que aparecia e deixava tudo bem feito.",
    } 
];

let testimonialIdx = 1;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

    anime({
        targets: toggleTheme,
        rotate: [0, 360],
        scale: [0.9, 1],
        duration: 500,
        easing: 'easeOutQuad'
    });
}

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[testimonialIdx];

    anime({
        targets: [testimonial, userImage, username, role],
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 180,
        easing: 'easeInOutQuad',
        complete: () => {
            testimonial.innerHTML = text;
            userImage.src = photo;
            username.innerHTML = name;
            role.innerHTML = position;

            anime({
                targets: [testimonial, userImage, username, role],
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 250,
                easing: 'easeOutQuad'
            });
        }
    });

    testimonialIdx = (testimonialIdx + 1) % testimonials.length;
}

function animateAccordionItem(item, isActive) {
    const body = item.querySelector('.accordion__body');
    const icon = item.querySelector('.bi-caret-down-fill');
    const duration = 200;

    if (isActive) {
        anime({
            targets: body,
            height: [body.scrollHeight, 0],
            opacity: [1, 0],
            duration,
            easing: 'easeOutQuad',
            complete: () => {
                body.style.display = 'none';
                item.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    } else {
        body.style.display = 'block';
        anime({
            targets: body,
            height: [0, body.scrollHeight],
            opacity: [0, 1],
            duration,
            easing: 'easeOutQuad',
            complete: () => {
                body.style.height = 'auto';
                item.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    }
}

const createScrollObserver = (selector, animateIn, animateOut, threshold = 0.05) => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.isIntersecting ? animateIn(entry.target) : animateOut(entry.target);
        });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
};

const simpleFadeIn = (target) => {
    anime({
        targets: target,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 350,
        easing: 'easeOutQuad'
    });
};

const simpleFadeOut = (target) => {
    anime({
        targets: target,
        opacity: [1, 0],
        translateY: [0, 30],
        duration: 250,
        easing: 'easeInQuad'
    });
};

const animateAboutIn = simpleFadeIn;
const animateAboutOut = simpleFadeOut;

const animateProjectsIn = simpleFadeIn;
const animateProjectsOut = simpleFadeOut;

const animateContactIn = simpleFadeIn;
const animateContactOut = simpleFadeOut;

const animateTestimonialIn = simpleFadeIn;
const animateTestimonialOut = simpleFadeOut;

const animateFooterIn = simpleFadeIn;
const animateFooterOut = simpleFadeOut;

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        document.querySelectorAll('.accordion__item.active').forEach(openItem => {
            if (openItem !== accordionItem) animateAccordionItem(openItem, true);
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
        .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
        .join('');
});

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenLoader = document.getElementById('fullscreen-loader');
    const mainContent = document.querySelector('main');

    document.body.style.overflow = 'hidden';

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
                    translateY: [20, 0],
                    duration: 400,
                    easing: 'easeOutQuad'
                });
            }, { once: true });
        }
    }, 1800);
});

setInterval(updateTestimonial, 6500);

createScrollObserver('#sobre', animateAboutIn, animateAboutOut, 0.1);
createScrollObserver('#projetos', animateProjectsIn, animateProjectsOut, 0.1);
createScrollObserver('#contato', animateContactIn, animateContactOut, 0.1);
createScrollObserver('.testimonials-container', animateTestimonialIn, animateTestimonialOut, 0.15);
createScrollObserver('footer', animateFooterIn, animateFooterOut, 0.05);
