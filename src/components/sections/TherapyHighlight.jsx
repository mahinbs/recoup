import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Scan, Microscope, RefreshCw, Sprout } from 'lucide-react';

const steps = [
    {
        icon: <Scan className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
        step: "01",
        title: "Recognize",
        desc: "Advanced diagnostics to identify the root cause of health concerns, not just symptoms.",
        color: "bg-blue-50 border-blue-100"
    },
    {
        icon: <Microscope className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />,
        step: "02",
        title: "Remedy",
        desc: "Evidence-based treatments combining modern medicine with holistic care protocols.",
        color: "bg-purple-50 border-purple-100"
    },
    {
        icon: <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />,
        step: "03",
        title: "Restore",
        desc: "Personalized rehabilitation programs to rebuild strength and function sustainably.",
        color: "bg-orange-50 border-orange-100"
    },
    {
        icon: <Sprout className="w-8 h-8 md:w-10 md:h-10 text-green-600" />,
        step: "04",
        title: "Regenerate",
        desc: "Long-term wellness strategies for sustained health and vitality throughout life.",
        color: "bg-green-50 border-green-100"
    }
];

const TherapyHighlight = () => {
    return (
        <Section className="bg-white py-16 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-light font-bold tracking-widest uppercase text-xs mb-3 block">Our Methodology</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        The 4R Approach to <span className="text-primary italic font-serif">Whole Health</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Dr. Sharan's proprietary protocol treats physical, mental, emotional, and social wellbeing for lasting results.
                    </p>
                </div>

                {/* 4 Steps Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-2xl border ${item.color} hover:shadow-lg transition-all duration-300 group bg-white min-w-[280px] md:min-w-0 snap-center shrink-0`}
                        >

                            {/* Step Number Background */}
                            <span className="absolute top-4 right-4 text-6xl font-black text-primary-light/10 transition-colors select-none">
                                {item.step}
                            </span>

                            <div className="mb-6 relative z-10 bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[15rem] md:max-w-fit">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default TherapyHighlight;
