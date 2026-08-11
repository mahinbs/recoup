import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  Bone,
  Brain,
  Check,
  ChevronDown,
  Droplets,
  HeartPulse,
  Layers,
  Search,
  Stethoscope,
  Users,
  Waves,
} from 'lucide-react'
import useReveal from '../../hooks/useReveal'
import drPhoto from '../../assets/preview/home-drphoto.jpg'

const TRUST = [
  {
    icon: Award,
    title: 'Specialized Hypermobility Care',
    text: 'We specialize in diagnosing and treating Hypermobility Spectrum Disorders (HSD), Ehlers-Danlos Syndrome (EDS), and related conditions. Our care is tailored to your unique symptoms, goals, and recovery journey.',
  },
  {
    icon: Stethoscope,
    title: '35+ Years of Clinical Experience',
    text: 'Led by Dr. Deepak Sharan, our team brings over three decades of experience in orthopedic surgery, rehabilitation, pain management, regenerative medicine, and complex musculoskeletal care.',
  },
  {
    icon: Search,
    title: 'Root-Cause Assessment',
    text: "We don't just treat where it hurts; we identify why it hurts. Our comprehensive assessments help uncover the underlying factors contributing to your symptoms.",
  },
  {
    icon: Users,
    title: 'Personalized Interdisciplinary Care',
    text: 'Your recovery is guided by an integrated team of specialists who work together to create a personalized treatment plan that supports long-term healing.',
  },
]

const COMPARISON = [
  ['Joints move within a healthy range', 'Joints move beyond their normal range'],
  ['Stable and controlled movement', 'Joint instability and excessive movement'],
  ['Muscles provide normal support', 'Muscles work harder to stabilize joints'],
  ['Lower risk of recurring injuries', 'Frequent sprains, strains, or dislocations'],
  ['Supports physical activity', 'May lead to pain, fatigue, and recurring injuries'],
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

const ASSESSMENT_ITEMS = [
  'A detailed medical history and symptom review',
  'Joint hypermobility assessment',
  'Movement and posture analysis',
  'Muscle strength and stability testing',
  'Functional movement assessment',
  'Pain and lifestyle evaluation',
  'Review of previous investigations and imaging (if available)',
  'Blood investigations',
  'Imaging',
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
    title: 'Step 1 — Comprehensive Assessment',
    text: 'We understand your symptoms, medical history, movement, and overall health.',
  },
  {
    title: 'Step 2 — Root Cause Diagnosis',
    text: 'We identify how hypermobility is affecting your body and what may be contributing to your symptoms.',
  },
  {
    title: 'Step 3 — Personalized Treatment Plan',
    text: 'Your multidisciplinary team creates a treatment plan based on your goals and clinical findings.',
  },
  {
    title: 'Step 4 — Guided Rehabilitation',
    text: 'Through targeted therapy, education, and ongoing support, we help you improve stability, movement, and confidence.',
  },
  {
    title: 'Step 5 — Long-Term Wellness',
    text: "Our focus isn't just recovery—it's helping you stay active, independent, and resilient for years to come.",
  },
]

const OUTCOMES = [
  'Improve joint stability and movement',
  'Reduce pain and recurring injuries',
  'Build strength and confidence',
  'Return to the activities you enjoy',
  'Achieve better long-term health and quality of life',
]

const STORIES = [
  {
    quote:
      'For years, I was told my pain was normal because I was flexible. Recoup Health finally gave me answers and a treatment plan that actually worked.',
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
    cite: 'Recoup Health Patient',
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
              At Recoup Health, we specialize in diagnosing and treating
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=75&auto=format&fit=crop"
              alt="Clinical assessment and movement care"
            />
          </figure>
        </div>
      </Section>

      {/* Why patients trust */}
      <Section className="sp-trust">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Why Patients Trust Recoup Health</span>
            <h2 className="section-title">Specialized Hypermobility Care</h2>
            <p className="section-sub">
              Recoup Health is internationally recognized for its expertise in
              hypermobility and EDS, with patients traveling from across India and
              around the world to receive advanced and personalized care.
            </p>
          </div>
          <div className="sp-card-grid">
            {TRUST.map(({ icon: Icon, title, text }) => (
              <div className="sp-card" key={title}>
                <div className="sp-card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* More flexible */}
      <Section className="sp-statement">
        <div className="sp-wrap sp-statement-grid">
          <div className="sp-statement-text">
            <span className="kicker">Understanding Flexibility</span>
            <h2 className="section-title">
              More Flexible Doesn&rsquo;t Always Mean Healthier
            </h2>
            <p>
              Have you always been able to bend more than others, or have you been
              told you&rsquo;re &ldquo;double-jointed&rdquo;?
            </p>
            <p>
              Many people think flexibility is a sign of good health. While
              flexibility can be beneficial, too much flexibility can sometimes
              make your joints less stable rather than stronger.
            </p>
            <p>
              When the connective tissues supporting your joints are weaker or
              more elastic than they should be, your joints move beyond their
              normal range. To compensate, your muscles have to work harder to
              keep your body stable.
            </p>
            <p>
              Over time, this can lead to recurring pain, frequent injuries,
              muscle fatigue, and difficulty with everyday activities.
            </p>
            <p>
              For some people, this is simply joint flexibility. For others, it
              may be part of a connective tissue condition such as Hypermobility
              Spectrum Disorder (HSD) or Ehlers-Danlos Syndrome (EDS).
            </p>
            <p>
              <strong>Understanding the difference is the first step towards getting the right care.</strong>
            </p>
          </div>
          <div className="sp-statement-figure">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=75&auto=format&fit=crop"
              alt="Movement and flexibility assessment"
            />
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="sp-compare-section">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">Know the Difference</span>
            <h2 className="section-title">Healthy Flexibility vs. Hypermobility</h2>
          </div>
          <div className="sp-compare">
            <div className="sp-compare-head">
              <div>Healthy Flexibility</div>
              <div className="sp-compare-head-right">Hypermobility</div>
            </div>
            {COMPARISON.map(([left, right]) => (
              <div className="sp-compare-row" key={left}>
                <div className="sp-compare-left">{left}</div>
                <div className="sp-compare-right">{right}</div>
              </div>
            ))}
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
        <div className="sp-wrap">
          <span className="kicker kicker-light">Think Zebra, Not Just Horses</span>
          <h2 className="section-title">
            Sometimes the Answer Isn&rsquo;t the Most Obvious One.
          </h2>
          <p className="sp-quote">
            &ldquo;When you hear hoofbeats, think horses, not zebras.&rdquo;
          </p>
          <p>
            It reminds healthcare professionals to look for the most common
            explanation first. But when it comes to HSD and EDS, many people are
            the zebra. Their symptoms don&rsquo;t always fit the usual pattern,
            which is why these conditions are often overlooked or misdiagnosed.
          </p>
          <p>
            Many people spend years treating recurring pain, injuries, fatigue,
            digestive issues, or dizziness as separate problems, without anyone
            recognizing the underlying connective tissue disorder.
          </p>
          <p>
            At Recoup Health, we take a different approach. We connect the dots
            to understand how these seemingly unrelated symptoms may be
            connected—helping you receive the right diagnosis and a precise
            treatment plan.
          </p>
          <p>
            <strong>Because hypermobility doesn&rsquo;t just affect your joints—it can affect your whole body.</strong>
          </p>
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
              At Recoup Health, we take a different approach. Instead of focusing
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

      {/* Path to better movement */}
      <Section>
        <div className="sp-wrap sp-center">
          <span className="kicker">Your Path to Better Movement</span>
          <h2 className="section-title">
            Your Journey Starts with Understanding Your Body
          </h2>
          <p className="section-sub">
            No two people experience hypermobility the same way. That&rsquo;s why
            treatment should never follow a one-size-fits-all approach.
          </p>
          <p className="section-sub" style={{ marginTop: 14 }}>
            At Recoup Health, we begin by understanding how hypermobility affects
            your body, lifestyle, and overall health. This helps us create a
            precise treatment plan designed specifically for you.
          </p>
        </div>
      </Section>

      {/* Comprehensive assessment */}
      <Section className="sp-band-dark">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker kicker-light">Assessment</span>
            <h2 className="section-title">Your Comprehensive Assessment</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Your journey begins with a detailed evaluation that looks beyond your
              joints to understand the complete picture of your health.
            </p>
            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.85)' }}>
              Your assessment may include:
            </p>
          </div>
          <ul className="sp-included-list">
            {ASSESSMENT_ITEMS.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sp-center" style={{ marginTop: 28 }}>
            This comprehensive approach helps us identify the factors contributing
            to your symptoms and guides the most appropriate treatment plan.
          </p>
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
            <span className="kicker">The Recoup Healing Journey</span>
            <h2 className="section-title">Your Path From Assessment to Long-Term Wellness</h2>
          </div>
          <div className="sp-journey-track">
            {JOURNEY.map((step, i) => (
              <div className="sp-journey-step" key={step.title}>
                <div className="sp-journey-rail">
                  <div className="sp-journey-num">{i + 1}</div>
                  <div className="sp-journey-line" aria-hidden="true" />
                </div>
                <div className="sp-journey-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why different */}
      <Section>
        <div className="sp-wrap sp-center">
          <span className="kicker">Why Our Approach Is Different</span>
          <h2 className="section-title">We Focus on Why Symptoms Happen</h2>
          <p className="section-sub">
            Many treatment approaches focus on managing symptoms as they appear.
          </p>
          <p className="section-sub" style={{ marginTop: 14 }}>
            At Recoup Health, we focus on understanding why those symptoms are
            happening in the first place. By combining specialist expertise,
            comprehensive assessment, and interdisciplinary care, we aim to help you:
          </p>
          <ul className="sp-check-list" style={{ maxWidth: 520, margin: '32px auto 0', textAlign: 'left' }}>
            {OUTCOMES.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
              hypermobility care at Recoup Health. Every treatment plan is
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
