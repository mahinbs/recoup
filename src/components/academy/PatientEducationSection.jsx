import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Video, Users } from 'lucide-react';

const SubSectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-20" />
);

export default function PatientEducationSection() {
  return (
    <section id="patient-education" className="w-full bg-gray-100 py-24 lg:py-32 sm:lg:py-32 sm:px-6 lg:px-12 relative overflow-x-hidden lg:overflow-x-visible">
      <div className="container mx-auto">

        {/* Patient Education */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-6">Courses for Patient Education</h2>
            <p className="font-sans text-slate-700 text-lg leading-relaxed mb-8">Dedicated educational programs designed to help patients understand health, lifestyle, chronic disease management, and wellness optimization.</p>
          </div>
          <div className="space-y-6">
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-2">Level 1: Foundations</h3>
              <p className="font-sans text-slate-600">Foundational health education and lifestyle awareness tailored for patients taking control of their wellness journey.</p>
            </motion.div>
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-2">Level 2: Management</h3>
              <p className="font-sans text-slate-600">Disease-specific education and long-term wellness guidance for complex or chronic conditions.</p>
            </motion.div>
          </div>
        </div>

        <SubSectionDivider />

        {/* Webinars */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-6">
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-2">Introductory Webinars</h3>
              <p className="font-sans text-slate-600 mb-4">Clinical updates and practitioner learning modules covering foundational integrative approaches.</p>
              <span className="inline-block border border-primary/20 text-primary bg-primary/5 px-3 py-1 text-xs font-semibold rounded-full">(Coming Soon)</span>
            </motion.div>
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-2">Expert Panel Discussions</h3>
              <p className="font-sans text-slate-600 mb-4">Advanced therapeutic and diagnostic integration discussions with leading specialists.</p>
              <span className="inline-block border border-primary/20 text-primary bg-primary/5 px-3 py-1 text-xs font-semibold rounded-full">(Coming Soon)</span>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
              <Video className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-6">Webinars</h2>
            <p className="font-sans text-slate-700 text-lg leading-relaxed mb-8">RECOUP Academy hosts expert-led educational webinars focused on integrative healthcare and multidisciplinary clinical practice.</p>
          </div>
        </div>

        <SubSectionDivider />

        {/* Conferences */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-6">Conferences</h2>
            <p className="font-sans text-slate-700 text-lg leading-relaxed mb-8">Global multidisciplinary healthcare conferences, research presentations, and integrative medicine summits.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-3">Multidisciplinary Healthcare</h3>
              <p className="font-sans text-sm text-slate-600">Research presentations & foundational symposia.</p>
            </motion.div>
            <motion.div
              className="bg-white border border-slate-100 shadow-sm p-8 rounded-2xl text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-xl text-slate-900 mb-3">International Collaborations</h3>
              <p className="font-sans text-sm text-slate-600">Integrative medicine & rehabilitation summits.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
