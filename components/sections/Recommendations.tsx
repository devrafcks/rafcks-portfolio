import { recommendations } from "@/data/recommendations";

export function Recommendations() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-10 dark:bg-night-2">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember italic">Recomendações</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Quem trabalhou comigo
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {recommendations.map((item) => (
            <figure key={item.name} className="flex flex-col gap-4">
              <blockquote className="space-y-3 leading-relaxed text-ink/85 dark:text-white/80">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption>
                <p className="font-display text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-ink/70 dark:text-white/70">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
