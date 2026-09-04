import { MotionConfig } from 'framer-motion'

import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Thesis from './components/sections/Thesis'
import Focus from './components/sections/Focus'
import ForFounders from './components/sections/ForFounders'
import CTASection from './components/sections/CTASection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-white font-sans text-black selection:bg-venture/20">
        <ScrollProgressBar />
        <Navbar />

        <main>
          <Hero />
          <Thesis />
          <Focus />
          <ForFounders />
          <CTASection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
