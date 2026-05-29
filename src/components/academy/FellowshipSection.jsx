import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const fellowships = [
  {
    id: "01",
    title: "Clinical Fellowship in Integrative Root Cause Primary Care Medicine",
    level1: ["Systems biology and functional medicine foundations", "Inflammation, metabolic dysfunction, gut health, and chronic disease pathways", "Integrative diagnostics and patient assessment"],
    level2: ["Clinical case integration", "Personalized therapeutic planning", "Advanced interpretation of labs and functional diagnostics"]
  },
  {
    id: "02",
    title: "Integrative Root Cause Medicine for AYUSH Practitioners",
    level1: ["Bridging traditional healing systems with modern integrative medicine", "Functional physiology and root-cause frameworks"],
    level2: ["Integrative patient management", "Evidence-informed therapeutic integration"]
  },
  {
    id: "03",
    title: "Root-Cause, Integrative Nutrition Fellowship Program",
    level1: ["Functional nutrition science", "Nutritional biochemistry and metabolic health"],
    level2: ["Clinical nutrition applications", "Personalized therapeutic nutrition planning"]
  },
  {
    id: "04",
    title: "Clinical Fellowship in Integrative, Root Cause Health Coaching",
    level1: ["Behavior change science", "Motivational interviewing and lifestyle medicine"],
    level2: ["Clinical coaching integration", "Long-term patient transformation strategies"]
  },
  {
    id: "05",
    title: "The Root-Cause, Integrative Psychology Fellowship Program",
    level1: ["Mind-body medicine", "Trauma-informed care and psychophysiology"],
    level2: ["Integrative psychological interventions", "Clinical application in chronic disease and stress disorders"]
  },
  {
    id: "06",
    title: "Clinical Fellowship in Developmental and Neurological Rehabilitation",
    level1: ["Neurodevelopmental principles", "Rehabilitation sciences and neuroplasticity"],
    level2: ["Clinical rehabilitation protocols", "Neurological case management and interdisciplinary integration"]
  },
  {
    id: "07",
    title: "Clinical Fellowship in Ergonomics, Neuromusculoskeletal and Occupational Rehabilitation",
    level1: ["Ergonomics and occupational health foundations", "Musculoskeletal dysfunction and movement science"],
    level2: ["Workplace rehabilitation", "Neuromusculoskeletal rehabilitation strategies and clinical application"]
  }
];

export default function FellowshipSection() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const progressBarRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile) return; 

    const sections = gsap.utils.toArray('.fellowship-card');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (scrollWrapperRef.current.scrollWidth),
      }
    });

    // Move the cards container to the left dynamically
    tl.to(scrollWrapperRef.current, {
      x: () => {
        const wrapper = scrollWrapperRef.current;
        const leftPanel = leftPanelRef.current;
        if (!wrapper || !leftPanel) return 0;
        
        const W = wrapper.scrollWidth;
        const leftPanelWidth = leftPanel.offsetWidth;
        // Total offset of the scroll wrapper from the viewport left edge:
        // leftPanelWidth + 40px (pl-10 on right panel) + 40px (left-10 on absolute wrapper) = leftPanelWidth + 80
        const L = leftPanelWidth + 80;
        
        return -(W - window.innerWidth + L);
      },
      ease: "none"
    }, 0);

    // Progress bar animation
    tl.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none"
    }, 0);

  }, { scope: containerRef, dependencies: [isMobile] });

  // Mobile view 
  if (isMobile) {
    return (
      <section className="w-full bg-[#F8F9FA] py-20 px-6 overflow-hidden">
        <div className="mb-12 relative">
           <div className="text-[8rem] font-serif leading-none text-primary/5 absolute -top-10 -left-4 select-none">01</div>
           <div className="relative z-10">
             <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-4">Fellowship Programs</span>
             <h2 className="font-serif text-4xl text-slate-900 mb-6">Advanced Clinical Education</h2>
             <p className="font-sans text-slate-600 mb-4">Our Fellowship Programs are designed for physicians, therapists, psychologists, nutritionists, AYUSH practitioners, and allied health professionals who wish to develop advanced clinical expertise in integrative and root-cause medicine.</p>
             <p className="font-sans text-sm text-slate-500"><strong className="text-slate-700">Level 1:</strong> Foundations <br/> <strong className="text-slate-700">Level 2:</strong> Advanced Clinical Application</p>
           </div>
        </div>

        <div className="flex flex-col gap-4">
          {fellowships.map((f) => (
            <div key={f.id} className="bg-white border border-slate-200/60 shadow-sm rounded-2xl overflow-hidden">
              <button 
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => setExpandedId(expandedId === f.id ? null : f.id)}
              >
                <div className="flex gap-4 items-center">
                  <span className="font-serif text-3xl text-primary/30">{f.id}</span>
                  <span className="font-serif text-lg text-slate-900 leading-tight pr-4">{f.title}</span>
                </div>
              </button>
              <AnimatePresence>
                {expandedId === f.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                     <div className="space-y-4 pt-4 border-t border-slate-100">
                        <div>
                          <h4 className="font-sans font-semibold text-slate-800 text-sm mb-2">Level 1 – Foundations</h4>
                          <ul className="list-disc pl-5 font-sans text-sm text-slate-600 space-y-1">
                            {f.level1.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-slate-800 text-sm mb-2">Level 2 – Advanced Application</h4>
                          <ul className="list-disc pl-5 font-sans text-sm text-slate-600 space-y-1">
                            {f.level2.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                        <a href="/contact?from=academy&section=fellowships_mobile" className="inline-block mt-4 text-primary font-sans text-sm font-medium hover:underline">
                          Enquiry / Apply Now →
                        </a>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="w-full bg-[#F8F9FA] h-screen overflow-hidden relative hidden lg:block">
      <div className="absolute inset-0 flex">
        {/* Left Fixed Panel */}
        <div ref={leftPanelRef} className="w-[400px] xl:w-[500px] h-full flex-shrink-0 flex items-center px-12 xl:px-16 relative z-20 bg-[#F8F9FA] shadow-[10px_0_30px_rgba(0,0,0,0.03)]">
          <div className="relative">
            <div className="text-[10rem] font-serif leading-none text-primary/5 absolute -top-20 -left-8 select-none">01</div>
            <div className="relative z-10">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-6">Fellowship Programs</span>
              <h2 className="font-serif text-4xl xl:text-5xl text-slate-900 mb-8 leading-tight">Advanced Clinical Education</h2>
              <p className="font-sans text-slate-600 mb-6 text-lg">Our Fellowship Programs are designed for professionals who wish to develop advanced clinical expertise in integrative and root-cause medicine.</p>
              
              <div className="bg-surface border border-slate-200/50 p-5 rounded-xl">
                <p className="font-sans text-sm text-slate-600 mb-3"><strong className="text-slate-800">Level 1:</strong> Foundations & Systems-based understanding.</p>
                <p className="font-sans text-sm text-slate-600"><strong className="text-slate-800">Level 2:</strong> Advanced Clinical Application & diagnostics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrolling Panel */}
        <div className="flex-grow h-full relative flex items-center pl-10">
            <div ref={scrollWrapperRef} className="flex gap-8 px-10 absolute left-10">
              {fellowships.map((f, i) => (
                <div 
                  key={f.id} 
                  className="fellowship-card w-[450px] flex-shrink-0 bg-white border border-slate-200/60 shadow-sm rounded-2xl p-10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 flex flex-col h-[600px] lg:h-[550px]"
                >
                  <div className="font-serif text-5xl text-primary/20 mb-6">{f.id}</div>
                  <h3 className="font-serif text-2xl text-slate-900 mb-8 leading-tight flex-grow-0">{f.title}</h3>
                  
                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    <div className="mb-6">
                      <h4 className="font-sans font-semibold text-slate-800 text-sm mb-3">Level 1 – Foundations</h4>
                      <ul className="list-disc pl-5 font-sans text-sm text-slate-600 space-y-2">
                        {f.level1.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-slate-800 text-sm mb-3">Level 2 – Advanced Application</h4>
                      <ul className="list-disc pl-5 font-sans text-sm text-slate-600 space-y-2">
                        {f.level2.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-4 border-t border-slate-100 flex-grow-0">
                    <a href="/contact?from=academy&section=fellowships_desktop" className="inline-block text-primary font-sans font-medium relative group">
                      <span>Enquiry / Apply Now</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-200 z-30">
        <div ref={progressBarRef} className="h-full bg-primary origin-left transform scale-x-0"></div>
      </div>
    </section>
  );
}
