import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Activity, Dumbbell, MessageCircle, ArrowRight } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { Card, CardContent } from '../../components/ui/Card';
import { Disclaimer } from '../../components/ai/ToolParts';

const TOOLS = [
  { to: '/tools/dosha-quiz', icon: Sparkles, title: 'Dosha quiz', text: 'Find out your Ayurvedic body type with 12 simple questions, plus gentle lifestyle notes.', time: '3 minutes' },
  { to: '/tools/metabolic-age', icon: Activity, title: 'Metabolic age estimator', text: 'See an estimate of how your body measurements and habits compare with your age.', time: '2 minutes' },
  { to: '/tools/fitness-readiness', icon: Dumbbell, title: 'Fitness readiness check', text: 'A short safety screening and four self-tests to find your starting level.', time: '5 minutes' },
];

export default function ToolsHub() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Health tools | RECOUP';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="section-tint pb-10 pt-16 text-center md:pt-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">Health tools</span>
          <h1 className="mb-5 font-bold text-primary-dark">Understand your body a little better</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-600">
            Free, simple tools from the RECOUP team. Each one takes a few minutes and gives you ideas for what to do next.
          </p>
          <Disclaimer className="mx-auto text-left" />
        </div>
      </Section>

      <Section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => { const { to, title, text, time } = tool; return (
            <Link key={to} to={to} className="block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" data-testid={`tool-card-${to.split('/').pop()}`}>
              <Card className="group flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col p-6">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><tool.icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h2 className="mb-2 text-xl font-bold text-primary-dark">{title}</h2>
                  <p className="mb-4 flex-1 text-sm text-gray-500">{text}</p>
                  <span className="flex items-center justify-between text-sm font-bold text-primary-light">
                    <span className="font-medium text-gray-400">{time}</span>
                    <span className="flex items-center transition-transform group-hover:translate-x-1">Start <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></span>
                  </span>
                </CardContent>
              </Card>
            </Link>
          ); })}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('recoup:open-chat'))}
            className="block h-full rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-testid="tool-card-assistant"
          >
            <Card className="group flex h-full flex-col border-primary/20 bg-primary/5">
              <CardContent className="flex flex-1 flex-col p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white"><MessageCircle className="h-6 w-6" aria-hidden="true" /></span>
                <h2 className="mb-2 text-xl font-bold text-primary-dark">Ask RECOUP</h2>
                <p className="mb-4 flex-1 text-sm text-gray-500">Describe what you are feeling and the assistant will point you to the closest matching RECOUP programs.</p>
                <span className="flex items-center text-sm font-bold text-primary-light">Open the assistant <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></span>
              </CardContent>
            </Card>
          </button>
        </div>
      </Section>
    </div>
  );
}
