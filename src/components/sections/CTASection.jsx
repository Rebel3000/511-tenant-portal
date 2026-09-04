import { vocabulary } from '../../data/content'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTASection() {
  return (
    <section id="partner" className="border-t border-border bg-black py-section text-white lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Capital for the bold.
          </h2>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {vocabulary.slice(0, 3).join(' · ')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex justify-center">
          <MagneticButton as="a" href="#" className="bg-venture text-black hover:bg-venture/90">
            Partner with us.
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
