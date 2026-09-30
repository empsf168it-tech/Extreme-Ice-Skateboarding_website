import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

      {/* Floating Back to Top Button Visible Across All Sections */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 px-4 py-2.5 rounded-full bg-white text-black font-bold text-xs font-mono shadow-2xl hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-1.5 border border-black/10"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
