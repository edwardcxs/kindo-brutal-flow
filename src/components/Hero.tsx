import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroProfile from "@/assets/hero-profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-in-left space-y-8 text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={heroProfile} 
                alt="Edward Kindo" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent/30 glass-morph">
              <Sparkles className="w-4 h-4 text-accent animate-glow" />
              <span className="font-mono text-xs tracking-wider text-accent">GRAPHICS DESIGNER • UI/UX SPECIALIST</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">Hi I'm</p>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial="hidden"
                animate="visible"
                transition={{ 
                  staggerChildren: 0.08,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  repeatType: "loop"
                }}
              >
                {['E', 'D', 'W', 'A', 'R', 'D', ' '].map((char, i) => (
                  <motion.span
                    key={`edward-${i}`}
                    className="inline-block text-white"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
                {['K', 'I', 'N', 'D', 'O'].map((char, i) => (
                  <motion.span
                    key={`kindo-${i}`}
                    className="inline-block text-gradient glow-text"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mx-auto text-muted-foreground leading-relaxed px-4">
              Crafting <span className="text-accent font-bold">bold visual experiences</span> with modern design thinking. 
              Transforming ideas into <span className="text-accent font-bold">memorable digital products</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center px-4">
              <Button 
                onClick={() => scrollToSection('work')}
                className="brutalist-border brutalist-shadow-hover bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group w-full sm:w-auto"
              >
                VIEW WORK
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="brutalist-border font-bold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg glass-morph hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto"
              >
                GET IN TOUCH
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 pt-8 justify-center px-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">50+</div>
                <div className="text-xs sm:text-sm font-mono text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">30+</div>
                <div className="text-xs sm:text-sm font-mono text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent">5+</div>
                <div className="text-xs sm:text-sm font-mono text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
