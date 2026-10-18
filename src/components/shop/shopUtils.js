export const formatINR = (n) => {
  const v = Number(n);
  if (!Number.isFinite(v)) return '₹0';
  const hasPaise = Math.round(v * 100) % 100 !== 0;
  return `₹${v.toLocaleString('en-IN', { minimumFractionDigits: hasPaise ? 2 : 0, maximumFractionDigits: 2 })}`;
};

export const ORDERS_KEY = 'recoup_orders_v1';

export function readSavedOrders() {
  try {
    const raw = JSON.parse(window.localStorage.getItem(ORDERS_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter((o) => o && o.order_number && o.tracking_token) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  try {
    const list = readSavedOrders().filter((o) => o.order_number !== order.order_number);
    list.unshift({ order_number: order.order_number, tracking_token: order.tracking_token, placed_at: new Date().toISOString() });
    window.localStorage.setItem(ORDERS_KEY, JSON.stringify(list.slice(0, 20)));
  } catch {
    /* storage unavailable */
  }
}

export function stockInfo(p) {
  const tracked = p.track_inventory !== false;
  const qty = Number(p.stock_qty ?? 0);
  return {
    tracked,
    out: tracked && qty <= 0,
    low: tracked && qty > 0 && qty <= Number(p.low_stock_threshold ?? 5),
    qty,
  };
}

export const firstImage = (p) => (Array.isArray(p?.images) && p.images.length ? p.images[0] : null);

export const STATUS_LABELS = {
  pending_payment: 'Pending payment',
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
};
export const PAYMENT_LABELS = { cod: 'Cash on delivery', razorpay: 'Online (Razorpay)', pay_later: 'Pay later (payment link)' };
export const PAY_STATUS_LABELS = { pending: 'Pending', paid: 'Paid', failed: 'Failed', refunded: 'Refunded' };

export function loadRazorpay() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('No window'));
    if (window.Razorpay) return resolve(window.Razorpay);
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    s.onload = () => (window.Razorpay ? resolve(window.Razorpay) : reject(new Error('Razorpay unavailable')));
    s.onerror = () => reject(new Error('Could not load Razorpay'));
    document.body.appendChild(s);
  });
}
