import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dynamicWords = ['ice', 'glaciers', 'superpipe', 'speedrun', 'frozen vert'];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-black select-none flex flex-col justify-between">
      {/* Fullscreen Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${import.meta.env.BASE_URL}videos/ice-skating.webm`} type="video/webm" />
        <source src={`${import.meta.env.BASE_URL}videos/ice-skating-speed.webm`} type="video/webm" />
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Ice_skating_hand_stand_stunt.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast & clarity */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Main Center-Left Content Area (Safe padding below navbar) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 md:pt-36 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Platform Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/30 text-xs font-mono text-white mb-5 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="tracking-widest uppercase font-semibold">
              SUB-ZERO EXTREME SPORTS REVOLUTION
            </span>
          </motion.div>

          {/* Kinetic Animated Headline */}
          <h1 className="hero-title text-white font-medium text-[14vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter drop-shadow-2xl">
            <div>ride the</div>
            <div className="relative h-[1.12em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={dynamicWords[wordIndex]}
                  initial={{ y: 60, opacity: 0, rotateX: -40 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -60, opacity: 0, rotateX: 40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-white border-b-2 md:border-b-4 border-white/70 pb-1"
                >
                  {dynamicWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          {/* Subtext under the heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 md:mt-6 max-w-lg text-base md:text-lg leading-relaxed text-white font-light drop-shadow-lg"
          >
            Push beyond friction. Master 900° corkscrews on frozen rails, carved glacier chutes, and Olympic ice arenas at 100+ km/h.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 md:mt-8 w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <button
              onClick={() => scrollToSection('skate')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer shadow-2xl flex items-center justify-center gap-1.5 text-center"
            >
              <span>explore disciplines</span>
              <span>↗</span>
            </button>
            <button
              onClick={() => scrollToSection('spots')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/80 hover:bg-black text-white text-sm font-medium border border-white/30 hover:border-white transition-all backdrop-blur-md cursor-pointer shadow-xl flex items-center justify-center text-center"
            >
              <span>scout ice frontiers</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Telemetry Statistics Bar (Zero Overlap Guaranteed) */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-8 px-6 md:px-12 border-t border-white/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-between">
          {/* Stat 1: Hours on Ice */}
          <div className="flex items-center gap-3">
            <div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow font-mono">
                +1.5m
              </div>
              <div className="text-xs text-white/90 font-medium uppercase tracking-wider mt-0.5 font-mono">
                hours logged on ice
              </div>
            </div>
            <div className="hidden md:block h-px w-16 bg-white/40 rotate-[-20deg]" />
          </div>

          {/* Stat 2: Skaters Worldwide */}
          <div className="flex items-center gap-3 sm:justify-center">
            <div className="hidden md:block h-px w-16 bg-white/40 rotate-[20deg]" />
            <div className="text-left sm:text-center">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow font-mono">
                +65k
              </div>
              <div className="text-xs text-white/90 font-medium uppercase tracking-wider mt-0.5 font-mono">
                athletes worldwide
              </div>
            </div>
            <div className="hidden md:block h-px w-16 bg-white/40 rotate-[-20deg]" />
          </div>

          {/* Stat 3: Tricks Landed */}
          <div className="flex items-center gap-3 sm:justify-end">
            <div className="hidden md:block h-px w-16 bg-white/40 rotate-[20deg]" />
            <div className="text-left sm:text-right">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow font-mono">
                +300k
              </div>
              <div className="text-xs text-white/90 font-medium uppercase tracking-wider mt-0.5 font-mono">
                pro tricks landed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
