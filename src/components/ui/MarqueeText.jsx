import { cn } from '../../utils/cn'

/**
 * Infinite horizontal marquee. Content is duplicated once so the loop is seamless.
 * Pauses on hover/focus and is fully static under prefers-reduced-motion (see index.css).
 */
export default function Marquee({ children, className, reverse = false }) {
  return (
    <div className={cn('group relative flex overflow-hidden', className)}>
      <div
        className={cn(
          'flex shrink-0 items-center gap-16 pr-16 animate-marquee group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]'
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex shrink-0 items-center gap-16 pr-16 animate-marquee group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]'
        )}
      >
        {children}
      </div>
    </div>
  )
}
