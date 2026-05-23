import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/ephr-page/HeroSection';
import NarrativeSequence from '../components/ephr-page/NarrativeSequence';
import HealthTreeEcosystem from '../components/ephr-page/HealthTreeEcosystem';
import HowEphrWorks from '../components/ephr-page/HowEphrWorks';
import HealthSystemsCarousel from '../components/ephr-page/HealthSystemsCarousel';
import HealthScore from '../components/ephr-page/HealthScore';
import SixPillars from '../components/ephr-page/SixPillars';
import LabIntelligence from '../components/ephr-page/LabIntelligence';
import BiologicalAge from '../components/ephr-page/BiologicalAge';
import WhoCanBenefit from '../components/ephr-page/WhoCanBenefit';
import FinalCTA from '../components/ephr-page/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

const EphrPage = () => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
            <main className="bg-surface min-h-screen text-slate-900 font-sans overflow-x-hidden selection:bg-primary selection:text-white">
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
        </ReactLenis>
    );
};

export default EphrPage;
