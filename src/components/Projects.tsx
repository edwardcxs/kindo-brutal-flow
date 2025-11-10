import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NEXUS BRAND SYSTEM",
      category: "BRAND IDENTITY",
      description: "Complete visual identity system for cutting-edge tech startup, including logo design, color palette, typography, and brand guidelines.",
      year: "2024",
      tags: ["Branding", "Print", "Digital"]
    },
    {
      title: "FLUX MOBILE APP",
      category: "UI/UX DESIGN",
      description: "E-commerce platform with seamless checkout experience, intuitive navigation, and personalized product recommendations.",
      year: "2024",
      tags: ["Mobile", "E-commerce", "UX"]
    },
    {
      title: "MOMENTUM POSTERS",
      category: "GRAPHIC DESIGN",
      description: "Bold typographic exploration for cultural festival, featuring experimental layouts and vibrant color schemes.",
      year: "2023",
      tags: ["Typography", "Print", "Art Direction"]
    },
    {
      title: "APEX DASHBOARD",
      category: "UI/UX DESIGN",
      description: "SaaS dashboard with advanced data visualization, real-time analytics, and customizable widgets for enterprise clients.",
      year: "2023",
      tags: ["SaaS", "Data Viz", "Enterprise"]
    },
    {
      title: "ZENITH PACKAGING",
      category: "GRAPHIC DESIGN",
      description: "Minimalist product packaging for premium lifestyle brand, emphasizing sustainable materials and elegant typography.",
      year: "2023",
      tags: ["Packaging", "Branding", "Sustainability"]
    },
    {
      title: "PRISM DESIGN SYSTEM",
      category: "UI/UX DESIGN",
      description: "Comprehensive component library and design guidelines for consistency across 20+ product applications.",
      year: "2024",
      tags: ["Design System", "Components", "Documentation"]
    }
  ];

  return (
    <section id="work" className="py-32 border-t-4 border-primary/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 animate-slide-in-up">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="font-mono text-sm text-accent tracking-wider">PORTFOLIO</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            SELECTED
            <br />
            <span className="text-gradient glow-text">WORK</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-4">2023 — 2024</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-slide-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="brutalist-border bg-card/60 glass-morph brutalist-shadow-hover h-full flex flex-col">
                <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center border-b-4 border-primary relative overflow-hidden">
                  <span className="text-8xl font-bold text-primary/5 group-hover:text-accent/20 transition-all duration-500 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="absolute top-4 right-4 w-10 h-10 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <p className="font-mono text-xs text-accent mb-2 sm:mb-3 tracking-wider">{project.category}</p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-mono px-2 py-1 border border-primary/30 glass-morph"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    <span className="font-bold group-hover:translate-x-2 transition-transform text-accent">→</span>
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
