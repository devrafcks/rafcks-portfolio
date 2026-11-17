import { projects } from "@/data/projects";
import { SplitText } from "@/components/motion/SplitText";
import { ProjectDeck, type DeckProject } from "@/components/ui/project-deck";

const picks = ["mirante", "t2", "carretel", "cresce"];
const accents = ["#2b1e20", "#b45309"];

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
      accent: accents[index % accents.length],
    };
  });

/** Os sistemas que estão no ar, distribuídos um a um pelo scroll antes da grade de projetos. */
export function Featured() {
  return (
    <section id="no-ar" aria-labelledby="no-ar-titulo" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-10 lg:px-0">
        <h2 id="no-ar-titulo" className="font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          <SplitText text="No ar, em produção" />
        </h2>
      </div>
      <ProjectDeck projects={deck} label="Sistemas no ar" />
    </section>
  );
}
