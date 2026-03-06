import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, CircleDot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imgCollab from '../../assets/second-bell/collaboration.png';

const HowItWorks = () => {
    const navigate = useNavigate();

    const phases = [
        {
            num: "01",
            title: "Alignment & Consultation",
            subtitle: "Phase 1",
            desc: "Implementation begins with a leadership consultation to understand your school's unique culture, academic pressures, and existing health metrics. We align our framework to ensure absolutely no disruption to ongoing academics."
        },
        {
            num: "02",
            title: "Baseline Screening",
            subtitle: "Phase 2",
            desc: "Our clinical team conducts structured, non-invasive health screenings on-campus. We gather baseline data on posture, biomechanics, developmental markers, and overall student readiness, formulating the initial Recoup School Health Score (RSHS)."
        },
        {
            num: "03",
            title: "Routine Integration",
            subtitle: "Phase 3",
            desc: "We embed preventive workshops, teacher guidance, and specialist support directly into the school week. Minimal reporting burden is placed on the school staff; autonomy and control remain firmly with the school leadership."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 text-left">
            <SubNav />

            <Section className="py-16 md:py-24 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl">
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">The Process</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">Seamless Integration</h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We understand that schools are highly structured environments. The Second Bell framework is designed specifically to integrate quietly—providing maximum clinical value without disrupting the daily syllabus.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-primary-dark font-medium">
                                <CircleDot className="w-5 h-5 text-primary" /> No disruption to academics
                            </div>
                            <div className="flex items-center gap-3 text-primary-dark font-medium">
                                <CircleDot className="w-5 h-5 text-primary" /> Minimal administrative burden
                            </div>
                            <div className="flex items-center gap-3 text-primary-dark font-medium">
                                <CircleDot className="w-5 h-5 text-primary" /> Schools retain full control
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-video lg:aspect-square">
                        <img src={imgCollab} className="w-full h-full object-cover" alt="School leadership alignment" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
                    </div>
                </div>
            </Section>

            {/* Timeline phase */}
            <Section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                            >
                                <div className="shrink-0 pt-2 flex flex-row md:flex-col items-center gap-4 md:w-32">
                                    <span className="text-5xl md:text-6xl font-black text-primary/10 tracking-tighter">{phase.num}</span>
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs hidden md:block">{phase.subtitle}</span>
                                </div>

                                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex-grow hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-primary-dark mb-4">{phase.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{phase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-16 bg-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Understand the Outcomes</h2>
                    <p className="text-gray-600 mb-8">
                        Learn how we quantify student wellbeing through the Recoup School Health Score (RSHS).
                    </p>
                    <button onClick={() => navigate('/second-bell/rshs')} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                        View the RSHS System <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </Section>
        </div>
    );
};
export default HowItWorks;
