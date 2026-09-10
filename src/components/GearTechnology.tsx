import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GearItem {
  id: string;
  name: string;
  material: string;
  weight: string;
  temp: string;
  spec: string;
  badge: string;
  image: string;
  description: string;
  features: string[];
  icon: string;
}

const gearItems: GearItem[] = [
  {
    id: 'blade',
    name: 'cryo-tempered tungsten blade',
    material: 'Cryo-Tempered Tungsten W-Alloy',
    weight: '410g',
    temp: '-40°C rated',
    spec: '0.4mm hollow-ground edge',
    badge: 'EDGE TECH',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1000&q=80',
    description:
      'Precision-ground tungsten composite blade cold-tempered at -196°C in liquid nitrogen baths to achieve diamond-hard crystalline edge retention across black ice, glacial slicks, and arena ice packs.',
    features: ['Sub-zero edge retention', '99.7% friction elimination', 'Anti-chip micro-carbide weave', 'Cryo-quench core hardness'],
  },
  {
    id: 'deck',
    name: 'carbon composite ice deck',
    material: '12-ply Carbon Fiber Composite',
    weight: '780g',
    temp: '-30°C stable',
    spec: '8.25" platform width',
    badge: 'FRAME',
    icon: '◈',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    description:
      'Cold-press 12-ply carbon fiber deck with epoxy resin injected core for full-temperature rigid stiffness. Aero-concave geometry for locked-in kick positioning at launch on vertical vert walls.',
    features: ['Military-grade epoxy layup', 'Full carbon concave geometry', 'Sub-zero structural integrity', 'Impact energy dissipation cells'],
  },
  {
    id: 'trucks',
    name: 'thermal core cryogenic trucks',
    material: 'Aerospace CNC-Titanium',
    weight: '320g (pair)',
    temp: '-50°C tolerance',
    spec: '183mm hanger width',
    badge: 'CHASSIS',
    icon: '⬡',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    description:
      'CNC-machined titanium alloy kingpin trucks featuring cryo-grade sealed bearing hubs with freeze-resistant lubricant systems engineered to maintain turn response at extreme sub-zero temperatures.',
    features: ['Zero-expansion pivot cups', 'Cryo-sealed bearing cartridges', 'Adjustable frost kingpin tension', 'Zero-flex axle geometry'],
  },
  {
    id: 'bindings',
    name: 'mag-lock thermal bindings',
    material: 'Tungsten-Carbon Hybrid Shell',
    weight: '560g (pair)',
    temp: 'Active heat retention',
    spec: 'Universal boot mount',
    badge: 'CONTROL',
    icon: '⬢',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80',
    description:
      'High-retention magnetic locking bindings with thermal-core liner tech. On-ice self-heating filament system maintains comfortable +5°C internal temperature while providing industrial-grade boot lock under G-force load.',
    features: ['Magnetic quick-click release', 'Thermal filament liner system', 'Asymmetric torque distribution', 'Carbon-shell lateral lock'],
  },
];

export const GearTechnology: React.FC = () => {
  const [activeGear, setActiveGear] = useState<string>('blade');
  const selected = gearItems.find((g) => g.id === activeGear) || gearItems[0];

  return (
    <section id="gear" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="uppercase font-semibold tracking-wider">05 // ENGINEERED ICE TECH</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            built for sub-zero
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Every component is stress-tested at polar extremes. From cryo-hardened tungsten edges to aerospace titanium frames — this is not regular skating gear.
          </p>
        </motion.div>

        {/* Gear Selector Pills with Animated Active Indicator */}
        <div className="flex flex-wrap gap-3 mb-12">
          {gearItems.map((item) => {
            const isActive = activeGear === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveGear(item.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider cursor-pointer font-bold transition-all ${
                  isActive
                    ? 'bg-white text-black shadow-xl scale-105'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-white/20'
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.badge}
              </motion.button>
            );
          })}
        </div>

        {/* Main Gear Card with High-Level Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left: Full Color Gear Visual Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 relative bg-neutral-900 border border-white/20 hover:border-white/50 rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[420px] group shadow-2xl transition-colors"
            >
              {/* Full Color Image */}
              <img
                src={selected.image}
                alt={selected.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/30" />

              {/* Centered animated technical glyph with orbit rings */}
              <div className="relative z-10 flex items-center justify-center h-40 mb-6">
                <div className="relative flex items-center justify-center">
                  {/* Outer orbit ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-36 h-36 rounded-full border border-dashed border-white/25"
                  />
                  {/* Middle orbit ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-24 h-24 rounded-full border border-white/20"
                  />
                  {/* Central icon */}
                  <div className="relative w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md bg-black/80 shadow-2xl">
                    <motion.span
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="text-2xl font-mono text-white"
                    >
                      {selected.icon}
                    </motion.span>
                  </div>

                  {/* Orbit dot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-36 h-36 rounded-full"
                    style={{ transformOrigin: 'center' }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  </motion.div>
                </div>
              </div>

              {/* Gear Info */}
              <div className="relative z-10">
                <span className="text-xs font-mono text-white uppercase font-bold drop-shadow tracking-wider">{selected.badge}</span>
                <h3 className="hero-title text-2xl md:text-3xl font-medium text-white mt-1 mb-4 drop-shadow-lg">
                  {selected.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/90 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-md">
                    <div className="text-[10px] text-white/90 font-mono uppercase font-semibold">Weight</div>
                    <div className="text-base text-white font-bold mt-0.5">{selected.weight}</div>
                  </div>
                  <div className="bg-black/90 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-md">
                    <div className="text-[10px] text-white/90 font-mono uppercase font-semibold">Temp Rating</div>
                    <div className="text-base text-white font-bold mt-0.5">{selected.temp}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed specs + animated feature grid */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-900 border border-white/20 rounded-3xl p-8 flex-1 backdrop-blur shadow-xl"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-mono text-white uppercase font-bold">Material:</span>
                  <span className="text-xs text-white font-mono bg-black/80 px-3 py-1.5 rounded-md border border-white/25 font-medium">
                    {selected.material}
                  </span>
                </div>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6 font-normal">{selected.description}</p>

                <div className="text-xs font-mono text-white uppercase mb-2 font-bold">Core Dimension Spec:</div>
                <div className="bg-black/90 border border-white/20 rounded-xl px-4 py-3 animate-glow-border">
                  <span className="text-sm md:text-base text-white font-mono font-semibold">{selected.spec}</span>
                </div>
              </motion.div>

              {/* Feature grid with stagger reveal */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-xl"
              >
                <div className="text-xs font-mono text-white uppercase mb-4 font-bold tracking-wider">Engineering Features</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selected.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="flex items-center gap-2.5 bg-black/90 border border-white/15 hover:border-white/40 rounded-xl px-4 py-3 transition-colors group cursor-default"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        className="w-2 h-2 rounded-full bg-white flex-shrink-0"
                      />
                      <span className="text-xs text-white font-medium">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
