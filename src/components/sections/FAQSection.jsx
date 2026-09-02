import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQSection() {
  return (
    <section id="faq" className="bg-surface-card py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.question}
                value={faq.question}
                className="overflow-hidden rounded-xl border border-surface-border bg-surface"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-primary">
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-ink-faint transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-6 text-sm leading-relaxed text-ink-soft data-[state=closed]:animate-none data-[state=open]:pb-5">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  )
}
