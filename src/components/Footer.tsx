import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="join" className="relative w-full bg-black text-white border-t border-white/20 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* TOP VIP DISPATCH & NEWSLETTER BOX */}
        <div className="relative rounded-3xl bg-neutral-900 border border-white/20 overflow-hidden p-8 md:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black border border-white/30 text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="font-semibold tracking-wider uppercase">2026 ATHLETE ALL-ACCESS DISPATCH</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                push the frontier on ice
              </h2>

              <p className="text-white text-base md:text-lg leading-relaxed font-light max-w-xl">
                Get early invitations to World Tour qualifiers, unlocked pro trick vault tutorials, prototype hardware lab drops, and live frozen spot telemetry.
              </p>

              {/* Feature Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { icon: '🎟️', title: 'World Tour Pass', desc: 'VIP Access' },
                  { icon: '⚡', title: 'Trick Vault', desc: 'Pro Breakdowns' },
                  { icon: '🧪', title: 'Gear Lab', desc: 'Hardware Drops' },
                  { icon: '📡', title: 'Spot Radar', desc: 'Live Telemetry' },
                ].map((item, i) => (
                  <div key={i} className="bg-black/80 border border-white/15 rounded-xl p-3 text-left">
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[10px] text-white/80 font-mono">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Subscription Card */}
            <div className="lg:col-span-5 bg-black border border-white/25 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-mono text-white font-bold tracking-wider">
                  CLAIM ATHLETE CREDENTIALS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-semibold">
                  FREE PASS
                </span>
              </div>
              <p className="text-xs text-white leading-relaxed mb-6 font-light">
                Join 65,000+ extreme athletes receiving weekly sub-zero updates, tournament entries, and cutting-edge blade tech.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="athlete@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 rounded-full bg-neutral-900 border border-white/30 text-white placeholder-white/50 text-sm outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-all cursor-pointer shadow-lg hover:scale-[1.01] flex items-center justify-center text-center gap-2"
                  >
                    <span className="text-center">Claim VIP Athlete Pass</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  <p className="text-[11px] text-white/70 text-center font-light pt-1">
                    Instant digital pass issued. No spam, unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="bg-neutral-900 border border-white/40 rounded-xl p-5 text-center space-y-2">
                  <div className="text-2xl">✓</div>
                  <div className="text-sm text-white font-bold">VIP Athlete Pass Reserved!</div>
                  <div className="text-xs text-white/90">
                    Welcome kit & live radar telemetry credentials dispatched to <span className="text-white font-semibold underline">{email}</span>.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STATS & TRUST STRIP */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-8 mb-12 border-y border-white/15">
          {[
            { label: 'GLOBAL TRACKS & SPOTS', value: '45+ ARENAS' },
            { label: 'REGISTERED RIDERS', value: '1.5M+ RIDERS' },
            { label: '2026 WORLD PRIZE POOL', value: '$500,000 USD' },
            { label: 'COLD RESISTANCE SPEC', value: '-35°C TESTED' },
          ].map((stat, i) => (
            <div key={i} className="text-left px-2">
              <div className="text-xs font-mono text-white/70 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-lg sm:text-2xl font-bold text-white font-mono">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* MAIN NAVIGATION 5 COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-12 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-2 xl:col-span-1 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 cursor-pointer text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-base group-hover:scale-105 transition-transform shadow-md">
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="6 3 18 3 22 13 12 22 2 13" fill="currentColor" fillOpacity="0.2" />
                  <path d="M2 13h20" />
                  <path d="M12 3v19" />
                  <path d="M6 3L12 13 18 3" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight uppercase">GLACIERIDE</span>
            </button>
            <p className="text-white text-xs leading-relaxed font-light max-w-sm">
              The premier international hub for extreme ice skateboarding, frozen vert tournaments, downhill cross circuits, and arctic sports engineering.
            </p>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/20 text-[11px] font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>RADAR & FEEDS ONLINE</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2 flex-wrap">
              {[
                { name: 'Instagram', label: 'IG' },
                { name: 'YouTube', label: 'YT' },
                { name: 'Discord', label: 'DC' },
                { name: 'TikTok', label: 'TT' },
                { name: 'X / Twitter', label: 'X' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white text-xs font-mono font-bold flex items-center justify-center transition-all cursor-pointer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Disciplines */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-4 border-b border-white/10 pb-2">
              Disciplines
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Freestyle Blade', target: 'skate' },
                { name: 'Downhill Glacier Cross', target: 'skate' },
                { name: 'Superpipe & Vert', target: 'skate' },
                { name: 'Speedrun Drag Race', target: 'skate' },
                { name: 'Pro Trick Matrix', target: 'tricks' },
                { name: 'Trick Difficulty Rating', target: 'tricks' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs text-white/90 hover:text-white transition-colors cursor-pointer text-left font-light hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: World Tour & Arenas */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-4 border-b border-white/10 pb-2">
              World Tour
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Oslo Glacier Bowl (NOR)', target: 'events' },
                { name: 'Banff Alpine Canyon (CAN)', target: 'events' },
                { name: 'Helsinki Frozen Rails (FIN)', target: 'events' },
                { name: 'Lake Baikal Velocity (RUS)', target: 'events' },
                { name: 'Live Spot Radar', target: 'spots' },
                { name: 'Tournament Schedules', target: 'events' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs text-white/90 hover:text-white transition-colors cursor-pointer text-left font-light hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engineering & Lab */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-4 border-b border-white/10 pb-2">
              Hardware Lab
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Cryo-Tungsten Blades', target: 'gear' },
                { name: 'Hex-Carbon Composite Decks', target: 'gear' },
                { name: 'CNC Titanium Trucks', target: 'gear' },
                { name: 'Active Heated Bindings', target: 'gear' },
                { name: 'Physics Velocity Engine', target: 'simulator' },
                { name: 'Sub-Zero Safety Armor', target: 'gear' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs text-white/90 hover:text-white transition-colors cursor-pointer text-left font-light hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Platform & Governance */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-4 border-b border-white/10 pb-2">
              Athletes & Crew
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Athlete Registration', target: 'join' },
                { name: 'Leaderboards & Rankings', target: 'events' },
                { name: 'Event Host Inquiries', target: 'join' },
                { name: 'Media & Press Assets', target: 'join' },
                { name: 'Safety Standards & Rules', target: 'skate' },
                { name: 'Community Discord Hub', target: 'join' },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs text-white/90 hover:text-white transition-colors cursor-pointer text-left font-light hover:translate-x-1 inline-block transform"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM METRICS & LEGAL BAR */}
        <div className="border-t border-white/20 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6 text-xs text-white font-mono">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 text-center xl:text-left">
            <span className="font-bold">© 2026 GLACIERIDE SPORTS INC.</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80">ALL RIGHTS RESERVED</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80">PROTOCOL: GLACIER-SECURE</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Security</a>
            <button
              onClick={() => scrollToSection('hero')}
              className="px-3.5 py-1.5 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-1 shadow-md hover:scale-105"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
