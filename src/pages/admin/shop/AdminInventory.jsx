import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';
import { Button } from '../../../components/ui/Button';

const fmt = (d) => new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

function Row({ p, onChange }) {
  const [val, setVal] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const low = p.track_inventory && p.stock_qty <= p.low_stock_threshold;

  const setStock = async (qty) => {
    if (!Number.isInteger(qty) || qty < 0) return setErr('Enter a whole number, 0 or more.');
    setBusy(true);
    setErr('');
    const { error } = await supabase.from('products').update({ stock_qty: qty }).eq('id', p.id);
    setBusy(false);
    if (error) return setErr(error.message);
    setVal('');
    onChange();
  };

  return (
    <tr className={low ? 'bg-amber-50/70' : ''} data-testid="inventory-row">
      <td className="px-4 py-3 font-semibold">{p.name}{p.sku && <span className="ml-2 text-xs font-normal text-slate-400">{p.sku}</span>}</td>
      <td className="px-4 py-3">
        <span className={`font-bold ${p.track_inventory && p.stock_qty === 0 ? 'text-red-600' : low ? 'text-amber-700' : ''}`}>{p.stock_qty}</span>
        {!p.track_inventory && <span className="ml-2 text-xs text-slate-400">not tracked</span>}
        {low && <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">{p.stock_qty === 0 ? 'Out of stock' : 'Low'}</span>}
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" aria-label={`Remove one from ${p.name}`} disabled={busy || p.stock_qty <= 0} onClick={() => setStock(p.stock_qty - 1)} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50 disabled:opacity-40"><Minus className="h-4 w-4" /></button>
          <button type="button" aria-label={`Add one to ${p.name}`} disabled={busy} onClick={() => setStock(p.stock_qty + 1)} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50 disabled:opacity-40"><Plus className="h-4 w-4" /></button>
          <label className="sr-only" htmlFor={`set-${p.id}`}>Set stock for {p.name}</label>
          <input id={`set-${p.id}`} type="number" min={0} step={1} placeholder="Set to" value={val} onChange={(e) => setVal(e.target.value)} className="w-24 rounded-lg border border-slate-200 px-2 py-1.5 text-sm" />
          <Button type="button" size="sm" variant="outline" disabled={busy || val === ''} onClick={() => setStock(Number(val))}>Set stock</Button>
        </div>
        {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
      </td>
    </tr>
  );
}

export default function AdminInventory() {
  const { data, error, loading, reload } = useAsync(async () => {
    if (!supabase) throw new Error('Backend is not configured.');
    const [p, m] = await Promise.all([
      supabase.from('products').select('id,name,sku,stock_qty,track_inventory,low_stock_threshold').order('stock_qty', { ascending: true }),
      supabase.from('inventory_movements').select('*, products(name)').order('created_at', { ascending: false }).limit(100),
    ]);
    if (p.error) throw p.error;
    if (m.error) throw m.error;
    return { products: p.data, moves: m.data };
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary-dark">Inventory</h1>
        <p className="mt-1 text-sm text-slate-500">Lowest stock first. Rows in amber are at or below their low stock threshold.</p>
      </div>
      {error && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error.message}</div>}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Product</th><th className="px-4 py-3">In stock</th><th className="px-4 py-3">Adjust</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {loading && <tr><td colSpan={3} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && data && data.products.length === 0 && <tr><td colSpan={3} className="px-4 py-10 text-center text-slate-400" data-testid="empty-state">No products yet.</td></tr>}
            {(data?.products || []).map((p) => <Row key={p.id} p={p} onChange={reload} />)}
          </tbody>
        </table>
      </div>

      <h2 className="mb-3 mt-10 text-lg font-bold text-primary-dark">Stock movements</h2>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">When</th><th className="px-4 py-3">Product</th><th className="px-4 py-3">Change</th><th className="px-4 py-3">Stock after</th><th className="px-4 py-3">Reason</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {data && data.moves.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400">No movements yet.</td></tr>}
            {(data?.moves || []).map((m) => (
              <tr key={m.id}>
                <td className="whitespace-nowrap px-4 py-2 text-slate-500">{fmt(m.created_at)}</td>
                <td className="px-4 py-2">{m.products?.name || 'Deleted product'}</td>
                <td className={`px-4 py-2 font-semibold ${m.delta < 0 ? 'text-red-600' : 'text-emerald-700'}`}>{m.delta > 0 ? `+${m.delta}` : m.delta}</td>
                <td className="px-4 py-2">{m.stock_after}</td>
                <td className="px-4 py-2 text-slate-500">{m.reason || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
