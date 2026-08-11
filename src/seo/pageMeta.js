/** Default document meta when no route-specific entry matches */
import { getBlogSeoFromStorage, loadHomeMeta } from '../lib/siteStorage';

export const defaultPageMeta = {
  title: 'Recoup Health | Rehabilitation & Chronic Disease Care, Bangalore',
  description:
    "Recoup Health offers root-cause rehabilitation for chronic pain, lifestyle diseases & mental health in Bangalore. Led by Dr. Deepak Sharan. Book a consultation today.",
};

/**
 * Full pathname → { title, description } (matches react-router `location.pathname`).
 * Trailing slashes are normalized in `getPageMeta`.
 */
export const pageMetaByPath = {
  '/': {
    title: 'Recoup Health | Rehabilitation & Chronic Disease Care, Bangalore',
    description:
      'Recoup Health offers root-cause rehabilitation for chronic pain, lifestyle diseases & mental health in Bangalore. Led by Dr. Deepak Sharan. Book a consultation today.',
  },
  '/contact': {
    title: 'Book a Consultation | Recoup Health Bangalore',
    description:
      "Get in touch with Recoup Health's team of integrative medicine specialists in Bangalore. Book an in-person or online consultation for chronic pain, gut health, mental wellness & more.",
  },
  '/blog': {
    title: 'Health & Wellness Blog | Expert Insights by Recoup Health',
    description:
      "Explore evidence-based articles on chronic pain, gut health, mental wellness, nutrition & integrative medicine — written by Recoup Health's expert team in Bangalore.",
  },
  '/services': {
    title: 'Services & Healing Ecosystems | Recoup Health Bangalore',
    description:
      'Explore Recoup Health’s integrated healing ecosystems — regenerative medicine, gut health, mind-body therapies, rehabilitation, diagnostics, nutrition, Ayurveda & more in Bangalore.',
  },
  '/conditions': {
    title: 'Conditions We Treat | Integrative Rehab Bangalore | Recoup',
    description:
      'Recoup Health treats 30+ chronic conditions — from chronic pain and gut disorders to mental health and neurological rehab — using a personalised, root-cause approach in Bangalore.',
  },
  '/conditions/chronic-pain': {
    title: 'Chronic Pain Treatment in Bangalore | Recoup Health',
    description:
      "Struggling with chronic pain? Recoup Health's integrative pain management program in Bangalore targets the root cause — not just the symptoms. Book a consultation today.",
  },
  '/conditions/mental-health': {
    title: 'Anxiety & Depression Treatment in Bangalore | Recoup Health',
    description:
      "Recoup's 4R mental health program treats anxiety, depression & burnout by addressing gut-brain health, trauma & hormones. Holistic, personalised care. Online & in-person available.",
  },
  '/conditions/gastrointestinal-program': {
    title: 'GERD & Gut Health Treatment in Bangalore | Recoup Health',
    description:
      'Recoup offers root-cause treatment for GERD, SIBO & digestive disorders using integrative medicine, dietary therapy & Ayurveda. Lasting gut health relief in Bangalore.',
  },
  '/conditions/stroke-rehabilitation': {
    title: 'Stroke Rehabilitation in Bangalore | Recoup Health',
    description:
      'Recoup Health provides personalised stroke rehabilitation in Bangalore — combining physiotherapy, speech therapy, occupational therapy & functional medicine for full recovery.',
  },
  '/conditions/parkinsons-disease': {
    title: "Parkinson's Disease Treatment & Rehab | Recoup Health",
    description:
      "Recoup's integrative Parkinson's program combines functional medicine, physiotherapy & nutrition to slow progression and improve quality of life. Clinics in Bangalore.",
  },
  '/conditions/multiple-sclerosis': {
    title: 'Multiple Sclerosis Rehabilitation in Bangalore | Recoup',
    description:
      'Evidence-based MS rehabilitation at Recoup Health, Bangalore. We address root causes with functional medicine, neuro-physiotherapy & personalised nutrition for better outcomes.',
  },
  '/conditions/immune-health-program': {
    title: 'Autoimmune Disease Treatment in Bangalore | Recoup Health',
    description:
      'Recoup Health offers holistic, root-cause treatment for autoimmune diseases — combining functional medicine, Ayurveda & personalised nutrition. Consult our specialists in Bangalore.',
  },
  '/conditions/cardiometabolic-program': {
    title: 'Cardiac & Cardiometabolic Rehabilitation | Recoup Health',
    description:
      "Recoup's cardiometabolic program offers integrative cardiac rehabilitation in Bangalore for heart disease, diabetes & metabolic conditions. Personalised plans. Book today.",
  },
  '/conditions/diabetes-program': {
    title: 'Diabetes Management & Reversal Program | Recoup Health',
    description:
      "Recoup Health's integrative diabetes program in Bangalore addresses root causes through nutrition, lifestyle medicine & functional testing. Go beyond medication management.",
  },
  '/conditions/rheumatological-rehabilitation': {
    title: 'Rheumatology & Arthritis Rehab in Bangalore | Recoup',
    description:
      'Treat arthritis, osteoarthritis & rheumatic conditions without surgery at Recoup Health, Bangalore. Our integrative approach reduces pain and restores mobility naturally.',
  },
  '/conditions/smoking-cessation-program': {
    title: 'Quit Smoking Program in Bangalore | Recoup Health',
    description:
      "Recoup's holistic smoking cessation program in Bangalore combines behavioural therapy, NRT & nutrition support to help you quit for good. Personalised quit plan. Start today.",
  },
  '/conditions/weight-management': {
    title: 'Integrative Weight Management Program | Recoup Health',
    description:
      "Recoup Health's personalised weight management program in Bangalore targets hormonal imbalances, gut health & lifestyle factors — not just calories. Book a consultation today.",
  },
  '/conditions/sleep-circadian-rhythm-clinic': {
    title: 'Sleep & Circadian Rhythm Clinic in Bangalore | Recoup',
    description:
      "Struggling with insomnia or disrupted sleep? Recoup's integrative sleep clinic in Bangalore identifies root causes and restores healthy sleep naturally. Book your consultation.",
  },
  '/conditions/alzheimers-cognitive-decline': {
    title: "Alzheimer's & Cognitive Decline Rehab | Recoup Health",
    description:
      "Recoup Health offers integrative care for Alzheimer's and cognitive decline — addressing inflammation, nutrition, sleep & brain health to slow progression. Clinics in Bangalore.",
  },
  '/conditions/cancer-rehabilitation': {
    title: 'Cancer Rehabilitation Program in Bangalore | Recoup Health',
    description:
      "Recoup's cancer rehabilitation program supports recovery through personalised physiotherapy, nutrition, mental health care & functional medicine. Compassionate care in Bangalore.",
  },
  '/conditions/osteoporosis-rehabilitation': {
    title: 'Osteoporosis Treatment & Rehabilitation | Recoup Health',
    description:
      'Recoup Health provides integrative osteoporosis rehabilitation in Bangalore — combining bone-strengthening therapy, nutrition & lifestyle medicine to reduce fracture risk.',
  },
  '/conditions/hormonal-rebalance-program': {
    title: 'Hormonal Rebalancing Program in Bangalore | Recoup Health',
    description:
      "Recoup's hormone rebalancing program treats thyroid issues, PCOS & adrenal fatigue using functional medicine and personalised care. Address the root cause in Bangalore.",
  },
  '/conditions/traumatic-brain-injury': {
    title: 'Traumatic Brain Injury Rehabilitation | Recoup Health',
    description:
      'Recoup Health offers comprehensive TBI rehabilitation in Bangalore using neuro-physiotherapy, cognitive rehab & integrative medicine for full functional recovery.',
  },
  '/conditions/spinal-deformity-rehabilitation': {
    title: 'Spinal Deformity & Scoliosis Rehab | Recoup Health Bangalore',
    description:
      'Recoup Health treats scoliosis and spinal deformities with non-surgical rehabilitation — posture correction, physiotherapy & functional medicine. Clinics in Bangalore.',
  },
  '/conditions/hypermobility-rehabilitation': {
    title: 'Hypermobility & EDS Rehabilitation in Bangalore | Recoup',
    description:
      'Recoup Health provides expert hypermobility and Ehlers-Danlos Syndrome rehabilitation in Bangalore — joint stability, myofascial therapy & personalised nutrition.',
  },
  '/conditions/autism-spectrum-disorders': {
    title: 'Autism Spectrum Disorder Therapy in Bangalore | Recoup',
    description:
      "Recoup Health's integrative autism program in Bangalore addresses sensory, behavioural & developmental needs through a personalised, interdisciplinary therapy approach.",
  },
  '/conditions/infertility-program': {
    title: 'Integrative Infertility Program in Bangalore | Recoup Health',
    description:
      "Recoup's holistic infertility program addresses hormonal imbalances, gut health & lifestyle factors affecting fertility. Personalised, root-cause care in Bangalore.",
  },
  '/conditions/longevity-program': {
    title: 'Longevity & Healthy Ageing Program | Recoup Health Bangalore',
    description:
      "Recoup Health's longevity program uses advanced biomarker testing and personalised medicine to help you live healthier, longer. Preventive care at its best in Bangalore.",
  },
  '/conditions/respiratory-health': {
    title: 'Respiratory Health & Rehab Program | Recoup Health Bangalore',
    description:
      'Recoup Health offers integrative respiratory rehabilitation for asthma, COPD & chronic breathing disorders in Bangalore. Root-cause treatment for lasting lung health.',
  },
  '/conditions/geriatrics-program': {
    title: 'Geriatric Care & Rehabilitation Program | Recoup Health',
    description:
      "Recoup's geriatrics program provides personalised, holistic care for older adults in Bangalore — addressing mobility, cognition, nutrition & chronic disease management.",
  },
  '/conditions/chronic-inflammation-program': {
    title: 'Chronic Inflammation Treatment in Bangalore | Recoup Health',
    description:
      'Recoup Health identifies and treats chronic inflammation at the root — using functional medicine, anti-inflammatory nutrition & integrative therapies in Bangalore.',
  },
  '/conditions/stress-positive-relationships-program': {
    title: 'Stress Management & Wellbeing Program | Recoup Health',
    description:
      "Recoup's stress and relationships program helps you manage burnout, emotional health & lifestyle stress through evidence-based, integrative care in Bangalore.",
  },
  '/conditions/mold-toxicity-program': {
    title: 'Mold Toxicity & Environmental Health Program | Recoup',
    description:
      'Recoup Health treats mold toxicity and environmental illness using functional medicine and detox therapies — a specialised, root-cause approach available in Bangalore.',
  },
  '/conditions/bioenergetics-program': {
    title: 'Bioenergetics & Cellular Health Program | Recoup Health',
    description:
      "Recoup's bioenergetics program improves cellular energy, mitochondrial health & overall vitality using advanced integrative medicine. Personalised care in Bangalore.",
  },
  '/conditions/oral-health': {
    title: 'Integrative Oral Health Program in Bangalore | Recoup',
    description:
      'Recoup Health connects oral health to whole-body wellness — addressing systemic causes of dental issues through integrative and functional medicine in Bangalore.',
  },
  '/conditions/school-health': {
    title: "School Health & Children's Wellness Program | Recoup",
    description:
      "Recoup Health's school health program supports children's physical, mental & developmental wellbeing in Bangalore through personalised, integrative care.",
  },
  '/conditions/travel-medicine-clinic': {
    title: 'Travel Medicine Clinic in Bangalore | Recoup Health',
    description:
      "Recoup's travel medicine clinic in Bangalore provides pre-travel consultations, vaccinations, health risk assessments & post-travel care for safe international travel.",
  },
  '/conditions/primary-care': {
    title: 'Integrative Primary Care in Bangalore | Recoup Health',
    description:
      "Recoup Health's primary care goes beyond routine check-ups — combining functional medicine and personalised care to keep you healthy long-term. Book in Bangalore.",
  },
  '/conditions/rasap': {
    title: 'RASAP Programme | Recoup Health Bangalore',
    description:
      "Recoup's RASAP programme offers a comprehensive, personalised approach to rehabilitation — integrating physical, mental & lifestyle therapies for complex health conditions.",
  },
  '/ephr': {
    title: 'Entire Person Health Record (EPHR) | Recoup Health',
    description:
      'EPHR is a panoptic health scorecard providing a complete view of your well-being through 200+ data points, lifestyle factors, and lab results in Bangalore.',
  },
  '/hypermobility': {
    title: 'Hypermobility & EDS Care | Recoup Health Bangalore',
    description:
      'Specialized diagnosis and treatment for Hypermobility Spectrum Disorders (HSD) and Ehlers-Danlos Syndrome (EDS). Root-cause care led by Dr. Deepak Sharan in Bangalore.',
  },
  '/functional-nutrition': {
    title: 'Functional Nutrition | Recoup Health Bangalore',
    description:
      'Personalized Functional Nutrition at Recoup Health — nutrition strategies designed around your body, lifestyle, and goals, integrated with Functional and Lifestyle Medicine.',
  },
  '/second-bell': {
    title: 'Second Bell | Child & Adolescent Mental Health | Recoup',
    description:
      'Second Bell by Recoup Health is a specialised child and adolescent mental health programme in Bangalore — supporting emotional wellbeing, development & family resilience.',
  },
  '/second-bell/framework': {
    title: 'Our Framework | Second Bell by Recoup Health',
    description:
      "Discover the evidence-based framework behind Second Bell — Recoup Health's child mental health programme addressing emotional, behavioural & developmental needs in Bangalore.",
  },
  '/second-bell/program': {
    title: 'The Programme | Second Bell by Recoup Health Bangalore',
    description:
      "Explore Second Bell's structured mental health programme for children and adolescents in Bangalore — personalised care for anxiety, ADHD, behavioural challenges & more.",
  },
  '/second-bell/interventions': {
    title: 'Interventions & Therapies | Second Bell by Recoup Health',
    description:
      'Second Bell uses a range of evidence-based interventions including CBT, play therapy, family counselling & mindfulness for children and adolescents in Bangalore.',
  },
  '/second-bell/how-it-works': {
    title: 'How It Works | Second Bell by Recoup Health',
    description:
      "Learn how Second Bell's step-by-step process assesses, plans & delivers personalised mental health support for your child. Simple, compassionate & expert-led in Bangalore.",
  },
  '/second-bell/rshs': {
    title: 'RSHS – School Health Services | Second Bell by Recoup',
    description:
      "Recoup's RSHS programme brings mental health and wellness support directly into schools in Bangalore — helping children thrive academically, emotionally and socially.",
  },
  '/blog/understanding-rsi': {
    title: 'Understanding RSI: Causes, Symptoms & Treatment | Recoup',
    description:
      "Learn what causes repetitive strain injury (RSI), how to spot symptoms early, and how Recoup's integrative approach helps you recover and prevent recurrence in Bangalore.",
  },
  '/blog/anti-inflammatory-diet': {
    title: 'Anti-Inflammatory Diet Guide for Chronic Pain | Recoup Health',
    description:
      'Discover how an anti-inflammatory diet can reduce chronic pain, improve gut health & support autoimmune recovery. Expert nutrition advice from Recoup Health, Bangalore.',
  },
  '/blog/mind-body-connection': {
    title: 'The Mind-Body Connection: How Stress Affects Your Health',
    description:
      "Explore the science behind the mind-body connection and learn how chronic stress drives physical illness. Insights from Recoup Health's integrative medicine specialists.",
  },
  '/blog/posture-ergonomics': {
    title: 'Posture & Ergonomics: Fix Pain at the Source | Recoup Health',
    description:
      "Poor posture and bad ergonomics are leading causes of chronic pain. Learn how Recoup's ergonomic assessments and posture correction therapy help you heal in Bangalore.",
  },
};

export function getPageMeta(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';

  if (normalized === '/') {
    const storedHome = loadHomeMeta();
    if (storedHome) return storedHome;
    return pageMetaByPath['/'];
  }

  if (normalized.startsWith('/blog/')) {
    const slug = normalized.slice('/blog/'.length);
    if (slug) {
      const fromPost = getBlogSeoFromStorage(slug);
      if (fromPost) return fromPost;
    }
    if (pageMetaByPath[normalized]) return pageMetaByPath[normalized];
    return pageMetaByPath['/blog'];
  }

  if (pageMetaByPath[normalized]) {
    return pageMetaByPath[normalized];
  }
  if (normalized.startsWith('/conditions/')) {
    return pageMetaByPath['/conditions'];
  }
  if (normalized.startsWith('/second-bell')) {
    return pageMetaByPath['/second-bell'];
  }
  return defaultPageMeta;
}
