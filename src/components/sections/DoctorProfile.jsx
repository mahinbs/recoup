import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Award, BookOpen, Globe, Star, CheckCircle, Quote } from 'lucide-react';

const DoctorProfile = () => {
    return (
        <Section className="bg-gray-50 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Image Area (5 Cols) */}
                    <div className="lg:col-span-5 relative">
                        <div className="absolute inset-0 bg-primary-light/10 rounded-tr-[5rem] rounded-bl-[5rem] transform rotate-3 scale-95" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >
                            <img
                                src="/doctor.png"
                                alt="Dr. Deepak Sharan"
                                className="w-full h-auto rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl object-cover aspect-[4/5]"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-gray-50 p-4 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-gray-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-yellow-100 p-2 rounded-full">
                                        <Award className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">Top Research</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-tight">Winner of SICOT Research Academy Grant</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content Area (7 Cols) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light/10 text-primary-dark text-xs font-bold uppercase tracking-wider mb-6">
                                <Star className="w-4 h-4" /> Founder & Medical Director
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Meet <span className="text-primary">Dr. Deepak Sharan</span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-primary pl-6 italic">
                                "Internationally recognized expert in Ergonomics, RSI, and Pain Management with over 27 years of clinical experience. Dr. Sharan has revolutionized workplace health and developed the proprietary SHARAN Protocol and 4R Approach that have transformed lives across 40 countries."
                            </p>

                            {/* Achievements Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    {
                                        icon: <Award className="w-5 h-5 text-purple-600" />,
                                        title: "Henri Bensahel Award",
                                        desc: "World's top research award in Paediatric Orthopaedics"
                                    },
                                    {
                                        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
                                        title: "500+ Publications",
                                        desc: "Including world's most extensive studies in Ergonomics and Pain"
                                    },
                                    {
                                        icon: <CheckCircle className="w-5 h-5 text-green-600" />,
                                        title: "Developer of SEMLARASS",
                                        desc: "Revolutionary procedure for Cerebral Palsy treatment"
                                    },
                                    {
                                        icon: <Globe className="w-5 h-5 text-indigo-600" />,
                                        title: "Global Impact",
                                        desc: "Transformed lives across 40 countries with SHARAN Protocol"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm h-fit">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-500 leading-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Stats/Trust Signals */}
                            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary-dark">2008</span>
                                    <span className="text-sm text-gray-500 font-medium">Presidential Award<br />(Govt. of India)</span>
                                </div>
                                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary-dark">"Cult Figure"</span>
                                    <span className="text-sm text-gray-500 font-medium">Wall Street Journal<br />(World of RSI)</span>
                                </div>
                                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-primary-dark">500,000+</span>
                                    <span className="text-sm text-gray-500 font-medium">Patients Treated<br />Worldwide</span>
                                </div>
                            </div>

                            {/* CTA can be added here if needed, but user wanted compact, so trusting the flow */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DoctorProfile;
