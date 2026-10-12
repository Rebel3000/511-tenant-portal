import { menu } from '../../data/content'
import { cn } from '../../utils/cn'
import ScrollReveal from '../ui/ScrollReveal'

const tagStyles = {
  citrus: 'bg-citrus-light text-citrus-dark',
  green: 'bg-greens-light text-greens-dark',
  berry: 'bg-berry-light text-berry',
}

export default function Menu() {
  return (
    <section id="menu" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-citrus-dark">The menu</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Pick your plug
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <ScrollReveal
              key={item.name}
              delay={i * 0.05}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-ink">{item.name}</h3>
                <span className={cn('shrink-0 rounded-full px-3 py-1 text-xs font-bold capitalize', tagStyles[item.tag])}>
                  {item.tag}
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.ingredients}</p>
              <p className="mt-5 font-display text-xl font-extrabold text-ink">{item.price}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
