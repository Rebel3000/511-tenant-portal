import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-citrus/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 -z-10 h-96 w-96 rounded-full bg-greens/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink-soft shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-greens" />
            Pressed fresh every morning
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl"
          >
            Cold-pressed.
            <br />
            Straight from <span className="text-citrus">the plug.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Real fruit, real veg, zero added sugar. Made fresh every day so you get juice that actually tastes
            like the thing it's named after.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton as="a" href="#menu" className="bg-citrus text-white shadow-card hover:bg-citrus-dark">
              View the menu
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#why-us"
              className="border border-line bg-white text-ink hover:border-citrus hover:text-citrus-dark"
            >
              Why The Juice Plug
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-citrus via-citrus to-berry opacity-90" />
          <div className="absolute inset-16 animate-float rounded-full bg-white/95 shadow-card" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-extrabold text-ink">100% Fruit</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
