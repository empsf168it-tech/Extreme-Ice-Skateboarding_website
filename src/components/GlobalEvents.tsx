import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  status: 'Live Now' | 'Registering' | 'Upcoming';
  prizePool: string;
  discipline: string;
  riders: number;
  image: string;
}

const eventsList: EventItem[] = [
  {
    id: 'e1',
    title: 'oslo glacier bowl open',
    location: 'Oslo, Norway',
    date: 'OCT 24 - 27, 2026',
    status: 'Registering',
    prizePool: '$120,000 USD',
    discipline: 'Freestyle & Superpipe',
    riders: 64,
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'e2',
    title: 'banff alpine ice downhill',
    location: 'Banff National Park, Canada',
    date: 'NOV 12 - 15, 2026',
    status: 'Registering',
    prizePool: '$250,000 USD',
    discipline: 'Natural Ice Chute Speedrun',
    riders: 48,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'e3',
    title: 'helsinki frozen rails masters',
    location: 'Helsinki, Finland',
    date: 'DEC 05 - 08, 2026',
    status: 'Upcoming',
    prizePool: '$90,000 USD',
    discipline: 'Urban Ice Park / Grind Obstacles',
    riders: 32,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'e4',
    title: 'baikal black ice velocity sprint',
    location: 'Lake Baikal, Siberia',
    date: 'JAN 18 - 22, 2027',
    status: 'Upcoming',
    prizePool: '$180,000 USD',
    discipline: 'Straight-Line Speed Records',
    riders: 24,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80',
  },
];

export const GlobalEvents: React.FC = () => {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegister = (id: string, title: string) => {
    if (registeredEvents.includes(id)) return;
    setRegisteredEvents([...registeredEvents, id]);
    setSuccessMessage(`Athlete pass reserved for: "${title}"`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  return (
    <section id="events" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Toast Notification with Spring Physics */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="fixed bottom-8 right-8 z-50 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-semibold text-sm border border-black/10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
              <span>✓ {successMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="uppercase font-semibold tracking-wider">03 // WORLD TOUR 2026-27</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            global ice arenas
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Witness the world's elite ice skateboarders battle across high-speed glacial courses, frosted city plazas, and Olympic ice vert pipes.
          </p>
        </motion.div>

        {/* Events Cards with Staggered Appearance & Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventsList.map((evt, idx) => {
            const isRegistered = registeredEvents.includes(evt.id);

            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-neutral-900 border border-white/20 hover:border-white/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-colors backdrop-blur shadow-2xl"
              >
                {/* Arena Photo Header with Zoom Effect */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className={`text-xs px-3.5 py-1.5 rounded-full uppercase font-mono backdrop-blur-md shadow-lg ${
                        evt.status === 'Registering'
                          ? 'bg-white text-black font-bold'
                          : 'bg-black/90 text-white border border-white/30 font-semibold'
                      }`}
                    >
                      {evt.status}
                    </span>
                    <span className="text-xs text-white font-mono bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 shadow-lg font-medium">
                      🗓️ {evt.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 pt-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <span className="text-xs text-white/90 font-mono uppercase block font-medium">
                      {evt.discipline}
                    </span>
                    <h3 className="hero-title text-2xl md:text-3xl font-medium text-white group-hover:text-white transition-colors">
                      {evt.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white font-normal">
                      <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/15">📍 {evt.location}</span>
                      <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/15">👥 {evt.riders} Pro Riders</span>
                    </div>
                  </div>

                  {/* Bottom stats & action */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-white/90 font-mono uppercase font-semibold">Prize Purse</div>
                      <div className="text-xl md:text-2xl font-bold text-white font-mono mt-0.5">{evt.prizePool}</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleRegister(evt.id, evt.title)}
                      disabled={isRegistered}
                      className={`px-6 py-3 rounded-full text-xs md:text-sm transition-all cursor-pointer whitespace-nowrap font-bold shadow-lg ${
                        isRegistered
                          ? 'bg-neutral-800 text-white/60 cursor-not-allowed border border-white/20'
                          : 'bg-white text-black hover:bg-neutral-200'
                      }`}
                    >
                      {isRegistered ? 'pass reserved ✓' : 'reserve athlete pass ↗'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
