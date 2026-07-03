import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AIEngineering from "@/components/AIEngineering";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ImpactStrip />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <AIEngineering />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
