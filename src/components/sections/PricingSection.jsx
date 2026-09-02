import { Check } from 'lucide-react'
import { pricing } from '../../data/content'
import { cn } from '../../utils/cn'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-ink-soft">No setup fees. Cancel anytime.</p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <ScrollReveal
              key={plan.name}
              delay={i * 0.08}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8',
                plan.highlighted
                  ? 'border-primary bg-ink text-white shadow-glow lg:-translate-y-4'
                  : 'border-surface-border bg-surface-card shadow-card'
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className={cn('text-lg font-semibold', plan.highlighted ? 'text-white' : 'text-ink')}>
                {plan.name}
              </h3>
              <p className={cn('mt-2 text-sm', plan.highlighted ? 'text-white/70' : 'text-ink-faint')}>
                {plan.description}
              </p>
              <p className="mt-6">
                <span className={cn('text-4xl font-extrabold', plan.highlighted ? 'text-white' : 'text-ink')}>
                  {plan.price}
                </span>
                <span className={cn('text-sm', plan.highlighted ? 'text-white/70' : 'text-ink-faint')}>
                  {plan.period}
                </span>
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={18}
                      className={cn('mt-0.5 shrink-0', plan.highlighted ? 'text-accent' : 'text-primary')}
                    />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-ink-soft'}>{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                as="a"
                href="#cta"
                className={cn(
                  'mt-8 w-full',
                  plan.highlighted
                    ? 'bg-accent text-white hover:bg-accent-dim'
                    : 'border border-surface-border bg-surface text-ink hover:border-primary hover:text-primary'
                )}
              >
                {plan.cta}
              </MagneticButton>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
