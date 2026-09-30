import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const InteractiveSimulator: React.FC = () => {
  const [iceTemp, setIceTemp] = useState([-12]);
  const [incline, setIncline] = useState([15]);
  const [bladeTune, setBladeTune] = useState([80]);

  const iceTempVal = iceTemp[0];
  const inclineVal = incline[0];
  const bladeTuneVal = bladeTune[0];

  // Physics simulation logic
  const frictionCoeff = 0.02 - Math.abs(iceTempVal) * 0.0002;
  const gravity = 9.81;
  const inclineRad = (inclineVal * Math.PI) / 180;
  const bladeMultiplier = bladeTuneVal / 100;

  const rawSpeed =
    Math.sqrt((2 * gravity * Math.sin(inclineRad) * 40) / (frictionCoeff + 0.001)) *
    bladeMultiplier;
  const topSpeed = Math.max(Math.min(rawSpeed * 3.6, 130), 8).toFixed(1);

  const airMultiplier = (parseFloat(topSpeed) / 130) * (bladeTuneVal / 100);
  const airtime = Math.max(airMultiplier * 3.8, 0.3).toFixed(2);

  const gForce = (((parseFloat(topSpeed) / 3.6) ** 2) / (9.81 * 15)).toFixed(1);
  const frictionDisplay = (frictionCoeff > 0 ? frictionCoeff : 0.001).toFixed(4);

  const speedPct = (parseFloat(topSpeed) / 130) * 100;
  const airPct = (parseFloat(airtime) / 3.8) * 100;
  const gPct = Math.min((parseFloat(gForce) / 10) * 100, 100);

  const getVerdict = () => {
    const s = parseFloat(topSpeed);
    if (s > 80) return { emoji: '🔥', label: 'ELITE PACE', text: 'Extreme velocity. Full carbon helmet & spine protection mandatory.' };
    if (s > 50) return { emoji: '⚡', label: 'HIGH PERFORMANCE', text: 'Fast transitions and solid vert launch potential. Advanced riders.' };
    return { emoji: '🧊', label: 'TRAINING PACE', text: 'Ideal for mastering tight technical blade kickflips and rail slides.' };
  };

  const verdict = getVerdict();

  return (
    <section id="simulator" className="relative w-full bg-black py-28 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      {/* Background pulses */}
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/20 text-xs font-mono text-white mb-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="uppercase font-semibold tracking-wider">06 // SPEED PHYSICS ENGINE</span>
          </div>
          <h2 className="hero-title text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
            calculate your run
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            Dial in your run parameters. Adjust ice surface temperature, incline grade, and blade sharpness to compute your estimated speed and airtime before you drop in.
          </p>
        </motion.div>

        {/* Speed Track Banner with animated overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/25 min-h-[11rem] mb-10 flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4 shadow-2xl group"
        >
          <img
            src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
            alt="Ice speed track"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40 md:to-transparent" />
          {/* Animated shimmer sweep overlay */}
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />

          {/* Left / Main Text Content */}
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono text-white/90 uppercase tracking-widest block mb-1.5 font-bold drop-shadow">
              ICE DYNAMICS TELEMETRY ENGINE
            </span>
            <div className="hero-title text-xl md:text-3xl font-medium text-white drop-shadow-lg leading-tight">
              Simulating Alpine Blue Ice &amp; Tungsten Blade Friction
            </div>
          </div>

          {/* Live running status */}
          <div className="relative z-10 self-start md:self-center flex-shrink-0 flex items-center gap-2 bg-black/90 border border-white/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-white shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold whitespace-nowrap">SIM RUNNING</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column with Hover Glow Borders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Ice Temperature Slider */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-xl transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs text-white uppercase font-mono font-bold block">Ice Surface Temp</span>
                  <span className="text-[11px] text-white/70 font-mono">Colder = less friction</span>
                </div>
                <motion.span
                  key={iceTempVal}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold text-white font-mono"
                >
                  {iceTempVal}°C
                </motion.span>
              </div>
              <input
                type="range"
                min={-40}
                max={-1}
                value={iceTempVal}
                onChange={(e) => setIceTemp([Number(e.target.value)])}
                className="w-full accent-white cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-white/80 mt-2 font-mono">
                <span>-40°C (polar hard)</span>
                <span>-1°C (soft slush)</span>
              </div>
            </motion.div>

            {/* Incline Slider */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-xl transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs text-white uppercase font-mono font-bold block">Incline Grade</span>
                  <span className="text-[11px] text-white/70 font-mono">Steeper = more gravity assist</span>
                </div>
                <motion.span
                  key={inclineVal}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold text-white font-mono"
                >
                  {inclineVal}°
                </motion.span>
              </div>
              <input
                type="range"
                min={5}
                max={60}
                value={inclineVal}
                onChange={(e) => setIncline([Number(e.target.value)])}
                className="w-full accent-white cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-white/80 mt-2 font-mono">
                <span>5° (gradual run)</span>
                <span>60° (cliff vert)</span>
              </div>
            </motion.div>

            {/* Blade Tuning Slider */}
            <motion.div
              whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              className="bg-neutral-900 border border-white/20 rounded-3xl p-6 backdrop-blur shadow-xl transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xs text-white uppercase font-mono font-bold block">Blade Sharpness</span>
                  <span className="text-[11px] text-white/70 font-mono">Sharper = lower friction</span>
                </div>
                <motion.span
                  key={bladeTuneVal}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold text-white font-mono"
                >
                  {bladeTuneVal}%
                </motion.span>
              </div>
              <input
                type="range"
                min={20}
                max={100}
                value={bladeTuneVal}
                onChange={(e) => setBladeTune([Number(e.target.value)])}
                className="w-full accent-white cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-white/80 mt-2 font-mono">
                <span>20% (dull edge)</span>
                <span>100% (cryo-razor)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Results Column with Live Animated Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            {/* Top Speed */}
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.25 }}
              className="bg-neutral-900 border border-white/25 hover:border-white/60 rounded-3xl p-6 md:p-8 backdrop-blur shadow-xl transition-colors"
            >
              <span className="text-xs text-white uppercase font-mono block mb-3 font-bold">Top Speed</span>
              <motion.div
                key={topSpeed}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white font-mono mb-3"
              >
                {topSpeed}
              </motion.div>
              <div className="text-xs text-white font-mono mb-2 font-semibold">KM/H ON RUNWAY</div>
              {/* Animated progress bar */}
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${speedPct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </motion.div>

            {/* Airtime */}
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.25 }}
              className="bg-neutral-900 border border-white/25 hover:border-white/60 rounded-3xl p-6 md:p-8 backdrop-blur shadow-xl transition-colors"
            >
              <span className="text-xs text-white uppercase font-mono block mb-3 font-bold">Kicker Airtime</span>
              <motion.div
                key={airtime}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white font-mono mb-3"
              >
                {airtime}
              </motion.div>
              <div className="text-xs text-white font-mono mb-2 font-semibold">SECONDS IN FLIGHT</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${Math.min(airPct, 100)}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </motion.div>

            {/* G-Force */}
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.25 }}
              className="bg-neutral-900 border border-white/25 hover:border-white/60 rounded-3xl p-6 md:p-8 backdrop-blur shadow-xl transition-colors"
            >
              <span className="text-xs text-white uppercase font-mono block mb-3 font-bold">G-Force Load</span>
              <motion.div
                key={gForce}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white font-mono mb-3"
              >
                {gForce}
              </motion.div>
              <div className="text-xs text-white font-mono mb-2 font-semibold">G-FORCE LOAD</div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${gPct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full bg-white rounded-full"
                />
              </div>
            </motion.div>

            {/* Ice Friction */}
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.25 }}
              className="bg-neutral-900 border border-white/25 hover:border-white/60 rounded-3xl p-6 md:p-8 backdrop-blur shadow-xl transition-colors"
            >
              <span className="text-xs text-white uppercase font-mono block mb-3 font-bold">Friction (μ)</span>
              <motion.div
                key={frictionDisplay}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono mb-3"
              >
                {frictionDisplay}
              </motion.div>
              <div className="text-xs text-white font-mono font-semibold">COEFFICIENT</div>
            </motion.div>

            {/* Run Verdict with Animated Entrance */}
            <motion.div
              key={verdict.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-2 bg-neutral-900 border border-white/25 rounded-3xl p-6 backdrop-blur shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{verdict.emoji}</span>
                  <div>
                    <span className="text-xs text-white uppercase font-mono font-bold block">Run Assessment</span>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">{verdict.label}</span>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed font-normal">
                  {verdict.text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
