import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, FileCheck, Mail } from 'lucide-react';

const cards = [
  {
    title: "Knowledge Translation",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    badge: "500+ Publications",
    desc: "Translating research into clinical practice through publications, editorials, textbook contributions, and applied educational resources.",
    border: true
  },
  {
    title: "Active Research",
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    desc: "Active research projects by the RECOUP team, encompassing outcome-based clinical studies and integrative rehabilitation research."
  },
  {
    title: "RECOUP IRB",
    icon: <FileCheck className="w-6 h-6 text-primary-light" />,
    desc: "Institutional Review Board supporting ethical, structured, and scientifically rigorous research practices. Governance, ethics guidelines, and implementation."
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="w-full bg-[#F8F9FA] py-16 sm:py-24 lg:py-32 px-4 sm:lg:py-32 sm:px-6 lg:px-12 relative overflow-x-hidden lg:overflow-x-visible">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative">
            <div className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-serif leading-none text-primary/5 absolute -top-10 sm:-top-16 left-0 lg:-left-8 select-none z-0">02</div>
            <div className="relative z-10">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-6">Research Projects</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-8 leading-tight">Translational & Clinically Relevant Research</h2>

              <ul className="space-y-6">
                {[
                  { label: "Knowledge Translation", icon: BookOpen },
                  { label: "Active Research Projects", icon: FlaskConical },
                  { label: "RECOUP IRB Governance", icon: FileCheck }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-sans text-slate-700 font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative z-10 mt-6 lg:mt-0">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className={`bg-white shadow-sm rounded-2xl p-5 sm:p-8 lg:p-10 min-h-[220px] sm:min-h-[280px] flex flex-col justify-center border ${card.border ? 'border-l-4 border-l-primary border-slate-100' : 'border-slate-100'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center">
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans text-xs font-semibold">
                      {card.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-4">{card.title}</h3>
                <p className="font-sans text-slate-600 leading-relaxed max-w-lg">{card.desc}</p>
              </motion.div>
            ))}

            <motion.div
              className="mt-4 bg-primary/5 border border-primary/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h4 className="font-serif text-xl text-slate-900 mb-2">Research Enquiry</h4>
                <p className="font-sans text-sm text-slate-600">Interested in collaboration or conducting research at RECOUP?</p>
              </div>
              <a href="mailto:connect@recoup.health" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-slate-700 hover:text-primary hover:border-primary/30 transition-colors whitespace-nowrap font-sans text-sm font-medium self-start sm:self-auto">
                <Mail className="w-4 h-4" />
                Collaboration Request
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
