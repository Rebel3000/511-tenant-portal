import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'

const NAV_LINKS = ['Shop', 'Deals', 'Rewards', 'Locations']
const TRUST_MARKS = ['MD Licensed', 'Lab Tested', 'Locally Grown', '21+ Only']

export default function NaturecoreHero() {
  const [cardVisible, setCardVisible] = useState(true)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    gsap.to(card, {
      opacity: cardVisible ? 1 : 0,
      y: cardVisible ? 0 : 16,
      scale: cardVisible ? 1 : 0.98,
      pointerEvents: cardVisible ? 'auto' : 'none',
      duration: 0.35,
      ease: 'power2.out',
    })
  }, [cardVisible])

  return (
    <section className="naturecore-hero">
      <nav className="hero-nav-pill">
        <button className="close-icon" onClick={() => setCardVisible((v) => !v)} aria-label="Toggle info card">
          <X size={14} />
        </button>
        <ul className="hero-nav-menu">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a href="#" className={i === 0 ? 'active' : ''}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="overlay-card-position">
        <div ref={cardRef} className="overlay-card">
          <div className="subtitle">About Thrive</div>
          <h2>
            We treat cannabis like something worth <em>cultivating</em> — real growers, real soil, honest{' '}
            <em>craft</em>. This is the <em>bloom</em>.
          </h2>
          <div className="trust-marks">
            {TRUST_MARKS.map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>
        </div>
      </div>

      <h1 className="bg-typography">
        Grown To
        <br />
        Thrive
      </h1>
    </section>
  )
}
