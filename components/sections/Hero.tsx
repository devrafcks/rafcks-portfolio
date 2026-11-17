import { IconArrowDownRight, IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden px-5 pt-24 pb-28 sm:px-10 lg:px-16 lg:pt-28">
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,188,0,0.45),transparent_68%)]" />
      <div className="pointer-events-none absolute top-24 right-[18%] h-40 w-40 rounded-full border-[10px] border-ember/30" />
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:gap-6">
        <div className="relative z-10 max-w-3xl">
          <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">
            Desenvolvedor Full Stack
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,1.2rem+6vw,5.6rem)] leading-[0.92] font-bold tracking-[-0.045em] text-ink dark:text-white">
            Rafael
            <span className="mt-1 block text-paper [-webkit-text-stroke:0.035em_#2B1E20] [paint-order:stroke_fill] dark:text-night dark:[-webkit-text-stroke:0.035em_#fff]">
              Blanco
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(1rem,0.95rem+0.2vw,1.15rem)] leading-relaxed text-ink/80 dark:text-white/80">
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
        <div className="relative min-h-[22rem] lg:min-h-[34rem]">
          <Image
            src="/images/rafael.webp"
            alt="Rafael Blanco"
            width={960}
            height={960}
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="h-full max-h-[40rem] w-full object-cover object-[center_18%]"
          />
        </div>
      </div>
    </header>
  );
}
