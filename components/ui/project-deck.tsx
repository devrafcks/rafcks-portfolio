/**
 * Project Deck (base: Aakash Mehra). Um baralho de sites distribuído pelo scroll:
 * cada card é a tela inicial de um projeto. O próximo sobe de baixo inclinado e
 * desfocado, aterrissa reto e nítido no meio da tela, e os de baixo recuam e
 * escurecem. O canto inferior direito é recortado para o botão de visita.
 *
 * Adaptado ao portfólio: next/image, ícones Tabler, textos em português, fundo
 * e texto do recorte seguindo o tema claro/escuro. Com movimento reduzido, os
 * cards só aparecem no lugar, sem viagem nem desfoque.
 */
"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { MotionConfig, m, useInView, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DeckProject = {
  name: string;
  /** Uma frase para leitores de tela: o que é o site. */
  summary: string;
  url: string;
  /** Endereço curto mostrado no botão, quando o real é longo. */
  display?: string;
  /** Print do site, de preferência 16:9. */
  image: string;
  /** Cor da seta. */
  accent: string;
};

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const ENTER = 0.72; // parte da "tela" de cada card gasta chegando; o resto ele descansa

/** Quanto o card `j` já chegou (0 abaixo da tela, 1 pousado) no progresso `v`. */
function arrived(j: number, v: number, count: number) {
  if (j <= 0) return 1;
  const span = Math.max(1, count - 1);
  return easeOut(clamp01((v * span - (j - 1)) / ENTER));
}

export function ProjectDeck({
  projects,
  className,
  label = "Projetos",
  children,
}: {
  projects: DeckProject[];
  className?: string;
  label?: string;
  children?: ReactNode;
}) {
  const deck = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const count = projects.length;
  const { scrollYProgress } = useScroll({ target: deck, offset: ["start start", "end end"] });
  // suavização leve e criticamente amortecida: segue a roda de perto e nunca passa do ponto
  const progress = useSpring(scrollYProgress, { stiffness: 380, damping: 48, mass: 0.35 });
  // as imagens só entram quando o deck está a uma tela de distância
  const near = useInView(deck, { once: true, margin: "100% 0px" });

  return (
    <MotionConfig reducedMotion="user">
      {/* uma tela de scroll por card; o palco fica preso enquanto eles são distribuídos */}
      <section ref={deck} className={cn("relative w-full", className)} style={{ height: `${Math.max(1, count) * 100}svh` }} aria-label={label}>
        <div className="sticky top-0 grid h-[100svh] place-items-center overflow-hidden px-5 [perspective:1800px] sm:px-10 lg:px-14">
          {projects.map((p, i) => (
            <Card key={p.url} p={p} i={i} count={count} progress={progress} still={reduce} load={near} />
          ))}
        </div>
      </section>
      {children}
    </MotionConfig>
  );
}

function Card({ p, i, count, progress, still, load }: { p: DeckProject; i: number; count: number; progress: MotionValue<number>; still: boolean; load: boolean }) {
  // quantos cards já estão por cima deste, contados de forma contínua
  const above = (v: number) => {
    let n = 0;
    for (let j = i + 1; j < count; j++) n += arrived(j, v, count);
    return Math.min(3, n);
  };
  const y = useTransform(progress, (v) => `${(1 - arrived(i, v, count)) * 108 - above(v) * 5}svh`);
  const rotateX = useTransform(progress, (v) => -(1 - arrived(i, v, count)) * 30 + above(v) * 5);
  const scale = useTransform(progress, (v) => 0.9 + 0.1 * arrived(i, v, count) - above(v) * 0.05);
  // desfoque só enquanto o card chega; pousado ou coberto, sem filtro (filtro custa repintura a cada frame)
  const filter = useTransform(progress, (v) => {
    const blur = (1 - arrived(i, v, count)) ** 2 * 12;
    return blur < 0.05 ? "none" : `blur(${blur.toFixed(2)}px)`;
  });
  const dim = useTransform(progress, (v) => above(v) * 0.15);
  const stillY = useTransform(progress, (v) => (arrived(i, v, count) >= 0.5 ? "0svh" : "110svh"));

  return (
    <m.article
      aria-label={`${p.name}: ${p.summary}`}
      className="col-start-1 row-start-1 mt-[4svh] w-[min(100%,calc(78svh*16/9),1280px)] origin-[50%_25%] will-change-transform max-sm:w-full"
      style={{ zIndex: i + 1, ...(still ? { y: stillY } : { y, rotateX, scale, filter }) }}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-paper shadow-[0_50px_90px_-35px_rgba(43,30,32,0.5)] dark:bg-night">
        <div className="relative aspect-[16/9] w-full max-sm:aspect-[4/5]">
          {load && (
            <Image
              src={p.image}
              alt={`Tela inicial de ${host(p.url)}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1400px) 90vw, 1280px"
              loading="eager"
              className="object-cover object-top"
            />
          )}
        </div>
        <Visit p={p} />
        <m.div aria-hidden className="pointer-events-none absolute inset-0 bg-night" style={{ opacity: still ? 0 : dim }} />
      </div>
    </m.article>
  );
}

/** O botão de visita, encaixado num canto recortado do card. */
function Visit({ p }: { p: DeckProject }) {
  const R = 18;
  const corner = (
    <svg aria-hidden width={R} height={R} viewBox={`0 0 ${R} ${R}`} className="block fill-paper dark:fill-night">
      <path d={`M${R} 0 V${R} H0 A${R} ${R} 0 0 0 ${R} 0 Z`} />
    </svg>
  );
  return (
    <div className="absolute right-0 bottom-0 z-10">
      <div className="absolute right-0 bottom-full">{corner}</div>
      <div className="absolute right-full bottom-0">{corner}</div>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar ${p.name} em ${host(p.url)} (abre em nova aba)`}
        className="group flex items-center gap-4 rounded-tl-[20px] bg-paper py-3 pr-1 pl-5 text-ink outline-none sm:gap-5 sm:py-4 sm:pl-7 dark:bg-night dark:text-white"
      >
        <span className="flex flex-col leading-tight">
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] sm:text-[18px]">{p.name}</span>
          <span className="text-[13px] text-ink/80 underline-offset-4 group-hover:underline group-focus-visible:underline sm:text-[15px] dark:text-white/80">
            {p.display ?? host(p.url)}
          </span>
        </span>
        <span
          className="grid size-11 place-items-center rounded-full text-white transition-transform duration-200 ease-out group-hover:rotate-45 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-active:scale-90 sm:size-[52px]"
          style={{ background: p.accent, outlineColor: p.accent }}
        >
          <IconArrowUpRight size={22} stroke={2.2} aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
