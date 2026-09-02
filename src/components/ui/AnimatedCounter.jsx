import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ end, suffix = '', prefix = '', decimals = 0, duration = 2 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} prefix={prefix} suffix={suffix} decimals={decimals} duration={duration} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
