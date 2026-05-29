import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function OfflineWorkshopsSection() {
  const navigate = useNavigate();
  return (
    <section id="workshops" className="w-full bg-gray-100 py-24 lg:py-32 lg:py-32 sm:px-6 lg:px-12 relative">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: 'linear-gradient(to right, #862CD608 1px, transparent 1px), linear-gradient(to bottom, #862CD608 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto relative z-10">

        <div className="max-w-4xl mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-6">Experiential Learning</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-8 leading-tight">Offline Courses, Workshops & Training Programs</h2>
          <p className="font-sans text-xl text-slate-800 leading-relaxed">Hands-on experiential learning programs for clinical skill development designed to translate theoretical knowledge into practical, interdisciplinary clinical expertise.</p>
        </div>

        {/* Editorial Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">

          {/* Large Card (2/3) */}
          <motion.div
            onClick={() => navigate('/contact?from=academy&section=workshop_dry_needling')}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

            <div className="relative z-10 p-8 lg:p-10">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-sans px-3 py-1 rounded-full font-medium mb-4 uppercase tracking-wider">9 Days</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Dry Needling Workshop</h3>
              <p className="font-sans text-white/80 max-w-lg mb-6">Advanced neuromusculoskeletal interventions combining deep tissue understanding with precision clinical application.</p>
              <span className="text-white font-sans text-sm font-medium flex items-center group-hover:text-primary-light transition-colors">
                View Workshop Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </motion.div>

          {/* Small Cards Column (1/3) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              onClick={() => navigate('/contact?from=academy&section=workshop_dermoneuromodulation')}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex-1 flex flex-col justify-between group hover:border-primary/20 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs font-sans px-3 py-1 rounded-full font-medium mb-4 uppercase tracking-wider">3 Days</span>
                <h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-primary transition-colors">Dermoneuromodulation</h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">Peripheral nerve interaction techniques and pain science integration.</p>
              </div>
            </motion.div>

            <motion.div
              onClick={() => navigate('/contact?from=academy&section=workshop_franklin_method')}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex-1 flex flex-col justify-between group hover:border-primary/20 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs font-sans px-3 py-1 rounded-full font-medium mb-4 uppercase tracking-wider">1 Day</span>
                <h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-primary transition-colors">Franklin Method</h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">Dynamic neuro-cognitive imagery and anatomical embodiment.</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Horizontal Rows */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {["Corporate Wellness Programmes", "Institutional Partnership Training"].map((title, i) => (
            <motion.div
              key={title}
              onClick={() => {
                const trackingSection = i === 0 ? "workshop_corporate_wellness" : "workshop_institutional_partnership";
                navigate(`/contact?from=academy&section=${trackingSection}`);
              }}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex items-center justify-between group hover:-translate-y-1 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="font-serif text-xl text-slate-900">{title}</h4>
              <span className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-slate-400">
                →
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          className="bg-surface-muted border border-slate-200 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div>
            <h4 className="font-serif text-lg text-slate-900 mb-1">Workshop Registration & Institutional Enquiries</h4>
            <p className="font-sans text-slate-600 text-sm">Reach out to organize a custom workshop or register for an upcoming session.</p>
          </div>
          <a href="/contact?from=academy&section=workshops" className="px-6 py-3 bg-white border border-slate-300 shadow-sm rounded-full text-slate-700 hover:text-primary font-sans font-medium whitespace-nowrap">
            Contact Admissions
          </a>
        </motion.div>

      </div>
    </section>
  );
}
