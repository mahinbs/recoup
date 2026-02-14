import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Academy = () => {
    return (
        <Section id="academy" className="bg-white">
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">For Professionals</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mt-4 mb-4">Recoup Academy</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Empowering the next generation of healthcare providers with advanced training in ergonomics, rehabilitation, and hollow-care.
                    </p>
                </motion.div>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {[
                    { icon: <GraduationCap />, title: "Fellowships", desc: "Long-term intensive clinical & research training programs." },
                    { icon: <BookOpen />, title: "Short Courses", desc: "Certification courses in Ergonomics and Manual Therapy." },
                    { icon: <Users />, title: "Workshops", desc: "Hands-on weekend workshops for physiotherapy skill building." }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-secondary/20 hover:bg-secondary/40 transition-colors group cursor-pointer text-center min-w-[85vw] md:min-w-0 snap-center rounded-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <Card className="bg-transparent border-none shadow-none h-full">
                            <CardContent className="p-8">
                                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-dark shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                                <p className="text-gray-500 mb-6">{item.desc}</p>
                                <span className="text-primary font-medium text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                </span>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Visit Academy Portal
                </Button>
            </motion.div>
        </Section>
    );
};

export default Academy;
