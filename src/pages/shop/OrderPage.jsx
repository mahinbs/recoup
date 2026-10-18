import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Check, Printer } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';
import { PAYMENT_LABELS, PAY_STATUS_LABELS, STATUS_LABELS, formatINR, readSavedOrders } from '../../components/shop/shopUtils';

const STEPS = ['pending_payment', 'processing', 'shipped', 'delivered'];
const input = 'w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30';
const fmtDate = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '');

function Lookup() {
  const navigate = useNavigate();
  const [n, setN] = useState('');
  const [t, setT] = useState('');
  const saved = readSavedOrders();
  const go = (num, tok) => navigate(`/order?n=${encodeURIComponent(num.trim())}&t=${encodeURIComponent(tok.trim())}`);
  return (
    <div className="mx-auto max-w-xl space-y-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (n.trim() && t.trim()) go(n, t);
        }}
        className="space-y-4 rounded-2xl border border-slate-200 p-6"
        data-testid="order-lookup"
      >
        <h2 className="text-xl font-bold text-primary-dark">Find your order</h2>
        <div>
          <label htmlFor="lk-n" className="mb-1 block text-sm font-semibold text-slate-700">Order number</label>
          <input id="lk-n" placeholder="RC-1001" className={input} value={n} onChange={(e) => setN(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lk-t" className="mb-1 block text-sm font-semibold text-slate-700">Tracking code</label>
          <input id="lk-t" className={input} value={t} onChange={(e) => setT(e.target.value)} />
          <p className="mt-1 text-xs text-slate-500">You will find both in your order confirmation.</p>
        </div>
        <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-primary-dark">Track order</button>
      </form>
      {saved.length > 0 && (
        <div>
          <h2 className="mb-3 text-lg font-bold text-primary-dark">Recent orders on this device</h2>
          <ul className="space-y-2">
            {saved.map((o) => (
              <li key={o.order_number}>
                <button type="button" onClick={() => go(o.order_number, o.tracking_token)} className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-primary">
                  <span className="font-semibold text-primary-dark">{o.order_number}</span>
                  <span className="text-sm text-slate-500">{fmtDate(o.placed_at)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Timeline({ status }) {
  if (status === 'cancelled' || status === 'refunded') {
    return (
      <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" data-testid="order-status">
        This order is {STATUS_LABELS[status].toLowerCase()}.
      </p>
    );
  }
  const idx = STEPS.indexOf(status);
  return (
    <ol className="grid grid-cols-4 gap-2" data-testid="order-status" data-status={status} aria-label="Order progress">
      {STEPS.map((s, i) => {
        const done = i <= idx;
        return (
          <li key={s} className="text-center" aria-current={i === idx ? 'step' : undefined}>
            <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${done ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
              {done ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
            </div>
            <p className={`mt-2 text-xs ${done ? 'font-semibold text-primary-dark' : 'text-slate-400'}`}>{STATUS_LABELS[s]}</p>
          </li>
        );
      })}
    </ol>
  );
}

function Totals({ o }) {
  return (
    <dl className="ml-auto w-full max-w-xs space-y-1 text-sm">
      <div className="flex justify-between"><dt className="text-slate-600">Subtotal</dt><dd>{formatINR(o.subtotal)}</dd></div>
      {Number(o.discount) > 0 && <div className="flex justify-between text-emerald-700"><dt>Discount{o.coupon_code ? ` (${o.coupon_code})` : ''}</dt><dd>-{formatINR(o.discount)}</dd></div>}
      <div className="flex justify-between"><dt className="text-slate-600">Shipping</dt><dd>{Number(o.shipping) > 0 ? formatINR(o.shipping) : 'Free'}</dd></div>
      <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-bold text-primary-dark"><dt>Total</dt><dd data-testid="order-total">{formatINR(o.total)}</dd></div>
    </dl>
  );
}

function Address({ a }) {
  if (!a) return null;
  const lines = [a.line1, a.line2, [a.city, a.state].filter(Boolean).join(', '), a.pincode].filter(Boolean);
  return <address className="not-italic text-sm text-slate-600">{lines.map((l, i) => <div key={i}>{l}</div>)}</address>;
}

function Tracking({ n, t, notice }) {
  const { data: o, loading, error } = useAsync(async () => {
    if (!supabase) return null;
    const { data, error: err } = await supabase.rpc('get_order_tracking', { p_order_number: n, p_token: t });
    if (err) throw err;
    return data || null;
  }, [n, t]);

  if (loading) return <p className="py-16 text-center text-slate-400" role="status">Loading your order...</p>;
  if (error || !o) {
    return (
      <div className="mx-auto max-w-xl text-center" data-testid="order-not-found">
        <h2 className="text-xl font-bold text-primary-dark">We could not find that order</h2>
        <p className="mt-2 text-slate-500">Please check the order number and tracking code and try again.</p>
        <Link to="/order" className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-dark">Try again</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <style>{`@media print { body * { visibility: hidden !important; } #receipt, #receipt * { visibility: visible !important; } #receipt { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; } .no-print { display: none !important; } }`}</style>
      {notice && <div role="status" data-testid="order-notice" className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{notice}</div>}
      <div>
        <h1 className="text-3xl font-bold text-primary-dark">Order <span data-testid="order-number">{o.order_number}</span></h1>
        <p className="mt-1 text-slate-500">Placed on {fmtDate(o.created_at)}. Thank you, {o.customer_name}.</p>
      </div>
      <Timeline status={o.status} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-2 font-bold text-primary-dark">Payment</h2>
          <p className="text-sm text-slate-600">{PAYMENT_LABELS[o.payment_method] || o.payment_method}</p>
          <p className="text-sm text-slate-600">Status: <span className="font-semibold" data-testid="payment-status">{PAY_STATUS_LABELS[o.payment_status] || o.payment_status}</span></p>
          {(o.courier || o.tracking_number) && (
            <div className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-600">
              {o.courier && <p>Courier: <span className="font-semibold">{o.courier}</span></p>}
              {o.tracking_number && <p>Tracking number: <span className="font-semibold">{o.tracking_number}</span></p>}
            </div>
          )}
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-2 font-bold text-primary-dark">Shipping address</h2>
          <Address a={o.shipping_address} />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 font-bold text-primary-dark">Items</h2>
        <ul className="divide-y divide-slate-100">
          {(o.items || []).map((it, i) => (
            <li key={i} className="flex justify-between gap-4 py-2 text-sm">
              <span className="text-slate-700">{it.name} <span className="text-slate-400">x {it.qty}</span></span>
              <span className="font-semibold">{formatINR(it.line_total)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4"><Totals o={o} /></div>
      </div>

      {o.invoice_number && (
        <div>
          <div className="no-print mb-3 flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary-dark">Receipt</h2>
            <button type="button" onClick={() => window.print()} data-testid="print-receipt" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-slate-50">
              <Printer className="h-4 w-4" aria-hidden="true" /> Print receipt
            </button>
          </div>
          <div id="receipt" className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800" data-testid="receipt">
            <div className="flex flex-wrap justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-2xl font-bold text-primary">Recoup</p>
                <p className="text-sm text-slate-500">Payment receipt</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-bold">{o.invoice_number}</p>
                <p className="text-slate-500">Issued {fmtDate(o.invoice_issued_at)}</p>
                <p className="text-slate-500">Order {o.order_number}</p>
              </div>
            </div>
            <div className="grid gap-4 py-4 sm:grid-cols-2">
              <div><p className="text-xs font-semibold uppercase text-slate-400">Billed to</p><p className="text-sm font-semibold">{o.customer_name}</p><Address a={o.shipping_address} /></div>
              <div className="text-sm"><p className="text-xs font-semibold uppercase text-slate-400">Payment</p><p>{PAYMENT_LABELS[o.payment_method] || o.payment_method}</p><p>{PAY_STATUS_LABELS[o.payment_status] || o.payment_status}</p></div>
            </div>
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-slate-200 text-xs uppercase text-slate-500"><th className="py-2">Item</th><th className="py-2 text-right">Qty</th><th className="py-2 text-right">Price</th><th className="py-2 text-right">Amount</th></tr></thead>
              <tbody>
                {(o.items || []).map((it, i) => (
                  <tr key={i} className="border-b border-slate-100"><td className="py-2">{it.name}</td><td className="py-2 text-right">{it.qty}</td><td className="py-2 text-right">{formatINR(it.unit_price)}</td><td className="py-2 text-right">{formatINR(it.line_total)}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4"><Totals o={o} /></div>
          </div>
        </div>
      )}
      <p className="no-print text-sm text-slate-500">Questions about your order? <Link to="/contact" className="font-semibold text-primary hover:underline">Contact us</Link> and quote your order number.</p>
    </div>
  );
}

export default function OrderPage() {
  const [params] = useSearchParams();
  const location = useLocation();
  const n = params.get('n');
  const t = params.get('t');

  useEffect(() => {
    document.title = n ? `Order ${n} | Recoup Shop` : 'Track your order | Recoup Shop';
  }, [n]);

  return (
    <div className="min-h-screen bg-white pt-24">
      <Section className="py-8">
        {n && t ? (
          <Tracking key={`${n}-${t}`} n={n} t={t} notice={location.state?.notice} />
        ) : (
          <>
            <h1 className="mb-8 text-center text-3xl font-bold text-primary-dark">Track your order</h1>
            <Lookup />
          </>
        )}
      </Section>
    </div>
  );
}
