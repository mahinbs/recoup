import React from 'react';
import { motion } from 'framer-motion';

const audiences = [
    { text: "Individuals seeking preventive health insights", img: "https://images.pexels.com/photos/5215016/pexels-photo-5215016.jpeg" },
    { text: "People experiencing unexplained symptoms", img: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" },
    { text: "Professionals under chronic stress", img: "https://images.pexels.com/photos/5717262/pexels-photo-5717262.jpeg" },
    { text: "Those managing ongoing health conditions", img: "https://images.pexels.com/photos/7446776/pexels-photo-7446776.jpeg" },
    { text: "Individuals optimizing long-term wellness", img: "https://images.pexels.com/photos/8172921/pexels-photo-8172921.jpeg" },
    { text: "Anyone seeking deeper understanding of their body", img: "https://images.pexels.com/photos/17947753/pexels-photo-17947753.jpeg" }
];

const WhoCanBenefit = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 tracking-tight"
                    >
                        Who Can Benefit From <span className="text-primary italic font-light">EPHR?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {audiences.map((aud, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                        >
                            <img src={aud.img} alt="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                            
                            <div className="absolute inset-0 p-8 flex items-end">
                                <p className="font-sans text-xl text-white font-light leading-relaxed drop-shadow-md">
                                    {aud.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhoCanBenefit;
