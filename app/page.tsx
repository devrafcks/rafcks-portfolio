import { TravelingHat } from "@/components/art/TravelingHat";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { About } from "@/components/sections/About";
import { Band } from "@/components/sections/Band";
import { Contact } from "@/components/sections/Contact";
import { Featured } from "@/components/sections/Featured";
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
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Study />
        <Band />
        <Featured />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <TravelingHat />
    </>
  );
}
