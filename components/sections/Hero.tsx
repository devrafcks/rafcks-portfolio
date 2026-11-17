import { IconArrowDown, IconArrowDownRight, IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import { HeroArt } from "@/components/art/HeroArt";
import { HeroHat } from "@/components/art/HeroHat";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { Button } from "@/components/ui/Button";

const socials = [
  { href: "https://github.com/devrafcks", label: "GitHub", Icon: IconBrandGithub },
  { href: "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: "https://devrafcks.github.io/Linkbio/", label: "LinkBio", Icon: IconLink },
];

export function Hero() {
  return (
    <header
      id="inicio"
      className="@container relative isolate overflow-x-clip px-5 pt-24 pb-16 sm:px-8 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:px-16 lg:pt-28 lg:pb-24"
    >
      <HeroArt />
      <HeroHat />
      <div>
        <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">
          Full stack · SaaS · Produto
        </p>
      </div>
      <div className="relative mt-4">
        <HeroTitle />
        <div className="mt-8 max-w-xl">
          <p className="text-[clamp(1rem,0.95rem+0.2vw,1.15rem)] leading-relaxed text-ink/85 dark:text-white/85">
              Desenvolvedor full stack de 19 anos, em São Paulo. Crio SaaS e produtos digitais de ponta a ponta: entendo o problema, desenho a solução, construo, integro pagamentos e cuido de tudo depois que vai para o ar. Acessibilidade e performance entram no primeiro commit.
            </p>
          <div className="mt-8 flex flex-wrap items-center gap-1 sm:gap-3">
            <Magnetic strength={0.25}>
              <Button href="#projetos" variant="primary" className="group">
                Ver projetos
                <IconArrowDownRight size={18} stroke={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Button>
            </Magnetic>
            {socials.map(({ href, label, Icon }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full text-ink transition-colors duration-300 hover:bg-ink hover:text-sun dark:text-white dark:hover:bg-white dark:hover:text-ink"
                >
                  <Icon size={22} stroke={1.75} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={1.4} y={0} className="absolute bottom-8 left-16 hidden lg:block">
        <a
          href="#sobre"
          className="flex items-center gap-3 font-label text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-ink/80 italic hover:text-ink dark:text-white/80 dark:hover:text-white"
        >
          <span className="grid h-9 w-6 justify-center overflow-hidden rounded-full border border-current pt-1.5">
            <IconArrowDown size={12} stroke={2.5} aria-hidden="true" className="scroll-cue" />
          </span>
          Role para baixo
        </a>
      </Reveal>
    </header>
  );
}
