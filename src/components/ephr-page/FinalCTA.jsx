import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="relative bg-black text-white pt-40 pb-16 overflow-hidden">
            
            {/* Immersive Video/Image Environment */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2560&auto=format&fit=crop" 
                    alt="Light Abstract" 
                    className="w-full h-full object-cover opacity-50"
                />
                {/* Volumetric sunset/dawn vibe for conclusion */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/30 rounded-full blur-[150px] pointer-events-none" />
            </div>
            
            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                
                <motion.h2 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight mb-10 drop-shadow-2xl text-white"
                >
                    Health Is More Than The <br/>
                    <span className="italic font-light text-primary-light">Absence of Disease</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-16"
                >
                    EPHR is designed to help you understand your body clearly, proactively, and comprehensively.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-40"
                >
                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full sm:w-auto px-5 sm:px-12 py-5 rounded-full bg-primary text-white font-sans font-medium text-lg tracking-wide hover:bg-white hover:text-primary transition-all duration-500 shadow-[0_0_40px_rgba(134,44,214,0.6)] transform hover:-translate-y-1"
                    >
                        Begin Your EPHR Journey
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full sm:w-auto px-5 sm:px-12 py-5 rounded-full bg-transparent text-white font-sans font-medium text-lg tracking-wide border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-500"
                    >
                        Schedule Your Assessment
                    </button>
                </motion.div>

                {/* Micro Footer */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-6 font-sans text-xs tracking-[0.3em] text-primary-light font-medium uppercase">
                        <span>Preventive</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span>Proactive</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span>Personalized</span>
                    </div>
                    
                    <p className="font-serif text-sm text-white/50 italic">
                        A structured approach to understanding whole-body health.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
