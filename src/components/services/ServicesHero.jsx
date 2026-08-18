import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/2.jpg';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="RECOUP Health integrated care"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-5 block">
            Services at RECOUP Health
          </span>
          <h1 className="font-bold text-primary-dark leading-[1.15] tracking-tight mb-6">
            A Complete Healing Ecosystem,{' '}
            <span className="text-primary italic font-medium">
              Designed Around You
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-10">
            At RECOUP Health, every service is part of an integrated,
            physician-led care plan. We combine functional medicine,
            rehabilitation, diagnostics, nutrition, regenerative medicine, and
            lifestyle therapies to help you heal at the root cause, not just
            manage symptoms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact?from=services&section=hero">
              <Button size="lg" variant="primary">
                Book Consultation
              </Button>
            </Link>
            <a href="#healing-ecosystems">
              <Button
                size="lg"
                variant="outline"
                className="text-primary-dark border-primary-dark hover:bg-primary-darkest hover:text-white"
              >
                Explore Ecosystems
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
