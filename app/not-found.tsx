import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Boat } from "@/components/art/Boat";
import { Sea } from "@/components/art/Sea";
import { SeaMonsters } from "@/components/art/SeaMonsters";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

/** O chapéu visto de cima: a aba, a faixa vermelha e a copa. Faz o papel do zero do 404. */
function HatZero() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="lost-hat h-[0.82em] w-[0.82em] shrink-0">
      <g stroke="#2b1e20" strokeWidth="4">
        <circle cx="60" cy="60" r="56" fill="#f2c14e" />
        <circle cx="60" cy="60" r="44" fill="none" stroke="#c9922e" strokeWidth="2" />
        <circle cx="60" cy="60" r="34" fill="#c8322a" />
        <circle cx="60" cy="60" r="26" fill="#f2c14e" />
        <path d="M44 52c6-6 14-8 22-6" fill="none" stroke="#fff3c4" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/**
 * 404 no tema do site: a página "se perdeu no mar". O zero vira o chapéu boiando,
 * e embaixo o mar com o navio à deriva e os monstros passando. Texto em português
 * com uma linha em inglês e espanhol, porque aqui não dá para saber de onde a pessoa veio.
 */
export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-paper text-ink dark:bg-night dark:text-white">
      <div className="shell flex items-center justify-between pt-5">
        <Link href="/" aria-label="Rafael Blanco, início" className="transition-transform duration-500 hover:-rotate-3">
          <Image src="/images/logo-light.svg" alt="" width={92} height={40} className="h-8 w-auto dark:hidden" />
          <Image src="/images/logo-dark.svg" alt="" width={92} height={40} className="hidden h-8 w-auto dark:block" />
        </Link>
      </div>

      <div className="shell relative z-10 flex flex-1 flex-col items-center justify-center pt-10 pb-56 text-center sm:pb-64">
        <p className="inline-block bg-sun px-3 py-1 font-label text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-ink italic">Erro 404</p>
        <h1 className="mt-6 flex items-center justify-center gap-[0.06em] font-display text-[clamp(5.5rem,22vw,13rem)] leading-none font-bold tracking-[-0.04em]">
          <span>4</span>
          <HatZero />
          <span className="blanco-outline">4</span>
          <span className="sr-only">: página não encontrada</span>
        </h1>
        <p className="mt-8 font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.4rem)] leading-tight font-semibold tracking-[-0.03em]">Essa página se perdeu no mar.</p>
        <p className="mt-2 font-label text-xs font-extrabold tracking-[0.06em] text-ink/70 uppercase italic dark:text-white/70">
          <span lang="en">This page got lost at sea</span> · <span lang="es">Esta página se perdió en el mar</span>
        </p>
        <p className="mt-5 max-w-md leading-relaxed text-ink/80 dark:text-white/80">
          O link pode estar quebrado ou a página mudou de lugar. Volta pro porto e segue a viagem por lá.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 font-label text-xs font-extrabold tracking-[0.08em] text-ink uppercase italic transition-colors hover:bg-ember"
          >
            Voltar ao início
          </Link>
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-label text-xs font-extrabold tracking-[0.08em] uppercase italic transition-colors hover:bg-ink hover:text-sun dark:border-white dark:hover:bg-white dark:hover:text-ink"
          >
            Ver projetos
          </Link>
        </div>
      </div>

      {/* o mar no pé da página, com o navio à deriva e os monstros passando */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 sm:h-56">
        <div className="sun-glow absolute top-0 right-[12%] size-[30rem] translate-x-1/2 -translate-y-1/2 rounded-full" />
        <SeaMonsters className="absolute inset-x-0 top-[-11rem] bottom-[86%]" />
        <Sea className="absolute inset-0" />
        <div className="boat-drift absolute top-[calc(20%-6.2rem)] left-[8%] w-[9.5rem] sm:left-[14%]">
          <Boat className="boat-bob block h-auto w-full" />
        </div>
      </div>
    </main>
  );
}
