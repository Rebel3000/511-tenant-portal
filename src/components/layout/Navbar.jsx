import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../../data/content'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight text-black">
          <img src="/logo-mark.svg" alt="" className="h-8 w-8" width="32" height="32" />
          WADE VENTURES
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black transition hover:text-venture"
            >
              {item.label}
            </a>
          ))}
        </div>

        <MagneticButton
          as="a"
          href="#partner"
          className="hidden bg-venture text-black hover:bg-venture/90 md:inline-flex"
        >
          Partner with us.
        </MagneticButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-black md:hidden"
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-black hover:text-venture"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#partner"
                onClick={() => setOpen(false)}
                className="mt-2 bg-venture px-4 py-3 text-center text-base font-semibold text-black"
              >
                Partner with us.
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
