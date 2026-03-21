import React from 'react';
import { Section } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { conditions } from '../conditions/conditions';
import { motion } from 'framer-motion';

const Conditions = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            <Section className="pt-16 md:pt-24 pb-12 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
                        Programs & Conditions
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                        What We <span className="text-primary italic font-serif">Treat</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Integrative, root-cause rehabilitation programs for substance use, cognitive health,
                        cardiometabolic disease, chronic pain, and more—personalized care under one roof.
                    </p>
                </div>
            </Section>

            <Section className="py-12 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {conditions.map((item, idx) => (
                        <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="h-full"
                        >
                            <Link to={`/conditions/${item.slug}`} className="block h-full">
                                <Card className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 bg-white group h-full flex flex-col">
                                    <div className="h-52 overflow-hidden relative shrink-0">
                                        <img
                                            src={item.cover}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                                            Program
                                        </div>
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-xl font-bold text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {item.desc}
                                        </p>
                                        <span className="text-primary-light font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform mt-auto">
                                            View program <ArrowRight className="ml-1 w-4 h-4" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Conditions;
