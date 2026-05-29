import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  Network, Search, BookOpen, Activity,
  Users, FlaskConical, Laptop, Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Multidisciplinary Integrative Learning", icon: Network, desc: "Breaking silos between specialties to build holistic practitioners." },
  { title: "Root-Cause Clinical Frameworks", icon: Search, desc: "Moving beyond symptom management to address underlying mechanisms." },
  { title: "Evidence-Informed Practice", icon: BookOpen, desc: "Grounded in the latest peer-reviewed scientific research." },
  { title: "Hands-On Clinical Application", icon: Activity, desc: "Practical skills you can implement in your clinic immediately." },
  { title: "Mentorship-Based Education", icon: Users, desc: "Learn directly from experienced clinical experts and researchers." },
  { title: "Research & Translational Learning", icon: FlaskConical, desc: "Bridging the gap between laboratory research and clinical care." },
  { title: "Hybrid Learning Ecosystem", icon: Laptop, desc: "Flexible online modules combined with immersive in-person workshops." },
  { title: "Clinical + Experiential Integration", icon: Layers, desc: "Unifying theory, case studies, and real patient interactions." }
];

export default function WhyChooseSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="why-choose" ref={containerRef} className="w-full py-32 lg:py-32 sm:px-6 lg:px-12 relative overflow-hidden bg-[#F8F9FA] border-t border-slate-200/50">

      {/* Background Parallax */}
      <div
        ref={bgRef}
        className="absolute -inset-[20%] bg-cover bg-center opacity-[0.4] z-0 pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=2000&q=80")' }} // Reusing abstract bg
      />

      {/* Giant "WHY" Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-primary/[0.03] select-none pointer-events-none z-0 tracking-tighter w-full text-center">
        WHY
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Why Choose RECOUP Health Academy?</h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="feature-card bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-slate-900 mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
