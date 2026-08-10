import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 35, suffix: '+', label: 'Years of Excellence' },
  { value: 1000000, suffix: '+', label: 'Patients Treated', format: true },
  { value: 45, suffix: '+', label: 'Countries Reached' },
  { value: 20, suffix: '+', label: 'International Awards' },
  { value: 600, suffix: '+', label: 'Scientific Publications' },
]

function useCountUp(target, start) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setValue(target)
      return
    }
    const duration = 1200
    const t0 = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start])
  return value
}

function Stat({ value, suffix, label, format, start }) {
  const n = useCountUp(value, start)
  const display = format ? n.toLocaleString('en-IN') : n
  return (
    <div>
      <div className="stat-value">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const HomeStats = () => {
  const ref = useRef(null)
  const [start, setStart] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setStart(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStart(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="stats" ref={ref}>
      <div className="hp-wrap stats-grid">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} start={start} />
        ))}
      </div>
    </section>
  )
}

export default HomeStats
