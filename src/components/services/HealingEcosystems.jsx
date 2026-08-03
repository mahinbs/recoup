import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { healingEcosystems } from '../../data/healingEcosystems';
import { cn } from '../../lib/utils';

const EcosystemBlock = ({ ecosystem, index }) => {
  const imageLeft = index % 2 === 0;

  return (
    <motion.article
      id={ecosystem.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 min-h-[520px]',
        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/80',
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative h-[320px] lg:h-auto lg:min-h-[560px] overflow-hidden',
          imageLeft ? 'lg:order-1' : 'lg:order-2',
        )}
      >
        <img
          src={ecosystem.image}
          alt={ecosystem.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-primary-dark/10" />
        <div className="absolute top-6 left-6 lg:top-10 lg:left-10">
          <span className="font-serif text-5xl md:text-6xl font-light text-white/90 drop-shadow-lg">
            {ecosystem.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          'flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-20',
          imageLeft ? 'lg:order-2' : 'lg:order-1',
        )}
      >
        <span className="text-primary-light font-bold tracking-[0.2em] uppercase text-xs mb-3">
          Ecosystem {ecosystem.id}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark leading-tight mb-3">
          {ecosystem.title}
        </h3>
        <p className="text-lg md:text-xl text-primary italic font-serif mb-5">
          {ecosystem.tagline}
        </p>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
          {ecosystem.description}
        </p>

        <div
          className={cn(
            'grid gap-8 mb-8',
            ecosystem.bestFor ? 'sm:grid-cols-2' : 'grid-cols-1',
          )}
        >
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-dark mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {ecosystem.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {ecosystem.bestFor && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-dark mb-4">
                Best For
              </h4>
              <ul className="space-y-2.5">
                {ecosystem.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link
          to={`/contact?from=services&section=${ecosystem.slug}`}
          className="inline-flex items-center text-primary font-bold text-sm tracking-wide group w-fit"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

const HealingEcosystems = () => {
  return (
    <section id="healing-ecosystems" className="w-full">
      {/* Intro strip */}
      <div className="bg-primary-dark text-white py-16 md:py-20">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-light font-medium text-sm tracking-wide mb-3">
              Then comes the exciting part...
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Instead of &ldquo;Departments&rdquo;
              <br />
              <span className="italic font-serif font-medium text-white/95">
                Create Healing Ecosystems
              </span>
            </h2>
            <p className="text-white/70 text-lg">
              Every ecosystem becomes a premium block — integrated therapies
              designed around how you actually heal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="container px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-dark"
          >
            Our Healing Ecosystem
          </motion.h2>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {healingEcosystems.map((ecosystem, index) => (
          <EcosystemBlock
            key={ecosystem.slug}
            ecosystem={ecosystem}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default HealingEcosystems;
