import React, { useEffect } from 'react';
import { initLenis } from '../lib/lenis';

// Components
import AcademyHero from '../components/academy/AcademyHero';
import AcademyIntroStrip from '../components/academy/AcademyIntroStrip';
import FellowshipSection from '../components/academy/FellowshipSection';
import ResearchSection from '../components/academy/ResearchSection';
import LearningPlatformSection from '../components/academy/LearningPlatformSection';
import CourseCarousel from '../components/academy/CourseCarousel';
import OfflineWorkshopsSection from '../components/academy/OfflineWorkshopsSection';
import PatientEducationSection from '../components/academy/PatientEducationSection';
import WhyChooseSection from '../components/academy/WhyChooseSection';
import AcademyCTA from '../components/academy/AcademyCTA';

export default function Academy() {
  useEffect(() => {
    const lenis = initLenis();
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-900 w-full selection:bg-primary/20 selection:text-primary-dark">
      <AcademyHero />
      <AcademyIntroStrip />
      <FellowshipSection />
      <ResearchSection />
      <LearningPlatformSection />
      <CourseCarousel />
      <OfflineWorkshopsSection />
      <PatientEducationSection />
      <WhyChooseSection />
      <AcademyCTA />
    </div>
  );
}
