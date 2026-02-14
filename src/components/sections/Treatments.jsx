import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const treatments = [
    {
        title: "Chronic Pain",
        fullTitle: "Chronic Pain Management",
        desc: "Advanced treatment for musculoskeletal disorders, fibromyalgia, and neuropathic pain.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Chronic Disease",
        fullTitle: "Chronic Disease Care",
        desc: "Comprehensive support for diabetes, heart disease, autoimmune conditions, and gut health.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Mental Health",
        fullTitle: "Mental Health Services",
        desc: "Integrated mind-body therapies for anxiety, depression, and stress management.",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop"
    },
    {
        title: "Child Development",
        fullTitle: "Childhood Development",
        desc: "Specialized care for cerebral palsy, autism, and ADHD with early intervention.",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "Rehabilitation",
        fullTitle: "Physical Rehabilitation",
        desc: "Evidence-based recovery programs for stroke, trauma, surgery, and sports injuries.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Corporate",
        fullTitle: "Corporate Wellness",
        desc: "Certified health solutions preventing disruptions and enhancing team productivity.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Nutrition",
        fullTitle: "Nutritional Therapy",
        desc: "Personalized nutrition plans and lifestyle optimization for overall wellbeing.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
    },
    {
        title: "Prevention",
        fullTitle: "Preventive Care",
        desc: "Proactive health assessments and preventive strategies for long-term wellness.",
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop"
    }
];

const Treatments = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        <Section id="treatments" className="bg-white py-24 overflow-hidden">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 relative z-10 px-4">
                <div className="max-w-3xl">
                    <span className="text-primary-light font-bold tracking-widest uppercase text-xs mb-4 block border-b border-primary-light/20 pb-4 w-fit">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
                        What We <span className="text-primary italic font-serif">Treat</span>
                    </h2>
                </div>
                {/* <div className="hidden md:flex gap-2 text-sm font-medium text-gray-400">
                    <span>Explore Services</span>
                    <ArrowUpRight className="w-4 h-4" />
                </div> */}
            </div>

            {/* Desktop Horizontal Accordion */}
            <div className="hidden lg:flex h-[500px] w-full gap-2 px-4">
                {treatments.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    return (
                        <motion.div
                            key={index}
                            className={cn(
                                "relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out",
                                isHovered ? "flex-[3.5]" : "flex-1"
                            )}
                            onHoverStart={() => setHoveredIndex(index)}
                            initial={false}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className={cn(
                                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                                    isHovered ? "scale-110 brightness-90" : "scale-100 brightness-50 grayscale hover:grayscale-0"
                                )}
                            />
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300",
                                isHovered ? "opacity-100" : "opacity-60"
                            )} />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className={cn("transition-all duration-300", isHovered ? "mb-0" : "mb-4")}>
                                    {/* Vertical Title for collapsed state */}
                                    <h3
                                        className={cn(
                                            "text-2xl font-bold text-white whitespace-nowrap origin-bottom-left transition-all duration-300",
                                            !isHovered && "rotate-[-90deg] translate-x-8 -translate-y-8 absolute bottom-0 left-0"
                                        )}
                                    >
                                        {isHovered ? item.fullTitle : item.title}
                                    </h3>

                                    <div className={cn(
                                        "overflow-hidden transition-all duration-500 grid",
                                        isHovered ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                    )}>
                                        <div className="min-h-0">
                                            <p className="text-gray-200 text-base leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                            <div className="mt-6 flex items-center text-primary-light font-bold text-sm uppercase tracking-wider">
                                                Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide">
                {treatments.map((item, index) => (
                    <div key={index} className="flex-none w-[85vw] h-[400px] relative rounded-3xl overflow-hidden snap-center">
                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover brightness-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{item.fullTitle}</h3>
                            <p className="text-gray-200">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Treatments;
