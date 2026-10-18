import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { firstImage, formatINR, stockInfo } from './shopUtils';

export function Price({ product, className = '' }) {
  const price = Number(product.price_inr);
  const compare = Number(product.compare_at_price_inr);
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-bold text-primary-dark">{formatINR(price)}</span>
      {compare > price && <s className="text-sm text-slate-400" aria-label={`Was ${formatINR(compare)}`}>{formatINR(compare)}</s>}
    </span>
  );
}

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const s = stockInfo(product);
  const img = firstImage(product);

  const onAdd = () => {
    add(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article data-testid="product-card" className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <Link to={`/shop/${product.slug}`} className="relative block h-56 shrink-0 overflow-hidden bg-slate-100" aria-label={product.name}>
        {img ? (
          <img src={img} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-400">No image</div>
        )}
        {s.out && <span className="absolute left-3 top-3 rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-white">Out of stock</span>}
        {s.low && <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Only {s.qty} left</span>}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-primary-dark">
          <Link to={`/shop/${product.slug}`} className="hover:text-primary">{product.name}</Link>
        </h3>
        {product.short_description && <p className="mt-2 line-clamp-2 text-sm text-slate-500">{product.short_description}</p>}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Price product={product} />
          <button
            type="button"
            data-testid="add-to-cart"
            disabled={s.out}
            onClick={onAdd}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {added ? <Check className="h-4 w-4" aria-hidden="true" /> : <ShoppingCart className="h-4 w-4" aria-hidden="true" />}
            <span aria-live="polite">{added ? 'Added' : 'Add'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
