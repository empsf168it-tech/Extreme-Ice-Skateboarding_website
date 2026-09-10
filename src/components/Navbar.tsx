import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
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

        {/* Center: Navigation Menu with Clear High-Contrast White Text */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/90 rounded-full px-3 py-1.5 border border-white/20 shadow-inner">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            home
          </button>
          <button
            onClick={() => scrollToSection('skate')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            skate
          </button>
          <button
            onClick={() => scrollToSection('tricks')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            tricks
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            events
          </button>
          <button
            onClick={() => scrollToSection('spots')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            frontiers
          </button>
          <button
            onClick={() => scrollToSection('gear')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            gear
          </button>
          <button
            onClick={() => scrollToSection('simulator')}
            className="text-white hover:bg-white/15 transition-all text-xs font-medium px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            calculator
          </button>
        </nav>

        {/* Right Button: CTA & Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('join')}
            type="button"
            className="hidden md:inline-flex items-center justify-center bg-white text-black text-xs font-bold rounded-full px-5 py-2.5 hover:bg-neutral-200 transition-all cursor-pointer shadow-lg hover:scale-[1.02]"
          >
            start skating
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full text-white cursor-pointer border border-white/20 hover:border-white/50 transition-colors"
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
        <div className="md:hidden px-4 pb-5 pt-2 border-t border-white/15 bg-black/98 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            home
          </button>
          <button
            onClick={() => scrollToSection('skate')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            skate
          </button>
          <button
            onClick={() => scrollToSection('tricks')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            tricks
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            events
          </button>
          <button
            onClick={() => scrollToSection('spots')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            frontiers radar
          </button>
          <button
            onClick={() => scrollToSection('gear')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            gear & tech
          </button>
          <button
            onClick={() => scrollToSection('simulator')}
            className="text-left text-white py-2.5 px-3 rounded-lg hover:bg-neutral-800 transition-colors text-sm font-semibold"
          >
            speed calculator
          </button>

          {/* Prominent CTA inside hamburger menu for mobile & tablet */}
          <div className="pt-2 border-t border-white/15 mt-1">
            <button
              onClick={() => scrollToSection('join')}
              className="w-full py-3 rounded-full bg-white text-black font-bold text-sm text-center shadow-xl hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>start skating</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
