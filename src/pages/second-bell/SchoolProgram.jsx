import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Stethoscope, Presentation, Users, BriefcaseMedical, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imgHero from '../../assets/second-bell/hero.png';

const SchoolProgram = () => {
    const navigate = useNavigate();

    const programs = [
        {
            icon: <Stethoscope className="w-8 h-8 text-primary" />,
            title: "Preventive Screening",
            desc: "Regular, non-invasive health evaluations conducted physically at the school. We identify physiological, psychological, and developmental concerns before they compound into academic hurdles.",
            highlights: ["Comprehensive EPHR mapping", "Postural & biomechanical checks", "Vision & basic auditory screening"]
        },
        {
            icon: <Presentation className="w-8 h-8 text-primary" />,
            title: "Health Education Workshops",
            desc: "Interactive educational sessions for students, faculty, and parents. We help families reinforce healthy habits and developmental awareness at home, continuing the support beyond school hours.",
            highlights: ["Correct ergonomics & posture", "Nutrition for brain development", "Navigating puberty safely"]
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Teacher Training",
            desc: "Equipping educators with the knowledge to read early physiological indicators. We help teachers differentiate between a 'distracted' student and a 'fatigued' student.",
            highlights: ["Identifying learning disabilities", "Spotting speech & motor delays", "Behavioral health first-aid"]
        },
        {
            icon: <BriefcaseMedical className="w-8 h-8 text-primary" />,
            title: "Specialist Support",
            desc: "Direct access to our multidisciplinary clinical network. When our screenings detect an anomaly, schools have immediate escalation paths to specialized care.",
            highlights: ["Pediatric specialists", "Child psychologists", "Speech & Occupational therapists"]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            <SubNav />

            {/* Intro Section */}
            <Section className="py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">The Offering</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">Recoup School Health Program</h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We bring the clinic to the classroom. Our comprehensive program integrates world-class preventive healthcare directly into your school's existing ecosystem, ensuring every student has the physiological foundation required to succeed.
                        </p>
                    </div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-video">
                        <img src={imgHero} alt="School Program" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
                    </div>
                </div>
            </Section>

            {/* Core Pillars */}
            <Section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary-dark mb-4">4 Pillars of Implementation</h2>
                    <p className="text-gray-600">Our structured approach ensures comprehensive coverage from initial observation to specialist intervention.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {programs.map((program, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                                {program.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary-dark mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{program.desc}</p>
                                <ul className="space-y-2">
                                    {program.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-center text-sm font-medium text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-16 bg-slate-50 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">View Specific Interventions</h2>
                    <p className="text-gray-600 mb-8">
                        Explore the specialized therapeutic programs we provide for students demonstrating specific needs.
                    </p>
                    <button onClick={() => navigate('/second-bell/interventions')} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                        Explore Interventions <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </Section>

        </div>
    );
};
export default SchoolProgram;
