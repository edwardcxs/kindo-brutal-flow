import { Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DESIGN",
      skills: [
        { name: "Brand Identity", level: 95 },
        { name: "Typography", level: 90 },
        { name: "Print Design", level: 88 },
        { name: "Illustration", level: 85 },
        { name: "Motion Graphics", level: 82 }
      ]
    },
    {
      title: "UI/UX",
      skills: [
        { name: "User Research", level: 92 },
        { name: "Wireframing", level: 95 },
        { name: "Prototyping", level: 93 },
        { name: "Design Systems", level: 90 },
        { name: "Interaction Design", level: 88 }
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Figma", level: 98 },
        { name: "Adobe Creative Cloud", level: 95 },
        { name: "Sketch", level: 85 },
        { name: "Blender", level: 75 },
        { name: "After Effects", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 border-t-4 border-primary/20 bg-secondary/20 glass-morph relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 animate-slide-in-up">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="font-mono text-sm text-accent tracking-wider">EXPERTISE</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            SKILLS &
            <br />
            <span className="text-gradient glow-text">CAPABILITIES</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="brutalist-border brutalist-shadow-hover bg-card/60 glass-morph p-6 sm:p-8 h-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  <h3 className="text-xl sm:text-2xl font-bold text-accent">{category.title}</h3>
                </div>
                <ul className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-muted overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-slide-in-up">
          <div className="brutalist-border brutalist-shadow-hover bg-gradient-to-br from-accent to-accent/80 p-4 sm:p-6 lg:p-8 text-center group cursor-pointer">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <p className="font-mono text-xs sm:text-sm text-accent-foreground/80 uppercase tracking-wider">
              Projects Delivered
            </p>
          </div>
          <div className="brutalist-border brutalist-shadow-hover bg-gradient-to-br from-primary to-primary/80 p-4 sm:p-6 lg:p-8 text-center group cursor-pointer">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              30+
            </div>
            <p className="font-mono text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider">
              Happy Clients
            </p>
          </div>
          <div className="brutalist-border brutalist-shadow-hover bg-card/60 glass-morph p-4 sm:p-6 lg:p-8 text-center group cursor-pointer">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 text-accent group-hover:scale-110 transition-transform">
              5+
            </div>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              Years Experience
            </p>
          </div>
          <div className="brutalist-border brutalist-shadow-hover bg-card/60 glass-morph p-4 sm:p-6 lg:p-8 text-center group cursor-pointer">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 text-accent group-hover:scale-110 transition-transform">
              15+
            </div>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              Awards Won
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
