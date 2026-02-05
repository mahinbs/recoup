import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Quote } from 'lucide-react';

const DoctorProfile = () => {
    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Meet Dr. Deepak Sharan</h2>
                    <h3 className="text-xl text-primary font-medium mb-4">Medical Director & Founder</h3>

                    <div className="relative mb-8">
                        <Quote className="absolute top-0 right-0 text-primary-dark/10 h-16 w-16 translate-x-4 -translate-y-8" />
                        <p className="text-lg italic text-gray-600 relative z-10 pl-6 border-l-4 border-accent">
                            "True healing happens when we listen to the body's story. My mission is to bridge the gap between acute medical intervention and holistic long-term wellness, creating a future free from chronic pain."
                        </p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        With over 30 years of experience in Orthopedics, Rehabilitation, and Ergonomics, Dr. Sharan is a pioneer in RSI treatment and integrated healthcare models. He has helped over 500,000 patients worldwide reclaim their lives to pain-free movement.
                    </p>

                    <div className="flex gap-4 sm:flex-row flex-col">
                        <Button variant="outline">Read Full Profile</Button>
                        <Button variant="ghost">View Research Papers</Button>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-t-full rounded-b-3xl transform rotate-3" />
                    <img
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop"
                        alt="Dr. Deepak Sharan"
                        className="relative z-10 w-full max-w-md mx-auto rounded-t-full rounded-b-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </Section>
    );
};

export default DoctorProfile;
