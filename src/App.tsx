import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SkateDisciplines } from './components/SkateDisciplines'
import { TricksMatrix } from './components/TricksMatrix'
import { GlobalEvents } from './components/GlobalEvents'
import { SpotRadar } from './components/SpotRadar'
import { GearTechnology } from './components/GearTechnology'
import { InteractiveSimulator } from './components/InteractiveSimulator'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white relative" style={{ scrollBehavior: 'smooth' }}>
      {/* Global Fixed Header Navigation Bar */}
      <Navbar />

      {/* Section 0: Hero with Fullscreen Video */}
      <Hero />

      {/* Section 1: Skate Disciplines */}
      <SkateDisciplines />

      {/* Section 2: Tricks Matrix */}
      <TricksMatrix />

      {/* Section 3: Global Events & World Tour */}
      <GlobalEvents />

      {/* Section 4: Live Ice Spot Radar & Frontiers */}
      <SpotRadar />

      {/* Unique Section 5: Gear & Ice Technology */}
      <GearTechnology />

      {/* Unique Section 6: Interactive Speed Simulator */}
      <InteractiveSimulator />

      {/* Unique Section 7: VIP Pass CTA + Footer */}
      <Footer />
    </div>
  )
}
