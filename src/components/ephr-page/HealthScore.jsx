import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HealthScore = () => {
    const containerRef = useRef(null);
    const bgMediaRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(bgMediaRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden">
            
            {/* Cinematic HUD Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video 
                    ref={bgMediaRef}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute top-[-20%] w-full h-[140%] object-cover opacity-30 mix-blend-screen"
                >
                    <source src="https://videos.pexels.com/video-files/5532770/5532770-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left: Score Visualization */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center rounded-full border border-white/5"
                    >
                        {/* Sci-Fi HUD Concentric rings */}
                        <div className="absolute inset-4 rounded-full border border-white/10" />
                        <div className="absolute inset-12 rounded-full border border-primary/30 border-dashed animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-20 rounded-full border border-white/5 animate-[spin_60s_linear_infinite_reverse]" />
                        
                        <div className="text-center z-10">
                            <span className="block font-sans text-xs tracking-[0.3em] text-primary-light uppercase mb-4">Entire Person Health Score</span>
                            <span className="block font-serif text-[8rem] md:text-[10rem] font-light text-white leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">85</span>
                            <span className="block font-sans text-sm text-white/50 mt-6 tracking-widest uppercase">Optimal Baseline</span>
                        </div>

                        {/* Glowing core */}
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[1.1]">
                            The Intelligence <br/>
                            <span className="italic font-light text-primary-light text-4xl md:text-6xl">Behind the Score</span>
                        </h2>
                        <p className="font-sans text-xl text-white/70 leading-relaxed max-w-lg font-light">
                            Your health score combines biomarker analysis, physiological systems, and lifestyle factors into one structured health indicator.
                        </p>
                        
                        <div className="mt-8 inline-block px-6 py-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                            <p className="font-sans text-sm text-white/90">
                                Based on <strong className="text-primary-light font-semibold tracking-wider">200+</strong> health data points.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                        {[
                            { level: "Low Risk", color: "bg-emerald-400", desc: "Strong overall health with balanced physiological function." },
                            { level: "Moderate", color: "bg-amber-400", desc: "Potential areas for improvement requiring lifestyle optimization." },
                            { level: "High Risk", color: "bg-rose-400", desc: "Significant functional imbalance requiring focused intervention." }
                        ].map((risk, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-2 h-2 rounded-full ${risk.color} shadow-[0_0_10px_currentColor]`} />
                                    <span className="font-sans text-sm tracking-widest uppercase font-medium text-white/90">{risk.level}</span>
                                </div>
                                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">{risk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HealthScore;
