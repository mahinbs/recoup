import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 bg-primary-dark">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop"
                    alt="Forest sunrise"
                    className="w-full h-full object-cover"
                />
                {/* Gradients reduced for visibility check */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-sm font-medium mb-6 backdrop-blur-sm">
                            Integrated Orthopedic & Holistic Care
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6 text-balance">
                            Reclaim Your Life. <br />
                            <span className="text-accent">Restore Your Movement.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                            Experience the power of integrated healthcare. We combine functional medicine, rehabilitation, and ancient wisdom to treat the root cause of your pain, not just the symptoms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="accent" className="text-primary-dark hover:bg-white">
                                Book Consultation
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                                Explore Treatments <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <ChevronDown className="animate-bounce" size={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
