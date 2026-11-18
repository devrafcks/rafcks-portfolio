import { HeroHat } from "@/components/art/HeroHat";

/**
 * "Rafael" sobe letra por letra; "Blanco" (contornado) é revelado da esquerda para a direita.
 * Animação em CSS puro: roda na primeira pintura, sem esperar o JavaScript, e com
 * "reduzir movimento" o título já aparece pronto. O chapéu nasce em cima do "l" de Rafael.
 */
export function HeroTitle() {
  return (
    <h1 className="max-w-full font-display text-[clamp(2.05rem,12.3cqw,14.7rem)] leading-[0.92] font-bold text-ink dark:text-white">
      <span className="sr-only">Rafael Blanco</span>
      {/* a linha tem overflow escondido (as letras sobem de dentro dela); o chapéu fica num irmão, fora do corte */}
      <span aria-hidden="true" className="relative block w-fit">
        <span className="block w-fit overflow-hidden pb-[0.06em] tracking-[0.005em]">
          {"Rafael".split("").map((letter, index) => (
            <span key={index} className="title-letter inline-block" style={{ animationDelay: `${100 + index * 50}ms` }}>
              {letter}
            </span>
          ))}
        </span>
        {/* o chapéu fica na ponta do "l" (a última letra, ~0,13em da borda direita), com a aba apoiada no topo da letra */}
        <HeroHat className="absolute right-[-0.82em] bottom-[0.24em] hidden w-[1.9em] md:block" />
      </span>
      <span aria-hidden="true" className="title-wipe blanco-outline block w-fit tracking-[-0.04em]">
        Blanco
      </span>
    </h1>
  );
}
