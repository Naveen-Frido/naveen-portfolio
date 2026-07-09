import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <About />
      <DesignProcess />
      <Skills />
      <Contact />
    </>
  );
}
