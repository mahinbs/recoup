import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const KEY = 'recoup_cart_v1';
const MAX_QTY = 20;

const noop = () => {};
const CartContext = createContext({ items: [], count: 0, subtotal: 0, total: 0, add: noop, remove: noop, setQty: noop, clear: noop });

function read() {
  try {
    if (typeof window === 'undefined') return [];
    const raw = JSON.parse(window.localStorage.getItem(KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((i) => i && i.product_id && Number(i.qty) > 0)
      .map((i) => ({ ...i, price: Number(i.price) || 0, qty: Math.min(MAX_QTY, Math.floor(Number(i.qty))) }));
  } catch {
    return [];
  }
}

const clamp = (qty, max) => {
  let q = Math.floor(Number(qty));
  if (!Number.isFinite(q) || q < 1) q = 1;
  q = Math.min(q, MAX_QTY);
  if (max !== null && max !== undefined && Number.isFinite(Number(max)) && Number(max) >= 1) q = Math.min(q, Number(max));
  return q;
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(read);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setItems(read());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const add = useCallback((product, qty = 1) => {
    const id = product.product_id || product.id;
    if (!id) return;
    const max = product.max !== undefined ? product.max : product.track_inventory === false ? null : (product.stock_qty ?? null);
    const image = product.image || (Array.isArray(product.images) ? product.images[0] : null) || null;
    setItems((prev) => {
      const existing = prev.find((i) => i.product_id === id);
      if (existing) {
        return prev.map((i) => (i.product_id === id ? { ...i, price: Number(product.price ?? product.price_inr ?? i.price), max, qty: clamp(i.qty + qty, max) } : i));
      }
      return [
        ...prev,
        { product_id: id, slug: product.slug, name: product.name, price: Number(product.price ?? product.price_inr) || 0, image, max, qty: clamp(qty, max) },
      ];
    });
  }, []);

  const remove = useCallback((productId) => setItems((prev) => prev.filter((i) => i.product_id !== productId)), []);
  const setQty = useCallback(
    (productId, qty) => setItems((prev) => prev.map((i) => (i.product_id === productId ? { ...i, qty: clamp(qty, i.max) } : i))),
    []
  );
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    return { items, count: items.reduce((s, i) => s + i.qty, 0), subtotal, total: subtotal, add, remove, setQty, clear };
  }, [items, add, remove, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
