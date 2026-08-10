import React from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import drPhoto from '../../assets/preview/home-drphoto.jpg'

const achievements = [
  { text: '2008 Presidential Award', sub: 'Govt. of India', pos: 'b-tl' },
  { text: 'Henri Bensahel Award', sub: 'Paediatric Orthopaedics', pos: 'b-tr' },
  { text: '500+ Publications', sub: 'Ergonomics & Pain Science', pos: 'b-ml' },
  { text: '1 Million+ Patients', sub: 'Treated Worldwide', pos: 'b-mr' },
  { text: '"Cult Figure"', sub: 'Wall Street Journal', pos: 'b-bl' },
  { text: '35+ Years of Research', sub: '45+ Countries', pos: 'b-br' },
]

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hp-wrap hero-grid">
        <div className="hero-content">
          <span className="hero-badge">Founded by Dr. Deepak Sharan</span>
          <h1>
            Revolutionary <em>Chronic Pain</em> Rehabilitation &amp; Lifestyle
            Disease Care
          </h1>
          <p className="hero-sub">
            Led by Dr. Deepak Sharan, internationally acclaimed expert with{' '}
            <strong>35+ years of research</strong> and{' '}
            <strong>27 years of clinical experience</strong>. We specialize in{' '}
            <strong>comprehensive rehabilitation</strong> for{' '}
            <strong>chronic pain</strong> and <strong>lifestyle diseases</strong>,
            focusing on treating the <strong>root cause</strong> rather than just
            the symptoms through our proprietary 4R Approach: Recognize, Remedy,
            Restore, Regenerate.
          </p>
          <p className="hero-support">
            Our proprietary <strong>4R Healing Framework</strong> includes{' '}
            <strong>Recognize, Remedy, Restore, and Regenerate</strong>. This
            comprehensive approach goes beyond symptom management to support lasting
            recovery and lifelong health.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/contact?from=home&section=hero">
              Book Consultation
            </Link>
            <a className="btn btn-outline" href="tel:+919845155449">
              <Phone className="inline-block w-4 h-4 mr-1 align-text-bottom" />
              Call Us Now
            </a>
          </div>
        </div>

        <div className="hero-figure">
          <img src={drPhoto} alt="Dr. Deepak Sharan in white coat" />
          {achievements.map((a) => (
            <div key={a.text} className={`float-badge ${a.pos}`}>
              <strong>{a.text}</strong>
              <span>{a.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
