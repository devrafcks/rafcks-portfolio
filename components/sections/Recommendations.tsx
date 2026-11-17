import { IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import { recommendations } from "@/data/recommendations";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Recommendations() {
  return (
    <section id="recomendacoes" className="bg-cream px-5 py-20 sm:px-10 dark:bg-night-2">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Quem trabalhou comigo" />
        <RevealGroup className="mt-10 grid items-stretch gap-6 lg:grid-cols-2" stagger={0.15}>
          {recommendations.map((item) => (
            <RevealItem
              as="figure"
              key={item.name}
              className="group flex h-full flex-col bg-paper p-6 sm:p-8 dark:bg-night"
            >
              <blockquote className="flex-1">
                <span
                  className="block font-display text-6xl leading-none text-sun"
                  aria-hidden="true"
                >
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
                  className="size-14 shrink-0 rounded-full object-cover ring-2 ring-transparent ring-offset-2 ring-offset-paper transition-shadow duration-500 group-hover:ring-sun dark:ring-offset-night"
                />
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-ink/80 dark:text-white/80">{item.role}</p>
                  <p className="text-sm text-ink/80 dark:text-white/80">{item.date}</p>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-ember-ink underline-offset-2 hover:underline"
                  >
                    <IconBrandLinkedin size={16} stroke={1.75} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
