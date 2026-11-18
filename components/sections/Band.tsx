import { VelocityTrack } from "@/components/motion/VelocityTrack";

/**
 * Duas fitas cruzadas em X: a amarela na frente, com o texto grande, e uma fita
 * escura por trás, menor e legível, andando no sentido oposto. As inclinações
 * opostas deixam a fita escura aparecer inteira nas pontas. As duas
 * aceleram com o scroll e param fora da tela. Só decoração.
 */
export function Band({ words }: { words: string[] }) {
  return (
    <div id="faixa" aria-hidden="true" className="relative isolate my-6 overflow-x-clip py-24 sm:my-10 sm:py-36">
      {/* fita de trás */}
      <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[6deg] bg-ink sm:rotate-[7deg] py-2.5 dark:bg-cream">
        <VelocityTrack
          speed={1.2}
          direction={1}
          className="font-label text-[clamp(0.8rem,0.7rem+0.35vw,1rem)] font-extrabold tracking-[0.12em] text-paper uppercase italic dark:text-ink"
        >
          <div className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={word} className="flex items-center gap-6 pr-6">
                {word}
                <span className="text-sun dark:text-ember-ink">/</span>
              </span>
            ))}
          </div>
        </VelocityTrack>
      </div>

      {/* fita da frente */}
      <div className="relative -mx-[5%] -rotate-[5deg] bg-sun py-4 sm:-rotate-[6deg] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.45)] sm:py-5">
        <VelocityTrack speed={2} className="font-display text-[clamp(1.6rem,1rem+2.4vw,3.4rem)] leading-none font-bold tracking-[-0.03em] text-ink">
          <div className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={word} className="flex items-center gap-8 pr-8">
                {word}
                <span className="text-ink/40">/</span>
              </span>
            ))}
          </div>
        </VelocityTrack>
      </div>
    </div>
  );
}
