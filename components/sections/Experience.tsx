import type { Experience as ExperienceItem } from "@/data/types";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineLine } from "@/components/motion/TimelineLine";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience({ title, items }: { title: string; items: ExperienceItem[] }) {
  return (
    <section id="experiencia" className="bg-cream py-20 dark:bg-night-2">
      {/* o fundo vai de ponta a ponta; só o conteúdo segue a largura da página */}
      <div className="shell">
        <SectionHeading title={title} titleClassName="max-w-xl" />
        <TimelineLine className="mt-12 space-y-8">
          {items.map((item) => (
            <Reveal
              as="article"
              key={item.org}
              className="relative grid gap-6 border-t border-ink/15 pt-8 sm:pl-10 lg:grid-cols-[16rem_minmax(0,1fr)] dark:border-white/15"
            >
              <span aria-hidden="true" className="absolute top-9 left-0 hidden size-[11px] rounded-full border-2 border-ember bg-cream sm:block dark:bg-night-2" />
              <div>
                <p className="font-label text-xs font-extrabold uppercase tracking-[0.08em] italic">{item.period}</p>
                <p className="mt-1 text-sm text-ink/80 dark:text-white/80">{item.mode}</p>
              </div>
              <div>
                <h3 className="font-display text-[clamp(1.35rem,1.1rem+0.8vw,1.9rem)] font-semibold tracking-[-0.03em]">
                  {item.role}
                </h3>
                <p className="mt-1 font-label text-sm font-extrabold uppercase tracking-[0.06em] italic">{item.org}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.summary}</p>
                {item.more?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">
                    {paragraph}
                  </p>
                ))}
                {item.did.length > 0 && (
                  <>
                    {item.didLabel ? (
                      <p className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.didLabel}</p>
                    ) : null}
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/85 dark:text-white/80">
                      {item.did.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </>
                )}
                {item.closing ? (
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink/85 dark:text-white/80">{item.closing}</p>
                ) : null}
                {item.result && (
                  <p className="mt-6 inline-flex flex-col bg-ink px-4 py-3 text-white dark:bg-sun dark:text-ink">
                    <CountUp value={item.result.value} className="font-display text-[clamp(1.6rem,1.2rem+1vw,2.2rem)] leading-none font-bold" />
                    <span className="mt-1 text-sm">{item.result.label}</span>
                  </p>
                )}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {item.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </TimelineLine>
      </div>
    </section>
  );
}
