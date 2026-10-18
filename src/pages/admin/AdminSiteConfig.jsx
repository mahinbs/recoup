import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { loadPublicSettings } from '../../lib/settings';

const inputClass = 'w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30';

/** key, label, kind, public?, help */
const FIELDS = [
  { key: 'notification_emails', label: 'Team email addresses for notifications', kind: 'emails', isPublic: false, help: 'One address per line. New leads, booking requests and orders are queued to these addresses.' },
  { key: 'hms_booking_url', label: 'Hospital booking (HMS) page address', kind: 'text', isPublic: true, help: 'Visitors are sent here after the booking form. Leave empty to have your team call them instead.' },
  { key: 'hms_booking_mode', label: 'Booking type on that page', kind: 'select', options: [['unpaid', 'Free booking (no payment)'], ['paid', 'Paid booking (payment taken there)']], isPublic: true },
  { key: 'razorpay_key_id', label: 'Razorpay key ID (public key only)', kind: 'text', isPublic: true, help: 'Starts with rzp_. Never paste the secret key here.' },
  { key: 'cod_enabled', label: 'Allow cash on delivery', kind: 'bool', isPublic: true },
  { key: 'whatsapp_number', label: 'WhatsApp number (digits with country code)', kind: 'text', isPublic: true },
  { key: 'shipping_flat_inr', label: 'Flat shipping charge (₹)', kind: 'number', isPublic: false },
  { key: 'free_shipping_above_inr', label: 'Free shipping above (₹, 0 = never free)', kind: 'number', isPublic: false },
];

export default function AdminSiteConfig() {
  const [values, setValues] = useState(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    supabase
      .from('site_settings')
      .select('key,value')
      .then(({ data, error }) => {
        if (error) return setMsg({ type: 'error', text: error.message });
        const m = Object.fromEntries((data || []).map((r) => [r.key, r.value]));
        setValues(
          Object.fromEntries(
            FIELDS.map((f) => {
              const v = m[f.key];
              if (f.kind === 'emails') return [f.key, Array.isArray(v) ? v.join('\n') : ''];
              if (f.kind === 'bool') return [f.key, v !== false];
              return [f.key, v ?? ''];
            })
          )
        );
      });
  }, []);

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    const rows = FIELDS.map((f) => {
      const raw = values[f.key];
      let value = raw;
      if (f.kind === 'emails') {
        value = String(raw).split('\n').map((s) => s.trim()).filter(Boolean);
        const bad = value.find((s) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s));
        if (bad) throw new Error(`"${bad}" is not a valid email address.`);
      }
      if (f.kind === 'number') value = Number(raw) || 0;
      if (f.kind === 'text') value = String(raw).trim();
      if (f.key === 'razorpay_key_id' && value && !/^rzp_(test|live)_[A-Za-z0-9]+$/.test(value)) {
        throw new Error('The Razorpay key ID should look like rzp_test_… or rzp_live_… . Do not enter the secret key here.');
      }
      return { key: f.key, value, is_public: f.isPublic };
    });
    const { error } = await supabase.from('site_settings').upsert(rows);
    setSaving(false);
    if (error) setMsg({ type: 'error', text: error.message });
    else {
      loadPublicSettings(true);
      setMsg({ type: 'ok', text: 'Settings saved.' });
    }
  };

  const wrapped = (e) =>
    save(e).catch((err) => {
      setSaving(false);
      setMsg({ type: 'error', text: err.message });
    });

  if (!values) return <p className="text-slate-400">Loading…</p>;
  return (
    <form onSubmit={wrapped} className="max-w-2xl" data-testid="site-config-form">
      <h1 className="text-2xl font-bold text-primary-dark">Settings</h1>
      <p className="mt-1 mb-6 text-sm text-slate-500">Addresses and keys that connect the website to your other systems.</p>
      {msg && (
        <div role={msg.type === 'error' ? 'alert' : 'status'} className={`mb-4 rounded-xl px-4 py-3 text-sm font-medium ${msg.type === 'error' ? 'border border-red-100 bg-red-50 text-red-700' : 'border border-emerald-100 bg-emerald-50 text-emerald-700'}`}>
          {msg.text}
        </div>
      )}
      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label htmlFor={`s-${f.key}`} className="mb-1 block text-sm font-semibold text-slate-700">{f.label}</label>
            {f.kind === 'emails' ? (
              <textarea id={`s-${f.key}`} rows={3} className={inputClass} value={values[f.key]} onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))} />
            ) : f.kind === 'select' ? (
              <select id={`s-${f.key}`} className={inputClass} value={values[f.key] || 'unpaid'} onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}>
                {f.options.map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            ) : f.kind === 'bool' ? (
              <label className="flex items-center gap-3 py-1">
                <input id={`s-${f.key}`} type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary" checked={Boolean(values[f.key])} onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.checked }))} />
                <span className="text-sm text-slate-600">Enabled</span>
              </label>
            ) : (
              <input id={`s-${f.key}`} type={f.kind === 'number' ? 'number' : 'text'} min={f.kind === 'number' ? 0 : undefined} className={inputClass} value={values[f.key]} onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))} />
            )}
            {f.help && <p className="mt-1 text-xs text-slate-400">{f.help}</p>}
          </div>
        ))}
      </div>
      <Button type="submit" disabled={saving} className="mt-6 gap-2">
        {saving && <Loader2 className="h-4 w-4 animate-spin" />} Save settings
      </Button>
    </form>
  );
}
