import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { submitInquiry } from '../../lib/submitInquiry';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all';

export default function BrochureRequestForm({ course }) {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (error) setError('');
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    setBusy(true);
    try {
      await submitInquiry(
        {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          message: `Brochure request: ${course.title}`,
          from: `academy/${course.slug}`,
          section: 'brochure',
        },
        'brochure',
        { course_id: course.id }
      );
      setDone(true);
    } catch {
      setError('We could not save your request. Please try again or email academy@recoup.health.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="brochure-form">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-lg font-bold text-primary-dark">Get the course brochure</h2>
      </div>

      {done ? (
        <div role="status" className="space-y-3" data-testid="brochure-success">
          <p className="text-sm text-green-700">
            Thank you. {course.brochure_url ? 'Your brochure is ready below, and our team will also email it to you.' : 'We will email you the brochure shortly.'}
          </p>
          {course.brochure_url && (
            <a
              href={course.brochure_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              data-testid="brochure-download"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download brochure
            </a>
          )}
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3" noValidate>
          <p className="text-sm text-gray-600">Share your details and we will send you the syllabus, schedule and admission steps.</p>
          {error && (
            <div role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="brochure-name" className="mb-1 block text-sm font-medium text-gray-700">Full name</label>
            <input id="brochure-name" className={inputClass} value={form.fullName} onChange={set('fullName')} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="brochure-email" className="mb-1 block text-sm font-medium text-gray-700">Email address</label>
            <input id="brochure-email" type="email" className={inputClass} value={form.email} onChange={set('email')} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="brochure-phone" className="mb-1 block text-sm font-medium text-gray-700">Phone number (optional)</label>
            <input id="brochure-phone" type="tel" className={inputClass} value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="+91 XXXXX XXXXX" />
          </div>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
            {busy ? 'Sending…' : 'Request brochure'}
          </button>
        </form>
      )}
    </div>
  );
}
