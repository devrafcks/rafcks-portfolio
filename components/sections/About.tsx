import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/lib/i18n/dictionaries/pt";

export function About({ t }: { t: Dict["about"] }) {
  return (
    <section id="sobre" className="shell grid gap-10 py-20 lg:grid-cols-[minmax(16rem,0.8fr)_1.2fr] lg:items-start">
      <div>
        <SectionHeading title={t.title} />
        <div className="mt-8 max-w-md">
          <ImageReveal parallax={24}>
            <Image
              src="/images/rafael.webp"
              alt={t.photoAlt}
              width={960}
              height={960}
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="h-auto w-full object-contain"
            />
          </ImageReveal>
        </div>
      </div>
      <RevealGroup className="space-y-4 text-[clamp(1rem,0.95rem+0.15vw,1.125rem)] leading-relaxed text-ink/85 dark:text-white/85" stagger={0.1}>
        <RevealItem as="p">{t.lead}</RevealItem>
        <RevealItem as="p" className="inline-flex max-w-md flex-col bg-ink px-5 py-4 text-white dark:bg-sun dark:text-ink">
          <CountUp value={t.savedValue} className="font-display text-[clamp(1.8rem,1.4rem+1vw,2.6rem)] leading-none font-bold" />
          <span className="mt-2 text-sm leading-snug">{t.savedLabel}</span>
        </RevealItem>
        {t.paragraphs.map((paragraph) => (
          <RevealItem key={paragraph.slice(0, 32)} as="p">
            {paragraph}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
