import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
