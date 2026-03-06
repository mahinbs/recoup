import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { MessageSquare, HandHelping, BrainCircuit, Activity, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Interventions = () => {
    const navigate = useNavigate();

    const interventions = [
        {
            icon: <MessageSquare className="w-6 h-6 text-primary" />,
            title: "Speech & Language Services",
            desc: "Helping students overcome communication barriers. We provide targeted support for articulation issues, stuttering, and expressive or receptive language delays that impact classroom participation and social confidence."
        },
        {
            icon: <HandHelping className="w-6 h-6 text-primary" />,
            title: "Occupational Therapy",
            desc: "Focused support for fine motor skills, handwriting fluidity, sensory processing, and executive functioning. We ensure students have the physical coordination required for daily academic tasks."
        },
        {
            icon: <BrainCircuit className="w-6 h-6 text-primary" />,
            title: "Behavioral Health & Wellness",
            desc: "Psychological support structures addressing anxiety, ADHD symptoms, emotional dysregulation, and severe exam stress. We prioritize teaching coping mechanisms over punitive measures."
        },
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: "RH SPRINT (Sports Health)",
            desc: "A specialized track for student-athletes. We integrate biomechanical screening and preventative conditioning to mitigate sports injury risks before they sideline a student."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-primary" />,
            title: "Digital Balance Program",
            desc: "Actionable frameworks helping students manage screen time effectively, understand digital fatigue, and build sustainable habits that protect their deep sleep cycles."
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-primary" />,
            title: "Teacher Training Program",
            desc: "Continuous professional development helping educators understand learning differences, neurodiversity, and how to adapt classroom environments to support student wellbeing."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            <SubNav />

            {/* Header */}
            <Section className="pt-16 md:pt-24 pb-12 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Targeted Care</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Intervention Programs</h1>
                    <p className="text-gray-600 text-lg">
                        When screening highlights a risk, our clinical interventions provide the bridge to recovery. These specific support programs are tailored to the precise physiological and psychological needs of the student.
                    </p>
                </div>
            </Section>

            {/* Multi-column grid */}
            <Section className="py-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {interventions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/20 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary-dark leading-tight">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-16 bg-slate-50 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Implementation Protocol</h2>
                    <p className="text-gray-600 mb-8">
                        See how these programs are integrated into your curriculum without disrupting the academic schedule.
                    </p>
                    <button onClick={() => navigate('/second-bell/how-it-works')} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                        Discover How It Works <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </Section>
        </div>
    );
};
export default Interventions;
