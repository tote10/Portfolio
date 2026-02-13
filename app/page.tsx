import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
