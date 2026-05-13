import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMeta } from './pageMeta';

/**
 * Syncs <title> and meta description with the current route (SPA).
 * Re-runs when site content changes (blogs, homepage meta) via custom event.
 */
export default function RouteDocumentMeta() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const sync = () => {
      const { title, description } = getPageMeta(pathname);
      document.title = title;

      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    };

    sync();
    window.addEventListener('recoup:site-content', sync);
    return () => window.removeEventListener('recoup:site-content', sync);
  }, [pathname]);

  return null;
}
