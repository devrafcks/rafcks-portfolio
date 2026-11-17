import { experiences } from "@/data/experiences";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experiencia" className="bg-cream px-5 py-20 sm:px-10 dark:bg-night-2">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">Trajetória</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Experiências
        </h2>
        <div className="mt-12 space-y-8">
          {experiences.map((item) => (
            <article key={item.org} className="grid gap-6 border-t border-ink/15 pt-8 lg:grid-cols-[16rem_minmax(0,1fr)] dark:border-white/15">
              <div>
                <p className="font-label text-xs font-extrabold uppercase tracking-[0.08em] italic">{item.period}</p>
                <p className="mt-1 text-sm text-ink/70 dark:text-white/70">{item.mode}</p>
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.35rem,1.1rem+0.8vw,1.9rem)] font-semibold tracking-[-0.03em]">
                  {item.role}
                </h3>
                <p className="mt-1 font-label text-sm font-extrabold uppercase tracking-[0.06em] italic">{item.org}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.summary}</p>
                {item.did.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/85 dark:text-white/80">
                    {item.did.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                )}
                {item.result && (
                  <p className="mt-6 inline-flex flex-col bg-ink px-4 py-3 text-white dark:bg-sun dark:text-ink">
                    <span className="font-display text-[clamp(1.6rem,1.2rem+1vw,2.2rem)] leading-none font-bold">{item.result.value}</span>
                    <span className="mt-1 text-sm">{item.result.label}</span>
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {item.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
