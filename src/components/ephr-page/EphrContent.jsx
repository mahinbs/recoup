import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import moleculeSrc from '../../assets/preview/ephr-molecule_src.png'
import ephrBodySrc from '../../assets/preview/ephr-ephr_body_src.jpg'
import doctorVideo from '../../assets/new-images/doctor-video.mp4'
import modelVideo from '../../assets/new-images/3D-Model-video.mp4'
import journeyStep1 from '../../assets/new-images/Illustrations-EPHR-for-process-flow/Step 1_ Appointment Confirmed Healthcare Booking Illustration.png'
import journeyStep2 from '../../assets/new-images/Illustrations-EPHR-for-process-flow/Step 2_ Complete Your Health Assessment.png'
import journeyStep3 from '../../assets/new-images/Illustrations-EPHR-for-process-flow/Step 3_ Clinical Analysis by Our Experts.png'
import journeyStep4 from '../../assets/new-images/Illustrations-EPHR-for-process-flow/Step 4_ Receive Your Entire Person Health Report.png'
import journeyStep5 from '../../assets/new-images/Illustrations-EPHR-for-process-flow/Step 5_ Review Your Report with Your Physician.png'
import biomarkerSrc from '../../assets/preview/ephr-biomarker_src.jpg'
import metabolicIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Metabolic_Health_Icon.png'
import heartIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Heart-Health2.png'
import hormonalIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Hormonal-Health-Icon2.png'
import gutIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Gut-Health-Icon.png'
import nutritionIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Nutritional_Status.png'
import inflammationIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Chronic_Inflammation.png'
import stressIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Stress&Recovery.png'
import bodyCompIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Body_Composition2.png'
import bioAgeIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Biological_Age1.png'
import lifestyleIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Lifestyle_Risk_Factors2.png'
import functionalIcon from '../../assets/new-images/What-Your-EPHR-Reveals/Functional-Health Assessment-2.png'

const MOLECULE_SRC = moleculeSrc
const EPHR_BODY_SRC = ephrBodySrc
const BIOMARKER_SRC = biomarkerSrc

function HudCorners() {
  return (
    <>
      <span className="ephr-hud-corner tl" />
      <span className="ephr-hud-corner tr" />
      <span className="ephr-hud-corner bl" />
      <span className="ephr-hud-corner br" />
    </>
  )
}

function DnaGlyph() {
  return (
    <svg viewBox="0 0 60 90" className="ephr-hud-dna-svg">
      <defs>
        <linearGradient id="heroDnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
      </defs>
      {Array.from({ length: 9 }).map((_, i) => {
        const y = i * 10 + 5
        const off = Math.sin(i * 0.9) * 16
        return (
          <g key={i}>
            <line
              x1={30 - off}
              y1={y}
              x2={30 + off}
              y2={y}
              stroke="url(#heroDnaGrad)"
              strokeWidth="1.4"
              opacity="0.55"
            />
            <circle cx={30 - off} cy={y} r="2.4" fill="#d8b4fe" />
            <circle cx={30 + off} cy={y} r="2.4" fill="#5eead4" />
          </g>
        )
      })}
    </svg>
  )
}

function ChartGlyph() {
  return (
    <svg viewBox="0 0 100 56" className="ephr-hud-chart-svg">
      <polyline
        points="2,40 18,30 34,36 50,14 66,22 82,8 98,18"
        fill="none"
        stroke="#5eead4"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [2, 40],
        [18, 30],
        [34, 36],
        [50, 14],
        [66, 22],
        [82, 8],
        [98, 18],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#fff" />
      ))}
    </svg>
  )
}

function AnatomyGlyph() {
  return (
    <svg viewBox="0 0 60 100" className="ephr-hud-anatomy-svg">
      <path
        d="M30 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16z M18 30h24l4 30-10 4-2 26h-8l-2-26-10-4z"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.6"
        opacity="0.75"
      />
      <circle className="ephr-anatomy-pulse" cx="30" cy="22" r="3" fill="#5eead4" />
      <circle className="ephr-anatomy-pulse d2" cx="30" cy="44" r="3" fill="#facc15" />
      <circle className="ephr-anatomy-pulse d3" cx="30" cy="64" r="3" fill="#d8b4fe" />
    </svg>
  )
}

const PANELS = [
  { key: 'anatomy', label: 'Body Scan', glyph: <AnatomyGlyph />, cls: 'p-anatomy' },
  { key: 'dna', label: 'Genomic Data', glyph: <DnaGlyph />, cls: 'p-dna' },
  { key: 'chart', label: 'Biomarkers', glyph: <ChartGlyph />, cls: 'p-chart' },
  { key: 'molecule', label: 'Cellular Health', glyph: <MoleculeGlyph />, cls: 'p-molecule' },
]

function MoleculeGlyph() {
  return (
    <svg viewBox="0 0 60 60" className="ephr-hud-molecule-svg">
      <circle cx="30" cy="14" r="4" fill="#5eead4" />
      <circle cx="14" cy="42" r="4" fill="#d8b4fe" />
      <circle cx="46" cy="42" r="4" fill="#facc15" />
      <circle cx="30" cy="30" r="2.6" fill="#fff" opacity="0.8" />
      <path
        d="M30 14L30 30M14 42L30 30M46 42L30 30"
        stroke="#a78bfa"
        strokeWidth="1.4"
        opacity="0.6"
      />
    </svg>
  )
}

function HeroScene() {
  const rootRef = useRef(null)

  /* subtle scroll parallax — panels/particles drift at different rates */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1)
        el.style.setProperty('--ephr-parallax', progress.toFixed(3))
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="ephr-heroscene" ref={rootRef}>
      <div className="ephr-heroscene-bg" aria-hidden="true" />
      <div className="ephr-heroscene-floor" aria-hidden="true" />
      <div className="ephr-heroscene-vignette" aria-hidden="true" />

      {/* Ambient burst on load */}
      <div className="ephr-heroscene-burst" aria-hidden="true" />

      {/* Connecting light lines from doctor to each panel */}
      <svg className="ephr-heroscene-lines" viewBox="0 0 640 520" aria-hidden="true">
        <defs>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path className="ephr-hero-link l1" d="M300 210 C 220 170, 160 150, 100 130" />
        <path className="ephr-hero-link l2" d="M300 210 C 380 160, 460 140, 540 110" />
        <path className="ephr-hero-link l3" d="M300 230 C 340 300, 400 340, 480 360" />
        <path className="ephr-hero-link l4" d="M290 230 C 230 300, 170 330, 110 350" />
      </svg>

      {/* Doctor silhouette, gesturing up toward the panels */}
      <div className="ephr-hero-doctor" aria-hidden="true">
        <span className="ephr-hero-doctor-glow" />
        <span className="ephr-hero-doctor-head" />
        <span className="ephr-hero-doctor-body" />
        <span className="ephr-hero-doctor-arm" />
        <span className="ephr-hero-doctor-hand" />
      </div>

      {/* Floating holographic panels */}
      {PANELS.map(({ key, label, glyph, cls }, i) => (
        <div
          key={key}
          className={`ephr-hud-panel ${cls}`}
          style={{ '--ephr-delay': `${i * 0.15}s` }}
        >
          <HudCorners />
          <div className="ephr-hud-panel-glyph">{glyph}</div>
          <div className="ephr-hud-panel-label">{label}</div>
          <div className="ephr-hud-scanline" />
        </div>
      ))}

      {/* Drifting particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className={`ephr-hero-particle p${i % 5}`} aria-hidden="true" />
      ))}
    </div>
  )
}



/* ------------------------------------------------------------------ */
/*  Sample EPHR Report — a generic-data mockup of the real report      */
/*  layout (health score gauge, health tree, body-function card,       */
/*  biomarker table), presented as a page-flip book.                   */
/*  No real patient data — placeholder name/numbers only.              */
/* ------------------------------------------------------------------ */

const PATIENT = { name: 'Alex Kumar', age: 42, gender: 'Female' }

function ReportHeader({ eyebrow = 'EPH REPORT' }) {
  return (
    <div className="sr-header">
      <span className="sr-header-eyebrow">{eyebrow}</span>
      <span className="sr-header-meta">
        {PATIENT.name} &middot; {PATIENT.age}Y &middot; {PATIENT.gender}
      </span>
    </div>
  )
}

function TreeGlyph({ size = 120 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="sr-tree-svg">
      <defs>
        <linearGradient id="srLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <path
        d="M50 40 C 46 30, 30 26, 28 40 C 20 40, 18 54, 28 56 C 24 66, 36 72, 44 64 L50 40"
        fill="url(#srLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M50 40 C 54 30, 70 26, 72 40 C 80 40, 82 54, 72 56 C 76 66, 64 72, 56 64 L50 40"
        fill="url(#srLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M50 40 L50 62"
        stroke="#7c4a24"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 62 C 44 70, 40 74, 30 76 M50 62 C 56 70, 60 74, 70 76 M50 62 L50 80"
        stroke="#7c4a24"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ScoreGauge({ value = 78, size = 96 }) {
  const r = 40
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="var(--green-600)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="var(--green-900)"
      >
        {value}
      </text>
    </svg>
  )
}

/* ---- Page 1: Cover ---- */
function PageCover() {
  return (
    <div className="sr-page sr-page-cover">
      <div className="sr-cover-topbar">
        <span className="sr-cover-title">Entire Person Health Report</span>
        <span className="sr-cover-brand">RECOUP Health</span>
      </div>
      <div className="sr-cover-body">
        <p className="sr-cover-name">{PATIENT.name}</p>
        <p className="sr-cover-meta">
          {PATIENT.age}Y &middot; {PATIENT.gender}
        </p>
        <div className="sr-cover-blurb">
          <p className="sr-cover-blurb-title">Entire Person Health Report</p>
          <p>
            <strong>Your health journey begins here.</strong> A personalized
            health plan based on 200+ data points &mdash; scores for body
            functions and lifestyle factors, plus recommendations tailored to
            you.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ---- Page 2: Health Score ---- */
function PageScore() {
  return (
    <div className="sr-page">
      <ReportHeader />
      <h3 className="sr-page-title">Your Health Score</h3>
      <div className="sr-score-row">
        <ScoreGauge value={78} />
        <div className="sr-score-callout">
          Your health score is good, with a few areas to keep an eye on.
        </div>
      </div>
      <div className="sr-score-bar">
        <div className="sr-score-bar-track" />
        <span className="sr-score-bar-marker" style={{ left: '78%' }}>
          78
        </span>
      </div>
      <div className="sr-score-labels">
        <span>0 &middot; High Risk</span>
        <span>50 &middot; Moderate</span>
        <span>80 &middot; Low Risk</span>
        <span>100</span>
      </div>
      <p className="sr-page-note">
        Based on 200+ data points across lab tests and health questionnaire.
      </p>
    </div>
  )
}

/* ---- Page 3: Health Risk Tree ---- */
function PageTree() {
  return (
    <div className="sr-page sr-page-center">
      <ReportHeader />
      <h3 className="sr-page-title sr-center">Your Health Risk Tree</h3>
      <div className="sr-tree-hero">
        <TreeGlyph size={150} />
      </div>
      <p className="sr-page-note sr-center">
        <strong>Branches</strong> are your body functions.{' '}
        <strong>Roots</strong> are your lifestyle factors. Strong roots grow
        healthy branches &mdash; this report shows how each one connects.
      </p>
    </div>
  )
}

/* ---- Page 4: Body Function card ---- */
function PageBodyFunction() {
  return (
    <div className="sr-page">
      <ReportHeader />
      <h3 className="sr-page-title">Digestive Health</h3>
      <div className="sr-bf-grid">
        <div className="sr-bf-visual">
          <TreeGlyph size={60} />
          <div className="sr-bf-risk">
            <ScoreGauge value={82} size={64} />
            <span className="sr-bf-risk-label">Low Risk</span>
          </div>
        </div>
        <div className="sr-bf-insights">
          <div className="sr-bf-block sr-bf-good">
            <span>DOING GREAT</span>
            <ul>
              <li>Healthy, regular digestion</li>
              <li>No post-meal discomfort</li>
            </ul>
          </div>
          <div className="sr-bf-block sr-bf-warn">
            <span>NEEDS IMPROVEMENT</span>
            <ul>
              <li>Occasional bloating</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---- Page 5: Biomarker table ---- */
function PageBiomarkers() {
  const rows = [
    ['Hemoglobin', '14.2 g/dL', '13.5 - 17.5', false],
    ['Total Leucocyte Count', '7,200 /µL', '4,000 - 11,000', false],
    ['Fasting Glucose', '108 mg/dL', '70 - 99', true],
    ['Vitamin D', '22 ng/mL', '30 - 100', true],
    ['HDL Cholesterol', '54 mg/dL', '> 40', false],
  ]
  return (
    <div className="sr-page">
      <ReportHeader />
      <h3 className="sr-page-title">Exploring Biomarkers</h3>
      <p className="sr-page-note">Sample rows from a 100+ biomarker panel.</p>
      <table className="sr-table">
        <thead>
          <tr>
            <th>Biomarker</th>
            <th>Value</th>
            <th>Normal Range</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, val, range, high]) => (
            <tr key={name}>
              <td>{name}</td>
              <td className={high ? 'sr-flag-high' : ''}>
                {val} {high && '↑'}
              </td>
              <td>{range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const PAGES = [PageCover, PageScore, PageTree, PageBodyFunction, PageBiomarkers]

function SampleReportBook() {
  const [page, setPage] = useState(0)
  const [flip, setFlip] = useState(null) // { dir: 'next'|'prev', from, to }
  const timeoutRef = useRef(null)

  const goTo = (target) => {
    if (target === page || target < 0 || target >= PAGES.length || flip) return
    const dir = target > page ? 'next' : 'prev'
    setFlip({ dir, from: page, to: target })
    timeoutRef.current = setTimeout(() => {
      setPage(target)
      setFlip(null)
    }, 500)
  }

  const FromPage = PAGES[flip ? flip.from : page]
  const ToPage = flip ? PAGES[flip.to] : null

  return (
    <div className="sr-book-wrap">
      <div className="sr-book" style={{ perspective: '1800px' }}>
        {/* Base layer: the page underneath (destination page while flipping, else current) */}
        <div className="sr-leaf sr-leaf-base">
          {flip ? <ToPage /> : <FromPage />}
        </div>

        {/* Flipping leaf, only present during a transition */}
        {flip && (
          <div className={`sr-leaf sr-leaf-flip sr-flip-${flip.dir}`}>
            <div className="sr-leaf-face sr-leaf-front">
              <FromPage />
            </div>
            <div className="sr-leaf-face sr-leaf-back">
              <div className="sr-leaf-back-brand">RECOUP Health</div>
            </div>
          </div>
        )}

        <div className="sr-book-shadow" />
      </div>

      <div className="sr-book-controls">
        <button
          className="sr-book-nav"
          onClick={() => goTo(page - 1)}
          disabled={page === 0 || !!flip}
          aria-label="Previous page"
        >
          &#8249;
        </button>
        <div className="sr-book-dots">
          {PAGES.map((_, i) => (
            <button
              key={i}
              className={`sr-book-dot ${i === page ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="sr-book-nav"
          onClick={() => goTo(page + 1)}
          disabled={page === PAGES.length - 1 || !!flip}
          aria-label="Next page"
        >
          &#8250;
        </button>
      </div>
      <p className="sr-book-caption">
        Illustrative sample with placeholder data &mdash; your actual EPHR is
        fully personalized.
      </p>
    </div>
  )
}



/* Minimal line icons in the site's hand-drawn style */
const Icon = {
  activity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-6.5-4.2-8.5-8.4C2.2 8.6 3.6 5.5 6.7 5c2-.3 3.7.9 5.3 2.7C13.6 5.9 15.3 4.7 17.3 5c3.1.5 4.5 3.6 3.2 6.6C18.5 15.8 12 20 12 20z" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3" />
      <path d="M8.5 3h7M8 15h8" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c0-9 5-15 16-16-1 11-7 16-16 16z" />
      <path d="M4 20C8 14 12 10 17 7" />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7c-1.5-1.5-4-1.8-5.8-.3C4 8.5 3.6 12 5.3 15.4 6.7 18.2 8.8 20.5 10.5 20c.6-.2 1-.5 1.5-.5s.9.3 1.5.5c1.7.5 3.8-1.8 5.2-4.6 1.7-3.4 1.3-6.9-.9-8.7C16 5.2 13.5 5.5 12 7z" />
      <path d="M12 7c0-2 1-3.5 3-4" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c4 0 6.5-2.6 6.5-6.2 0-3.2-2-5.4-3.8-7.3C13.3 6 12.4 4.3 12.4 3c-2.5 1.6-4 3.6-3.6 6.1-1-.4-1.8-1.2-2.2-2.3-1 1.4-1.6 3-1.6 4.8C5 18 8 21 12 21z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 8a8.5 8.5 0 0 0-4.7 1.4L9 12a4 4 0 0 1 6 0l1.7-2.6A8.5 8.5 0 0 0 12 8z" />
    </svg>
  ),
  hourglass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h10M7 21h10M8 3c0 4 3 5.5 4 6.5 1-1 4-2.5 4-6.5M8 21c0-4 3-5.5 4-6.5 1 1 4 2.5 4 6.5" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4L2.5 20h19L12 4z" />
      <path d="M12 10v4.5M12 17.2v.3" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a3 3 0 0 1 6 0M9 10h6M9 14h6M9 18h3.5" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
    </svg>
  ),
  microscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21h12M9 21a7 7 0 0 0 5.2-11.7M10 3l4 4-4.5 4.5-4-4L10 3zM7 14l2.5 2.5" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6z" />
      <path d="M13 3v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-3.5 4-5 7.5-5s6 1.5 7.5 5M16.5 11.5l1.5 1.5 3-3" />
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3v5a5 5 0 0 0 10 0V3M10 21a5 5 0 0 0 5-5v-3" />
      <circle cx="19" cy="10" r="2" />
      <path d="M19 12v1" />
    </svg>
  ),
  dna: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3c6 5 4 13 10 18M17 3c-6 5-4 13-10 18" />
      <path d="M8.5 7.5h7M8.5 12h7M8.5 16.5h7" />
    </svg>
  ),
  scan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  walk: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13" cy="5" r="2" />
      <path d="M8 21l2.5-6 3 2 2.5 4M10.5 15l-2-3 4-3 3 1" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="2.6" />
      <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S14 16 14.5 19" />
      <circle cx="16.5" cy="9" r="2.2" />
      <path d="M16.5 14.4c2.2 0 4.1 1.3 4.8 3.6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  minus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M6 12h12" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3.5v6c0 4.5-3.2 7.6-8 8.5-4.8-.9-8-4-8-8.5v-6L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
}

/* Floating biomarker glyphs — purple-to-blue gradient, same subtle treatment as the DNA strands */
let biomarkerGradId = 0
function BiomarkerIcon({ kind }) {
  const id = useState(() => `ephr-bm-grad-${++biomarkerGradId}`)[0]
  const grad = (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#862cd6" />
        <stop offset="100%" stopColor="#4f8ef7" />
      </linearGradient>
    </defs>
  )
  if (kind === 'tube') {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        {grad}
        <path d="M24 6h16" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
        <path d="M27 6v34a5 5 0 0 0 5 5v0a5 5 0 0 0 5-5V6" stroke={`url(#${id})`} strokeWidth="3" strokeLinejoin="round" />
        <path d="M27 30h10v10a5 5 0 0 1-10 0V30z" fill={`url(#${id})`} opacity="0.35" />
        <circle cx="30" cy="34" r="1.4" fill={`url(#${id})`} />
        <circle cx="34" cy="37" r="1" fill={`url(#${id})`} />
      </svg>
    )
  }
  if (kind === 'drop') {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        {grad}
        <path
          d="M32 8c8 12 16 21.5 16 30.5C48 49.5 40.8 57 32 57S16 49.5 16 38.5C16 29.5 24 20 32 8z"
          stroke={`url(#${id})`}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 40c6 8 18 8 24 0" stroke={`url(#${id})`} strokeWidth="2.4" strokeLinecap="round" opacity="0.6" />
      </svg>
    )
  }
  if (kind === 'pulse') {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        {grad}
        <circle cx="32" cy="32" r="26" stroke={`url(#${id})`} strokeWidth="2" opacity="0.5" />
        <path
          d="M10 32h9l4-10 6 20 5-14 4 4h16"
          stroke={`url(#${id})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  /* atom / molecule cluster */
  return (
    <svg viewBox="0 0 64 64" fill="none">
      {grad}
      <circle cx="32" cy="16" r="4.5" fill={`url(#${id})`} />
      <circle cx="16" cy="42" r="4.5" fill={`url(#${id})`} />
      <circle cx="48" cy="42" r="4.5" fill={`url(#${id})`} />
      <circle cx="32" cy="32" r="3" fill={`url(#${id})`} opacity="0.7" />
      <path d="M32 16L32 32M16 42L32 32M48 42L32 32" stroke={`url(#${id})`} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

/* Small illustration panels for the journey accordion. */
function JourneyIllustration({ src, title }) {
  return (
    <div className="ephr-journey-visual">
      <img src={src} alt={title} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Content (from "Entire Person Health Report (EPHR)" document)       */
/* ------------------------------------------------------------------ */


const COMPARISON = [
  ['Identifies existing disease', 'Identifies early health imbalances'],
  ['Reports lab values', 'Explains what your results mean'],
  ['Focuses on individual tests', 'Connects your complete health story'],
  ['Treats symptoms', 'Helps identify potential root causes'],
  ['Standard reports', 'Personalized health insights'],
  ['Limited recommendations', 'Clear action plan for better health'],
]

const HEALTH_AREAS = [
  { label: 'Metabolic Health', image: metabolicIcon, desc: 'Blood sugar, insulin response & energy metabolism' },
  { label: 'Heart Health', image: heartIcon, desc: 'Cardiovascular risk markers & lipid profile' },
  { label: 'Hormonal Health', image: hormonalIcon, desc: 'Thyroid, cortisol & key hormone balance' },
  { label: 'Gut Health', image: gutIcon, desc: 'Digestion, absorption & gut-related symptoms' },
  { label: 'Nutritional Status', image: nutritionIcon, desc: 'Vitamins, minerals & nutritional deficiencies' },
  { label: 'Chronic Inflammation', image: inflammationIcon, desc: 'Hidden inflammation markers linked to disease' },
  { label: 'Stress & Recovery', image: stressIcon, desc: 'Sleep quality, stress load & recovery capacity' },
  { label: 'Body Composition', image: bodyCompIcon, desc: 'Muscle, fat distribution & body metrics' },
  { label: 'Biological Age', image: bioAgeIcon, desc: 'How old your body really is vs. your birthdate' },
  { label: 'Lifestyle Risk Factors', image: lifestyleIcon, desc: 'Habits & exposures shaping long-term health' },
  { label: 'Functional Health Assessment', image: functionalIcon, desc: 'How well your body systems work together' },
  { label: 'Personalized Health Priorities', icon: 'target', desc: 'The areas that matter most for you right now' },
]

const WHATS_INCLUDED = [
  'Comprehensive Health Assessment',
  '100+ Biomarker Analysis*',
  'Functional Health Evaluation',
  'Root Cause Insights',
  'Biological Age Assessment',
  'Personalized Health Priorities',
  'Lifestyle & Nutrition Recommendations',
  'Physician Review',
  'One-on-One Consultation',
  'Personalized Health Action Plan',
]

const WHO_SHOULD = [
  'Feel tired despite normal health reports',
  'Want to prevent lifestyle diseases',
  'Have a family history of diabetes or heart disease',
  'Are you struggling with weight management',
  'Experience digestive concerns',
  'Have hormonal imbalances',
  'Frequently feel stressed or exhausted',
  'Want to optimize your health',
  'Are over 30 and looking for preventive screening',
  'Simply want a complete picture of your health',
]

const JOURNEY = [
  {
    title: 'Book Your EPHR Assessment',
    text: 'Schedule your assessment online or connect with our healthcare team to choose a convenient appointment.',
    icon: 'calendar',
    image: journeyStep1,
  },
  {
    title: 'Complete Your Health Assessment',
    text: 'Answer a comprehensive health questionnaire and complete the recommended laboratory investigations.',
    icon: 'clipboard',
    image: journeyStep2,
  },
  {
    title: 'Clinical Analysis by Our Experts',
    text: 'Our multidisciplinary team carefully reviews your symptoms, medical history, lifestyle, and biomarkers to identify health patterns and potential root causes.',
    icon: 'microscope',
    image: journeyStep3,
  },
  {
    title: 'Receive Your Entire Person Health Report',
    text: 'Get a personalized report that explains your health status, early warning signs, biological age, health priorities, and recommended next steps.',
    icon: 'file',
    image: journeyStep4,
  },
  {
    title: 'Review Your Report with Your Physician',
    text: 'Meet with your physician to understand your report and receive a personalized action plan designed for your long-term health.',
    icon: 'user',
    image: journeyStep5,
  },
]

const PILLARS = [
  { label: 'Functional Medicine', icon: 'dna' },
  { label: 'Precision Diagnostics', icon: 'scan' },
  { label: 'Lifestyle Medicine', icon: 'leaf' },
  { label: 'Nutrition Science', icon: 'apple' },
  { label: 'Rehabilitation Medicine', icon: 'walk' },
  { label: 'Whole-Person Health', icon: 'people' },
]

const FAQS = [
  {
    q: 'Is EPHR only for people who are sick?',
    a: 'No. EPHR is designed for anyone who wants a deeper understanding of their health, whether you have symptoms or feel completely healthy.',
  },
  {
    q: 'How is EPHR different from a regular health checkup?',
    a: 'A regular health checkup identifies existing disease or abnormal lab values. EPHR connects your medical history, lifestyle, symptoms, and test results to provide a more complete understanding of your health.',
  },
  {
    q: 'Do I need symptoms to take an EPHR?',
    a: 'No. In fact, EPHR is most valuable before symptoms appear.',
  },
  {
    q: 'Will I need blood tests?',
    a: 'Depending on your health profile, your clinician may recommend specific laboratory investigations as part of your assessment.',
  },
  {
    q: 'Will someone explain my report?',
    a: 'Yes. Every EPHR includes a one-on-one consultation where a healthcare professional explains your report and answers your questions.',
  },
]

const FINAL_INCLUDES = [
  'Comprehensive Health Assessment',
  'Personalized Entire Person Health Report',
  'Physician Consultation',
  'Personalized Health Action Plan',
]

const DASH_SCORES = [
  ['Metabolic Health', 82],
  ['Gut Health', 61],
  ['Hormonal Balance', 74],
  ['Stress & Recovery', 55],
  ['Inflammation', 68],
]

/* ------------------------------------------------------------------ */

export function EphrIntro() {
  const [activeArea, setActiveArea] = useState(null)

  return (
    <>
      {/* Hero */}
      <section className="ephr-hero">
        <img className="ephr-dna-strand ephr-dna-1" src={MOLECULE_SRC} alt="" aria-hidden="true" />
        <div className="ephr-wrap ephr-hero-grid">
          <div>
            <span className="kicker">Entire Person Health Report (EPHR)</span>
            <h1>
              Welcome to the <em>Unseen Side of Your Health.</em>
            </h1>
            <p className="ephr-hero-sub">
              Your health is more than a collection of test results.
            </p>
            <p className="ephr-hero-support">
              The <strong>Entire Person Health Report (EPHR)</strong> brings
              together your symptoms, lifestyle, medical history, health
              assessments, and laboratory findings into one comprehensive
              report, helping you understand your health, identify early
              imbalances, and take action before disease develops.
            </p>
            <a className="btn btn-primary" href="#book">Book Your EPHR Assessment</a>
          </div>
          <figure className="ephr-hero-figure">
            <video
              src={doctorVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Doctor introducing the Entire Person Health Report"
            />
            {/* <HeroScene /> */}
          </figure>
        </div>
      </section>

      {/* Healthy doesn't always mean healthy */}
      <section className="ephr-statement">
        <div className="ephr-wrap ephr-statement-grid">
          <div className="ephr-statement-text">
            <h2 className="section-title">The Silent Changes Within Your Body You&rsquo;re Unaware Of</h2>
            <p>Many health conditions develop silently, often years before symptoms appear.</p>
            <p>
              You may feel fine today, but your body could already be showing
              early signs of inflammation, hormonal imbalance, nutritional
              deficiencies, metabolic dysfunction, or chronic stress.
            </p>
            <p>
              EPHR helps identify these early warning signs, allowing you to make
              informed decisions before they become long-term health concerns.
            </p>
          </div>
          <div className="ephr-statement-figure">
            <span className="ephr-statement-ring" aria-hidden="true" />
            <img
              src={EPHR_BODY_SRC}
              alt="Visualization of internal organ health signals within the body"
            />
          </div>
        </div>
      </section>

      {/* Why choose EPHR — comparison */}
      <section className="ephr-compare-section">
        <div className="ephr-wrap">
          <div className="ephr-center">
            <span className="kicker">Why Choose EPHR?</span>
            <h2 className="section-title">
              More Than a Health Check. A Complete Understanding of Your Health.
            </h2>
          </div>
          <div className="ephr-compare">
            <div className="ephr-compare-head">
              <div>Traditional Health Check</div>
              <div className="ephr-compare-head-right">Entire Person Health Report</div>
            </div>
            {COMPARISON.map(([left, right]) => (
              <div className="ephr-compare-row" key={left}>
                <div className="ephr-compare-left">{left}</div>
                <div className="ephr-compare-right">{right}</div>
              </div>
            ))}
          </div>
          <p className="ephr-compare-note">
            EPHR doesn&rsquo;t just tell you what&rsquo;s happening. It helps you
            understand why it&rsquo;s happening and what to do next.
          </p>
        </div>
      </section>

      {/* What you'll discover — circular infographic */}
      <section className="ephr-discover">
        <svg width="0" height="0" aria-hidden="true" focusable="false" className="ephr-icon-filter">
          <filter id="ephr-knockout-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 0"
            />
          </filter>
        </svg>
        <span className="ephr-biomarker ephr-biomarker-1"><BiomarkerIcon kind="tube" /></span>
        <span className="ephr-biomarker ephr-biomarker-2"><BiomarkerIcon kind="atom" /></span>
        <div className="ephr-wrap">
          <div className="ephr-center">
            <span className="kicker">What Your EPHR Reveals?</span>
            <h2 className="section-title">
              Go beyond individual test results and discover how every aspect
              of your health is connected.
            </h2>
            <p className="section-sub ephr-center-sub">
              EPHR brings together every important aspect of your health into
              one easy-to-understand report.
            </p>
          </div>

          {/* Desktop: living orbit infographic */}
          <div className="ephr-orbit">
            {/* Pulsing rings + center */}
            <div className="ephr-orbit-glow" aria-hidden="true" />
            <div className="ephr-orbit-ring" aria-hidden="true" />

            <div className={`ephr-orbit-hub ${activeArea !== null ? 'active' : ''}`}>
              <div className="ephr-halo" aria-hidden="true" />
              <div className="ephr-orbit-hub-spin">
                <video
                  src={modelVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="ephr-orbit-hub-img ephr-orbit-hub-video"
                  aria-label="3D model of connected whole-person health"
                />
              </div>
              <div className="ephr-pedestal" aria-hidden="true" />
              <div className="ephr-pedestal ephr-pedestal-2" aria-hidden="true" />
            </div>

            {/* Orbiting items */}
            <div className="ephr-orbit-rotor" aria-hidden="true">
              {HEALTH_AREAS.map(({ label, icon, image }, i) => {
                const angle = (i / HEALTH_AREAS.length) * 2 * Math.PI - Math.PI / 2
                const x = 460 + 380 * Math.cos(angle)
                const y = 460 + 380 * Math.sin(angle)
                return (
                  <div
                    className={`ephr-orbit-item ${activeArea === i ? 'active' : ''}`}
                    key={label}
                    style={{ left: `${x}px`, top: `${y}px` }}
                    onMouseEnter={() => setActiveArea(i)}
                    onMouseLeave={() => setActiveArea(null)}
                  >
                    <span className={`ephr-orbit-icon${image ? ' ephr-orbit-icon-img' : ''}`}>
                      {image ? <img src={image} alt="" /> : Icon[icon]}
                    </span>
                    <span className="ephr-orbit-label">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="ephr-orbit-caption" aria-live="polite">
            {activeArea !== null ? (
              <div className="ephr-hub-detail-text">
                <strong>{HEALTH_AREAS[activeArea].label}</strong>
                <span>{HEALTH_AREAS[activeArea].desc}</span>
              </div>
            ) : (
              <p className="ephr-orbit-caption-hint">Hover an icon to explore each health area</p>
            )}
          </div>

          {/* Mobile / tablet: card grid */}
          <div className="ephr-areas-grid">
            {HEALTH_AREAS.map(({ label, icon, image, desc }) => (
              <div className="ephr-area-card" key={label}>
                <span className={`ephr-area-icon${image ? ' ephr-orbit-icon-img' : ''}`}>
                  {image ? <img src={image} alt="" /> : Icon[icon]}
                </span>
                <span>{label}</span>
                <small>{desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export function EphrClosing() {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      {/* What's included */}
      <section className="ephr-included">
        <div className="ephr-wrap">
          <div className="ephr-center">
            <span className="kicker">
              Everything You Receive with Your EPHR
            </span>
            <h2 className="section-title">
              A comprehensive assessment, expert interpretation, and a
              personalized action plan, all in one place.
            </h2>
          </div>
          <ul className="ephr-check-list ephr-included-list">
            {WHATS_INCLUDED.map((item) => (
              <li key={item}>
                <span className="ephr-check">{Icon.check}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who should get an EPHR */}
      <section className="ephr-who">
        <span className="ephr-biomarker ephr-biomarker-4"><BiomarkerIcon kind="drop" /></span>
        <div className="ephr-wrap">
          <div className="ephr-center">
            <h2 className="section-title">Is the EPHR Right for You?</h2>
            <p className="section-sub ephr-center-sub">
              EPHR is designed for anyone who wants to understand their health
              better. It is especially valuable if you:
            </p>
          </div>
          <div className="ephr-who-grid">
            {WHO_SHOULD.map((item) => (
              <div className="ephr-who-item" key={item}>
                <span className="ephr-check">{Icon.check}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey — timeline + accordion */}
      <section className="ephr-journey-section">
        <div className="ephr-wrap">
          <div className="ephr-center">
            <div className="ephr-kicker-row">
              <span className="ephr-kicker-line" aria-hidden="true" />
              <span className="kicker">Your EPHR Journey</span>
              <span className="ephr-kicker-line" aria-hidden="true" />
            </div>
            <h2 className="section-title">
              Your Journey to Better Health in 5 Simple Steps
            </h2>
            <p className="section-sub ephr-center-sub">
              A seamless, guided process to help you understand your health deeply
              and take the right steps forward.
            </p>
          </div>

          <div className="ephr-journey-list">
            {JOURNEY.map(({ title, text, icon, image }, i) => {
              const open = i === activeStep
              const last = i === JOURNEY.length - 1
              return (
                <div className="ephr-journey-row" key={title}>
                  <div className="ephr-journey-rail" aria-hidden="true">
                    <span className={`ephr-journey-dot ${open ? 'active' : ''}`}>
                      {i + 1}
                    </span>
                    {!last && <span className="ephr-journey-dash" />}
                  </div>

                  <button
                    type="button"
                    className={`ephr-journey-card ${open ? 'active' : ''}`}
                    onClick={() => setActiveStep(i)}
                    aria-expanded={open}
                  >
                    <div className="ephr-journey-card-top">
                      <span className="ephr-journey-card-icon">{Icon[icon]}</span>
                      <span className="ephr-journey-card-title">{title}</span>
                      <span className={`ephr-journey-toggle ${open ? 'open' : ''}`}>
                        {open ? Icon.minus : Icon.chevron}
                      </span>
                    </div>

                    <div className={`ephr-journey-card-body-wrap ${open ? 'open' : ''}`}>
                      <div className="ephr-journey-card-body">
                        <p>{text}</p>
                        <JourneyIllustration src={image} title={title} />
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          <p className="ephr-journey-note">
            <span className="ephr-journey-note-icon">{Icon.shield}</span>
            Your health. Our priority. Safe, secure and 100% confidential at every step.
          </p>
        </div>
      </section>

      {/* Why RECOUP Health */}
      <section className="ephr-why">
        <img className="ephr-biomarker-photo" src={BIOMARKER_SRC} alt="" aria-hidden="true" />
        <div className="ephr-wrap ephr-center">
          <span className="kicker">Why Choose RECOUP Health?</span>
          <h2 className="section-title">Healthcare That Looks Beyond Symptoms</h2>
          <p className="section-sub ephr-center-sub">
            At RECOUP Health, we believe lasting health starts with
            understanding the whole person. The Entire Person Health Report
            combines:
          </p>
          <div className="ephr-pillars">
            {PILLARS.map((p) => (
              <span className="ephr-pill" key={p.label}>
                <span className="ephr-pill-icon">{Icon[p.icon]}</span>
                {p.label}
              </span>
            ))}
          </div>
          <p className="ephr-why-note">
            to help you make confident, informed decisions about your health.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="ephr-faq-section">
        <div className="ephr-wrap">
          <h2 className="section-title ephr-center">Frequently Asked Questions</h2>
          <div className="ephr-faq">
            {FAQS.map((f, i) => (
              <div className="ephr-faq-item" key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <span className={`ephr-faq-chevron ${openFaq === i ? 'open' : ''}`}>
                    {Icon.chevron}
                  </span>
                </button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ephr-final" id="book">
        <img className="ephr-dna-strand ephr-dna-4" src={MOLECULE_SRC} alt="" aria-hidden="true" />
        <div className="ephr-wrap ephr-final-grid">
          <div>
            <span className="kicker ephr-kicker-light">
              Ready to Understand Your Health?
            </span>
            <h2 className="section-title">
              Your Health Is More Than a Collection of Numbers.
            </h2>
            <p className="ephr-final-sub">
              Take the first step toward understanding your health, preventing
              disease, and building a healthier future.
            </p>
          </div>
          <div className="ephr-final-card">
            <p className="ephr-price-label">Entire Person Health Report</p>
            <p className="ephr-includes-label">Includes</p>
            <ul className="ephr-check-list">
              {FINAL_INCLUDES.map((item) => (
                <li key={item}>
                  <span className="ephr-check">{Icon.check}</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link className="btn btn-primary ephr-final-btn" to="/contact?from=ephr&section=final_cta_primary">
              Book Your EPHR Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


