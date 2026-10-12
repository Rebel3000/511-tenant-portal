import { ArrowRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ScrollReveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center shadow-card sm:px-16">
          <div aria-hidden="true" className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-citrus/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-greens/30 blur-3xl" />

          <h2 className="relative text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get the plug today.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-lg text-cream/70">
            Order ahead and skip the line, or come find us and taste the difference fresh makes.
          </p>

          <div className="relative mt-10 flex justify-center">
            <MagneticButton as="a" href="#menu" className="bg-citrus text-white hover:bg-citrus-dark">
              Order now
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
