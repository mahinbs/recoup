import React from 'react'
import useReveal from '../../hooks/useReveal'
import discoverIcon from '../../assets/new-images/Timeline-Icons/discover-conversation-bubble.png'
import assessIcon from '../../assets/new-images/Timeline-Icons/assess-health-report.png'
import diagnoseIcon from '../../assets/new-images/Timeline-Icons/diagnose-target-root-cause.png'
import personalizeIcon from '../../assets/new-images/Timeline-Icons/personalize-sliders.png'
import transformIcon from '../../assets/new-images/Timeline-Icons/transform-growth-leaf.png'

const Icon = {
  listen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 1116 0c0 3-1 5-1 7h-3v-5" />
      <path d="M9 11.5c.5-1 1.5-1 2 0s1.5 1 2 0" />
    </svg>
  ),
  measure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17V7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
      <path d="M7 6v3M11 6v2M15 6v3M19 6v2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  personalize: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M16 6.5c1 0 2 .9 2 2.2s-1 2.2-2 2.2M18.5 20c0-2.2-1.6-3.8-3.5-4.3" />
    </svg>
  ),
  transform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V6M6 12l6-6 6 6" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V6l7-3 7 3v15" /><path d="M9 21v-5h6v5M9 10h.01M9 14h.01M15 10h.01M15 14h.01" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v6a4 4 0 008 0V4" /><circle cx="18" cy="16" r="2.4" /><path d="M14 15c0 2.5 1.8 4.5 4 4.5" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="7" r="2.2" /><circle cx="18" cy="7" r="2.2" /><circle cx="12" cy="18" r="2.2" />
      <path d="M7.8 8.6L10.5 16M16.2 8.6L13.5 16M8.2 7h7.6" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.8-4.8" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l4-3 4 3 2-2 4 3 4-3" /><path d="M3 11v3l4 3 4-3 2 2 4-3 4 3v-5" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" />
    </svg>
  ),
}

const steps = [
  { n: '01', icon: discoverIcon, title: 'Discover', statement: 'We Listen. You Share.', text: 'Your story begins with a deep conversation about symptoms, history, and goals.' },
  { n: '02', icon: assessIcon, title: 'Assess', statement: 'We Measure. We Analyze.', text: 'Precision diagnostics map how your body systems interact and where stress accumulates.' },
  { n: '03', icon: diagnoseIcon, title: 'Diagnose', statement: 'We Find the Root Cause.', text: 'We uncover the underlying drivers of pain and dysfunction—not just surface symptoms.' },
  { n: '04', icon: personalizeIcon, title: 'Personalize', statement: 'Your Care. Your Plan.', text: 'An interdisciplinary team builds a care plan tailored to your biology and lifestyle.' },
  { n: '05', icon: transformIcon, title: 'Transform', statement: 'Heal Better. Live Better.', text: 'Ongoing support helps you rebuild resilience and sustain lasting health.' },
]

const advantages = [
  { icon: 'building', title: '10+ Clinical Stations', text: 'Everything you need for comprehensive care, all under one roof.' },
  { icon: 'calendar', title: '12-Week Recovery Program', text: 'A structured program designed to create lasting health improvements.' },
  { icon: 'stethoscope', title: 'Physician-Led Care', text: 'Every treatment plan is guided by experienced physicians.' },
  { icon: 'team', title: 'Integrated Care Team', text: 'Doctors, therapists, nutritionists, and health coaches work together for you.' },
]

const commitments = [
  { icon: 'listen', title: 'We Listen', text: 'Your story matters.' },
  { icon: 'search', title: 'We Investigate', text: 'We look beyond symptoms to find the root cause.' },
  { icon: 'handshake', title: 'We Collaborate', text: 'Our experts work together to deliver coordinated care.' },
  { icon: 'trending', title: 'We Measure', text: 'We track your progress and continuously refine your care.' },
]

const PatientJourney = () => {
  const journeyRef = useReveal()
  const advRef = useReveal()
  const commitRef = useReveal()

  return (
    <>
      <section ref={journeyRef} className="reveal journey-section">
        <div className="hp-wrap">
          <span className="kicker">Recoup's 5-Step Healing Journey</span>
          <h2 className="section-title">Your Roadmap to Lasting Health</h2>
          <p className="section-sub">
            A physician-led, step-by-step process that takes you from discovery to lasting transformation.
          </p>

          <div className="journey-track">
            <div className="journey-line" aria-hidden="true" />
            {steps.map((s, i) => (
              <div className="journey-step" key={s.n} style={{ '--i': i }}>
                <div className="journey-icon-wrap">
                  <img src={s.icon} alt="" />
                  <span className="journey-num">{s.n}</span>
                </div>
                <h3>{s.title}</h3>
                <strong>{s.statement}</strong>
                <p>{s.text}</p>
                {i < steps.length - 1 && <span className="journey-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={advRef} className="reveal advantage-section">
        <div className="hp-wrap">
          <span className="kicker">The Recoup Advantage</span>
          <h2 className="section-title">Built for Real, Measurable Recovery</h2>
          <div className="advantage-grid">
            {advantages.map((a, i) => (
              <div className="advantage-card" key={a.title} style={{ '--i': i }}>
                <div className="advantage-icon">{Icon[a.icon]}</div>
                <strong>{a.title}</strong>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div className="advantage-banner">
            <span>Evidence-Based</span>
            <span aria-hidden="true">·</span>
            <span>Personalized</span>
            <span aria-hidden="true">·</span>
            <span>Measurable</span>
          </div>
          <p className="advantage-banner-sub">
            Every decision is backed by science, tailored to your needs, and focused on real outcomes.
          </p>
        </div>
      </section>

      <section ref={commitRef} className="reveal commitment-section">
        <div className="hp-wrap">
          <span className="kicker">Our Commitment to You</span>
          <div className="commitment-row">
            {commitments.map((c, i) => (
              <div className="commitment-item" key={c.title} style={{ '--i': i }}>
                <div className="commitment-icon">{Icon[c.icon]}</div>
                <strong>{c.title}</strong>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className="commitment-closing">
            This is more than treatment. It's your partnership in lifelong health.
          </p>
        </div>
      </section>
    </>
  )
}

export default PatientJourney
