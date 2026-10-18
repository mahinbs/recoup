import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { cn } from '../../lib/utils';

/** Email signup stored in Supabase (newsletter_subscribers). Works on light and dark backgrounds. */
export default function NewsletterSignup({ source = 'site', variant = 'light', title = 'Get health insights in your inbox', className = '' }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState({ busy: false, done: false, error: '' });
  const dark = variant === 'dark';

  const submit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return setState({ busy: false, done: false, error: 'Please enter a valid email address.' });
    if (!supabase) return setState({ busy: false, done: false, error: 'Signup is not available right now.' });
    setState({ busy: true, done: false, error: '' });
    const { error } = await supabase.rpc('subscribe_newsletter', { p_email: value, p_source: source });
    if (error) setState({ busy: false, done: false, error: 'Something went wrong. Please try again.' });
    else {
      setEmail('');
      setState({ busy: false, done: true, error: '' });
    }
  };

  return (
    <form onSubmit={submit} className={cn('space-y-3', className)} data-testid="newsletter-form" noValidate>
      <h4 className={cn('text-lg font-semibold', dark ? 'text-gray-100' : 'text-primary-dark')}>{title}</h4>
      <p className={cn('text-sm', dark ? 'text-gray-300' : 'text-gray-600')}>One short email now and then. Unsubscribe any time.</p>
      {state.done ? (
        <p role="status" className={cn('rounded-xl px-4 py-3 text-sm font-medium', dark ? 'bg-emerald-500/15 text-emerald-100' : 'bg-emerald-50 text-emerald-700')} data-testid="newsletter-done">
          Thank you for subscribing.
        </p>
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className={cn('absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2', dark ? 'text-white/50' : 'text-gray-400')} />
            <input
              type="email"
              aria-label="Email address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (state.error) setState((s) => ({ ...s, error: '' })); }}
              placeholder="Your email address"
              className={cn('w-full rounded-full border py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2', dark ? 'border-white/15 bg-white/10 text-white placeholder:text-white/40 focus:ring-primary-light' : 'border-gray-200 bg-white focus:ring-primary')}
            />
          </div>
          <button type="submit" disabled={state.busy} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-darker disabled:opacity-60">
            {state.busy ? '…' : 'Subscribe'}
          </button>
        </div>
      )}
      {state.error && <p role="alert" className={cn('text-sm', dark ? 'text-red-200' : 'text-red-600')}>{state.error}</p>}
    </form>
  );
}
