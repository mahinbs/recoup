import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, LayoutDashboard, FolderOpen } from 'lucide-react';

const pillars = [
  {
    title: "Faculty Mentorship Portal",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    level1: "Faculty-guided discussions, academic mentorship, and interactive learning support.",
    level2: "Advanced clinical mentorship, case-based supervision, research and publication guidance."
  },
  {
    title: "Learner Dashboard",
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    level1: "Self-paced learning modules, course tracking, and integrated assessments.",
    level2: "Certification pathways, advanced practitioner learning tracks, external learner access."
  },
  {
    title: "Clinical Case Repository",
    icon: <FolderOpen className="w-8 h-8 text-primary" />,
    level1: "Real-world clinical cases and systems-based diagnostic understanding.",
    level2: "Advanced case analysis, interdisciplinary treatment approaches, integrative management."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function LearningPlatformSection() {
  return (
    <section id="platform" className="w-full bg-gradient-to-br from-primary-light/5 via-[#F8F9FA] to-[#F8F9FA] py-24 sm:lg:py-32 sm:px-6 lg:px-12 border-y border-slate-200/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-6">Online Learning Platform</h2>
          <p className="font-sans text-slate-600 sm:text-lg">A comprehensive digital ecosystem for healthcare learning, mentorship, and clinical education designed to support practitioners at every stage.</p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white border border-slate-200/60 shadow-sm rounded-3xl p-8 hover:-translate-y-2 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl text-slate-900 mb-6">{pillar.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Level 1</h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{pillar.level1}</p>
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Level 2</h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{pillar.level2}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <a href="/contact?from=academy&section=learning_platform" className="px-8 py-4 rounded-full bg-primary text-white font-sans font-medium hover:bg-primary-dark transition-colors shadow-sm">
            Access the Learning Platform
          </a>
        </div>
      </div>
    </section>
  );
}
