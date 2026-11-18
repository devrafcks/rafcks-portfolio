import { IconArrowDown, IconArrowDownRight, IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import { HeroArt } from "@/components/art/HeroArt";
import { HeroHat } from "@/components/art/HeroHat";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { HeroTitle } from "@/components/sections/HeroTitle";
import { Button } from "@/components/ui/Button";
import type { Dict } from "@/lib/i18n/dictionaries/pt";

const socials = [
  { href: "https://github.com/devrafcks", label: "GitHub", Icon: IconBrandGithub },
  { href: "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: "https://devrafcks.github.io/Linkbio/", label: "LinkBio", Icon: IconLink },
];

export function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <header
      id="inicio"
      className="relative isolate overflow-x-clip pt-24 pb-16 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-28 lg:pb-24"
    >
      <HeroArt />
      <HeroHat />
      {/* o conteúdo segue a mesma largura das seções; só a arte de fundo vai até a borda */}
      <div className="shell @container relative">
      <div>
        <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">
          {t.chip}
        </p>
      </div>
      <div className="relative mt-4">
        <HeroTitle />
        <div className="mt-8 max-w-xl">
          <p className="text-[clamp(1rem,0.95rem+0.2vw,1.15rem)] leading-relaxed text-ink/85 dark:text-white/85">
              {t.intro}
            </p>
          <div className="mt-8 flex flex-wrap items-center gap-1 sm:gap-3">
            <Magnetic strength={0.25}>
              <Button href="#projetos" variant="primary" className="group">
                {t.cta}
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

      </div>

      <Reveal delay={1.4} y={0} className="absolute bottom-8 left-[max(4rem,calc((100%-80rem)/2+4rem))] hidden lg:block">
        <a
          href="#sobre"
          className="flex items-center gap-3 font-label text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-ink/80 italic hover:text-ink dark:text-white/80 dark:hover:text-white"
        >
          <span className="grid h-9 w-6 justify-center overflow-hidden rounded-full border border-current pt-1.5">
            <IconArrowDown size={12} stroke={2.5} aria-hidden="true" className="scroll-cue" />
          </span>
          {t.scroll}
        </a>
      </Reveal>
    </header>
  );
}
