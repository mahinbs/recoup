import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { treatmentPlanSteps } from '../../data/healingEcosystems';

const TreatmentPlan = () => {
  return (
    <Section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-5 leading-tight">
            How We Build Your{' '}
            <span className="text-primary italic font-serif font-medium">
              Treatment Plan
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-3 max-w-xl mx-auto">
            Most clinics recommend a treatment.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-primary-dark mb-14">
            We build a complete healing strategy.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {treatmentPlanSteps.map((step, index) => (
            <React.Fragment key={step}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative w-full max-w-md"
              >
                <div className="bg-white border border-slate-200 rounded-2xl px-8 py-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-semibold text-primary-dark text-left">
                      {step}
                    </span>
                  </div>
                </div>
              </motion.div>

              {index < treatmentPlanSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.15 }}
                  className="py-3 text-primary/50"
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-gray-500 text-sm max-w-md mx-auto"
        >
          This immediately reinforces why Recoup is different — a coordinated
          strategy, not a single prescription.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link to="/contact?from=services&section=treatment_plan">
            <Button size="lg" variant="primary">
              Start Your Healing Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default TreatmentPlan;
