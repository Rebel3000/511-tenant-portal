import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black pb-24 pt-40 text-white lg:pb-32 lg:pt-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          // Early-stage venture capital
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05, ease: 'easeInOut' }}
          className="mt-6 text-balance text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          Capital for the bold.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Wade Ventures partners with early-stage founders to build category-defining businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: 'easeInOut' }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton as="a" href="#partner" className="bg-venture text-black hover:bg-venture/90">
            Partner with us.
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
