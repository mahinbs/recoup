import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import { useCart } from '../../context/CartContext';
import { useSettings } from '../../lib/settings';
import { supabase } from '../../lib/supabase';
import { formatINR, loadRazorpay, saveOrder } from '../../components/shop/shopUtils';

const input = 'w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30';
const inputErr = 'border-red-400';

function Field({ id, label, error, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-slate-700">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const EMPTY = { name: '', email: '', phone: '', line1: '', line2: '', city: '', state: '', pincode: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  const digits = f.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 13) e.phone = 'Please enter a valid 10-digit mobile number.';
  if (!f.line1.trim()) e.line1 = 'Please enter your address.';
  if (!f.city.trim()) e.city = 'Please enter your city.';
  if (!f.state.trim()) e.state = 'Please enter your state.';
  if (!/^[1-9]\d{5}$/.test(f.pincode.trim())) e.pincode = 'Enter a 6-digit PIN code.';
  return e;
}

export default function CartPage() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const settings = useSettings();
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [couponInput, setCouponInput] = useState('');
  const [coupon, setCoupon] = useState(null); // { code, percent }
  const [couponMsg, setCouponMsg] = useState(null);
  const [couponBusy, setCouponBusy] = useState(false);
  const [payment, setPayment] = useState('');
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState('');

  const codOn = settings.cod_enabled !== false && settings.cod_enabled !== 'false';
  const rzpKey = typeof settings.razorpay_key_id === 'string' ? settings.razorpay_key_id.trim() : '';
  const options = [
    ...(codOn ? [{ value: 'cod', label: 'Cash on delivery' }] : []),
    { value: 'pay_later', label: 'Pay later - we will send a payment link' },
    ...(rzpKey ? [{ value: 'razorpay', label: 'Pay online (Razorpay)' }] : []),
  ];
  const chosen = options.some((o) => o.value === payment) ? payment : options[0].value;

  useEffect(() => {
    document.title = 'Your cart | Recoup Shop';
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const cls = (k) => `${input} ${errors[k] ? inputErr : ''}`;
  const aria = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? `c-${k}-err` : undefined });

  const applyCoupon = async () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    if (!supabase) return setCouponMsg({ ok: false, text: 'Coupons are not available right now.' });
    setCouponBusy(true);
    setCouponMsg(null);
    const { data, error } = await supabase.rpc('validate_coupon', { p_code: code });
    setCouponBusy(false);
    if (error || data === null || data === undefined) {
      setCoupon(null);
      return setCouponMsg({ ok: false, text: 'That coupon is not valid.' });
    }
    setCoupon({ code, percent: Number(data) });
    setCouponMsg({ ok: true, text: `${Number(data)}% off applied. The final amount is confirmed when you place the order.` });
  };

  const estDiscount = coupon ? Math.round(subtotal * coupon.percent) / 100 : 0;

  const startRazorpay = async (order) => {
    const notice = 'Your order is saved. Online payment is not available right now; we will contact you.';
    const to = `/order?n=${encodeURIComponent(order.order_number)}&t=${encodeURIComponent(order.tracking_token)}`;
    try {
      const created = await supabase.functions.invoke('razorpay-create-order', { body: { order_id: order.order_id, tracking_token: order.tracking_token } });
      if (created.error || !created.data) throw new Error('create failed');
      const d = created.data;
      const rzpOrderId = d.razorpay_order_id || d.order_id || d.id;
      const key = d.key || d.key_id || rzpKey;
      if (!rzpOrderId || !key) throw new Error('bad response');
      const Razorpay = await loadRazorpay();
      await new Promise((resolve, reject) => {
        const rzp = new Razorpay({
          key,
          order_id: rzpOrderId,
          amount: d.amount,
          currency: d.currency || 'INR',
          name: 'Recoup',
          description: `Order ${order.order_number}`,
          prefill: { name: form.name, email: form.email, contact: form.phone },
          theme: { color: '#862CD6' },
          handler: async (resp) => {
            try {
              const ver = await supabase.functions.invoke('razorpay-verify', {
                body: {
                  order_id: order.order_id,
                  tracking_token: order.tracking_token,
                  razorpay_payment_id: resp.razorpay_payment_id,
                  razorpay_order_id: resp.razorpay_order_id,
                  razorpay_signature: resp.razorpay_signature,
                },
              });
              if (ver.error) throw new Error('verify failed');
              resolve();
            } catch (err) {
              reject(err);
            }
          },
          modal: { ondismiss: () => reject(new Error('dismissed')) },
        });
        rzp.on?.('payment.failed', () => reject(new Error('failed')));
        rzp.open();
      });
      navigate(to);
    } catch (err) {
      const dismissed = err?.message === 'dismissed';
      navigate(to, { state: { notice: dismissed ? 'Your order is saved but payment is not complete. We will send you a payment link.' : notice } });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`c-${first}`)?.focus();
      return;
    }
    if (!supabase) return setServerError('Ordering is not available right now. Please try again later.');
    setBusy(true);
    const { data, error } = await supabase.rpc('place_order', {
      p_customer: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        address: { line1: form.line1.trim(), line2: form.line2.trim(), city: form.city.trim(), state: form.state.trim(), pincode: form.pincode.trim() },
      },
      p_items: items.map((i) => ({ product_id: i.product_id, qty: i.qty })),
      p_payment_method: chosen,
      p_coupon: coupon ? coupon.code : null,
    });
    if (error || !data) {
      setBusy(false);
      return setServerError(error?.message || 'We could not place your order. Please try again.');
    }
    saveOrder(data);
    clear();
    if (chosen === 'razorpay') {
      await startRazorpay(data);
      return;
    }
    navigate(`/order?n=${encodeURIComponent(data.order_number)}&t=${encodeURIComponent(data.tracking_token)}`);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Section className="py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-3xl font-bold text-primary-dark">Your cart</h1>
          {items.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-12 text-center" data-testid="cart-empty">
              <ShoppingCart className="mx-auto mb-3 h-10 w-10 text-primary/60" aria-hidden="true" />
              <h2 className="text-xl font-bold text-primary-dark">Your cart is empty</h2>
              <p className="mt-2 text-slate-500">Browse the shop and add something you like.</p>
              <Link to="/shop" className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-dark">Go to the shop</Link>
              <p className="mt-4 text-sm text-slate-500">Already ordered? <Link to="/order" className="font-semibold text-primary hover:underline">Track your order</Link></p>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
              <div className="space-y-8">
                <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200" data-testid="cart-items">
                  {items.map((i) => (
                    <li key={i.product_id} className="flex gap-4 p-4" data-testid="cart-line">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                        {i.image && <img src={i.image} alt="" className="h-full w-full object-cover" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link to={`/shop/${i.slug}`} className="line-clamp-2 font-semibold text-primary-dark hover:text-primary">{i.name}</Link>
                        <p className="text-sm text-slate-500">{formatINR(i.price)} each</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center rounded-full border border-slate-200" role="group" aria-label={`Quantity for ${i.name}`}>
                            <button type="button" aria-label="Decrease quantity" disabled={i.qty <= 1} onClick={() => setQty(i.product_id, i.qty - 1)} className="p-2 disabled:opacity-40"><Minus className="h-4 w-4" /></button>
                            <span className="w-8 text-center text-sm font-semibold" data-testid="line-qty">{i.qty}</span>
                            <button type="button" aria-label="Increase quantity" disabled={i.qty >= 20 || (i.max != null && i.qty >= i.max)} onClick={() => setQty(i.product_id, i.qty + 1)} className="p-2 disabled:opacity-40"><Plus className="h-4 w-4" /></button>
                          </div>
                          <button type="button" onClick={() => remove(i.product_id)} className="inline-flex items-center gap-1 text-sm text-red-600 hover:underline"><Trash2 className="h-4 w-4" /> Remove</button>
                        </div>
                      </div>
                      <div className="font-bold text-primary-dark">{formatINR(i.price * i.qty)}</div>
                    </li>
                  ))}
                </ul>

                <form id="checkout-form" onSubmit={submit} noValidate data-testid="checkout-form" className="space-y-6 rounded-2xl border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-primary-dark">Delivery details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field id="c-name" label="Full name" error={errors.name}><input id="c-name" autoComplete="name" className={cls('name')} value={form.name} onChange={set('name')} {...aria('name')} /></Field>
                    <Field id="c-email" label="Email" error={errors.email}><input id="c-email" type="email" autoComplete="email" className={cls('email')} value={form.email} onChange={set('email')} {...aria('email')} /></Field>
                    <Field id="c-phone" label="Mobile number" error={errors.phone}><input id="c-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={cls('phone')} value={form.phone} onChange={set('phone')} {...aria('phone')} /></Field>
                    <Field id="c-pincode" label="PIN code" error={errors.pincode}><input id="c-pincode" inputMode="numeric" maxLength={6} autoComplete="postal-code" className={cls('pincode')} value={form.pincode} onChange={set('pincode')} {...aria('pincode')} /></Field>
                    <Field id="c-line1" label="Address line 1" error={errors.line1} className="md:col-span-2"><input id="c-line1" autoComplete="address-line1" className={cls('line1')} value={form.line1} onChange={set('line1')} {...aria('line1')} /></Field>
                    <Field id="c-line2" label="Address line 2 (optional)" className="md:col-span-2"><input id="c-line2" autoComplete="address-line2" className={input} value={form.line2} onChange={set('line2')} /></Field>
                    <Field id="c-city" label="City" error={errors.city}><input id="c-city" autoComplete="address-level2" className={cls('city')} value={form.city} onChange={set('city')} {...aria('city')} /></Field>
                    <Field id="c-state" label="State" error={errors.state}><input id="c-state" autoComplete="address-level1" className={cls('state')} value={form.state} onChange={set('state')} {...aria('state')} /></Field>
                  </div>

                  <fieldset>
                    <legend className="mb-2 text-sm font-semibold text-slate-700">Payment</legend>
                    <div className="space-y-2">
                      {options.map((o) => (
                        <label key={o.value} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm ${chosen === o.value ? 'border-primary bg-primary/5' : 'border-slate-200'}`}>
                          <input type="radio" name="payment" value={o.value} checked={chosen === o.value} onChange={() => setPayment(o.value)} className="h-4 w-4 text-primary" data-testid={`pay-${o.value}`} />
                          {o.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </form>
              </div>

              <aside className="h-fit space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-28" aria-label="Order summary">
                <h2 className="text-xl font-bold text-primary-dark">Order summary</h2>
                <div>
                  <label htmlFor="coupon" className="mb-1 block text-sm font-semibold text-slate-700">Coupon code</label>
                  <div className="flex gap-2">
                    <input id="coupon" data-testid="coupon-input" className={`${input} uppercase`} value={couponInput} onChange={(e) => setCouponInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); applyCoupon(); } }} />
                    <button type="button" onClick={applyCoupon} disabled={couponBusy} data-testid="coupon-apply" className="shrink-0 rounded-xl border-2 border-primary px-4 text-sm font-medium text-primary hover:bg-white disabled:opacity-50">
                      {couponBusy ? 'Checking...' : 'Apply'}
                    </button>
                  </div>
                  {couponMsg && <p role="status" className={`mt-1 text-xs ${couponMsg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{couponMsg.text}</p>}
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-600">Subtotal</dt><dd data-testid="cart-subtotal" className="font-semibold">{formatINR(subtotal)}</dd></div>
                  {coupon && <div className="flex justify-between text-emerald-700"><dt>Discount ({coupon.percent}%)</dt><dd>-{formatINR(estDiscount)}</dd></div>}
                  <div className="flex justify-between"><dt className="text-slate-600">Shipping</dt><dd className="text-slate-500">Added when you order</dd></div>
                </dl>
                <p className="text-xs text-slate-500">Final prices, discount and shipping are confirmed by us when the order is placed.</p>
                {serverError && <div role="alert" data-testid="order-error" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{serverError}</div>}
                <button type="submit" form="checkout-form" disabled={busy} data-testid="place-order" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-md hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60">
                  {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />} {busy ? 'Placing order...' : 'Place order'}
                </button>
              </aside>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
