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

import coverRasap from '../assets/conditions/Alcohol and Substance Abuse Program.png';
import coverAlzheimersCognitiveDecline from "../assets/conditions/Alzheimer's Disease (AD) and Cognitive Decline.png";
import coverAutismSpectrumDisorders from '../assets/conditions/Autism Spectrum.png';
import coverBioenergeticsProgram from '../assets/conditions/Bioenergetics Program.jpeg';
import coverCancerRehabilitation from '../assets/conditions/Cancer Rehabilitation Program.png';
import coverCardiometabolicProgram from '../assets/conditions/Cardiometabolic Program.png';
import coverChronicInflammationProgram from '../assets/conditions/Chronic Inflammation and Neuro Inflammation.png';
import coverChronicPain from '../assets/conditions/Chronic Pain Rehabilitation.png';
import coverDiabetesProgram from '../assets/conditions/Root Cause Diabetes.png';
import coverGastrointestinalProgram from '../assets/conditions/Gastrointestinal.png';
import coverGeriatricsProgram from '../assets/conditions/Geriatrics Program.png';
import coverHormonalRebalanceProgram from '../assets/conditions/Root-Cause Hormonal Rebalance Program.png';
import coverHypermobilityRehabilitation from '../assets/conditions/Hypermobility Rehabilitation Program.jpeg';
import coverImmuneHealthProgram from '../assets/conditions/Immune Health Program.png';
import coverInfertilityProgram from '../assets/conditions/Root-Cause Fertility Program.png';
import coverLongevityProgram from '../assets/conditions/Longevity Optimization Program to lower biological age.png';
import coverMentalHealth from '../assets/conditions/Mental Health Rehabilitation Program.jpeg';
import coverMoldToxicityProgram from '../assets/conditions/Root-Cause Mold Toxicity Program.png';
import coverMultipleSclerosis from '../assets/conditions/Multiple Sclerosis.jpeg';
import coverOralHealth from '../assets/conditions/Oral Health.jpeg';
import coverOsteoporosisRehabilitation from '../assets/conditions/Osteoporosis and Metabolic Bone Disease Program.jpeg';
import coverParkinsonsDisease from "../assets/conditions/Parkinson's Disease.jpeg";
import coverPrimaryCare from '../assets/conditions/Primary Care Program.jpeg';
import coverRespiratoryHealth from '../assets/conditions/Respiratory Health.jpeg';
import coverRheumatologicalRehabilitation from '../assets/conditions/Rheumatological Rehabilitation.jpeg';
import coverSchoolHealth from '../assets/conditions/Health School Program.jpeg';
import coverSleepCircadianRhythmClinic from '../assets/conditions/Sleep and Circadian Rhythm Clinic (RSCRC).jpg';
import coverSmokingCessationProgram from '../assets/conditions/Smoking Cessation Program.jpeg';
import coverSpinalDeformityRehabilitation from '../assets/conditions/Spinal Deformity Rehabilitation Program.jpeg';
import coverStressPositiveRelationshipsProgram from '../assets/conditions/Stress and Positive Relationships Program.jpeg';
import coverStrokeRehabilitation from '../assets/conditions/Program for Stroke.jpeg';
import coverTraumaticBrainInjury from '../assets/conditions/Program for Traumatic Brain Injury.jpeg';
import coverTravelMedicineClinic from '../assets/conditions/Travel Medicine Clinic.jpeg';
import coverWeightManagement from '../assets/conditions/Weight Management Program.jpeg';

export const conditions = [
  {
    title: "Alcohol and Substance Abuse Program",
    fullTitle: "RECOUP Alcohol and Substance Abuse Program (RASAP)",
    desc: "RECOUP Alcohol and Substance Abuse Program (RASAP) aims to address these pressing issues through comprehensive treatment and support services tailored to the needs of individuals struggling with substance use. By providing access to counselling, rehabilitation, and community outreach, our program seeks to reduce the prevalence of substance abuse and promote healthier lifestyles across India.",
    slug: "rasap",
    cover: coverRasap,
    html: rasap.html,
  },
  {
    title: "Alzheimer's and Cognitive Decline",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Alzheimer's Disease (AD) and Cognitive Decline",
    desc: "Alzheimer's Disease (AD) is the most common cause of dementia worldwide, accounting for 60–80% of all cases. It currently affects over 55 million people globally, with one new case developing every 3 seconds (WHO, 2023; Alzheimer's Disease International, 2022).",
    slug: "alzheimers-cognitive-decline",
    cover: coverAlzheimersCognitiveDecline,
    html: alzheimersCognitiveDecline.html,
  },
  {
    title: "Autism Spectrum Disorders",
    fullTitle: "RECOUP Integrative, Root-Cause Rehabilitation for Autism Spectrum Disorders",
    desc: "Autism is a spectrum disorder, meaning it presents differently in everyone. It is generally characterized by social, behavioral, and communication challenges that can impact individuals at different levels.",
    slug: "autism-spectrum-disorders",
    cover: coverAutismSpectrumDisorders,
    html: autismSpectrumDisorders.html,
  },
  {
    title: "Bioenergetics",
    fullTitle: "RECOUP Integrative, Root-Cause Bioenergetics Program",
    desc: "As global energy demands rise and the focus shifts to renewable sources, it's crucial to recognize that energy dynamics are equally important within the human body. Bioenergetics, the study of energy flow in biological systems, plays a fundamental role in human health.",
    slug: "bioenergetics-program",
    cover: coverBioenergeticsProgram,
    html: bioenergeticsProgram.html,
  },
  {
    title: "Cancer",
    fullTitle: "RECOUP Integrative, Root-Cause Cancer Rehabilitation Program",
    desc: "This Program aims to assist cancer patients of all ages in overcoming the effects of the disease and its treatment on daily functioning and quality of life. This applies to both those who have recently been diagnosed with cancer and those who are in remission after having completed treatment some time ago.",
    slug: "cancer-rehabilitation",
    cover: coverCancerRehabilitation,
    html: cancerRehabilitation.html,
  },
  {
    title: "Cardiometabolic Program",
    fullTitle: "RECOUP Integrative, Root-Cause Cardiometabolic Program",
    desc: "Cardiometabolic health is essential for a long, high-quality life, but conditions like hypertension, dyslipidemia, hyperuricemia, and fatty liver are increasingly common and can shorten lifespan.",
    slug: "cardiometabolic-program",
    cover: coverCardiometabolicProgram,
    html: cardiometabolicProgram.html,
  },
  {
    title: "Chronic inflammation Program",
    fullTitle: "RECOUP Integrative, Root-Cause Chronic Inflammation and Neuro Inflammation Program",
    desc: "Are you recovering well from chronic diseases, or is an impaired inflammatory condition ticking like a bomb inside, waiting for a catastrophic adverse health incident to happen?",
    slug: "chronic-inflammation-program",
    cover: coverChronicInflammationProgram,
    html: chronicInflammationProgram.html,
  },
  {
    title: "Chronic Pain",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Chronic Pain Rehabilitation",
    desc: "The International Association for the Study of Pain (IASP) defines pain as \"an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage.\"",
    slug: "chronic-pain",
    cover: coverChronicPain,
    html: chronicPain.html,
  },
  {
    title: "Diabetes Program",
    fullTitle: "RECOUP Integrative, Root Cause Diabetes Program",
    desc: "According to the International Diabetes Federation, over 537 million adults globally live with diabetes, with an alarming increase in cases every year.",
    slug: "diabetes-program",
    cover: coverDiabetesProgram,
    html: diabetesProgram.html,
  },
  {
    title: "Gastrointestinal Program",
    fullTitle: "RECOUP Integrative, Root-Cause Gastrointestinal Disorders Program",
    desc: "Gastrointestinal (GI) symptoms are highly prevalent in the general population, affecting a significant portion of individuals worldwide.",
    slug: "gastrointestinal-program",
    cover: coverGastrointestinalProgram,
    html: gastrointestinalProgram.html,
  },
  {
    title: "Geriatrics Program",
    fullTitle: "RECOUP Integrative, Root-Cause Geriatrics Program",
    desc: "India has the second-largest geriatric population, aged 60 years or older, globally, with projections indicating that this number will double to over 20% of the total population by 2050.",
    slug: "geriatrics-program",
    cover: coverGeriatricsProgram,
    html: geriatricsProgram.html,
  },
  {
    title: "Hormonal Rebalance program",
    fullTitle: "RECOUP Integrative, Root-Cause Hormonal Rebalance Program",
    desc: "Hormone levels vary throughout life as part of natural biological processes. These variations occur as individuals progress through different life stages, from infancy to old age, and are influenced by factors such as puberty, reproductive cycles, pregnancy, menopause, and ageing.",
    slug: "hormonal-rebalance-program",
    cover: coverHormonalRebalanceProgram,
    html: hormonalRebalanceProgram.html,
  },
  {
    title: "Hypermobility Rehabilitation",
    fullTitle: "RECOUP Hypermobility Rehabilitation Program",
    desc: "Ehlers-Danlos Syndromes (EDS) and Hypermobility Spectrum Disorders (HSD) are a group of heritable connective tissue disorders.",
    slug: "hypermobility-rehabilitation",
    cover: coverHypermobilityRehabilitation,
    html: hypermobilityRehabilitation.html,
  },
  {
    title: "Immune Health Program",
    fullTitle: "RECOUP Integrative, Root-Cause Immune Health Program",
    desc: "Are you paying the cost of poor health from dysfunctional immune responses and uncontrolled inflammation?",
    slug: "immune-health-program",
    cover: coverImmuneHealthProgram,
    html: immuneHealthProgram.html,
  },
  {
    title: "Infertility Program",
    fullTitle: "RECOUP Integrative, Root-Cause Fertility Program",
    desc: "Infertility affects millions globally, with approximately 48 million couples and 186 million individuals facing fertility challenges.",
    slug: "infertility-program",
    cover: coverInfertilityProgram,
    html: infertilityProgram.html,
  },
  {
    title: "Longevity Program",
    fullTitle: "RECOUP Health Longevity Optimization Program to lower biological age",
    desc: "According to 2020 data, the average Indian lives only 3640 weeks (70 years). Several of these 70 years are spent in poor health, with a burden of mostly preventable diseases.",
    slug: "longevity-program",
    cover: coverLongevityProgram,
    html: longevityProgram.html,
  },
  {
    title: "Mental Health",
    fullTitle: "RECOUP Integrative, Root-Cause Mental Health Rehabilitation Program",
    desc: "Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act.",
    slug: "mental-health",
    cover: coverMentalHealth,
    html: mentalHealth.html,
  },
  {
    title: "Mold Toxicity Program",
    fullTitle: "RECOUP Integrative, Root-Cause Mold Toxicity Program",
    desc: "Toxic Mold Illness is called Chronic Inflammatory Response Syndrome (CIRS).",
    slug: "mold-toxicity-program",
    cover: coverMoldToxicityProgram,
    html: moldToxicityProgram.html,
  },
  {
    title: "Multiple Sclerosis",
    fullTitle: "RECOUP Integrative Root-cause Rehabilitation Program for Multiple Sclerosis",
    desc: "Multiple Sclerosis (MS) is a chronic, immune-mediated neurodegenerative disorder that affects the central nervous system (CNS), particularly the brain and spinal cord.",
    slug: "multiple-sclerosis",
    cover: coverMultipleSclerosis,
    html: multipleSclerosis.html,
  },
  {
    title: "Oral Health",
    fullTitle: "RECOUP Integrative, Root-Cause Oral Health Program",
    desc: "Your mouth is more than just a smile—it's a gateway to your overall health.",
    slug: "oral-health",
    cover: coverOralHealth,
    html: oralHealth.html,
  },
  {
    title: "Osteoporosis Rehabilitation",
    fullTitle: "RECOUP Integrative, Root-Cause Osteoporosis and Metabolic Bone Disease Program",
    desc: "Osteoporosis and osteopenia are bone diseases that develop when bone mineral density and bone mass decrease or when the structure and strength of bone change.",
    slug: "osteoporosis-rehabilitation",
    cover: coverOsteoporosisRehabilitation,
    html: osteoporosisRehabilitation.html,
  },
  {
    title: "Parkinson's Disease",
    fullTitle: "RECOUP Integrative Root-Cause Rehabilitation Program for Parkinson's Disease",
    desc: "Parkinson's Disease (PD) is the second most common neurodegenerative disorder worldwide, affecting over 10 million individuals globally (Parkinson's Foundation, 2023).",
    slug: "parkinsons-disease",
    cover: coverParkinsonsDisease,
    html: parkinsonsDisease.html,
  },
  {
    title: "Primary Care",
    fullTitle: "RECOUP Integrative, Root-Cause Primary Care Program",
    desc: "Self-paying patients visit either a \"family doctor\" or a specialist based on Google or recommendations from friends, family, or their employer.",
    slug: "primary-care",
    cover: coverPrimaryCare,
    html: primaryCare.html,
  },
  {
    title: "Respiratory Health",
    fullTitle: "RECOUP Integrative, Root-Cause Respiratory Health Program",
    desc: "India faces a significant burden of respiratory diseases, particularly chronic obstructive pulmonary disease (COPD), asthma and respiratory tract infections (RTIs).",
    slug: "respiratory-health",
    cover: coverRespiratoryHealth,
    html: respiratoryHealth.html,
  },
  {
    title: "Rheumatological Rehabilitation",
    fullTitle: "RECOUP Centre of Excellence for Integrative, Root-Cause Rheumatological Rehabilitation",
    desc: "Arthritis is a joint inflammation that can cause stiffness or pain.",
    slug: "rheumatological-rehabilitation",
    cover: coverRheumatologicalRehabilitation,
    html: rheumatologicalRehabilitation.html,
  },
  {
    title: "School Health",
    fullTitle: "The Recoup Health School Program",
    desc: "The Recoup Health School Program aims to revolutionize student wellness in India through a pioneering, holistic approach to school-based healthcare.",
    slug: "school-health",
    cover: coverSchoolHealth,
    html: schoolHealth.html,
  },
  {
    title: "Sleep and Circadian Rhythm Clinic",
    fullTitle: "RECOUP Sleep and Circadian Rhythm Clinic (RSCRC)",
    desc: "Did You Know? India is facing a significant rise in sleep disorders, especially in the wake of the SARS-CoV-2 pandemic.",
    slug: "sleep-circadian-rhythm-clinic",
    cover: coverSleepCircadianRhythmClinic,
    html: sleepCircadianRhythmClinic.html,
  },
  {
    title: "Smoking Cessation Program",
    fullTitle: "RECOUP Smoking Cessation Program (RSCP)",
    desc: "Approximately 27% of Indian adults engage in tobacco consumption, making India the second-highest country in global tobacco use.",
    slug: "smoking-cessation-program",
    cover: coverSmokingCessationProgram,
    html: smokingCessationProgram.html,
  },
  {
    title: "Spinal Deformity Rehabilitation",
    fullTitle: "RECOUP Intensive Spinal Deformity Rehabilitation Program",
    desc: "Spinal deformity refers to an abnormality in the spine's curves. It encompasses deformations in the coronal plane, known as scoliosis, and those in the sagittal plane, called kyphosis.",
    slug: "spinal-deformity-rehabilitation",
    cover: coverSpinalDeformityRehabilitation,
    html: spinalDeformityRehabilitation.html,
  },
  {
    title: "Stress and Positive Relationships Program",
    fullTitle: "RECOUP Stress and Positive Relationships Program (RSPRP)",
    desc: "77% of Indians exhibit symptoms of stress. Younger demographics, particularly Gen Z, report significantly higher rates of anxiety and stress-related issues.",
    slug: "stress-positive-relationships-program",
    cover: coverStressPositiveRelationshipsProgram,
    html: stressPositiveRelationshipsProgram.html,
  },
  {
    title: "Stroke Rehabilitation",
    fullTitle: "Recoup Integrative Root-Cause Rehabilitation Program for Stroke (CVA)",
    desc: "Stroke or cerebrovascular accident (CVA), is a major global public health challenge and a leading cause of long-term disability, cognitive decline, and dependency.",
    slug: "stroke-rehabilitation",
    cover: coverStrokeRehabilitation,
    html: strokeRehabilitation.html,
  },
  {
    title: "Traumatic Brain Injury",
    fullTitle: "Recoup's Integrative Root-Cause Rehabilitation Program for Traumatic Brain Injury (TBI)",
    desc: "Traumatic Brain Injury (TBI) is a highly prevalent, debilitating, and often under-recognized public health crisis.",
    slug: "traumatic-brain-injury",
    cover: coverTraumaticBrainInjury,
    html: traumaticBrainInjury.html,
  },
  {
    title: "Travel Medicine Clinic",
    fullTitle: "RECOUP Travel Medicine Clinic",
    desc: "At RECOUP, we specialize in keeping travellers healthy and safe. Whether you're planning a backpacking trip, a family vacation, or a business trip abroad, our dedicated team of travel medicine experts is here to help you prepare.",
    slug: "travel-medicine-clinic",
    cover: coverTravelMedicineClinic,
    html: travelMedicineClinic.html,
  },
  {
    title: "Weight Management",
    fullTitle: "RECOUP Integrative, Root-Cause Weight Management Program",
    desc: "The prevalence of obesity in India is rising rapidly, with approximately 30% of adults and 20% of children and adolescents classified as overweight or obese.",
    slug: "weight-management",
    cover: coverWeightManagement,
    html: weightManagement.html,
  },
];
