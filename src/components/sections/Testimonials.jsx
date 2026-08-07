import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import { Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import ananyaImg from '../../assets/new-images/PatientStories-Images/ananya-iyer-1.jpg';
import rajeshImg from '../../assets/new-images/PatientStories-Images/rajesh-kumar-1.jpg';
import sunitaImg from '../../assets/new-images/PatientStories-Images/sunita-reddy-1.jpg';

const testimonials = [
  {
    name: 'Dr. Ananya Iyer',
    role: 'Classical Dancer, Bangalore',
    content:
      "My dancing career was almost over due to chronic ankle pain. Recoup's specialized biomechanical analysis and therapy brought me back to the stage stronger than I was before. I couldn't be more grateful.",
    image: ananyaImg,
  },
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional, Hyderabad',
    content:
      "Years of sitting at a desk gave me severe RSI. The team at Recoup didn't just treat the pain; they taught me how to work and live without hurting my body again. Truly transformative care.",
    image: rajeshImg,
  },
  {
    name: 'Sunita Reddy',
    role: 'Retired Teacher, Chennai',
    content:
      'I suffered from arthritis for years. Their pain management program gave me a new lease on life. I can now play with my grandchildren without constant pain. Highly recommended.',
    image: sunitaImg,
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <Section className="bg-slate-50 relative overflow-hidden py-24" id="testimonials">
      <div ref={sectionRef}>
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-primary-dark overflow-hidden">
          <Quote size={400} className="translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14 relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-4 block">
              Patient Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark leading-tight">
              Recoup <span className="text-primary italic font-serif">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real patients, real healing. Hear from those who have successfully regained their
              health and vitality with Recoup.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 px-4 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }}
              className="relative min-h-[420px] rounded-3xl overflow-hidden group shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <Quote className="w-8 h-8 text-white/40 mb-4" />
                <p className="text-white/95 text-base md:text-lg leading-relaxed mb-6 font-light italic">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-bold text-primary-light text-base">{item.name}</h4>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
