import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CalendarDays, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const SEEN_KEY = 'recoup_batch_popup_seen';
const POPUP_DELAY_MS = 6000;

function todayIso() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function fmtDate(v) {
  if (!v) return '';
  const d = new Date(`${String(v).slice(0, 10)}T00:00:00`);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function safeGet(store, key) {
  try {
    return window[store].getItem(key);
  } catch {
    return null;
  }
}
function safeSet(store, key, value) {
  try {
    window[store].setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

function describe(b) {
  const title = b.courses?.title || b.title;
  const when = b.start_date ? `starts ${fmtDate(b.start_date)}` : 'enrolment open';
  return { title, when };
}

function cta(b) {
  if (b.registration_url) return { href: b.registration_url, external: true };
  if (b.courses?.slug) return { href: `/academy/courses/${b.courses.slug}`, external: false };
  return { href: '/academy/courses', external: false };
}

export default function BatchBanner() {
  const [batches, setBatches] = useState([]);
  const [barDismissed, setBarDismissed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const dialogRef = useRef(null);
  const lastFocus = useRef(null);

  const hidden = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');

  useEffect(() => {
    if (!supabase || hidden) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase
          .from('course_batches')
          .select('id,title,start_date,registration_url,courses(title,slug)')
          .eq('published', true)
          .eq('show_banner', true)
          .or(`start_date.is.null,start_date.gte.${todayIso()}`)
          .order('start_date', { ascending: true, nullsFirst: false })
          .limit(3);
        if (!cancelled && !error && Array.isArray(data)) setBatches(data);
      } catch {
        /* banner is optional */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [hidden]);

  const first = batches[0];

  useEffect(() => {
    if (!first || hidden || safeGet('sessionStorage', SEEN_KEY)) return undefined;
    const t = setTimeout(() => {
      if (safeGet('sessionStorage', SEEN_KEY)) return;
      safeSet('sessionStorage', SEEN_KEY, '1');
      lastFocus.current = document.activeElement;
      setPopupOpen(true);
    }, POPUP_DELAY_MS);
    return () => clearTimeout(t);
  }, [first, hidden]);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
    const el = lastFocus.current;
    if (el && typeof el.focus === 'function') el.focus();
  }, []);

  useEffect(() => {
    if (!popupOpen) return undefined;
    const dlg = dialogRef.current;
    dlg?.querySelector('[data-autofocus]')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closePopup();
        return;
      }
      if (e.key === 'Tab' && dlg) {
        const f = dlg.querySelectorAll('a[href],button:not([disabled])');
        if (!f.length) return;
        const firstEl = f[0];
        const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [popupOpen, closePopup]);

  if (hidden || !first) return null;

  const a = describe(first);
  const link = cta(first);
  const linkProps = link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <>
      {!barDismissed && (
        <div
          data-testid="batch-banner"
          role="region"
          aria-label="Upcoming batch announcement"
          className="fixed bottom-24 left-3 right-3 z-[60] mx-auto flex max-w-md items-center gap-3 rounded-full bg-primary-dark px-4 py-2.5 text-white shadow-lg motion-safe:animate-[fadeIn_0.4s_ease-out] md:bottom-4 md:left-1/2 md:right-auto md:w-[26rem] md:-translate-x-1/2 md:mx-0"
        >
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p className="min-w-0 flex-1 truncate text-xs sm:text-sm">
            <span className="font-semibold">{a.title}</span> {a.when}
          </p>
          <a href={link.href} {...linkProps} className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-dark hover:bg-slate-100">
            Register
          </a>
          <button type="button" aria-label="Dismiss announcement" onClick={() => setBarDismissed(true)} className="shrink-0 rounded-full p-1 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {popupOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/50 p-4" onMouseDown={(e) => e.target === e.currentTarget && closePopup()}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="batch-popup-title"
            data-testid="batch-popup"
            className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl motion-safe:animate-[fadeIn_0.3s_ease-out]"
          >
            <button type="button" aria-label="Close" onClick={closePopup} className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-primary">New batch announced</span>
            <h2 id="batch-popup-title" className="mb-2 pr-8 text-2xl font-bold text-primary-dark">{a.title}</h2>
            <p className="mb-1 text-gray-600">{first.title}</p>
            <p className="mb-6 text-gray-600">{a.when.charAt(0).toUpperCase() + a.when.slice(1)}.</p>
            <div className="flex flex-wrap gap-3">
              <a href={link.href} {...linkProps} data-autofocus onClick={closePopup} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                Register
              </a>
              <button type="button" onClick={closePopup} className="rounded-full px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
