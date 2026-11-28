import type { Experience as ExperienceItem } from "@/data/types";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineDot } from "@/components/motion/TimelineDot";
import { TimelineLine } from "@/components/motion/TimelineLine";
import { MoreList } from "@/components/ui/MoreList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/lib/i18n/dictionaries/pt";

/**
 * Linha do tempo das experiências. No desktop a coluna da empresa fica presa no topo
 * enquanto o texto ao lado rola, então quem lê nunca perde de vista onde está.
 * As listas longas mostram os três primeiros itens e guardam o resto no "Ver mais".
 */
export function Experience({ t, items }: { t: Dict["experience"]; items: ExperienceItem[] }) {
  return (
    <section id="experiencia" className="bg-cream py-20 dark:bg-night-2">
      {/* o fundo vai de ponta a ponta; só o conteúdo segue a largura da página */}
      <div className="shell">
        <SectionHeading title={t.title} titleClassName="max-w-xl" />
        <TimelineLine className="mt-12 space-y-10">
          {items.map((item) => (
            <Reveal
              as="article"
              key={item.org}
              className="relative grid gap-6 border-t border-ink/15 pt-8 sm:pl-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12 dark:border-white/15"
            >
              <TimelineDot current={item.current} className="absolute top-[2.2rem] -left-px hidden sm:grid" />

              <div className="lg:sticky lg:top-24 lg:self-start">
                {item.current && (
                  <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1 font-label text-[0.66rem] font-extrabold tracking-[0.08em] text-ink uppercase italic">
                    <span aria-hidden="true" className="live-dot size-1.5 rounded-full bg-ink" />
                    {t.current}
                  </p>
                )}
                <p className="font-label text-xs font-extrabold tracking-[0.08em] uppercase italic">{item.period}</p>
                <p className="mt-3 font-display text-[clamp(1.5rem,1.15rem+1.1vw,2.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
                  {item.org}
                </p>
                <p className="mt-2 text-sm text-ink/80 dark:text-white/80">{item.mode}</p>
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.15rem,1rem+0.5vw,1.5rem)] leading-snug font-semibold tracking-[-0.02em] text-ember-ink">
                  {item.role}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.summary}</p>
                {item.more?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">
                    {paragraph}
                  </p>
                ))}
                {item.did.length > 0 && (
                  <div className="max-w-2xl">
                    {item.didLabel ? (
                      <p className="mt-6 font-label text-xs font-extrabold tracking-[0.08em] uppercase italic">{item.didLabel}</p>
                    ) : null}
                    <MoreList items={item.did} more={t.more} less={t.less} />
                  </div>
                )}
                {item.closing ? (
                  <p className="mt-5 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.closing}</p>
                ) : null}
                {item.result && (
                  <p className="mt-6 inline-flex flex-col bg-ink px-4 py-3 text-white dark:bg-sun dark:text-ink">
                    <CountUp value={item.result.value} className="font-display text-[clamp(1.6rem,1.2rem+1vw,2.2rem)] leading-none font-bold" />
                    <span className="mt-1 text-sm">{item.result.label}</span>
                  </p>
                )}
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-ink/15 px-3 py-1 font-label text-[0.66rem] font-extrabold tracking-[0.06em] text-ink/85 uppercase italic transition-colors duration-300 hover:border-sun hover:bg-sun hover:text-ink dark:border-white/20 dark:text-white/85 dark:hover:text-ink"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </TimelineLine>
      </div>
    </section>
  );
}
