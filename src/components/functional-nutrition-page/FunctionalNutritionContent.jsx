import React from 'react'
import { Link } from 'react-router-dom'
import {
  Apple,
  Check,
  Utensils,
} from 'lucide-react'
import useReveal from '../../hooks/useReveal'

const SYMPTOMS = [
  'Fatigue',
  'Digestive discomfort',
  'Bloating',
  'Brain fog',
  'Weight that won\'t budge',
  'Hormonal imbalance',
  'Low immunity',
]

const UNDERSTAND_ITEMS = [
  'Your health history',
  'Your symptoms',
  'Your eating habits',
  'Your digestion',
  'Your lifestyle',
  'Your sleep and stress',
  'Your health goals',
]

const JOURNEY = [
  {
    label: 'Step 1',
    title: 'Understand',
    text: 'We listen to your health story, symptoms, lifestyle, and goals.',
  },
  {
    label: 'Step 2',
    title: 'Assess',
    text: 'Where appropriate, we combine nutritional assessments with clinical evaluations and laboratory findings.',
  },
  {
    label: 'Step 3',
    title: 'Personalize',
    text: 'We create practical nutrition recommendations that fit your health, culture, lifestyle, and daily routine.',
  },
  {
    label: 'Step 4',
    title: 'Support',
    text: 'Through regular follow-ups and health coaching, we help you build healthy habits that last.',
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

const GOALS = [
  { goal: 'More Energy', help: 'Support healthy energy production throughout the day.' },
  { goal: 'Better Digestion', help: 'Improve gut health and nutrient absorption.' },
  { goal: 'Healthy Metabolism', help: 'Support balanced blood sugar and metabolic health.' },
  { goal: 'Hormonal Wellbeing', help: 'Provide nutritional support for healthy hormone function.' },
  { goal: 'Reduced Inflammation', help: 'Encourage food choices that support healthy inflammatory responses.' },
  { goal: 'Stronger Immunity', help: 'Build nutritional foundations that support immune resilience.' },
  { goal: 'Better Recovery', help: 'Support tissue repair and physical recovery.' },
  { goal: 'Long-term Wellness', help: 'Develop sustainable nutrition habits for lifelong health.' },
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
  'Functional Medicine',
  'Lifestyle Medicine',
  'Nutrition',
  'Ayurveda',
  'Naturopathy',
  'Physiotherapy',
  'Psychology',
  'Rehabilitation',
  'Health Coaching',
]

const PERSONAL_LIST = [
  'Your symptoms',
  'Your lifestyle',
  'Your health history',
  'Your goals',
  "Your body's unique needs",
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

export default function FunctionalNutritionContent() {
  return (
    <>
      {/* Hero */}
      <Section className="sp-hero">
        <div className="sp-wrap sp-hero-grid">
          <div>
            <span className="kicker">Functional Nutrition at RECOUP Health</span>
            <h1>
              Nourish Better. Live Better. <em>Feel Better.</em>
            </h1>
            <p className="sp-hero-sub">
              Personalized nutrition designed around your body, your lifestyle, and
              your health goals.
            </p>
            <p className="sp-hero-support">
              Food is more than fuel. Every meal influences how your body produces
              energy, supports digestion, balances hormones, strengthens immunity,
              and recovers from daily stress.
            </p>
            <p className="sp-hero-support">
              At RECOUP Health, we combine Functional Nutrition, Functional
              Medicine, and Lifestyle Medicine to understand your unique health
              needs and create personalized nutrition strategies that support
              lasting wellbeing.
            </p>
            <p className="sp-hero-support">
              Whether you&rsquo;re looking to improve your energy, optimize your
              metabolism, support a chronic health condition, or simply feel your
              best, we&rsquo;re here to help you make informed choices that work
              for your body.
            </p>
            <div className="sp-cta-row">
              <Link
                className="btn btn-primary"
                to="/contact?from=functional-nutrition&section=hero"
              >
                Book Your Functional Nutrition Consultation
              </Link>
            </div>
          </div>
          <figure className="sp-hero-figure">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=75&auto=format&fit=crop"
              alt="Fresh whole foods supporting personalized nutrition"
            />
          </figure>
        </div>
      </Section>

      {/* Eating healthy but not feeling better */}
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
          <div className="sp-check-card">
            <h3>Yet you still experience:</h3>
            <ul className="sp-check-list">
              {SYMPTOMS.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Body is unique */}
      <Section className="sp-statement">
        <div className="sp-wrap sp-statement-grid">
          <div className="sp-statement-text">
            <span className="kicker">Personalized by Design</span>
            <h2 className="section-title">
              Your Body Is Unique. Shouldn&rsquo;t Your Nutrition Be Too?
            </h2>
            <p>
              Imagine two people eating exactly the same meal. One feels energized.
              The other feels tired, bloated, or hungry again an hour later.
            </p>
            <p>
              The difference isn&rsquo;t the food. It&rsquo;s how each person&rsquo;s
              body responds to it. Your metabolism, gut health, hormones, stress,
              sleep, lifestyle, and medical history all influence how nutrients are
              absorbed, processed, and used.
            </p>
            <p>
              Instead of asking, &ldquo;What&rsquo;s the best diet?&rdquo; we ask,
              &ldquo;What&rsquo;s the right nutrition for you?&rdquo;
            </p>
            <p>
              <strong>Because when nutrition is personalized, better health becomes possible.</strong>
            </p>
          </div>
          <div className="sp-statement-figure">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=75&auto=format&fit=crop"
              alt="Colorful plate of nutritious whole foods"
            />
          </div>
        </div>
      </Section>

      {/* Every meal */}
      <Section>
        <div className="sp-wrap sp-center">
          <span className="kicker">Food as Medicine</span>
          <h2 className="section-title">
            Every Meal Is an Opportunity to Support Your Health
          </h2>
          <p className="section-sub">
            Food does far more than satisfy hunger. It provides the nutrients your
            body needs to produce energy, regulate inflammation, maintain healthy
            hormones, support immunity, nourish your gut microbiome, and repair
            tissues.
          </p>
          <p className="section-sub" style={{ marginTop: 16 }}>
            Research also continues to show that nutrition and lifestyle influence
            how our genes function throughout life. While we can&rsquo;t change our
            DNA, our everyday choices can influence how our bodies express their
            genetic potential.
          </p>
          <p className="section-sub" style={{ marginTop: 16 }}>
            That&rsquo;s why Functional Nutrition isn&rsquo;t focused on restrictive
            diets. It&rsquo;s focused on helping your body function at its best.
          </p>
        </div>
      </Section>

      {/* Imagine if */}
      <Section className="sp-narrative">
        <div className="sp-wrap">
          <span className="kicker kicker-light">Designed Around You</span>
          <h2 className="section-title">
            Imagine If Your Nutrition Plan Was Designed Around You
          </h2>
          <p>
            Not your age. Not your weight. Not the latest food trend.
          </p>
          <p>
            But your symptoms. Your lifestyle. Your health history. Your goals.
            Your body&rsquo;s unique needs.
          </p>
          <div className="sp-chips">
            {PERSONAL_LIST.map((item) => (
              <span className="sp-chip" key={item} style={{ background: 'rgba(255,255,255,0.14)', color: '#fff' }}>
                {item}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            That&rsquo;s exactly what Functional Nutrition is designed to do. At
            RECOUP Health, every recommendation begins with understanding you
            before recommending what to eat.
          </p>
        </div>
      </Section>

      {/* Before we recommend */}
      <Section className="sp-trust">
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">First, Understanding</span>
            <h2 className="section-title">
              Before We Recommend Food, We First Understand You
            </h2>
            <p className="section-sub">
              Meaningful nutrition starts with meaningful understanding. Before
              creating your personalized nutrition strategy, we take time to
              understand:
            </p>
          </div>
          <ul className="sp-included-list">
            {UNDERSTAND_ITEMS.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sp-center" style={{ marginTop: 28, color: '#4b5563' }}>
            Where appropriate, we also consider body composition, laboratory
            findings, and clinical assessments to gain a more complete picture of
            your health.
          </p>
        </div>
      </Section>

      {/* Journey 4 steps */}
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
          <div className="sp-steps-row">
            {JOURNEY.map((step) => (
              <div className="sp-step-card" key={step.title}>
                <strong>{step.label}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Integrated care */}
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

      {/* Goals */}
      <Section>
        <div className="sp-wrap">
          <div className="sp-center">
            <span className="kicker">What You Can Achieve</span>
            <h2 className="section-title">
              What Could Better Nutrition Help You Achieve?
            </h2>
            <p className="section-sub">
              Instead of focusing on conditions, we focus on helping you feel your
              best.
            </p>
          </div>
          <div className="sp-goals">
            <div className="sp-goal" style={{ background: 'var(--green-100)', border: 'none' }}>
              <strong>Your Goal</strong>
              <span style={{ fontWeight: 700, color: 'var(--ink)' }}>How Functional Nutrition Can Help</span>
            </div>
            {GOALS.map(({ goal, help }) => (
              <div className="sp-goal" key={goal}>
                <strong>{goal}</strong>
                <span>{help}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Future of healthcare */}
      <Section className="sp-narrative">
        <div className="sp-wrap">
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
      </Section>

      {/* Why choose */}
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

      {/* Meet the team */}
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
            {TEAM.map((item) => (
              <div className="sp-team-item" key={item}>
                <Utensils style={{ width: 18, height: 18, margin: '0 auto 8px', display: 'block', opacity: 0.7 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="sp-final">
        <div className="sp-wrap sp-final-grid">
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
            <p className="sp-final-sub">
              Your journey towards better health starts with understanding your
              body.
            </p>
          </div>
          <div className="sp-final-card">
            <div className="sp-card-icon" style={{ marginBottom: 16 }}>
              <Apple />
            </div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              Your journey starts with understanding your body.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: 20 }}>
              Book a Functional Nutrition consultation with our team.
            </p>
            <div className="sp-cta-row">
              <Link
                className="btn btn-primary"
                to="/contact?from=functional-nutrition&section=final_cta"
              >
                Book Your Functional Nutrition Consultation
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
