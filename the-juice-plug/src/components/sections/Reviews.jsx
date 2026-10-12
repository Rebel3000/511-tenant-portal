import { Quote } from 'lucide-react'
import { reviews } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function Reviews() {
  return (
    <section id="reviews" className="border-y border-line bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-citrus-dark">Reviews</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            What the regulars say
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal
              key={review.name}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-line bg-cream p-8 shadow-card"
            >
              <Quote className="text-berry" size={26} aria-hidden="true" />
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-soft">"{review.quote}"</p>
              <p className="mt-6 border-t border-line pt-5 font-semibold text-ink">{review.name}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
