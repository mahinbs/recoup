import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from '../lib/lenis';
import HeroSection from '../components/ephr-page/HeroSection';
import NarrativeSequence from '../components/ephr-page/NarrativeSequence';
import HealthTreeEcosystem from '../components/ephr-page/HealthTreeEcosystem';
import HowEphrWorks from '../components/ephr-page/HowEphrWorks';
import HealthSystemsCarousel from '../components/ephr-page/HealthSystemsCarousel';
import SixPillars from '../components/ephr-page/SixPillars';
import LabIntelligence from '../components/ephr-page/LabIntelligence';
import BiologicalAge from '../components/ephr-page/BiologicalAge';
import WhoCanBenefit from '../components/ephr-page/WhoCanBenefit';
import FinalCTA from '../components/ephr-page/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

const EphrPage = () => {
    useEffect(() => {
        ScrollTrigger.config({ limitCallbacks: true });
        const lenis = initLenis();

        const refresh = () => ScrollTrigger.refresh();
        refresh();
        window.addEventListener('load', refresh);

        return () => {
            window.removeEventListener('load', refresh);
            lenis.destroy();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <main className="bg-surface min-h-screen text-slate-900 font-sans overflow-x-clip selection:bg-primary selection:text-white">
            <HeroSection />
            <NarrativeSequence />
            <HealthTreeEcosystem />
            <HowEphrWorks />
            <HealthSystemsCarousel />
            {/* <HealthScore /> */}
            <SixPillars />
            <LabIntelligence />
            <BiologicalAge />
            <WhoCanBenefit />
            <FinalCTA />
        </main>
    );
};

export default EphrPage;
