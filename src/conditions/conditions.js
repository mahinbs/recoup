import rasap from './content/rasap.json';
import alzheimersCognitiveDecline from './content/alzheimers-cognitive-decline.json';
import autismSpectrumDisorders from './content/autism-spectrum-disorders.json';
import bioenergeticsProgram from './content/bioenergetics-program.json';
import cancerRehabilitation from './content/cancer-rehabilitation.json';
import cardiometabolicProgram from './content/cardiometabolic-program.json';
import chronicInflammationProgram from './content/chronic-inflammation-program.json';
import chronicPain from './content/chronic-pain.json';
import diabetesProgram from './content/diabetes-program.json';
import gastrointestinalProgram from './content/gastrointestinal-program.json';
import geriatricsProgram from './content/geriatrics-program.json';
import hormonalRebalanceProgram from './content/hormonal-rebalance-program.json';
import hypermobilityRehabilitation from './content/hypermobility-rehabilitation.json';
import immuneHealthProgram from './content/immune-health-program.json';
import infertilityProgram from './content/infertility-program.json';
import longevityProgram from './content/longevity-program.json';
import mentalHealth from './content/mental-health.json';
import moldToxicityProgram from './content/mold-toxicity-program.json';
import multipleSclerosis from './content/multiple-sclerosis.json';
import oralHealth from './content/oral-health.json';
import osteoporosisRehabilitation from './content/osteoporosis-rehabilitation.json';
import parkinsonsDisease from './content/parkinsons-disease.json';
import primaryCare from './content/primary-care.json';
import respiratoryHealth from './content/respiratory-health.json';
import rheumatologicalRehabilitation from './content/rheumatological-rehabilitation.json';
import schoolHealth from './content/school-health.json';
import sleepCircadianRhythmClinic from './content/sleep-circadian-rhythm-clinic.json';
import smokingCessationProgram from './content/smoking-cessation-program.json';
import spinalDeformityRehabilitation from './content/spinal-deformity-rehabilitation.json';
import stressPositiveRelationshipsProgram from './content/stress-positive-relationships-program.json';
import strokeRehabilitation from './content/stroke-rehabilitation.json';
import traumaticBrainInjury from './content/traumatic-brain-injury.json';
import travelMedicineClinic from './content/travel-medicine-clinic.json';
import weightManagement from './content/weight-management.json';

const coverRasap = "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverAlzheimersCognitiveDecline = "https://images.pexels.com/photos/7551684/pexels-photo-7551684.jpeg?cs=srgb&dl=pexels-kampus-production-7551684.jpg&fm=jpg";
const coverAutismSpectrumDisorders = "https://www.careplusautism.com/wp-content/uploads/2024/10/toys-for-autistic-kids-6.jpg";
const coverBioenergeticsProgram = "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverCancerRehabilitation = "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverCardiometabolicProgram = "https://images.pexels.com/photos/5340270/pexels-photo-5340270.jpeg?cs=srgb&dl=pexels-puwadon-sangngern-5340270.jpg&fm=jpg";
const coverChronicInflammationProgram = "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX29828022.jpg";
const coverChronicPain = "https://blueskypt.com/wp-content/uploads/2024/07/Chronic_Pain_Relief_Techniques_for_a_More_Comfortable_Life-1-1024x400.jpeg";
const coverDiabetesProgram = "https://images.pexels.com/photos/16984200/pexels-photo-16984200.jpeg?_gl=1*4fk61w*_ga*MjAxMDU4Mjc2MS4xNzY4NDU1MzQ1*_ga_8JE65Q40S6*czE3NzUwNDQyNTckbzckZzEkdDE3NzUwNDQzNDEkajQwJGwwJGgw";
const coverGastrointestinalProgram = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverGeriatricsProgram = "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverHormonalRebalanceProgram = "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverHypermobilityRehabilitation = "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?cs=srgb&dl=pexels-wesleydavi-3622614.jpg&fm=jpg";
const coverImmuneHealthProgram = "https://images.pexels.com/photos/7615467/pexels-photo-7615467.jpeg?_gl=1*t51p7x*_ga*MjAxMDU4Mjc2MS4xNzY4NDU1MzQ1*_ga_8JE65Q40S6*czE3NzUwNDQyNTckbzckZzEkdDE3NzUwNDQ0MjgkajEzJGwwJGgw";
const coverInfertilityProgram = "https://afth.org/wp-content/uploads/couple-1853996_1920.jpg";
const coverLongevityProgram = "https://as2.ftcdn.net/v2/jpg/08/15/98/91/1000_F_815989139_8ldkdXdC32hKvUf7RTmHkotujiwfX2Gw.jpg";
const coverMentalHealth = "https://img.freepik.com/premium-photo/practicing-mindfulness-meditation-calm-focused-mental-wellbeing_1003615-19318.jpg";
const coverMoldToxicityProgram = "https://drnathaliebeauchamp.com/wp-content/uploads/2017/10/stockfresh_7839721_person-hand-cleaning-moldy-wall_sizeM.jpg";
const coverMultipleSclerosis = "http://guidancephysicaltherapy.com/wp-content/uploads/sites/6/2021/10/multiple-sclerosis-exercises.jpg";
const coverOralHealth = "https://img.freepik.com/premium-photo/importance-dental-care-oral-health_1161356-61480.jpg";
const coverOsteoporosisRehabilitation = "https://images.pexels.com/photos/7551608/pexels-photo-7551608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverParkinsonsDisease = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverPrimaryCare = "https://doctorsonduty.com/wp-content/themes/dod/images/slides/square3.jpg";
const coverRespiratoryHealth = "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverRheumatologicalRehabilitation = "https://images.pexels.com/photos/5452204/pexels-photo-5452204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverSchoolHealth = "https://images.pexels.com/photos/8363023/pexels-photo-8363023.jpeg?_gl=1*1esdi13*_ga*MjAxMDU4Mjc2MS4xNzY4NDU1MzQ1*_ga_8JE65Q40S6*czE3NzUwNDQyNTckbzckZzEkdDE3NzUwNDQyNjIkajU1JGwwJGgw";
const coverSleepCircadianRhythmClinic = "https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverSmokingCessationProgram = "https://img.fruugo.com/product/8/27/2036801278_max.jpg";
const coverSpinalDeformityRehabilitation = "https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const coverStressPositiveRelationshipsProgram = "https://livehappy.com/wp-content/uploads/2019/08/relationships.jpg";
const coverStrokeRehabilitation = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=1001,fit=crop,trim=0;73.40677966101696;155.08253692441355;86.84745762711864/dWxexEryeXf8BNb5/stroke-rehabilitation-center-in-kochi-YKb1G2qBp4ivqq23.jpg";
const coverTraumaticBrainInjury = "https://www.brainspinejointgroup.com/images/traumatic-brain-injury/traumatic-brain-injury.jpeg";
const coverTravelMedicineClinic = "https://images.pexels.com/photos/8460089/pexels-photo-8460089.jpeg?_gl=1*a16ugj*_ga*MjAxMDU4Mjc2MS4xNzY4NDU1MzQ1*_ga_8JE65Q40S6*czE3NzUwNDQyNTckbzckZzEkdDE3NzUwNDQ1NDUkajYwJGwwJGgw";
const coverWeightManagement = "https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const conditions = [
  {
    title: "Alcohol and Substance Abuse Program",
    fullTitle: "RECOUP Alcohol and Substance Abuse Program (RASAP)",
    desc: "RECOUP Alcohol and Substance Abuse Program (RASAP) aims to address these pressing issues through comprehensive treatment and support services tailored to the needs of individuals struggling with substance use. By providing access to counselling, rehabilitation, and community outreach, our program seeks to reduce the prevalence of substance abuse and promote healthier lifestyles across India.",
    slug: "rasap",
    cover: coverRasap,
    category: "Mental Health & Recovery",
    html: rasap.html,
  },
  {
    title: "Alzheimer's and Cognitive Decline",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Alzheimer's Disease (AD) and Cognitive Decline",
    desc: "Alzheimer's Disease (AD) is the most common cause of dementia worldwide, accounting for 60–80% of all cases. It currently affects over 55 million people globally, with one new case developing every 3 seconds (WHO, 2023; Alzheimer's Disease International, 2022).",
    slug: "alzheimers-cognitive-decline",
    cover: coverAlzheimersCognitiveDecline,
    category: "Neurological",
    html: alzheimersCognitiveDecline.html,
  },
  {
    title: "Autism Spectrum Disorders",
    fullTitle: "RECOUP Integrative, Root-Cause Rehabilitation for Autism Spectrum Disorders",
    desc: "Autism is a spectrum disorder, meaning it presents differently in everyone. It is generally characterized by social, behavioral, and communication challenges that can impact individuals at different levels.",
    slug: "autism-spectrum-disorders",
    cover: coverAutismSpectrumDisorders,
    category: "Neurological",
    html: autismSpectrumDisorders.html,
  },
  {
    title: "Bioenergetics",
    fullTitle: "RECOUP Integrative, Root-Cause Bioenergetics Program",
    desc: "As global energy demands rise and the focus shifts to renewable sources, it's crucial to recognize that energy dynamics are equally important within the human body. Bioenergetics, the study of energy flow in biological systems, plays a fundamental role in human health.",
    slug: "bioenergetics-program",
    cover: coverBioenergeticsProgram,
    category: "Wellness & Longevity",
    html: bioenergeticsProgram.html,
  },
  {
    title: "Cancer",
    fullTitle: "RECOUP Integrative, Root-Cause Cancer Rehabilitation Program",
    desc: "This Program aims to assist cancer patients of all ages in overcoming the effects of the disease and its treatment on daily functioning and quality of life. This applies to both those who have recently been diagnosed with cancer and those who are in remission after having completed treatment some time ago.",
    slug: "cancer-rehabilitation",
    cover: coverCancerRehabilitation,
    category: "Metabolic & Internal Medicine",
    html: cancerRehabilitation.html,
  },
  {
    title: "Cardiometabolic Program",
    fullTitle: "RECOUP Integrative, Root-Cause Cardiometabolic Program",
    desc: "Cardiometabolic health is essential for a long, high-quality life, but conditions like hypertension, dyslipidemia, hyperuricemia, and fatty liver are increasingly common and can shorten lifespan.",
    slug: "cardiometabolic-program",
    cover: coverCardiometabolicProgram,
    category: "Metabolic & Internal Medicine",
    html: cardiometabolicProgram.html,
  },
  {
    title: "Chronic inflammation Program",
    fullTitle: "RECOUP Integrative, Root-Cause Chronic Inflammation and Neuro Inflammation Program",
    desc: "Are you recovering well from chronic diseases, or is an impaired inflammatory condition ticking like a bomb inside, waiting for a catastrophic adverse health incident to happen?",
    slug: "chronic-inflammation-program",
    cover: coverChronicInflammationProgram,
    category: "Mental Health & Recovery",
    html: chronicInflammationProgram.html,
  },
  {
    title: "Chronic Pain",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Chronic Pain Rehabilitation",
    desc: "The International Association for the Study of Pain (IASP) defines pain as \"an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage.\"",
    slug: "chronic-pain",
    cover: coverChronicPain,
    category: "Physical Rehab & Pain",
    html: chronicPain.html,
  },
  {
    title: "Diabetes Program",
    fullTitle: "RECOUP Integrative, Root Cause Diabetes Program",
    desc: "According to the International Diabetes Federation, over 537 million adults globally live with diabetes, with an alarming increase in cases every year.",
    slug: "diabetes-program",
    cover: coverDiabetesProgram,
    category: "Metabolic & Internal Medicine",
    html: diabetesProgram.html,
  },
  {
    title: "Gastrointestinal Program",
    fullTitle: "RECOUP Integrative, Root-Cause Gastrointestinal Disorders Program",
    desc: "Gastrointestinal (GI) symptoms are highly prevalent in the general population, affecting a significant portion of individuals worldwide.",
    slug: "gastrointestinal-program",
    cover: coverGastrointestinalProgram,
    category: "Metabolic & Internal Medicine",
    html: gastrointestinalProgram.html,
  },
  {
    title: "Geriatrics Program",
    fullTitle: "RECOUP Integrative, Root-Cause Geriatrics Program",
    desc: "India has the second-largest geriatric population, aged 60 years or older, globally, with projections indicating that this number will double to over 20% of the total population by 2050.",
    slug: "geriatrics-program",
    cover: coverGeriatricsProgram,
    category: "Specialized Care",
    html: geriatricsProgram.html,
  },
  {
    title: "Hormonal Rebalance program",
    fullTitle: "RECOUP Integrative, Root-Cause Hormonal Rebalance Program",
    desc: "Hormone levels vary throughout life as part of natural biological processes. These variations occur as individuals progress through different life stages, from infancy to old age, and are influenced by factors such as puberty, reproductive cycles, pregnancy, menopause, and ageing.",
    slug: "hormonal-rebalance-program",
    cover: coverHormonalRebalanceProgram,
    category: "Wellness & Longevity",
    html: hormonalRebalanceProgram.html,
  },
  {
    title: "Hypermobility Rehabilitation",
    fullTitle: "RECOUP Hypermobility Rehabilitation Program",
    desc: "Ehlers-Danlos Syndromes (EDS) and Hypermobility Spectrum Disorders (HSD) are a group of heritable connective tissue disorders.",
    slug: "hypermobility-rehabilitation",
    cover: coverHypermobilityRehabilitation,
    category: "Physical Rehab & Pain",
    html: hypermobilityRehabilitation.html,
  },
  {
    title: "Immune Health Program",
    fullTitle: "RECOUP Integrative, Root-Cause Immune Health Program",
    desc: "Are you paying the cost of poor health from dysfunctional immune responses and uncontrolled inflammation?",
    slug: "immune-health-program",
    cover: coverImmuneHealthProgram,
    category: "Wellness & Longevity",
    html: immuneHealthProgram.html,
  },
  {
    title: "Infertility Program",
    fullTitle: "RECOUP Integrative, Root-Cause Fertility Program",
    desc: "Infertility affects millions globally, with approximately 48 million couples and 186 million individuals facing fertility challenges.",
    slug: "infertility-program",
    cover: coverInfertilityProgram,
    category: "Specialized Care",
    html: infertilityProgram.html,
  },
  {
    title: "Longevity Program",
    fullTitle: "RECOUP Health Longevity Optimization Program to lower biological age",
    desc: "According to 2020 data, the average Indian lives only 3640 weeks (70 years). Several of these 70 years are spent in poor health, with a burden of mostly preventable diseases.",
    slug: "longevity-program",
    cover: coverLongevityProgram,
    category: "Wellness & Longevity",
    html: longevityProgram.html,
  },
  {
    title: "Mental Health",
    fullTitle: "RECOUP Integrative, Root-Cause Mental Health Rehabilitation Program",
    desc: "Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act.",
    slug: "mental-health",
    cover: coverMentalHealth,
    category: "Mental Health & Recovery",
    html: mentalHealth.html,
  },
  {
    title: "Mold Toxicity Program",
    fullTitle: "RECOUP Integrative, Root-Cause Mold Toxicity Program",
    desc: "Toxic Mold Illness is called Chronic Inflammatory Response Syndrome (CIRS).",
    slug: "mold-toxicity-program",
    cover: coverMoldToxicityProgram,
    category: "Specialized Care",
    html: moldToxicityProgram.html,
  },
  {
    title: "Multiple Sclerosis",
    fullTitle: "RECOUP Integrative Root-cause Rehabilitation Program for Multiple Sclerosis",
    desc: "Multiple Sclerosis (MS) is a chronic, immune-mediated neurodegenerative disorder that affects the central nervous system (CNS), particularly the brain and spinal cord.",
    slug: "multiple-sclerosis",
    cover: coverMultipleSclerosis,
    category: "Neurological",
    html: multipleSclerosis.html,
  },
  {
    title: "Oral Health",
    fullTitle: "RECOUP Integrative, Root-Cause Oral Health Program",
    desc: "Your mouth is more than just a smile—it's a gateway to your overall health.",
    slug: "oral-health",
    cover: coverOralHealth,
    category: "Metabolic & Internal Medicine",
    html: oralHealth.html,
  },
  {
    title: "Osteoporosis Rehabilitation",
    fullTitle: "RECOUP Integrative, Root-Cause Osteoporosis and Metabolic Bone Disease Program",
    desc: "Osteoporosis and osteopenia are bone diseases that develop when bone mineral density and bone mass decrease or when the structure and strength of bone change.",
    slug: "osteoporosis-rehabilitation",
    cover: coverOsteoporosisRehabilitation,
    category: "Physical Rehab & Pain",
    html: osteoporosisRehabilitation.html,
  },
  {
    title: "Parkinson's Disease",
    fullTitle: "RECOUP Integrative Root-Cause Rehabilitation Program for Parkinson's Disease",
    desc: "Parkinson's Disease (PD) is the second most common neurodegenerative disorder worldwide, affecting over 10 million individuals globally (Parkinson's Foundation, 2023).",
    slug: "parkinsons-disease",
    cover: coverParkinsonsDisease,
    category: "Neurological",
    html: parkinsonsDisease.html,
  },
  {
    title: "Primary Care",
    fullTitle: "RECOUP Integrative, Root-Cause Primary Care Program",
    desc: "Self-paying patients visit either a \"family doctor\" or a specialist based on Google or recommendations from friends, family, or their employer.",
    slug: "primary-care",
    cover: coverPrimaryCare,
    category: "Specialized Care",
    html: primaryCare.html,
  },
  {
    title: "Respiratory Health",
    fullTitle: "RECOUP Integrative, Root-Cause Respiratory Health Program",
    desc: "India faces a significant burden of respiratory diseases, particularly chronic obstructive pulmonary disease (COPD), asthma and respiratory tract infections (RTIs).",
    slug: "respiratory-health",
    cover: coverRespiratoryHealth,
    category: "Metabolic & Internal Medicine",
    html: respiratoryHealth.html,
  },
  {
    title: "Rheumatological Rehabilitation",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Rheumatological Rehabilitation",
    desc: "Arthritis is a joint inflammation that can cause stiffness or pain.",
    slug: "rheumatological-rehabilitation",
    cover: coverRheumatologicalRehabilitation,
    category: "Physical Rehab & Pain",
    html: rheumatologicalRehabilitation.html,
  },
  {
    title: "School Health",
    fullTitle: "The Recoup Health School Program",
    desc: "The Recoup Health School Program aims to revolutionize student wellness in India through a pioneering, holistic approach to school-based healthcare.",
    slug: "school-health",
    cover: coverSchoolHealth,
    category: "Specialized Care",
    html: schoolHealth.html,
  },
  {
    title: "Sleep and Circadian Rhythm Clinic",
    fullTitle: "RECOUP Sleep and Circadian Rhythm Clinic (RSCRC)",
    desc: "Did You Know? India is facing a significant rise in sleep disorders, especially in the wake of the SARS-CoV-2 pandemic.",
    slug: "sleep-circadian-rhythm-clinic",
    cover: coverSleepCircadianRhythmClinic,
    category: "Mental Health & Recovery",
    html: sleepCircadianRhythmClinic.html,
  },
  {
    title: "Smoking Cessation Program",
    fullTitle: "RECOUP Smoking Cessation Program (RSCP)",
    desc: "Approximately 27% of Indian adults engage in tobacco consumption, making India the second-highest country in global tobacco use.",
    slug: "smoking-cessation-program",
    cover: coverSmokingCessationProgram,
    category: "Mental Health & Recovery",
    html: smokingCessationProgram.html,
  },
  {
    title: "Spinal Deformity Rehabilitation",
    fullTitle: "RECOUP Intensive Spinal Deformity Rehabilitation Program",
    desc: "Spinal deformity refers to an abnormality in the spine's curves. It encompasses deformations in the coronal plane, known as scoliosis, and those in the sagittal plane, called kyphosis.",
    slug: "spinal-deformity-rehabilitation",
    cover: coverSpinalDeformityRehabilitation,
    category: "Physical Rehab & Pain",
    html: spinalDeformityRehabilitation.html,
  },
  {
    title: "Stress and Positive Relationships Program",
    fullTitle: "RECOUP Stress and Positive Relationships Program (RSPRP)",
    desc: "77% of Indians exhibit symptoms of stress. Younger demographics, particularly Gen Z, report significantly higher rates of anxiety and stress-related issues.",
    slug: "stress-positive-relationships-program",
    cover: coverStressPositiveRelationshipsProgram,
    category: "Mental Health & Recovery",
    html: stressPositiveRelationshipsProgram.html,
  },
  {
    title: "Stroke Rehabilitation",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Stroke (CVA)",
    desc: "Stroke or cerebrovascular accident (CVA), is a major global public health challenge and a leading cause of long-term disability, cognitive decline, and dependency.",
    slug: "stroke-rehabilitation",
    cover: coverStrokeRehabilitation,
    category: "Neurological",
    html: strokeRehabilitation.html,
  },
  {
    title: "Traumatic Brain Injury",
    fullTitle: "Recoup's Integrative Root-Cause Rehabilitation Program for Traumatic Brain Injury (TBI)",
    desc: "Traumatic Brain Injury (TBI) is a highly prevalent, debilitating, and often under-recognized public health crisis.",
    slug: "traumatic-brain-injury",
    cover: coverTraumaticBrainInjury,
    category: "Neurological",
    html: traumaticBrainInjury.html,
  },
  {
    title: "Travel Medicine Clinic",
    fullTitle: "RECOUP Travel Medicine Clinic",
    desc: "At RECOUP, we specialize in keeping travellers healthy and safe. Whether you're planning a backpacking trip, a family vacation, or a business trip abroad, our dedicated team of travel medicine experts is here to help you prepare.",
    slug: "travel-medicine-clinic",
    cover: coverTravelMedicineClinic,
    category: "Specialized Care",
    html: travelMedicineClinic.html,
  },
  {
    title: "Weight Management",
    fullTitle: "RECOUP Integrative, Root-Cause Weight Management Program",
    desc: "The prevalence of obesity in India is rising rapidly, with approximately 30% of adults and 20% of children and adolescents classified as overweight or obese.",
    slug: "weight-management",
    cover: coverWeightManagement,
    category: "Wellness & Longevity",
    html: weightManagement.html,
  },
];
