const Skills = () => {
  const skillCategories = [
    {
      title: "DESIGN",
      skills: ["Brand Identity", "Typography", "Print Design", "Illustration", "Motion Graphics"]
    },
    {
      title: "UI/UX",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"]
    },
    {
      title: "TOOLS",
      skills: ["Figma", "Adobe CC", "Sketch", "Blender", "After Effects"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t-4 border-primary bg-secondary/30 glass-morph relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold mb-4">
            SKILLS &
            <br />
            <span className="text-accent">EXPERTISE_</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="brutalist-border brutalist-shadow bg-card/80 glass-morph p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <span className="w-2 h-2 bg-primary group-hover:bg-accent transition-colors"></span>
                      <span className="text-sm font-medium group-hover:text-accent transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slide-in-up">
          <div className="brutalist-border bg-accent p-8 text-center">
            <div className="text-5xl font-bold text-accent-foreground mb-2">50+</div>
            <p className="font-mono text-sm text-accent-foreground">PROJECTS</p>
          </div>
          <div className="brutalist-border bg-primary p-8 text-center">
            <div className="text-5xl font-bold text-primary-foreground mb-2">30+</div>
            <p className="font-mono text-sm text-primary-foreground">CLIENTS</p>
          </div>
          <div className="brutalist-border bg-card p-8 text-center">
            <div className="text-5xl font-bold mb-2">5+</div>
            <p className="font-mono text-sm">YEARS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
