import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        title: "Biomarker Assessment",
        description: "Key health indicators are measured through a detailed biomarker panel.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "System-Level Analysis",
        description: "Data is grouped into core physiological systems to identify functional patterns.",
        image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "Pattern Identification",
        description: "Interconnections, trends, and imbalances are analyzed across systems.",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1600&auto=format&fit=crop"
    },
    {
        title: "Structured Health Report",
        description: "A clear and easy-to-understand health profile is generated.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
    }
];

const HowEphrWorks = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <section id="how-ephr-works" ref={sectionRef} className="relative w-full bg-slate-50 py-32 overflow-hidden">
            
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Header */}
                <div className="mb-24 md:text-center">
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 tracking-tight">
                        A Structured Path to <br className="hidden md:block" />
                        <span className="italic font-light text-slate-500">Whole-Body Insight</span>
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
                    
                    {/* Animated Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-[1px] bg-slate-200 transform md:-translate-x-1/2 hidden sm:block">
                        <motion.div 
                            style={{ height: lineHeight }} 
                            className="w-full bg-primary origin-top"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-12`}
                                >
                                    {/* Center Node */}
                                    <div className="hidden sm:flex absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-white transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(134,44,214,0.3)]"></div>
                                    
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} text-left`}>
                                        <span className="font-sans text-xs tracking-[0.2em] text-primary-dark font-medium uppercase mb-4 block">Step {index + 1}</span>
                                        <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">{step.title}</h3>
                                        <p className="font-sans text-lg text-slate-600 leading-relaxed font-light">{step.description}</p>
                                    </div>

                                    {/* Media Asset */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                                            <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowEphrWorks;
