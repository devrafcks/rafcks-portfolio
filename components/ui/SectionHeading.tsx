import { BrushStroke } from "@/components/motion/BrushStroke";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

/** Rótulo pequeno + título grande, com o título subindo palavra por palavra. */
export function SectionHeading({
  eyebrow,
  title,
  className = "",
  titleClassName = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal y={12}>
          <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">{eyebrow}</p>
        </Reveal>
      )}
      <h2 className={`mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em] ${titleClassName}`}>
        <SplitText text={title} />
      </h2>
      <BrushStroke className="mt-4 w-[clamp(6.5rem,4rem+6vw,10rem)] text-sun" />
    </div>
  );
}
