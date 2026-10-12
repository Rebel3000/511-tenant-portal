import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import NaturecoreHero from './components/NaturecoreHero'
import MeasuredTerrariumHero from './components/MeasuredTerrariumHero'

type View = 'naturecore' | 'measured'

export default function App() {
  const [view, setView] = useState<View>('naturecore')
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    gsap.fromTo(stage, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
  }, [view])

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div ref={stageRef}>
        {view === 'naturecore' ? <NaturecoreHero /> : <MeasuredTerrariumHero />}
      </div>

      <div className="view-switcher">
        <button
          className={`view-btn ${view === 'naturecore' ? 'active' : ''}`}
          onClick={() => setView('naturecore')}
        >
          Naturecore
        </button>
        <button className={`view-btn ${view === 'measured' ? 'active' : ''}`} onClick={() => setView('measured')}>
          Measured Terrarium
        </button>
      </div>
    </div>
  )
}
