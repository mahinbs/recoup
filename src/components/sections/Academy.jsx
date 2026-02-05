import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';

const Academy = () => {
    return (
        <Section id="academy" className="bg-white">
            <div className="text-center mb-12">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">For Professionals</span>
                <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mt-4 mb-4">Recoup Academy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Empowering the next generation of healthcare providers with advanced training in ergonomics, rehabilitation, and hollow-care.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <GraduationCap />, title: "Fellowships", desc: "Long-term intensive clinical & research training programs." },
                    { icon: <BookOpen />, title: "Short Courses", desc: "Certification courses in Ergonomics and Manual Therapy." },
                    { icon: <Users />, title: "Workshops", desc: "Hands-on weekend workshops for physiotherapy skill building." }
                ].map((item, idx) => (
                    <Card key={idx} className="bg-secondary/20 hover:bg-secondary/40 border-none transition-colors group cursor-pointer text-center">
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
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Visit Academy Portal
                </Button>
            </div>
        </Section>
    );
};

export default Academy;
