import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import PolymorphismBackground from "@/components/PolymorphismBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
