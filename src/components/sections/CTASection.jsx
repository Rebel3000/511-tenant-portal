import { ArrowRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTASection() {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-glow sm:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />

          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to see your operations run themselves?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70">
            Start a free 14-day trial, or talk to our team about what Wade Vantage can automate for you.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              as="a"
              href="#"
              className="w-full bg-accent text-white hover:bg-accent-dim sm:w-auto"
            >
              Start free trial
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#"
              className="w-full border border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
            >
              Talk to sales
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
