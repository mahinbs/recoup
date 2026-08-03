import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyVideo from './LazyVideo';

const HERO_VIDEO =
  'https://videos.pexels.com/video-files/5532770/5532770-hd_1920_1080_25fps.mp4';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#f6f0fb] via-white to-[#efe6f9] pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute top-20 right-0 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-primary-light/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="text-primary font-bold tracking-[0.18em] uppercase text-xs mb-5 block">
              Entire Person Health Report (EPHR)
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
              Welcome to the{' '}
              <span className="text-primary">Unseen</span> Side of Your Health.
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-9">
              Your health is more than a collection of test results. The{' '}
              <strong className="text-slate-800 font-semibold">
                Entire Person Health Report (EPHR)
              </strong>{' '}
              brings together your symptoms, lifestyle, medical history, health
              assessments, and laboratory findings into one comprehensive
              report, helping you understand your health, identify early
              imbalances, and take action before disease develops.
            </p>
            <Link
              to="/contact?from=ephr&section=hero"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-medium text-sm md:text-base shadow-lg shadow-primary/25 hover:bg-primary-darker transition-colors"
            >
              Book Your EPHR Assessment
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-primary/20 border border-white/60 bg-primary-dark aspect-[4/3] md:aspect-[16/11]">
              <LazyVideo
                src={HERO_VIDEO}
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-primary-dark/10 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none">
                {['Body Scan', 'Biomarkers', 'Clinical Insights', 'Health Dashboard'].map(
                  (label) => (
                    <span
                      key={label}
                      className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] md:text-xs font-medium tracking-wide uppercase"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
