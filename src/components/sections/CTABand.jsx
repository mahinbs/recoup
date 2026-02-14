import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Calendar, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const CTABand = () => {
    return (
        <section className="container !pb-16 px-4 md:px-6 relative z-10">
            <div className="relative overflow-hidden isolate">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                        alt="Abstract Luxury Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        className="max-w-3xl text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4 block">Transformation Awaits</span>
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Ready to Live <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-serif italic">Pain-Free?</span>
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-light">
                            Don't let pain dictate your storyboard. Book your comprehensive consultation today and let's author your recovery chapter together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button size="lg" className="bg-primary-light text-white hover:bg-white hover:text-primary-dark hover:scale-105 transition-all duration-300 font-bold px-8 h-14 text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <Calendar className="mr-2 h-5 w-5" /> Book Consultation
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white h-14 px-8 text-lg backdrop-blur-sm">
                                <PhoneCall className="mr-2 h-5 w-5" /> Talk to an Expert
                            </Button>
                        </div>
                    </motion.div>

                    {/* Decorative Circle/Badge */}
                    {/* <div className="hidden lg:flex relative w-48 h-48 items-center justify-center">
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-4 border border-white/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-white">100%</span>
                        <span className="text-xs text-primary-light uppercase tracking-widest">Holistic</span>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    );
};

export default CTABand;
