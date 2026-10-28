import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

/**
 * Home composition contract (Slice 6).
 * Later section PRs replace stub bodies in components/sections/* only —
 * they should not edit this file unless fixing a composition bug.
 */
export default function HomePage() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
