import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trick {
  id: string;
  name: string;
  category: 'flip' | 'grind' | 'air' | 'spin';
  difficulty: 'Pro' | 'Master' | 'World Record' | 'Intermediate';
  rotations: string;
  minSpeed: string;
  airtime: string;
  landedCount: string;
  image: string;
  description: string;
  keyTechnique: string;
}

const tricksData: Trick[] = [
  {
    id: '1',
    name: 'frost kickflip 360',
    category: 'flip',
    difficulty: 'Pro',
    rotations: '360°',
    minSpeed: '35 km/h',
    airtime: '1.4s',
    landedCount: '1,420',
    image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80',
    description: 'A 360-degree board rotation combined with a crisp heel flick over high-friction blue ice.',
    keyTechnique: 'Flick blade tip precisely at 45° off the ice kicker lip.',
  },
  {
    id: '2',
    name: 'glacier cork 900',
    category: 'air',
    difficulty: 'World Record',
    rotations: '900°',
    minSpeed: '65 km/h',
    airtime: '2.8s',
    landedCount: '84',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    description: 'Off-axis double inverted spin launched from a 22ft frozen halfpipe with ice-pick landing grip.',
    keyTechnique: 'Lead shoulders into the snap rotation while tucking blade assembly tight.',
  },
  {
    id: '3',
    name: 'knife-edge 50-50 rail slide',
    category: 'grind',
    difficulty: 'Intermediate',
    rotations: '0°',
    minSpeed: '28 km/h',
    airtime: '0.9s',
    landedCount: '4,890',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80',
    description: 'Centering both tungsten blade edges along a 40-foot sub-zero frosted steel handrail.',
    keyTechnique: 'Keep weight centered over front truck to avoid blade gouging.',
  },
  {
    id: '4',
    name: 'sub-zero darkslide',
    category: 'grind',
    difficulty: 'Master',
    rotations: '180° Flip',
    minSpeed: '42 km/h',
    airtime: '1.2s',
    landedCount: '312',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80',
    description: 'Half-flipping the ice skateboard upside down onto the frosted obstacle, sliding on thermal grip tape.',
    keyTechnique: 'Requires fast late-half-flip reset before ice transition.',
  },
  {
    id: '5',
    name: 'arctic rodeo 720',
    category: 'spin',
    difficulty: 'Master',
    rotations: '720°',
    minSpeed: '52 km/h',
    airtime: '2.2s',
    landedCount: '215',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Horizontal inverted spin grabbing the blade nose at the peak apex of flight.',
    keyTechnique: 'Spot the ice landing zone through the armpit on the second 360 revolution.',
  },
  {
    id: '6',
    name: 'zero-g blizzard spin',
    category: 'spin',
    difficulty: 'World Record',
    rotations: '1080°',
    minSpeed: '70 km/h',
    airtime: '3.1s',
    landedCount: '19',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    description: 'Triple horizontal spin executed over a 55-foot frozen chasm jump in Banff Arena.',
    keyTechnique: 'Max blade pump speed on transition curve is mandatory.',
  },
];

export const TricksMatrix: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedTrick, setSelectedTrick] = useState<Trick | null>(null);

  const filteredTricks =
    filter === 'all'
      ? tricksData
      : tricksData.filter((t) => t.category === filter);

  return (
    <section id="tricks" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Subtext directly under Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="uppercase font-semibold tracking-wider">02 // TRICK VAULT</span>
            </div>
            <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
              master every landing
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed font-light">
              Explore technical ice skateboarding maneuvers, rotation metrics, and pro execution tips.
            </p>
          </div>

          {/* Filter Pills with animated scale & active spring */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'all', val: 'all' },
              { label: 'flips', val: 'flip' },
              { label: 'grinds', val: 'grind' },
              { label: 'aerials', val: 'air' },
              { label: 'spins', val: 'spin' },
            ].map((tab) => {
              const isActive = filter === tab.val;
              return (
                <motion.button
                  key={tab.val}
                  onClick={() => setFilter(tab.val)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer font-bold ${
                    isActive
                      ? 'bg-white text-black shadow-lg scale-105'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-white/20'
                  }`}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tricks Grid with High-Level Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredTricks.map((trick, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                key={trick.id}
                onClick={() => setSelectedTrick(trick)}
                className="group relative bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer backdrop-blur shadow-2xl transition-colors"
              >
                {/* Full Color Thumbnail Image Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={trick.image}
                    alt={trick.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/35 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span
                      className={`text-xs px-3.5 py-1.5 rounded-full font-mono uppercase backdrop-blur-md shadow-lg ${
                        trick.difficulty === 'World Record'
                          ? 'bg-white text-black font-bold'
                          : 'bg-black/90 text-white border border-white/30 font-semibold'
                      }`}
                    >
                      {trick.difficulty}
                    </span>
                    <span className="text-xs text-white font-mono bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-lg font-medium">
                      {trick.rotations}
                    </span>
                  </div>
                </div>

                <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="hero-title text-2xl font-medium text-white mb-2 group-hover:text-white transition-colors">
                      {trick.name}
                    </h3>
                    <p className="text-white text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                      {trick.description}
                    </p>
                  </div>

                  {/* Stats Footer */}
                  <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-black/80 rounded-xl p-2.5 border border-white/10 group-hover:border-white/25 transition-colors">
                      <div className="text-[10px] text-white/90 font-mono uppercase font-medium">SPEED</div>
                      <div className="text-xs md:text-sm font-semibold text-white mt-0.5">{trick.minSpeed}</div>
                    </div>
                    <div className="bg-black/80 rounded-xl p-2.5 border border-white/10 group-hover:border-white/25 transition-colors">
                      <div className="text-[10px] text-white/90 font-mono uppercase font-medium">AIRTIME</div>
                      <div className="text-xs md:text-sm font-semibold text-white mt-0.5">{trick.airtime}</div>
                    </div>
                    <div className="bg-black/80 rounded-xl p-2.5 border border-white/10 group-hover:border-white/25 transition-colors">
                      <div className="text-[10px] text-white/90 font-mono uppercase font-medium">LANDED</div>
                      <div className="text-xs md:text-sm font-semibold text-white mt-0.5">{trick.landedCount}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Trick Deep-Dive with Spring Entrance */}
        <AnimatePresence>
          {selectedTrick && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedTrick(null)}
            >
              <motion.div
                initial={{ scale: 0.85, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 30 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 border border-white/30 rounded-3xl p-8 max-w-lg w-full relative overflow-hidden shadow-2xl"
              >
                {/* Modal Top Full Color Image */}
                <div className="relative h-48 -mt-8 -mx-8 mb-6 overflow-hidden">
                  <img
                    src={selectedTrick.image}
                    alt={selectedTrick.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  <button
                    onClick={() => setSelectedTrick(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/90 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer shadow-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                <span className="text-xs text-white/90 uppercase font-mono block mb-2 font-medium">
                  TRICK BREAKDOWN // {selectedTrick.category}
                </span>
                <h3 className="hero-title text-3xl font-medium text-white mb-4">
                  {selectedTrick.name}
                </h3>
                <p className="text-white text-base mb-6 leading-relaxed font-light">
                  {selectedTrick.description}
                </p>

                <div className="bg-black/90 border border-white/20 rounded-2xl p-4 mb-6">
                  <span className="text-xs text-white/90 uppercase font-mono block mb-1 font-semibold">
                    Pro Execution Technique
                  </span>
                  <p className="text-white text-sm font-normal leading-relaxed">
                    "{selectedTrick.keyTechnique}"
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-neutral-800 p-3 rounded-xl border border-white/10">
                    <div className="text-xs text-white/90 font-mono">Rotations</div>
                    <div className="text-base font-bold text-white mt-1">{selectedTrick.rotations}</div>
                  </div>
                  <div className="bg-neutral-800 p-3 rounded-xl border border-white/10">
                    <div className="text-xs text-white/90 font-mono">Min Speed</div>
                    <div className="text-base font-bold text-white mt-1">{selectedTrick.minSpeed}</div>
                  </div>
                  <div className="bg-neutral-800 p-3 rounded-xl border border-white/10">
                    <div className="text-xs text-white/90 font-mono">Air Time</div>
                    <div className="text-base font-bold text-white mt-1">{selectedTrick.airtime}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTrick(null)}
                  className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
                >
                  close breakdown
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
