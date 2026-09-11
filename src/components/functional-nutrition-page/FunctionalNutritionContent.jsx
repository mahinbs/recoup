import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  Apple,
  ArrowRight,
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Dumbbell,
  Ear,
  Flame,
  Flower2,
  Frown,
  HeartPulse,
  Leaf,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Sprout,
  Stethoscope,
  Sun,
  Zap,
} from 'lucide-react'
import { ContactInquiryForm } from '../contact/ContactInquiryForm'
import useReveal from '../../hooks/useReveal'

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`

const HERO_IMAGE = img('1585358682246-23acb1561f6b', 1200)
const PERSONALISED_IMAGE = img('1528605248644-14dd04022da1', 1000)
const SHIFT_IMAGE = img('1666214278797-b2cc1b12be76', 1000)

const FOCUS_AREAS = [
  'Fatty Liver',
  'Weight Loss',
  'Gut Health',
  'Hormonal Health',
  'Metabolic Health',
  'Diabetes',
  'PCOS',
  'Menopause',
  'Child Nutrition',
  'Sports Nutrition',
  'Thyroid Health',
  'Heart Health',
  'Inflammation',
  'Healthy Ageing',
]

const SYMPTOMS = [
  { label: 'Fatigue', image: img('1535365751156-45e3b6060cc8', 800), alt: 'Woman resting on an armchair, exhausted' },
  { label: 'Digestive Discomfort', image: img('1769029174021-b305fa92f0ae', 800), alt: 'Person holding their stomach in discomfort' },
  { label: 'Bloating', image: img('1610573500560-103ff4fbca43', 800), alt: 'Hands pressed against a bloated abdomen' },
  { label: 'Brain Fog', image: img('1698047681465-a75bcf38379e', 800), alt: 'Woman at a laptop struggling to focus' },
  { label: 'Weight That Won’t Budge', image: img('1522844990619-4951c40f7eda', 800), alt: 'Feet standing on a bathroom scale' },
  { label: 'Hormonal Imbalance', image: img('1518708909080-704599b19972', 800), alt: 'Woman with her hand on her chest' },
  { label: 'Low Immunity', image: img('1608085575676-8cde8f098201', 800), alt: 'Woman wrapped up warm holding a mug' },
]

const FACTORS = [
  'Metabolism',
  'Gut health',
  'Hormones',
  'Sleep',
  'Stress',
  'Lifestyle',
  'Health history',
]

const JOURNEY = [
  {
    num: '01',
    title: 'Understand',
    text: 'We listen to your health story, symptoms, lifestyle, and goals.',
    icon: Ear,
    image: img('1536914629078-6fda32a00cd2', 600),
    alt: 'Woman sipping a warm drink by a window',
  },
  {
    num: '02',
    title: 'Assess',
    text: 'We look deeper into your health, nutrition, and relevant clinical markers.',
    icon: ClipboardList,
    image: img('1758691463203-cce9d415b2b5', 600),
    alt: 'Clinicians reviewing results on a tablet',
  },
  {
    num: '03',
    title: 'Personalize',
    text: 'We create nutrition strategies designed around your body and daily life.',
    icon: SlidersHorizontal,
    image: img('1633862472152-e3873eb1b3ff', 600),
    alt: 'Colourful, balanced nutrition bowl',
  },
  {
    num: '04',
    title: 'Support',
    text: 'We follow up, refine your plan, and help you build lasting habits.',
    icon: MessagesSquare,
    image: img('1777196975622-fba8567dea67', 600),
    alt: 'Woman drinking water after exercise',
  },
]

const INTEGRATED = [
  'Functional Medicine',
  'Lifestyle Medicine',
  'Physiotherapy',
  'Osteopathy',
  'Clinical Psychology',
  'Health Coaching',
  'Rehabilitation',
]

const OUTCOMES = [
  { title: 'More Energy', text: 'Feel energised and focused throughout the day.', icon: Zap, image: img('1509833903111-9cb142f644e4', 700), alt: 'Woman jogging in the morning' },
  { title: 'Better Digestion', text: 'Support a healthier, happier gut.', icon: Sprout, image: img('1591089398845-0dbbbdba1f75', 700), alt: 'Fresh green juice' },
  { title: 'Healthy Metabolism', text: 'Support balanced blood sugar and metabolic health.', icon: Flame, image: img('1611599537845-1c7aca0091c0', 700), alt: 'Grilled salmon with vegetables' },
  { title: 'Hormonal Wellbeing', text: 'Nourish your body for better hormonal balance.', icon: RefreshCw, image: img('1600618528240-fb9fc964b853', 700), alt: 'Woman meditating at sunrise' },
  { title: 'Reduced Inflammation', text: 'Choose foods that support a healthy inflammatory response.', icon: Leaf, image: img('1495461199391-8c39ab674295', 700), alt: 'Fresh turmeric root on a board' },
  { title: 'Stronger Immunity', text: 'Build a strong nutritional foundation for immune health.', icon: ShieldCheck, image: img('1607522154118-75801cf8f2e9', 700), alt: 'Citrus, carrots and ginger' },
  { title: 'Better Recovery', text: 'Nourish your body for faster, stronger recovery.', icon: Activity, image: img('1607914660217-754fdd90041d', 700), alt: 'Woman stretching outdoors' },
  { title: 'Long-term Wellness', text: 'Build healthy habits that support lifelong wellbeing.', icon: Sun, image: img('1718982228939-7070af0a4c39', 700), alt: 'Person with arms outstretched at sunset' },
]

const DIFFERENTIATORS = [
  'Personalized nutrition, not generic meal plans',
  'Functional Nutrition integrated with Functional Medicine',
  'Multidisciplinary clinical expertise',
  'Evidence-informed recommendations',
  'Health coaching for long-term success',
  'Care plans designed around your lifestyle and goals',
]

const TEAM = [
  { name: 'Functional Medicine', icon: Stethoscope },
  { name: 'Lifestyle Medicine', icon: HeartPulse },
  { name: 'Nutrition', icon: Apple },
  { name: 'Ayurveda', icon: Leaf },
  { name: 'Naturopathy', icon: Flower2 },
  { name: 'Physiotherapy', icon: Activity },
  { name: 'Psychology', icon: Brain },
  { name: 'Rehabilitation', icon: Dumbbell },
  { name: 'Health Coaching', icon: MessagesSquare },
]

const CheckIcon = () => (
  <span className="sp-check" aria-hidden="true">
    <Check strokeWidth={2.5} />
  </span>
)

function Section({ className = '', children }) {
  const ref = useReveal()
  return (
    <section ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </section>
  )
}

function FocusBand() {
  const items = [...FOCUS_AREAS, ...FOCUS_AREAS]
  return (
    <section className="sp-marquee" aria-label="Areas Functional Nutrition can support">
      <div className="sp-marquee-track">
        {items.map((item, i) => (
          <span className="sp-marquee-item" key={`${item}-${i}`} aria-hidden={i >= FOCUS_AREAS.length}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function SymptomCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = SYMPTOMS.length

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setIndex((v) => (v + 1) % count), 3200)
    return () => clearInterval(id)
  }, [paused, count])

  const go = (n) => setIndex((n + count) % count)

  return (
    <div
      className="sp-symptom-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h3>Yet you still experience:</h3>
      <div className="sp-symptom-viewport">
        <div className="sp-symptom-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {SYMPTOMS.map((s, i) => (
            <figure className="sp-symptom-slide" key={s.label} aria-hidden={i !== index}>
              <img src={s.image} alt={s.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </div>
      </div>
      <div className="sp-symptom-caption" aria-live="polite">
        <span className="sp-symptom-index">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <strong>{SYMPTOMS[index].label}</strong>
      </div>
      <div className="sp-symptom-nav">
        <div className="sp-symptom-dots" role="tablist" aria-label="Symptoms">
          {SYMPTOMS.map((s, i) => (
            <button
              type="button"
              key={s.label}
              className={i === index ? 'active' : ''}
              aria-label={s.label}
              aria-selected={i === index}
              role="tab"
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="sp-symptom-arrows">
          <button type="button" aria-label="Previous symptom" onClick={() => go(index - 1)}>
            <ChevronLeft />
          </button>
          <button type="button" aria-label="Next symptom" onClick={() => go(index + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function FunctionalNutritionContent() {
  return (
    <>
      {/* Section 1: Hero */}
      <Section className="sp-hero">
        <div className="sp-wrap sp-hero-grid">
          <div>
            <span className="kicker">Functional Nutrition at Recoup Health</span>
            <h1>
              Nourish Better. Feel Better. <em>Live Better.</em>
            </h1>
            <p className="sp-hero-sub">
              What if the way you eat could do more than change your weight? It
              could change how you feel, function, and live every day.
            </p>
            <p className="sp-hero-support">
              Personalised, evidence-based nutrition designed around your body,
              lifestyle, health goals, and the way you live.
            </p>
            <div className="sp-cta-row">
              <Link
                className="btn btn-primary"
                to="/contact?from=functional-nutrition&section=hero"
              >
                Speak to a Nutritionist
              </Link>
            </div>
          </div>
          <figure className="sp-hero-figure">
            <img
              src={HERO_IMAGE}
              alt="Nutritionist smiling beside a table of fresh produce"
              fetchPriority="high"
            />
          </figure>
        </div>
      </Section>

      {/* Section 1b: moving band of focus areas */}
      <FocusBand />

      {/* Section 2: A Familiar Story */}
      <Section className="sp-trust">
        <div className="sp-wrap sp-two-col">
          <div>
            <span className="kicker">A Familiar Story</span>
            <h2 className="section-title">
              You&rsquo;ve Been Eating Healthy&hellip; So Why Don&rsquo;t You Feel Better?
            </h2>
            <p style={{ color: '#4b5563', marginTop: 14 }}>
              You&rsquo;ve made healthier choices. You&rsquo;re eating more
              vegetables. You&rsquo;ve reduced sugar. You&rsquo;re trying to stay
              active.
            </p>
            <p style={{ color: '#4b5563', marginTop: 14 }}>
              Yet you still experience challenges that leave you wondering what
              you&rsquo;re missing.
            </p>
            <p style={{ color: '#4b5563', marginTop: 14 }}>
              The problem isn&rsquo;t always what you&rsquo;re eating. It&rsquo;s
              understanding how your body responds to it. That&rsquo;s where
              Functional Nutrition offers a different approach.
            </p>
          </div>
          <SymptomCarousel />
        </div>
      </Section>

      {/* Section 3: Personalized by Design */}
      <Section className="sp-statement">
        <div className="sp-wrap sp-pbd-grid">
          <div className="sp-statement-text">
            <span className="kicker">Personalized by Design</span>
            <h2 className="section-title">
              Your Body Is Unique. Shouldn&rsquo;t Your Nutrition Be Too?
            </h2>
            <p>
              Two people can eat the same meal and feel completely different
              afterwards. One feels energised, while the other feels tired,
              bloated, or hungry again.
            </p>
            <div className="sp-pbd-outcomes" aria-label="Same meal, different outcomes">
              <div className="sp-pbd-outcome is-good">
                <div className="sp-card-icon"><Smile /></div>
                <div>
                  <strong>Person A</strong>
                  <span>Feels energised and focused</span>
                </div>
              </div>
              <div className="sp-pbd-outcome is-bad">
                <div className="sp-card-icon"><Frown /></div>
                <div>
                  <strong>Person B</strong>
                  <span>Feels tired, bloated, or hungry again</span>
                </div>
              </div>
            </div>
            <p>
              That&rsquo;s because nutrition isn&rsquo;t one-size-fits-all. What
              shapes how your body responds to food:
            </p>
            <div className="sp-pbd-factors">
              {FACTORS.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
            <p className="sp-pbd-quote">
              Instead of asking, &ldquo;What&rsquo;s the best diet?&rdquo; we ask,
              &ldquo;What&rsquo;s right for you?&rdquo;
            </p>
            <p>
              <strong>Personalised nutrition. Designed for your body and built for better health.</strong>
            </p>
          </div>
          <figure className="sp-pbd-figure">
            <img
              src={PERSONALISED_IMAGE}
              alt="Two friends sharing the same meal at a table"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      {/* Section 7: Your Journey (4-step path) */}
      <Section className="sp-journey">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Your Journey</span>
            <h2 className="section-title">
              From Understanding Your Health To Transforming It
            </h2>
            <p className="section-sub">
              Our Functional Nutrition journey is designed to help you move beyond
              temporary diet plans and build sustainable health.
            </p>
          </div>
          <ol className="sp-path">
            {JOURNEY.map(({ num, title, text, icon: Icon, image, alt }) => (
              <li className="sp-path-step" key={title}>
                <div className="sp-path-photo">
                  <span className="sp-path-num">{num}</span>
                  <img src={image} alt={alt} loading="lazy" />
                  <span className="sp-path-icon" aria-hidden="true"><Icon /></span>
                </div>
                <span className="sp-path-arrow" aria-hidden="true"><ArrowRight /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="sp-center">
            <span className="sp-path-tag">A healthier, happier you</span>
          </div>
        </div>
      </Section>

      {/* Section 8: Whole-Person Care (unchanged) */}
      <Section className="sp-statement">
        <div className="sp-wrap sp-center">
          <span className="kicker">Whole-Person Care</span>
          <h2 className="section-title">
            Nutrition Is Only One Piece of the Puzzle
          </h2>
          <p className="section-sub" style={{ fontWeight: 600, color: 'var(--ink)' }}>
            Better Health Happens When Everything Works Together.
          </p>
          <p className="section-sub" style={{ marginTop: 16 }}>
            Your health isn&rsquo;t influenced by food alone. Sleep. Stress.
            Movement. Emotional wellbeing. Medical history. Lifestyle. All play an
            important role.
          </p>
          <p className="section-sub" style={{ marginTop: 16 }}>
            That&rsquo;s why Functional Nutrition at RECOUP Health is integrated
            with:
          </p>
          <div className="sp-chips" style={{ justifyContent: 'center' }}>
            {INTEGRATED.map((item) => (
              <span className="sp-chip" key={item}>{item}</span>
            ))}
          </div>
          <p className="section-sub" style={{ marginTop: 24 }}>
            Rather than treating nutrition as a standalone service, we bring
            together different clinical perspectives to create a care plan that
            supports your whole health.
          </p>
          <p className="section-sub" style={{ marginTop: 16 }}>
            Because lasting health is built through collaboration—not isolated
            interventions.
          </p>
        </div>
      </Section>

      {/* Section 9: What You Can Achieve (8 outcome cards) */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">What You Can Achieve</span>
            <h2 className="section-title">Real Benefits. Lasting Change.</h2>
            <p className="section-sub">
              With Functional Nutrition, you don&rsquo;t just feel better today;
              you build a healthier, stronger you for tomorrow.
            </p>
          </div>
          <div className="sp-outcomes">
            {OUTCOMES.map(({ title, text, icon: Icon, image, alt }) => (
              <article className="sp-outcome" key={title}>
                <div className="sp-outcome-media">
                  <img src={image} alt={alt} loading="lazy" />
                  <span className="sp-outcome-icon" aria-hidden="true"><Icon /></span>
                </div>
                <div className="sp-outcome-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 10: The Shift (content unchanged, image added) */}
      <Section className="sp-narrative">
        <div className="sp-wrap sp-shift-grid">
          <div>
            <span className="kicker kicker-light">The Shift</span>
            <h2 className="section-title">The Future of Healthcare Is Personal</h2>
            <p>
              Healthcare is moving beyond one-size-fits-all advice towards
              personalized, preventive care. Functional Nutrition is part of this
              shift.
            </p>
            <p>
              Rather than asking &ldquo;What should everyone eat?&rdquo;, it asks
              &ldquo;What does your body need?&rdquo;
            </p>
            <p>
              By combining evidence-based nutrition with personalized clinical care,
              Functional Nutrition helps people make informed choices that support
              their health today and build resilience for the future.
            </p>
          </div>
          <figure className="sp-shift-figure">
            <img
              src={SHIFT_IMAGE}
              alt="Clinician in conversation with a patient during a personalised consultation"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      {/* Section 11: Why RECOUP Health (unchanged) */}
      <Section className="sp-trust">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Why RECOUP Health</span>
            <h2 className="section-title">
              Why Choose Functional Nutrition at RECOUP Health?
            </h2>
            <p className="section-sub" style={{ fontWeight: 600, color: 'var(--ink)' }}>
              Personalized Care. Clinical Expertise. Lasting Health.
            </p>
            <p className="section-sub" style={{ marginTop: 14 }}>
              At RECOUP Health, Functional Nutrition is more than a nutrition
              consultation. It&rsquo;s part of our integrated Precision Healthcare
              approach.
            </p>
            <p className="section-sub" style={{ marginTop: 14 }}>
              What makes us different?
            </p>
          </div>
          <ul className="sp-included-list">
            {DIFFERENTIATORS.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sp-center" style={{ marginTop: 28, color: '#4b5563' }}>
            Because meaningful health isn&rsquo;t created through quick fixes.
            It&rsquo;s built through understanding, partnership, and personalized
            care.
          </p>
        </div>
      </Section>

      {/* Section 12: Your Care Team (unique icons) */}
      <Section className="sp-meet">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Your Care Team</span>
            <h2 className="section-title">Meet the Team Behind Your Health</h2>
            <p className="section-sub">
              Our interdisciplinary team includes experts in Functional Medicine,
              Lifestyle Medicine, nutrition, Ayurveda, Naturopathy, physiotherapy,
              psychology, rehabilitation, and health coaching.
            </p>
            <p className="section-sub" style={{ marginTop: 14 }}>
              Together, we work to understand the complete picture of your health
              and develop personalized nutrition strategies that support lasting
              wellbeing.
            </p>
          </div>
          <div className="sp-team-grid">
            {TEAM.map(({ name, icon: Icon }) => (
              <div className="sp-team-item" key={name}>
                <span className="sp-team-icon" aria-hidden="true"><Icon /></span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 13: Ready to Begin? (compact) */}
      <Section className="sp-final sp-final-slim">
        <div className="sp-wrap sp-final-grid sp-final-compact">
          <div>
            <span className="kicker kicker-light">Ready to Begin?</span>
            <h2 className="section-title">
              Ready to Understand What Your Body Needs?
            </h2>
            <p className="sp-final-sub">
              The best nutrition plan isn&rsquo;t the one that&rsquo;s trending.
              It&rsquo;s the one that&rsquo;s designed for you.
            </p>
            <p className="sp-final-sub">
              Whether you&rsquo;re looking to improve your energy, support recovery,
              optimize your metabolism, or take a more proactive approach to your
              health, we&rsquo;re here to help.
            </p>
            <div className="sp-cta-row">
              <Link
                className="btn btn-gold"
                to="/contact?from=functional-nutrition&section=final_cta"
              >
                Book Your Functional Nutrition Consultation
                <ArrowRight style={{ width: 18, height: 18, display: 'inline-block', verticalAlign: '-3px', marginLeft: 8 }} />
              </Link>
            </div>
          </div>
          <div className="sp-final-card sp-final-card-compact">
            <div className="sp-final-card-head">
              <div className="sp-card-icon"><Apple /></div>
              <div>
                <strong>Your journey starts with understanding your body.</strong>
                <span>Submit your details and our team will get in touch.</span>
              </div>
            </div>
            <ContactInquiryForm
              from="functional-nutrition"
              section="final_cta_form"
              idPrefix="fn-contact"
              heading="Let's Connect"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
