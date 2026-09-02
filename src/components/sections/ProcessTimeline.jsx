import { process } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-surface-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Live in weeks, not quarters
          </h2>
        </ScrollReveal>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-surface-border lg:block"
          />
          {process.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.08} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-surface font-bold text-primary shadow-card">
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
