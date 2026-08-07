import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import award1 from '../../assets/new-images/Images_Dr.DeepakSharan/award-ceremony-1.png';
import award2 from '../../assets/new-images/Images_Dr.DeepakSharan/award-ceremony-2.png';
import cpSurgery from '../../assets/new-images/Images_Dr.DeepakSharan/cp-surgery.jpg';
import surgeon from '../../assets/new-images/Images_Dr.DeepakSharan/surgeon-operating.png';

const imageCards = [
  {
    image: award1,
    title: 'National Recognition',
    caption:
      'Awarded by the Government of India for outstanding contributions to disability rehabilitation.',
    position: 'object-center',
  },
  {
    image: award2,
    title: 'Global Research Excellence',
    caption:
      "Recipient of one of the world's highest honors in Pediatric Orthopaedics.",
    position: 'object-[center_8%]',
  },
  {
    image: cpSurgery,
    title: 'Pioneering Surgical Innovation',
    caption:
      'Developed the SEMLARASS procedure for the treatment of cerebral palsy.',
    position: 'object-center',
  },
  {
    image: surgeon,
    title: 'Advancing Global Healthcare',
    caption:
      'Author of 600+ international scientific publications shaping rehabilitation, ergonomics, and musculoskeletal medicine.',
    position: 'object-[center_5%]',
  },
];

const metrics = [
  {
    value: '35+',
    label: 'Years of Excellence',
    sub: 'Clinical & Research Experience',
  },
  {
    value: '"Cult Figure"',
    label: 'Wall Street Journal',
    sub: 'World of RSI',
  },
  {
    value: '1 Million+',
    label: 'Patients Treated',
    sub: 'Across 45+ Countries',
  },
];

const DoctorProfile = () => {
  return (
    <Section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Bio + metrics */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-primary font-bold tracking-[0.18em] uppercase text-xs mb-4 block">
              Founder & Medical Director
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6 leading-tight">
              Meet Dr. Deepak Sharan
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-[15px] md:text-base mb-10">
              <p>
                Dr. Deepak Sharan is one of the world&apos;s leading experts in Orthopedic Surgery,
                Rehabilitation, Functional Medicine, Ergonomics, and Occupational Health, with 35+
                years of clinical and research experience dedicated to advancing the science of pain
                relief, rehabilitation, and human performance.
              </p>
              <p>
                As the Founder & CEO of Recoup Health, he has pioneered a root-cause approach to
                treating chronic pain and musculoskeletal disorders. He also serves as President of
                the International Myopain Society, Chairperson of the Scientific Committee on
                Musculoskeletal Disorders, International Commission on Occupational Health, and
                Founder Director of EPM International Ergonomics School, Italy.
              </p>
              <p>
                His contributions have shaped healthcare globally through 600+ scientific
                publications, the treatment of 1 Million+ patients across 45+ countries, pioneering
                innovations in rehabilitation, and internationally recognized leadership in
                ergonomics, musculoskeletal health, and functional medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-primary-dark mb-1 leading-none">
                    {m.value}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">{m.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{m.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 2x2 image cards */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {imageCards.map((card, i) => (
              <motion.article
                key={card.title}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <div className="aspect-[5/4] overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover ${card.position} group-hover:scale-[1.03] transition-transform duration-500 origin-top`}
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-primary-dark text-base md:text-lg mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.caption}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default DoctorProfile;
