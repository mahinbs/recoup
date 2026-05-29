import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 7, label: "Fellowship Programs" },
  { value: 500, label: "Scientific Publications", plus: true },
  { value: 8, label: "Course Categories" },
  { value: 4, label: "Learning Modalities" }
];

const CounterNumber = ({ value, plus }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    // Complete the animation in 1.8 seconds (1800ms)
    const duration = 1800;
    const steps = Math.min(end, 60); // Max steps to prevent ultra-fast ticking for large values
    const stepValue = Math.ceil(end / steps);
    const incrementTime = Math.floor(duration / steps);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div className="flex items-baseline text-primary font-serif font-bold">
      <span ref={ref} className="text-5xl lg:text-6xl">{count}</span>
      {plus && <span className="text-4xl lg:text-5xl">+</span>}
    </div>
  );
};

export default function AcademyIntroStrip() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-surface-muted py-20 lg:py-32 sm:px-6 lg:px-12 border-y border-slate-200/50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Quote */}
        <motion.div
          className="intro-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <blockquote className="font-serif text-xl sm:text-3xl lg:text-4xl text-slate-800 italic leading-relaxed">
            "We bring together functional medicine, nutrition science, rehabilitation, psychology, diagnostics, and mind-body medicine into one cohesive educational platform."
          </blockquote>
        </motion.div>

        {/* Right: Counters */}
        <motion.div
          className="grid grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col">
              <CounterNumber value={stat.value} plus={stat.plus} />
              <span className="font-sans text-sm text-secondary uppercase tracking-widest mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
