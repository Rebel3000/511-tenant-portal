import { MotionConfig } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Menu from './components/sections/Menu'
import Reviews from './components/sections/Reviews'
import CTASection from './components/sections/CTASection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-cream font-sans text-ink selection:bg-citrus/20">
        <Navbar />

        <main>
          <Hero />
          <Features />
          <Menu />
          <Reviews />
          <CTASection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
