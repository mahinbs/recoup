import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
  Info,
  Heart,
  Shield,
  Moon,
  Zap,
  Droplets,
  Sun,
  Scale,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const biomarkers = [
  { name: 'Hemoglobin', value: '14.2 g/dL', range: '13.5 – 17.5', out: false },
  { name: 'Total Leukocyte Count', value: '7,200 /µL', range: '4,000 – 11,000', out: false },
  { name: 'Fasting Glucose', value: '108 mg/dL', range: '70 – 99', out: true },
  { name: 'Vitamin D', value: '22 ng/mL', range: '30 – 100', out: true },
  { name: 'HDL Cholesterol', value: '48 mg/dL', range: '> 40', out: false },
];

const systemScores = [
  { name: 'Metabolic Health', score: 68 },
  { name: 'Gut Health', score: 74 },
  { name: 'Hormonal Balance', score: 81 },
  { name: 'Stress & Recovery', score: 59 },
  { name: 'Inflammation', score: 72 },
];

const ReportHeader = ({ subtitle }) => (
  <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white rounded-t-xl">
    <div className="flex items-center gap-2 min-w-0">
      <img src="/logo.png" alt="Recoup Health" className="h-7 w-auto object-contain" />
    </div>
    <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate text-right">
      {subtitle}
    </p>
  </div>
);

const pages = [
  {
    id: 'overview',
    render: () => (
      <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
        <ReportHeader subtitle="EPHR Report · Alex Kumar · 42Y · Female" />
        <div className="p-4 sm:p-5 flex-1 overflow-auto">
          <h4 className="text-sm font-bold text-slate-900">Health Overview</h4>
          <p className="text-xs text-slate-500 mb-4">
            Your current health status at a glance.
          </p>

          <div className="flex justify-center mb-5">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${78 * 2.64} ${100 * 2.64}`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-slate-900">78</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider">
                  / 100
                </span>
              </div>
            </div>
          </div>
          <p className="text-center text-xs font-semibold text-emerald-600 mb-5">
            Health Score
          </p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              { label: 'Cardiometabolic', status: 'Good', color: 'text-emerald-600 bg-emerald-50', icon: Heart },
              { label: 'Immunity', status: 'Average', color: 'text-blue-600 bg-blue-50', icon: Shield },
              { label: 'Sleep', status: 'Needs Attention', color: 'text-primary bg-primary/5', icon: Moon },
              { label: 'Energy', status: 'Improvement Needed', color: 'text-orange-600 bg-orange-50', icon: Zap },
            ].map((item) => (
              <div
                key={item.label}
                className={cn('rounded-xl p-2.5 border border-slate-100', item.color.split(' ')[1])}
              >
                <item.icon className={cn('w-4 h-4 mb-1', item.color.split(' ')[0])} />
                <p className="text-[10px] font-bold text-slate-800">{item.label}</p>
                <p className={cn('text-[10px] font-medium', item.color.split(' ')[0])}>
                  {item.status}
                </p>
              </div>
            ))}
          </div>

          <h5 className="text-xs font-bold text-slate-900 mb-2">Top Health Priorities</h5>
          <div className="space-y-2">
            {[
              {
                title: 'Improve blood sugar control',
                desc: 'Fasting glucose is higher than optimal.',
                tag: 'High Priority',
                tagColor: 'bg-red-50 text-red-600',
                icon: Droplets,
                iconColor: 'text-red-500',
              },
              {
                title: 'Optimize Vitamin D levels',
                desc: 'Your levels are lower than recommended.',
                tag: 'High Priority',
                tagColor: 'bg-red-50 text-red-600',
                icon: Sun,
                iconColor: 'text-amber-500',
              },
              {
                title: 'Support weight management',
                desc: 'Focus on sustainable lifestyle changes.',
                tag: 'Medium Priority',
                tagColor: 'bg-orange-50 text-orange-600',
                icon: Scale,
                iconColor: 'text-orange-500',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
              >
                <item.icon className={cn('w-4 h-4 mt-0.5 shrink-0', item.iconColor)} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] font-semibold text-slate-800">{item.title}</p>
                    <span className={cn('text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap', item.tagColor)}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'biomarkers',
    render: () => (
      <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
        <div className="bg-primary px-4 py-3 flex items-center justify-between text-white">
          <span className="text-xs font-bold tracking-wider uppercase">EPHR Report</span>
          <span className="text-[10px] opacity-90">Alex Kumar · 42Y · Female</span>
        </div>
        <div className="p-4 sm:p-5 flex-1">
          <h4 className="text-sm font-bold text-slate-900">Exploring Biomarkers</h4>
          <p className="text-xs text-slate-500 mb-4">
            Sample rows from a 100+ biomarker panel.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-3 py-2.5 font-semibold">Biomarker</th>
                  <th className="px-3 py-2.5 font-semibold">Value</th>
                  <th className="px-3 py-2.5 font-semibold">Normal Range</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-100">
                {biomarkers.map((row) => (
                  <tr key={row.name}>
                    <td className="px-3 py-2.5 text-slate-700 font-medium">{row.name}</td>
                    <td
                      className={cn(
                        'px-3 py-2.5 font-semibold',
                        row.out ? 'text-red-600' : 'text-slate-800',
                      )}
                    >
                      {row.value}
                    </td>
                    <td className="px-3 py-2.5 text-slate-500">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'systems',
    render: () => (
      <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl overflow-hidden h-full text-white flex flex-col">
        <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center">
          <span className="text-xs font-bold tracking-wider uppercase">System Scores</span>
          <span className="text-[10px] text-white/70">Alex Kumar · Sample</span>
        </div>
        <div className="p-5 flex-1 space-y-4">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="text-xs text-white/70 uppercase tracking-wider mb-1">
                Overall Health Score
              </p>
              <p className="text-4xl font-bold">78</p>
              <p className="text-xs text-white/60">out of 100</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70 uppercase tracking-wider mb-1">
                Biological Age
              </p>
              <p className="text-4xl font-bold">34</p>
              <p className="text-xs text-white/60">years</p>
            </div>
          </div>
          {systemScores.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-white/90">{s.name}</span>
                <span className="font-semibold">{s.score}</span>
              </div>
              <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/90"
                  style={{ width: `${s.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'bioage',
    render: () => (
      <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
        <ReportHeader subtitle="Biological Age Analysis" />
        <div className="p-5 flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
            Biological Age
          </p>
          <p className="text-6xl font-bold text-primary-dark mb-2">34</p>
          <p className="text-sm text-slate-500 mb-6">
            Chronological age: <strong className="text-slate-800">42</strong>
          </p>
          <div className="w-full max-w-xs rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
            <p className="text-sm font-semibold text-emerald-700">
              8 years younger than chronological age
            </p>
            <p className="text-xs text-emerald-600/80 mt-1">
              Your physiological systems show a favorable aging trajectory.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'lifestyle',
    render: () => (
      <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
        <ReportHeader subtitle="Lifestyle & Risk Factors" />
        <div className="p-5 flex-1 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 mb-1">Lifestyle Snapshot</h4>
          {[
            { label: 'Sleep Quality', value: 'Needs Attention', tone: 'text-amber-600 bg-amber-50' },
            { label: 'Physical Activity', value: 'Moderate', tone: 'text-blue-600 bg-blue-50' },
            { label: 'Nutrition Pattern', value: 'Good', tone: 'text-emerald-600 bg-emerald-50' },
            { label: 'Stress Load', value: 'Elevated', tone: 'text-red-600 bg-red-50' },
            { label: 'Recovery Capacity', value: 'Average', tone: 'text-primary bg-primary/5' },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/80"
            >
              <span className="text-xs font-medium text-slate-700">{row.label}</span>
              <span className={cn('text-[10px] font-bold px-2.5 py-1 rounded-full', row.tone)}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'recommendations',
    render: () => (
      <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
        <ReportHeader subtitle="Personalized Recommendations" />
        <div className="p-5 flex-1 space-y-3">
          <h4 className="text-sm font-bold text-slate-900">Next Steps</h4>
          <p className="text-xs text-slate-500 mb-2">
            Physician-guided actions based on your EPHR findings.
          </p>
          {[
            'Begin a glucose-supportive nutrition plan with glycemic pacing.',
            'Start Vitamin D repletion with follow-up labs in 8–12 weeks.',
            'Add HRV-guided recovery practices 4 evenings per week.',
            'Schedule physician review to personalize your care pathway.',
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-xl border border-primary/10 bg-primary/[0.03]"
            >
              <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const FLIP_MS = 500;

const SampleReportSection = () => {
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(null);
  const timeoutRef = useRef(null);
  const total = pages.length;

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const goTo = (target) => {
    const next = ((target % total) + total) % total;
    if (next === page || flip) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setPage(next);
      return;
    }

    setFlip({ dir: target >= page ? 'next' : 'prev', from: page, to: next });
    timeoutRef.current = setTimeout(() => {
      setPage(next);
      setFlip(null);
    }, FLIP_MS);
  };

  const scrollToPreview = () => {
    document.getElementById('sample-report-preview')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="sample-report" className="relative w-full bg-[#f7f4fb] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl border border-primary/10 bg-white/80 backdrop-blur-sm shadow-xl shadow-primary/5 overflow-visible lg:overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left copy */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Sample EPHR Report
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Explore a Sample EPHR
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                See how your health story comes together in one comprehensive
                report.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Preview selected pages from a sample Entire Person Health Report
                and discover how we turn complex data into clear insights and
                personalized recommendations.
              </p>

              <button
                type="button"
                onClick={scrollToPreview}
                className="inline-flex items-center justify-center gap-2 w-fit px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm shadow-lg shadow-primary/25 hover:bg-primary-darker transition-colors"
              >
                <FileText className="w-4 h-4" />
                Explore the Sample Report
              </button>

              <div className="flex items-center gap-2 mt-5 text-sm text-slate-600">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Secure & Confidential</span>
              </div>

              <div className="mt-8 flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-700">Illustrative sample:</strong>{' '}
                  This preview is for demonstration purposes only. Your actual
                  EPHR is personalized based on your health assessment,
                  laboratory investigations, and physician evaluation.
                </p>
              </div>

              <Link
                to="/contact?from=ephr&section=sample_report"
                className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors w-fit"
              >
                Book your assessment →
              </Link>
            </div>

            {/* Right flip-through */}
            <div
              id="sample-report-preview"
              className="relative bg-gradient-to-br from-[#f3ecfa] to-[#ebe3f7] p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-primary/10 overflow-visible"
            >
              <div className="relative w-full max-w-md">
                {/* Stacked paper effect */}
                <div className="absolute inset-x-10 top-3 h-full rounded-2xl bg-white/60 border border-white/80 translate-y-2 pointer-events-none" />
                <div className="absolute inset-x-8 top-1.5 h-full rounded-2xl bg-white/80 border border-white shadow-sm translate-y-1 pointer-events-none" />

                <div className="relative flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    aria-label="Previous page"
                    onClick={() => goTo(page - 1)}
                    disabled={!!flip}
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors z-10 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    className="sample-ephr-flip relative flex-1 aspect-[3/4] max-h-[520px] z-[1]"
                    style={{ perspective: '1800px' }}
                  >
                    <div className="sr-book">
                      <div className="sr-leaf sr-leaf-base">
                        {flip ? pages[flip.to].render() : pages[page].render()}
                      </div>
                      {flip && (
                        <div className={`sr-leaf sr-leaf-flip sr-flip-${flip.dir}`}>
                          <div className="sr-leaf-face sr-leaf-front">
                            {pages[flip.from].render()}
                          </div>
                          <div className="sr-leaf-face sr-leaf-back">
                            <div className="sr-leaf-back-brand">recoup HEALTH</div>
                          </div>
                        </div>
                      )}
                      <div className="sr-book-shadow" />
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Next page"
                    onClick={() => goTo(page + 1)}
                    disabled={!!flip}
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors z-10 disabled:opacity-40"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">
                    {page + 1} / {total}
                  </span>
                  <div className="flex gap-1.5">
                    {pages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to page ${i + 1}`}
                        onClick={() => goTo(i)}
                        disabled={!!flip}
                        className={cn(
                          'h-1.5 rounded-full transition-all disabled:pointer-events-none',
                          i === page
                            ? 'w-5 bg-primary'
                            : 'w-1.5 bg-slate-300 hover:bg-slate-400',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportSection;
