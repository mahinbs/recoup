import React from 'react'
import useReveal from '../../hooks/useReveal'

const appointments = [
  { org: 'ICOH: International Commission on Occupational Health', role: 'President, Director & Board Member', logo: 'https://deepaksharan.com/wp-content/uploads/icoh-2.png', href: 'https://www.icohweb.org/site/homepage.asp' },
  { org: 'International Myopain Society', role: 'President, Director & Board Member', logo: 'https://deepaksharan.com/wp-content/uploads/International-Myopain-Society-.png', href: 'https://myopain.org/' },
  { org: 'EPM International Ergonomics School, Milan', role: 'Founder Director', logo: 'https://deepaksharan.com/wp-content/uploads/EPM-International-Ergonomics-School.png', href: 'https://epmresearch.org/' },
  { org: 'Indian Myopain Society', role: 'Founder President', logo: 'https://deepaksharan.com/wp-content/uploads/Indian-Myopain-Society.png', href: 'https://www.ergonomicsindia.in' },
  { org: 'Myopain Seminars, USA', role: 'Senior Faculty & Director (India)', logo: 'https://deepaksharan.com/wp-content/uploads/Myopain-Seminars-USA.png', href: 'https://myopainseminars.com/' },
  { org: 'RECOUP Academy', role: 'Director', logo: 'https://www.recoup.health/logo.png', href: 'http://recoup.academy/' },
  { org: 'RECOUP Health Inc.', role: 'Founder & CEO', logo: 'https://www.recoup.health/logo.png', href: 'https://www.recoup.health/' },
  { org: 'Ministry of Social Justice & Empowerment', role: 'Member, Expert Committee on Cerebral Palsy', logo: 'https://deepaksharan.com/wp-content/uploads/ministry-of-social-justice-and-empowerment.png', href: null },
  { org: 'Indian Ergonomics School', role: 'Founder & President', logo: 'https://deepaksharan.com/wp-content/uploads/indian_ergonomics_school-1.png', href: null },
  { org: 'Government of Karnataka', role: 'Chief Orthopaedic & Rehab Consultant to the Commissioner for PwD', logo: 'https://deepaksharan.com/wp-content/uploads/govt-of-karnataka.png', href: null },
]

function AppointmentCard({ a }) {
  const inner = (
    <>
      <div className="appt-logo-wrap">
        <img src={a.logo} alt={a.org} loading="lazy" />
      </div>
      <strong>{a.org}</strong>
      <span>{a.role}</span>
    </>
  )
  return a.href ? (
    <a className="appt-card" href={a.href} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <div className="appt-card appt-card-static">{inner}</div>
  )
}

const Appointments = () => {
  const ref = useReveal()
  const loop = [...appointments, ...appointments]
  return (
    <section ref={ref} className="reveal appt-section">
      <div className="hp-wrap">
        <span className="kicker">Present Appointments</span>
        <h2 className="section-title">Trusted by Global Institutions</h2>
        <p className="section-sub">
          Dr. Sharan currently holds active leadership roles across international
          medical societies, research bodies, and government advisory committees.
        </p>
      </div>

      <div className="appt-marquee">
        <div className="appt-track">
          {loop.map((a, i) => (
            <AppointmentCard a={a} key={a.org + i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Appointments
