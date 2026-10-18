import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';

export default function AcademyGallerySection() {
  const { data } = useAsync(async () => {
    if (!supabase) return [];
    const { data: rows, error } = await supabase
      .from('gallery_items')
      .select('id,title,caption,image_url,event_name,event_date,sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .order('event_date', { ascending: false, nullsFirst: false });
    if (error) throw error;
    return rows || [];
  }, []);

  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);
  const items = data || [];

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus?.();
  }, []);
  const step = useCallback((d) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (active === null) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [active, close, step]);

  if (items.length === 0) return null;
  const current = active !== null ? items[active] : null;

  return (
    <section className="w-full bg-[#F8F9FA] py-20 px-6" aria-labelledby="academy-gallery-title" data-testid="academy-gallery">
      <div className="container mx-auto">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary block mb-4">Gallery</span>
        <h2 id="academy-gallery-title" className="font-sans text-3xl md:text-4xl text-slate-900 mb-10 max-w-2xl">Moments from RECOUP Academy</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.id}>
              <button
                type="button"
                data-testid="gallery-item"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setActive(i);
                }}
                aria-label={`View photo: ${it.title}`}
                className="group block w-full overflow-hidden rounded-2xl bg-slate-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img src={it.image_url} alt={it.caption || it.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </button>
              <p className="mt-2 text-sm font-medium text-slate-700">{it.title}</p>
              {it.event_name && <p className="text-xs text-slate-500">{it.event_name}</p>}
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={current.title} data-testid="gallery-lightbox" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <button ref={closeRef} type="button" aria-label="Close" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Next photo" onClick={() => step(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}
          <figure className="max-h-full max-w-4xl text-center">
            <img src={current.image_url} alt={current.caption || current.title} className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-4 text-white">
              <p className="font-semibold">{current.title}</p>
              {current.caption && <p className="text-sm text-white/80">{current.caption}</p>}
              {current.event_name && <p className="text-xs text-white/60">{current.event_name}</p>}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
