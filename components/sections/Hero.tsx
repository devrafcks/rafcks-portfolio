import { IconArrowDownRight, IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header id="inicio" className="@container relative overflow-x-clip px-5 pt-24 pb-16 sm:px-8 lg:px-16 lg:pt-28 lg:pb-20">
      <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">
        Desenvolvedor Full Stack
      </p>
      <div className="relative mt-4">
        <h1 className="max-w-full font-display text-[clamp(2.4rem,21.8cqw,40rem)] leading-[0.9] font-bold tracking-[-0.04em] text-ink dark:text-white">
          Rafael
          <span className="block text-paper [-webkit-text-stroke:0.035em_#2B1E20] [paint-order:stroke_fill] dark:text-night dark:[-webkit-text-stroke:0.035em_#fff]">
            Blanco
          </span>
        </h1>
        <div className="mt-8 max-w-xl">
            <p className="text-[clamp(1rem,0.95rem+0.2vw,1.15rem)] leading-relaxed text-ink/80 dark:text-white/80">
              19 anos, São Paulo. Construo produtos web, SaaS e mobile, do requisito à publicação. Acessibilidade e performance entram desde o começo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#projetos" variant="primary">
                Ver projetos
                <IconArrowDownRight size={18} stroke={1.75} />
              </Button>
              <a href="https://github.com/devrafcks" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink dark:text-white">
                <IconBrandGithub size={22} stroke={1.75} />
              </a>
              <a href="https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink dark:text-white">
                <IconBrandLinkedin size={22} stroke={1.75} />
              </a>
              <a href="https://devrafcks.github.io/Linkbio/" target="_blank" rel="noopener noreferrer" aria-label="LinkBio" className="text-ink dark:text-white">
                <IconLink size={22} stroke={1.75} />
              </a>
            </div>
        </div>
      </div>
    </header>
  );
}
