import React from 'react'
import useReveal from '../../hooks/useReveal'
import kalamPhoto from '../../assets/preview/home-kalamphoto.jpg'
import nationalAwardPhoto from '../../assets/preview/home-nationalawardphoto.jpg'
import award2 from '../../assets/new-images/Images_Dr.DeepakSharan/award-ceremony-2.png'
import cpSurgery from '../../assets/new-images/Images_Dr.DeepakSharan/cp-surgery.jpg'

const achievements = [
  {
    emoji: '🎖️',
    title: 'Presidential Award — 2006',
    text: 'Conferred by Dr. APJ Abdul Kalam, President of India, for outstanding work in Cerebral Palsy.',
    img: kalamPhoto,
    position: 'center 30%',
  },
  {
    emoji: '🏅',
    title: 'Henri Bensahel Award',
    text: "The world's top research award in Paediatric Orthopaedics.",
    img: award2,
    position: 'center 15%',
  },
  {
    emoji: '✅',
    title: 'Developer of SEMLARASS',
    text: 'A pioneering surgical procedure for cerebral palsy treatment.',
    img: cpSurgery,
    position: 'center center',
  },
  {
    emoji: '🎗️',
    title: 'National Disability Award — 2008',
    text: 'Recognized by the Government of India for empowering persons with disabilities.',
    img: nationalAwardPhoto,
    position: 'center 25%',
  },
]

const statStrip = [
  { value: '35+', label: 'Years of Excellence · Clinical & Research Experience' },
  { value: '"Cult Figure"', label: 'Wall Street Journal (World of RSI)' },
  { value: '1 Million+', label: 'Patients Treated Across 45+ Countries' },
]

const DoctorProfile = () => {
  const ref = useReveal()
  return (
    <section className="founder reveal" ref={ref}>
      <div className="hp-wrap founder-grid">
        <div className="founder-copy">
          <span className="kicker">Founder &amp; Medical Director</span>
          <h2 className="section-title">Meet Dr. Deepak Sharan</h2>
          <div className="founder-lead">
            <p>
              Dr. Deepak Sharan is one of the world&apos;s leading experts in Orthopedic Surgery,
              Rehabilitation, Functional Medicine, Ergonomics, and Occupational Health, with 35+
              years of clinical and research experience dedicated to advancing the science of pain
              relief, rehabilitation, and human performance.
            </p>
            <p>
              As the Founder &amp; CEO of RECOUP Health, he has pioneered a root-cause approach to
              treating chronic pain and musculoskeletal disorders. He also serves as President of
              the International Myopain Society, Chairperson of the Scientific Committee on
              Musculoskeletal Disorders, International Commission on Occupational Health, and
              Founder Director of EPM International Ergonomics School, Italy.
            </p>
            <p>
              His contributions have shaped healthcare globally through 600+ scientific
              publications, the treatment of 1 Million+ patients across 45+ countries, pioneering
              innovations in rehabilitation, and internationally recognized leadership in
              ergonomics, musculoskeletal health, and functional medicine.
            </p>
          </div>
          <div className="founder-stat-strip">
            {statStrip.map((s) => (
              <div className="stat-strip-item" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="founder-gallery">
          <div className="founder-float-badge">
            <span aria-hidden="true">🏅</span> Top Research
            <small>Winner of the SICOT Research Academy Grant</small>
          </div>
          <div className="founder-photo-grid">
            {achievements.map((a) => (
              <div className="achv-card" key={a.title}>
                <div
                  className={`achv-bg ${a.tint ? 'achv-bg-tint' : ''}`}
                  style={{ backgroundImage: `url(${a.img})`, backgroundPosition: a.position }}
                />
                <div className="achv-scrim" aria-hidden="true" />
                <div className="achv-content">
                  <span className="achv-emoji" aria-hidden="true">{a.emoji}</span>
                  <strong>{a.title}</strong>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorProfile
