import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function AdminLogin() {
  const { authed, login, isPasswordProtected } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [busy, setBusy] = useState(false);

  if (authed) {
    return <Navigate to="/admin/blogs" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setBusy(true);
    try {
      const result = await login(password);
      if (!result.ok) {
        setLoginError(result.error || 'Sign-in failed.');
        return;
      }
      navigate('/admin/blogs', { replace: true });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-light/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 mb-6">
            <Lock className="w-7 h-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-bold text-primary-dark tracking-tight">Admin</h1>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed">
            {isPasswordProtected
              ? 'Enter the admin password for this browser. Email is optional and not verified.'
              : 'Sign in to manage blog content, homepage SEO, and robots.txt. Set a password under Admin → Settings anytime.'}
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {loginError && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{loginError}</div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  placeholder="you@example.com"
                  autoComplete="username"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-slate-800 placeholder:text-slate-400"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required={isPasswordProtected}
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={busy}
              className="w-full gap-2 rounded-xl py-3.5 font-bold shadow-primary/25"
            >
              Continue <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
        </div>

        <p className="text-center mt-8 text-xs text-slate-400">
          <a href="/" className="text-primary hover:underline font-medium">
            ← Back to site
          </a>
        </p>
      </div>
    </div>
  );
}
