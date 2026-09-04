import { nav } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-section lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-medium text-black">
              <img src="/logo-mark.svg" alt="" className="h-8 w-8" width="32" height="32" />
              WADE VENTURES
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Capital for the bold. We partner with early-stage founders to build category-defining businesses.
            </p>
          </div>

          <div className="flex gap-8">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-black transition hover:text-venture">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 font-mono text-xs uppercase tracking-wide text-muted sm:flex-row sm:items-center">
          <span>Edition 01</span>
          <span>© {new Date().getFullYear()} Wade Ventures</span>
        </div>
      </div>
    </footer>
  )
}
