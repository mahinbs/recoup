import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal'
import chronicPain from '../../assets/new-images/Images-Home-Page-Conditions/chronic-pain-care.jpg'
import gutHealth from '../../assets/new-images/Images-Home-Page-Conditions/gut-health-digestive-care.jpg'
import hormonal from '../../assets/new-images/Images-Home-Page-Conditions/hormonal-health-wellness-1.jpg'
import metabolic from '../../assets/new-images/Images-Home-Page-Conditions/metabolic-health-weight-2.jpg'
import neuro from '../../assets/new-images/Images-Home-Page-Conditions/neurological-rehabilitation.jpg'
import cerebralPalsy from '../../assets/new-images/Images-Home-Page-Conditions/cerebral-palsy-1.jpg'

const panels = [
  {
    title: 'Chronic Pain Care',
    text: 'Root-cause treatment for persistent musculoskeletal and neuropathic pain.',
    href: '/conditions/chronic-pain',
    img: chronicPain,
  },
  {
    title: 'Gut Health & Digestive Care',
    text: 'Restore digestive balance with integrated gut-focused care pathways.',
    href: '/conditions/gastrointestinal-program',
    img: gutHealth,
  },
  {
    title: 'Neurological Rehabilitation',
    text: 'Specialized recovery programs for stroke and neurological conditions.',
    href: '/conditions/stroke-rehabilitation',
    img: neuro,
  },
  {
    title: 'Metabolic Health & Weight Management',
    text: 'Sustainable metabolic optimization and physician-led weight care.',
    href: '/conditions/weight-management',
    img: metabolic,
  },
  {
    title: 'Hormonal Health & Wellness',
    text: 'Personalized hormonal rebalancing for energy, mood, and vitality.',
    href: '/conditions/hormonal-rebalance-program',
    img: hormonal,
  },
  {
    title: 'Cerebral Palsy Rehabilitation for Children',
    text: 'Comprehensive rehabilitation supporting children with cerebral palsy.',
    href: '/conditions',
    img: cerebralPalsy,
  },
]

const Treatments = () => {
  const ref = useReveal()
  const [active, setActive] = useState(2)
  const pausedRef = useRef(false)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (reducedRef.current) return
    const t = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % panels.length)
    }, 3800)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={ref} className="reveal treat-section">
      <div className="hp-wrap">
        <div className="treat-header">
          <h2 className="section-title">
            Our Areas of <em>Care</em>
          </h2>
          <Link className="treat-explore" to="/conditions">
            Explore Services <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div
          className="treat-row"
          onMouseLeave={() => { pausedRef.current = false }}
        >
          {panels.map((p, i) => (
            <div
              key={p.title}
              className={`treat-panel ${i === active ? 'active' : ''}`}
              style={{ backgroundImage: `url(${p.img})` }}
              onMouseEnter={() => { pausedRef.current = true; setActive(i) }}
              onFocus={() => { pausedRef.current = true; setActive(i) }}
              tabIndex={0}
              role="button"
              aria-expanded={i === active}
              aria-label={p.title}
            >
              <div className="treat-scrim" aria-hidden="true" />
              <span className="treat-vlabel" aria-hidden={i === active}>{p.title}</span>
              <div className="treat-content" aria-hidden={i !== active}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Link to={p.href} className="treat-learn">
                  LEARN MORE <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments
