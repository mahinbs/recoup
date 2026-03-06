import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { Activity, Brain, HeartPulse, MonitorOff, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Framework = () => {
    const navigate = useNavigate();

    const domains = [
        {
            icon: <Activity className="w-8 h-8 text-primary" />,
            title: "1. Physical Readiness",
            desc: "Assessing posture, core stamina, and physiological readiness to sit, focus, and participate without pain or discomfort.",
            example: "Poor posture limits breathing depth, accelerating fatigue by mid-morning."
        },
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "2. Attention & Effort",
            desc: "Evaluating the cognitive bandwidth available to students after accounting for physical strain, sleep deficits, and sensory overload.",
            example: "Chronic fatigue significantly impacts a child's ability to maintain sustained attention."
        },
        {
            icon: <HeartPulse className="w-8 h-8 text-primary" />,
            title: "3. Emotional Balance",
            desc: "Identifying signs of stress, anxiety, or emotional dysregulation that manifest as behavioral issues in the classroom.",
            example: "Unrecognized stress is frequently mislabeled as behavioral defiance."
        },
        {
            icon: <MonitorOff className="w-8 h-8 text-primary" />,
            title: "4. Digital & Lifestyle",
            desc: "Monitoring the impact of excessive screen time, disrupted sleep patterns, and sedentary habits on academic performance.",
            example: "Late-night digital device usage drastically reduces REM sleep, affecting memory consolidation."
        },
        {
            icon: <User className="w-8 h-8 text-primary" />,
            title: "5. Adolescent Health",
            desc: "Providing awareness and structural support for students navigating the physiological and psychological shifts of puberty.",
            example: "Hormonal shifts require structured, empathetic guidance rather than just discipline."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "6. Sports Safety",
            desc: "Implementing biomechanical screenings to prevent recurrent injuries among student-athletes and active children.",
            example: "Addressing biomechanical flaws early prevents lifelong chronic joint pain."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            <SubNav />

            <Section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">The Core Framework</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">6 Domains of Observation</h1>
                    <p className="text-gray-600 text-lg">
                        The Second Bell framework categorizes student wellbeing into six interconnected domains. Challenges in one area—such as poor sleep—frequently cascade into others, like emotional dysregulation or reduced attention span. By standardizing these observations, schools can shift from reactive discipline to proactive health support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {domains.map((domain, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                {domain.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-4">{domain.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{domain.desc}</p>

                            <div className="bg-white p-4 rounded-xl border border-gray-100 mt-auto">
                                <span className="text-xs font-bold uppercase text-gray-400 mb-1 block">The Context</span>
                                <p className="text-sm text-gray-600 italic font-serif">"{domain.example}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-16 bg-primary-dark text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-white">How do we apply this framework?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Discover how Recoup Health translates these six clinical domains into actionable school programs.
                    </p>
                    <button onClick={() => navigate('/second-bell/program')} className="inline-flex items-center text-primary-light font-bold hover:text-white transition-colors">
                        View the School Program <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </Section>
        </div>
    );
};
export default Framework;
