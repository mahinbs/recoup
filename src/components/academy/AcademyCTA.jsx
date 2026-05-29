import React from 'react';
import { motion } from 'framer-motion';

export default function AcademyCTA() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-[#F8F9FA] py-5">
      
      {/* Immersive Background Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(134,44,214,0.08) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.span 
          className="font-sans text-xs font-semibold tracking-[0.3em] text-secondary uppercase block mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Ready to Advance Your Practice?
        </motion.span>
        
        <motion.h2 
          className="font-serif text-4xl md:text-5xl lg:text-7xl text-slate-900 mb-8 max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Elevate How You Practice.
        </motion.h2>
        
        <motion.p 
          className="font-sans text-slate-600 text-lg max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're a physician, Ayurvedic clinician, physiotherapist, or allied health professional - there is a RECOUP Academy pathway designed for you.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="/contact?from=academy&section=cta" className="px-8 py-4 rounded-full bg-primary text-white font-sans font-medium hover:bg-primary-dark transition-colors shadow-sm">
            Speak with Admissions
          </a>
          <a href="/conditions" className="px-8 py-4 rounded-full bg-transparent border border-primary/30 text-primary font-sans font-medium hover:bg-primary/5 transition-colors">
            Explore All Programs
          </a>
        </motion.div>

        {/* Contact Block */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-sm text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span>RECOUP Health, Bengaluru</span>
          <span className="hidden md:inline text-slate-300">·</span>
          <span>Dr. Deepak Sharan (Academy Director)</span>
          <span className="hidden md:inline text-slate-300">·</span>
          <a href="mailto:academy@recoup.health" className="hover:text-primary transition-colors">academy@recoup.health</a>
        </motion.div>
        
      </div>

      {/* Footer Micro Strip */}
      <div className="sm:absolute bottom-0 left-0 w-full sm:border-t border-slate-200/80 py-6 text-center z-10">
        <span className="font-sans text-xs text-slate-400 uppercase tracking-widest">
          RECOUP Academy · Multidisciplinary · Integrative · Clinical
        </span>
      </div>
      
    </section>
  );
}
