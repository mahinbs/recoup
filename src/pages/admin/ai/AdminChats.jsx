import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';

const fmt = (v) => (v ? new Date(v).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '-');

export default function AdminChats() {
  const [open, setOpen] = useState(null);
  const { data: rows, error, loading } = useAsync(async () => {
    if (!supabase) throw new Error('The backend is not configured.');
    const res = await supabase
      .from('ai_conversations')
      .select('id,session_id,messages,top_matches,lead_requested,created_at,updated_at')
      .order('updated_at', { ascending: false })
      .limit(300);
    if (res.error) throw res.error;
    return res.data;
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary-dark">Assistant chats</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-500">Conversations with the Ask RECOUP assistant. Read only.</p>
      </div>
      {error && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error.message}</div>}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Messages</th>
              <th className="px-4 py-3 font-semibold">Top match</th>
              <th className="px-4 py-3 font-semibold">Lead requested</th>
              <th className="px-4 py-3 text-right font-semibold">Transcript</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">Loading…</td></tr>}
            {!loading && rows && rows.length === 0 && <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-400" data-testid="empty-state">No conversations yet.</td></tr>}
            {(rows || []).map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/60">
                <td className="px-4 py-3 text-slate-700">{fmt(r.updated_at)}</td>
                <td className="px-4 py-3 text-slate-700">{Array.isArray(r.messages) ? r.messages.length : 0}</td>
                <td className="px-4 py-3 text-slate-700">{r.top_matches?.[0]?.title || <span className="text-slate-300">-</span>}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${r.lead_requested ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{r.lead_requested ? 'Yes' : 'No'}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button type="button" aria-label="Read transcript" onClick={() => setOpen(r)} className="rounded-lg p-2 text-slate-500 hover:bg-primary/10 hover:text-primary" data-testid="chat-read">
                    <Eye className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Chat transcript" onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}>
          <div className="my-8 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-primary-dark">Transcript</h2>
                <p className="text-xs text-slate-400">{fmt(open.created_at)} · {Array.isArray(open.messages) ? open.messages.length : 0} messages</p>
              </div>
              <button type="button" autoFocus aria-label="Close" onClick={() => setOpen(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-2">
              {(Array.isArray(open.messages) ? open.messages : []).map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <span className="mb-0.5 block text-[10px] font-semibold uppercase opacity-70">{m.role === 'user' ? 'Visitor' : 'Assistant'}</span>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            {Array.isArray(open.top_matches) && open.top_matches.length > 0 && (
              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="mb-2 text-sm font-bold text-slate-700">Programs shown</h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {open.top_matches.map((m, i) => <li key={i}>{m.title}{m.url ? ` (${m.url})` : ''}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
