import { tone, vocabulary } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function Focus() {
  return (
    <section id="focus" className="border-t border-border bg-white py-section lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-venture">02. Focus</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            What we look for.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {vocabulary.map((word) => (
            <span
              key={word}
              className="rounded border border-border px-4 py-2 text-sm font-semibold text-black shadow-card"
            >
              {word}
            </span>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.16} className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">How we show up</p>
          <div className="mt-4 flex flex-wrap gap-6">
            {tone.map((word) => (
              <span key={word} className="text-lg font-medium text-black">
                {word}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
