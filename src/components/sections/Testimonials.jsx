import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { Quote, Star, User } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            mode: "snap",
            slides: {
                perView: 1,
                spacing: 15,
            },
            breakpoints: {
                "(min-width: 768px)": {
                    slides: { perView: 2, spacing: 25 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 3, spacing: 30 },
                },
            },
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    const testimonials = [
        {
            name: "Dr. Ananya Iyer",
            role: "Classical Dancer",
            content: "My dancing career was almost over due to chronic ankle pain. Recoup's specialized biomechanical analysis and therapy brought me back to the stage stronger than I was before.",
        },
        {
            name: "Rajesh Kumar",
            role: "IT Professional",
            content: "Years of sitting at a desk gave me severe RSI. The team at Recoup didn't just treat the pain; they taught me how to work and live without hurting my body again.",
        },
        {
            name: "Meera Patel",
            role: "Yoga Instructor",
            content: "I appreciate how they respect holistic wellness. It wasn't just pills and machines; it was true healing that aligned with my own philosophy of body awareness.",
        },
        {
            name: "Vikram Singh",
            role: "Professional Cricketer",
            content: "Sports injuries are complex. Recoup's understanding of sports medicine and rehabilitation is world-class. They got me match-ready in record time.",
        },
        {
            name: "Sunita Reddy",
            role: "Retired Teacher",
            content: "I suffered from arthritis for years. Their pain management program gave me a new lease on life. I can now play with my grandchildren without constant pain.",
        }
    ];

    return (
        <Section className="bg-primary-dark text-white relative overflow-hidden py-12">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Quote size={200} />
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Stories of <span className="text-primary-light italic font-serif">Recovery</span></h2>
                    <p className="text-gray-300 text-lg">Real patients, real healing. See how Recoup is changing lives across India.</p>
                </motion.div>
            </div>

            <motion.div
                ref={sliderRef}
                className="keen-slider relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {testimonials.map((item, index) => (
                    <div key={index} className="keen-slider__slide h-full">
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full rounded-2xl">
                            <CardContent className="p-8 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex gap-1 mb-6 text-primary-light">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-200 mb-8 italic leading-relaxed text-lg font-light">"{item.content}"</p>
                                </div>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-primary-light/30 text-primary-light">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{item.name}</h4>
                                        <p className="text-sm text-primary-light/80">{item.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Testimonials;
