import React, { useEffect, useRef } from 'react';
import { Section } from '../ui/Section';
import { motion, useInView, animate } from 'framer-motion';
import { Award, Users, Globe, Activity } from 'lucide-react';

const stats = [
    { value: 6, suffix: "+", label: "Years Experience", icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
    { value: 2, suffix: "K+", label: "Patients Treated", icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
    { value: 5, suffix: "+", label: "Countries Served", icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
    { value: 95, suffix: "%", label: "Success Rate", icon: <Activity className="w-6 h-6 md:w-8 md:h-8" /> },
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });

    useEffect(() => {
        if (inView) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (node) {
                        node.textContent = Math.floor(latest) + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, value, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

const Stats = () => {
    return (
        <Section className="bg-primary-dark !py-16 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-4 p-3 bg-white/10 rounded-full text-primary-light backdrop-blur-sm">
                            {stat.icon}
                        </div>
                        {/* Removed bg-clip-text text-transparent to fix visibility issue */}
                        <span className="text-4xl md:text-5xl font-bold mb-2 text-white">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </span>
                        <span className="text-primary-light/90 font-medium tracking-wide uppercase text-sm md:text-base">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Stats;
