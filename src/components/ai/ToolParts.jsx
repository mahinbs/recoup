import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Loader2, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { TOOL_DISCLAIMER } from '../../lib/ai/constants';

export const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30';

export function Disclaimer({ className = '', children }) {
  return (
    <p
      className={`flex items-start gap-2 rounded-xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-slate-600 ${className}`}
      data-testid="tool-disclaimer"
    >
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <span>{children || TOOL_DISCLAIMER}</span>
    </p>
  );
}

/** Page frame shared by the three tools. Sets document.title. */
export function ToolLayout({ title, intro, children }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} | RECOUP`;
    return () => {
      document.title = prev;
    };
  }, [title]);
  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="section-tint pb-6 pt-12 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <Link to="/tools" className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All health tools
          </Link>
          <h1 className="mb-3 font-bold text-primary-dark">{title}</h1>
          {intro && <p className="mb-5 text-lg text-gray-600">{intro}</p>}
          <Disclaimer />
        </div>
      </Section>
      <Section className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl">{children}</div>
      </Section>
    </div>
  );
}

/**
 * After a result: anonymous save happens automatically (once), contact details are stored
 * only when the visitor fills in this form. Table: quiz_results (anon may INSERT only).
 */
export function SaveResultForm({ quiz, answers, result }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [state, setState] = useState({ busy: false, done: false, error: '' });
  const [anon, setAnon] = useState('idle'); // idle | saved | failed
  const savedRef = useRef(false);

  useEffect(() => {
    if (savedRef.current || !supabase) return;
    savedRef.current = true;
    Promise.resolve(supabase.from('quiz_results').insert({ quiz, answers, result, name: null, email: null, phone: null }))
      .then((res) => setAnon(res?.error ? 'failed' : 'saved'))
      .catch(() => setAnon('failed'));
  }, [quiz, answers, result]);

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!name) return setState({ busy: false, done: false, error: 'Please add your name.' });
    if (!email && !phone) return setState({ busy: false, done: false, error: 'Please add an email or a phone number.' });
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setState({ busy: false, done: false, error: 'That email does not look right.' });
    if (!supabase) return setState({ busy: false, done: false, error: 'Saving is not available right now. Please try again later.' });
    setState({ busy: true, done: false, error: '' });
    try {
      const { error } = await supabase.from('quiz_results').insert({
        quiz,
        answers,
        result,
        name: name.slice(0, 200),
        email: email || null,
        phone: phone.slice(0, 40) || null,
      });
      if (error) throw error;
      setState({ busy: false, done: true, error: '' });
    } catch {
      setState({ busy: false, done: false, error: 'Sorry, we could not save this just now. Please try again in a moment.' });
    }
  };

  return (
    <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm md:p-6" data-testid="tool-save-form">
      <h3 className="mb-1 text-lg font-bold text-primary-dark">Email me my result / save it</h3>
      <p className="mb-4 text-sm text-gray-500">
        Optional. Add your details and our team will keep this result with your name so we can follow up if you wish.
        {anon === 'saved' && ' Your result has also been saved anonymously, with no personal details.'}
      </p>
      {state.done ? (
        <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" role="status" data-testid="tool-save-done">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thank you. Your result is saved with your details.
        </p>
      ) : (
        <form onSubmit={submit} className="grid gap-3 md:grid-cols-3" noValidate>
          <div>
            <label htmlFor={`sv-name-${quiz}`} className="mb-1 block text-sm font-semibold text-slate-700">Name</label>
            <input id={`sv-name-${quiz}`} className={fieldClass} value={form.name} onChange={set('name')} autoComplete="name" maxLength={200} />
          </div>
          <div>
            <label htmlFor={`sv-email-${quiz}`} className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
            <input id={`sv-email-${quiz}`} type="email" className={fieldClass} value={form.email} onChange={set('email')} autoComplete="email" maxLength={254} />
          </div>
          <div>
            <label htmlFor={`sv-phone-${quiz}`} className="mb-1 block text-sm font-semibold text-slate-700">Phone (optional)</label>
            <input id={`sv-phone-${quiz}`} type="tel" className={fieldClass} value={form.phone} onChange={set('phone')} autoComplete="tel" maxLength={40} />
          </div>
          {state.error && (
            <p className="text-sm text-red-600 md:col-span-3" role="alert">{state.error}</p>
          )}
          <div className="md:col-span-3">
            <Button type="submit" disabled={state.busy} className="gap-2" data-testid="tool-save-submit">
              {state.busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />} Save my result
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

/** Save form + booking / contact CTAs shown under every result. */
export function ResultActions({ quiz, answers, result, onRestart }) {
  return (
    <div className="mt-8 space-y-5">
      <SaveResultForm quiz={quiz} answers={answers} result={result} />
      <div className="flex flex-wrap gap-3">
        <Link to="/book" data-testid="tool-cta-book">
          <Button className="px-6">Book a consultation</Button>
        </Link>
        <Link to="/contact" data-testid="tool-cta-contact">
          <Button variant="outline" className="px-6">Contact us</Button>
        </Link>
        {onRestart && (
          <Button type="button" variant="ghost" onClick={onRestart} data-testid="tool-restart">Start again</Button>
        )}
      </div>
    </div>
  );
}
