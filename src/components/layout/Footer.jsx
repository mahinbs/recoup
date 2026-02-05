import React from 'react';
import { Button } from '../ui/Button';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2 text-white">
                            Recoup
                            <span className="h-2 w-2 rounded-full bg-accent" />
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Integrated Orthopedic & Holistic Healthcare Platform. restoring mobility, reclaiming life.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#treatments" className="hover:text-accent transition-colors">Treatments</a></li>
                            <li><a href="#doctors" className="hover:text-accent transition-colors">Our Doctors</a></li>
                            <li><a href="#academy" className="hover:text-accent transition-colors">Recoup Academy</a></li>
                            <li><a href="#careers" className="hover:text-accent transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact & Visit</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                                <span>123 Wellness Avenue,<br />Holistic Park, New City</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>hello@recoup.health</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Stay Connected</h4>
                        <p className="text-sm text-gray-300">Subscribe for health tips and wellness updates.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <Button variant="accent" className="w-full">Subscribe</Button>
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
