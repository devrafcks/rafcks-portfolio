import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { About } from "@/components/sections/About";
import { Band } from "@/components/sections/Band";
import { Experience } from "@/components/sections/Experience";
import { Featured } from "@/components/sections/Featured";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Recommendations } from "@/components/sections/Recommendations";
import { SiteNav } from "@/components/sections/SiteNav";
import { isLocale } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionaries";

const Study = dynamic(() => import("@/components/sections/Study").then((mod) => mod.Study));
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));
const Footer = dynamic(() => import("@/components/sections/Footer").then((mod) => mod.Footer));

const featuredIds = ["mirante", "t2", "carretel", "cresce"];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const content = getContent(lang);

  // telas da faixa curva do contato: projetos fora do deck, em 640px pelo otimizador
  const bandImages = content.projects
    .filter((project) => !featuredIds.includes(project.id))
    .map((project) => project.cover ?? project.images.find((image) => image.device === "laptop"))
    .filter((shot): shot is NonNullable<typeof shot> => Boolean(shot) && shot!.device === "laptop")
    .slice(0, 12)
    .map((shot) => ({ src: `/_next/image?url=${encodeURIComponent(shot.src)}&w=640&q=75` }));

  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero t={t.hero} />
        <Marquee label={t.marquee.label} />
        <About t={t.about} />
        <Experience t={t.experience} items={content.experiences} />
        <Study studies={content.studies} />
        <Band words={t.band.words} />
        <Featured title={t.featured.title} projects={content.projects} ids={featuredIds} />
        <Projects projects={content.projects} filters={content.filters} />
        <Recommendations title={t.recommendations.title} items={content.recommendations} />
        <Contact bandImages={bandImages} />
      </main>
      <Footer />
    </>
  );
}
