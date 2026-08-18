import React from 'react'
import useReveal from '../../hooks/useReveal'
import discoverIcon from '../../assets/new-images/Your-roadmap-to-Lasting-Health-Icons/1. Discover_Conversation_Bubble.png'
import assessIcon from '../../assets/new-images/Your-roadmap-to-Lasting-Health-Icons/2.Assess_Health_Report.png'
import diagnoseIcon from '../../assets/new-images/Your-roadmap-to-Lasting-Health-Icons/3.Diagnose_Target(RootCause).png'
import personalizeIcon from '../../assets/new-images/Your-roadmap-to-Lasting-Health-Icons/4.Personalize_Sliders.png'
import transformIcon from '../../assets/new-images/Your-roadmap-to-Lasting-Health-Icons/5.Transform_Growth _ Leaf.png'
import seeWholeIcon from '../../assets/new-images/THE-RECOUP-ADVANTAGE-icons/01_See_the_Whole.png'
import drivingIcon from '../../assets/new-images/THE-RECOUP-ADVANTAGE-icons/02Find_What’s_Driving_It.png'
import expertiseIcon from '../../assets/new-images/THE-RECOUP-ADVANTAGE-icons/03_Bring_Expertise_Together.png'
import measureIcon from '../../assets/new-images/THE-RECOUP-ADVANTAGE-icons/04_Measure_What_Changes.png'

const steps = [
  { n: '01', icon: discoverIcon, title: 'Discover', statement: 'We Listen. You Share.', text: 'Your story begins with a deep conversation about symptoms, history, and goals.' },
  { n: '02', icon: assessIcon, title: 'Assess', statement: 'We Measure. We Analyze.', text: 'Precision diagnostics map how your body systems interact and where stress accumulates.' },
  { n: '03', icon: diagnoseIcon, title: 'Diagnose', statement: 'We Find the Root Cause.', text: 'We uncover the underlying drivers of pain and dysfunction—not just surface symptoms.' },
  { n: '04', icon: personalizeIcon, title: 'Personalize', statement: 'Your Care. Your Plan.', text: 'An interdisciplinary team builds a care plan tailored to your biology and lifestyle.' },
  { n: '05', icon: transformIcon, title: 'Transform', statement: 'Heal Better. Live Better.', text: 'Ongoing support helps you rebuild resilience and sustain lasting health.' },
]

const advantages = [
  { n: '01', icon: seeWholeIcon, title: 'See the Whole', text: 'Understand the complete picture, not isolated symptoms or conditions.' },
  { n: '02', icon: drivingIcon, title: "Find What's Driving It", text: 'Look beyond the obvious to uncover the factors shaping your health.' },
  { n: '03', icon: expertiseIcon, title: 'Bring Expertise Together', text: 'One coordinated team. One personalized approach. Your health at the center.' },
  { n: '04', icon: measureIcon, title: 'Measure What Changes', text: 'Track meaningful outcomes and continuously refine your path to recovery.' },
]

const PatientJourney = () => {
  const journeyRef = useReveal()
  const advRef = useReveal()

  return (
    <>
      <section ref={journeyRef} className="reveal journey-section">
        <div className="hp-wrap">
          <span className="kicker">RECOUP's 5-Step Healing Journey</span>
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
          <span className="kicker">The RECOUP Advantage</span>
          <h2 className="section-title">Where Every Part of Your Health Comes Together.</h2>
          <div className="advantage-grid">
            {advantages.map((a, i) => (
              <div className="advantage-card" key={a.title} style={{ '--i': i }}>
                <div className="advantage-icon">
                  <img src={a.icon} alt="" />
                </div>
                <strong>{a.n} {a.title}</strong>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div className="advantage-banner">
            <span>Whole-Person</span>
            <span aria-hidden="true">·</span>
            <span>Root-Cause</span>
            <span aria-hidden="true">·</span>
            <span>Integrated</span>
            <span aria-hidden="true">·</span>
            <span>Measurable</span>
          </div>
          <p className="advantage-banner-sub">
            One person. One complete picture. One coordinated path to better health.
          </p>
        </div>
      </section>
    </>
  )
}

export default PatientJourney
