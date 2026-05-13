import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Download, Activity, HeartPulse, Brain, Zap, LineChart, Target, FileText, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ephr = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="relative pt-16 md:pt-24 pb-20 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-light/5 blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Preventive • Proactive • Personal
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-dark mb-6 tracking-tight">
              A Complete View of Your Health <br />
              <span className="text-primary italic font-serif text-3xl md:text-5xl mt-2 block">
                Beyond Individual Reports
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              The <strong className="text-primary-dark font-bold">Entire Person Health Record (EPHR)</strong> is a panoptic health scorecard. We analyze 200+ data points, assessing 9 body functions and 5 lifestyle factors, to give you a true picture of your well-being.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="px-8 py-2.5 shadow-primary/25 shadow-lg w-full sm:w-auto">
                  Book Your Assessment
                </Button>
              </Link>
              <a href="#downloads">
                <Button variant="outline" size="lg" className="px-8 py-2.5 w-full sm:w-auto gap-2">
                  <Download className="w-5 h-5" /> View Sample Reports
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">Why Traditional Health Reports Fall Short</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Most health reports are designed to detect disease, leaving many people with "normal" reports but persisting symptoms. Health is not a set of isolated numbers—it's a connected system.
              </p>
              <ul className="space-y-4">
                {[
                  "Results are viewed in isolation",
                  "“Normal ranges” don’t always reflect optimal health",
                  "Early imbalances are often missed",
                  "Limited insight into root causes",
                  "Reactive approach instead of preventive"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-red-100 text-red-500 rounded-full p-1 shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white aspect-square p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-extrabold text-primary mb-2">1 in 3</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Normal reports, persisting symptoms</div>
              </div>
              <div className="bg-white aspect-square p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center mt-8">
                <div className="text-4xl font-extrabold text-primary mb-2">&lt; 10%</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Markers viewed in context</div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center col-span-2">
                <div className="text-4xl font-extrabold text-primary mb-2">Years</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Imbalance precedes diagnosis</div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* How it Works / 4 Steps */}
      <Section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark">How EPHR Works</h2>
            <p className="text-slate-600 mt-4 text-lg">A structured path to whole-body insight, analyzing 103 carefully selected biomarkers alongside deep lifestyle assessments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Biomarker Assessment", desc: "Key health indicators are measured through a detailed premium panel.", icon: Activity },
              { num: "02", title: "System-Level Analysis", desc: "Data is grouped into core physiological systems (Metabolic, Hormonal, etc.).", icon: Brain },
              { num: "03", title: "Pattern Identification", desc: "Interconnections and trends are analyzed using advanced algorithms.", icon: LineChart },
              { num: "04", title: "Structured Report", desc: "A clear, easy-to-understand profile with actionable insights is generated.", icon: FileText }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <div className="text-6xl font-black text-slate-200 absolute top-2 right-2 group-hover:text-primary-dark/30 transition-colors">{step.num}</div>
                <step.icon className="w-10 h-10 text-primary mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-200 transition-colors text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* The 10 Dynamics & Tree Concept */}
      <Section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Your Health Risk Tree</h2>
              <p className="text-primary-100 text-lg leading-relaxed">
                Your Health Tree is a visual representation of your overall well-being. It's an ecosystem where your <strong className="text-white">lifestyle factors (roots)</strong> nourish and support your <strong className="text-white">body functions (branches)</strong>.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" /> The Branches (Body Functions)
                  </h3>
                  <p className="text-sm text-primary-50">9 vital systems including Digestion, Elimination, Bio Transformation, Heart & Vascular Dynamics, Glycemic Response, Metabolism, Hormonal System, Inflammation, and Bone & Joint Health.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" /> The Roots (Lifestyle Factors)
                  </h3>
                  <p className="text-sm text-primary-50">5 foundational pillars: Nutrition, Sleep, Stress, Exercise & Movement, and Relationships. By nurturing these roots, you cultivate a thriving health tree.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="aspect-square rounded-full border border-white/20 border-t-white/60 absolute -inset-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="aspect-square rounded-full border border-white/10 border-b-white/50 absolute -inset-20"
              />
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 relative">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">The 10 Dynamics of EPHS</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
                  {[
                    "Physical Health", "Emotional & Intellectual",
                    "Habits & Lifestyle", "Community & Family",
                    "Psycho-social Health", "Occupational & Financial",
                    "Environmental Health", "Spiritual & Higher Self",
                    "Understanding Self-care", "Women's Health (if applicable)"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-primary/40 rounded-xl p-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Downloads / Resources Section */}
      <Section id="downloads" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-dark">EPHR Resources & Samples</h2>
            <p className="text-slate-600 mt-4">Download our brochures and sample reports to see exactly what insights the Entire Person Health Record provides.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Programme Brochure",
                desc: "A complete overview of the EPHR philosophy and methodology.",
                file: "EPHR – Programme Brochure.pdf",
                icon: FileText
              },
              {
                title: "Clinical Overview",
                desc: "The 10 Dynamics and deep BioPsychoSocial insights.",
                file: "EPHR_Clinical Overview.pdf",
                icon: Brain
              },
              {
                title: "Vitals & Lab Checklist",
                desc: "A comprehensive list of the 100+ biomarkers we test.",
                file: "EPHR – Vitals & Lab Test Checklist.pdf",
                icon: HeartPulse
              },
              {
                title: "Sample Health Report",
                desc: "See a real 15-page sample of the final EPHR generated.",
                file: "EPHR – Sample Health Report.pdf",
                icon: LineChart
              }
            ].map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 shrink-0">
                  <doc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{doc.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{doc.desc}</p>
                <a href={`/documents/${doc.file}`} download target="_blank" rel="noreferrer" className="mt-auto block">
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" /> Download PDF
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Are you ready to make the most of Recoup EPHS?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Get personalized guidance, SMART action plans, optimized prescriptions, and take an active role in your health journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="px-10 shadow-lg shadow-primary/20 w-full sm:w-auto">
                Book Your EPHR Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Ephr;
