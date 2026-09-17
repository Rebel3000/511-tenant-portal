import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../../data/content'
import { cn } from '../../utils/cn'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/90 shadow-card backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-ink">
          <img src="/favicon.svg" alt="" className="h-9 w-9" width="36" height="36" />
          The Juice Plug
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-citrus-dark"
            >
              {item.label}
            </a>
          ))}
        </div>

        <MagneticButton
          as="a"
          href="#menu"
          className="hidden bg-citrus text-white shadow-card hover:bg-citrus-dark md:inline-flex"
        >
          Order now
        </MagneticButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-ink-soft hover:bg-citrus-light hover:text-citrus-dark"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-citrus px-4 py-3 text-center text-base font-bold text-white"
              >
                Order now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
