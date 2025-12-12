import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
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
              <ThemeToggle />
              <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
                <span className="text-xs font-mono text-muted-foreground">AVAILABLE</span>
              </div>
              <button 
                className="md:hidden p-2 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-[73px] left-0 right-0 bg-card/95 backdrop-blur-xl border-b-4 border-primary/20 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 uppercase text-lg font-bold transition-all duration-300 text-left border-l-4 ${
                    activeSection === item.id 
                      ? 'text-accent border-accent bg-accent/10' 
                      : 'text-foreground border-transparent hover:border-accent hover:bg-accent/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-primary/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
              <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR WORK</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
