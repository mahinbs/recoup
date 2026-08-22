import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { submitInquiry } from '../../lib/submitInquiry';
import { cn } from '../../lib/utils';

const emptyForm = {
  fullName: '',
  organization: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactInquiryForm({
  from = '',
  section = '',
  idPrefix = 'contact',
  heading = 'Send Us a Message',
  showHeading = true,
  showOrganization = true,
  compact = false,
  variant = 'light',
  className = '',
}) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);

  const isDark = variant === 'dark';

  const fieldClass = isDark
    ? 'w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all'
    : 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all';

  const labelClass = isDark
    ? 'text-sm font-medium text-white/80'
    : 'text-sm font-medium text-gray-700';

  const updateField = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!form.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!form.email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.message.trim()) {
      setError('Please tell us how we can help.');
      return;
    }

    setBusy(true);
    try {
      await submitInquiry({
        fullName: form.fullName,
        organization: form.organization,
        email: form.email,
        phone: form.phone,
        message: form.message,
        from,
        section,
      });
      setForm(emptyForm);
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again or email connect@recoup.health.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className={cn(compact ? 'space-y-4' : 'space-y-6', className)} onSubmit={handleSubmit}>
      {showHeading && heading ? (
        <h2
          className={cn(
            'font-bold',
            compact ? 'text-lg' : 'text-2xl mb-2',
            isDark ? 'text-white' : 'text-primary-dark'
          )}
        >
          {heading}
        </h2>
      ) : null}

      <input type="hidden" name="utm_source_page" value={from} />
      <input type="hidden" name="utm_source_section" value={section} />

      {error && (
        <div
          className={cn(
            'rounded-xl px-4 py-3 text-sm font-medium',
            isDark
              ? 'border border-red-300/30 bg-red-500/15 text-red-100'
              : 'border border-red-100 bg-red-50 text-red-700'
          )}
        >
          {error}
        </div>
      )}
      {success && (
        <div
          className={cn(
            'rounded-xl px-4 py-3 text-sm font-medium',
            isDark
              ? 'border border-green-300/30 bg-green-500/15 text-green-100'
              : 'border border-green-100 bg-green-50 text-green-700'
          )}
        >
          Thanks — your message was sent. Our team will get back to you soon.
        </div>
      )}

      <div
        className={cn(
          'grid grid-cols-1 gap-4',
          compact ? 'md:grid-cols-3' : 'md:grid-cols-2 md:gap-6'
        )}
      >
        <Field
          id={`${idPrefix}-name`}
          label="Full Name"
          type="text"
          value={form.fullName}
          onChange={updateField('fullName')}
          placeholder="Enter your full name"
          autoComplete="name"
          labelClass={labelClass}
          fieldClass={fieldClass}
        />
        {showOrganization ? (
          <Field
            id={`${idPrefix}-org`}
            label="Organization / School"
            type="text"
            value={form.organization}
            onChange={updateField('organization')}
            placeholder="Optional"
            autoComplete="organization"
            labelClass={labelClass}
            fieldClass={fieldClass}
          />
        ) : null}
        <Field
          id={`${idPrefix}-email`}
          label="Email Address"
          type="email"
          value={form.email}
          onChange={updateField('email')}
          placeholder="Enter your email address"
          autoComplete="email"
          labelClass={labelClass}
          fieldClass={fieldClass}
        />
        <Field
          id={`${idPrefix}-phone`}
          label="Phone Number"
          type="tel"
          value={form.phone}
          onChange={updateField('phone')}
          placeholder="+91 XXXXX XXXXX"
          autoComplete="tel"
          labelClass={labelClass}
          fieldClass={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor={`${idPrefix}-message`}>
          How can we help you?
        </label>
        <textarea
          id={`${idPrefix}-message`}
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={updateField('message')}
          className={cn(fieldClass, 'resize-none')}
          placeholder="Tell us what you're looking for..."
        />
      </div>

      <Button
        type="submit"
        disabled={busy}
        className={cn(
          'font-bold',
          compact ? 'w-full sm:w-auto py-3 px-8' : 'w-full py-4 text-base shadow-lg shadow-primary/20',
          isDark && 'bg-white text-primary-dark hover:bg-slate-100'
        )}
      >
        {busy ? 'Sending…' : "Let's Connect"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  labelClass,
  fieldClass,
}) {
  return (
    <div className="space-y-2">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={fieldClass}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
}
