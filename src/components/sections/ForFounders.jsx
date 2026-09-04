import ScrollReveal from '../ui/ScrollReveal'

export default function ForFounders() {
  return (
    <section id="for-founders" className="border-t border-border bg-white py-section lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-venture">03. For founders</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            How we reach out.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 rounded border border-border bg-white p-8 shadow-card sm:p-10">
          <blockquote className="text-balance text-2xl font-medium leading-snug text-black">
            "We've been following your progress and are impressed by the scale of your vision."
          </blockquote>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">— Email intro, Wade Ventures</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
