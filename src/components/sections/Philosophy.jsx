import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Leaf, Sun, Cross } from 'lucide-react';
import { cn } from '../../lib/utils';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const PhilosophyCard = ({ item, className }) => (
    <motion.div
        className={cn(
            "relative overflow-hidden rounded-3xl group bg-white shadow-xl shadow-gray-100 border border-gray-100 flex flex-col h-full",
            className
        )}
        variants={cardVariants}
        whileHover={{
            y: -12,
            transition: { duration: 0.3, ease: "easeOut" }
        }}
    >
        {/* Top Image Section */}
        <div className="h-64 overflow-hidden relative">
            <motion.img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            <motion.div
                className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary-dark shadow-sm z-10"
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1, transition: { duration: 0.5 } }}
            >
                {item.icon}
            </motion.div>
        </div>

        {/* Bottom Content Section */}
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-primary-dark mb-3 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium text-pretty mb-4 flex-grow">
                {item.desc}
            </p>

            {/* <motion.div
                className="flex items-center text-primary font-semibold text-sm cursor-pointer mt-auto pt-4 border-t border-gray-100"
                whileHover={{ x: 5 }}
            >
                Learn More <span className="ml-1">→</span>
            </motion.div> */}
        </div>
    </motion.div>
);

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Philosophy = () => {
    const approaches = [
        {
            icon: <Activity className="h-6 w-6" />,
            title: "Advanced Physical Therapy",
            desc: "Personalized rehabilitation programs designed to restore strength, flexibility, and function.",
            bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-1"
        },
        {
            icon: <Sun className="h-6 w-6" />,
            title: "Holistic Wellness Care",
            desc: "Integrating mind, body, and lifestyle for comprehensive healing and lasting results.",
            bgImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop",
            className: "md:col-span-1"
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Pain Management",
            desc: "Evidence-based protocols targeting root causes to eliminate chronic pain conditions.",
            bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop",
            className: "md:col-span-1"
        },
        {
            icon: <Leaf className="h-6 w-6" />,
            title: "Regenerative Medicine",
            desc: "Cutting-edge treatments promoting natural healing and tissue regeneration.",
            bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
            className: "md:col-span-1"
        },
    ];

    return (
        <Section id="philosophy" className="bg-white relative overflow-hidden py-12">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 relative z-10">
                <div className="max-w-3xl">
                    <span className="text-primary-light font-bold tracking-wider uppercase text-xs mb-4 block border-b border-primary-light/20 pb-4 w-fit">Recoup Philosophy</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-primary-dark leading-[1.1]">
                        Experience <span className="text-primary-light font-serif italic">Comprehensive Care</span>
                    </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-sm leading-relaxed">
                    Watch how our expert team delivers personalized, holistic treatment using the revolutionary 4R Protocol.
                </p>
            </div>

            <motion.div
                className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {approaches.map((item, index) => (
                    <PhilosophyCard key={index} item={item} className={cn(item.className, "min-w-[85vw] md:min-w-0 snap-center")} />
                ))}
            </motion.div>
        </Section>
    );
};

export default Philosophy;
