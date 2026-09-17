import { Instagram, Music2, Twitter } from 'lucide-react'
import { nav } from '../../data/content'

const social = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Music2, href: '#', label: 'TikTok' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-white">
              <img src="/logo-mark-light.svg" alt="" className="h-9 w-9" width="36" height="36" />
              The Juice Plug
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Cold-pressed juice and smoothies, made fresh every day. Your plug for the good stuff.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-citrus hover:text-citrus"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-10">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold hover:text-citrus">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} The Juice Plug. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-citrus">
              Privacy
            </a>
            <a href="#" className="hover:text-citrus">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
