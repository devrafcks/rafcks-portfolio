import dynamic from "next/dynamic";
import { BrushStroke } from "@/components/motion/BrushStroke";
import { SplitText } from "@/components/motion/SplitText";
import type { Project } from "@/data/types";
import type { DeckProject } from "@/components/ui/project-deck";

const FeaturedDeck = dynamic(() => import("@/components/sections/FeaturedDeck").then((mod) => mod.FeaturedDeck));

const accents = ["#2b1e20", "#b45309"];
// prints de celular que existem mas não estão na galeria do projeto
const mobileOnly: Record<string, string> = { cresce: "/images/projects/cresce-m.webp" };

/** Os sistemas que estão no ar, distribuídos um a um pelo scroll antes da grade de projetos. */
export function Featured({ title, projects, ids }: { title: string; projects: Project[]; ids: string[] }) {
  const deck: DeckProject[] = ids
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project))
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

  return (
    <section id="no-ar" aria-labelledby="no-ar-titulo" className="relative">
      <div className="shell pt-20">
        <h2 id="no-ar-titulo" className="font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          <SplitText text={title} />
        </h2>
        <BrushStroke className="mt-4 w-[clamp(6.5rem,4rem+6vw,10rem)] text-sun" />
      </div>
      <FeaturedDeck projects={deck} />
    </section>
  );
}
