import React from 'react';
import { motion } from 'framer-motion';

const BiologicalAge = () => {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                >
                    <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
            </div>
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left: Content */}
                <div className="w-full lg:w-1/2 space-y-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight drop-shadow-xl text-white"
                    >
                        Your Biological Age <br/>
                        <span className="italic font-light text-primary-light">Tells a Deeper Story</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-2xl text-white/80 font-light leading-relaxed max-w-lg border-l-2 border-primary/50 pl-6"
                    >
                        Biological age reflects how your body is functioning internally — beyond chronological age.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="pt-8"
                    >
                        <p className="font-serif text-xl text-white/90 italic font-light drop-shadow-md bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                            "Health is measured not only by age — but by how well your systems function over time."
                        </p>
                    </motion.div>
                </div>

                {/* Right: Immersive List & Abstract Visual */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                    
                    {/* Floating Abstract Element */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                    >
                        <div className="w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] animate-[pulse_8s_infinite]" />
                    </motion.div>

                    <motion.ul 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6 w-full max-w-md relative z-10"
                    >
                        {[
                            "Cellular Resilience", 
                            "Metabolic Efficiency", 
                            "Inflammation Levels", 
                            "Recovery Capacity", 
                            "Physiological Stress"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-6 group cursor-default bg-black/40 p-4 rounded-xl backdrop-blur-md border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all duration-300">
                                <div className="font-serif text-3xl font-light text-primary/40 group-hover:text-primary transition-colors">0{idx + 1}</div>
                                <div className="font-sans text-xl text-white/80 font-light group-hover:text-white transition-colors">{item}</div>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default BiologicalAge;
