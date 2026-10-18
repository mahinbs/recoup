import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarCheck, ExternalLink, Phone } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { useSettings } from '../lib/settings';

const SERVICES = [
  'Chronic pain and rehabilitation',
  'Hypermobility and EDS care',
  'Functional nutrition',
  'Gut health',
  'Mental health and stress',
  'Neurological rehabilitation',
  'EPHR health report review',
  'Not sure yet',
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white';

const emptyForm = { fullName: '', phone: '', email: '', service: SERVICES[0], preferredDate: '', preferredTime: '', mode: 'in_person', notes: '' };

/**
 * Book a consultation: optional pre-booking form (saves a lead), then redirect to the
 * hospital management system's booking page when its address is set in Admin > Settings.
 */
export default function Book() {
  const settings = useSettings();
  const [params] = useSearchParams();
  const hmsUrl = typeof settings.hms_booking_url === 'string' ? settings.hms_booking_url.trim() : '';
  const hmsPaid = settings.hms_booking_mode === 'paid';
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.title = 'Book a Consultation | RECOUP Health Bangalore';
  }, []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setError('');
  };

  const goToHms = () => {
    if (hmsUrl) window.location.assign(hmsUrl);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.fullName.trim()) return setError('Please enter your full name.');
    if (form.phone.replace(/\D/g, '').length < 7) return setError('Please enter a phone number we can reach you on.');
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (!supabase) return setError('Booking is not available right now. Please call us on +91 98451 55449.');
    setBusy(true);
    try {
      const { error: err } = await supabase.from('appointment_requests').insert({
        full_name: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        service: form.service,
        preferred_date: form.preferredDate || null,
        preferred_time: form.preferredTime || null,
        mode: form.mode,
        notes: form.notes.trim() || null,
        source_page: (params.get('from') || 'book').slice(0, 200),
        redirected_to_hms: Boolean(hmsUrl),
      });
      if (err) throw err;
      setDone(true);
      if (hmsUrl) setTimeout(goToHms, 2500);
    } catch {
      setError('Something went wrong. Please try again or call us on +91 98451 55449.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Section className="pt-16 md:pt-20 pb-6 section-tint text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Book a consultation</span>
          <h1 className="font-bold text-primary-dark mb-4">Start with a conversation about your health</h1>
          <p className="text-gray-600 text-lg">
            Tell us a little about you and what you need. {hmsUrl ? 'We will then take you to our booking page to pick a slot.' : 'Our team will call you to confirm a time.'}
          </p>
        </div>
      </Section>

      <Section className="py-10 section-white">
        <div className="max-w-2xl mx-auto">
          {done ? (
            <div role="status" data-testid="booking-done" className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center">
              <CalendarCheck className="mx-auto mb-4 h-10 w-10 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-800 mb-2">Thank you, we have your request</h2>
              {hmsUrl ? (
                <>
                  <p className="text-emerald-800 mb-6">Taking you to our booking page{hmsPaid ? ', where you can also pay for your consultation' : ''}…</p>
                  <Button onClick={goToHms} className="gap-2">
                    Continue to booking <ExternalLink className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <p className="text-emerald-800">Our team will call you on {form.phone || 'your phone number'} to confirm your consultation.</p>
              )}
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5 rounded-3xl border border-gray-100 bg-gray-50/60 p-6 md:p-8 shadow-sm" data-testid="booking-form" noValidate>
              {error && <div role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="bk-name" className="text-sm font-medium text-gray-700">Full name</label>
                  <input id="bk-name" className={inputClass} value={form.fullName} onChange={set('fullName')} placeholder="Enter your full name" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bk-phone" className="text-sm font-medium text-gray-700">Phone number</label>
                  <input id="bk-phone" type="tel" className={inputClass} value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bk-email" className="text-sm font-medium text-gray-700">Email <span className="text-gray-400">(optional)</span></label>
                  <input id="bk-email" type="email" className={inputClass} value={form.email} onChange={set('email')} placeholder="Enter your email address" autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bk-service" className="text-sm font-medium text-gray-700">What do you need help with?</label>
                  <select id="bk-service" className={inputClass} value={form.service} onChange={set('service')}>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bk-date" className="text-sm font-medium text-gray-700">Preferred date <span className="text-gray-400">(optional)</span></label>
                  <input id="bk-date" type="date" className={inputClass} value={form.preferredDate} min={new Date().toISOString().slice(0, 10)} onChange={set('preferredDate')} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bk-time" className="text-sm font-medium text-gray-700">Preferred time <span className="text-gray-400">(optional)</span></label>
                  <select id="bk-time" className={inputClass} value={form.preferredTime} onChange={set('preferredTime')}>
                    <option value="">Any time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium text-gray-700">How would you like to consult?</legend>
                <div className="flex gap-4">
                  {[['in_person', 'In person'], ['online', 'Online']].map(([v, label]) => (
                    <label key={v} className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="radio" name="bk-mode" checked={form.mode === v} onChange={() => setForm((f) => ({ ...f, mode: v }))} className="text-primary" /> {label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="space-y-2">
                <label htmlFor="bk-notes" className="text-sm font-medium text-gray-700">Anything we should know? <span className="text-gray-400">(optional)</span></label>
                <textarea id="bk-notes" rows={3} className={inputClass} value={form.notes} onChange={set('notes')} placeholder="Symptoms, reports you have, questions…" />
              </div>
              <Button type="submit" size="lg" disabled={busy} className="w-full" data-testid="booking-submit">
                {busy ? 'Sending…' : hmsUrl ? 'Continue to booking' : 'Request my consultation'}
              </Button>
              {hmsUrl && (
                <p className="text-center text-sm text-gray-500">
                  In a hurry? <a href={hmsUrl} className="font-semibold text-primary hover:underline">Skip this form and go straight to booking</a>
                </p>
              )}
              <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" /> Prefer to talk? Call <a href="tel:+919845155449" className="font-semibold text-primary">+91 98451 55449</a>
              </p>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
}
