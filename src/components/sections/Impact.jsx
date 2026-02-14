import React, { useEffect, useRef } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Users, Activity, Star, Smartphone, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });

    useEffect(() => {
        if (inView) {
            const node = ref.current;
            const controls = { stop: () => { } }; // Placeholder

            // We need to import animate correctly or use a simple interval/AF if we want to avoid extra deps, 
            // but since we used animate() before, let's use the hook logic or simple JS for now to be safe and robust.
            // Actually, let's use the same logic as the fixed Stats component which worked well.
            import('framer-motion').then(({ animate }) => {
                animate(0, value, {
                    duration: 2.5,
                    ease: "easeOut",
                    onUpdate: (latest) => {
                        if (node) {
                            node.textContent = Math.floor(latest) + suffix;
                        }
                    }
                });
            });
        }
    }, [inView, value, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

const Impact = () => {
    return (
        <Section className="bg-gray-50 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">

                    {/* Card 1: Comprehensive Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-primary-dark mb-4 leading-tight">
                                Comprehensive <br />Healthcare Solutions
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Evidence-based treatments backed by 35+ years of primary research in our network of global clinics.
                            </p>
                        </div>
                        <Button className="w-full sm:w-auto self-start">
                            Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    {/* Card 2: Diagnostics (Purple) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#6c28d98b] rounded-[2rem] p-8 shadow-xl shadow-purple-200 text-white flex flex-col justify-between relative overflow-hidden group isolate"
                    >
                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-[-1]">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                                alt="Medical Diagnostics"
                                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 to-purple-900/90 mix-blend-multiply" /> */}
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -mr-16 -mt-16 blur-xl" />

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/10 inline-block w-full">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-purple-100">Care Quality</span>
                                <Smartphone className="w-5 h-5 text-purple-200" />
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold">4.9</span>
                                <div className="flex pb-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                                </div>
                            </div>
                            <span className="text-purple-200">Excellent patient care</span>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2 text-white">State-of-the-Art Diagnostics</h3>
                            <p className="text-purple-100 text-sm leading-relaxed">
                                Advanced testing and personalized long-term care plans for lasting wellness.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Track Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
                    >
                        <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">Track Your Progress</h3>
                        <p className="text-gray-600 text-sm mb-8 flex-grow">
                            Monitor your health journey with comprehensive progress tracking and regular follow-ups.
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-6 mt-auto">
                            <div className="flex justify-between items-end h-16 gap-3">
                                {[
                                    { d: 'Week 1', h: '40%', c: 'bg-purple-300' },
                                    { d: 'Week 2', h: '60%', c: 'bg-blue-400' },
                                    { d: 'Week 3', h: '75%', c: 'bg-pink-400' },
                                    { d: 'Week 4', h: '80%', c: 'bg-orange-400' },
                                ].map((bar, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex flex-col items-center gap-2 flex-1 group/bar cursor-pointer"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="w-full bg-gray-200 rounded-full h-24 relative overflow-hidden ring-2 ring-transparent group-hover/bar:ring-purple-100 transition-all duration-300">
                                            <motion.div
                                                className={cn("absolute bottom-0 left-0 right-0 rounded-full", bar.c)}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: bar.h }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.4 + (i * 0.1) }}
                                            />
                                        </div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider group-hover/bar:text-primary-dark transition-colors">{bar.d}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
                    {[
                        { value: 35, suffix: "+", label: "Years of Research", icon: <ShieldCheck className="w-8 h-8 text-purple-500" />, delay: 0 },
                        { value: 1, suffix: "M+", label: "Patients Treated", icon: <Users className="w-8 h-8 text-pink-500" />, delay: 0.1 },
                        { value: 95, suffix: "%", label: "Success Rate", icon: <Activity className="w-8 h-8 text-blue-500" />, delay: 0.2 },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + stat.delay }}
                        >
                            <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                {stat.icon}
                            </div>
                            <span className="text-4xl font-bold text-primary-dark mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="text-gray-500 font-medium">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Impact;
