import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import discoverIcon from '../../assets/new-images/Timeline-Icons/discover-conversation-bubble.png';
import assessIcon from '../../assets/new-images/Timeline-Icons/assess-health-report.png';
import diagnoseIcon from '../../assets/new-images/Timeline-Icons/diagnose-target-root-cause.png';
import personalizeIcon from '../../assets/new-images/Timeline-Icons/personalize-sliders.png';
import transformIcon from '../../assets/new-images/Timeline-Icons/transform-growth-leaf.png';

const steps = [
  {
    icon: discoverIcon,
    title: 'Discover',
    subtitle: 'We Listen. You Share.',
    desc: 'Your story begins with a deep conversation about symptoms, history, and goals.',
  },
  {
    icon: assessIcon,
    title: 'Assess',
    subtitle: 'We Measure. We Analyze.',
    desc: 'Precision diagnostics map how your body systems interact and where stress accumulates.',
  },
  {
    icon: diagnoseIcon,
    title: 'Diagnose',
    subtitle: 'We Find the Root Cause.',
    desc: 'We uncover the underlying drivers of pain and dysfunction—not just surface symptoms.',
  },
  {
    icon: personalizeIcon,
    title: 'Personalize',
    subtitle: 'Your Care. Your Plan.',
    desc: 'An interdisciplinary team builds a care plan tailored to your biology and lifestyle.',
  },
  {
    icon: transformIcon,
    title: 'Transform',
    subtitle: 'Heal Better. Live Better.',
    desc: 'Ongoing support helps you rebuild resilience and sustain lasting health.',
  },
];

const PatientJourney = () => {
  return (
    <Section key="journey" className="bg-white py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 px-2">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Recoup&apos;s 5-Step Healing Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-5 leading-tight">
          Your Roadmap to <span className="text-primary italic font-serif">Lasting Health</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          A physician-led, step-by-step process that takes you from discovery to lasting transformation.
        </p>
      </div>

      <div className="relative">
        {/* Progress connector */}
        <div className="hidden lg:block absolute top-[4.5rem] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 z-0 rounded-full" />

        <div className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-6 relative z-10 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory scrollbar-hide px-1">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group flex flex-col items-center text-center bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/20 rounded-[1.75rem] p-6 md:p-7 min-w-[260px] lg:min-w-0 snap-center shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-11 h-11 object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-1">{step.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{step.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PatientJourney;
