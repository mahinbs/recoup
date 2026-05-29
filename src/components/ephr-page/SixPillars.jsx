import React from 'react';
import Reveal from './Reveal';

const pillars = [
    {
        title: 'Nutrition',
        desc: 'Fueling recovery, metabolism, and physiological performance.',
        img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Physical Activity',
        desc: 'Supporting mobility, cardiovascular function, and resilience.',
        img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Mental Wellbeing',
        desc: 'Managing stress, cognition, emotional balance, and recovery.',
        img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Sleep',
        desc: 'Optimizing restoration, hormonal balance, and repair.',
        img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Social Connection',
        desc: 'Strengthening emotional health and lifestyle stability.',
        img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'No Harmful Substances',
        desc: 'Reducing long-term physiological stress and toxic burden.',
        img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop',
    },
];

const SixPillars = () => {
    return (
        <section className="ephr-section py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <Reveal className="mb-24 md:text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 tracking-tight">
                        The Six Pillars of <span className="italic font-light text-primary">Health</span>
                    </h2>
                    <p className="font-sans text-xl text-slate-600 leading-relaxed font-light">
                        Your personalized recommendations are structured around six foundational pillars that
                        influence long-term well-being.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <Reveal
                            key={pillar.title}
                            delay={idx * 60}
                            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-[4/5] bg-slate-900"
                        >
                            <img
                                src={pillar.img}
                                alt={pillar.title}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out"
                            />

                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <div className="text-white/80 font-sans text-sm tracking-widest uppercase mb-4 opacity-80">
                                    Pillar 0{idx + 1}
                                </div>
                                <h3 className="font-serif text-3xl mb-3 leading-tight drop-shadow-md text-white">
                                    {pillar.title}
                                </h3>
                                <p className="font-sans text-white/80 leading-relaxed font-light mt-2 border-l-2 border-primary pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {pillar.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SixPillars;
