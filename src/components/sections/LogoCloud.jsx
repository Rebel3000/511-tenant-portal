import { clients } from '../../data/content'
import Marquee from '../ui/MarqueeText'
import ScrollReveal from '../ui/ScrollReveal'

export default function LogoCloud() {
  return (
    <section className="border-y border-surface-border bg-surface-card py-12">
      <ScrollReveal className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-ink-faint">
          Trusted by operations teams at
        </p>
      </ScrollReveal>
      <div className="mt-8">
        <Marquee>
          {clients.map((name) => (
            <span key={name} className="text-xl font-bold text-ink-faint/70">
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
