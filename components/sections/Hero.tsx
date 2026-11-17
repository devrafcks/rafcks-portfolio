import { IconArrowDownRight, IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header id="inicio" className="relative overflow-x-clip px-5 pt-24 pb-16 sm:px-8 lg:px-16 lg:pt-28 lg:pb-20">
      <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">
        Desenvolvedor Full Stack
      </p>
      <div className="relative mt-4">
        <h1 className="max-w-full font-display text-[clamp(4rem,15vw,15rem)] leading-[0.9] font-bold tracking-[-0.04em] text-ink lg:pr-[36%] dark:text-white">
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
        <div className="mt-10 lg:absolute lg:top-2 lg:right-0 lg:mt-0 lg:w-[34%]">
          <HeroArt />
        </div>
      </div>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto h-[15rem] w-full max-w-xl sm:h-[18rem] lg:h-[22rem] lg:max-w-none" aria-hidden="true">
      <div className="absolute inset-x-0 top-[6%] rounded-2xl bg-night p-2 shadow-[0_24px_50px_rgba(43,30,32,0.22)] sm:p-2.5">
        <div className="mb-2 flex gap-1.5 px-1.5">
          <span className="size-2 rounded-full bg-white/35" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="overflow-hidden rounded-lg bg-cream">
          <Image
            src="/images/projects/mirante-01b-faturamento.webp"
            alt=""
            width={1600}
            height={893}
            priority
            sizes="(max-width: 1024px) 92vw, 520px"
            className="aspect-video h-auto w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[30%] max-w-[8.5rem] rounded-[1.2rem] bg-night p-1.5 shadow-[0_16px_36px_rgba(43,30,32,0.28)]">
        <div className="overflow-hidden rounded-[0.9rem] bg-cream">
          <Image
            src="/images/projects/t2-mobile.webp"
            alt=""
            width={390}
            height={844}
            sizes="136px"
            className="aspect-[9/16] h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
