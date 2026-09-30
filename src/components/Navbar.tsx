import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'skate', label: 'skate' },
  { id: 'tricks', label: 'tricks' },
  { id: 'events', label: 'events' },
  { id: 'spots', label: 'frontiers' },
  { id: 'gear', label: 'gear' },
  { id: 'simulator', label: 'calculator' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      // When reaching near bottom of page, activate last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('simulator');
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/90 backdrop-blur-xl border-b border-white/15 shadow-2xl transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Title (Home Action) */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer select-none text-left"
          title="Return to Home"
        >
          {/* Custom white SVG geometric crystalline blade sports logo */}
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs shadow-md">
            <svg
              className="w-4 h-4 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="6 3 18 3 22 13 12 22 2 13" fill="currentColor" fillOpacity="0.2" />
              <path d="M2 13h20" />
              <path d="M12 3v19" />
              <path d="M6 3L12 13 18 3" />
            </svg>
          </div>
          <span className="text-white text-base font-bold tracking-tight uppercase">
            GLACIERIDE
          </span>
        </button>

        {/* Center: Navigation Menu with Clear High-Contrast Active State */}
        <nav className="hidden xl:flex items-center gap-1 bg-neutral-900/90 rounded-full px-3 py-1.5 border border-white/20 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all text-xs px-3.5 py-1.5 rounded-full cursor-pointer font-medium ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Button: CTA & Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('join')}
            type="button"
            className="hidden xl:inline-flex items-center justify-center bg-white text-black text-xs font-bold rounded-full px-5 py-2.5 hover:bg-neutral-200 transition-all cursor-pointer shadow-lg hover:scale-[1.02]"
          >
            start skating
          </button>

          {/* Mobile and Tablet hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full text-white cursor-pointer border border-white/20 hover:border-white/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pb-5 pt-2 border-t border-white/15 bg-black/98 backdrop-blur-2xl flex flex-col gap-1.5 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg transition-colors text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-white hover:bg-neutral-800'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs">●</span>}
              </button>
            );
          })}

          {/* Prominent CTA inside hamburger menu for mobile & tablet */}
          <div className="pt-2 border-t border-white/15 mt-1">
            <button
              onClick={() => scrollToSection('join')}
              className="w-full py-3 rounded-full bg-white text-black font-bold text-sm text-center shadow-xl hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center"
            >
              <span>start skating</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
