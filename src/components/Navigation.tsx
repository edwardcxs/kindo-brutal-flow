const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold font-mono hover:text-accent transition-colors"
          >
            EK_
          </button>
          
          <div className="hidden md:flex gap-8">
            {['work', 'about', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="uppercase text-sm font-bold hover:text-accent transition-colors tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-2xl font-bold">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
