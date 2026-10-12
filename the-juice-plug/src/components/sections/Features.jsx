import { Bike, Droplets, Leaf, Sprout } from 'lucide-react'
import { features } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Droplets, Leaf, Sprout, Bike }

export default function Features() {
  return (
    <section id="why-us" className="border-y border-line bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-citrus-dark">Why us</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Fresh isn't a marketing word here
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <ScrollReveal
                key={feature.title}
                delay={i * 0.06}
                className="rounded-2xl border border-line bg-cream p-6 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-citrus-light text-citrus-dark">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
