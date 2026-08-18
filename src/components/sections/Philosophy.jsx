import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useReveal from '../../hooks/useReveal'
import drPhoto from '../../assets/preview/home-drphoto.jpg'

const leftBg =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=75&auto=format&fit=crop'

const Icon = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  shieldCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="7" r="2.2" /><circle cx="18" cy="7" r="2.2" /><circle cx="12" cy="18" r="2.2" />
      <path d="M7.8 8.6L10.5 16M16.2 8.6L13.5 16M8.2 7h7.6" />
    </svg>
  ),
  pulseHeart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-4 3 8 2-6 1.5 2H21" />
      <path d="M12 20s-6.5-4.2-8.5-8.4C2.2 8.6 3.6 5.5 6.7 5c2-.3 3.7.9 5.3 2.7C13.6 5.9 15.3 4.7 17.3 5c3.1.5 4.5 3.6 3.2 6.6C18.5 15.8 12 20 12 20z" opacity="0.35" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5z" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13z" />
      <path d="M14.2 8h3.3M14.2 11h3.3M14.2 14h3.3" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M9.5 3l2.5 6 2.5-6M12 11v3.5" />
      <path d="M12 12.7l1.6 1-.6 1.9h-2l-.6-1.9z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
      <path d="M7 5H4.5a2 2 0 000 4H7M17 5h2.5a2 2 0 010 4H17" />
      <path d="M12 13v3M9 20h6M9.5 20c0-2 .8-3 2.5-3s2.5 1 2.5 3" />
    </svg>
  ),
}

const leftCards = [
  { icon: 'target', title: 'We Find the Real Cause', points: [
    'We look beyond your symptoms.',
    "We identify what's causing your health problem.",
    'Every treatment is personalized for you.',
    'Our goal is lasting healing, not temporary relief.',
  ]},
  { icon: 'shieldCheck', title: 'Care You Can Trust', points: [
    'Treatments backed by medical research.',
    'Thorough health assessments.',
    'Decisions based on evidence, not guesswork.',
    'We measure your progress every step of the way.',
  ]},
  { icon: 'network', title: 'Experts Working Together', points: [
    'Doctors and specialists work as one team.',
    'One personalized care plan.',
    'Support from multiple health experts.',
    "We're with you throughout your recovery.",
  ]},
  { icon: 'pulseHeart', title: 'Better Health for Life', points: [
    'Personalized care based on your needs.',
    'Advanced diagnostics for accurate treatment.',
    'Functional medicine and rehabilitation together.',
    'Helping you stay healthy at every stage of life.',
  ]},
]

const rightCards = [
  { icon: 'globe', title: 'Trusted by Patients Worldwide', points: [
    'Over 35 years of clinical experience.',
    'More than 1 million patients treated.',
    'Patients from over 45 countries.',
    'A leader in chronic pain and rehabilitation.',
  ]},
  { icon: 'book', title: 'Backed by Research', points: [
    '500+ scientific publications.',
    'International speaker and educator.',
    'Developed innovative treatment methods.',
    'Committed to evidence-based care.',
  ]},
  { icon: 'medal', title: 'Recognized Around the World', points: [
    'President, International MYOPAIN Society.',
    'Global leader in pain rehabilitation.',
    'Works with leading international organizations.',
    'Helping shape the future of rehabilitation.',
  ]},
  { icon: 'trophy', title: 'Award-Winning Excellence', points: [
    'National and international award recipient.',
    'Honored for innovation in patient care.',
    'Recognized for advancing rehabilitation medicine.',
    'Bringing world-class expertise to every patient.',
  ]},
]

const slideEase = [0.22, 1, 0.36, 1]

const panelVariants = {
  enter: (dir) => ({ x: dir > 0 ? 64 : -64, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -64 : 64, opacity: 0 }),
}

const listVariants = {
  enter: {},
  center: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: {},
}

const itemVariants = {
  enter: (dir) => ({ x: dir > 0 ? 18 : -18, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: { opacity: 0 },
}

function WhyCard({ card, index, dir, photo, photoAlt, tone }) {
  return (
    <div className={`wc-stage-col wc-card-${tone}`}>
      <img className="wc-card-photo" src={photo} alt={photoAlt} />
      <span className="glass-ghost-num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="glass-fill" aria-hidden="true">{Icon[card.icon]}</div>

      <div className="wc-card-body">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={card.title}
            className="wc-slide"
            custom={dir}
            variants={panelVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: slideEase }}
          >
            <div className="glass-icon-orb">{Icon[card.icon]}</div>
            <h4>{card.title}</h4>
            <motion.ul
              className="glass-timeline"
              custom={dir}
              variants={listVariants}
              initial="enter"
              animate="center"
            >
              {card.points.map((p) => (
                <motion.li key={p} custom={dir} variants={itemVariants} transition={{ duration: 0.35, ease: slideEase }}>
                  {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function useSyncedStep(length, autoPlayMs = 4500) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const reducedRef = useRef(false)
  const pausedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = (next) => {
    const target = ((next % length) + length) % length
    if (target === index) return
    setDir(next >= index ? 1 : -1)
    setIndex(target)
  }

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) goTo(index + 1)
    }, autoPlayMs)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return { index, dir, goTo, pausedRef }
}

const Philosophy = () => {
  const ref = useReveal()
  const { index, dir, goTo, pausedRef } = useSyncedStep(leftCards.length)

  return (
    <section ref={ref} className="reveal wc-section">
      <div className="wc-blob wc-blob-1" aria-hidden="true" />
      <div className="wc-blob wc-blob-2" aria-hidden="true" />
      <div className="hp-wrap">
        <div className="wc-columns">
          <div className="wc-col">
            <span className="kicker">Our Approach</span>
            <h2 className="section-title">Why Choose RECOUP Health?</h2>
          </div>
          <div className="wc-col">
            <span className="kicker">Medical Leadership</span>
            <h2 className="section-title">Led by Dr. Deepak Sharan</h2>
          </div>
        </div>

        <div
          className="wc-stage"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onFocus={() => { pausedRef.current = true }}
          onBlur={() => { pausedRef.current = false }}
        >
          <WhyCard
            card={leftCards[index]}
            index={index}
            dir={dir}
            photo={leftBg}
            photoAlt=""
            tone="light"
          />
          <WhyCard
            card={rightCards[index]}
            index={index}
            dir={dir}
            photo={drPhoto}
            photoAlt="Dr. Deepak Sharan"
            tone="dark"
          />
        </div>

        <div className="wc-nav" role="group" aria-label="Browse reasons to choose RECOUP Health">
          <button type="button" className="wc-arrow" onClick={() => goTo(index - 1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="wc-dots" role="tablist" aria-label="Card position">
            {leftCards.map((_, i) => (
              <button
                key={i}
                role="tab"
                type="button"
                aria-selected={i === index}
                aria-label={`Go to card ${i + 1} of ${leftCards.length}`}
                className={`wc-dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button type="button" className="wc-arrow" onClick={() => goTo(index + 1)} aria-label="Next">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
