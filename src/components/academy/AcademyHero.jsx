import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const eyebrowText = "MULTIDISCIPLINARY · INTEGRATIVE · CLINICAL";
const eyebrowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};
const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function AcademyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-5 sm:pt-24">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=2000&q=80")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/30 via-white/70 to-[#F8F9FA]" />

      <div className="container mx-auto lg:py-32 sm:px-6 lg:px-12 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-7 items-center">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-8 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div
              className="mb-6 hidden sm:inline-block bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-1.5"
              variants={itemVariants}
            >
              <motion.span
                className="font-sans text-xs font-semibold tracking-[0.35em] text-[#6F6AA5] uppercase flex"
                variants={eyebrowVariants}
                initial="hidden"
                animate="visible"
              >
                {eyebrowText.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-sans text-slate-900 mb-6 text-3xl md:text-4xl lg:text-[2.6rem]"
              style={{ lineHeight: 1.08 }}
              variants={itemVariants}
            >
              A Multidisciplinary<br />
              <span className="text-[#862CD6] italic">Learning Ecosystem</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="font-sans text-xl text-[#6F6AA5] mb-6 font-medium"
              variants={itemVariants}
            >
              for Integrative Healthcare Professionals
            </motion.h2>

            {/* Body */}
            <motion.p
              className="font-sans text-slate-600 max-w-2xl md:text-lg leading-relaxed mb-10"
              variants={itemVariants}
            >
              RECOUP Academy is a multidisciplinary learning ecosystem designed for healthcare professionals who want to go beyond conventional practice. Our programs combine science, clinical application, and experiential learning to develop practitioners capable of delivering truly integrative care.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 mb-16" variants={itemVariants}>
              <a href="/conditions" className="px-8 py-4 rounded-full bg-[#862CD6] text-white font-sans font-medium hover:bg-[#5B1E91] transition-colors duration-300">
                Explore All Programs
              </a>
              <a href="/contact?from=academy&section=hero" className="px-8 py-4 rounded-full bg-transparent border border-[#862CD6]/30 text-[#862CD6] font-sans font-medium hover:bg-[#862CD6]/5 transition-colors duration-300">
                Speak with Admissions
              </a>
            </motion.div>

          </motion.div>

          {/* Floating Stat Chips (Desktop right side) */}
          <motion.div
            className="lg:col-span-4 hidden lg:flex flex-col gap-6 items-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "7 Fellowship Programs",
              "500+ Publications",
              "Hybrid Learning"
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-black/5 shadow-sm rounded-full px-6 py-3 font-sans text-slate-800 font-medium"
                variants={itemVariants}
              >
                {stat}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-sans text-xs tracking-[0.3em] text-slate-400">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
