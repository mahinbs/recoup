import React from 'react'
import useReveal from '../../hooks/useReveal'

const steps = [
  { num: '01', title: 'Recognize', text: 'Advanced diagnostics to identify the root cause of health concerns, not just symptoms.' },
  { num: '02', title: 'Remedy', text: 'Evidence-based treatments combining modern medicine with holistic care protocols.' },
  { num: '03', title: 'Restore', text: 'Personalized rehabilitation programs to rebuild strength and function sustainably.' },
  { num: '04', title: 'Regenerate', text: 'Long-term wellness strategies for sustained health and vitality throughout life.' },
]

const TherapyHighlight = () => {
  const ref = useReveal()
  return (
    <section ref={ref} className="reveal fourr-section">
      <div className="hp-wrap">
        <span className="kicker">Our Methodology</span>
        <h2 className="section-title">The 4R Healing Framework</h2>
        <p className="section-sub">
          Dr. Sharan's proprietary protocol treats physical, mental, emotional, and
          social wellbeing for lasting results.
        </p>
        <div className="fourr-grid">
          {steps.map((s) => (
            <div className="fourr-step" key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TherapyHighlight
