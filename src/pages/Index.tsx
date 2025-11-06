import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import PolymorphismBackground from "@/components/PolymorphismBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default Index;
