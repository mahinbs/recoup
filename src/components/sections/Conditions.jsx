import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ConditionCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
        viewport={{ once: true }}
        className="group relative h-[450px] overflow-hidden cursor-pointer"
    >
        {/* Image Layer */}
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 transition-all duration-700"
            />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 opacity-90 transition-opacity duration-500" />

        {/* Text Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-primary-dark text-sm font-medium tracking-widest uppercase border border-primary-dark/40 px-3 py-1 rounded-full backdrop-blur-sm">Key Treatment</span>
                {/* <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                </div> */}
            </div>

            <div>
                <h3 className="text-3xl font-serif text-white mb-3 italic transform transition-transform duration-500 group-hover:-translate-y-2">{item.title}</h3>
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-t-2xl transform translate-y-[130%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-primary-dark font-medium leading-relaxed">
                        {item.desc}
                    </p>
                </div>
                {/* Static definition for non-hover state */}
                {/* <p className="text-white/80 text-sm font-light uppercase tracking-wide group-hover:opacity-0 transition-opacity duration-300 absolute bottom-8 left-8">
                    Read More
                </p> */}
            </div>
        </div>
    </motion.div>
);

const Conditions = () => {
    const treatments = [
        {
            title: "Spine & Orthopedic",
            desc: "Expert non-surgical interventions for back pain, disc herniation, and joint mobility issues. We restore function without invasive procedures.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
        },
        {
            title: "Chronic Lifestyle Care",
            desc: "Reversing metabolic disorders like diabetes and hypertension through personalized nutritional therapy and lifestyle architectural changes.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Pain Rehabilitation",
            desc: "Advanced multimodal therapies specifically designed for managing chronic pain conditions and restoring your quality of life.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <Section id="conditions" className="bg-white py-24">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
                <div className="max-w-2xl relative">
                    <div className="hidden md:block absolute -left-20 top-0 w-1 h-32 bg-accent opacity-30" />
                    <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Specialized Treatments</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-primary-dark leading-none">
                        Precision <span className="font-serif italic font-normal text-primary">Care</span> <br />
                        For Your Needs
                    </h2>
                </div>
                <div className="max-w-md">
                    <p className="text-lg text-gray-500 leading-relaxed text-justify">
                        We believe in targeted, non-invasive treatments that address specific conditions with surgical precision and holistic care.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-100 border border-gray-100 overflow-hidden rounded-3xl">
                {treatments.map((item, index) => (
                    <ConditionCard key={index} item={item} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Conditions;
