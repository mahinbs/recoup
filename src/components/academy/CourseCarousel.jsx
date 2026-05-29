import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  "Integrative Root Cause Medicine",
  "Dermatology–Trichology",
  "Rehabilitation Series",
  "Psychological Intervention",
  "Diet & Nutrition",
  "Neurology",
  "Diagnostic Series",
  "Therapeutic Intervention",
  "Musculoskeletal"
];

const coursesData = {
  "Integrative Root Cause Medicine": [
    "Essentials of Integrative Root Cause Medicine",
    "Immunity & Inflammation",
    "Cardiometabolic Disorders",
    "Hormonal Dysfunction",
    "Infertility",
    "Gastrointestinal Dysfunction Module"
  ],
  "Dermatology–Trichology": [
    "Acne",
    "Eczema",
    "Seborrheic Dermatitis",
    "Psoriasis",
    "Hair Loss"
  ],
  "Rehabilitation Series": [
    "Tai Chi",
    "Handwriting Course",
    "Neurologic Music"
  ],
  "Psychological Intervention": [
    "Motivational Interviewing",
    "Acceptance & Commitment Therapy",
    "EAET",
    "Psycho Physiological Disorders",
    "Positive Psychology",
    "Dynamic Healing",
    "Systems Thinking"
  ],
  "Diet & Nutrition": [
    "Basics of Functional Nutrition",
    "Advanced Functional Nutrition"
  ],
  "Neurology": [
    "Neurodegenerative Disorders",
    "Dementia & Cognitive Decline",
    "Mood & Anxiety Disorders",
    "Childhood Development Disorders",
    "Parkinson’s Disease"
  ],
  "Diagnostic Series": [
    "Comprehensive Lab Testing",
    "Medical Thermography",
    "Heart Rate Variability & HBA",
    "GI MAP Stool Test",
    "OAT (Organic Acid Test)",
    "Mycotoxin Test"
  ],
  "Therapeutic Intervention": [
    "IV Nutrition Therapy",
    "Weight Management",
    "Clinical Application of Cannabidiol",
    "Ozone Therapy",
    "Hyperbaric Oxygen Therapy",
    "Peptide Therapy"
  ],
  "Musculoskeletal": [
    "Chronic Pain",
    "Rheumatological Rehabilitation",
    "Myofascial Pain and Fibromyalgia",
    "Dry Needling",
    "Principles of Treatment – Fibromyalgia",
    "Osteoarthritis"
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function CourseCarousel() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeCourses = coursesData[activeCategory] || [];
  const isSymmetricLayout = activeCourses.length === 2;

  return (
    <section id="courses" className="w-full bg-[#F8F9FA] py-24 lg:py-32 sm:lg:py-32 sm:px-6 lg:px-12 relative border-b border-slate-200/50">

      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 relative pl-4 lg:pl-12">
          <div className="text-[8rem] lg:text-[10rem] font-serif leading-none text-primary/5 absolute -top-12 -left-8 select-none z-0">03</div>
          <div className="relative z-10">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-4">Course Library</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-tight">Specialized Online Modules</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Categories List */}
          <div className="lg:col-span-4 w-full overflow-x-auto lg:overflow-visible scrollbar-hide pb-6 lg:pb-0 lg:sticky lg:top-32">
            <div className="flex lg:flex-col gap-2 lg:gap-1 min-w-max lg:min-w-0 pr-6 lg:pr-0 pl-1 lg:pl-8 border-b border-slate-200/50 lg:border-b-0 lg:border-l lg:border-slate-200/80 py-2 relative">
              {categories.map((cat, idx) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="group flex items-baseline gap-4 text-left px-4 py-3 rounded-full lg:rounded-none lg:px-0 lg:py-2.5 font-sans transition-all duration-300 relative focus:outline-none whitespace-nowrap lg:whitespace-normal"
                  >
                    {/* Mono Number */}
                    <span className={`font-mono text-xs transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : 'text-slate-400 group-hover:text-slate-600'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <span className={`font-serif text-base lg:text-lg tracking-tight transition-all duration-300 ${isActive
                        ? 'text-primary font-bold scale-[1.02] lg:translate-x-1.5'
                        : 'text-slate-500 group-hover:text-slate-800'
                      }`}>
                      {cat}
                    </span>

                    {/* Active Background Line (Desktop only) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute left-[-34px] top-1/4 -translate-y-1/2 w-[4px] h-[60%] bg-primary rounded-full hidden lg:block"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Active Pill (Mobile Only) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10 lg:hidden"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bento-Inspired Grid */}
          <div className="lg:col-span-8 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {activeCourses.map((course, idx) => {
                  const isFeatured = idx === 0 && !isSymmetricLayout;

                  if (isFeatured) {
                    return (
                      <motion.div
                        key={course}
                        variants={cardVariants}
                        className="md:col-span-2 bg-gradient-to-br from-primary-darkest via-primary-dark to-primary text-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-primary/5 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
                      >
                        {/* Soft visual background glow */}
                        <div className="absolute right-0 bottom-0 w-72 h-72 bg-primary-light/20 rounded-full filter blur-3xl pointer-events-none transform translate-x-16 translate-y-16 group-hover:scale-110 transition-transform duration-700" />

                        <div>
                          <div className="flex items-center justify-between mb-8">
                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white/95">
                              Spotlight Program
                            </span>
                            <span className="font-mono text-xs text-white/60">
                              Module 01
                            </span>
                          </div>

                          <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight max-w-xl">
                            {course}
                          </h3>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8 border-t border-white/10 pt-6">
                          <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed">
                            Advanced evidence-informed clinical module, incorporating pathophysiology, diagnostics, and modern case integration.
                          </p>
                          <a href="/contact?from=academy&section=courses_spotlight" className="px-6 py-3 bg-white text-primary font-sans text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors shrink-0 shadow-md flex items-center gap-1 self-start sm:self-auto group/btn">
                            Enquiry
                            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                          </a>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={course}
                      variants={cardVariants}
                      className="bg-white border border-slate-200/50 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group min-h-[220px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="font-sans text-[10px] font-semibold text-secondary uppercase tracking-[0.15em] bg-slate-100 border border-slate-200/40 px-3 py-1 rounded-full">
                            Online Course
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                          {course}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between mt-6 border-t border-slate-100 pt-4">
                        <span className="font-sans text-xs text-slate-500">
                          Self-Paced + Mentorship
                        </span>
                        <a href="/contact?from=academy&section=courses" className="text-primary font-sans text-sm font-semibold flex items-center gap-1 group-hover:underline">
                          Explore
                          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
