import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { recoupDifference } from '../../data/healingEcosystems';
import { X, Check } from 'lucide-react';

const RecoupDifference = () => {
  return (
    <Section className="section-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Why RECOUP
          </span>
          <h2 className="font-bold text-primary mb-5">
            The RECOUP Difference
          </h2>
          <p className="text-xl md:text-2xl text-primary-dark font-medium">
            One Patient. One Team. One{' '}
            <span className="underline decoration-primary/40 decoration-2 underline-offset-4">
              Personalized
            </span>{' '}
            Care Plan.
          </p>
        </motion.div>

        {/* Desktop comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="grid grid-cols-2 bg-primary/5 border-b border-slate-200">
            <div className="px-8 py-5 text-center border-r border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                Traditional Healthcare
              </h3>
            </div>
            <div className="px-8 py-5 text-center">
              <h3 className="text-lg font-bold text-primary">RECOUP Health</h3>
            </div>
          </div>
          {recoupDifference.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== recoupDifference.length - 1
                  ? 'border-b border-slate-100'
                  : ''
              }`}
            >
              <div className="px-8 py-5 flex items-center gap-3 border-r border-slate-100 bg-slate-50/50">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-slate-800" />
                </span>
                <span className="text-slate-900 font-medium">{row.traditional}</span>
              </div>
              <div className="px-8 py-5 flex items-center gap-3 bg-white">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <span className="text-primary-dark font-medium">
                  {row.recoup}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stacked comparison */}
        <div className="md:hidden space-y-4">
          {recoupDifference.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 overflow-hidden"
            >
              <div className="px-5 py-4 bg-slate-50 flex items-start gap-3 border-b border-slate-100">
                <X className="w-4 h-4 text-slate-800 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Traditional
                  </p>
                  <p className="text-sm text-slate-900 font-medium">{row.traditional}</p>
                </div>
              </div>
              <div className="px-5 py-4 bg-white flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                    RECOUP Health
                  </p>
                  <p className="text-sm text-primary-dark font-medium">
                    {row.recoup}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RecoupDifference;
