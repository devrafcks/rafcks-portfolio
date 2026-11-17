import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Projects } from "@/components/sections/Projects";
import { Recommendations } from "@/components/sections/Recommendations";
import { SiteNav } from "@/components/sections/SiteNav";
import { Study } from "@/components/sections/Study";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Study />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
