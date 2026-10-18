import React, { useState } from 'react';
import { KeyRound, ShieldCheck, Trash2, UserPlus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';

const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/25 focus:border-primary outline-none transition-all text-slate-800';

export default function AdminSettings() {
  const { user, changePassword } = useAdminAuth();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);

  const [newAdmin, setNewAdmin] = useState('');
  const [adminMsg, setAdminMsg] = useState(null);
  const admins = useAsync(async () => {
    const { data, error } = await supabase.from('admin_allowlist').select('*').order('added_at');
    if (error) throw error;
    return data;
  }, []);

  const submitPassword = async (e) => {
    e.preventDefault();
    setMsg(null);
    if (newPassword.length < 8) return setMsg({ type: 'error', text: 'The password must be at least 8 characters.' });
    if (newPassword !== confirmPassword) return setMsg({ type: 'error', text: 'The two passwords do not match.' });
    setBusy(true);
    const r = await changePassword({ newPassword });
    setBusy(false);
    if (!r.ok) return setMsg({ type: 'error', text: r.error || 'Could not update the password.' });
    setNewPassword('');
    setConfirmPassword('');
    setMsg({ type: 'ok', text: 'Password updated. Use it next time you sign in.' });
  };

  const addAdmin = async (e) => {
    e.preventDefault();
    setAdminMsg(null);
    const email = newAdmin.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setAdminMsg({ type: 'error', text: 'Enter a valid email address.' });
    const { error } = await supabase.from('admin_allowlist').insert({ email });
    if (error) return setAdminMsg({ type: 'error', text: error.message });
    setNewAdmin('');
    setAdminMsg({ type: 'ok', text: `${email} can now sign in as an admin (they must verify this email address).` });
    admins.reload();
  };

  const removeAdmin = async (email) => {
    if (email.toLowerCase() === user?.email?.toLowerCase()) return alert('You cannot remove your own admin access.');
    if (!window.confirm(`Remove admin access for ${email}?`)) return;
    const { error } = await supabase.from('admin_allowlist').delete().eq('email', email);
    if (error) alert(error.message);
    admins.reload();
  };

  const note = (m) =>
    m && (
      <div role={m.type === 'error' ? 'alert' : 'status'} className={`rounded-xl px-4 py-3 text-sm font-medium ${m.type === 'error' ? 'border border-red-100 bg-red-50 text-red-700' : 'border border-emerald-100 bg-emerald-50 text-emerald-700'}`}>
        {m.text}
      </div>
    );

  return (
    <div className="max-w-2xl space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-primary-dark">My account</h1>
        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Signed in as <strong className="text-slate-700">{user?.email}</strong></p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 flex items-center gap-2 text-lg font-bold text-primary-dark"><KeyRound className="h-5 w-5" /> Set or change your password</h2>
        <p className="mb-5 text-sm text-slate-500">You can also always sign in with an emailed link instead.</p>
        <form onSubmit={submitPassword} className="space-y-4" data-testid="password-form">
          {note(msg)}
          <input type="password" aria-label="New password" autoComplete="new-password" className={inputClass} placeholder="New password (8+ characters)" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" aria-label="Confirm new password" autoComplete="new-password" className={inputClass} placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button type="submit" disabled={busy}>Update password</Button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-lg font-bold text-primary-dark">Admin users</h2>
        <p className="mb-5 text-sm text-slate-500">Only people on this list can open the admin area, and only after they verify their email address.</p>
        {note(adminMsg)}
        <ul className="my-4 divide-y divide-slate-100" data-testid="admin-list">
          {(admins.data || []).map((a) => (
            <li key={a.email} className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-700">{a.email}{a.note ? <span className="ml-2 text-slate-400">({a.note})</span> : null}</span>
              <button type="button" aria-label={`Remove ${a.email}`} onClick={() => removeAdmin(a.email)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
        <form onSubmit={addAdmin} className="flex gap-2">
          <input type="email" aria-label="New admin email" className={inputClass} placeholder="colleague@recoup.health" value={newAdmin} onChange={(e) => setNewAdmin(e.target.value)} />
          <Button type="submit" className="gap-2 shrink-0"><UserPlus className="h-4 w-4" /> Add</Button>
        </form>
      </section>
    </div>
  );
}
