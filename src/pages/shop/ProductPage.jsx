import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Check, ChevronLeft, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import ProductCard, { Price } from '../../components/shop/ProductCard';
import { stockInfo } from '../../components/shop/shopUtils';
import { useCart } from '../../context/CartContext';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';

function Stars({ value, size = 'h-4 w-4' }) {
  return (
    <span className="inline-flex" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`${size} ${n <= Math.round(value) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
      ))}
    </span>
  );
}

function ReviewForm({ productId }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return setMsg({ ok: false, text: 'Please enter your name.' });
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.from('product_reviews').insert({
      product_id: productId,
      reviewer_name: name.trim().slice(0, 100),
      rating,
      body: body.trim().slice(0, 2000) || null,
      approved: false,
    });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: 'We could not save your review. Please try again.' });
    setMsg({ ok: true, text: 'Thank you. Your review will appear after our team approves it.' });
    setName('');
    setBody('');
    setRating(5);
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6" data-testid="review-form">
      <h3 className="text-lg font-bold text-primary-dark">Write a review</h3>
      <div>
        <label htmlFor="rv-name" className="mb-1 block text-sm font-semibold text-slate-700">Your name</label>
        <input id="rv-name" maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
      </div>
      <fieldset>
        <legend className="mb-1 text-sm font-semibold text-slate-700">Rating</legend>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" aria-label={`${n} star${n > 1 ? 's' : ''}`} aria-pressed={rating === n} onClick={() => setRating(n)} className="rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <Star className={`h-7 w-7 ${n <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
            </button>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="rv-body" className="mb-1 block text-sm font-semibold text-slate-700">Comment</label>
        <textarea id="rv-body" rows={4} maxLength={2000} value={body} onChange={(e) => setBody(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
      </div>
      {msg && (
        <p role="status" className={`text-sm ${msg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{msg.text}</p>
      )}
      <button type="submit" disabled={busy} className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-primary-dark disabled:opacity-50">
        {busy ? 'Sending...' : 'Submit review'}
      </button>
    </form>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  return <ProductView key={slug} slug={slug} />;
}

function ProductView({ slug }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);

  const { data, loading, error } = useAsync(async () => {
    if (!supabase) return { product: null };
    const p = await supabase.from('products').select('*').eq('slug', slug).eq('published', true).maybeSingle();
    if (p.error) throw p.error;
    if (!p.data) return { product: null };
    const [rv, rel] = await Promise.all([
      supabase.from('product_reviews').select('*').eq('product_id', p.data.id).eq('approved', true).order('created_at', { ascending: false }),
      p.data.category_id
        ? supabase.from('products').select('*').eq('published', true).eq('category_id', p.data.category_id).neq('id', p.data.id).limit(4)
        : Promise.resolve({ data: [] }),
    ]);
    return { product: p.data, reviews: rv.data || [], related: rel.data || [] };
  }, [slug]);

  const product = data?.product;

  useEffect(() => {
    document.title = product ? `${product.name} | Recoup Shop` : 'Product | Recoup Shop';
  }, [product]);

  const s = product ? stockInfo(product) : null;
  const maxQty = s?.tracked ? Math.max(1, Math.min(20, s.qty)) : 20;
  const reviews = data?.reviews || [];
  const avg = reviews.length ? reviews.reduce((a, r) => a + r.rating, 0) / reviews.length : 0;
  const images = Array.isArray(product?.images) ? product.images : [];

  const onAdd = () => {
    add(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  let body;
  if (loading) {
    body = <p className="py-24 text-center text-slate-400" role="status">Loading...</p>;
  } else if (error || !supabase || !product) {
    body = (
      <div className="py-20 text-center" data-testid="product-not-found">
        <h1 className="text-2xl font-bold text-primary-dark">We could not find that product</h1>
        <p className="mt-2 text-slate-500">It may have been removed or is not available right now.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-dark">Back to the shop</Link>
      </div>
    );
  } else {
    body = (
      <>
        <Link to="/shop" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> All products
        </Link>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-slate-100">
              {images[active] ? (
                <img src={images[active]} alt={product.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Product images">
                {images.map((u, i) => (
                  <button key={u + i} type="button" aria-label={`Show image ${i + 1}`} aria-pressed={i === active} onClick={() => setActive(i)} className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${i === active ? 'border-primary' : 'border-transparent'}`}>
                    <img src={u} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary-dark">{product.name}</h1>
            {reviews.length > 0 && (
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Stars value={avg} /> <span>{avg.toFixed(1)} ({reviews.length} review{reviews.length > 1 ? 's' : ''})</span>
              </p>
            )}
            <Price product={product} className="mt-4 text-2xl" />
            {product.short_description && <p className="mt-4 text-slate-600">{product.short_description}</p>}
            <p className="mt-4 text-sm font-semibold" data-testid="stock-state">
              {s.out ? <span className="text-red-600">Out of stock</span> : s.low ? <span className="text-amber-700">Only {s.qty} left</span> : <span className="text-emerald-700">In stock</span>}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-slate-200" role="group" aria-label="Quantity">
                <button type="button" aria-label="Decrease quantity" disabled={s.out || qty <= 1} onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 disabled:opacity-40"><Minus className="h-4 w-4" /></button>
                <span className="w-8 text-center font-semibold" data-testid="qty-value">{qty}</span>
                <button type="button" aria-label="Increase quantity" disabled={s.out || qty >= maxQty} onClick={() => setQty((q) => Math.min(maxQty, q + 1))} className="p-3 disabled:opacity-40"><Plus className="h-4 w-4" /></button>
              </div>
              <button type="button" data-testid="add-to-cart" disabled={s.out} onClick={onAdd} className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-white shadow-md hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {added ? <Check className="h-5 w-5" aria-hidden="true" /> : <ShoppingCart className="h-5 w-5" aria-hidden="true" />}
                <span aria-live="polite">{added ? 'Added to cart' : 'Add to cart'}</span>
              </button>
              {added && <Link to="/cart" className="text-sm font-semibold text-primary hover:underline">View cart</Link>}
            </div>
            {product.description_html && (
              <div className="prose mt-8 max-w-none text-slate-700" data-testid="product-description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description_html) }} />
            )}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary-dark">Customer reviews</h2>
            {reviews.length === 0 ? (
              <p className="text-slate-500">No reviews yet. Be the first to share your experience.</p>
            ) : (
              <ul className="space-y-4" data-testid="review-list">
                {reviews.map((r) => (
                  <li key={r.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary-dark">{r.reviewer_name}</span>
                      <Stars value={r.rating} />
                    </div>
                    <span className="sr-only">{r.rating} out of 5</span>
                    {r.body && <p className="mt-2 whitespace-pre-line text-sm text-slate-600">{r.body}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ReviewForm productId={product.id} />
        </div>

        {data.related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-primary-dark">Related products</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {data.related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <Section className="py-8">{body}</Section>
    </div>
  );
}
