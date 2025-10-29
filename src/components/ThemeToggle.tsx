import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

type Theme = 'blue' | 'cyan' | 'purple' | 'green' | 'orange';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('blue');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'blue';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes: { value: Theme; label: string; color: string }[] = [
    { value: 'blue', label: 'Blue', color: '#3b82f6' },
    { value: 'cyan', label: 'Cyan', color: '#06b6d4' },
    { value: 'purple', label: 'Purple', color: '#a855f7' },
    { value: 'green', label: 'Green', color: '#10b981' },
    { value: 'orange', label: 'Orange', color: '#f97316' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md glass-morph hover:bg-accent/10 transition-all duration-300 border border-primary/20"
        aria-label="Change theme"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-36 glass-morph border-4 border-primary rounded-lg shadow-lg z-50 overflow-hidden">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => handleThemeChange(t.value)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-accent/20 transition-colors ${
                  theme === t.value ? 'bg-accent/30' : ''
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border-2 border-primary"
                  style={{ backgroundColor: t.color }}
                />
                <span className="font-mono text-sm">{t.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
