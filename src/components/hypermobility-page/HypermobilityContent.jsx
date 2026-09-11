import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowRight,
  Award,
  BicepsFlexed,
  Bone,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  Dumbbell,
  FileText,
  Flame,
  Flower2,
  HeartPulse,
  Layers,
  Leaf,
  Lightbulb,
  Move,
  PersonStanding,
  Search,
  Shield,
  ShieldCheck,
  Sprout,
  TestTube,
  TrendingUp,
  TriangleAlert,
  Unlink,
  Users,
  Waves,
  Zap,
} from 'lucide-react'
import useReveal from '../../hooks/useReveal'
import drPhoto from '../../assets/preview/home-drphoto.jpg'

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`

const HERO_IMAGE = img('1568480119224-03b49bf7a8a9', 1200)
const TRUST_IMAGE = img('1645005512968-0c1fe99f0093', 800)
const ZEBRA_IMAGE = img('1641565765931-46e5529123f1', 1100)

const TRUST = [
  {
    icon: Award,
    proof: 'Specialist HSD & EDS Care',
    title: 'Specialist Expertise',
    text: 'Dedicated expertise in hypermobility, HSD & EDS care.',
  },
  {
    icon: CalendarDays,
    proof: '35+ Years',
    title: '35+ Years of Experience',
    text: 'Decades of experience across complex musculoskeletal and pain conditions.',
  },
  {
    icon: Search,
    title: 'Root-Cause Approach',
    text: 'We look beyond symptoms to understand what’s driving your condition.',
  },
  {
    icon: Users,
    title: 'Interdisciplinary Care',
    text: 'Multiple specialists work together to create a personalised care plan.',
  },
]

const HEALTHY_POINTS = [
  { icon: PersonStanding, text: 'Joints move within a healthy range' },
  { icon: Shield, text: 'Stable and controlled movement' },
  { icon: BicepsFlexed, text: 'Muscles provide normal support' },
  { icon: ShieldCheck, text: 'Lower risk of recurring injuries' },
  { icon: Activity, text: 'Supports physical activity' },
]

const HYPER_POINTS = [
  { icon: Move, text: 'Joints move beyond their normal range' },
  { icon: Unlink, text: 'Joint instability and excessive movement' },
  { icon: Flame, text: 'Muscles work harder to stabilise joints' },
  { icon: TriangleAlert, text: 'Frequent sprains, strains, or dislocations' },
  { icon: Zap, text: 'May contribute to pain, fatigue, and recurring injuries' },
]

const SYMPTOM_GROUPS = [
  {
    title: 'Pain and Movement',
    items: [
      'Frequent sprains or recurring injuries',
      'Joint pain that keeps coming back',
      'Loose or unstable joints',
      'Clicking, popping, or joints that slip out of place',
    ],
  },
  {
    title: 'Energy and Daily Life',
    items: [
      'Constant tiredness, even after resting',
      'Muscle tightness despite being very flexible',
      'Difficulty recovering after physical activity',
    ],
  },
  {
    title: 'Other Symptoms',
    items: [
      'Headaches, dizziness, or feeling faint',
      'Digestive issues such as bloating, reflux, or IBS',
      'Easy bruising or slow wound healing',
      'Symptoms affecting different parts of your body without a clear explanation',
    ],
  },
]

const BODY_SYSTEMS = [
  {
    icon: Bone,
    title: 'Muscles and Joints',
    items: [
      'Joint pain and instability',
      'Frequent sprains or dislocations',
      'Muscle tightness and fatigue',
      'Poor balance and coordination',
    ],
  },
  {
    icon: Brain,
    title: 'Nervous System',
    items: [
      'Dizziness or light-headedness',
      'Headaches and migraines',
      'Poor body awareness (proprioception)',
      'Increased sensitivity to pain',
    ],
  },
  {
    icon: Waves,
    title: 'Digestive System',
    items: [
      'Bloating',
      'Acid reflux',
      'Constipation or IBS-like symptoms',
      'Food sensitivities',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Heart and Circulation',
    items: [
      'Feeling faint when standing',
      'Rapid heartbeat',
      'Poor exercise tolerance',
      'Blood pressure fluctuations',
    ],
  },
  {
    icon: Layers,
    title: 'Skin and Connective Tissue',
    items: [
      'Easy bruising',
      'Soft or stretchy skin',
      'Slow wound healing',
      'Fragile tissues',
    ],
  },
  {
    icon: Droplets,
    title: 'Pelvic Floor',
    items: [
      'Pelvic pain',
      'Bladder symptoms',
      'Core weakness',
      'Pregnancy-related instability',
    ],
  },
]

const DIAGNOSIS_BENEFITS = [
  "Understand what's causing your symptoms.",
  'Reduce unnecessary investigations and treatments.',
  'Receive a personalized treatment plan.',
  'Prevent recurring injuries.',
  'Improve movement, stability, and long-term quality of life.',
]

const ASSESSMENT_CARDS = [
  { icon: ClipboardList, title: 'Medical History & Symptoms', text: 'Your health history, symptoms & concerns' },
  { icon: Bone, title: 'Joint Assessment', text: 'Joint range, flexibility & stability' },
  { icon: PersonStanding, title: 'Movement & Posture', text: 'Movement patterns, posture & function' },
  { icon: Dumbbell, title: 'Strength & Stability', text: 'Muscle strength and joint control' },
  { icon: HeartPulse, title: 'Pain & Lifestyle', text: 'Pain patterns, activity & daily life' },
  { icon: FileText, title: 'Previous Investigations', text: 'Relevant reports, tests & imaging' },
  { icon: TestTube, title: 'Blood Investigations', text: 'Relevant laboratory assessments' },
  { icon: Activity, title: 'Functional Assessment', text: 'How your body moves in everyday life' },
]

const TREATMENTS = [
  {
    title: 'Specialized Physiotherapy',
    text: 'Improve joint stability, strength, posture, and movement while reducing the risk of recurring injuries.',
  },
  {
    title: 'Osteopathy',
    text: 'Restore mobility, improve body mechanics, and relieve pain through hands-on treatment.',
  },
  {
    title: 'Functional Rehabilitation',
    text: 'Build long-term stability, improve movement patterns, and help you return to daily activities with confidence.',
  },
  {
    title: 'Pain Management',
    text: 'Address chronic pain through evidence-based rehabilitation strategies that support lasting recovery.',
  },
  {
    title: 'Functional Medicine and Nutrition',
    text: 'Identify lifestyle, nutritional, and metabolic factors that may be influencing healing, inflammation, and overall well-being.',
  },
  {
    title: 'Ongoing Progress Reviews',
    text: 'Your treatment evolves as you improve, ensuring your care continues to match your recovery goals.',
  },
]

const JOURNEY = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Comprehensive Assessment',
    text: 'Understand your symptoms, history, movement, and overall health.',
    more: 'We take time to understand your symptoms, medical history, movement patterns, and overall health before drawing any conclusions.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Root-Cause Diagnosis',
    text: 'Connect the dots to understand what may be driving your symptoms.',
    more: 'We identify how hypermobility is affecting your body and what may be contributing to symptoms across different systems.',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Personalised Treatment Plan',
    text: 'Build a care plan tailored to your needs and goals.',
    more: 'Your multidisciplinary team creates a treatment plan based on your goals and clinical findings.',
  },
  {
    num: '04',
    icon: PersonStanding,
    title: 'Guided Rehabilitation',
    text: 'Improve strength, stability, movement and confidence.',
    more: 'Through targeted therapy, education, and ongoing support, we help you improve stability, movement, and confidence.',
  },
  {
    num: '05',
    icon: Leaf,
    title: 'Long-Term Wellness',
    text: 'Build sustainable habits and strategies for lasting health.',
    more: 'Our focus isn’t just recovery—it’s helping you stay active, independent, and resilient for years to come.',
  },
]

const OUTCOMES = [
  { icon: PersonStanding, title: 'Improve joint stability and movement', text: 'Build a stronger, more stable foundation for everyday movement.' },
  { icon: HeartPulse, title: 'Reduce pain and recurring injuries', text: 'Address the underlying causes, not just the symptoms.' },
  { icon: Dumbbell, title: 'Build strength and confidence', text: 'Support your body to move better and do more.' },
  { icon: Flower2, title: 'Return to activities you enjoy', text: 'Get back to the things that matter most to you.' },
  { icon: TrendingUp, title: 'Support long-term health and quality of life', text: 'Sustainable strategies for lasting wellbeing.' },
]

const STORIES = [
  {
    quote:
      'For years, I was told my pain was normal because I was flexible. RECOUP Health finally gave me answers and a treatment plan that actually worked.',
    cite: 'Patient with Hypermobility Spectrum Disorder',
  },
  {
    quote:
      'After years of recurring injuries and visiting multiple specialists, I finally understood how everything was connected. Today I\'m moving with confidence again.',
    cite: 'Recreational Athlete',
  },
  {
    quote:
      'The team looked beyond my symptoms and explained my condition in a way no one ever had before. It completely changed my recovery journey.',
    cite: 'RECOUP Health Patient',
  },
]

const FAQS = [
  {
    q: 'What is hypermobility?',
    a: 'Hypermobility means your joints move beyond their normal range because the connective tissues supporting them are more elastic than usual. While some people experience no symptoms, others may develop pain, instability, fatigue, and problems affecting different parts of the body.',
  },
  {
    q: 'Is being flexible always a sign of good health?',
    a: 'Not always. While flexibility can be beneficial, excessive joint mobility may reduce stability and increase the risk of pain, injuries, and other health concerns.',
  },
  {
    q: 'How do I know if I have hypermobility?',
    a: 'If you experience recurring joint pain, frequent sprains, fatigue, joint instability, or symptoms affecting multiple body systems, a comprehensive assessment can help determine whether hypermobility may be contributing to your condition.',
  },
  {
    q: 'What conditions do you treat?',
    a: 'We assess and manage Hypermobility Spectrum Disorders (HSD), Ehlers-Danlos Syndrome (EDS), chronic musculoskeletal pain, joint instability, and related functional conditions.',
  },
  {
    q: 'What happens during my first appointment?',
    a: 'Your first visit includes a detailed discussion about your symptoms, medical history, movement, and overall health. We assess how hypermobility may be affecting your body and develop a personalized recovery plan.',
  },
  {
    q: 'Do I need a referral?',
    a: 'No. You can book an appointment directly with our team.',
  },
  {
    q: 'Is treatment personalized?',
    a: 'Yes. Every treatment plan is tailored to your symptoms, lifestyle, and goals. Depending on your needs, your care may involve physiotherapy, rehabilitation, osteopathy, functional medicine, nutrition, and ongoing clinical support.',
  },
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

export default function HypermobilityContent() {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      {/* Hero */}
      <Section className="sp-hero">
        <div className="sp-wrap sp-hero-grid">
          <div>
            <span className="kicker">Hypermobility &amp; EDS Care</span>
            <h1>
              When Flexibility Comes With Pain,{' '}
              <em>There May Be More to the Story.</em>
            </h1>
            <p className="sp-hero-sub">
              If you&rsquo;ve always been &ldquo;double-jointed&rdquo; but also
              experience chronic pain, frequent injuries, fatigue, or unexplained
              symptoms, hypermobility could be the missing piece.
            </p>
            <p className="sp-hero-support">
              At RECOUP Health, we specialize in diagnosing and treating
              Hypermobility Spectrum Disorders (HSD) and Ehlers-Danlos Syndrome
              (EDS). Through our personalized, root-cause approach, we help you
              understand your condition, improve joint stability, reduce pain,
              restore movement, and regain confidence in your body.
            </p>
            <div className="sp-cta-row">
              <Link className="btn btn-primary" to="/contact?from=hypermobility&section=hero_primary">
                Book Your Assessment
              </Link>
              <Link className="btn btn-secondary" to="/contact?from=hypermobility&section=hero_secondary">
                Speak to Our Team
              </Link>
            </div>
          </div>
          <figure className="sp-hero-figure">
            <img
              src={HERO_IMAGE}
              alt="Woman stretching her arms behind her back"
              fetchPriority="high"
            />
          </figure>
        </div>
      </Section>

      {/* Why patients trust */}
      <Section className="sp-trust">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Why Patients Trust Us</span>
            <h2 className="section-title">Why Patients Trust Recoup Health</h2>
            <p className="section-sub">
              Specialist expertise. Root-cause thinking. Personalised care.
            </p>
          </div>
          <div className="sp-trust-layout">
            <div className="sp-trust-col">
              {TRUST.slice(0, 2).map(({ icon: Icon, proof, title, text }) => (
                <div className="sp-pillar-block" key={title}>
                  <div className="sp-pillar-icon"><Icon /></div>
                  <div>
                    {proof ? <span className="sp-pillar-proof">{proof}</span> : null}
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sp-trust-figure">
              <img src={TRUST_IMAGE} alt="Clinician assessing a patient’s shoulder" loading="lazy" />
              <span className="sp-trust-figure-tag">Move Better. Live Fuller.</span>
            </div>
            <div className="sp-trust-col">
              {TRUST.slice(2).map(({ icon: Icon, proof, title, text }) => (
                <div className="sp-pillar-block" key={title}>
                  <div className="sp-pillar-icon"><Icon /></div>
                  <div>
                    {proof ? <span className="sp-pillar-proof">{proof}</span> : null}
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Understanding the difference */}
      <Section className="sp-compare-section">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Understanding the Difference</span>
            <h2 className="section-title">
              More Flexible Doesn’t Always Mean Healthier
            </h2>
            <p className="section-sub">
              Flexibility can be beneficial, but when joints move beyond their
              normal range, it can affect stability, strength, and everyday
              movement.
            </p>
          </div>
          <div className="sp-diff-panels">
            <div className="sp-diff-panel is-healthy">
              <span className="sp-diff-tag">Healthy Flexibility</span>
              <h3>Greater Range of Motion</h3>
              <p>Joints move within a healthy range, with stability and control.</p>
              <ul className="sp-diff-list">
                {HEALTHY_POINTS.map(({ icon: Icon, text }) => (
                  <li key={text}>
                    <span className="sp-diff-ico" aria-hidden="true"><Icon /></span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-diff-panel is-hyper">
              <span className="sp-diff-tag">Hypermobility</span>
              <h3>Increased Range, Greater Challenges</h3>
              <p>Joints may move beyond their normal range, which can contribute to instability, pain, and fatigue.</p>
              <ul className="sp-diff-list">
                {HYPER_POINTS.map(({ icon: Icon, text }) => (
                  <li key={text}>
                    <span className="sp-diff-ico" aria-hidden="true"><Icon /></span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sp-takeaway">
            <span className="sp-takeaway-ico" aria-hidden="true"><Lightbulb /></span>
            <p>
              <strong>It’s not just about how far you can move</strong> — it’s about how well you can move.
            </p>
            <Link className="btn btn-primary" to="/contact?from=hypermobility&section=difference_cta">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </Section>

      {/* Symptoms */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Symptoms</span>
            <h2 className="section-title">Could This Be What You&rsquo;re Experiencing?</h2>
            <p className="section-sub">
              Hypermobility affects everyone differently. You don&rsquo;t need to
              experience every symptom to benefit from an assessment.
            </p>
          </div>
          <div className="sp-check-grid">
            {SYMPTOM_GROUPS.map((group) => (
              <div className="sp-check-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="sp-check-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="sp-center" style={{ marginTop: 28, color: '#4b5563' }}>
            If several of these sound familiar, it may be time to look beyond
            symptoms and understand what&rsquo;s really causing them.
          </p>
          <div className="sp-cta-row" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact?from=hypermobility&section=symptoms_cta">
              Book a Comprehensive Assessment
            </Link>
          </div>
        </div>
      </Section>

      {/* Zebra */}
      <Section className="sp-narrative">
        <div className="sp-wrap sp-zebra-grid">
          <figure className="sp-zebra-figure">
            <img src={ZEBRA_IMAGE} alt="A zebra galloping across open grassland" loading="lazy" />
          </figure>
          <div>
            <span className="kicker kicker-light">A Different Way of Thinking</span>
            <h2 className="section-title">Think Zebra, Not Just Horses</h2>
            <p className="sp-lead">Sometimes the answer isn’t the most obvious one.</p>
            <div className="sp-quote-box">
              <p>&ldquo;When you hear hoofbeats, think horses, not zebras.&rdquo;</p>
            </div>
            <p>
              In healthcare, we often look for the most common explanation first.
              But for people with HSD or EDS, symptoms may not follow the usual
              pattern.
            </p>
            <p>
              Recurring pain, injuries, fatigue, digestive issues, or dizziness may
              be connected — not separate problems.
            </p>
            <p>
              At RECOUP HEALTH, we look beyond individual symptoms to connect the
              dots, understand the underlying factors, and guide you towards the
              right diagnosis and care.
            </p>
            <p>
              <strong>Because hypermobility doesn’t just affect your joints — it can affect your whole body.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Understanding + body systems */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Understanding Hypermobility</span>
            <h2 className="section-title">Hypermobility Affects More Than Your Joints</h2>
            <p className="section-sub">
              Hypermobility isn&rsquo;t just about being flexible. Connective tissue
              is found throughout your body, providing support and stability to
              your joints, muscles, skin, blood vessels, digestive system, and many
              other organs.
            </p>
            <p className="section-sub" style={{ marginTop: 14 }}>
              When this connective tissue is weaker or more elastic than it should
              be, it can affect multiple body systems—not just your joints.
              That&rsquo;s why people with hypermobility often experience symptoms
              that seem unrelated but are actually connected.
            </p>
          </div>
          <h3 className="section-title" style={{ fontSize: '1.35rem', marginTop: 40, textAlign: 'center' }}>
            How Hypermobility Can Affect Your Body
          </h3>
          <div className="sp-areas-grid">
            {BODY_SYSTEMS.map(({ icon: Icon, title, items }) => (
              <div className="sp-area-card" key={title}>
                <div className="sp-card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why missed + diagnosis */}
      <Section className="sp-statement">
        <div className="sp-wrap sp-two-col">
          <div>
            <span className="kicker">Often Overlooked</span>
            <h2 className="section-title">Why Is Hypermobility So Often Missed?</h2>
            <p>
              Many people spend years visiting different specialists for different
              symptoms. One doctor treats the joint pain. Another looks at
              digestive problems. Someone else investigates headaches or dizziness.
            </p>
            <p>
              Because each symptom is treated separately, the underlying connective
              tissue condition often goes unrecognized.
            </p>
            <p>
              At RECOUP Health, we take a different approach. Instead of focusing
              on isolated symptoms, we assess how your entire body functions to
              identify the root cause.
            </p>
          </div>
          <div>
            <span className="kicker">Getting It Right</span>
            <h2 className="section-title">Getting the Right Diagnosis Matters</h2>
            <p>
              Without the right diagnosis, symptoms may continue to worsen,
              affecting your mobility, confidence, work, sport, and everyday life.
            </p>
            <p>An accurate assessment helps you:</p>
            <ul className="sp-check-list" style={{ marginTop: 16 }}>
              {DIAGNOSIS_BENEFITS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Your path to better movement: comprehensive assessment */}
      <Section className="sp-assess-section">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Your Path to Better Movement</span>
            <h2 className="section-title">Your Comprehensive Assessment</h2>
            <p className="section-sub">
              We look beyond your joints to understand the complete picture of
              your health, movement, and symptoms.
            </p>
          </div>
          <div className="sp-assess-grid">
            {ASSESSMENT_CARDS.map(({ icon: Icon, title, text }) => (
              <div className="sp-assess-card" key={title}>
                <div className="sp-card-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="sp-takeaway">
            <span className="sp-takeaway-ico" aria-hidden="true"><Sprout /></span>
            <p>
              <strong>A comprehensive assessment helps us connect the dots</strong> and build the right care plan for you.
            </p>
            <Link className="btn btn-primary" to="/contact?from=hypermobility&section=assessment_cta">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </Section>

      {/* Treatments */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Personalized Care</span>
            <h2 className="section-title">
              A Personalized Treatment Plan Designed Around You
            </h2>
            <p className="section-sub">
              Once we understand the root cause of your symptoms, we create a
              treatment plan tailored to your specific needs and goals. Depending
              on your condition, your care plan may include:
            </p>
          </div>
          <div className="sp-pillars">
            {TREATMENTS.map((t) => (
              <div className="sp-pillar" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Journey */}
      <Section className="sp-journey">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Your Roadmap</span>
            <h2 className="section-title">The RECOUP Healing Journey</h2>
            <p className="section-sub">
              A structured, personalised approach to help you understand, treat
              and manage hypermobility — and move towards a healthier, more
              active future.
            </p>
          </div>
          <div className="sp-hj" role="list">
            {JOURNEY.map(({ num, icon: Icon, title, text, more }, i) => (
              <button
                type="button"
                role="listitem"
                key={title}
                className={`sp-hj-step ${activeStep === i ? 'is-active' : ''}`}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setActiveStep(i)}
                onFocus={() => setActiveStep(i)}
                aria-expanded={activeStep === i}
              >
                <span className="sp-hj-ico" aria-hidden="true"><Icon /></span>
                <span className="sp-hj-body">
                  <span className="sp-hj-num">Step {num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="sp-hj-more">{more}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="sp-takeaway">
            <span className="sp-takeaway-ico" aria-hidden="true"><Flower2 /></span>
            <p>
              <strong>It’s more than treatment — it’s a path to a healthier, more active you.</strong> We’re with you at every step.
            </p>
            <Link className="btn btn-primary" to="/contact?from=hypermobility&section=journey_cta">
              Book Your Consultation
            </Link>
          </div>
        </div>
      </Section>

      {/* Why different */}
      <Section className="sp-why-section">
        <div className="sp-wrap sp-why-grid">
          <div className="sp-why-copy">
            <span className="kicker">Why Our Approach Is Different</span>
            <h2 className="section-title">A Deeper Understanding for Better Outcomes</h2>
            <p>
              Many treatment approaches focus on managing symptoms as they appear.
            </p>
            <p>
              At RECOUP Health, we look deeper — to understand why those
              symptoms are happening in the first place. By combining specialist
              expertise, comprehensive assessment, and interdisciplinary care, we
              aim to help you:
            </p>
            <div className="sp-why-note">
              <div className="sp-card-icon"><Sprout /></div>
              <p>Not just symptom relief — but a stronger, healthier, more active you.</p>
            </div>
          </div>
          <ol className="sp-why-list">
            {OUTCOMES.map(({ icon: Icon, title, text }, i) => (
              <li className="sp-why-item" key={title} data-n={i + 1}>
                <div className="sp-card-icon"><Icon /></div>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Meet specialist */}
      <Section className="sp-meet">
        <div className="sp-wrap sp-meet-grid">
          <div className="sp-meet-copy">
            <span className="kicker">Meet Your Specialist</span>
            <h2 className="section-title">Dr. Deepak Sharan</h2>
            <p style={{ fontWeight: 600, color: 'var(--green-800)' }}>
              Pioneering Hypermobility Care with Over 35 Years of Clinical Excellence
            </p>
            <p>
              Dr. Deepak Sharan is one of India&rsquo;s leading experts in orthopedic
              surgery, rehabilitation, chronic pain, and hypermobility disorders.
              Over the past three decades, he has helped thousands of patients find
              answers to complex conditions that were often overlooked or
              misdiagnosed.
            </p>
            <p>
              Drawing on years of clinical experience and research, Dr. Sharan
              developed the DEEPAK SHARAN&rsquo;s Protocol—a comprehensive
              rehabilitation approach designed to address the root causes of pain,
              instability, and movement dysfunction, rather than simply managing
              symptoms.
            </p>
            <p>
              Today, the DEEPAK SHARAN Protocol forms the foundation of
              hypermobility care at RECOUP Health. Every treatment plan is
              personalized, combining specialist expertise with a multidisciplinary
              approach to improve stability, restore movement, reduce pain, and
              support long-term recovery.
            </p>
            <p>
              Led by Dr. Sharan, our team is committed to helping you move with
              confidence, regain independence, and achieve lasting improvements in
              your quality of life.
            </p>
            <div className="sp-cta-row">
              <Link className="btn btn-primary" to="/contact?from=hypermobility&section=meet_specialist">
                Meet Dr. Deepak Sharan
              </Link>
            </div>
          </div>
          <div className="sp-meet-photo">
            <img src={drPhoto} alt="Dr. Deepak Sharan" />
          </div>
        </div>
      </Section>

      {/* Stories */}
      <Section className="sp-stories">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Patient Stories</span>
            <h2 className="section-title">Real Stories. Real Recovery.</h2>
            <p className="section-sub">
              Every patient&rsquo;s journey is different, but one thing remains the
              same—the relief of finally understanding what&rsquo;s been causing
              their symptoms.
            </p>
          </div>
          <div className="sp-story-grid">
            {STORIES.map((s) => (
              <blockquote className="sp-story" key={s.cite}>
                <p>&ldquo;{s.quote}&rdquo;</p>
                <cite>– {s.cite}</cite>
              </blockquote>
            ))}
          </div>
          <div className="sp-cta-row" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-secondary" to="/blog">
              Read More Patient Stories
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="sp-faq">
            {FAQS.map((f, i) => (
              <div className="sp-faq-item" key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <ChevronDown className={`sp-faq-chevron ${openFaq === i ? 'open' : ''}`} />
                </button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="sp-final">
        <div className="sp-wrap sp-final-grid">
          <div>
            <span className="kicker kicker-light">Take the First Step</span>
            <h2 className="section-title">Towards Better Health</h2>
            <p className="sp-final-sub">
              Living with hypermobility can be frustrating, especially when
              you&rsquo;ve spent years searching for answers. But with the right
              diagnosis, personalized care, and expert guidance, recovery is
              possible.
            </p>
            <p className="sp-final-sub">
              Whether you&rsquo;ve recently been diagnosed or suspect hypermobility
              may be contributing to your symptoms, our team is here to help you
              understand your body and create a treatment plan designed
              specifically for you.
            </p>
            <p className="sp-final-sub">
              You don&rsquo;t have to keep living with unanswered questions.
              Together, we&rsquo;ll help you understand what&rsquo;s happening,
              uncover the root cause, and guide you towards lasting recovery.
            </p>
          </div>
          <div className="sp-final-card">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Ready to begin?</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: 20 }}>
              Book an assessment or speak with our team about hypermobility care.
            </p>
            <div className="sp-cta-row">
              <Link className="btn btn-primary" to="/contact?from=hypermobility&section=final_cta_primary">
                Book Your Assessment
              </Link>
              <Link className="btn btn-secondary" to="/contact?from=hypermobility&section=final_cta_secondary">
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
