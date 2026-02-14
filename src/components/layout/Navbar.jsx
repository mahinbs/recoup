import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Treatments', href: '#conditions' },
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Academy', href: '#academy' },
        { name: 'Blog', href: '#blog' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/60 backdrop-blur-md shadow-sm py-3' : 'py-5 bg-white backdrop-blur-md'
            )}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="">
                    <img src="/logo.png" alt="Recoup" className='w-[6rem] h-auto object-contain' />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium ${isScrolled ? 'text-gray-800' : 'text-gray-900'} hover:text-primary transition-colors`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button size="sm" variant="primary">Book Consultation</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-primary-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-3 bg-white border-t"
                    >
                        <div className="container px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-700 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full" variant="primary">Book Consultation</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
