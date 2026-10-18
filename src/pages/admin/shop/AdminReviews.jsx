import React, { useState } from 'react';
import { Check, Star, Trash2, Undo2 } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';
import { ConfirmDialog } from '../../../components/ui/ConfirmDialog';

export default function AdminReviews() {
  const [confirm, setConfirm] = useState(null);
  const [err, setErr] = useState('');
  const { data, error, loading, reload } = useAsync(async () => {
    if (!supabase) throw new Error('Backend is not configured.');
    const res = await supabase.from('product_reviews').select('*, products(name)').order('approved', { ascending: true }).order('created_at', { ascending: false }).limit(300);
    if (res.error) throw res.error;
    return res.data;
  }, []);

  const setApproved = async (r, approved) => {
    setErr('');
    const { error: e } = await supabase.from('product_reviews').update({ approved }).eq('id', r.id);
    if (e) setErr(e.message);
    else reload();
  };
  const del = (r) =>
    setConfirm({
      onConfirm: async () => {
        const { error: e } = await supabase.from('product_reviews').delete().eq('id', r.id);
        if (e) setErr(e.message);
        else reload();
      },
    });

  const pending = (data || []).filter((r) => !r.approved).length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary-dark">Product reviews</h1>
        <p className="mt-1 text-sm text-slate-500">{pending} waiting for approval. Only approved reviews appear in the shop.</p>
      </div>
      {(error || err) && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error?.message || err}</div>}
      <div className="space-y-3">
        {loading && <p className="py-8 text-center text-slate-400">Loading...</p>}
        {!loading && data && data.length === 0 && <p className="rounded-2xl border border-slate-200 bg-white px-4 py-10 text-center text-slate-400" data-testid="empty-state">No reviews yet.</p>}
        {(data || []).map((r) => (
          <article key={r.id} data-testid="review-row" className={`rounded-2xl border bg-white p-4 shadow-sm ${r.approved ? 'border-slate-200' : 'border-amber-200'}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-primary-dark">{r.reviewer_name} <span className="font-normal text-slate-400">on {r.products?.name || 'a deleted product'}</span></p>
                <p className="mt-1 flex items-center gap-1" aria-label={`${r.rating} out of 5`}>
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} className={`h-4 w-4 ${n <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />)}
                  <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${r.approved ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{r.approved ? 'Approved' : 'Pending'}</span>
                </p>
              </div>
              <div className="flex gap-2">
                {r.approved ? (
                  <button type="button" onClick={() => setApproved(r, false)} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"><Undo2 className="h-4 w-4" /> Unapprove</button>
                ) : (
                  <button type="button" onClick={() => setApproved(r, true)} data-testid="approve-review" className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-dark"><Check className="h-4 w-4" /> Approve</button>
                )}
                <button type="button" aria-label="Delete review" onClick={() => del(r)} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            {r.body && <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{r.body}</p>}
          </article>
        ))}
      </div>
      <ConfirmDialog open={Boolean(confirm)} title="Delete this review?" description="This cannot be undone." confirmLabel="Delete" variant="danger" onOpenChange={(o) => !o && setConfirm(null)} onConfirm={() => confirm?.onConfirm?.()} />
    </div>
  );
}
