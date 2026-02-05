import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight, Droplets, Flame, ActivitySquare } from 'lucide-react';
import { motion } from 'framer-motion';

const TherapyHighlight = () => {
    return (
        <Section className="bg-secondary/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        className="space-y-4 mt-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop"
                            alt="Massage Therapy"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <Flame className="text-orange-500 mb-3" size={32} />
                            <h4 className="font-bold text-lg text-primary-dark">FIR Sauna</h4>
                            <p className="text-xs text-gray-500 mt-2">Deep tissue detoxification & relaxation.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-primary p-6 rounded-2xl shadow-md text-white">
                            <Droplets className="text-accent mb-3" size={32} />
                            <h4 className="font-bold text-lg text-gray-100">Aqua Therapy</h4>
                            <p className="text-xs text-gray-200 mt-2">Low-impact healing through water resistance.</p>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop"
                            alt="Advanced Medical Tech"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="lg:pl-8">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Advanced Infrastructure</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">World-Class Therapy <br />Meets Cutting-Edge Tech</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        We invest in the best to ensure your recovery is fast, safe, and effective. From hydrotherapy pools to advanced ergonomic analysis labs, Recoup is equipped with state-of-the-art facilities designed for total rehabilitation.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Aqua Therapy & Hydro-rehabilitation",
                            "Far Infrared (FIR) Sauna Detox",
                            "CDT (Complex Decongestive Therapy)",
                            "Colon Hydrotherapy",
                            "Ergonomic Workplace Analysis"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-accent" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button variant="primary" size="lg"> Explore Our Facilities <ArrowRight className="ml-2 h-4 w-4" /> </Button>
                </div>
            </div>
        </Section>
    );
};

export default TherapyHighlight;
