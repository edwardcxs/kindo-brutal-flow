import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'work', 'about', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morph backdrop-blur-xl' : 'bg-transparent'
      } border-b-4 border-primary/20`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold font-mono hover:text-accent transition-all duration-300 group relative"
          >
            <span className="glow-text">EK_</span>
            <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-300" />
          </button>
          
          <div className="hidden md:flex gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 uppercase text-sm font-bold transition-all duration-300 relative group ${
                  activeSection === item.id ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
              <span className="text-xs font-mono text-muted-foreground">AVAILABLE</span>
            </div>
            <button className="md:hidden text-2xl font-bold hover:text-accent transition-colors">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
