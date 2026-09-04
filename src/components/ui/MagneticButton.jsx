import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * Button that subtly follows the cursor within its bounds. Disabled on touch
 * devices (no persistent hover) and reduces to a plain button when the user
 * prefers reduced motion.
 */
export default function MagneticButton({ as: Tag = 'button', className, children, strength = 14, ...props }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function handleMove(e) {
    if (prefersReduced || !ref.current || window.matchMedia('(hover: none)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength
    setOffset({ x, y })
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 })
  }

  const MotionTag = motion[typeof Tag === 'string' ? Tag : 'button'] ?? motion.button

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.3 }}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold transition',
        className
      )}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
