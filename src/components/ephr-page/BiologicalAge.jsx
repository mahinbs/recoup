import React from 'react';
import LazyVideo from './LazyVideo';
import Reveal from './Reveal';

const BIO_VIDEO =
    'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4';

const BiologicalAge = () => {
    return (
        <section className="ephr-section py-32 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 gpu-layer">
                <LazyVideo
                    src={BIO_VIDEO}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 space-y-10">
                    <Reveal>
                        <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight drop-shadow-xl text-white">
                            Your Biological Age <br />
                            <span className="italic font-light text-primary-light">Tells a Deeper Story</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={100}>
                        <p className="font-sans text-2xl text-white/80 font-light leading-relaxed max-w-lg border-l-2 border-primary/50 pl-6">
                            Biological age reflects how your body is functioning internally — beyond
                            chronological age.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="pt-8">
                            <p className="font-serif text-xl text-white/90 italic font-light drop-shadow-md bg-white/5 p-6 rounded-2xl border border-white/10">
                                "Health is measured not only by age — but by how well your systems function
                                over time."
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl opacity-60" />
                    </div>

                    <Reveal as="ul" className="space-y-6 w-full max-w-md relative z-10 list-none p-0 m-0">
                        {[
                            'Cellular Resilience',
                            'Metabolic Efficiency',
                            'Inflammation Levels',
                            'Recovery Capacity',
                            'Physiological Stress',
                        ].map((item, idx) => (
                            <li
                                key={item}
                                className="flex items-center gap-6 group cursor-default bg-black/40 p-4 rounded-xl border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-colors duration-200 list-none"
                            >
                                <div className="font-serif text-3xl font-light text-primary/40 group-hover:text-primary transition-colors">
                                    0{idx + 1}
                                </div>
                                <div className="font-sans text-xl text-white/80 font-light group-hover:text-white transition-colors">
                                    {item}
                                </div>
                            </li>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default BiologicalAge;
