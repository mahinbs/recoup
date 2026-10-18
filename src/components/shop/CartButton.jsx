import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartButton({ className = '' }) {
  const { count } = useCart();
  return (
    <Link
      to="/cart"
      aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
      data-testid="cart-button"
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-dark transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <ShoppingCart className="h-5 w-5" aria-hidden="true" />
      {count > 0 && (
        <span data-testid="cart-count" className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold leading-none text-white">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </Link>
  );
}
