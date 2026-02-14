import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Play } from 'lucide-react';

const AICheckupCTA = () => {
    return (
        <Section className="py-12 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Editorial Content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-px w-12 bg-primary"></span>
                                <span className="italic text-primary tracking-wider">AI-Powered Planning</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-[1.1]">
                                The Future of <br />
                                <span className="italic text-primary">Personalized</span> Care.
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
                                Experience the 4R Protocol tailored specifically to your physiology. Our AI analyzes your unique profile to craft a bespoke roadmap for recovery and longevity.
                            </p>

                            {/* Minimal 4R Timeline */}
                            <div className="space-y-5 border-l border-gray-200 pl-8 mb-12 relative">
                                {[
                                    { step: "01", title: "Recognize", desc: "Root Cause Analysis" },
                                    { step: "02", title: "Remedy", desc: "Curated Treatment Plan" },
                                    { step: "03", title: "Restore", desc: "Functional Rehabilitation" },
                                    { step: "04", title: "Regenerate", desc: "Sustained Wellness" }
                                ].map((item, i) => (
                                    <div key={i} className="relative group">
                                        <span className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border border-gray-300 bg-primary-light group-hover:border-gray-900 transition-colors animate-pulse" />
                                        <div className="flex items-baseline gap-4">
                                            {/* <span className="text-xs font-bold text-gray-300">{item.step}</span> */}
                                            <h4 className="text-lg text-gray-900">{item.title}</h4>
                                            <span className="text-sm text-primary hidden sm:inline-block">— {item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <Button className="bg-primary text-white hover:bg-primary-dark rounded-full px-10 py-7 text-lg shadow-2xl shadow-gray-200 transition-transform active:scale-95 group">
                                    Get My Free Plan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                {/* <div className="text-xs text-primary font-medium tracking-wide items-center flex gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gray-100 border border-white" />
                                        ))}
                                    </div>
                                    <span className="border-b border-gray-200 pb-0.5">Joined by 10,000+ others</span>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Lifestyle Image & Glass Card */}
                    <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 rounded-[3rem] overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                                alt="Wellness Lifestyle"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop";
                                }}
                            />

                            {/* Gradient Overlay for Text Readability if needed, sticking to clean for now */}
                        </motion.div>

                        {/* Floating Glass Card */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 40, x: -20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-12 -left-12 lg:-left-24 bg-primary/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-sm w-full hidden md:block"
                        >
                            <div className="flex items-center justify-between mb-6 text-white/90">
                                <h3 className= text-xl italic">Your Analysis Includes</h3>
                                <Sparkles className="w-5 h-5 opacity-70" />
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Deep Metabolic Profiling",
                                    "Musculoskeletal Roadmap",
                                    "Nutritional Deficiencies",
                                    "Lifestyle Optimization"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-black/80 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-white/60 text-xs uppercase tracking-widest">Est. Time</span>
                                <span className="text-white font-mono text-sm">2 Minutes</span>
                            </div>
                        </motion.div> */}

                        {/* Decorative Circle */}
                        <div className="absolute top-12 -right-12 w-24 h-24 border border-gray-900/10 rounded-full items-center justify-center hidden md:flex">
                            <div className="w-2 h-2 bg-gray-900 rounded-full" />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default AICheckupCTA;
