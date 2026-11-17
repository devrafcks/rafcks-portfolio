import { projects } from "@/data/projects";
import { SplitText } from "@/components/motion/SplitText";
import type { DeckProject } from "@/components/ui/project-deck";
import { FeaturedDeck } from "@/components/sections/FeaturedDeck";

const picks = ["mirante", "t2", "carretel", "cresce"];
const accents = ["#2b1e20", "#b45309"];
// prints de celular que existem mas não estão na galeria do projeto
const mobileOnly: Record<string, string> = { cresce: "/images/projects/cresce-m.webp" };

const deck: DeckProject[] = picks
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))
  .map((project, index) => {
    const site = project.links.find((link) => link.kind === "site");
    const shot = project.cover ?? project.images.find((image) => image.device === "laptop") ?? project.images[0];
    return {
      name: project.title,
      summary: project.summary,
      url: site?.href ?? "#projetos",
      image: shot.src,
      mobileImage: project.images.find((image) => image.device === "phone")?.src ?? mobileOnly[project.id],
      accent: accents[index % accents.length],
    };
  });

/** Os sistemas que estão no ar, distribuídos um a um pelo scroll antes da grade de projetos. */
export function Featured() {
  return (
    <section id="no-ar" aria-labelledby="no-ar-titulo" className="relative">
      <div className="shell pt-20">
        <h2 id="no-ar-titulo" className="font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          <SplitText text="No ar, em produção" />
        </h2>
      </div>
      <FeaturedDeck projects={deck} />
    </section>
  );
}
