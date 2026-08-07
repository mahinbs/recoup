import React, { useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Award } from 'lucide-react';
import { cn } from '../../lib/utils';
import teamImg from '../../assets/new-images/Images_Dr.DeepakSharan/award-ceremony-3.png';
import drImg from '../../assets/new-images/Images_Dr.DeepakSharan/dr-deepak-sharan-2.jpg';

const approachCards = [
  {
    id: 'why-choose',
    sectionEyebrow: 'Our Approach',
    sectionTitle: 'Why Choose Recoup Health?',
    variant: 'light',
    title: 'Experts Working Together',
    icon: Share2,
    bullets: [
      'Doctors and specialists work as one team.',
      'One personalized care plan.',
      'Support from multiple health experts.',
      "We're with you throughout your recovery.",
    ],
    image: teamImg,
    imageAlt: 'Recoup Health care specialists',
  },
  {
    id: 'led-by',
    sectionEyebrow: 'Medical Leadership',
    sectionTitle: 'Led by Dr. Deepak Sharan',
    variant: 'dark',
    title: 'Recognized Around the World',
    icon: Award,
    bullets: [
      'President, International MYOPAIN Society.',
      'Global leader in pain rehabilitation.',
      'Works with leading international organizations.',
      'Helping shape the future of rehabilitation.',
    ],
    image: drImg,
    imageAlt: 'Dr. Deepak Sharan',
  },
];

const LightCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex flex-col h-full">
      <div className="mb-5 md:mb-6 px-1">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
          {item.sectionEyebrow}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-primary-dark leading-tight">
          {item.sectionTitle}
        </h2>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[520px] bg-gradient-to-b from-slate-100 to-white border border-slate-100 shadow-sm">
        <span
          className="absolute top-4 right-6 md:top-6 md:right-8 text-[4.5rem] md:text-[6rem] font-bold leading-none select-none pointer-events-none z-0 text-slate-200/80"
          aria-hidden
        >
          03
        </span>
        <Icon
          className="absolute bottom-6 right-6 w-28 h-28 text-primary/5 pointer-events-none z-0"
          strokeWidth={1}
          aria-hidden
        />

        <div className="relative z-[1] h-[230px] md:h-[250px] overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-[2] px-7 md:px-9 pb-9 md:pb-10 -mt-6">
          <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center mb-5 shadow-md shadow-primary/25">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary-dark tracking-tight mb-5">
            {item.title}
          </h3>
          <ul className="space-y-3.5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-[15px] md:text-base leading-relaxed text-slate-600">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DarkCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex flex-col h-full">
      <div className="mb-5 md:mb-6 px-1">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
          {item.sectionEyebrow}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-primary-dark leading-tight">
          {item.sectionTitle}
        </h2>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[520px] bg-gradient-to-br from-[#5B2A9E] via-primary to-primary-dark text-white">
        <span
          className="absolute top-4 right-6 md:top-6 md:right-8 text-[4.5rem] md:text-[6rem] font-bold leading-none select-none pointer-events-none z-0 text-white/10"
          aria-hidden
        >
          03
        </span>
        <Icon
          className="absolute bottom-6 right-6 w-28 h-28 text-white/5 pointer-events-none z-0"
          strokeWidth={1}
          aria-hidden
        />

        {/* Image anchored top-right with headroom + soft fade */}
        <div className="absolute top-0 right-0 w-[55%] h-[55%] z-[1] pointer-events-none">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-cover object-[center_12%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#5B2A9E]/25 to-[#5B2A9E]" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#5B2A9E] via-[#5B2A9E]/70 to-transparent" />
        </div>

        <div className="relative z-[2] flex flex-col justify-end h-full min-h-[520px] px-7 md:px-9 pb-9 md:pb-10 pt-8">
          <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center mb-5 shadow-md border border-white/20">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-5 max-w-[90%]">
            {item.title}
          </h3>
          <ul className="relative space-y-4 max-w-md">
            <span
              className="absolute left-[5px] top-2 bottom-2 w-px bg-primary-light/40"
              aria-hidden
            />
            {item.bullets.map((bullet) => (
              <li key={bullet} className="relative flex items-start gap-3.5">
                <span className="relative z-[1] mt-1.5 w-2.5 h-2.5 rounded-full bg-primary-light shrink-0 ring-4 ring-white/10" />
                <span className="text-[15px] md:text-base leading-relaxed text-white/90">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Philosophy = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prev = useCallback(() => {
    setMobileIndex((i) => (i === 0 ? approachCards.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setMobileIndex((i) => (i === approachCards.length - 1 ? 0 : i + 1));
  }, []);

  const renderCard = (item) =>
    item.variant === 'dark' ? (
      <DarkCard key={item.id} item={item} />
    ) : (
      <LightCard key={item.id} item={item} />
    );

  return (
    <section id="philosophy" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {approachCards.map(renderCard)}
        </div>

        <div className="md:hidden">{renderCard(approachCards[mobileIndex])}</div>

        <div className="flex items-center justify-center gap-5 mt-10 md:mt-12">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {approachCards.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setMobileIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === mobileIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
