import { Headset, LineChart, Plug, ShieldCheck, Users, Workflow } from 'lucide-react'
import { features } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = { Workflow, LineChart, Plug, ShieldCheck, Users, Headset }

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Product</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything your operations team needs, in one place
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Replace scattered spreadsheets and status meetings with a platform built to run your workflows for
            you.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <ScrollReveal
                key={feature.title}
                delay={i * 0.06}
                className="group rounded-2xl border border-surface-border bg-surface-card p-6 shadow-card transition-shadow hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
