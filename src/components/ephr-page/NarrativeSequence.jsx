import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const NarrativeSequence = () => {
    const containerRef = useRef(null);
    const leftPinRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                '(min-width: 1024px)': () => {
                    ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        pin: leftPinRef.current,
                        pinSpacing: false,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    });
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-white text-slate-900 z-10 py-24 md:py-32"
        >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2560&auto=format&fit=crop"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
                <div
                    ref={leftPinRef}
                    className="w-full lg:w-5/12 lg:h-screen flex flex-col justify- lg:sticky lg:top-0 py-12 self-start"
                >
                    <Reveal>
                        <h2 className="font-sans text-xs tracking-[0.25em] text-primary-dark uppercase mb-6 font-medium">
                            The Problem
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl leading-tight text-slate-900 mb-8 max-w-md">
                            Most Health Reports <br />
                            <span className="italic font-light text-slate-500">Only Detect Disease</span>
                        </h3>
                        <p className="font-sans text-lg md:text-xl text-slate-700 leading-relaxed max-w-md border-l-2 border-primary/30 pl-6">
                            Many people are told their reports are "normal," yet still don't feel their best.
                            Clarity begins when health is viewed as a connected system.
                        </p>
                    </Reveal>
                </div>

                <div className="w-full lg:w-7/12 flex flex-col space-y-32 lg:space-y-64 py-12 lg:py-[20vh]">
                    <Reveal className="space-y-12">
                        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
                                alt="Medical Laboratory"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-lg text-slate-600 font-sans max-w-none">
                            <p className="text-xl leading-relaxed text-slate-800">
                                Traditional reports often evaluate isolated values rather than how the body
                                functions as a whole.
                            </p>
                            <p className="leading-relaxed">
                                Health is not a collection of disconnected numbers. It is an interconnected
                                system influenced by lifestyle, stress, metabolism, inflammation, recovery,
                                and physiology.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                            <div>
                                <div className="text-5xl md:text-6xl font-serif text-primary mb-4 tracking-tight">
                                    1 in 3
                                </div>
                                <p className="text-sm font-sans text-slate-500 leading-relaxed">
                                    People continue experiencing symptoms despite "normal" reports.
                                </p>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-serif text-primary mb-4 tracking-tight">
                                    &lt;10%
                                </div>
                                <p className="text-sm font-sans text-slate-500 leading-relaxed">
                                    Of biomarkers are typically viewed in their functional context.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="space-y-12 relative">
                        <div className="absolute inset-0 -mx-6 md:-mx-12 px-6 md:px-12 py-16 bg-surface-muted rounded-3xl -z-10 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1600&auto=format&fit=crop"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute right-0 bottom-0 w-1/2 opacity-[0.05] object-cover"
                            />
                        </div>

                        <h4 className="font-serif text-3xl text-slate-900 mb-8 pt-8">
                            Why Traditional Reports Fall Short
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pb-8">
                            <div className="space-y-6">
                                <h5 className="font-sans text-sm tracking-widest text-slate-400 uppercase">
                                    Traditional
                                </h5>
                                <ul className="space-y-4 font-sans text-slate-500">
                                    {[
                                        'Isolated values',
                                        'Reactive approach',
                                        'Disease-focused',
                                        'Difficult to interpret',
                                        'One-time snapshots',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 opacity-60">
                                            <span className="text-slate-300 mt-1">—</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6 relative">
                                <div className="hidden sm:block absolute -left-6 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

                                <h5 className="font-sans text-sm tracking-widest text-primary font-medium uppercase">
                                    EPHR
                                </h5>
                                <ul className="space-y-4 font-sans text-slate-800">
                                    {[
                                        'Integrated insights',
                                        'Preventive intelligence',
                                        'Whole-body understanding',
                                        'Structured interpretation',
                                        'Trackable over time',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="space-y-10">
                        <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-12 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1600&auto=format&fit=crop"
                                alt="Biological abstract"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <h4 className="font-serif text-3xl md:text-4xl text-white leading-tight">
                                    A More Complete Way to <br className="hidden md:block" />
                                    <span className="italic text-white/80 font-light">Understand Health</span>
                                </h4>
                            </div>
                        </div>

                        <p className="font-sans text-lg text-slate-600 leading-relaxed max-w-2xl">
                            Instead of focusing on isolated biomarkers, EPHR connects biological signals,
                            lifestyle patterns, and physiological systems to create a structured and
                            meaningful picture of overall well-being.
                        </p>

                        <div className="space-y-6 pt-6">
                            <h5 className="font-sans font-medium text-slate-900">What It Delivers:</h5>
                            <ul className="grid gap-4 font-sans text-slate-600">
                                {[
                                    'Evaluates your body as an integrated system',
                                    'Identifies patterns across multiple biomarkers',
                                    'Detects early functional imbalances',
                                    'Supports preventive and proactive care',
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 transition-colors duration-200"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default NarrativeSequence;
