import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Activity, Heart, Brain, Leaf, Sun, Cross } from 'lucide-react';
import { cn } from '../../lib/utils';

const PhilosophyCard = ({ item, className }) => (
    <motion.div
        className={cn(
            "relative overflow-hidden rounded-[2rem] p-8 group transition-all duration-500 hover:shadow-xl flex flex-col justify-between h-[320px] isolate",
            className
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        {/* Background Image - Subtle & Elegant */}
        <div className="absolute inset-0 z-0">
            <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Elegant light overly for readability and 'Light Theme' adherence */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500 hover:backdrop-blur-[2px]" />
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-t from-black via-black to-transparent")} />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-auto">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    item.iconBg
                )}>
                    {item.icon}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed font-medium text-pretty">
                    {item.desc}
                </p>

                {/* Decorative Line */}
                <div className={cn(
                    "h-1 w-12 mt-6 rounded-full transition-all duration-500 group-hover:w-full",
                    item.iconBg.replace("bg-", "bg-opacity-50 bg-") // Hacky way to get lighter color or just use gray
                )} style={{ backgroundColor: 'currentColor', opacity: 0.2 }} />
            </div>
        </div>
    </motion.div>
);

const Philosophy = () => {
    const approaches = [
        {
            icon: <Activity className="h-6 w-6" />,
            title: "Functional Medicine",
            desc: "Addressing the root cause of disease, not just silencing symptoms.",
            iconBg: "bg-emerald-600",
            bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
        {
            icon: <Brain className="h-6 w-6" />,
            title: "Behavioral Science",
            desc: "Rewiring the mind for sustainable lifestyle transformation.",
            iconBg: "bg-indigo-600",
            bgImage: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2067&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
        {
            icon: <Sun className="h-6 w-6" />,
            title: "Ayurveda",
            desc: "Ancient wisdom for modern balance.",
            iconBg: "bg-orange-500",
            bgImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
        {
            icon: <Leaf className="h-6 w-6" />,
            title: "Functional Nutrition",
            desc: "Food as medicine for deep cellular healing.",
            iconBg: "bg-green-600",
            bgImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Mind-Body Medicine",
            desc: "Harmonizing mental & physical health.",
            iconBg: "bg-rose-500",
            bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
        {
            icon: <Cross className="h-6 w-6" />,
            title: "Naturopathy",
            desc: "Healing through nature's elements.",
            iconBg: "bg-teal-600",
            bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
            className: "md:col-span-1 bg-white"
        },
    ];

    return (
        <Section id="philosophy" className="bg-secondary/30 relative overflow-hidden py-24">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2F5A50_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 relative z-10">
                <div className="max-w-3xl">
                    <span className="text-accent font-bold tracking-wider uppercase text-xs mb-4 block border-b border-accent/20 pb-4 w-fit">Recoup Philosophy</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-primary-dark leading-[1.1]">
                        The Art of <span className="text-primary-light font-serif italic">Holistic Healing</span>
                    </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-sm leading-relaxed">
                    We fuse ancient wisdom with modern medical science to create a personalized path to your full recovery.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {approaches.map((item, index) => (
                    <PhilosophyCard key={index} item={item} className={item.className} />
                ))}
            </div>
        </Section>
    );
};

export default Philosophy;
