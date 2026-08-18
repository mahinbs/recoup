import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import symptomsIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/1.Symptoms_ECG_Pulse.png';
import assessmentsIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/2.Advanced_Assessments_Medical_Report.png';
import rootCauseIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/3.Root_Cause Analysis_Magnifying_Glass.png';
import careTeamIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/4.Integrated_Care_Team_Healthcare_Team.png';
import planIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/5.Personalized_Treatment_Plan_Document .png';
import trackingIcon from '../../assets/new-images/How-We-Build-Your-Treatment-Plan-icons/6.Continuous_Progress_Tracking_Growth.png';

const steps = [
  { n: '01', title: 'Symptoms', icon: symptomsIcon, bg: '#3d1a8c', darkText: false },
  { n: '02', title: 'Advanced Assessments', icon: assessmentsIcon, bg: '#5228ad', darkText: false },
  { n: '03', title: 'Root Cause Analysis', icon: rootCauseIcon, bg: '#6b3dcf', darkText: false },
  { n: '04', title: 'Integrated Care Team', icon: careTeamIcon, bg: '#8452e8', darkText: false },
  { n: '05', title: 'Personalized Treatment Plan', icon: planIcon, bg: '#9d69ff', darkText: false },
  { n: '06', title: 'Continuous Progress Tracking', icon: trackingIcon, bg: '#b799ff', darkText: true },
];

const TreatmentPlan = () => {
  return (
    <section className="section-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Process
          </span>
          <h2 className="font-bold text-primary-dark mb-5 leading-tight">
            How We Build Your{' '}
            <span className="text-primary italic font-medium">Treatment Plan</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-2 max-w-xl mx-auto">
            Most clinics recommend a treatment.
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary mb-12">
            We build a complete healing strategy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl md:rounded-3xl flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row shadow-lg"
        >
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex-1 min-h-[220px] md:min-h-[260px] px-5 py-6 md:px-6 md:py-8 flex flex-col items-start text-left"
              style={{ background: step.bg }}
            >
              <span
                className={`text-4xl md:text-5xl font-bold leading-none mb-8 ${
                  step.darkText ? 'text-slate-900/25' : 'text-white/30'
                }`}
              >
                {step.n}
              </span>
              <img
                src={step.icon}
                alt=""
                className="w-10 h-10 md:w-12 md:h-12 object-contain mb-5 brightness-0 invert"
              />
              <p
                className={`text-sm md:text-base font-bold leading-snug ${
                  step.darkText ? 'text-slate-900' : 'text-white'
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link to="/contact?from=services&section=treatment_plan">
            <Button size="lg" variant="primary" className="px-8 rounded-lg">
              Start Your Healing Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentPlan;
