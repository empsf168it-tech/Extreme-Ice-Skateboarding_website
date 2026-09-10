import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Discipline {
  id: string;
  name: string;
  tag: string;
  description: string;
  topSpeed: string;
  speedNum: number;
  gForce: string;
  gForceNum: number;
  riskFactor: string;
  terrain: string;
  image: string;
  features: string[];
}

const disciplines: Discipline[] = [
  {
    id: 'freestyle',
    name: 'freestyle blade',
    tag: 'street & park on ice',
    description:
      'High-agility technical skating blending skateboard flip tricks, grind slides, and rotational spins across frozen urban ramps, frozen rails, and ice plazas.',
    topSpeed: '58 km/h',
    speedNum: 58,
    gForce: '3.8 G',
    gForceNum: 76,
    riskFactor: 'high',
    terrain: 'solid mirror ice / ice parks',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80',
    features: ['360 blade kickflips', 'rail slide grinds', 'quick edge transitions', 'ice manuals'],
  },
  {
    id: 'downhill',
    name: 'arctic downhill cross',
    tag: 'high velocity gravity',
    description:
      'High-speed gravity ice racing down carved mountain bobsled tracks, natural ice chutes, and frozen alpine passes with banked turns and high-G drop-ins.',
    topSpeed: '94 km/h',
    speedNum: 94,
    gForce: '5.2 G',
    gForceNum: 92,
    riskFactor: 'extreme',
    terrain: 'natural alpine ice chutes',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
    features: ['drafting overtakes', '70° banked turns', 'aerodynamic tucks', 'emergency ice braking'],
  },
  {
    id: 'halfpipe',
    name: 'glacier halfpipe mega',
    tag: 'vertical airtime',
    description:
      'Launching 20 feet above towering ice vert walls. Harnessing blade speed for massive aerial rotations, inverted grabs, and clean transition landings.',
    topSpeed: '72 km/h',
    speedNum: 72,
    gForce: '4.6 G',
    gForceNum: 84,
    riskFactor: 'extreme',
    terrain: '22ft Olympic ice superpipe',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1200&q=80',
    features: ['900° corkscrews', 'knife-edge vert stalls', 'sub-zero air launches', 'synchronized drops'],
  },
  {
    id: 'speedrun',
    name: 'ice speedrun drag',
    tag: 'pure straight-line acceleration',
    description:
      'Raw velocity sprints across frozen fjord straights and endless lake ice plates. Low-profile blade setups engineered for zero friction and max acceleration.',
    topSpeed: '115 km/h',
    speedNum: 115,
    gForce: '4.1 G',
    gForceNum: 80,
    riskFactor: 'critical',
    terrain: 'black ice lake flats',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
    features: ['wind tunnels tuning', 'diamond edge tracks', 'telemetric speed tracking', 'cryo bearing glide'],
  },
];

export const SkateDisciplines: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('freestyle');
  const selected = disciplines.find((d) => d.id === activeTab) || disciplines[0];

  return (
    <section id="skate" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Staggered Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="uppercase font-semibold tracking-wider">01 // DISCIPLINES</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            skate without friction
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Engineered for frozen arenas, backcountry ice chutes, and Olympic superpipes. Choose your style and dominate the sub-zero terrain.
          </p>
        </motion.div>

        {/* Tab Buttons with Smooth Spring Layout */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/20">
          {disciplines.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-2xl font-bold'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-white/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-full bg-white -z-10 shadow-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{item.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Discipline Details Card with High-Level Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Main Card with 3D Hover & Shimmer */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/30 min-h-[460px] flex flex-col justify-between p-8 md:p-12 group shadow-2xl bg-neutral-950"
            >
              {/* Full Color Image with Zoom Effect */}
              <img
                src={selected.image}
                alt={selected.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />

              {/* Top Details */}
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-black/85 backdrop-blur-md border border-white/40 rounded-full text-xs text-white font-semibold shadow-md uppercase">
                    {selected.tag}
                  </span>
                  <span className="text-xs text-white font-mono bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 font-medium">
                    TERRAIN: {selected.terrain}
                  </span>
                </div>
                <h3 className="hero-title text-3xl md:text-5xl font-medium text-white mb-6 drop-shadow-lg">
                  {selected.name}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed max-w-xl font-normal drop-shadow">
                  {selected.description}
                </p>
              </div>

              {/* Bottom Feature Badges */}
              <div className="relative z-10 pt-6 border-t border-white/30 mt-8">
                <span className="text-xs text-white uppercase tracking-wider block mb-3 font-mono font-semibold drop-shadow">
                  Key Movement Dynamics
                </span>
                <div className="flex flex-wrap gap-2">
                  {selected.features.map((feat, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/40 font-medium shadow-md transition-colors hover:border-white"
                    >
                      {feat}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Telemetry Cards with Progress Meters */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* Metric 1: Velocity */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur shadow-xl transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/90 uppercase font-mono font-semibold">Top Velocity</span>
                  <span className="text-xs">⚡</span>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 font-mono group-hover:text-white">
                    {selected.topSpeed}
                  </div>
                  {/* Progress meter bar */}
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selected.speedNum / 130) * 100}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-white rounded-full shadow-glow"
                    />
                  </div>
                  <div className="text-[11px] text-white/90 font-mono">GPS RADAR VERIFIED</div>
                </div>
              </motion.div>

              {/* Metric 2: Cornering Force */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur shadow-xl transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/90 uppercase font-mono font-semibold">G-Force Load</span>
                  <span className="text-xs">🎯</span>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 font-mono group-hover:text-white">
                    {selected.gForce}
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.gForceNum}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                  <div className="text-[11px] text-white/90 font-mono">LATERAL BLADE LOAD</div>
                </div>
              </motion.div>

              {/* Metric 3: Risk Rating */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur shadow-xl transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/90 uppercase font-mono font-semibold">Risk Rating</span>
                  <span className="text-xs">⚠️</span>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-white">
                    {selected.riskFactor}
                  </div>
                  <div className="text-[11px] text-white/90 font-mono">FULL ARMOR REQ.</div>
                </div>
              </motion.div>

              {/* Metric 4: Friction */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur shadow-xl transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/90 uppercase font-mono font-semibold">Ice Friction</span>
                  <span className="text-xs">❄️</span>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 font-mono group-hover:text-white">
                    0.02 μ
                  </div>
                  <div className="text-[11px] text-white/90 font-mono">CRYO-BEARING GLIDE</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
