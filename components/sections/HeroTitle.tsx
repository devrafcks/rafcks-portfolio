/**
 * "Rafael" sobe letra por letra; "Blanco" (contornado) é revelado da esquerda para a direita.
 * Animação em CSS puro: roda na primeira pintura, sem esperar o JavaScript, e com
 * "reduzir movimento" o título já aparece pronto.
 */
export function HeroTitle() {
  return (
    <h1 className="max-w-full font-display text-[clamp(2.05rem,12.3cqw,14.7rem)] leading-[0.92] font-bold text-ink dark:text-white">
      <span className="sr-only">Rafael Blanco</span>
      <span aria-hidden="true" className="block w-fit overflow-hidden pb-[0.06em] tracking-[0.005em]">
        {"Rafael".split("").map((letter, index) => (
          <span key={index} className="title-letter inline-block" style={{ animationDelay: `${100 + index * 50}ms` }}>
            {letter}
          </span>
        ))}
      </span>
      <span aria-hidden="true" className="title-wipe blanco-outline block w-fit tracking-[-0.04em]">
        Blanco
      </span>
    </h1>
  );
}
