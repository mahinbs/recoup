import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rootsData = [
    { id: 'nutrition', label: 'Nutrition', connections: ['digestion', 'metabolism', 'glycemic', 'heart', 'hormonal', 'bone'] },
    { id: 'sleep', label: 'Sleep', connections: ['inflammation', 'metabolism', 'hormonal', 'heart'] },
    { id: 'stress', label: 'Stress', connections: ['hormonal', 'inflammation', 'heart', 'digestion'] },
    { id: 'exercise', label: 'Exercise & Movement', connections: ['metabolism', 'heart', 'bone', 'glycemic'] },
    { id: 'relationships', label: 'Relationships', connections: ['stress', 'hormonal', 'inflammation'] }
];

const branchesData = [
    { id: 'digestion', label: 'Digestion' },
    { id: 'elimination', label: 'Elimination' },
    { id: 'metabolism', label: 'Metabolism' },
    { id: 'glycemic', label: 'Glycemic Response' },
    { id: 'heart', label: 'Heart & Vascular' },
    { id: 'hormonal', label: 'Hormonal System' },
    { id: 'inflammation', label: 'Inflammation' },
    { id: 'bone', label: 'Bone & Joint Health' },
    { id: 'biotransformation', label: 'Bio Transformation' }
];

const HealthTreeEcosystem = () => {
    const containerRef = useRef(null);
    const pinRef = useRef(null);
    const bgMediaRef = useRef(null);
    const [activeRoot, setActiveRoot] = useState(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": function() {
                    ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=150%",
                        pin: pinRef.current,
                        pinSpacing: true,
                    });

                    // Ambient scale for the macro background
                    gsap.to(bgMediaRef.current, {
                        scale: 1.1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden">
            
            {/* Cinematic Background: Macro Iris / Neural network vibe */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    ref={bgMediaRef}
                    src="https://www.pexels.com/download/video/4121322/"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />
            </div>

            <div ref={pinRef} className="container mx-auto px-6 max-w-7xl h-full flex flex-col justify-center relative z-10">
                
                {/* Header Sequence */}
                <div className="text-center mb-16 md:mb-24 relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 drop-shadow-2xl"
                    >
                        Your Health Is an <span className="italic font-light text-primary-light">Ecosystem</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Your lifestyle factors act as the roots of your health, while your body systems form the branches. Strong foundations support stronger physiological function.
                    </motion.p>
                </div>

                {/* Ecosystem Visualization Container */}
                <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[500px]">
                    
                    {/* Interactive Layers */}
                    <div className="relative w-full h-full flex flex-col justify-evenly z-10">
                        
                        {/* Top: Branches (Body Functions) */}
                        <div className="flex flex-wrap justify-center gap-3 mb-24">
                            {branchesData.map((branch) => {
                                const isActive = activeRoot && rootsData.find(r => r.id === activeRoot)?.connections.includes(branch.id);
                                return (
                                    <motion.div 
                                        key={branch.id}
                                        animate={{
                                            scale: isActive ? 1.05 : 1,
                                            backgroundColor: isActive ? '#A665E4' : 'rgba(255,255,255,0.05)',
                                            color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                                            borderColor: isActive ? '#A665E4' : 'rgba(255,255,255,0.1)',
                                            boxShadow: isActive ? '0 0 20px rgba(166,101,228,0.5)' : 'none'
                                        }}
                                        className={`px-5 py-3 rounded-full border text-sm font-light font-sans backdrop-blur-md transition-all duration-500`}
                                    >
                                        {branch.label}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Interactive Center Element */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md pointer-events-none flex flex-col items-center justify-center">
                            {/* Glowing connection orb */}
                            <motion.div 
                                animate={{
                                    scale: activeRoot ? 1.5 : 1,
                                    opacity: activeRoot ? 0.8 : 0.2
                                }}
                                className="w-32 h-32 bg-primary rounded-full blur-[60px] transition-all duration-700"
                            />
                            <motion.div 
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: activeRoot ? 0 : 1 }}
                                className="absolute text-white/50 font-sans tracking-widest uppercase text-xs mt-4"
                            >
                                Hover Roots Below
                            </motion.div>
                        </div>

                        {/* Bottom: Roots (Lifestyle Factors) */}
                        <div className="flex flex-wrap justify-center gap-4 mt-24">
                            {rootsData.map((root) => (
                                <motion.button
                                    key={root.id}
                                    onMouseEnter={() => setActiveRoot(root.id)}
                                    onMouseLeave={() => setActiveRoot(null)}
                                    className={`px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md shadow-lg text-sm md:text-base font-light font-sans transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                                        activeRoot === root.id ? 'bg-white/10 text-white border-white/50' : 'bg-black/40 text-white/70'
                                    }`}
                                >
                                    {root.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HealthTreeEcosystem;
