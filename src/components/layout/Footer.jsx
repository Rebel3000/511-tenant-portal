import { Github, Linkedin, Twitter } from 'lucide-react'
import { footerLinks } from '../../data/content'

const social = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-white">
                W
              </span>
              Wade Vantage
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-faint">
              Operations intelligence for growing teams — automate the busywork, act on what matters.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-ink-soft transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-ink">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-ink-faint transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 text-sm text-ink-faint md:flex-row">
          <p>© {new Date().getFullYear()} Wade Vantage, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
