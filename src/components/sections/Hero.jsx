import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import heroImage from '../../assets/1.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Forest sunrise"
                    className="w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-white/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark border border-primary/20 text-sm font-medium mb-6 backdrop-blur-sm">
                            Founded by Dr. Deepak Sharan
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111827] tracking-tight !leading-tight mb-6 text-balance">
                            Revolutionary  <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-[#D92779]">4R Protocol</span>
                                <svg className="absolute w-full h-8 -bottom-2 left-0 text-primary-light" viewBox="0 0 100 25" preserveAspectRatio="none">
                                    <path d="M0 15 Q 50 25 100 15" stroke="url(#underline-gradient)" strokeWidth="8" fill="none" />
                                    <defs>
                                        <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                                            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span> for Lasting Wellness<br />
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                            Led by Dr. Deepak Sharan, internationally acclaimed expert and Presidential Award winner. Treating root causes with our proprietary 4R Approach: Recognize, Remedy, Restore, Regenerate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="primary">
                                Book Consultation
                            </Button>
                            <Link to='tel:919845155449' className='w-full sm:w-fit'>
                                <Button size="lg" variant="outline" className="text-primary-dark border-primary-dark hover:bg-primary-darkest hover:text-white w-full">

                                    <Phone className="mr-2 h-5 w-5" />Call Us Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
