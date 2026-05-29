import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';

const FinalCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="ephr-section relative bg-black text-white pt-40 pb-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1920&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                <Reveal>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight mb-10 drop-shadow-2xl text-white">
                        Health Is More Than The <br />
                        <span className="italic font-light text-primary-light">Absence of Disease</span>
                    </h2>
                </Reveal>

                <Reveal delay={120}>
                    <p className="font-sans text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-16">
                        EPHR is designed to help you understand your body clearly, proactively, and
                        comprehensively.
                    </p>
                </Reveal>

                <Reveal delay={240}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-40">
                        <button
                            type="button"
                            onClick={() => navigate('/contact?from=ephr&section=final_cta_primary')}
                            className="w-full sm:w-auto px-5 sm:px-12 py-5 rounded-full bg-primary text-white font-sans font-medium text-lg tracking-wide hover:bg-white hover:text-primary transition-colors duration-300 shadow-[0_0_40px_rgba(134,44,214,0.6)]"
                        >
                            Begin Your EPHR Journey
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/contact?from=ephr&section=final_cta_secondary')}
                            className="w-full sm:w-auto px-5 sm:px-12 py-5 rounded-full bg-transparent text-white font-sans font-medium text-lg tracking-wide border border-white/30 hover:border-white hover:bg-white/10 transition-colors duration-300"
                        >
                            Schedule Your Assessment
                        </button>
                    </div>
                </Reveal>

                <Reveal delay={360}>
                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
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
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FinalCTA;
