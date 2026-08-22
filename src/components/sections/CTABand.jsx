import React from 'react';
import { Button } from '../ui/Button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CTABand = () => {
  return (
    <section className="w-full relative z-10 pb-20 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden isolate rounded-[2rem] md:rounded-[2.5rem]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
                backgroundSize: '48px 48px, 64px 64px',
              }}
            />
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-primary-light/20 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 py-14 md:py-20">
            <motion.div
              className="w-full max-w-3xl mx-auto flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-white mb-6 leading-tight text-center">
                The Ultimate Destination for Long-Lasting Health
              </h2>
              <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed font-light text-center">
                Experience personalized, root-cause care led by an interdisciplinary team dedicated to
                helping you heal, recover, and thrive for life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full">
                <Link to="/contact?from=home&section=cta_band" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-primary-dark hover:bg-slate-50 hover:scale-105 transition-all duration-300 font-bold px-8 h-14 text-lg shadow-lg w-full sm:w-auto"
                  >
                    <Calendar className="mr-2 h-5 w-5" /> Book Consultation
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919845155449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl text-lg font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-lg w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
