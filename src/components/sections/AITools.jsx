import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Bot, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AITools = () => {
    return (
        <Section className="bg-gradient-to-b from-white to-secondary/30 text-left">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-2 block">Technology Enabled Care</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Smart Wellness at Your Fingertips</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Recoup integrates AI to personalize your recovery journey. Track progress, get instant answers, and understand your body type with our advanced digital tools.
                    </p>
                    <Button variant="primary" size="lg">Try AI Assistant <Sparkles className="ml-2 h-4 w-4" /></Button>
                </motion.div>

                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-white border-primary/5 shadow-lg group h-full">
                            <CardHeader className="pb-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <Bot size={24} />
                                </div>
                                <CardTitle className="text-lg">AI Wellness Assistant</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">24/7 symptom analysis and recovery guidance powered by medical AI.</p>
                                <a href="#" className="text-primary text-sm font-medium flex items-center hover:underline">
                                    Chat Now <ArrowRight size={14} className="ml-1" />
                                </a>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-white border-primary/5 shadow-lg group h-full">
                            <CardHeader className="pb-2">
                                <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center text-primary-light mb-4 group-hover:scale-110 transition-transform">
                                    <Sparkles size={24} />
                                </div>
                                <CardTitle className="text-lg">Dosha Quiz</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">Discover your Ayurvedic body type and get personalized nutrition plans.</p>
                                <a href="#" className="text-primary-light text-sm font-medium flex items-center hover:underline">
                                    Take Quiz <ArrowRight size={14} className="ml-1" />
                                </a>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default AITools;
