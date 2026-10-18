import React, { useEffect, useState } from 'react';
import { Printer, X } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';
import { Button } from '../../../components/ui/Button';
import { PAYMENT_LABELS, PAY_STATUS_LABELS, STATUS_LABELS, formatINR } from '../../../components/shop/shopUtils';

const STATUSES = Object.keys(STATUS_LABELS);
const PAY_STATUSES = Object.keys(PAY_STATUS_LABELS);
const inputClass = 'w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30';
const fmt = (d) => (d ? new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '-');
const invoiceOf = (o) => (Array.isArray(o.invoices) ? o.invoices[0] : o.invoices) || null;

const badge = (s) =>
  ({
    delivered: 'bg-emerald-50 text-emerald-700',
    paid: 'bg-emerald-50 text-emerald-700',
    shipped: 'bg-sky-50 text-sky-700',
    processing: 'bg-primary/10 text-primary',
    pending_payment: 'bg-amber-50 text-amber-700',
    pending: 'bg-amber-50 text-amber-700',
    cancelled: 'bg-red-50 text-red-700',
    failed: 'bg-red-50 text-red-700',
    refunded: 'bg-slate-100 text-slate-600',
  })[s] || 'bg-slate-100 text-slate-600';

function OrderDrawer({ order, onClose, onSaved }) {
  const [f, setF] = useState({
    status: order.status,
    payment_status: order.payment_status,
    courier: order.courier || '',
    tracking_number: order.tracking_number || '',
    admin_notes: order.admin_notes || '',
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const inv = invoiceOf(order);
  const addr = order.shipping_address || {};

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const save = async (patch) => {
    setBusy(true);
    setMsg(null);
    const payload = patch || {
      status: f.status,
      payment_status: f.payment_status,
      courier: f.courier.trim() || null,
      tracking_number: f.tracking_number.trim() || null,
      admin_notes: f.admin_notes.trim() || null,
    };
    const { error } = await supabase.from('orders').update(payload).eq('id', order.id);
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error.message });
    setMsg({ ok: true, text: 'Saved.' });
    if (patch) setF((s) => ({ ...s, ...patch }));
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-[200] flex justify-end bg-slate-900/50 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Order ${order.order_number}`}>
      <style>{`@media print { body * { visibility: hidden !important; } #invoice-print, #invoice-print * { visibility: visible !important; } #invoice-print { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; } }`}</style>
      <div className="h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary-dark">{order.order_number}</h2>
            <p className="text-sm text-slate-500">{fmt(order.created_at)}</p>
          </div>
          <button type="button" aria-label="Close" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X className="h-5 w-5" /></button>
        </div>

        <section className="mb-5 rounded-xl bg-slate-50 p-4 text-sm">
          <p className="font-semibold">{order.customer_name}</p>
          <p>{order.email}</p>
          <p>{order.phone}</p>
          <p className="mt-2 text-slate-600">{[addr.line1, addr.line2, addr.city, addr.state, addr.pincode].filter(Boolean).join(', ')}</p>
        </section>

        <section className="mb-5">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">Items</h3>
          <ul className="divide-y divide-slate-100 text-sm">
            {(order.order_items || []).map((it) => (
              <li key={it.id} className="flex justify-between gap-3 py-2"><span>{it.product_name} <span className="text-slate-400">x {it.qty} at {formatINR(it.unit_price_inr)}</span></span><span className="font-semibold">{formatINR(it.line_total_inr)}</span></li>
            ))}
          </ul>
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatINR(order.subtotal_inr)}</dd></div>
            <div className="flex justify-between"><dt>Discount{order.coupon_code ? ` (${order.coupon_code})` : ''}</dt><dd>-{formatINR(order.discount_inr)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{formatINR(order.shipping_inr)}</dd></div>
            <div className="flex justify-between border-t pt-2 font-bold"><dt>Total</dt><dd>{formatINR(order.total_inr)}</dd></div>
          </dl>
          <p className="mt-3 text-sm text-slate-600">Payment method: {PAYMENT_LABELS[order.payment_method] || order.payment_method}</p>
          {order.razorpay_payment_id && <p className="text-xs text-slate-500">Razorpay payment: {order.razorpay_payment_id}</p>}
        </section>

        <section className="mb-5 grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="o-status" className="mb-1 block text-sm font-semibold">Order status</label>
            <select id="o-status" data-testid="order-status-select" className={inputClass} value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })}>
              {STATUSES.map((s) => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="o-pay" className="mb-1 block text-sm font-semibold">Payment status</label>
            <select id="o-pay" className={inputClass} value={f.payment_status} onChange={(e) => setF({ ...f, payment_status: e.target.value })}>
              {PAY_STATUSES.map((s) => <option key={s} value={s}>{PAY_STATUS_LABELS[s]}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="o-courier" className="mb-1 block text-sm font-semibold">Courier</label>
            <input id="o-courier" className={inputClass} value={f.courier} onChange={(e) => setF({ ...f, courier: e.target.value })} />
          </div>
          <div>
            <label htmlFor="o-track" className="mb-1 block text-sm font-semibold">Tracking number</label>
            <input id="o-track" className={inputClass} value={f.tracking_number} onChange={(e) => setF({ ...f, tracking_number: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="o-notes" className="mb-1 block text-sm font-semibold">Internal notes</label>
            <textarea id="o-notes" rows={3} className={inputClass} value={f.admin_notes} onChange={(e) => setF({ ...f, admin_notes: e.target.value })} />
          </div>
        </section>

        {msg && <p role="status" className={`mb-3 text-sm ${msg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{msg.text}</p>}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button type="button" disabled={busy} onClick={() => save()} data-testid="save-order">Save changes</Button>
          {order.payment_status !== 'paid' && (
            <Button type="button" variant="outline" disabled={busy} onClick={() => save({ payment_status: 'paid' })} data-testid="mark-paid">Mark as paid</Button>
          )}
        </div>

        {inv && (
          <section>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Invoice</h3>
              <Button type="button" variant="ghost" size="sm" onClick={() => window.print()} className="gap-2"><Printer className="h-4 w-4" /> Print invoice</Button>
            </div>
            <div id="invoice-print" className="rounded-xl border border-slate-200 p-4 text-sm" data-testid="invoice-view">
              <div className="flex justify-between border-b pb-3">
                <div><p className="text-lg font-bold text-primary">Recoup</p><p className="text-slate-500">Tax invoice / receipt</p></div>
                <div className="text-right"><p className="font-bold">{inv.invoice_number}</p><p className="text-slate-500">{fmt(inv.issued_at)}</p><p className="text-slate-500">Order {order.order_number}</p></div>
              </div>
              <div className="py-3">
                <p className="font-semibold">{order.customer_name}</p>
                <p className="text-slate-600">{[addr.line1, addr.line2, addr.city, addr.state, addr.pincode].filter(Boolean).join(', ')}</p>
              </div>
              <table className="w-full text-left">
                <thead><tr className="border-b text-xs uppercase text-slate-500"><th className="py-1">Item</th><th className="py-1 text-right">Qty</th><th className="py-1 text-right">Amount</th></tr></thead>
                <tbody>
                  {(order.order_items || []).map((it) => (
                    <tr key={it.id} className="border-b border-slate-100"><td className="py-1">{it.product_name}</td><td className="py-1 text-right">{it.qty}</td><td className="py-1 text-right">{formatINR(it.line_total_inr)}</td></tr>
                  ))}
                </tbody>
              </table>
              <dl className="ml-auto mt-3 w-48 space-y-1">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatINR(order.subtotal_inr)}</dd></div>
                <div className="flex justify-between"><dt>Discount</dt><dd>-{formatINR(order.discount_inr)}</dd></div>
                <div className="flex justify-between"><dt>Shipping</dt><dd>{formatINR(order.shipping_inr)}</dd></div>
                <div className="flex justify-between border-t pt-1 font-bold"><dt>Total paid</dt><dd>{formatINR(inv.amount_inr)}</dd></div>
              </dl>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default function AdminOrders() {
  const [filter, setFilter] = useState('');
  const [openId, setOpenId] = useState(null);
  const { data: orders, error, loading, reload } = useAsync(async () => {
    if (!supabase) throw new Error('Backend is not configured.');
    let q = supabase.from('orders').select('*, order_items(*), invoices(*)').order('created_at', { ascending: false }).limit(300);
    if (filter) q = q.eq('status', filter);
    const res = await q;
    if (res.error) throw res.error;
    return res.data;
  }, [filter]);

  const open = (orders || []).find((o) => o.id === openId);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">Orders</h1>
          <p className="mt-1 text-sm text-slate-500">Open an order to update its status, add tracking and mark it as paid.</p>
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          Status
          <select data-testid="order-filter" className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {STATUSES.map((s) => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
          </select>
        </label>
      </div>
      {error && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error.message}</div>}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Payment</th><th className="px-4 py-3">Date</th><th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-400">Loading...</td></tr>}
            {!loading && orders && orders.length === 0 && <tr><td colSpan={7} className="px-4 py-10 text-center text-slate-400" data-testid="empty-state">No orders yet.</td></tr>}
            {(orders || []).map((o) => (
              <tr key={o.id} data-testid="admin-order-row" className="hover:bg-slate-50/60">
                <td className="px-4 py-3 font-semibold">{o.order_number}</td>
                <td className="px-4 py-3"><div>{o.customer_name}</div><div className="text-xs text-slate-400">{o.email}</div></td>
                <td className="px-4 py-3">{formatINR(o.total_inr)}</td>
                <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge(o.status)}`}>{STATUS_LABELS[o.status]}</span></td>
                <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge(o.payment_status)}`}>{PAY_STATUS_LABELS[o.payment_status]}</span></td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-500">{fmt(o.created_at)}</td>
                <td className="px-4 py-3 text-right"><button type="button" onClick={() => setOpenId(o.id)} data-testid="open-order" className="rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && <OrderDrawer key={open.id + open.updated_at} order={open} onClose={() => setOpenId(null)} onSaved={reload} />}
    </div>
  );
}
