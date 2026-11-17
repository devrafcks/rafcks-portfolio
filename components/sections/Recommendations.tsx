import { IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import { recommendations } from "@/data/recommendations";

export function Recommendations() {
  return (
    <section id="recomendacoes" className="bg-cream px-5 py-20 sm:px-10 dark:bg-night-2">
      <div className="mx-auto max-w-6xl">
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember italic">Recomendações</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Quem trabalhou comigo
        </h2>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {recommendations.map((item) => (
            <figure key={item.name} className="flex h-full flex-col bg-paper p-6 sm:p-8 dark:bg-night">
              <blockquote className="flex-1">
                <span className="block font-display text-6xl leading-none text-sun" aria-hidden="true">
                  “
                </span>
                <div className="mt-2 space-y-3 leading-relaxed text-ink/85 dark:text-white/80">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-5 dark:border-white/10">
                <Image
                  src={item.photo}
                  alt=""
                  width={400}
                  height={400}
                  sizes="56px"
                  className="size-14 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-ink/70 dark:text-white/70">{item.role}</p>
                  <p className="text-sm text-ink/70 dark:text-white/70">{item.date}</p>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-ember"
                  >
                    <IconBrandLinkedin size={16} stroke={1.75} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
