import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyVideo from './LazyVideo';

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO =
    'https://videos.pexels.com/video-files/3195444/3195444-hd_1920_1080_25fps.mp4';

const HeroSection = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const bgMediaRef = useRef(null);
    const scene1Ref = useRef(null);
    const scene2Ref = useRef(null);
    const scene3Ref = useRef(null);
    const overlayRef = useRef(null);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            gsap.set([scene2Ref.current, scene3Ref.current], { opacity: 1, scale: 1, y: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%',
                    pin: true,
                    scrub: 0.6,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            gsap.to(bgMediaRef.current, {
                scale: 1.1,
                ease: 'none',
                force3D: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%',
                    scrub: 0.6,
                },
            });

            tl.to(
                scene1Ref.current,
                { scale: 3.5, opacity: 0, duration: 1, ease: 'power2.in', force3D: true },
                0
            );

            tl.fromTo(
                scene2Ref.current,
                { scale: 0.6, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out', force3D: true },
                0.5
            );

            tl.to(
                scene2Ref.current,
                { scale: 2.5, opacity: 0, duration: 1, ease: 'power2.in', force3D: true },
                1.5
            );

            tl.fromTo(
                scene3Ref.current,
                { scale: 0.85, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', force3D: true },
                2.2
            );

            tl.to(overlayRef.current, { opacity: 0.95, duration: 1, ease: 'power1.inOut' }, 2.5);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black selection:bg-primary/30 selection:text-white"
        >
            <div className="absolute inset-0 z-0 gpu-layer">
                <LazyVideo
                    ref={bgMediaRef}
                    src={HERO_VIDEO}
                    className="w-full h-full object-cover opacity-80"
                />
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-white/10 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>

            <div
                ref={scene1Ref}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gpu-layer"
            >
                <div className="flex items-center space-x-6 mb-8">
                    <div className="h-[1px] w-12 md:w-24 bg-white/40" />
                    <span className="text-xs md:text-sm font-sans tracking-[0.3em] text-white/80 font-light uppercase">
                        Preventive · Proactive · Personalized
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-white/40" />
                </div>

                <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-white leading-[1.05] max-w-6xl tracking-tight drop-shadow-2xl">
                    A Complete View of <br className="hidden md:block" />
                    <span className="italic font-light text-white/90">Your Health</span>
                </h1>
            </div>

            <div
                ref={scene2Ref}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 opacity-0 pointer-events-none gpu-layer"
            >
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl drop-shadow-xl italic font-light">
                    "EPHR transforms biomarkers, lifestyle patterns, and body systems into <br />
                    <strong className="font-sans font-medium text-primary-light not-italic text-4xl md:text-6xl tracking-tight mt-4 block">
                        one connected intelligence."
                    </strong>
                </p>
            </div>

            <div
                ref={scene3Ref}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 opacity-0 pointer-events-none sm:pt-0 pt-10 gpu-layer"
            >
                <div className="max-w-3xl mx-auto space-y-8 mb-16 bg-black/30 p-5 sm:p-10 rounded-3xl border border-white/10">
                    <p className="sm:text-xl md:text-2xl font-sans text-white/90 leading-relaxed font-light">
                        Most health reports only identify disease after symptoms appear. EPHR helps you
                        understand how your body is functioning <em className="text-white">before</em> deeper
                        health issues develop.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-6">
                        {['200+ Data Points', 'System-Level Analysis', 'Preventive Insights'].map(
                            (chip, idx) => (
                                <div
                                    key={idx}
                                    className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-sm md:text-base font-light text-white/80"
                                >
                                    {chip}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
                    <button
                        onClick={() => navigate('/contact?from=ephr&section=hero')}
                        className="px-10 py-5 rounded-full bg-primary text-white font-sans font-medium text-sm md:text-base tracking-wide hover:bg-white hover:text-primary transition-colors duration-300 shadow-[0_0_40px_rgba(134,44,214,0.4)]"
                    >
                        Get Your EPHR Assessment
                    </button>
                    <button
                        onClick={() => scrollToSection('how-ephr-works')}
                        className="px-10 py-5 rounded-full bg-transparent text-white font-sans font-medium text-sm md:text-base tracking-wide border border-white/30 hover:border-white hover:bg-white/10 transition-colors duration-300"
                    >
                        Explore How EPHR Works
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
