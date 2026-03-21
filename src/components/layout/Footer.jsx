import React from 'react';
import { Button } from '../ui/Button';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-10 md:py-16 border-t border-white/10">
            <div className="container px-4 md:px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2 text-white">
                            Recoup Health
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                            Transforming healthcare through holistic, patient-centered care for lasting wellness.
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

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-primary-light transition-colors">Home</Link></li>
                            <li><Link to="/conditions" className="hover:text-primary-light transition-colors">Programs</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
                            <li><a href="/#treatments" className="hover:text-primary-light transition-colors">Our Services</a></li>
                            <li><Link to="/blog" className="hover:text-primary-light transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Second Bell Program */}
                    <div className="space-y-4 lg:col-span-2">
                        <h4 className="text-lg font-semibold text-gray-100">Second Bell Program</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300">
                            <Link to="/second-bell" className="hover:text-primary-light transition-colors">Overview</Link>
                            <Link to="/second-bell/framework" className="hover:text-primary-light transition-colors">The Framework</Link>
                            <Link to="/second-bell/program" className="hover:text-primary-light transition-colors">School Program</Link>
                            <Link to="/second-bell/interventions" className="hover:text-primary-light transition-colors">Interventions</Link>
                            <Link to="/second-bell/how-it-works" className="hover:text-primary-light transition-colors">How It Works</Link>
                            <Link to="/second-bell/rshs" className="hover:text-primary-light transition-colors">RSHS</Link>
                        </div>
                    </div>
                </div>

                {/* Location Map Section */}
                <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="md:w-1/2">
                        <h4 className="text-xl font-semibold mb-3">Our Clinics in Bangalore</h4>
                        <p className="text-sm text-gray-300">
                            Visit our clinics across Bangalore. Head over to our <a href="/contact" className="text-primary-light hover:underline font-medium">Contact</a> page for detailed addresses and directions to all our locations including Bellandur, Anjanapura, and Jayanagar.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-40 rounded-xl overflow-hidden shadow-lg border border-white/10">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939922241!2d77.6749931750756!3d12.923722787386762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae137119e7a885%3A0xea6949db2d58bf01!2sRecoup%20Health!5e0!3m2!1sen!2sin!4v1709495034988!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Recoup Health. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
