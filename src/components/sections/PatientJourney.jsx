import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, Search, Activity, UserCheck } from 'lucide-react';

const PatientJourney = () => {
    const steps = [
        { icon: <ClipboardList size={24} />, title: "Diagnosis", desc: "Initial consultation & assessment" },
        { icon: <FileText size={24} />, title: "EPHR Report", desc: "Comprehensive Entire Person Health Report" },
        { icon: <Search size={24} />, title: "Root Cause", desc: "Identifying the deep underlying issues" },
        { icon: <Activity size={24} />, title: "Therapy", desc: "Personalized integrated treatment plan" },
        { icon: <UserCheck size={24} />, title: "Recovery", desc: "Continuous monitoring & sustained health" },
    ];

    return (
        <Section key="journey" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Your Path to Recovery</h2>
                <p className="text-gray-600">Our structured 5-step methodology ensures no aspect of your health is overlooked.</p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0" />

                <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-8 relative z-10 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center bg-white p-4 min-w-[280px] md:min-w-0 snap-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary-dark mb-4 border-2 border-white shadow-lg relative z-10 hover:bg-primary-light hover:text-white transition-colors duration-300">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-primary-dark mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default PatientJourney;
