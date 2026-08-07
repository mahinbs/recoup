import React from 'react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import govLogo from '../../assets/new-images/Awarding-Organization-Logos/government-of-india.png';
import sicotLogo from '../../assets/new-images/Awarding-Organization-Logos/sicot-logo.png';
import ioaLogo from '../../assets/new-images/Awarding-Organization-Logos/ioa-logo.png';

const awards = [
  {
    year: '2008',
    title: 'National Disability Award',
    body: 'Government of India',
    logo: govLogo,
  },
  {
    year: '2006',
    title: 'Henri Bensahel Award',
    body: 'SICOT',
    logo: sicotLogo,
  },
  {
    year: '2019',
    title: 'Presidential Award – Dr. APJ Abdul Kalam',
    body: 'Government of India',
    logo: govLogo,
  },
  {
    year: '2015',
    title: 'Indian Orthopaedic Association Recognition',
    body: 'Indian Orthopaedic Association',
    logo: ioaLogo,
  },
  {
    year: '2012',
    title: 'SICOT Research Academy Grant',
    body: 'SICOT',
    logo: sicotLogo,
  },
];

const Awards = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.15,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.6, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.4, spacing: 24 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 2.8, spacing: 28 },
      },
    },
  });

  return (
    <section
      id="awards"
      className="relative w-full overflow-hidden bg-slate-900 pt-20 md:pt-28 pb-16 md:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary/40 opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-14 pt-2">
          <span className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            A Career of Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Awards & Special Achievements
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Over three decades of national and international recognition for research, surgical
            innovation, and service in Cerebral Palsy, Paediatric Orthopaedics, and Ergonomics.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing">
          {awards.map((award, index) => (
            <div key={`${award.title}-${index}`} className="keen-slider__slide">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-[10px] p-6 md:p-8 min-h-[180px] flex gap-5 items-center shadow-lg"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[8px] bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                  <img
                    src={award.logo}
                    alt={award.body}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-primary font-bold text-lg md:text-xl block mb-1">
                    {award.year}
                  </span>
                  <h3 className="font-bold text-primary-dark text-base md:text-lg leading-snug mb-1">
                    {award.title}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-slate-400">
                    {award.body}
                  </p>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
