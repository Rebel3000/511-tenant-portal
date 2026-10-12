import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Reveals children with a 3D tilt as they scroll into view: the element
 * rotates up out of the page (rotateX) while fading and sliding in, then
 * settles flat. transformPerspective gives the rotation real depth instead
 * of just squashing vertically.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 32,
  rotateX = 16,
  as: Component = motion.div,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y, rotateX }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </Component>
  )
}
