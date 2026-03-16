import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { Quote, Star, User } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { motion, useInView } from 'framer-motion';

const animation = { duration: 35000, easing: (t) => t }

const Testimonials = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
            perView: 1.2,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2.2, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3.2, spacing: 24 },
            },
            "(min-width: 1280px)": {
                slides: { perView: 4.2, spacing: 24 },
            },
        },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    });

    const testimonials = [
        {
            name: "Dr. Ananya Iyer",
            role: "Classical Dancer, Bangalore",
            content: "My dancing career was almost over due to chronic ankle pain. Recoup's specialized biomechanical analysis and therapy brought me back to the stage stronger than I was before. I couldn't be more grateful.",
        },
        {
            name: "Rajesh Kumar",
            role: "IT Professional, Hyderabad",
            content: "Years of sitting at a desk gave me severe RSI. The team at Recoup didn't just treat the pain; they taught me how to work and live without hurting my body again. Truly transformative care.",
        },
        {
            name: "Meera Patel",
            role: "Yoga Instructor, Mumbai",
            content: "I appreciate how they respect holistic wellness. It wasn't just pills and machines; it was true healing that aligned with my own philosophy of body awareness and functional movement.",
        },
        {
            name: "Vikram Singh",
            role: "Professional Athlete, Delhi",
            content: "Sports injuries are complex. Recoup's understanding of sports medicine and rehabilitation is world-class. They got me match-ready in record time with their advanced protocols.",
        },
        {
            name: "Sunita Reddy",
            role: "Retired Teacher, Chennai",
            content: "I suffered from arthritis for years. Their pain management program gave me a new lease on life. I can now play with my grandchildren without constant pain. Highly recommended.",
        },
        {
            name: "Priya Sharma",
            role: "Marketing Director, Pune",
            content: "The corporate wellness program by Recoup completely changed our team's dynamic. Reduced absenteeism and much happier employees. The ergonomic evaluations were an absolute game changer.",
        }
    ];

    return (
        <Section className="bg-slate-50 relative overflow-hidden py-24" id="testimonials">
            <div ref={sectionRef}>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-primary-dark overflow-hidden">
                    <Quote size={400} className="translate-x-1/3 -translate-y-1/3" />
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-4 block">Patient Stories</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark leading-tight">Stories of <span className="text-primary italic font-serif">Recovery</span></h2>
                        <p className="text-gray-600 text-lg">Real patients, real healing. Hear from those who have successfully regained their health and vitality with Recoup.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full relative z-10 py-4"
                >
                    <div ref={sliderRef} className="keen-slider h-full cursor-grab active:cursor-grabbing pb-8">
                        {testimonials.map((item, index) => (
                            <div key={index} className="keen-slider__slide h-auto">
                                <Card className="bg-white border-none shadow-sm hover:shadow-xl transition-shadow h-full rounded-2xl flex flex-col backdrop-blur-sm">
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className="flex gap-1 mb-6 text-primary">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <p className="text-gray-600 mb-8 italic leading-relaxed text-lg font-light flex-grow">"{item.content}"</p>
                                        
                                        <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary-dark text-base">{item.name}</h4>
                                                <p className="text-sm text-gray-500">{item.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Testimonials;
