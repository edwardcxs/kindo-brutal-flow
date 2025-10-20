import { Button } from "@/components/ui/button";

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="font-mono text-sm mb-4 text-muted-foreground">GRAPHICS DESIGNER / UI-UX</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
              EDWARD
              <br />
              <span className="text-accent">KINDO</span>
            </h1>
            <p className="text-lg mb-8 max-w-md text-muted-foreground">
              Crafting bold visual experiences with modern design thinking. 
              Transforming ideas into memorable digital products.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('work')}
                className="brutalist-border brutalist-shadow-accent bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8"
              >
                VIEW WORK
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="brutalist-border font-bold px-8"
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="brutalist-border brutalist-shadow aspect-square bg-secondary/50 glass-morph flex items-center justify-center overflow-hidden">
                <div className="text-9xl font-bold text-primary/10">EK</div>
              </div>
              <div className="absolute -bottom-4 -right-4 brutalist-border bg-accent w-32 h-32 flex items-center justify-center">
                <span className="text-accent-foreground font-mono text-sm font-bold">5+<br/>YEARS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
