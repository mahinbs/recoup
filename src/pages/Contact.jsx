import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-20 text-left">

            {/* Header */}
            <Section className="pt-16 md:pt-24 pb-12 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Let's Connect</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">A conversation, not a decision.</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Whether you're a school leader, parent, or patient — we're here to listen. No pressure, no hard sell. Just an honest conversation about how we can help.
                    </p>
                </div>
            </Section>

            {/* Split Layout */}
            <Section className="py-12 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-primary-dark mb-8">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Organization / School</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="St. Mary's Academy (optional)" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john.doe@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">How can we help you?</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us what you're looking for..."></textarea>
                            </div>

                            <Button className="w-full py-4 text-base font-bold shadow-lg shadow-primary/20">Submit Message</Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-primary-dark mb-6">Direct Channels</h3>
                            <div className="space-y-6">
                                <a href="mailto:connect@recoup.health" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                                    <span className="font-medium">connect@recoup.health</span>
                                </a>
                                
                                <div className="space-y-6 pt-6 border-t border-gray-100">
                                    <h4 className="text-lg font-bold text-primary-dark mb-4">Our Clinics in Bangalore</h4>
                                    
                                    {/* Bellandur */}
                                    <div className="flex items-start gap-4 text-gray-600">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1"><MapPin size={18} /></div>
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Bellandur</span>
                                            <span className="text-sm leading-relaxed block mb-2">
                                                7/1, Eco Space, 3rd Floor Doddakannelli, Exit Gate Bhoganhalli, opp. Campus 8B, RMZ Ecoworld<br />
                                                Kaikondrahalli, Bengaluru, Karnataka 560103
                                            </span>
                                            <a href="tel:+919845155449" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                                                <Phone size={14} />
                                                +91 98451 55449
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Anjanapura */}
                                    <div className="flex items-start gap-4 text-gray-600 pt-2">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1"><MapPin size={18} /></div>
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Anjanapura</span>
                                            <span className="text-sm leading-relaxed block mb-2">
                                                312, 10th Block, Further Extension of Anjanapura Layout, 80 Feet Road<br />
                                                LB Shastri Nagar, Bangalore, Karnataka 560062
                                            </span>
                                            <a href="tel:+917676499396" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                                                <Phone size={14} />
                                                +91 76764 99396
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Jayanagar */}
                                    <div className="flex items-start gap-4 text-gray-600 pt-2">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1"><MapPin size={18} /></div>
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Jayanagar</span>
                                            <span className="text-sm leading-relaxed block mb-2">
                                                Contact us for exact location<br />
                                                Jayanagar, Bengaluru
                                            </span>
                                            <a href="tel:+919845155449" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                                                <Phone size={14} />
                                                +91 98451 55449
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark rounded-2xl p-8 shadow-inner">
                            <h3 className="text-lg font-bold mb-4 text-white">What happens next?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                                    <p className="text-sm text-gray-300">You'll receive a confirmation and we'll set up a 30-minute discovery call.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                                    <p className="text-sm text-gray-300">We'll provide an overview of our programs relevant to your needs.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                                    <p className="text-sm text-gray-300">We'll outline a tailored recommendation for your specific situation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
export default Contact;
