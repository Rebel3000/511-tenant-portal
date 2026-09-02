import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimonials() {
  return (
    <section className="bg-surface-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Customers</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Operations leaders run on Wade Vantage
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-surface-border bg-surface p-8 shadow-card"
            >
              <Quote className="text-accent" size={28} aria-hidden="true" />
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-soft">"{t.quote}"</p>
              <div className="mt-6 border-t border-surface-border pt-5">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink-faint">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
