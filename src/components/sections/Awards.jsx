import React from 'react'
import useReveal from '../../hooks/useReveal'

const awards = [
  { year: '2008', title: 'National Disability Award', org: 'Government of India' },
  { year: '2006', title: 'Henri Bensahel Award', org: 'SICOT' },
  { year: '2019', title: 'Presidential Award – Dr. APJ Abdul Kalam', org: 'Government of India' },
  { year: '2015', title: 'Indian Orthopaedic Association Recognition', org: 'Indian Orthopaedic Association' },
  { year: '2012', title: 'SICOT Research Academy Grant', org: 'SICOT' },
]

const Awards = () => {
  const ref = useReveal()
  const loop = [...awards, ...awards]
  return (
    <section ref={ref} className="reveal timeline-section">
      <div className="hp-wrap">
        <span className="kicker">A Career of Recognition</span>
        <h2 className="section-title">Awards &amp; Special Achievements</h2>
        <p className="section-sub">
          Over three decades of national and international recognition for research,
          surgical innovation, and service in Cerebral Palsy, Paediatric Orthopaedics,
          and Ergonomics.
        </p>
      </div>

      <div className="timeline-marquee">
        <div className="timeline-marquee-track">
          {loop.map((a, i) => (
            <div className="timeline-chip" key={a.year + a.title + i}>
              <span className="timeline-chip-year">{a.year}</span>
              <div className="timeline-chip-body">
                <strong>{a.title}</strong>
                <span>{a.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
