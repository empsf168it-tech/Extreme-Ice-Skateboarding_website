import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spot {
  id: string;
  name: string;
  region: string;
  country: string;
  coords: string;
  elevation: string;
  iceThickness: string;
  temp: string;
  tempNum: number;
  difficulty: 'Legendary' | 'Extreme' | 'Pro Only' | 'Open Arena';
  description: string;
  image: string;
  features: string[];
}

const spotsData: Spot[] = [
  {
    id: 'spot-1',
    name: 'glacier chute 09',
    region: 'Jostedalsbreen Ice Cap',
    country: 'Norway',
    coords: '61.6874° N, 7.0289° E',
    elevation: '1,950m Drop',
    iceThickness: '42m Solid Ice',
    temp: '-22°C',
    tempNum: -22,
    difficulty: 'Extreme',
    description:
      'A natural high-speed glacial gorge carved through ancient blue ice. Features natural 60° banked wall-rides, frozen drop-ins, and a 400-meter straightaway with sub-zero wind draft.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    features: ['Natural blue ice walls', '65 km/h natural gravity run', 'Glacial crevasse air jump', 'Avalanche beacon required'],
  },
  {
    id: 'spot-2',
    name: 'banff frozen canyon',
    region: 'Alberta Rockies',
    country: 'Canada',
    coords: '51.4968° N, 115.9281° W',
    elevation: '1,420m Drop',
    iceThickness: '18m Mirror Ice',
    temp: '-18°C',
    tempNum: -18,
    difficulty: 'Legendary',
    description:
      'A narrow canyon river frozen into high-density black ice plates. World-renowned for technical edge carving, high-speed slaloms between rock faces, and crystal-clear ice acoustics.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    features: ['Mirror-finish black ice', 'Narrow 8-meter canyon walls', 'Night spotlight floodlit runs', 'Natural ice kickers'],
  },
  {
    id: 'spot-3',
    name: 'tromsø arctic vert bowl',
    region: 'Kvaløya Fjords',
    country: 'Norway',
    coords: '69.6492° N, 18.9553° E',
    elevation: '850m Bowl',
    iceThickness: '28m Permafrost',
    temp: '-14°C',
    tempNum: -14,
    difficulty: 'Pro Only',
    description:
      'A massive bowl carved into natural fjord permafrost directly under the northern lights. Custom engineered with 24ft ice vert transitions and tungsten rail extensions.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    features: ['Aurora borealis night sessions', '24ft carved vert wall', 'Integrated cryo-rail system', 'Heated athlete staging dome'],
  },
  {
    id: 'spot-4',
    name: 'hokkaido black ice flats',
    region: 'Lake Akan',
    country: 'Japan',
    coords: '43.4562° N, 144.1037° E',
    elevation: '420m Plateau',
    iceThickness: '1.2m Lake Plate',
    temp: '-16°C',
    tempNum: -16,
    difficulty: 'Open Arena',
    description:
      'Endless glassy sheet of smooth volcanic lake ice with zero surface resistance. The ultimate testing ground for straight-line velocity records, synchronized team drafts, and flatground 1080 spins.',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
    features: ['12km straight runway', 'Zero wind resistance zone', 'Laser telemetry timing gate', 'Heated blade prep station'],
  },
];

export const SpotRadar: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<string>('spot-1');
  const selected = spotsData.find((s) => s.id === activeSpot) || spotsData[0];
  const [liveWind, setLiveWind] = useState<number>(14);

  // Live telemetry wind fluctuation animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveWind((prev) => Math.max(8, Math.min(32, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="spots" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="uppercase font-semibold tracking-wider">04 // LIVE ICE SPOT RADAR</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            extreme ice frontiers
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Live telemetry tracking of the world's most extreme natural ice bowls, glacial gorges, and black ice flats. Scout conditions before you drop in.
          </p>
        </motion.div>

        {/* Spot Selection Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {spotsData.map((spot) => {
            const isSelected = activeSpot === spot.id;
            return (
              <motion.button
                key={spot.id}
                onClick={() => setActiveSpot(spot.id)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-white shadow-2xl ring-1 ring-white/50'
                    : 'bg-neutral-950 border-white/20 hover:border-white/50 hover:bg-neutral-900'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-white/90 uppercase font-semibold">
                      {spot.country}
                    </span>
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono uppercase ${
                        spot.difficulty === 'Legendary'
                          ? 'bg-white text-black font-bold'
                          : 'bg-white/20 text-white font-medium border border-white/30'
                      }`}
                    >
                      {spot.difficulty}
                    </span>
                  </div>
                  <div className="hero-title text-xl text-white font-medium mb-1 capitalize">
                    {spot.name}
                  </div>
                  <div className="text-xs text-white font-normal">{spot.region}</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center text-xs font-mono text-white font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {spot.temp}
                  </span>
                  <span>{spot.elevation}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Spot Spotlight Hero Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Big Photographic Arena Viewer with Live Radar Sweep */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/30 min-h-[480px] flex flex-col justify-between p-8 md:p-12 group shadow-2xl bg-neutral-950">
              {/* Photo Background */}
              <img
                src={selected.image}
                alt={selected.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35" />

              {/* High-Tech Radar Scanning Sweep Effect in Top Corner */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-black/80 backdrop-blur-md overflow-hidden">
                  <div className="absolute inset-0 animate-radar-sweep origin-center bg-gradient-to-r from-white/30 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 z-10 animate-ping" />
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-black/90 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full font-mono text-xs text-white shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">GPS: {selected.coords}</span>
                </div>
              </div>

              {/* Spot Details Header */}
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-4 py-1.5 bg-black/85 backdrop-blur-md border border-white/40 rounded-full text-xs text-white font-mono uppercase font-bold shadow-md">
                    {selected.country} · {selected.region}
                  </span>
                </div>
                <h3 className="hero-title text-3xl md:text-5xl font-medium text-white mb-4 capitalize drop-shadow-lg">
                  {selected.name}
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed font-normal drop-shadow">
                  {selected.description}
                </p>
              </div>

              {/* Feature Badges */}
              <div className="relative z-10 pt-6 border-t border-white/30 mt-8">
                <span className="text-xs text-white uppercase tracking-wider block mb-3 font-mono font-semibold drop-shadow">
                  Arena Infrastructure &amp; Hazards
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
            </div>

            {/* Right Telemetry Column with Dynamic Readings */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/50 rounded-3xl p-6 flex flex-col justify-between backdrop-blur flex-1 shadow-xl transition-all"
              >
                <div className="flex justify-between items-center text-xs font-mono text-white/90 uppercase font-semibold">
                  <span>Surface Temperature</span>
                  <span className="text-emerald-400 font-bold">● LIVE</span>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white font-mono mb-1">
                    {selected.temp}
                  </div>
                  <div className="text-xs text-white/90 font-medium">Hard crystalline blue ice</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/50 rounded-3xl p-6 flex flex-col justify-between backdrop-blur flex-1 shadow-xl transition-all"
              >
                <div className="flex justify-between items-center text-xs font-mono text-white/90 uppercase font-semibold">
                  <span>Ice Core Thickness</span>
                  <span>SONAR DEPTH</span>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-mono mb-1">
                    {selected.iceThickness}
                  </div>
                  <div className="text-xs text-white/90 font-medium">Permafrost rated for high load</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-neutral-900 border border-white/20 hover:border-white/50 rounded-3xl p-6 flex flex-col justify-between backdrop-blur flex-1 shadow-xl transition-all"
              >
                <div className="flex justify-between items-center text-xs font-mono text-white/90 uppercase font-semibold">
                  <span>Live Wind Velocity</span>
                  <span>ANEMOMETER</span>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-mono mb-1">
                    {liveWind} KM/H
                  </div>
                  <div className="text-xs text-white/90 font-medium">Sub-zero crosswind vector</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
