import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        title: "Glucose Control",
        markers: ["Fasting Blood Sugar", "Insulin", "HbA1C", "HOMA IR"],
        img: "https://images.pexels.com/photos/6941101/pexels-photo-6941101.jpeg"
    },
    {
        title: "Heart Health",
        markers: ["Lipoprotein(a)", "Apolipoprotein-B", "HS-CRP"],
        img: "https://images.pexels.com/photos/5340274/pexels-photo-5340274.jpeg"
    },
    {
        title: "Hormonal Insight",
        markers: ["Cortisol", "TSH", "Testosterone", "Estrogen", "FSH"],
        img: "https://images.pexels.com/photos/9259981/pexels-photo-9259981.jpeg"
    },
    {
        title: "Vitamins & Minerals",
        markers: ["Vitamin B12", "Vitamin D", "Iron", "Ferritin", "Folic Acid", "Ionic Calcium"],
        img: "https://images.pexels.com/photos/17891275/pexels-photo-17891275.jpeg"
    },
    {
        title: "Blood Cell Analysis",
        markers: ["Hemoglobin", "Hematocrit", "White Blood Cells", "Platelet Count"],
        img: "https://images.pexels.com/photos/9085814/pexels-photo-9085814.jpeg"
    }
];

const LabIntelligence = () => {
    return (
        <section className="bg-white relative overflow-hidden">

            {/* Section Header */}
            <div className="container mx-auto px-6 max-w-7xl pt-32 pb-20 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-sans text-xs tracking-[0.3em] text-primary uppercase font-medium mb-4"
                >
                    Biomarker Intelligence
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-5xl md:text-7xl text-slate-900 leading-tight tracking-tight mb-6"
                >
                    Advanced Biomarker <span className="italic font-light text-primary">Intelligence</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-xl text-slate-500 font-light max-w-2xl mx-auto"
                >
                    EPHR combines premium biomarkers, physiological indicators, and lifestyle analysis to create deeper health visibility.
                </motion.p>
            </div>

            {/* Alternating Category Rows */}
            <div className="divide-y divide-slate-100">
                {categories.map((cat, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[420px]`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[420px]">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-white/20`} />
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 py-12 bg-white">
                                <div className="max-w-md">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-px bg-primary" />
                                        <span className="font-sans text-xs tracking-[0.25em] text-primary uppercase font-medium">
                                            Category {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8 leading-tight tracking-tight">
                                        {cat.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {cat.markers.map((marker, mIdx) => (
                                            <span
                                                key={mIdx}
                                                className="px-4 py-2 rounded-full border border-slate-200 text-sm font-sans text-slate-600 bg-slate-50 hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all duration-300"
                                            >
                                                {marker}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
};

export default LabIntelligence;
