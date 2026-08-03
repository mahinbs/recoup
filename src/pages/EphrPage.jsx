import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLenis } from '../lib/lenis';
import HeroSection from '../components/ephr-page/HeroSection';
import HealthAreasSection from '../components/ephr-page/HealthAreasSection';
import SampleReportSection from '../components/ephr-page/SampleReportSection';
import EphrJourney from '../components/ephr-page/EphrJourney';
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
            <HealthAreasSection />
            <SampleReportSection />
            <EphrJourney />
            <SixPillars />
            <LabIntelligence />
            <BiologicalAge />
            <WhoCanBenefit />
            <FinalCTA />
        </main>
    );
};

export default EphrPage;
