import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroProfile from "@/assets/hero-profile.png";

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
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent/30 glass-morph">
              <Sparkles className="w-4 h-4 text-accent animate-glow" />
              <span className="font-mono text-xs tracking-wider text-accent">GRAPHICS DESIGNER • UI/UX SPECIALIST</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">Hi I'm</p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
                <span className="block">EDWARD</span>
                <span className="block text-gradient glow-text">KINDO</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl max-w-xl mx-auto text-muted-foreground leading-relaxed">
              Crafting <span className="text-accent font-bold">bold visual experiences</span> with modern design thinking. 
              Transforming ideas into <span className="text-accent font-bold">memorable digital products</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button 
                onClick={() => scrollToSection('work')}
                className="brutalist-border brutalist-shadow-hover bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-lg group"
              >
                VIEW WORK
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="brutalist-border font-bold px-8 py-6 text-lg glass-morph hover:bg-primary hover:text-primary-foreground transition-all"
              >
                GET IN TOUCH
              </Button>
            </div>

            <div className="flex gap-8 pt-8 justify-center">
              <div>
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-sm font-mono text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">30+</div>
                <div className="text-sm font-mono text-muted-foreground">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">5+</div>
                <div className="text-sm font-mono text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
