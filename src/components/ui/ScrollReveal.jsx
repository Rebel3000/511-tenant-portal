import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Fades + slides children into view once, then stays put.
 * Respects prefers-reduced-motion via framer-motion's global config in App.jsx.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: Component = motion.div,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
