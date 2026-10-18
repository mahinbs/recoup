import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';

const field =
  'w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400';

export default function AdminLogin() {
  const { isAdmin, loading, login, sendMagicLink } = useAdminAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState('password'); // 'password' | 'link'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);

  if (!loading && isAdmin) return <Navigate to="/admin" replace />;

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setBusy(true);
    try {
      if (mode === 'link') {
        const r = await sendMagicLink(email);
        if (!r.ok) setError(r.error || 'Could not send the sign-in link.');
        else setInfo('Check your inbox: we sent a sign-in link. It works once.');
        return;
      }
      const r = await login(password, email);
      if (!r.ok) setError(r.error || 'Sign-in failed.');
      else navigate('/admin', { replace: true });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 flex flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 mb-6">
            <Lock className="w-7 h-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-bold text-primary-dark tracking-tight">Admin</h1>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed">
            Sign in to manage the website, Academy, shop, bookings and leads.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-8 md:p-10">
          <form onSubmit={submit} className="space-y-6">
            {error && <div role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
            {info && <div role="status" className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{info}</div>}
            <div className="space-y-2">
              <label htmlFor="admin-email" className="text-sm font-semibold text-slate-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input id="admin-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@recoup.health" autoComplete="username" required />
              </div>
            </div>
            {mode === 'password' && (
              <div className="space-y-2">
                <label htmlFor="admin-password" className="text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} placeholder="••••••••" autoComplete="current-password" required />
                </div>
              </div>
            )}
            <Button type="submit" variant="primary" size="lg" disabled={busy} className="w-full gap-2 rounded-xl py-3.5 font-bold">
              {mode === 'link' ? 'Email me a sign-in link' : 'Continue'} <ArrowRight className="h-5 w-5" />
            </Button>
            <button type="button" className="w-full text-center text-sm font-medium text-primary hover:underline" onClick={() => { setMode(mode === 'link' ? 'password' : 'link'); setError(''); setInfo(''); }}>
              {mode === 'link' ? 'Use a password instead' : 'No password? Email me a sign-in link'}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-xs text-slate-400">
          <a href="/" className="text-primary hover:underline font-medium">← Back to site</a>
        </p>
      </div>
    </div>
  );
}
