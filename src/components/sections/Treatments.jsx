import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import chronicPain from '../../assets/new-images/Images-Home-Page-Conditions/chronic-pain-care.jpg';
import gutHealth from '../../assets/new-images/Images-Home-Page-Conditions/gut-health-digestive-care.jpg';
import hormonal from '../../assets/new-images/Images-Home-Page-Conditions/hormonal-health-wellness-1.jpg';
import metabolic from '../../assets/new-images/Images-Home-Page-Conditions/metabolic-health-weight-2.jpg';
import neuro from '../../assets/new-images/Images-Home-Page-Conditions/neurological-rehabilitation.jpg';
import cerebralPalsy from '../../assets/new-images/Images-Home-Page-Conditions/cerebral-palsy-1.jpg';

const careAreas = [
  {
    title: 'Chronic Pain Care',
    fullTitle: 'Chronic Pain Care',
    desc: 'Root-cause treatment for persistent musculoskeletal and neuropathic pain.',
    cover: chronicPain,
    href: '/conditions/chronic-pain',
  },
  {
    title: 'Gut Health',
    fullTitle: 'Gut Health & Digestive Care',
    desc: 'Restore digestive balance with integrated gut-focused care pathways.',
    cover: gutHealth,
    href: '/conditions/gastrointestinal-program',
  },
  {
    title: 'Hormonal Health',
    fullTitle: 'Hormonal Health & Wellness',
    desc: 'Personalized hormonal rebalancing for energy, mood, and vitality.',
    cover: hormonal,
    href: '/conditions/hormonal-rebalance-program',
  },
  {
    title: 'Metabolic Health',
    fullTitle: 'Metabolic Health & Weight Management',
    desc: 'Sustainable metabolic optimization and physician-led weight care.',
    cover: metabolic,
    href: '/conditions/weight-management',
  },
  {
    title: 'Neurological Rehab',
    fullTitle: 'Neurological Rehabilitation',
    desc: 'Specialized recovery programs for stroke and neurological conditions.',
    cover: neuro,
    href: '/conditions/stroke-rehabilitation',
  },
  {
    title: 'Cerebral Palsy',
    fullTitle: 'Cerebral Palsy Rehabilitation for Children',
    desc: 'Comprehensive rehabilitation supporting children with cerebral palsy.',
    cover: cerebralPalsy,
    href: '/conditions',
  },
];

const Treatments = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <Section id="treatments" className="bg-white py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 relative z-10 px-4">
        <div className="max-w-3xl">
          <span className="text-primary-light font-bold tracking-widest uppercase text-xs mb-4 block border-b border-primary-light/20 pb-4 w-fit">
            Our Areas of Care
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
            Specialized Care for{' '}
            <span className="text-primary italic font-serif">Whole-Person Healing</span>
          </h2>
        </div>
        <Link
          to="/conditions"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors"
        >
          Explore All Conditions
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Desktop Horizontal Accordion */}
      <div className="hidden lg:flex h-[500px] w-full gap-2 px-4">
        {careAreas.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item.title}
              className={cn(
                'relative h-full rounded-3xl overflow-hidden transition-all duration-500 ease-in-out',
                isHovered ? 'flex-[3.5]' : 'flex-1'
              )}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <img
                src={item.cover}
                alt={item.fullTitle}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-transform duration-700',
                  isHovered
                    ? 'scale-110 brightness-90'
                    : 'scale-100 brightness-50 grayscale hover:grayscale-0'
                )}
              />
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300',
                  isHovered ? 'opacity-100' : 'opacity-60'
                )}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className={cn(
                    'transition-all duration-300',
                    isHovered ? 'mb-0' : 'mb-4'
                  )}
                >
                  <h3
                    className={cn(
                      'text-2xl font-bold text-white whitespace-nowrap origin-bottom-left transition-all duration-300',
                      !isHovered &&
                        'rotate-[-90deg] translate-x-8 -translate-y-8 absolute bottom-0 left-0'
                    )}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-500 grid',
                      isHovered
                        ? 'grid-rows-[1fr] opacity-100 mt-4'
                        : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="min-h-0">
                      <p className="text-gray-200 text-base leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                      <Link
                        to={item.href}
                        className="mt-6 flex items-center text-primary-light font-bold text-sm uppercase tracking-wider"
                      >
                        Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="lg:hidden flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide">
        {careAreas.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="flex-none w-[85vw] h-[400px] relative rounded-3xl overflow-hidden snap-center block"
          >
            <img
              src={item.cover}
              alt={item.fullTitle}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{item.fullTitle}</h3>
              <p className="text-gray-200 text-sm mb-3">{item.desc}</p>
              <span className="inline-flex items-center text-primary-light font-bold text-sm uppercase tracking-wider">
                Learn more <ArrowUpRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Treatments;
