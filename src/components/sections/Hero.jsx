import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card px-4 py-1.5 text-sm font-medium text-ink-soft shadow-card"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          Now supporting real-time workflow analytics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl"
        >
          Operations intelligence, <span className="text-primary">engineered for scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          Wade Vantage unifies your workflows, data, and teams into one platform — so you can automate the
          busywork and act on what matters, before it becomes a problem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#cta"
            className="w-full bg-primary text-white shadow-glow hover:bg-primary-dim sm:w-auto"
          >
            Start free trial
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#process"
            className="w-full border border-surface-border bg-surface-card text-ink hover:border-primary hover:text-primary sm:w-auto"
          >
            <PlayCircle size={16} />
            See how it works
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-4xl animate-float"
        >
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-card shadow-glow">
            <div className="flex items-center gap-2 border-b border-surface-border bg-surface-muted px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-accent/60" />
              <span className="h-3 w-3 rounded-full bg-primary/40" />
              <span className="h-3 w-3 rounded-full bg-ink-faint/30" />
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
              {[
                { label: 'Open workflows', value: '128', trend: '+12%' },
                { label: 'Avg. cycle time', value: '3.2h', trend: '-18%' },
                { label: 'Automations run', value: '48.2k', trend: '+31%' },
              ].map((card) => (
                <div key={card.label} className="rounded-xl border border-surface-border bg-surface p-4 text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">{card.label}</p>
                  <p className="mt-2 text-2xl font-bold text-ink">{card.value}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">{card.trend} this week</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
