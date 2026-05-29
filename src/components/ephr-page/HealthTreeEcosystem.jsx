import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './LazyVideo';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const TREE_VIDEO =
    'https://videos.pexels.com/video-files/4121322/4121322-hd_1920_1080_30fps.mp4';

const rootsData = [
    { id: 'nutrition', label: 'Nutrition', connections: ['digestion', 'metabolism', 'glycemic', 'heart', 'hormonal', 'bone'] },
    { id: 'sleep', label: 'Sleep', connections: ['inflammation', 'metabolism', 'hormonal', 'heart'] },
    { id: 'stress', label: 'Stress', connections: ['hormonal', 'inflammation', 'heart', 'digestion'] },
    { id: 'exercise', label: 'Exercise & Movement', connections: ['metabolism', 'heart', 'bone', 'glycemic'] },
    { id: 'relationships', label: 'Relationships', connections: ['stress', 'hormonal', 'inflammation'] },
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
    { id: 'biotransformation', label: 'Bio Transformation' },
];

const HealthTreeEcosystem = () => {
    const containerRef = useRef(null);
    const bgMediaRef = useRef(null);
    const [activeRoot, setActiveRoot] = useState(null);

    const activeConnections =
        activeRoot != null
            ? rootsData.find((r) => r.id === activeRoot)?.connections ?? []
            : [];

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    gsap.to(bgMediaRef.current, {
                        scale: 1.08,
                        ease: 'none',
                        force3D: true,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.5,
                        },
                    });
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="ephr-section relative w-full bg-black text-white py-24 md:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 overflow-hidden gpu-layer">
                <LazyVideo
                    ref={bgMediaRef}
                    src={TREE_VIDEO}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col justify-center relative z-10">
                <Reveal className="text-center mb-16 md:mb-24 relative z-10">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 drop-shadow-2xl">
                        Your Health Is an{' '}
                        <span className="italic font-light text-primary-light">Ecosystem</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Your lifestyle factors act as the roots of your health, while your body systems form
                        the branches. Strong foundations support stronger physiological function.
                    </p>
                </Reveal>

                <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[500px]">
                    <div className="relative w-full h-full flex flex-col justify-evenly z-10">
                        <div className="flex flex-wrap justify-center gap-3 mb-24">
                            {branchesData.map((branch) => {
                                const isActive = activeConnections.includes(branch.id);
                                return (
                                    <div
                                        key={branch.id}
                                        className={`px-5 py-3 rounded-full border text-sm font-light font-sans transition-colors duration-300 ${
                                            isActive
                                                ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(166,101,228,0.4)] scale-105'
                                                : 'bg-white/5 text-white/60 border-white/10'
                                        }`}
                                    >
                                        {branch.label}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md pointer-events-none flex flex-col items-center justify-center">
                            <div
                                className={`w-32 h-32 bg-primary rounded-full blur-[60px] transition-all duration-500 ${
                                    activeRoot ? 'scale-150 opacity-80' : 'scale-100 opacity-20'
                                }`}
                            />
                            <p
                                className={`absolute text-white/50 font-sans tracking-widest uppercase text-xs mt-4 transition-opacity duration-300 ${
                                    activeRoot ? 'opacity-0' : 'opacity-100'
                                }`}
                            >
                                Hover Roots Below
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mt-24">
                            {rootsData.map((root) => (
                                <button
                                    key={root.id}
                                    type="button"
                                    onMouseEnter={() => setActiveRoot(root.id)}
                                    onMouseLeave={() => setActiveRoot(null)}
                                    onFocus={() => setActiveRoot(root.id)}
                                    onBlur={() => setActiveRoot(null)}
                                    className={`px-6 py-4 rounded-xl border border-white/10 shadow-lg text-sm md:text-base font-light font-sans transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                                        activeRoot === root.id
                                            ? 'bg-white/10 text-white border-white/50'
                                            : 'bg-black/40 text-white/70'
                                    }`}
                                >
                                    {root.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthTreeEcosystem;
