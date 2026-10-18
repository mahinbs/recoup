import React, { useEffect, useMemo, useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { Section } from '../../components/ui/Section';
import ProductCard from '../../components/shop/ProductCard';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';

export default function Shop() {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');

  useEffect(() => {
    document.title = 'Shop | Recoup';
  }, []);

  const { data, error, loading } = useAsync(async () => {
    if (!supabase) return { products: [], categories: [] };
    const [p, c] = await Promise.all([
      supabase.from('products').select('*').eq('published', true).order('created_at', { ascending: false }),
      supabase.from('product_categories').select('*').order('sort_order', { ascending: true }),
    ]);
    if (p.error) throw p.error;
    return { products: p.data || [], categories: c.data || [] };
  }, []);

  const products = useMemo(() => data?.products || [], [data]);
  const categories = data?.categories || [];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== 'all' && p.category_id !== cat) return false;
      if (!term) return true;
      return `${p.name} ${p.short_description || ''} ${p.sku || ''}`.toLowerCase().includes(term);
    });
  }, [products, cat, q]);

  const chip = (active) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
      active ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary'
    }`;

  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="section-tint pb-10 pt-16 text-center md:pt-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wide text-primary">Recoup Shop</span>
          <h1 className="mb-4 font-bold text-primary-dark">Products for your recovery</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Practical supplements and recovery essentials chosen by our clinical team, delivered across India.</p>
        </div>
      </Section>

      <Section className="section-white py-10">
        <div className="mx-auto max-w-7xl">
          {!supabase || error ? (
            <div className="rounded-2xl bg-slate-50 p-10 text-center" data-testid="shop-unavailable">
              <ShoppingBag className="mx-auto mb-3 h-10 w-10 text-primary/60" aria-hidden="true" />
              <h2 className="text-xl font-bold text-primary-dark">The shop is not available right now</h2>
              <p className="mt-2 text-slate-500">Please check back in a little while.</p>
            </div>
          ) : loading ? (
            <p className="py-16 text-center text-slate-400" role="status">Loading products...</p>
          ) : products.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-12 text-center" data-testid="shop-empty">
              <ShoppingBag className="mx-auto mb-3 h-10 w-10 text-primary/60" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-primary-dark">Our shop is opening soon</h2>
              <p className="mx-auto mt-2 max-w-md text-slate-500">We are getting our first products ready. Check back shortly.</p>
            </div>
          ) : (
            <>
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                  <button type="button" className={chip(cat === 'all')} aria-pressed={cat === 'all'} onClick={() => setCat('all')}>All</button>
                  {categories.map((c) => (
                    <button key={c.id} type="button" className={chip(cat === c.id)} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                      {c.name}
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-72">
                  <label htmlFor="shop-search" className="sr-only">Search products</label>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input
                    id="shop-search"
                    type="search"
                    data-testid="shop-search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search products"
                    className="w-full rounded-full border border-slate-200 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              {filtered.length === 0 ? (
                <p className="py-16 text-center text-slate-500">No products match your search.</p>
              ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Section>
    </div>
  );
}
