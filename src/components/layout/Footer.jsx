import React from 'react';
import { Button } from '../ui/Button';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-12 md:py-24">
            <div className="container px-4 md:px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2 text-white">
                            Recoup Health
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                            Transforming healthcare with lasting wellness through holistic, patient-centered care. Backed by 35+ years of research.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-primary-light shrink-0" />
                                <a href="tel:+919845155449" className="hover:text-primary-light transition-colors">+919845155449</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-primary-light shrink-0" />
                                <a href="mailto:connect@recoup.health" className="hover:text-primary-light transition-colors">connect@recoup.health</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageCircle size={16} className="text-primary-light shrink-0" />
                                <a href="https://wa.me/919845155449" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">WhatsApp Us</a>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-primary-light transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary-light transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary-light transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary-light transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-100">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Chronic Pain</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Chronic Disease</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Mental Health</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Physical Rehabilitation</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-100">Solutions</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Corporate Wellness</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Nutritional Therapy</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Preventive Care</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-100">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#blog" className="hover:text-primary-light transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary-light transition-colors">My 4R Health Plan</a></li>
                            <li><a href="#treatments" className="hover:text-primary-light transition-colors">Childhood Development</a></li>
                        </ul>
                    </div>
                </div>

                {/* Clinics Section */}
                <div className="border-t border-white/10 pt-12">
                    <h4 className="text-xl font-semibold mb-6">Our Clinics in Bangalore</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Bellandur */}
                        <div className="space-y-3">
                            <h5 className="font-semibold text-primary-light">Bellandur</h5>
                            <div className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                                <p>7/1, Eco Space, 3rd Floor Doddakannelli, Exit Gate Bhoganhalli, opp. Campus 8B, RMZ Ecoworld<br />
                                    Kaikondrahalli, Bengaluru, Karnataka 560103</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-primary-light shrink-0" />
                                <a href="tel:+919845155449" className="hover:text-primary-light transition-colors">+919845155449</a>
                            </div>
                        </div>

                        {/* Anjanapura */}
                        <div className="space-y-3">
                            <h5 className="font-semibold text-primary-light">Anjanapura</h5>
                            <div className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                                <p>312, 10th Block, Further Extension of Anjanapura Layout, 80 Feet Road<br />
                                    LB Shastri Nagar, Bangalore, Karnataka 560062</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-primary-light shrink-0" />
                                <a href="tel:+917676499396" className="hover:text-primary-light transition-colors">+917676499396</a>
                            </div>
                        </div>

                        {/* Jayanagar */}
                        <div className="space-y-3">
                            <h5 className="font-semibold text-primary-light">Jayanagar</h5>
                            <div className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                                <p>Contact us for exact location<br />
                                    Jayanagar, Bengaluru</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-primary-light shrink-0" />
                                <a href="tel:+919845155449" className="hover:text-primary-light transition-colors">+919845155449</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Recoup Health. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
