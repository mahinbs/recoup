import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, ArrowRight, Loader2, ShieldAlert, Phone } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { submitInquiry } from '../../lib/submitInquiry';
import { detectRedFlag, urgentMessage } from '../../lib/ai/redFlags';
import { DISCLAIMER } from '../../lib/ai/constants';

const SUGGESTIONS = ['Back pain', 'Knee pain', 'Poor sleep', 'Digestive issues', 'Low energy', 'Stress'];
const DURATION_CHIPS = [
  { label: 'A few days', term: '' },
  { label: 'A few weeks', term: '' },
  { label: 'Months or longer', term: 'chronic long term' },
  { label: 'Skip', term: '' },
];
const SEVERITY_CHIPS = [
  { label: 'Mild', term: '' },
  { label: 'Moderate', term: '' },
  { label: 'Severe', term: 'severe' },
  { label: 'Skip', term: '' },
];
const GREETING =
  'Hello, I am the RECOUP assistant. Tell me in a sentence or two what is troubling you, or pick a topic below, and I will point you to the closest matching RECOUP programs.';

let idCounter = 0;
const mk = (role, text, extra = {}) => ({ id: ++idCounter, role, text, ...extra });

function getSessionId() {
  const KEY = 'recoup_chat_session';
  try {
    const existing = sessionStorage.getItem(KEY);
    if (existing && existing.length >= 8 && existing.length <= 64) return existing;
  } catch {
    /* ignore */
  }
  let id;
  try {
    id = crypto.randomUUID().replace(/-/g, '');
  } catch {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
  id = id.slice(0, 40).padEnd(8, '0');
  try {
    sessionStorage.setItem(KEY, id);
  } catch {
    /* ignore */
  }
  return id;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [mk('bot', GREETING)]);
  const [stage, setStage] = useState('idle'); // idle | duration | severity | done | nomatch
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [lead, setLead] = useState(false);
  const [matches, setMatches] = useState([]);
  const ctx = useRef({ base: '', duration: '', severity: '', durationLabel: '', severityLabel: '' });
  const sessionRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const openBtnRef = useRef(null);
  const endRef = useRef(null);

  const openChat = useCallback(() => setOpen(true), []);
  useEffect(() => {
    window.addEventListener('recoup:open-chat', openChat);
    return () => window.removeEventListener('recoup:open-chat', openChat);
  }, [openChat]);

  // Focus management
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      wasOpen.current = true;
      return () => clearTimeout(t);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      openBtnRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView?.({ block: 'end' });
  }, [messages, showForm, busy, stage]);

  // Silent conversation logging (debounced)
  useEffect(() => {
    if (!supabase || !messages.some((m) => m.role === 'user')) return undefined;
    const t = setTimeout(() => {
      try {
        if (!sessionRef.current) sessionRef.current = getSessionId();
        const log = messages.slice(-60).map((m) => ({ role: m.role, text: String(m.text || '').slice(0, 1000) }));
        const top = matches.map((m) => ({ title: m.title, url: m.url, score: m.score }));
        Promise.resolve(supabase.rpc('log_ai_chat', { p_session: sessionRef.current, p_messages: log, p_matches: top, p_lead: lead })).then(
          () => {},
          () => {},
        );
      } catch {
        /* silent */
      }
    }, 800);
    return () => clearTimeout(t);
  }, [messages, matches, lead]);

  const push = (...msgs) => setMessages((m) => [...m, ...msgs]);

  const search = async (q) => {
    if (!supabase) return { rows: [], offline: true };
    try {
      const { data, error } = await supabase.rpc('search_knowledge', { q, max_results: 3 });
      if (error) throw error;
      return { rows: Array.isArray(data) ? data : [] };
    } catch {
      return { rows: [], offline: true };
    }
  };

  const decorate = (rows) => {
    const top = Math.max(...rows.map((r) => Number(r.score) || 0), 0.0001);
    return rows.map((r) => ({ ...r, pct: Math.max(10, Math.round(((Number(r.score) || 0) / top) * 100)) }));
  };

  const queryNow = () => [ctx.current.base, ctx.current.duration, ctx.current.severity].filter(Boolean).join(' ');

  const runSearchAndReply = async (refined) => {
    setBusy(true);
    const { rows, offline } = await search(queryNow());
    setBusy(false);
    if (offline) {
      push(mk('bot', 'I cannot look things up right now. Our team can still help you directly. You can book a consultation or ask for a callback below.'));
      setStage('nomatch');
      return;
    }
    if (!rows.length) {
      push(mk('bot', 'I could not find a close match for that. Our team would be happy to understand your situation and guide you personally. Would you like us to call you back?', { noMatch: true }));
      setMatches([]);
      setStage('nomatch');
      return;
    }
    const cards = decorate(rows);
    setMatches(cards);
    push(
      mk('bot', refined ? 'Thank you. Here is the refined list based on your answers.' : 'Thank you for sharing that. These are the closest matches in our own program information.', { cards }),
    );
    if (refined) {
      push(mk('bot', 'If you would like, our team can help you take the next step.'));
      setStage('done');
    } else {
      push(mk('bot', 'Optional: how long have you had this?'));
      setStage('duration');
    }
  };

  const handleUrgent = (flag) => {
    push(mk('bot', urgentMessage(flag), { urgent: true, suicide: flag === 'suicide' }));
    setStage('idle');
    setMatches([]);
  };

  const send = async (raw) => {
    const text = String(raw ?? input).trim().slice(0, 500);
    if (!text || busy) return;
    setInput('');
    setShowForm(false);
    push(mk('user', text));

    const flag = detectRedFlag(text);
    if (flag) return handleUrgent(flag);

    if (stage === 'duration') {
      ctx.current.durationLabel = text;
      ctx.current.duration = text;
      push(mk('bot', 'And how severe is it? Optional.'));
      return setStage('severity');
    }
    if (stage === 'severity') {
      ctx.current.severityLabel = text;
      ctx.current.severity = text;
      return runSearchAndReply(true);
    }
    ctx.current = { base: text, duration: '', severity: '', durationLabel: '', severityLabel: '' };
    await runSearchAndReply(false);
  };

  const chooseChip = (chip, kind) => {
    const text = chip.label;
    if (detectRedFlag(text)) return;
    push(mk('user', text));
    if (kind === 'duration') {
      ctx.current.durationLabel = chip.label === 'Skip' ? '' : chip.label;
      ctx.current.duration = chip.term;
      push(mk('bot', 'And how severe is it? Optional.'));
      setStage('severity');
    } else {
      ctx.current.severityLabel = chip.label === 'Skip' ? '' : chip.label;
      ctx.current.severity = chip.term;
      runSearchAndReply(true);
    }
  };

  const askElse = () => {
    ctx.current = { base: '', duration: '', severity: '', durationLabel: '', severityLabel: '' };
    setStage('idle');
    setShowForm(false);
    push(mk('bot', 'Of course. What else would you like to ask about?'));
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      setOpen(false);
      return;
    }
    if (e.key === 'Tab' && panelRef.current) {
      const f = panelRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const summary = () => {
    const c = ctx.current;
    const userMsgs = messages.filter((m) => m.role === 'user').map((m) => m.text).slice(0, 6).join(' | ');
    return [
      'Callback requested via the RECOUP assistant.',
      `Concern: ${c.base || userMsgs || 'not stated'}`,
      c.durationLabel ? `Duration: ${c.durationLabel}` : '',
      c.severityLabel ? `Severity: ${c.severityLabel}` : '',
      matches.length ? `Top matches: ${matches.map((m) => `${m.title} (${m.url || 'no link'})`).join('; ')}` : 'Top matches: none',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const showSuggestions = stage === 'idle' && messages.length <= 2;
  const showFollow = stage === 'duration' || stage === 'severity';
  const showCtas = ['duration', 'severity', 'done', 'nomatch'].includes(stage);

  return (
    <>
      {!open && (
        <button
          ref={openBtnRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          data-testid="chat-open"
          className="fixed bottom-5 left-4 z-[90] inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:left-6"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Ask RECOUP
        </button>
      )}

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="recoup-chat-title"
          onKeyDown={onKeyDown}
          data-testid="chat-panel"
          className="fixed inset-0 z-[120] flex flex-col bg-white sm:inset-auto sm:bottom-5 sm:left-5 sm:h-[620px] sm:max-h-[calc(100vh-2.5rem)] sm:w-[400px] sm:rounded-2xl sm:border sm:border-primary/10 sm:shadow-2xl"
        >
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white sm:rounded-t-2xl">
            <div>
              <h2 id="recoup-chat-title" className="text-base font-bold">Ask RECOUP</h2>
              <p className="text-xs text-white/80">Symptom guide from our own program information</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" data-testid="chat-close" className="rounded-lg p-2 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="flex items-start gap-2 border-b border-primary/10 bg-primary/5 px-4 py-2 text-xs text-slate-600" data-testid="chat-disclaimer">
            <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            {DISCLAIMER}
          </p>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div className={`max-w-[92%] ${m.role === 'user' ? '' : 'w-full'}`}>
                  <div
                    className={`whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === 'user'
                        ? 'bg-primary text-white'
                        : m.urgent
                          ? 'border border-red-200 bg-red-50 text-red-800'
                          : 'bg-slate-100 text-slate-700'
                    }`}
                    role={m.urgent ? 'alert' : undefined}
                    data-testid={m.urgent ? 'chat-urgent' : undefined}
                  >
                    {m.text}
                    {m.urgent && (
                      <span className="mt-2 flex flex-wrap gap-2">
                        <a href="tel:112" className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white"><Phone className="h-3 w-3" aria-hidden="true" /> Call 112</a>
                        {m.suicide && <a href="tel:14416" className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white"><Phone className="h-3 w-3" aria-hidden="true" /> Tele-MANAS 14416</a>}
                      </span>
                    )}
                  </div>
                  {m.cards && (
                    <div className="mt-2 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Closest matching RECOUP programs</p>
                      {m.cards.map((c) => (
                        <div key={c.id} className="rounded-xl border border-primary/10 bg-white p-3 shadow-sm" data-testid="chat-result-card">
                          <h3 className="text-sm font-bold text-primary-dark">{c.title}</h3>
                          {c.snippet && <p className="mt-1 line-clamp-3 text-xs text-slate-500">{c.snippet}</p>}
                          <div className="mt-2 flex items-center gap-2" aria-label={`Relevance ${c.pct} percent of the top match`}>
                            <span className="text-[11px] font-medium text-slate-400">relevance</span>
                            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                              <span className="block h-full rounded-full bg-primary" style={{ width: `${c.pct}%` }} />
                            </span>
                          </div>
                          {c.url && (
                            c.url.startsWith('/') ? (
                              <Link to={c.url} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">View this program <ArrowRight className="h-3 w-3" aria-hidden="true" /></Link>
                            ) : (
                              <a href={c.url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">View this page <ArrowRight className="h-3 w-3" aria-hidden="true" /></a>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {busy && (
              <div className="flex items-center gap-2 text-sm text-slate-400" role="status"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Looking through our programs</div>
            )}

            {showForm && (
              <CallbackForm
                summary={summary}
                onDone={() => {
                  setShowForm(false);
                  setLead(true);
                  push(mk('bot', 'Thank you. We have your details and our team will call you back soon.'));
                }}
              />
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-100 px-4 pb-3 pt-2">
            {(showSuggestions || showFollow) && (
              <div className="mb-2 flex flex-wrap gap-2" data-testid="chat-chips">
                {showSuggestions && SUGGESTIONS.map((s) => (
                  <button key={s} type="button" disabled={busy} onClick={() => send(s)} className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50">{s}</button>
                ))}
                {stage === 'duration' && DURATION_CHIPS.map((c) => (
                  <button key={c.label} type="button" onClick={() => chooseChip(c, 'duration')} className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">{c.label}</button>
                ))}
                {stage === 'severity' && SEVERITY_CHIPS.map((c) => (
                  <button key={c.label} type="button" onClick={() => chooseChip(c, 'severity')} className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">{c.label}</button>
                ))}
              </div>
            )}
            {showCtas && !showForm && (
              <div className="mb-2 flex flex-wrap gap-2" data-testid="chat-cta">
                <Link to="/book" onClick={() => setOpen(false)} className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark">Book a consultation</Link>
                <button type="button" onClick={() => setShowForm(true)} data-testid="chat-callback-btn" className="rounded-full border border-primary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/5">Request a callback</button>
                <button type="button" onClick={askElse} className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100">Ask something else</button>
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2"
            >
              <label htmlFor="recoup-chat-input" className="sr-only">Describe your symptoms</label>
              <input
                id="recoup-chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                autoComplete="off"
                placeholder={stage === 'duration' ? 'For example, 3 weeks' : stage === 'severity' ? 'For example, mild' : 'Describe how you feel'}
                data-testid="chat-input"
                className="min-w-0 flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button type="submit" disabled={busy || !input.trim()} aria-label="Send" data-testid="chat-send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function CallbackForm({ summary, onDone }) {
  const [f, setF] = useState({ name: '', phone: '', email: '' });
  const [st, setSt] = useState({ busy: false, err: '' });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    const name = f.name.trim();
    const phone = f.phone.trim();
    const email = f.email.trim();
    if (!name) return setSt({ busy: false, err: 'Please add your name.' });
    if (phone.replace(/\D/g, '').length < 8) return setSt({ busy: false, err: 'Please add a phone number we can call.' });
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setSt({ busy: false, err: 'That email does not look right.' });
    setSt({ busy: true, err: '' });
    try {
      await submitInquiry({ fullName: name, phone, email, message: summary(), from: window.location.pathname, section: 'AI assistant' }, 'callback');
      onDone();
    } catch {
      setSt({ busy: false, err: 'Sorry, we could not send this. Please try again or use the Book page.' });
    }
  };
  const cls = 'w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30';
  return (
    <form onSubmit={submit} noValidate className="space-y-2 rounded-xl border border-primary/20 bg-white p-3 shadow-sm" data-testid="chat-callback-form">
      <p className="text-sm font-semibold text-primary-dark">Request a callback</p>
      <div>
        <label htmlFor="cb-name" className="sr-only">Your name</label>
        <input id="cb-name" className={cls} placeholder="Your name" value={f.name} onChange={set('name')} autoComplete="name" maxLength={200} />
      </div>
      <div>
        <label htmlFor="cb-phone" className="sr-only">Phone number</label>
        <input id="cb-phone" type="tel" className={cls} placeholder="Phone number" value={f.phone} onChange={set('phone')} autoComplete="tel" maxLength={40} />
      </div>
      <div>
        <label htmlFor="cb-email" className="sr-only">Email (optional)</label>
        <input id="cb-email" type="email" className={cls} placeholder="Email (optional)" value={f.email} onChange={set('email')} autoComplete="email" maxLength={254} />
      </div>
      {st.err && <p className="text-xs text-red-600" role="alert">{st.err}</p>}
      <button type="submit" disabled={st.busy} data-testid="chat-callback-submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-60">
        {st.busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />} Send my details
      </button>
    </form>
  );
}
