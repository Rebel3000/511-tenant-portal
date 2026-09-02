import { stats } from '../../data/content'
import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'

export default function StatsSection() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-surface-border bg-surface-card p-10 shadow-card sm:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-soft">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
