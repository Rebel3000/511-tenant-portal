import { MotionConfig } from 'framer-motion'

import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import LogoCloud from './components/sections/LogoCloud'
import Features from './components/sections/Features'
import ProcessTimeline from './components/sections/ProcessTimeline'
import StatsSection from './components/sections/StatsSection'
import Testimonials from './components/sections/Testimonials'
import PricingSection from './components/sections/PricingSection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-x-hidden bg-surface font-sans text-ink selection:bg-primary/20">
        <ScrollProgressBar />
        <Navbar />

        <main>
          <Hero />
          <LogoCloud />
          <Features />
          <ProcessTimeline />
          <StatsSection />
          <Testimonials />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
