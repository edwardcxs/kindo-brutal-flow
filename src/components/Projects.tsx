const Projects = () => {
  const projects = [
    {
      title: "BRAND IDENTITY",
      category: "GRAPHICS",
      description: "Complete visual identity system for modern tech startup",
      year: "2024"
    },
    {
      title: "MOBILE APP UI",
      category: "UI/UX",
      description: "E-commerce platform with seamless checkout experience",
      year: "2024"
    },
    {
      title: "POSTER SERIES",
      category: "GRAPHICS",
      description: "Bold typographic exploration for cultural festival",
      year: "2023"
    },
    {
      title: "WEB PLATFORM",
      category: "UI/UX",
      description: "SaaS dashboard with advanced data visualization",
      year: "2023"
    },
    {
      title: "PACKAGING DESIGN",
      category: "GRAPHICS",
      description: "Minimalist product packaging for lifestyle brand",
      year: "2023"
    },
    {
      title: "DESIGN SYSTEM",
      category: "UI/UX",
      description: "Comprehensive component library and guidelines",
      year: "2024"
    }
  ];

  return (
    <section id="work" className="py-24 border-t-4 border-primary relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 animate-slide-in-up">
          <h2 className="text-5xl font-bold mb-4">
            SELECTED
            <br />
            <span className="text-accent">WORK_</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground">2023 — 2024</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-slide-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="brutalist-border bg-card/80 glass-morph hover:brutalist-shadow-accent transition-all duration-300">
                <div className="aspect-square bg-secondary flex items-center justify-center border-b-4 border-primary">
                  <span className="text-6xl font-bold text-primary/10 group-hover:text-accent/30 transition-colors">
                    {index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs text-accent mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    <span className="font-bold group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
