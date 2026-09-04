import ScrollReveal from '../ui/ScrollReveal'

export default function Thesis() {
  return (
    <section id="thesis" className="bg-white py-section lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-venture">01. Thesis</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            A system, not a style.
          </h2>
          <div className="mt-6 h-px bg-border" />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Wade Ventures is a modern venture capital firm focused on partnering with early-stage founders to
            build category-defining businesses.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
