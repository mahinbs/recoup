import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays,
  ClipboardList,
  Microscope,
  FileBarChart,
  Stethoscope,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const steps = [
  {
    title: 'Book Your EPHR Assessment',
    description:
      'Schedule your assessment online or connect with our healthcare team to choose a convenient appointment.',
    icon: CalendarDays,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Booking a healthcare appointment on a calendar',
  },
  {
    title: 'Complete Your Health Assessment',
    description:
      'Share your symptoms, lifestyle details, and medical history, then complete the recommended laboratory investigations for a complete picture.',
    icon: ClipboardList,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Health questionnaire and laboratory blood testing',
  },
  {
    title: 'Clinical Analysis by Our Experts',
    description:
      'Our physicians review your biomarkers, assessments, and lifestyle data together — identifying patterns, early imbalances, and root contributors.',
    icon: Microscope,
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Doctor analyzing biomarker dashboard',
  },
  {
    title: 'Receive Your Entire Person Health Report',
    description:
      'Get a clear, structured EPHR that connects your health score, systems, biomarkers, and priorities into one actionable report.',
    icon: FileBarChart,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'EPHR report dashboard visualization',
  },
  {
    title: 'Review Your Report with Your Physician',
    description:
      'Walk through your findings with your Recoup physician and build a personalized care plan focused on root-cause healing and long-term prevention.',
    icon: Stethoscope,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Physician consultation reviewing health report',
  },
];

const EphrJourney = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="how-ephr-works" className="relative w-full bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 md:w-16 bg-primary/30" />
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
              Your EPHR Journey
            </span>
            <div className="h-px w-10 md:w-16 bg-primary/30" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Your Journey to Better Health in 5 Simple Steps
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A seamless, guided process to help you understand your health deeply
            and take the right steps forward.
          </p>
        </div>

        <div className="relative">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title} className="relative flex gap-4 md:gap-6">
                {/* Left track */}
                <div className="flex flex-col items-center shrink-0 w-10 md:w-12">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={cn(
                      'relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-colors',
                      isOpen
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-primary/10 text-primary hover:bg-primary/20',
                    )}
                    aria-label={`Step ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                  {!isLast && (
                    <div
                      className={cn(
                        'w-px flex-1 my-1 border-l border-dashed',
                        isOpen ? 'border-primary/40' : 'border-slate-200',
                      )}
                    />
                  )}
                </div>

                {/* Accordion panel */}
                <div className={cn('flex-1 pb-4', isLast && 'pb-0')}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={cn(
                      'w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                      isOpen
                        ? 'bg-[#f7f4fb] border-primary/20 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-primary/20',
                    )}
                    aria-expanded={isOpen}
                  >
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                        isOpen
                          ? 'bg-primary text-white'
                          : 'bg-primary/10 text-primary',
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 font-bold text-slate-900 text-sm md:text-base">
                      {step.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-slate-400 transition-transform duration-300',
                        isOpen && 'rotate-180 text-primary',
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 rounded-2xl border border-primary/10 bg-[#f7f4fb] p-4 md:p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-white">
                              <img
                                src={step.image}
                                alt={step.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>
            Your health. Our priority. Safe, secure and 100% confidential at
            every step.
          </span>
        </div>
      </div>
    </section>
  );
};

export default EphrJourney;
