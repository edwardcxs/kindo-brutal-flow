import { Code2, Palette, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Blending aesthetics with purpose"
    },
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Modern tools, timeless design"
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "People at the heart of every pixel"
    }
  ];

  return (
    <section id="about" className="py-32 border-t-4 border-primary/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 animate-slide-in-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-accent" />
                <span className="font-mono text-sm text-accent tracking-wider">INTRODUCTION</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              ABOUT
              <br />
              <span className="text-gradient glow-text">ME</span>
            </h2>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="brutalist-border bg-card/60 glass-morph p-6 hover:bg-accent/5 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-colors">
                      <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 animate-slide-in-up">
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
              <p className="leading-relaxed text-muted-foreground">
                I'm a <span className="font-bold text-accent">Graphics Designer</span> and{' '}
                <span className="font-bold text-accent">UI/UX specialist</span> with over 5 years 
                of experience creating compelling visual narratives and user-centered digital experiences 
                that drive results and inspire action.
              </p>
              
              <p className="leading-relaxed text-muted-foreground">
                My approach combines <span className="font-bold text-foreground">bold aesthetics</span> with{' '}
                <span className="font-bold text-foreground">functional design</span>, ensuring every project not only 
                looks exceptional but delivers measurable results for users and businesses alike.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                From crafting memorable brand identities to designing intuitive digital interfaces, 
                I believe in the power of design to <span className="font-bold text-accent">transform experiences</span> and 
                create <span className="font-bold text-accent">lasting connections</span> between brands and their audiences.
              </p>
              
              <div className="brutalist-border brutalist-shadow-accent bg-card/60 glass-morph p-6 sm:p-8 mt-8 sm:mt-12 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="font-mono text-xs sm:text-sm uppercase mb-3 sm:mb-4 text-accent">Design Philosophy</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    "Design is not just what it looks like and feels like. 
                    Design is <span className="text-accent">how it works</span>, 
                    how it <span className="text-accent">transforms</span>, 
                    and how it <span className="text-accent">inspires</span>."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
