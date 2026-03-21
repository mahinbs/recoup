import { chronicPainHtml } from './chronicPainContent.js';
import { diabetesProgramHtml } from './diabetesProgramContent.js';
import { gastrointestinalProgramHtml } from './gastrointestinalProgramContent.js';
import { geriatricsProgramHtml } from './geriatricsProgramContent.js';
import { hormonalRebalanceProgramHtml } from './hormonalRebalanceProgramContent.js';
import { hypermobilityRehabilitationHtml } from './hypermobilityRehabilitationContent.js';
import { immuneHealthProgramHtml } from './immuneHealthProgramContent.js';
import { infertilityProgramHtml } from './infertilityProgramContent.js';
import { longevityProgramHtml } from './longevityProgramContent.js';
import { mentalHealthProgramHtml } from './mentalHealthProgramContent.js';
import { moldToxicityProgramHtml } from './moldToxicityProgramContent.js';
import { multipleSclerosisProgramHtml } from './multipleSclerosisProgramContent.js';
import { oralHealthProgramHtml } from './oralHealthProgramContent.js';
import { osteoporosisRehabilitationProgramHtml } from './osteoporosisRehabilitationProgramContent.js';
import { parkinsonsDiseaseProgramHtml } from './parkinsonsDiseaseProgramContent.js';
import { primaryCareProgramHtml } from './primaryCareProgramContent.js';
import { respiratoryHealthProgramHtml } from './respiratoryHealthProgramContent.js';
import { rheumatologicalRehabilitationProgramHtml } from './rheumatologicalRehabilitationProgramContent.js';
import { schoolHealthProgramHtml } from './schoolHealthProgramContent.js';
import { sleepCircadianRhythmClinicProgramHtml } from './sleepCircadianRhythmClinicProgramContent.js';
import { smokingCessationProgramHtml } from './smokingCessationProgramContent.js';
import { spinalDeformityRehabilitationProgramHtml } from './spinalDeformityRehabilitationProgramContent.js';
import { stressPositiveRelationshipsProgramHtml } from './stressPositiveRelationshipsProgramContent.js';
import { strokeRehabilitationProgramHtml } from './strokeRehabilitationProgramContent.js';
import { traumaticBrainInjuryProgramHtml } from './traumaticBrainInjuryProgramContent.js';
import { travelMedicineClinicProgramHtml } from './travelMedicineClinicProgramContent.js';
import { weightManagementProgramHtml } from './weightManagementProgramContent.js';

export const conditions = [
  {
    title: "Alcohol and Substance Abuse Program",
    fullTitle: "RECOUP Alcohol and Substance Abuse Program (RASAP)",
    desc: "RECOUP Alcohol and Substance Abuse Program (RASAP) aims to address these pressing issues through comprehensive treatment and support services tailored to the needs of individuals struggling with substance use. By providing access to counselling, rehabilitation, and community outreach, our program seeks to reduce the prevalence of substance abuse and promote healthier lifestyles across India.",
    slug: "rasap",
    cover: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Alcohol and Substance Abuse Program (RASAP)</h2>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Current Status of Alcohol and Substance Use in India</h3>
    <p class="mb-6">According to the Ministry of Social Justice and Empowerment's 2019 National Survey on the Extent and Pattern of Substance Use in India:</p>
    <ul class="list-disc pl-6 space-y-3">
      <li>Alcohol Use: Approximately 16 crore people (14.6%) aged 10 to 75 years are current alcohol users, with about 5.2% classified as alcohol dependents.</li>
      <li>Cannabis Use: Around 3.1 crore individuals (2.8%) are cannabis users, while 72 lakh (0.66%) suffer from cannabis-related problems.</li>
      <li>Opioid Use: The prevalence of opioid users stands at 2.06%, with nearly 0.55% (60 lakh) requiring treatment services.</li>
      <li>Sedative Use: Approximately 1.18 crore (1.08%) are current non-medical users of sedatives.</li>
      <li>Inhalant Use: 1.7% of children and adolescents are reported as inhalant users, compared to 0.58% of adults. Nearly 18 lakh children need help with inhalant use.</li>
      <li>Injecting Drug Use: An estimated 8.5 lakh people are identified as people who inject drugs (PWID).</li>
    </ul>
    <p class="mt-8">RECOUP Alcohol and Substance Abuse Program (RASAP) aims to address these pressing issues through comprehensive treatment and support services tailored to the needs of individuals struggling with substance use. By providing access to counselling, rehabilitation, and community outreach, our program seeks to reduce the prevalence of substance abuse and promote healthier lifestyles across India.</p>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Limitations of Conventional Approaches</h3>
    <p>What sets RECOUP apart from conventional approaches is our holistic methodology, which integrates lifestyle medicine, functional medicine, nutrition, psychology, and yoga therapy. Our team collaborates to create personalized treatment plans to overcome addiction and promote overall well-being and healthier lifestyles. By fostering a supportive environment, we empower individuals to heal physically and mentally, paving the way for long-term recovery.</p>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP Interdisciplinary 4R Protocol for Substance Abuse Recovery</h3>
    <p class="mb-8">At RECOUP, we implement our unique 4R Protocol to provide thorough support for individuals seeking recovery from substance abuse.</p>

    <h4 class="text-xl font-bold text-primary-dark mb-3">R1: Immediate Support</h4>
    <p class="font-semibold text-primary-dark mb-2">Are You Considering Quitting?</p>
    <p class="mb-6">We are dedicated to guiding you every step of the way on your journey to sobriety. Our approach utilizes the 5 A's and 5 R's frameworks for effective motivation and support.</p>
    <p class="font-semibold text-primary-dark mb-2">The 5 A's of Substance Abuse Recovery include:</p>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Ask: Engage in an open discussion about your substance use history and previous attempts to quit.</li>
      <li>Advise: Educate you about the health benefits of recovery and its positive impacts on your life.</li>
      <li>Assess: Evaluate your readiness to quit and help you set realistic personal goals.</li>
      <li>Assist: Provide tailored resources and coping strategies that align with your needs.</li>
      <li>Arrange: Schedule regular follow-ups to monitor your progress and adjust your recovery plan as necessary.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">The 5 R's of Motivation are:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Relevance: Help you connect your motivation to personal goals related to health, relationships, or career aspirations.</li>
      <li>Risks: Highlight the health risks associated with continued substance use to reinforce your desire to quit.</li>
      <li>Rewards: Celebrate sobriety's positive changes, such as improved health and relationships.</li>
      <li>Roadblocks: Identify potential challenges in your recovery journey and collaboratively develop strategies to overcome them.</li>
      <li>Repetition: Continuously reinforce your motivation and commitment through regular encouragement and reminders of your goals.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mt-10 mb-3">R2: Personalized Recovery Plan</h4>
    <p class="font-semibold text-primary-dark mb-2">Comprehensive Strategies for Recovery include:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Set a Quit Date: Choose a specific date within two weeks to commit to sobriety.</li>
      <li>Identify Triggers: Recognize situations or emotions that lead to substance use.</li>
      <li>Coping Strategies: Practice mindfulness, engage in physical activities, or journal your experiences.</li>
      <li>Support Options: Join support groups or find a recovery buddy for mutual encouragement.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mt-10 mb-3">R3: Comprehensive Support</h4>
    <p class="font-semibold text-primary-dark mb-2">Collaborative Care Team</p>
    <p class="mb-4">Our diverse team is dedicated to supporting you at every stage of your recovery journey:</p>
    <ul class="list-disc pl-6 space-y-3">
      <li>Psychologists: Provide counseling and behavioral therapies tailored to your needs, addressing underlying emotional factors and developing coping strategies.</li>
      <li>Lifestyle Medicine/Functional Medicine Physicians: Offer medical support and treatment options focusing on holistic health, addressing the root causes of substance use through lifestyle changes and integrative practices.</li>
      <li>Nutritionists: Provide dietary guidance and  personalized, phase-wise nutrition interventions to stabilize mood, reduce cravings, and rebuild metabolic and neuroendocrine resilience essential for long-term recovery.</li>
      <li>Yoga Therapists: Facilitate mind-body practices that enhance relaxation and mindfulness, reducing stress and cravings while promoting physical fitness and emotional balance.</li>
      <li>Ayurveda Physicians: Offer holistic healing approaches that include personalized dietary recommendations, herbal treatments, and lifestyle modifications to restore balance and promote wellness.</li>
      <li>Health Coaches: Help set goals and maintain accountability throughout your recovery journey.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mt-10 mb-3">R4: Emphasizing Regeneration for Sustainable Change</h4>
    <p class="font-semibold text-primary-dark mb-2">Ongoing Support for Long-Term Success includes:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Regular Follow-Ups: Weekly check-ins initially, transitioning to bi-weekly and monthly follow-ups.</li>
      <li>Biannual Reassessment: Comprehensive reviews every six months to evaluate progress and adjust strategies.</li>
      <li>Self-Reported Assessments: Confirm sobriety status and discuss triggers.</li>
      <li>Behavioral and Health Assessments: Monitor overall health and withdrawal symptoms.</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Unique Features of the RECOUP Program</h3>
    <p class="mb-4">The RECOUP Alcohol and Substance Abuse Program blends modern science and holistic healing approaches, focusing on:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Holistic Understanding: Examining psychological, emotional, and environmental factors in addiction.</li>
      <li>Personalized Interventions: Tailoring clinical interventions to individual needs.</li>
      <li>Building Resilience: Empowering participants through education and support.</li>
      <li>Preventing Substance-Related Health Issues: Addressing challenges to enhance overall well-being.</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Specialized Assessment Tracks for Substance Abuse Recovery</h3>
    <p class="mb-4">Our specialized assessment tracks evaluate various health aspects related to substance use and recovery:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Cognitive Function Index: Assess cognitive functions affected by substance use through memory recall tests and attention span evaluations.</li>
      <li>Metabolic Assessment: Evaluate metabolic health indicators with blood tests and body composition analysis.</li>
      <li>Hormonal Assessment: Analyze hormonal changes associated with substance use, including cortisol and thyroid function tests.</li>
      <li>Psychological Assessment: Identify emotional factors contributing to substance use through standardized questionnaires.</li>
      <li>Nutritional Assessment: Evaluate dietary habits and their influence on recovery through body composition analysis, nutrition physical examination and dietary recall analysis.</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Who Would Benefit from RASAP?</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Individuals facing alcohol or substance dependence.</li>
      <li>Those seeking to improve their overall health and well-being.</li>
      <li>Anyone looking for support in making healthier lifestyle choices.</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RASAP Team</h3>
    <p class="mb-4">Our dedicated team includes:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Rehabilitation Physicians</li>
      <li>Psychiatrist</li>
      <li>Ayurveda Physicians</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Nutritionists</li>
      <li>Clinical Psychologists</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Health Coaches</li>
      <li>Nurses</li>
      <li>Patient Care Coordinators</li>
      <li>Other professionals, as required</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Book Your Slot:</h3>
    <p class="font-semibold text-primary-dark mb-2">Webinar Series (90-Minute Session)</p>
    <p class="font-semibold text-primary-dark mb-2">60-Minute Learning:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Understanding Addiction: Causes and Impacts</li>
      <li>The Recovery Journey: What to Expect</li>
      <li>Benefits of the RECOUP Substance Abuse Program</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">30-Minute Q&amp;A:</p>
    <p>Engage with our experts and get your questions answered!</p>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Self-Enrollment Form</h3>
    <p class="mb-8">Take the first step toward a healthier, sober life. Contact us today to self-enroll or for more information about our services!</p>
    <a href="/contact" class="inline-block bg-primary !text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 no-underline">Contact Us Today</a>
  </section>
</div>
`,
  },
  {
    title: "Alzheimer's and Cognitive Decline",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Alzheimer's Disease (AD) and Cognitive Decline",
    desc: "Alzheimer's Disease (AD) is the most common cause of dementia worldwide, accounting for 60–80% of all cases. It currently affects over 55 million people globally, with one new case developing every 3 seconds (WHO, 2023; Alzheimer's Disease International, 2022).",
    slug: "alzheimers-cognitive-decline",
    cover: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Recoup Integrative Root-Cause Rehabilitation Program for Alzheimer's Disease (AD) and Cognitive Decline</h2>
    <p class="mb-4">Alzheimer's Disease (AD) is the most common cause of dementia worldwide, accounting for 60–80% of all cases. It currently affects over 55 million people globally, with one new case developing every 3 seconds (WHO, 2023; Alzheimer's Disease International, 2022). By 2050, the global burden is expected to rise to 139 million unless effective prevention strategies are implemented.</p>
    <p class="mb-4">In India, dementia prevalence is rising rapidly due to an aging population, urbanization, and changing lifestyle patterns. According to the Dementia in India Report (Alzheimer's and Related Disorders Society of India – ARDSI, 2020), 5.3 million Indians were estimated to be living with dementia in 2020; nearly 70% of these cases are Alzheimer's disease. The number is projected to triple by 2050, reaching nearly 15 million. Only 10% of people with dementia in India are currently diagnosed, and even fewer receive structured care.</p>
    <p class="mb-4">Alzheimer's is not merely a memory disorder but a multi-system, progressive brain failure driven by complex interactions between genetics, inflammation, metabolism, toxins, infections, lifestyle, and environment.</p>
    <p class="font-semibold text-primary-dark mb-2">Core Pathological Features of AD involve:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-6">
      <li>Misfolded Amyloid-Beta (Aβ) Plaque Accumulation disrupts neuronal communication and triggers oxidative stress (Hardy &amp; Selkoe, 2002).</li>
      <li>Hyperphosphorylated tau neurofibrillary tangles destabilize microtubules and impair axonal transport (Wang &amp; Mandelkow, 2016).</li>
      <li>Synaptic and Mitochondrial Dysfunction (Reddy &amp; Beal, 2008)</li>
      <li>Neuroinflammation and Microglial Activation damage healthy neurons (Heneka et al., 2015).</li>
      <li>Hippocampal shrinkage and Network Disintegration leading to cognitive and behavioral decline (Fox &amp; Schott, 2004).</li>
    </ol>
    <p class="mb-2">Emerging research identifies AD as a systems biology disorder. Contributing upstream drivers include:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-6">
      <li>Genetic Susceptibility: The ApoE4 allele, which promotes impaired amyloid clearance, insulin resistance, and blood-brain barrier (BBB) dysfunction, increases the risk of developing late-onset AD by up to 12-fold in carriers.</li>
      <li>Chronic Inflammation: Peripheral and central inflammation drives microglial activation and tau phosphorylation. Elevated hsCRP, IL-6, and TNF-α are predictive biomarkers of cognitive decline.</li>
      <li>Insulin Resistance and Type 3 Diabetes</li>
      <li>Toxins and Environmental Load: Heavy metals such as mercury, lead, and aluminum, as well as mold toxins and mycotoxins, can trigger neuroimmune dysfunction and cognitive impairment.</li>
      <li>Infectious Contributors: Herpes simplex virus type 1, Borrelia, Chlamydia pneumoniae, and Porphyromonas gingivalis have been implicated in amyloidogenic responses (Dominy et al., 2019).</li>
      <li>Gut-Brain Axis Dysfunction: Dysbiosis, increased intestinal permeability ("leaky gut"), and microbial endotoxins (LPS) promote systemic inflammation and microglial priming (Cattaneo et al., 2017).</li>
      <li>Sleep and Glymphatic Impairment: Sleep disruption impairs glymphatic clearance of Aβ and tau, accelerating neurodegeneration (Xie et al., 2013).</li>
    </ol>
    <p class="mb-4">Current FDA-approved drugs (donepezil, rivastigmine, galantamine, memantine) provide only temporary symptomatic relief without altering disease progression. Their benefits often wane within 6 to 12 months. Amyloid-targeting monoclonal antibodies (e.g., aducanumab, lecanemab) offer modest reduction in plaque burden, but with uncertain functional outcomes and high costs. There is no single curative therapy, and side effects are a concern.</p>
    <p class="mb-2">This forms the foundation of the Recoup 4R Integrative Root-Cause Rehabilitation Program for Alzheimer's Disease and Cognitive Decline, designed to:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Slow progression</li>
      <li>Restore function</li>
      <li>Improve quality of life</li>
      <li>Empower patients and caregivers</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Our Team</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Rehabilitation Physicians</li>
      <li>Orthopedic Surgeon</li>
      <li>Regenerative Medicine Physicians</li>
      <li>Functional and Lifestyle Medicine Physicians</li>
      <li>Ayurveda Physician</li>
      <li>Psychiatrist</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Speech Therapists</li>
      <li>Tai Chi and Qi Gong Therapists</li>
      <li>Alexander and Feldenkrais Teachers</li>
      <li>Orthotist and Prosthetist</li>
      <li>Clinical Psychologists</li>
      <li>Nutritionists</li>
      <li>Health Coaches</li>
      <li>Sleep and Circadian Health Experts</li>
      <li>Nurses</li>
      <li>Patient Care Coordinators</li>
      <li>Other professionals, as required</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">R1: Relief of Symptoms</h3>
    <p class="mb-6">Progressive memory loss, disorientation, sleep disturbances, mood changes, and reduced performance in daily activities mark the early phase of Alzheimer's. This phase focuses on stabilizing cognition, reducing neuropsychiatric symptoms, and maintaining independence in activities of daily living (ADLs).</p>
    <ol class="list-decimal pl-6 space-y-3">
      <li>Neuro-education: Education for patients and caregivers about disease progression, behavioral changes, communication strategies, and establishing structure and safety at home.</li>
      <li>Pharmacotherapy: Cholinesterase inhibitors (donepezil, rivastigmine, galantamine), NMDA receptor antagonist (memantine), SSRIs for depression/anxiety, melatonin or ramelteon for sleep regulation.</li>
      <li>Cognitive Stimulation Therapy (CST): Structured, evidence-based activities aimed at enhancing cognitive domains such as memory, attention, orientation, language, and executive function. Activities are conducted individually or in small groups, and may include storytelling, puzzles, categorization, music recall, and problem-solving games.</li>
      <li>Occupational Therapy: Retraining in ADLs, energy conservation, adaptive tools, and home safety modifications.</li>
      <li>Speech and Language Therapy: To train verbal memory, naming, fluency, and communication strategies; support expressive and receptive language.</li>
      <li>Physical Therapy: Aerobic exercises (e.g., walking, cycling) and Strength training to improve cardiovascular health, Fall Prevention strategies, Balance and flexibility routines tailored to the patient's ability.</li>
      <li>Aquatic Therapy: Rebuild neuromuscular coordination, enhance proprioception, reduce fall risk, and improve mood, cognition, and autonomic balance.</li>
      <li>Yoga, Tai Chi, and Qi Gong: To support proprioception, breath regulation, and emotional stability.</li>
      <li>Music and Art Therapy: Enhances mood, memory, and emotional expression through non-verbal pathways.</li>
      <li>Sleep Optimization: CBT for insomnia, circadian retraining with bright light therapy, sleep routine structuring.</li>
      <li>Smart Assistive Tools: Use of memory apps, GPS wearables, reminder systems, and voice-enabled technology for safety and independence.</li>
      <li>Colon Hydrotherapy: For bowel regulation and microbiome reset in cases of chronic constipation and gut dysfunction.</li>
      <li>Anti-inflammatory Nutrition: MIND diet rich in leafy greens, berries, nuts, and omega-3s to reduce neuroinflammation and oxidative stress.</li>
      <li>Psychological First Aid: CBT, caregiver psychoeducation, behavioral activation, and grief and loss counseling.</li>
    </ol>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">R2: Root Cause Redressal</h3>
    <p class="mb-6">The key objectives of this phase are to identify and correct upstream drivers of Alzheimer's pathology, including inflammation, toxicity, gut dysbiosis, and metabolic and mitochondrial dysfunction, thereby optimizing the biological environment for healing and slowing neurodegeneration. Interventions include:</p>
    <ol class="list-decimal pl-6 space-y-4">
      <li>
        <p class="mb-2">Functional Assessment &amp; Personalized Diagnostics: To uncover systemic contributors to cognitive decline, a comprehensive lab workup is performed covering inflammation, metabolism, toxicity, genetics, nutrient status, and mitochondrial function.</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Inflammatory and Metabolic Markers: Homocysteine, hsCRP, insulin, fasting glucose, HbA1c</li>
          <li>Genetic Risk: ApoE genotype to stratify risk and tailor intervention intensity</li>
          <li>Toxic Load: Heavy metals (lead, mercury), mold/mycotoxins</li>
          <li>Gut Health: Zonulin, calprotectin, microbiome diversity</li>
          <li>Nutrient Deficiencies: B12, vitamin D, magnesium, omega-3s, zinc</li>
          <li>Mitochondrial Markers: Organic acids, CoQ10, glutathione, lactate/pyruvate</li>
        </ul>
      </li>
      <li>Colon Hydrotherapy: Bowel detoxification, microbiota rebalancing, and cognitive fog reduction through improved gut-brain axis signaling.</li>
      <li>Far Infrared Sauna (FIR): Facilitates sweating-mediated detoxification, lymphatic drainage, and systemic circulation.</li>
      <li>Near-Infrared Photobiomodulation: Enhances mitochondrial ATP production, reduces oxidative stress, and improves cerebral perfusion and connectivity.</li>
      <li>Breathwork and Vagal Nerve Stimulation: HRV biofeedback, humming, cold water face immersion, and resonance breathing to reduce neuroinflammation and autonomic dysfunction.</li>
      <li>Transcranial Pulsed Electromagnetic Field Therapy (PEMF Helmet): Non-invasive brain stimulation targeting cortical circuits and promoting cellular repair and microglial modulation.</li>
      <li>Mitochondrial Enhancement Therapy: IV NAD+, CoQ10, acetyl-L-carnitine, magnesium, ALA, and glutathione.</li>
      <li>Anti-Inflammatory and Neuroprotective Nutrition: Rich in curcumin, polyphenols, sulforaphane, omega-3s, and anti-glycemic foods to modulate neuroinflammation and insulin resistance.</li>
      <li>Ayurveda Detoxification (Panchakarma): Basti (enema), virechana (purgation), and customized herbal rasayanas to balance doshas and reduce neurotoxic load.</li>
      <li>Mind-Body Therapies: EMDR for trauma, EFT for anxiety, DBT for emotional regulation.</li>
      <li>Neurotrophic Nutraceuticals: Lion's mane mushroom (NGF support), bacopa (memory), phosphatidylserine, curcumin, and resveratrol</li>
    </ol>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">R3: Restoring Physiological Balances</h3>
    <p class="mb-6">This phase focuses on reintegrating disrupted neural, metabolic, and functional systems to promote adaptive functioning, restore cognitive capacity, and strengthen daily performance. The key interventions of this phase include:</p>
    <ol class="list-decimal pl-6 space-y-4">
      <li>
        <p class="mb-2">Advanced Neurorehabilitation:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Coordination Dynamics Therapy (CDT): Rhythmic, bilateral movement training to restore cortical connectivity and motor-cognitive integration.</li>
          <li>VR/AR-based cognitive-motor dual-tasking programs for attention, memory, and spatial processing.</li>
          <li>Neurofeedback for regulating cognitive control and emotional balance.</li>
          <li>HRV-guided breathing for autonomic restoration.</li>
        </ul>
      </li>
      <li>Exergaming with Smart Playball: to improve upper body strength for tasks such as hair washing, fine motor control for tying shoes, balance for wearing slip-ons, or cognitive functions like language skills.</li>
      <li>Feldenkrais and Alexander Techniques: For motor awareness, body schema correction, and proprioceptive feedback.</li>
      <li>IV Micronutrient Therapy: Including B-complex, glutathione, vitamin C, magnesium, taurine, and amino acid blends.</li>
      <li>Occupational Therapy &amp; Home Modifications: Task simplification, environmental cues, and ergonomic adaptations to promote autonomy and reduce confusion.</li>
      <li>Speech and Language Therapy (Advanced): Conversational coaching, semantic recall, communication boards, and memory aids.</li>
      <li>Continuous Glucose Monitoring (CGM): Detection and correction of glycemic fluctuations and insulin resistance.</li>
      <li>Treatment of Latent Infections/Toxins: Addressing chronic infections (e.g., HSV1, Borrelia) and toxins (e.g., mercury, molds) through appropriate antimicrobial or chelation therapies.</li>
      <li>Psychological Empowerment: Purpose therapy, identity reinforcement, values-based journaling, caregiver support groups.</li>
      <li>Mirror Therapy: Enhancing body awareness, motor intention, and emotional recognition using visual feedback.</li>
    </ol>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">R4: Regeneration and Longevity</h3>
    <p class="mb-6">Focuses on supporting long-term brain resilience, neuroregeneration, and slowing functional and cellular aging through targeted longevity and neuroprotective strategies. Important treatment modalities used in this phase are:</p>
    <ol class="list-decimal pl-6 space-y-3">
      <li>Hyperbaric Oxygen Therapy (HBOT) increases oxygenation in hypoperfused brain regions, thereby reducing hypoxia-induced damage, promotes angiogenesis, and stimulates stem cell activity.</li>
      <li>Ozone and Molecular Hydrogen Therapy: Modulates oxidative stress and mitochondrial resilience.</li>
      <li>Peptide Therapies: Cerebrolysin, BPC-157, and Nootropic Peptides to enhance Neurotrophic Signaling and Synaptic Repair.</li>
      <li>IV Nutrition for Regeneration: Regenerative nutrient infusions including NAD+, glutathione, and amino acid blends.</li>
      <li>Autophagy Protocols: Intermittent fasting (16:8 or 18:6) to enhance cellular cleanup, Polyphenols (quercetin, spermidine, resveratrol) for autophagy stimulation and amyloid clearance.</li>
      <li>Anti-Aging Interventions: Telomere support (e.g., TA-65, omega-3 fatty acids), mitochondrial stabilizers, and sleep cycle restoration.</li>
      <li>Frailty Index Monitoring: VO2 max, grip strength, HRV, gait speed, cognition (MoCA/MMSE) to track functional aging.</li>
      <li>Relapse and Decline Prevention Planning: Personalized action plans for behavioral changes, Regular monitoring via Recoup EPHR, Crisis preparedness, Remote coaching, and caregiver training.</li>
    </ol>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Recoup Health's Credentials in Alzheimer's Disease Care</h3>
    <p class="mb-4">Dr. Deepak Sharan brings over 25 years of clinical expertise in treating neurodegenerative conditions, including extensive experience in Alzheimer's disease and other dementias. He is a globally recognized Consultant in Orthopaedic Surgery, Rehabilitation, Orthopaedic Rheumatology, Pain, Musculoskeletal, Regenerative, Functional and Lifestyle Medicine, Ergonomics, and Occupational Health.</p>
    <p class="mb-4">He is a Diplomate of the International Board of Lifestyle Medicine (Dip IBLM) and a Certified Functional Medicine Physician, trained by both the Institute for Functional Medicine (USA) and the Functional Medicine Academy (USA). He has received certification in Anti-Aging and Precision Medicine from the American Academy of Anti-Aging Medicine.</p>
    <p class="mb-4">Dr. Sharan has completed advanced training and certification at the Kharrazian Institute (USA) in Neuroinflammation and Neurodegeneration, Cognitive Decline and Dementia, Gastrointestinal and Autoimmune Disorders, Chronic Fatigue and Pain Syndromes, Mood and Anxiety Disorders, and Longevity and Wellness Optimization.</p>
    <p class="mb-4">He is also trained in the Wahls Protocol, developed by Dr. Terry Wahls, which focuses on nutritional, mitochondrial, and neuroimmune strategies for recovery from neurodegenerative diseases.</p>
    <p>Dr. Sharan leads a multidisciplinary team at Recoup Health, with professionals trained by him in functional neurology, cognitive rehabilitation, integrative geriatric care, and brain longevity therapies. Their collective experience supports a truly comprehensive, personalized, and root-cause-driven approach to Alzheimer's disease rehabilitation.</p>
  </section>
</div>
`,
  },
  {
    title: "Autism Spectrum Disorders",
    fullTitle: "RECOUP Integrative, Root-Cause Rehabilitation for Autism Spectrum Disorders",
    desc: "Autism is a spectrum disorder, meaning it presents differently in everyone. It is generally characterized by social, behavioral, and communication challenges that can impact individuals at different levels.",
    slug: "autism-spectrum-disorders",
    cover: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2070&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Integrative, Root-Cause Rehabilitation for Autism Spectrum Disorders</h2>
    <p class="mb-4">Autism is a spectrum disorder, meaning it presents differently in everyone. It is generally characterized by social, behavioral, and communication challenges that can impact individuals at different levels. While many individuals with autism can lead a happy, healthy, and productive life without support, others will require varying levels of external support throughout their lives.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Introduction</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Autism Spectrum Disorder (ASD) affects around 2% of the population.</li>
      <li>The estimated prevalence of autism in India is 1 in 68 children or 1.12 per 100 children aged 2–9 years.</li>
      <li>Boys are more likely to be affected than girls, with a ratio of around 3:1.</li>
      <li>Adult diagnosis of ASD is increasingly prevalent, with about 2% of adults having a diagnosis of ASD.</li>
      <li>The conventional treatment of ASD includes speech therapy, occupational therapy, behavioral therapy (Applied Behavioral Analysis or ABA), and special education.</li>
      <li>The American Medical Association and other organizations have recently questioned the effectiveness and ethics of ABA.</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">ASD Symptoms</h3>
    <p class="font-semibold text-primary-dark mb-2">Social communication and interaction skills:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Issues with communication, such as difficulty making eye contact, regulating tone of voice, or understanding facial expressions or body language.</li>
      <li>Difficulty with social interactions, including challenges in starting or taking turns in conversations, understanding other people's feelings or thoughts, and sharing emotions.</li>
      <li>Difficulty developing, maintaining, and understanding relationships, including feeling overwhelmed in social situations, struggling to understand personal space and boundaries, difficulty expressing feelings or seeking emotional support, and difficulty playing with others or forming friendships.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Restricted and repetitive behaviors:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Engaging in restricted and repetitive behaviors, such as stimming (e.g., rocking, hand flapping, running back and forth), repetitive play (e.g., lining toys up in a row, flipping switches, or spinning wheels), and repetitive words or phrases.</li>
      <li>Need for sameness and routine, including ritualistic behaviors; the need for routine can cause extreme distress even when tiny changes occur in a routine or plan.</li>
      <li>Intense and highly focused interests, including extreme interest or knowledge in particular topics and extreme attachment to specific objects.</li>
      <li>Sensory issues, including extreme sensitivity to sound, light, texture, or touch, sensory-seeking behaviors, and lack of sensitivity to temperature or pain</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Comorbid Conditions</h3>
    <p class="mb-4">Centres for Disease Control states that "Several medical conditions are significantly over-represented in people with ASD compared to the general population and other developmental conditions."</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Ear and respiratory infections</li>
      <li>Asthma, allergic rhinitis and atopic dermatitis</li>
      <li>Sleep disorders</li>
      <li>Headaches, migraines</li>
      <li>Seizures</li>
      <li>Gastrointestinal disorders</li>
      <li>Early mortality – death rates ranging from 3 to 10 times higher than the general population</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Assessment</h3>
    <p class="mb-6">Comprehensive, interdisciplinary assessment: clinical examination, functional lab tests (blood, urine, stool), and imaging (MRI), if needed, to identify the root causes and physiologic imbalances.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP Integrative, Root-Cause Rehabilitation for Autism Spectrum Disorders</h3>
    <p class="font-semibold text-primary-dark mb-4">Personalized interventions:</p>
    <ol class="list-decimal pl-6 space-y-4">
      <li>
        <p class="mb-2">Prevent brain fatigue from dysglycemia</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Avoid blood glucose drops</li>
          <li>Avoid insulin surges</li>
          <li>When the brain is exhausted or challenged, use exogenous ketones and branch-chain amino acids.</li>
        </ul>
      </li>
      <li>Prevent brain fatigue from overstimulation</li>
      <li>
        <p class="mb-2">Modulate primed glia and neuroinflammation</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Anti-inflammatory Foods ( Phytonutrients and Antioxidants rich foods) + Healthy fats ( 2 tbsp of EVOO including PUFA and MUFA)</li>
          <li>Reduce inflammatory triggers</li>
          <li>Reduce free radical exposure</li>
          <li>Provide anti-inflammatory and antioxidant nutraceuticals</li>
        </ul>
      </li>
      <li>
        <p class="mb-2">Improve gut health</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Diet to support microbiome diversity-Bone broth; Aloe vera; Egg yolks and Neem</li>
          <li>Remove inflammatory foods- Feingold diet</li>
          <li>Remove foods that promote dysbiosis-GFCF Diet</li>
          <li>Nutraceuticals to support intestinal barrier</li>
          <li>Nutraceuticals to support microbiome</li>
        </ul>
      </li>
      <li>
        <p class="mb-2">Modulate autoimmunity</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Remove immune triggers: Dietary proteins that are reactive, Chemical triggers, Lifestyle triggers, Pathogen triggers</li>
          <li>Improve immune tolerance</li>
        </ul>
      </li>
      <li>
        <p class="mb-2">Support mitochondrial biogenesis and function</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Exercise-Induced Mitochondria Biogenesis</li>
          <li>Nutraceuticals to Support Mitochondrial Function: Cellular bioenergetic cofactors, Antioxidants that protect mitochondria membranes, Nutraceuticals that activate mitochondria biogenesis activity, Energy sources and compounds used for ATP synthesis, Modulation of Warburg effect</li>
          <li>Caloric restriction</li>
          <li>Combination of IF and Mito plan/Keto diet</li>
        </ul>
      </li>
      <li>Support genetic defects: e.g., Vitamin B12 with other activated B vitamins to support optimal methylation pathways.</li>
      <li>Optimizing sleep</li>
      <li>
        <p class="mb-2">Mind-body techniques</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Yoga</li>
          <li>Tai Chi</li>
          <li>Mindfulness</li>
          <li>Manual therapy, massage</li>
          <li>Neurofeedback</li>
          <li>Heart Rate Variability Biofeedback</li>
          <li>Vagal nerve stimulation</li>
          <li>Transcranial Pulsed Electromagnetic Field Therapy</li>
        </ul>
      </li>
      <li>
        <p class="mb-2">Support brain plasticity</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Cognitive stimulation (Fine motor, Go-No Go tasks, Interactive games)</li>
          <li>Coordination Dynamics Therapy</li>
          <li>Exergaming</li>
          <li>Aquatic Therapy</li>
          <li>Music, sound, dance and art therapy</li>
        </ul>
      </li>
      <li>
        <p class="mb-2">Regenerative therapies</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Ozone therapy</li>
          <li>Hydrogen therapy</li>
          <li>Hyperbaric oxygen therapy</li>
          <li>Infrared therapy</li>
          <li>Intravenous infusion therapy</li>
        </ul>
      </li>
      <li>Detoxification, colonic hydrotherapy and chelation therapy</li>
      <li>Cannabinoid therapy</li>
      <li>
        <p class="mb-2">Conventional rehabilitation approaches</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Physiotherapy,</li>
          <li>Occupational therapy,</li>
          <li>Speech and language therapy,</li>
          <li>Special education</li>
          <li>Behavioral therapy.</li>
        </ul>
      </li>
      <li>Caregiver education, training and wellbeing interventions (e.g., acceptance and commitment therapy)</li>
    </ol>
    <p class="mt-8 mb-4">Treating autism as a systemic functional disorder that affects the brain gives us various effective treatment options:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Replace: Add the necessary nutrients that help their genes work better (vitamins, minerals, digestive aids, probiotics, detoxifying agents, etc.).</li>
      <li>Remove: eliminate the bad (food allergens, inflammation, oxidative stress, infections, toxicants, etc.)</li>
      <li>Rebalance the system (fix digestion and absorption, detoxification, neurotransmitter function, etc.)</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP'S Autism Spectrum Disorders Rehabilitation Team</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Pediatric Orthopedic Surgeon with certification in pediatric neurology</li>
      <li>Rehabilitation Physicians</li>
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Ayurveda Physician</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Tai Chi and Qi Gong Therapists</li>
      <li>Alexander and Feldenkrais Teachers</li>
      <li>Clinical Psychologists</li>
      <li>Nutritionists</li>
      <li>Health Coaches</li>
      <li>Nurses</li>
      <li>Patient Care Coordinators</li>
      <li>Other professionals, as required</li>
    </ul>
  </section>
</div>
`,
  },
  {
    title: "Bioenergetics",
    fullTitle: "RECOUP Integrative, Root-Cause Bioenergetics Program",
    desc: "As global energy demands rise and the focus shifts to renewable sources, it's crucial to recognize that energy dynamics are equally important within the human body. Bioenergetics, the study of energy flow in biological systems, plays a fundamental role in human health.",
    slug: "bioenergetics-program",
    cover: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Integrative, Root-Cause Bioenergetics Program</h2>
    <p class="mb-4">As global energy demands rise and the focus shifts to renewable sources, it's crucial to recognize that energy dynamics are equally important within the human body. Bioenergetics, the study of energy flow in biological systems, plays a fundamental role in human health. Optimal energy production and utilization are essential for maintaining wellness, and disruptions in these processes can lead to various health issues.</p>
    <p class="mb-4">Bioenergetics refers to how cells produce and utilize energy, with Adenosine Triphosphate (ATP) being the body's primary energy carrier. ATP production occurs primarily in the mitochondria through glycolysis, the Krebs cycle, and oxidative phosphorylation. Efficient energy production supports essential bodily functions, from cellular repair to immune responses. When these energy processes are compromised, it can lead to fatigue, metabolic imbalances, and chronic diseases.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Bioenergetics and Chronic Disease</h3>
    <p class="mb-6">Imbalances in bioenergetics are often linked to chronic diseases, such as diabetes, cardiovascular disease, and autoimmune disorders. In conditions like diabetes, disruptions in mitochondrial function lead to insufficient ATP production, impairing glucose metabolism and contributing to insulin resistance. In cardiovascular disease, energy deficits affect heart function, while bioenergetic imbalances in immune cells may contribute to autoimmune disorders by misregulating immune responses. Understanding and addressing these energy disruptions are critical to managing and preventing chronic disease.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP Integrative, Root-Cause Bioenergetics Program</h3>
    <p class="mb-6">Our Bioenergetics Program is designed to restore optimal energy balance by identifying the root causes of bioenergetic dysfunction. We can detect energy imbalances early by utilizing advanced diagnostic tools such as the RECOUP Entire Person Health Score (EPHS)—EPHS S, EPHS P, and EPHS O, energy assessments, noninvasive biometrics, Artificial Intelligence (AI), and Machine Learning (ML) technologies. This allows us to pinpoint the specific disruptions, whether caused by mitochondrial dysfunction, nutrient deficiencies, oxidative stress, or environmental factors, and intervene effectively.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Conditions treated</h3>
    <div class="space-y-4">
      <div>
        <p class="font-semibold text-primary-dark">1. Chronic Fatigue Syndrome (CFS) / Myalgic Encephalomyelitis (ME)</p>
        <ul class="list-disc pl-6 mt-1"><li>Impaired mitochondrial function and energy metabolism are central issues in CFS/ME, making bioenergetics an essential part of treatment.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">2. Chronic Pain, especially Fibromyalgia, Migraine and Neuropathic Pain</p>
        <ul class="list-disc pl-6 mt-1"><li>Mitochondrial dysfunction, oxidative stress, and poor energy production contribute to chronic pain and fatigue in fibromyalgia.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">3. Long Covid</p>
        <ul class="list-disc pl-6 mt-1"><li>Extreme tiredness, especially after activity (post-exertional malaise), is one of the most common and debilitating symptoms of Long Covid.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">4. Type 2 Diabetes</p>
        <ul class="list-disc pl-6 mt-1"><li>Insulin resistance and impaired glucose metabolism disrupt bioenergetics, affecting cell ATP production.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">4. Cardiovascular Diseases</p>
        <ul class="list-disc pl-6 mt-1"><li>Conditions like heart failure, hypertension, and atherosclerosis involve disruptions in energy metabolism, mitochondrial dysfunction, and oxidative stress in cardiac tissues.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">5. Neurodegenerative Disorders</p>
        <ul class="list-disc pl-6 mt-1"><li>Diseases like Alzheimer's, Parkinson's, and multiple sclerosis (MS) are linked to mitochondrial dysfunction and reduced cellular energy production in brain and nerve cells.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">6. Autoimmune Diseases</p>
        <ul class="list-disc pl-6 mt-1"><li>Conditions like rheumatoid arthritis, lupus, and multiple sclerosis involve chronic inflammation, oxidative stress, and impaired energy metabolism.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">7. Metabolic Syndrome</p>
        <ul class="list-disc pl-6 mt-1"><li>This includes conditions like obesity, dyslipidemia, insulin resistance, and hypertension, where disrupted energy metabolism is a core factor.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">8. Non-alcoholic steatohepatitis (NASH) / Metabolic-Associated Steatohepatitis (MASLD)</p>
        <ul class="list-disc pl-6 mt-1"><li>Liver energy metabolism is impaired in MASLD, where mitochondrial dysfunction and oxidative stress lead to fat accumulation in liver cells.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">9. Infectious and non-infectious diseases, including viral, bacterial and protozoan infections</p>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">9. Mitochondrial Disorders</p>
        <ul class="list-disc pl-6 mt-1"><li>These include genetic or acquired conditions that affect the function of mitochondria, the primary source of ATP in cells.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">10. Hypothyroidism</p>
        <ul class="list-disc pl-6 mt-1"><li>Reduced thyroid hormone levels can impair mitochondrial function, slowing energy production and metabolism.</li></ul>
      </div>
      <div>
        <p class="font-semibold text-primary-dark">10. Childhood Disabilities</p>
        <ul class="list-disc pl-6 mt-1"><li>Autism Spectrum Disorders.</li></ul>
      </div>
    </div>
    <h3 class="text-2xl font-bold text-primary-dark mt-10 mb-4">RECOUP Bioenergetics Team</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Other Specialist Physicians</li>
      <li>Ayurveda Physicians</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Nutritionists</li>
      <li>Clinical Psychologists</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Health coaches</li>
      <li>Nurses</li>
      <li>Other professionals, as required</li>
      <li>Patient Care Coordinators</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-2">The 4R Strategy: Revitalize, Restore, Regulate, Renew</h3>
    <p class="font-semibold text-primary-dark mb-6">4R Approach</p>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 1: Relief</h4>
    <p class="mb-4">The initial phase focuses on relieving acute symptoms of bioenergetic imbalances, such as fatigue, headache, and brain fog. These symptoms often arise from disruptions in the body's energy systems, particularly mitochondrial dysfunction and oxidative stress.</p>
    <p class="font-semibold text-primary-dark mb-2">Symptoms:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Pain, Fatigue and Headache: Common manifestations of impaired energy production, significantly when mitochondrial function is compromised.</li>
      <li>Neurocognitive symptoms include brain fog, short-term memory loss, slow and effortful thinking, and slow processing speed and attention.</li>
      <li>Orthostatic intolerance implies worsening of symptoms upon assuming and maintaining an upright posture.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Suggested Interventions:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-4">
      <li>Medications: To address acute symptoms like headache or fatigue and potentially improve immediate cellular function.</li>
      <li>Supplements</li>
      <li>Integrative Therapies</li>
      <li>Energy management: Pacing involves identifying one's energy level at a given time and adapting one's activity level to that level (staying within the energy envelope).</li>
      <li>Managing Neurocognitive Problems</li>
      <li>Strategies for the management of setbacks or relapses</li>
    </ol>
    <p class="font-semibold text-primary-dark mb-2">Assessments:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Bioenergetic Screening: To identify acute mitochondrial dysfunction, ATP levels, and oxidative stress markers.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Outcomes:</p>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Relief from Acute Symptoms: Reducing fatigue and headaches by improving energy production.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 2: Root Cause Analysis</h4>
    <p class="mb-4">This stage discovers the deeper root causes of bioenergetic imbalances. It focuses on identifying genetic, lifestyle, and environmental factors that impair the body's ability to produce and manage energy efficiently.</p>
    <p class="font-semibold text-primary-dark mb-2">Root Cause Analysis of Energy Dysregulation</p>
    <p class="mb-4">Identifying factors like lifestyle habits, chronic stress, sleep disturbances, poor nutrition, and genetic predispositions that may lead to mitochondrial dysfunction or impaired energy metabolism.</p>
    <p class="font-semibold text-primary-dark mb-2">Suggested Interventions:</p>
    <ol class="list-decimal pl-6 space-y-4 mb-4">
      <li>
        <p class="mb-1">Sleep:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Sleep Hygiene: Optimizing sleep patterns to improve energy recovery and mitochondrial repair.</li>
          <li>Interventions: RECOUP Sleep and Circadian Rhythm Clinic offers comprehensive sleep assessments, followed by Yoga Nidra, neurofeedback, iCBT, and iACT to improve sleep quality, which is critical for restoring cellular energy.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Exercise and Movement:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Aquatic Therapy, Exergaming, Tai Chi, and Strength Training: Improve circulation and mitochondrial efficiency, promoting better oxygen utilization and energy production.</li>
          <li>Dynamic Neurocognitive Imagery (Franklin Method): Enhance mind-body connections, fostering more effective energy management and resilience.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Stress and Resilience Management:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Exergaming, Yoga, tai chi, and Dynamic Neurocognitive Imagery are techniques that enhance vagal tone, reduce stress, and promote better energy utilization.</li>
          <li>Mindfulness, Hypnotherapy, Psychological Flexibility and Relaxation Therapy Help address chronic energy drain caused by emotional and psychological stressors.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Nutrition:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Mitochondrial Supportive Foods: Emphasize nutrient-dense foods rich in B vitamins magnesium, CoQ10, and L-carnitine</li>
          <li>Meal Sequencing, Balanced Plates, and Craving Management: Address improper nutrient intake, which can strain energy systems.</li>
          <li>Anti-Inflammatory Foods to reduce inflammation and brain fog.</li>
          <li>Supplements: Probiotics and hydration supplements support optimal nutrient absorption, which is critical for ATP production.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Emotional Trauma and Stress:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Techniques such as Emotional Awareness and Expression Therapy (EAET), Dialectical Behavioral Therapy (DBT), EFT, EMDR, and Hypnotherapy address deep-seated emotional stress, often contributing to energy depletion and chronic bioenergetic imbalances.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Environmental Pollution:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Detoxification: Addressing exposure to environmental toxins through detox diets, intravenous nutrition therapy, infrared saunas, colon hydrotherapy, and other interventions.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Perrin Technique:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>This osteopathic technique helps drain toxins away from the central nervous system and incorporates manual techniques that stimulate the healthy flow of lymphatic and cerebrospinal fluid and improve spinal mechanics.</li>
          <li>This, in turn, reduces the strain on the sympathetic nervous system, aiding a return to good health.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Vibeassage Pro Massage Tank</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>The massage device perfectly combines low amplitude vibration and massage plough effect. Sports chiropractor Dr James Stoxen from Chicago, USA, developed the device.</li>
          <li>It is the most powerful professional tool for ridding the body's spring system of inflammation, lactic acid, and toxins that cause abnormal tension in its integrated spring.</li>
        </ul>
      </li>
    </ol>
    <p class="font-semibold text-primary-dark mb-2">Assessments:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Genetic Testing: To identify potential mutations affecting mitochondrial function.</li>
      <li>Lifestyle Analysis: Tracking habits such as sleep, nutrition, and stress, which impact energy balance.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Outcomes:</p>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Personalized Interventions: Insights into root causes provide a roadmap for individualized treatments that address each person's unique energy imbalances.</li>
      <li>Enhanced Energy Efficiency: By addressing lifestyle and genetic factors, individuals improve their overall energy production and usage, setting the stage for long-term health improvements.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 3: Physiological Imbalance (Specific to Bioenergetics)</h4>
    <p class="mb-4">Bioenergetic imbalances are more than just physiological dysfunctions—they represent disruptions in the body's core energy production and regulation mechanisms, such as ATP production. The goal is to restore these fundamental energy processes through targeted interventions that optimize cellular energy flow, reduce inflammation, and enhance autonomic balance.</p>
    <p class="font-semibold text-primary-dark mb-2">Therapeutic Interventions:</p>
    <ol class="list-decimal pl-6 space-y-4 mb-4">
      <li>
        <p class="mb-1">Infrared Therapy (Far and Near):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Near-Infrared: Penetrates deeper layers of tissue to support cellular energy production (via mitochondrial ATP production), improving metabolic function and reducing inflammation.</li>
          <li>Far-infrared: This works at a more superficial level, helping detoxification processes by promoting sweating, enhancing circulation, and supporting metabolic waste elimination.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Ozone Therapy:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Administered to increase oxygen availability, support the body's natural healing processes, and enhance cellular respiration. Ozone helps reduce oxidative stress, a key contributor to bioenergetic imbalances and improves overall energy efficiency in cells.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Molecular Hydrogen Therapy:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Reducing cytotoxic oxygen radicals.</li>
          <li>Improving mitochondrial function.</li>
          <li>Reducing inflammation.</li>
          <li>Stimulating the cerebrum.</li>
          <li>Improving anxiety and overall mood.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Mind-Body Therapies:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Heart Rate Variability (HRV) Training/Biofeedback: Teaches individuals how to regulate their autonomic nervous system, promoting balance between sympathetic and parasympathetic activity, which enhances overall energy regulation and resilience.</li>
          <li>Dynamic Healing (Bruce Lipton, PhD, and David Hanscom, MD) enhances our understanding of circumstances (input) and coping skills (nervous system resilience). Feeling safe positively impacts the neurochemical profile. By acquiring the skills to process unconscious survival responses and learning to nurture joy, one can heal and enter a new realm of consciousness and thrive.</li>
          <li>Yoga: Combines movement, breathwork, and mindfulness to optimize energy flow through the body, reduce stress, and improve metabolic efficiency.</li>
          <li>Meditation and Prayer: Encourage mental and emotional stillness, fostering improved energy balance by reducing the energy drain caused by chronic stress.</li>
          <li>Breathing Practices: Intentional breathing exercises, such as diaphragmatic breathing and box breathing, regulate the autonomic nervous system, enhancing oxygen utilization and energy production.</li>
          <li>Centering Practices: Techniques that promote mental and emotional focus, improving clarity and reducing distractions that can lead to energy depletion.</li>
          <li>Psychotherapy/CBT: Cognitive Behavioral Therapy (CBT) and other psychotherapeutic approaches help address mental blocks or traumas that might disrupt energy balance by increasing stress and anxiety levels.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Heat and Cold Exposure Therapies:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Cold Exposure: Controlled cold exposure (e.g., cold showers, ice baths) triggers adaptive responses in the body, enhancing mitochondrial function and improving energy resilience by promoting thermogenesis and reducing inflammation.</li>
          <li>Heat Exposure (e.g., Sauna): Increases circulation and detoxification while improving mitochondrial efficiency, supporting the bioenergetic process through heat-induced metabolic shifts.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Vagal Nerve Stimulation Techniques:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Stimulating the vagus nerve (via techniques like humming, chanting, or specific devices) helps modulate parasympathetic nervous system activity. This improves autonomic regulation and enhances metabolic function, digestion, and energy production.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Frequency Specific Microcurrent (FSM):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>FSM uses low-level electrical currents to stimulate the body's tissues and restore their normal electrical frequencies.</li>
          <li>Increases ATP production, the energy that fuels all cellular reactions in the body. This can help with tissue repair and recovery.</li>
          <li>Improves blood flow.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Pulsed Electromagnetic Field Therapy (PEMF):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>It increases microcirculation and improves cell healing and oxygenation.</li>
          <li>It can also help remove toxins in the body that naturally increase immunity levels in individuals.</li>
        </ul>
      </li>
    </ol>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Bioenergetic Assessments: To detect energy flow disruptions and evaluate mitochondrial function, oxidative stress levels, and ATP production.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Outcomes:</p>
    <p class="mb-8">By specifically addressing bioenergetic imbalances through these advanced therapies, individuals can expect to see improvements in metabolic function, stress resilience, and overall vitality. Correcting these physiological energy imbalances supports long-term health improvements and reduces the risk of chronic diseases like diabetes, cardiovascular disease, and</p>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 4: Longevity</h4>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Focus area: Maintaining remission and preventing complications</li>
      <li>Suggested interventions:
        <div class="pl-0 mt-2 font-normal not-italic space-y-2">
          <p>Supplements: Adaptogens, Antioxidants, Phytonutrients</p>
          <p>Therapy: Resilience practice</p>
          <p>Regenerative therapies include detox therapies, colon hydrotherapy, panchakarma, sauna, ozone, molecular hydrogen, hyperbaric oxygen therapy (HBOT), polyvagal enhancement, IV therapies, chelation, far infrared, mesotherapy, and cannabinoids.</p>
        </div>
      </li>
    </ul>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Assessments: Frailty Index, HRV, Physical agility and Fall risk assessment, Medical Infrared Thermography and EMG Biofeedback, BCA, BMR, Psychometric assessments, VO2 Max, etc.</li>
    </ul>
    <p class="mb-4">Time-restricted feeding/Alternate day fasting.</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Outcomes: maintenance of remission, lifestyle optimization for wellness, preventing inflammation and degeneration.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-6 py-2 italic text-primary-dark">"Heal the cell, and you heal the body." – Dr. Bruce Lipton</blockquote>
  </section>
</div>
`,
  },
  {
    title: "Cancer",
    fullTitle: "RECOUP Integrative, Root-Cause Cancer Rehabilitation Program",
    desc: "This Program aims to assist cancer patients of all ages in overcoming the effects of the disease and its treatment on daily functioning and quality of life. This applies to both those who have recently been diagnosed with cancer and those who are in remission after having completed treatment some time ago.",
    slug: "cancer-rehabilitation",
    cover: "https://images.unsplash.com/photo-1579684385127-1ef15d5081ec?q=80&w=2070&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Integrative, Root-Cause Cancer Rehabilitation Program</h2>
    <p class="mb-4">This Program aims to assist cancer patients of all ages in overcoming the effects of the disease and its treatment on daily functioning and quality of life. This applies to both those who have recently been diagnosed with cancer and those who are in remission after having completed treatment some time ago. This program is not an alternative to conventional medical cancer management but complements it.</p>
    <p class="mb-4">The program is based on the metabolic terrain theory of cancer. Traditional cancer treatment often centres on finding the tumor, attacking it with surgery, chemotherapy, radiation, or targeted drugs and hoping it doesn't come back.</p>
    <p class="mb-2">While these treatments can be lifesaving, they rarely address the deeper question:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Why did cancer take root in the first place?</li>
      <li>What allowed it to grow and spread in that person's body?</li>
      <li>What conditions enabled its return or resistance to treatment?</li>
    </ul>
    <p class="mb-2">The conventional cancer care often overlooks the role of:</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Blood sugar dysregulation and insulin resistance.</li>
      <li>Mitochondrial dysfunction.</li>
      <li>Chronic inflammation and oxidative stress.</li>
      <li>Immune system imbalance.</li>
      <li>Toxic exposures and environmental stressors.</li>
      <li>Emotional trauma and psycho-spiritual health.</li>
    </ul>
    <p class="mb-4">The metabolic terrain theory suggests that promoting a healthy "terrain" within the body can render it less conducive for cancer cells to grow and spread. This approach emphasizes lifestyle factors, nutrition, stress management, and environmental exposures that can impact the body's ability to combat cancer. It employs a structured method: Test, Assess, Address, and Never Guess — ensuring decisions are based on actual data from the patient's body, rather than assumptions.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-2">The Terrain Ten</h3>
    <p class="mb-4">The Terrain Ten are ten factors that affect our health (or terrain). When these factors are optimal and in harmony with each other, our bodies are thriving, and resistant to chronic diseases such as cancer.</p>
    <p class="mb-4">The Terrain Ten Questionnaire is an in-depth set of questions that helps us evaluate which of these factors is likely to need the most attention and support.</p>
    <ol class="list-decimal pl-6 space-y-2 mb-6">
      <li>Genetics and Epigenetics</li>
      <li>Blood Sugar/Metabolic Balance</li>
      <li>Toxic Burden</li>
      <li>Microbiome and Digestive Function</li>
      <li>Immune Function</li>
      <li>Inflammation</li>
      <li>Blood Circulation and Angiogenesis</li>
      <li>Hormone Balance</li>
      <li>Stress and Biorhythms</li>
      <li>Mental and Emotional</li>
    </ol>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Cancer-related symptoms and conditions treated</h3>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>Pain and stiffness, e.g., fibromyalgia, myofascial pain syndrome, infiltration-related pain, nerve compression</li>
      <li>Lymphedema: localized swelling caused by a damaged lymphatic system</li>
      <li>Scar tissue formation after surgery</li>
      <li>Radiation-induced fibrosis: thickening of skin and subcutaneous tissue, muscles, or other organs</li>
      <li>Numbness, tingling or burning in hands and feet (peripheral neuropathy due to the cancer or chemotherapy)</li>
      <li>Lack of balance, difficulty walking, poor endurance, muscle spasms, weakness, fatigue</li>
      <li>Cognitive decline (or "chemo brain"), including loss of memory, concentration, attention and learning new skills</li>
      <li>Bowel and bladder disturbances</li>
      <li>GI: Hyperemesis (cancer-related, opioid-induced, bowel obstruction, etc.), constipation, diarrhea</li>
      <li>Oral Problems: Oral Thrush/Candidiasis, Dry Mouth/Xerostomia, Stomatitis, Dysgeusia</li>
      <li>Swallowing disorders</li>
      <li>Voice and speaking difficulties</li>
      <li>Psychological and emotional trauma</li>
      <li>Poor Sleep and Appetite</li>
      <li>Adjustment to wearing a prosthetic or orthotic device</li>
      <li>Respiratory: Dyspnea and cough</li>
      <li>Cachexia</li>
      <li>Osteoporosis</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP Cancer Rehabilitation Team</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Metabolic Terrain Certified Cancer Physician</li>
      <li>Physical Medicine and Rehabilitation Physicians</li>
      <li>Palliative Care Physicians</li>
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Other Specialist Physicians</li>
      <li>Ayurveda Physicians</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Clinical Nutritionists</li>
      <li>Clinical Psychologists</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Speech-language Therapist</li>
      <li>Prosthetists, orthotists and amputee rehabilitation experts</li>
      <li>Aquatic Therapists</li>
      <li>Health coaches</li>
      <li>Nurses</li>
      <li>Other professionals, as required</li>
      <li>Patient Care Coordinators</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-2">The 4R Strategy: Revitalize, Restore, Regulate, Renew</h3>
    <p class="font-semibold text-primary-dark mb-6">4R Approach</p>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 1: Relief</h4>
    <p class="mb-4">The initial phase focuses on relieving acute symptoms such as pain, fatigue, constipation and neurocognitive symptoms such as brain fog. These symptoms often arise from disruptions in the body's energy systems, particularly mitochondrial dysfunction and oxidative stress.</p>
    <p class="font-semibold text-primary-dark mb-2">Suggested Interventions:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-8">
      <li>Interventional Pain Management - Nerve Blocks, Regional Anaesthesia, Celiac plexus, Superior Hypogastric Plexus, Ganglion Impar, Stellate Ganglion Block, Vertebroplasty and Kyphoplasty</li>
      <li>Physiotherapy: to manage pain, stiffness, lymphedema, scars, weakness, fatigue, lack of balance, etc.</li>
      <li>Occupational Therapy: to help people participate in daily activities such as dressing and bathing, strengthen fine motor skills, conserve energy, and improve memory and sight.</li>
      <li>Psychological interventions: Clinical Psychologists conduct cognitive, behavioral and psychological assessments and manage emotional and cognitive aspects.</li>
      <li>Speech-language Therapy: to help manage speech, swallowing and communication problems</li>
      <li>Prosthetists, orthotists, and amputee rehabilitation experts provide rehabilitation after limb loss and prepare and train individuals in the use of orthotic or prosthetic devices.</li>
      <li>Medications: To address acute symptoms like pain or fatigue and improve immediate cellular function.</li>
      <li>Supplements</li>
      <li>Intravenous therapies</li>
      <li>Integrative Therapies</li>
      <li>Energy management: Pacing involves identifying one's energy level at a given time and adjusting one's activity level accordingly, staying within the energy envelope.</li>
      <li>Managing Neurocognitive Problems</li>
      <li>Strategies for the management of setbacks or relapses</li>
      <li>Nutrition intervention: Provide anti-inflammatory meals  along with neurotropic nutrients and mitochondrial support foods</li>
    </ol>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 2: Root Cause Analysis</h4>
    <p class="mb-4">This stage discovers the deeper root causes of physiological imbalances. It focuses on identifying Genetics and Epigenetics, Blood Sugar Balance/Metabolic, Toxic Burden, Microbiome and Digestive Function, Immune Function, Inflammation, Blood Circulation and Angiogenesis, Hormone Balance, Stress and Biorhythms, Mental and Emotional factors (the Terrain Ten).</p>
    <p class="font-semibold text-primary-dark mb-2">Suggested Interventions:</p>
    <ol class="list-decimal pl-6 space-y-4 mb-8">
      <li>
        <p class="mb-1">Sleep:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Sleep Hygiene: Optimizing sleep patterns to improve energy recovery and mitochondrial repair.</li>
          <li>Interventions: RECOUP Sleep and Circadian Rhythm Clinic offers comprehensive sleep assessments, followed by Yoga Nidra, neurofeedback, iCBT, and iACT to improve sleep quality, which is critical for restoring cellular energy.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Exercise and Movement:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Aquatic Therapy, Exergaming, Tai Chi, and Strength Training: Improve circulation and mitochondrial efficiency, promoting better oxygen utilization and energy production.</li>
          <li>Dynamic Neurocognitive Imagery (Franklin Method): Enhance mind-body connections to foster more effective energy management and resilience.</li>
          <li>Coordination Dynamics Therapy (Giger MD) - To improve motor control, neuromuscular function, and overall balance and coordination.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Stress and Resilience Management:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Exergaming, Yoga, tai chi, and Dynamic Neurocognitive Imagery enhance vagal tone, reduce stress, and promote better energy utilization.</li>
          <li>Mindfulness, Hypnotherapy, Psychological Flexibility and Relaxation Therapy Help address chronic energy drain caused by emotional and psychological stressors.</li>
        </ul>
      </li>
      <li>Prescription medications include some off-label uses of medicines, including methylene blue, cannabinoids and low-dose naltrexone.</li>
      <li>
        <p class="mb-1">Nutrition:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Meal Sequencing, Balanced Plates, and Craving Management: Address inadequate nutrient intake, which can strain energy systems. A low-carbohydrate and ketogenic diet is often advised under a dietitian's supervision.</li>
          <li>Provide immune-modulating, anti-inflammatory support to reduce pain, fatigue, GI distress, and neuropathy, while accommodating swallowing, appetite, and digestive challenges through texture- and symptom-adapted plans.</li>
          <li>Supplements: Probiotics and hydration supplements support optimal nutrient absorption, critical for ATP production.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Emotional Trauma and Stress:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Techniques such as Emotional Awareness and Expression Therapy (EAET), Dialectical Behavioral Therapy (DBT), EFT, Somatic EMDR, and Hypnotherapy address deep-seated emotional stress, often contributing to energy depletion and chronic bioenergetic imbalances.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Environmental Pollution:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Detoxification: Addressing exposure to environmental toxins through detox diets, intravenous nutrition therapy, infrared saunas, colon hydrotherapy, and other interventions.</li>
        </ul>
      </li>
    </ol>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 3: Correcting the Physiological Imbalances</h4>
    <p class="mb-4">Bioenergetic imbalances are more than just physiological dysfunctions—they represent disruptions in the body's core energy production and regulation mechanisms, such as ATP production. The goal is to restore these fundamental energy processes through targeted interventions that optimize cellular energy flow, reduce inflammation, and enhance autonomic balance.</p>
    <p class="font-semibold text-primary-dark mb-2">Therapeutic Interventions:</p>
    <ol class="list-decimal pl-6 space-y-4 mb-4">
      <li>
        <p class="mb-1">Infrared Therapy (Far and Near):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Near-infrared: It penetrates deeper layers of tissue to support cellular energy production (via mitochondrial ATP production), improve metabolic function, and reduce inflammation.</li>
          <li>Far-infrared: This works at a more superficial level, aiding detoxification processes by promoting sweating, enhancing circulation, and supporting the elimination of metabolic waste.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Ozone Therapy:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Administered to increase oxygen availability, support the body's natural healing processes, and enhance cellular respiration. Ozone helps reduce oxidative stress, a key contributor to bioenergetic imbalances and improves overall energy efficiency in cells.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Molecular Hydrogen Therapy:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Reducing cytotoxic oxygen radicals.</li>
          <li>Improving mitochondrial function.</li>
          <li>Reducing inflammation.</li>
          <li>Stimulating the cerebrum.</li>
          <li>Improving anxiety and overall mood.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Mind-Body Therapies:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Heart Rate Variability (HRV) Training/Biofeedback: This training teaches individuals how to regulate their autonomic nervous system, promoting balance between sympathetic and parasympathetic activity, which enhances overall energy regulation and resilience.</li>
          <li>Dynamic Healing, as presented by Bruce Lipton, Phd, and David Hanscom, MD, enhances our understanding of the interplay between circumstances (input) and coping skills (nervous system resilience). Feeling safe has a positive impact on the neurochemical profile. By acquiring the skills to process unconscious survival responses and learning to nurture joy, one can heal, enter a new realm of consciousness, and thrive.</li>
          <li>Yoga: Combines movement, breathwork, and mindfulness to optimize energy flow through the body, reduce stress, and improve metabolic efficiency.</li>
          <li>Meditation and Prayer: Encourage mental and emotional stillness, fostering improved energy balance by reducing the energy drain caused by chronic stress.</li>
          <li>Breathing Practices: Intentional breathing exercises, such as diaphragmatic and box breathing, regulate the autonomic nervous system, enhancing oxygen utilization and energy production.</li>
          <li>Centring Practices: Techniques that promote mental and emotional focus, improving clarity and reducing distractions that can lead to energy depletion.</li>
          <li>Psychotherapy/CBT: Cognitive Behavioral Therapy (CBT) and other psychotherapeutic approaches help address mental blocks or traumas that might disrupt energy balance by increasing stress and anxiety levels.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Heat and Cold Exposure Therapies:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Cold Exposure: Controlled cold exposure (e.g., cold showers, ice baths) triggers adaptive responses in the body, enhancing mitochondrial function and improving energy resilience by promoting thermogenesis and reducing inflammation.</li>
          <li>Heat Exposure (e.g., Sauna): Increases circulation and detoxification while improving mitochondrial efficiency, supporting the bioenergetic process through heat-induced metabolic shifts.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Vagal Nerve Stimulation Techniques:</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>Stimulating the vagus nerve (via techniques like humming, chanting, or specific devices) helps modulate parasympathetic nervous system activity. This improves autonomic regulation and enhances metabolic function, digestion, and energy production.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Frequency Specific Microcurrent (FSM):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>FSM uses low-level electrical currents to stimulate the body's tissues and restore their normal electrical frequencies.</li>
          <li>Increases ATP production, the energy that fuels all cellular reactions in the body. This can help with tissue repair and recovery.</li>
          <li>Improves blood flow.</li>
        </ul>
      </li>
      <li>
        <p class="mb-1">Pulsed Electromagnetic Field Therapy (PEMF):</p>
        <ul class="list-disc pl-6 space-y-1 text-sm">
          <li>It increases microcirculation and improves cell healing and oxygenation.</li>
          <li>It can also help remove toxins in the body that naturally increase immunity levels in individuals.</li>
        </ul>
      </li>
      <li>Mistletoe Therapy</li>
      <li>Topical naturopathic therapies, Poultices, Constitutional hydrotherapy</li>
    </ol>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 4: Longevity</h4>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Focus area: Maintaining remission and preventing complications</li>
      <li>Suggested interventions:
        <div class="pl-0 mt-2 font-normal not-italic space-y-2">
          <p>Supplements: Adaptogens, Antioxidants, Phytonutrients</p>
          <p>Therapy: Resilience practice</p>
          <p>Regenerative therapies encompass a range of treatments, including detox therapies, colon hydrotherapy, panchakarma, sauna therapy, ozone therapy, molecular hydrogen therapy, hyperbaric oxygen therapy (HBOT), polyvagal enhancement, intravenous (IV) therapies, chelation therapy, far infrared therapy, mesotherapy, and cannabinoid therapy.</p>
        </div>
      </li>
    </ul>
    <p class="mb-2">Time-restricted feeding/Alternate day fasting.</p>
    <p class="mb-8">Peptide therapy</p>

    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP'S Credentials</h3>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Dr Deepak Sharan has over 25 years of experience in cancer rehabilitation.</li>
      <li>He is a Certified Metabolic Terrain-trained cancer physician from the Metabolic Terrain Institute of Health, USA (Dr Nasha Winters). This is the world's topmost certification in the metabolic approach to cancer.</li>
      <li>He is a certified practitioner of Microcurrent Point Stimulation (MPS) Scar Release Therapy at the Centre for Pain and Stress Research in Canada.</li>
      <li>He has received certification in Advanced Manual Treatment for Post-Surgical Breast Cancer Patients and Advanced Manual Treatment of Scars and Adhesions by Susan Chapelle, RMT, Canada.</li>
      <li>He has trained the RECOUP interdisciplinary team.</li>
    </ul>
    <blockquote class="border-l-4 border-primary pl-6 py-2 italic text-primary-dark">
      <p>"It is not the bug; it is the Terrain."</p>
      <p class="not-italic text-gray-600 mt-2">Louis Pasteur</p>
    </blockquote>
  </section>
</div>
`,
  },
  {
    title: "Cardiometabolic Program",
    fullTitle: "RECOUP Integrative, Root-Cause Cardiometabolic Program",
    desc: "Cardiometabolic health is essential for a long, high-quality life, but conditions like hypertension, dyslipidemia, hyperuricemia, and fatty liver are increasingly common and can shorten lifespan.",
    slug: "cardiometabolic-program",
    cover: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Integrative, Root-Cause Cardiometabolic Program</h2>
    <p class="mb-6">Cardiometabolic health is essential for a long, high-quality life, but conditions like hypertension, dyslipidemia, hyperuricemia, and fatty liver are increasingly common and can shorten lifespan. Increased awareness of these conditions has led to earlier detection, prevention, and personalized treatment strategies. However, significant gaps remain in treatment, particularly in ensuring patient adherence to medications and lifestyle changes. Barriers like side effects of medicines, lack of education, and limited access to care often hinder long-term management, highlighting the need for more effective patient support and follow-up. Improving adherence is crucial to achieving better outcomes and reducing the burden of cardiometabolic disease.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Prevalence and Trends</h3>
    <ul class="list-disc pl-6 space-y-3 mb-8">
      <li>Hypertension: Globally, about 1.28 billion adults aged 30-79 have hypertension, with approximately two-thirds living in low- and middle-income countries. In India, around 220 million adults are affected, with prevalence rates of approximately 30% in urban areas and 25% in rural areas. Many cases remain undiagnosed or uncontrolled, making hypertension a significant risk factor for heart disease, stroke, and chronic kidney disease worldwide and in India.</li>
      <li>Dyslipidemia: Over 50% of adults globally have dyslipidemia. In India, nearly 79% of the population exhibits abnormal lipid levels, particularly elevated LDL cholesterol. The condition is often linked to sedentary lifestyles and poor dietary habits. Despite available treatments, adherence to statin therapy is a challenge, with around 50-60% adherence reported in high-income countries and many Indian patients discontinuing use after one year due to side effects or lack of awareness.</li>
      <li>Hyperuricemia: The global prevalence of hyperuricemia has increased over the past decades, with studies estimating that 20% of U.S. adults are affected. In India, the prevalence is approximately 25%, correlating with rising rates of obesity and metabolic syndrome. Hyperuricemia is a precursor to gout and is associated with an increased risk of cardiovascular disease, hypertension, and chronic kidney disease.</li>
      <li>Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD): MASLD affects approximately 25-30% of adults worldwide. In India, the prevalence ranges from 9% to 32%, particularly among individuals with obesity, type 2 diabetes, and metabolic syndrome. MASLD frequently coexists with dyslipidemia and insulin resistance, contributing to liver cirrhosis and cardiovascular complications. As obesity rates continue to rise, the prevalence of MASLD is expected to increase further both globally and in India.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-4">Are you interested in joining the Revolution of transforming Cardiometabolic Health?</p>
    <p class="mb-4">Our program delivers comprehensive management of cardiometabolic health, targeting conditions like hypertension, dyslipidemia, hyperuricemia, and non-alcoholic fatty liver disease (MASLD). We utilize advanced diagnostics—such as root cause analysis and Artificial Intelligence—to identify risk factors early, enabling proactive interventions.</p>
    <p class="mb-4">Our 4R framework—Relief, Root Cause Analysis, Rebalance, and Regeneration—guides our approach, focusing on reversing dysfunction, restoring balance, and renewing health. Personalized nutrition plans, stress reduction techniques, and tailored exercise regimens complement our strategy.</p>
    <p class="mb-6">We aim to extend lifespan and health span by prioritizing prevention and optimization. Our Cardiometabolic Health Program is dedicated to helping individuals lead healthier, vibrant lives free from cardiometabolic diseases.</p>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Objectives of RECOUP Cardiometabolic Health Program:</h3>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Managing Hypertension</li>
      <li>Treating Dyslipidemia</li>
      <li>Managing Fatty liver disease</li>
      <li>Managing Hyperuricemia</li>
      <li>Mitochondrial Resuscitation</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Cardiometabolic Team</h3>
    <ul class="list-disc pl-6 space-y-2 mb-8">
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Other Specialist Physicians</li>
      <li>Ayurveda Physicians</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Nutritionists</li>
      <li>Clinical Psychologists</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Health coaches</li>
      <li>Nurses</li>
      <li>Other professionals, as required</li>
      <li>Patient Care Coordinators</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Assessment of Cardiometabolic Health:</h3>
    <ul class="list-disc pl-6 space-y-3">
      <li>Body Composition Analysis: Evaluates the distribution of fat, muscle, and water in the body, providing insights into overall health and fitness levels.</li>
      <li>HRV (Heart Rate Variability): Measures the variation in time between each heartbeat, offering insights into the autonomic nervous system's function and overall stress levels.</li>
      <li>Assessment Questionnaires (Cardiovascular Risk): Utilizes targeted questionnaires to assess cardiovascular risk factors, aiding in identifying potential issues and personalized prevention strategies.</li>
      <li>Diabetes Risk Profiler: This non-invasive method evaluates individual diabetes risk based on various factors like autonomic neuropathy, peripheral neuropathy, and arterial health analysis, allowing for early intervention and lifestyle modifications.</li>
      <li>Insulin Resistance Analyzer: This device assesses insulin sensitivity, a key factor in metabolic health. It provides insights into the risk of developing insulin resistance and type 2 diabetes using photoplethysmography and analyzing small fiber neuropathy.</li>
      <li>Biofeedback Analysis: This technique utilizes biofeedback techniques, such as somatic feedback, neurofeedback, autogenic training, and surface electromyography, to measure and manage physiological responses, promoting self-regulation and stress reduction.</li>
      <li>Biometrics and Vitals: Measures key health indicators such as blood pressure, heart rate, and body temperature, offering a snapshot of overall well-being.</li>
      <li>Baseline health report with relevant: Blood investigations to assess various factors contributing to cardiometabolic health.</li>
      <li>Gut Microbiome assessment: Examines the composition of gut bacteria, providing insights into digestive health and its impact on overall well-being.</li>
      <li>Follow-up with RECOUP EPHS and Metabolic Health Questionnaires: Regular assessments using the RECOUP Entire Person Health Score and metabolic health questionnaires track progress, enabling personalized interventions based on evolving health needs.</li>
    </ul>
  </section>

  <section class="pb-8 md:pb-16">
    <h3 class="text-2xl font-bold text-primary-dark mb-6">4R Approach</h3>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 1: Relief</h4>
    <ul class="list-disc pl-6 space-y-3 mb-8">
      <li>Symptoms: Disturbed sleep, gastrointestinal symptoms (bloating, constipation, etc.), acute pain, acute infection, anxiety, and panic attacks will be addressed (if present).</li>
      <li>Suggested interventions:
        <div class="mt-2 font-normal pl-0 space-y-1">
          <p>Medications, supplements and therapies.</p>
        </div>
      </li>
      <li>Assessments: continuous glucose monitoring (CGM)-based approach.</li>
      <li>Outcomes: Relief from acute symptoms and insights from CGM report.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 2: Root cause analysis</h4>
    <ul class="list-disc pl-6 space-y-3 mb-4">
      <li>Focus area: Root cause analysis of lifestyle and genetic factors.</li>
      <li>Suggested interventions: Medications, supplements and therapies.</li>
      <li>Sleep - Sleep hygiene and other interventions, e.g., Yoga Nidra, neurofeedback, iCBT.</li>
      <li>Exercise and movement: Aquatic Therapy, Exergaming (Cardiowall, Smart Play Ball, Virtual and Augmented reality-based therapy), Tai Chi, Strength and Conditioning, Resistance training, Dynamic Neurocognitive Imagery (Franklin Method).</li>
      <li>Breathwork and Meditation: Breathwork and meditation involve intentional breathing exercises and mindfulness practices. These techniques have been shown to reduce stress, improve mental clarity, and enhance overall emotional well-being.
        <ul class="list-disc pl-6 mt-2 space-y-1 text-sm">
          <li>Box breathing</li>
          <li>Diaphragmatic breathing</li>
          <li>Heart coherence meditation</li>
          <li>Yoga</li>
        </ul>
      </li>
      <li>Stress and Resilience - (Exergaming, Yoga, Tai Chi, Dynamic Neurocognitive Imagery), mindfulness, hypnotherapy, relaxation therapy.</li>
      <li>Vagal tone enhancement-
        <ul class="list-disc pl-6 mt-2 space-y-1 text-sm">
          <li>Breathwork (humming, singing, gargling, deep diaphragmatic breathing)</li>
          <li>Meditation (with mantra especially)</li>
          <li>Guided imagery</li>
          <li>Social Connections</li>
          <li>Cold exposure</li>
          <li>Exercise</li>
          <li>Massage</li>
          <li>Coffee enema</li>
          <li>Vagal nerve stimulation</li>
        </ul>
      </li>
      <li>Nutrition- Meal sequencing, balanced plate, craving management, hydration and nutrition supplements (e.g., Probiotics).</li>
      <li>Emotional trauma involves counselling, Emotional Awareness and Expression Therapy (EAET), Dialectical Behavioral Therapy (DBT), Somatic Eye Movement Desensitization and Reprocessing (EMDR), Hypnotherapy and Emotion-Focused Therapy (EFT).</li>
      <li>Environmental pollution - Detoxification- Detox diet, FN- environment</li>
      <li>Genetic and epigenetic factors- Identifying and managing.</li>
    </ul>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 3: Physiological Imbalance:</h4>
    <p class="mb-4">Physiological imbalances in cardiometabolic health can be corrected through targeted interventions that restore the body's natural functions. This involves enhancing insulin sensitivity, improving lipid profiles, and optimizing metabolic health through a multifaceted approach, including tailored nutrition, stress management, and physical activity.</p>
    <p class="font-semibold text-primary-dark mb-2"> Therapeutic Interventions</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Ozone Therapy: Promotes healing and reduces inflammation in conditions like MASLD and dyslipidemia.</li>
      <li>HRV Training: Enhances autonomic balance, supporting better blood pressure control and overall cardiovascular health.</li>
      <li>Vagal Tone Balancing: Deep breathing and mindfulness improve vagal tone, positively influencing cardiovascular health and digestive function.</li>
      <li>Expressive Arts Therapy: Music, art, and dance therapies reduce stress and improve emotional well-being, which can be beneficial for managing chronic conditions.</li>
      <li>Far Infrared and Near-Infrared Therapy: These therapies support metabolic health by improving insulin sensitivity and reducing inflammation, particularly in cases of dyslipidemia and MASLD.</li>
      <li>Aquatic Therapy: Low-impact exercises in water improve circulation and metabolic function, aiding in managing hypertension and obesity-related conditions.</li>
      <li>Coordination Dynamics Therapy: Devices like the Giger MD enhance circulation and muscle activity through low-impact movements, promoting better glucose metabolism and cardiovascular health.</li>
    </ul>
    <p class="font-semibold text-primary-dark mb-2">Assessments and Outcomes</p>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Assessments: Tools such as cardiometabolic analyzers and specific risk profilers for hypertension, dyslipidemia, hyperuricemia, and MASLD help evaluate individual risk factors and monitor progress.</li>
      <li>Outcomes: The primary goal is to correct and manage clinical imbalances associated with these conditions, improving overall health and quality of life while reducing the risk of complications.</li>
    </ul>
    <p class="mb-8">This targeted approach helps restore physiological balance, leading to long-term health improvements in individuals at risk for or managing hypertension, dyslipidemia, hyperuricemia, and MASLD.</p>

    <h4 class="text-xl font-bold text-primary-dark mb-4">Stage 4: Longevity</h4>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Focus area: Maintaining remission and preventing complications</li>
      <li>Suggested interventions:
        <div class="pl-0 mt-2 font-normal not-italic space-y-2">
          <p>Supplements: Adaptogens, Antioxidants, Phytonutrients</p>
          <p>Therapy: Resilience practice</p>
          <p>Regenerative therapies include detox therapies, colon hydrotherapy, panchakarma, sauna, ozone, molecular hydrogen, hyperbaric oxygen therapy (HBOT), polyvagal enhancement, IV therapies, chelation, far infrared, mesotherapy, and cannabinoids.</p>
        </div>
      </li>
    </ul>
    <ul class="list-disc pl-6 space-y-2 mb-4">
      <li>Assessments: Frailty Index, HRV, Physical agility and Fall risk assessment, Medical Infrared Thermography and EMG Biofeedback, BCA, BMR, Psychometric assessments, VO2 Max, etc.</li>
    </ul>
    <p class="mb-2">Time-restricted feeding/Alternate day fasting.</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Outcomes: maintenance of remission, lifestyle optimization for wellness, preventing inflammation and degeneration.</li>
    </ul>
  </section>
</div>
`,
  },
  {
    title: "Chronic inflammation Program",
    fullTitle: "RECOUP Integrative, Root-Cause Chronic Inflammation and Neuro Inflammation Program",
    desc: "Are you recovering well from chronic diseases, or is an impaired inflammatory condition ticking like a bomb inside, waiting for a catastrophic adverse health incident to happen?",
    slug: "chronic-inflammation-program",
    cover: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop",
    html: `
<div class="text-gray-600 leading-relaxed max-w-4xl">
  <section class="pb-8 md:pb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-6">RECOUP Integrative, Root-Cause Chronic Inflammation and Neuro Inflammation Program</h2>
    <p class="mb-4">Are you recovering well from chronic diseases, or is an impaired inflammatory condition ticking like a bomb inside, waiting for a catastrophic adverse health incident to happen?</p>
    <p class="mb-4">Globally, we are losing 3 out of 5 people due to chronic inflammatory conditions. 42% had more than one, and 12% of adults had 5 or more chronic conditions, often spending lakhs of rupees to save a life. Yet, chronic inflammatory conditions are on the rise, and the estimated cost of chronic disease is expected to reach $47 trillion worldwide by 2030.</p>
    <p class="mb-2">The rising epidemic of chronic inflammation is evident from:</p>
    <ul class="list-disc pl-6 space-y-2 mb-6">
      <li>a.92% of hospital admissions featuring one or many chronic diseases</li>
      <li>b.Rising incidence of joint replacements and organ failures early in life</li>
      <li>c.Sudden cardiac death responding poorly to life-saving treatments</li>
      <li>d.Overuse of painkillers, anti-inflammatory medicines, steroids, cytotoxic drugs, etc.</li>
    </ul>
    <p class="mb-4">Most people, in their current way of living, are prone to pro-inflammatory conditions that make it easy to fall ill or get injured. An estimated 76% of the population is experiencing symptoms related to chronic inflammation annually. Uncontrolled chronic inflammation lasts for months to years, leading to tissue destruction and degeneration of many organ systems, namely:</p>
    <p class="mb-6">Cardiovascular Disease, Ulcerative Colitis, Crohn's Disease, Pneumonia, Upper Respiratory Infections, Cancer, Diabetes, Arthritis, Myositis, Urinary Tract Infections, Chronic Kidney Disease, Metabolic Fatty Liver Disease, Thyroiditis, Prostatitis, Oral Sores, Sinusitis, Tonsillitis, Autoimmune and Neurodegenerative Disorders, Dementia, Alzheimer's Disease, Obesity/ Weight Loss, Stroke.</p>
    <p class="mb-4">Symptoms often appear when an underlying condition has developed for months or even years. Piecemeal care without an entire person approach fails to yield an adequate resolution of inflammation in the recovery process, risking progression to meta-inflammatory and hyper-inflammatory conditions. You may not receive the proper attention of your usual healthcare provider. You may spend a lot of money unnecessarily on an excess number of tests, medicines and interventions, while most tests may show "normal" readings despite obvious suffering in health. Also, disabling symptoms like pain, loss of function/s (temporary or permanent), loss of independence in daily activities, and side effects of medicines are costing people their work, family life, and recreational excursions. The inclusive monetary worth of loss and lost opportunities could be lakhs of rupees annually per person.</p>
    <p class="mb-2">Persisting with conventional thinking sans adoption of updated and proven medical care has severe limitations:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-6">
      <li>The dominance of diagnosis-based treatments and ignores the entire person's health needs.</li>
      <li>Cursory history taking fails to capture vital adverse incidents and conditions from the past that may also affect health in the present.</li>
      <li>Limitations in detecting silent yet harmful inflammatory changes in the absence of symptoms.</li>
      <li>Treatments are limited to suppressing manifested ailments without addressing the cause.</li>
      <li>Rising dependence on polypharmacy and their adverse side effects: steroids, NSAIDs, statins, anti-diabetics, anti-hypertensives, cytotoxic medicines, and monoclonal antibodies. Inappropriate excess use has limitations in managing the manifested severity but not resolving the underlying harm despite symptom control. There is no evidence of benefits from the life-long use of any medicine.</li>
      <li>Inadequately addressing lifestyle risks related to inflammatory foods, adverse exercise routines, sedentariness, obesity, unresolved stress, sleep hygiene, smoking, alcohol and substance use disorder.</li>
    </ol>
    <p class="mb-4">Do not let inflammation drain your health out of you and become a burden in life. Recoup's staged 4R care plan can modify many preventable chronic diseases.</p>
    <p class="mb-2">Act now! Self-report your symptoms, however subtle they may be and take charge of your well-being now and for life:</p>
    <ol class="list-decimal pl-6 space-y-2 mb-8">
      <li>Detect adverse patterns of your inflammatory control systems.</li>
      <li>Get evaluated for all known exposures, risks, harm, hazards, and stressors that may adversely affect your health.</li>
      <li>Schedule your annual preventive health check to assess your biopsychosocial health, which is vital for the well-being of your inflammatory control system.</li>
      <li>Prevent adverse changes from accumulating within you and track your progressive healthy changes.</li>
      <li>Prevent overdependence and promote appropriate use of medicines and surgeries.</li>
      <li>Overcome ignorance and gain learnings on personal care amidst exposure to risks, harm and hazards.</li>
    </ol>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Care service categories of Recoup care to control inflammation:</h3>
    <ul class="list-disc pl-6 space-y-3 mb-8">
      <li>a.Complete entire person diagnosis evaluating multiple yet interrelated biopsychosocial functions.</li>
      <li>b.Systematically evaluate acute health events of recent and/or remote past and plan for a lasting remission period, e.g., pain, infections, abdominal discomfort, seasonal illness, mood, irritability, altered senses like smell, taste, and daytime sleepiness.</li>
      <li>c.Profiling factors related to chronic inflammation, including environmental pollutants, mold, endocrine disruptors, radiation, EMFs, lifestyles, diet, weight history, sleep, relationships, workstyles, and inadvertent sickness behaviours.</li>
      <li>d.Profiling healthy functions using Health Scores, Lab panels (Basic), Metal toxin load, sleep health, memory recall, ease of experiencing pleasures, mental tasks in daily routine and digital health screens like Body Composition Analyser, Foot pressure analysis, Gait analysis, Cardiometabolic analyser, Insulin resistance, Exercise tolerance test, Performance in Augmented Reality/ Virtual Reality based games, Pulmonary function tests, Medical Infrared Thermography, surface electromyogram, neurofeedback, heart brain analysis</li>
      <li>e.DEEPAK SHARAN's pain phenotype is used to assess personal patterns associated with pain and match recommendations for resolution.</li>
      <li>f.Physical examination for subtle signs of chronic inflammation, including body language, posture, gait, speech, memory recall, vision, response to stimulus, reaction time, oral health, nutritional deficiencies, nerve functions, blood vessel functions, special senses, and pain/tender points in the body.</li>
      <li>g.Non-medicinal treatment as the first line of care, including red light therapy, medical infrared thermotherapy, cryotherapy, vagal nerve stimulation to activate restorative functions in the body, personal hygiene, nutrients and minerals in therapeutic doses, systems detox, liver support, IV nutrition, cessation of harmful substance use, circadian clock reset, breathwork, lifestyle modifications, sleep health, anti-inflammatory diet plans, calorie restriction/diet restriction programs and several options of non-invasive regenerative therapies like ozone, hydrogen, peptides, pulsed electromagnetic force fields. Personal preparation during travel to different locations, states, and countries.</li>
      <li>h.Anti-infective medicines use a mix of natural compounds and reduce dependence on excess antibiotics.</li>
      <li>i.Anti-inflammatory supplements combine natural compounds, minerals, probiotics, enzymes, vitamins, and specific formulations to reduce dependence on painkillers, NSAIDs, steroids, and cytotoxic medicines.</li>
      <li>j.Dedicated personalized programs lasting 4 weeks to 9 months to overcome functional deficits (physical/mental), pain reprocessing therapy, mindful movements, muscle strengthening program, bone strengthening program, aquatic therapy, intermittent fasting program, fat loss program, workstation ergonomics, home ergonomics, travel ergonomics and specific care for persons with obstructive sleep apnea.</li>
      <li>k.Need-based recommendations for advanced studies for inflammatory markers, complement systems, Microbiome studies, Epigenetic studies, Proteomics, DEXA scan, colonoscopy/ endoscopy, and MRI to evaluate organ functions and pathologies.</li>
      <li>l.Appropriate use and timely discontinuation of medicines with known side effects, using informed decisions based on personal health data, medical records and response to prior treatments (if any). Vaccine protocol for all ages, including elderly and travel-related needs.</li>
      <li>m.Need-based referrals for acute care of intense symptoms.</li>
    </ul>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">Key objectives of the 4 interconnected phases of treatment and care plan:</h3>
    <div class="space-y-4 mb-8">
      <p><strong class="text-primary-dark">Lasting Relief:</strong> Optimal mix of therapies for lasting recovery from discomfort, struggles, and sufferings, preventing recurrence, especially the intensity of ailment, and the incidence and tracking of the remission period since the last episode. Neutralising uncontrolled inflammation in various parts of the body under medical care.</p>
      <p><strong class="text-primary-dark">Root cause medicine:</strong> Modifying daily routines till they are optimised to meet daily health needs, thereby protecting various organs from inflammation-related harm, especially the gut, lungs, liver, nose, eyes, mouth, heart, blood vessels, nerves, bones, bone marrow, ligaments, brain regions, muscles, joints, skin, natural orifices, mucus membrane and lymph nodes among rest others</p>
      <p><strong class="text-primary-dark">Rebalancing body functions:</strong> Strengthening each level of body defences focusing on disrupting biofilms and biotoxins, eliminating toxins and their metabolites out of the body, restoring integrity of protective barrier functions in the gut, skin, brain, nose and lungs, replenishing the fast-depleting nutrients and vitamins plus harmonising cross influence between various bio physiochemical systems especially gut health, brain health, psychosocial well-being, bone marrow, hormones as also epigenetic modifications that mediate healthy immune sensing and inflammatory responses.</p>
      <p><strong class="text-primary-dark">Building Inflammation resilience:</strong> Preserving optimal control on inflammatory response towards efficient repair of tissue and elimination of harmful toxins, without adverse effects, despite uncontrolled recurring/constant exposure to risk and harm using user-friendly care including health scores, exposure check, annual preventive health check, yearly wellness physical examination, personal calendar of heat and cold therapies, infrared sauna, restorative medical massages, microbiome replenishment, IV nutrition/antioxidants, regenerative therapies including ozone, hydrogen, peptides and several more.</p>
    </div>
    <h3 class="text-2xl font-bold text-primary-dark mb-4">RECOUP Chronic Inflammation and Neuro Inflammation team:</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Functional Medicine Physicians</li>
      <li>Lifestyle Medicine Physicians</li>
      <li>Rehabilitation Physicians</li>
      <li>Orthopaedic Rheumatologists</li>
      <li>Other Specialist Physicians</li>
      <li>Ayurveda Physicians</li>
      <li>Naturopathy and Yoga Physicians</li>
      <li>Nutritionists</li>
      <li>Clinical Psychologists</li>
      <li>Physiotherapists</li>
      <li>Occupational Therapists</li>
      <li>Aquatic Therapists</li>
      <li>Health coaches</li>
      <li>Nurses</li>
      <li>Other professionals, as required</li>
      <li>Patient Care Coordinators</li>
    </ul>
  </section>
</div>
`,
  },
  {
    title: "Chronic Pain",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Chronic Pain Rehabilitation",
    desc: "The International Association for the Study of Pain (IASP) defines pain as \"an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage.\"",
    slug: "chronic-pain",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    html: chronicPainHtml,
  },
  {
    title: "Diabetes Program",
    fullTitle: "RECOUP Integrative, Root Cause Diabetes Program",
    desc: "According to the International Diabetes Federation, over 537 million adults globally live with diabetes, with an alarming increase in cases every year.",
    slug: "diabetes-program",
    cover: "https://images.unsplash.com/photo-1579154345578-ce49a9b17d0f?q=80&w=2069&auto=format&fit=crop",
    html: diabetesProgramHtml,
  },
  {
    title: "Gastrointestinal Program",
    fullTitle: "RECOUP Integrative, Root-Cause Gastrointestinal Disorders Program",
    desc: "Gastrointestinal (GI) symptoms are highly prevalent in the general population, affecting a significant portion of individuals worldwide.",
    slug: "gastrointestinal-program",
    cover: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop",
    html: gastrointestinalProgramHtml,
  },
  {
    title: "Geriatrics Program",
    fullTitle: "RECOUP Integrative, Root-Cause Geriatrics Program",
    desc: "India has the second-largest geriatric population, aged 60 years or older, globally, with projections indicating that this number will double to over 20% of the total population by 2050.",
    slug: "geriatrics-program",
    cover: "https://images.unsplash.com/photo-1516307365426-bea591f11a5e?q=80&w=2070&auto=format&fit=crop",
    html: geriatricsProgramHtml,
  },
  {
    title: "Hormonal Rebalance program",
    fullTitle: "RECOUP Integrative, Root-Cause Hormonal Rebalance Program",
    desc: "Hormone levels vary throughout life as part of natural biological processes. These variations occur as individuals progress through different life stages, from infancy to old age, and are influenced by factors such as puberty, reproductive cycles, pregnancy, menopause, and ageing.",
    slug: "hormonal-rebalance-program",
    cover: "https://images.unsplash.com/photo-1555633514-abcee6af92e1?q=80&w=2080&auto=format&fit=crop",
    html: hormonalRebalanceProgramHtml,
  },
  {
    title: "Hypermobility Rehabilitation",
    fullTitle: "RECOUP Hypermobility Rehabilitation Program",
    desc: "Ehlers-Danlos Syndromes (EDS) and Hypermobility Spectrum Disorders (HSD) are a group of heritable connective tissue disorders.",
    slug: "hypermobility-rehabilitation",
    cover: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    html: hypermobilityRehabilitationHtml,
  },
  {
    title: "Immune Health Program",
    fullTitle: "RECOUP Integrative, Root-Cause Immune Health Program",
    desc: "Are you paying the cost of poor health from dysfunctional immune responses and uncontrolled inflammation?",
    slug: "immune-health-program",
    cover: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop",
    html: immuneHealthProgramHtml,
  },
  {
    title: "Infertility Program",
    fullTitle: "RECOUP Integrative, Root-Cause Fertility Program",
    desc: "Infertility affects millions globally, with approximately 48 million couples and 186 million individuals facing fertility challenges.",
    slug: "infertility-program",
    cover: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2070&auto=format&fit=crop",
    html: infertilityProgramHtml,
  },
  {
    title: "Longevity Program",
    fullTitle: "RECOUP Health Longevity Optimization Program to lower biological age",
    desc: "According to 2020 data, the average Indian lives only 3640 weeks (70 years). Several of these 70 years are spent in poor health, with a burden of mostly preventable diseases.",
    slug: "longevity-program",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2032&auto=format&fit=crop",
    html: longevityProgramHtml,
  },
  {
    title: "Mental Health",
    fullTitle: "RECOUP Integrative, Root-Cause Mental Health Rehabilitation Program",
    desc: "Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act.",
    slug: "mental-health",
    cover: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    html: mentalHealthProgramHtml,
  },
  {
    title: "Mold Toxicity Program",
    fullTitle: "RECOUP Integrative, Root-Cause Mold Toxicity Program",
    desc: "Toxic Mold Illness is called Chronic Inflammatory Response Syndrome (CIRS).",
    slug: "mold-toxicity-program",
    cover: "https://images.unsplash.com/photo-1585320806297-9794b3b4ae0b?q=80&w=2070&auto=format&fit=crop",
    html: moldToxicityProgramHtml,
  },
  {
    title: "Multiple Sclerosis",
    fullTitle: "RECOUP Integrative Root-cause Rehabilitation Program for Multiple Sclerosis",
    desc: "Multiple Sclerosis (MS) is a chronic, immune-mediated neurodegenerative disorder that affects the central nervous system (CNS), particularly the brain and spinal cord.",
    slug: "multiple-sclerosis",
    cover: "https://images.unsplash.com/photo-1559757172-0f109c6c8c91?q=80&w=2070&auto=format&fit=crop",
    html: multipleSclerosisProgramHtml,
  },
  {
    title: "Oral Health",
    fullTitle: "RECOUP Integrative, Root-Cause Oral Health Program",
    desc: "Your mouth is more than just a smile—it's a gateway to your overall health.",
    slug: "oral-health",
    cover: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    html: oralHealthProgramHtml,
  },
  {
    title: "Osteoporosis Rehabilitation",
    fullTitle: "RECOUP Integrative, Root-Cause Osteoporosis and Metabolic Bone Disease Program",
    desc: "Osteoporosis and osteopenia are bone diseases that develop when bone mineral density and bone mass decrease or when the structure and strength of bone change.",
    slug: "osteoporosis-rehabilitation",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    html: osteoporosisRehabilitationProgramHtml,
  },
  {
    title: "Parkinson's Disease",
    fullTitle: "RECOUP Integrative Root-Cause Rehabilitation Program for Parkinson's Disease",
    desc: "Parkinson's Disease (PD) is the second most common neurodegenerative disorder worldwide, affecting over 10 million individuals globally (Parkinson's Foundation, 2023).",
    slug: "parkinsons-disease",
    cover: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
    html: parkinsonsDiseaseProgramHtml,
  },
  {
    title: "Primary Care",
    fullTitle: "RECOUP Integrative, Root-Cause Primary Care Program",
    desc: "Self-paying patients visit either a \"family doctor\" or a specialist based on Google or recommendations from friends, family, or their employer.",
    slug: "primary-care",
    cover: "https://images.unsplash.com/photo-1584432810601-6c7afbccc890?q=80&w=2070&auto=format&fit=crop",
    html: primaryCareProgramHtml,
  },
  {
    title: "Respiratory Health",
    fullTitle: "RECOUP Integrative, Root-Cause Respiratory Health Program",
    desc: "India faces a significant burden of respiratory diseases, particularly chronic obstructive pulmonary disease (COPD), asthma and respiratory tract infections (RTIs).",
    slug: "respiratory-health",
    cover: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop",
    html: respiratoryHealthProgramHtml,
  },
  {
    title: "Rheumatological Rehabilitation",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Rheumatological Rehabilitation",
    desc: "Arthritis is a joint inflammation that can cause stiffness or pain.",
    slug: "rheumatological-rehabilitation",
    cover: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
    html: rheumatologicalRehabilitationProgramHtml,
  },
  {
    title: "School Health",
    fullTitle: "The Recoup Health School Program",
    desc: "The Recoup Health School Program aims to revolutionize student wellness in India through a pioneering, holistic approach to school-based healthcare.",
    slug: "school-health",
    cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
    html: schoolHealthProgramHtml,
  },
  {
    title: "Sleep and Circadian Rhythm Clinic",
    fullTitle: "RECOUP Sleep and Circadian Rhythm Clinic (RSCRC)",
    desc: "Did You Know? India is facing a significant rise in sleep disorders, especially in the wake of the SARS-CoV-2 pandemic.",
    slug: "sleep-circadian-rhythm-clinic",
    cover: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2070&auto=format&fit=crop",
    html: sleepCircadianRhythmClinicProgramHtml,
  },
  {
    title: "Smoking Cessation Program",
    fullTitle: "RECOUP Smoking Cessation Program (RSCP)",
    desc: "Approximately 27% of Indian adults engage in tobacco consumption, making India the second-highest country in global tobacco use.",
    slug: "smoking-cessation-program",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    html: smokingCessationProgramHtml,
  },
  {
    title: "Spinal Deformity Rehabilitation",
    fullTitle: "RECOUP Intensive Spinal Deformity Rehabilitation Program",
    desc: "Spinal deformity refers to an abnormality in the spine's curves. It encompasses deformations in the coronal plane, known as scoliosis, and those in the sagittal plane, called kyphosis.",
    slug: "spinal-deformity-rehabilitation",
    cover: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    html: spinalDeformityRehabilitationProgramHtml,
  },
  {
    title: "Stress and Positive Relationships Program",
    fullTitle: "RECOUP Stress and Positive Relationships Program (RSPRP)",
    desc: "77% of Indians exhibit symptoms of stress. Younger demographics, particularly Gen Z, report significantly higher rates of anxiety and stress-related issues.",
    slug: "stress-positive-relationships-program",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2032&auto=format&fit=crop",
    html: stressPositiveRelationshipsProgramHtml,
  },
  {
    title: "Stroke Rehabilitation",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Stroke (CVA)",
    desc: "Stroke or cerebrovascular accident (CVA), is a major global public health challenge and a leading cause of long-term disability, cognitive decline, and dependency.",
    slug: "stroke-rehabilitation",
    cover: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop",
    html: strokeRehabilitationProgramHtml,
  },
  {
    title: "Traumatic Brain Injury",
    fullTitle: "Recoup's Integrative Root-Cause Rehabilitation Program for Traumatic Brain Injury (TBI)",
    desc: "Traumatic Brain Injury (TBI) is a highly prevalent, debilitating, and often under-recognized public health crisis.",
    slug: "traumatic-brain-injury",
    cover: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1974&auto=format&fit=crop",
    html: traumaticBrainInjuryProgramHtml,
  },
  {
    title: "Travel Medicine Clinic",
    fullTitle: "RECOUP Travel Medicine Clinic",
    desc: "At RECOUP, we specialize in keeping travellers healthy and safe. Whether you're planning a backpacking trip, a family vacation, or a business trip abroad, our dedicated team of travel medicine experts is here to help you prepare.",
    slug: "travel-medicine-clinic",
    cover: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop",
    html: travelMedicineClinicProgramHtml,
  },
  {
    title: "Weight Management",
    fullTitle: "RECOUP Integrative, Root-Cause Weight Management Program",
    desc: "The prevalence of obesity in India is rising rapidly, with approximately 30% of adults and 20% of children and adolescents classified as overweight or obese.",
    slug: "weight-management",
    cover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    html: weightManagementProgramHtml,
  },

];
