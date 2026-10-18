import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import { defaultBlogPosts } from '../data/defaultBlogPosts';
import { DEFAULT_ROBOTS_TXT, setSiteCache } from '../lib/siteStorage';

function notify() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('recoup:site-content'));
}

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

/** database row -> the shape the blog pages already use */
export function rowToPost(r) {
  return {
    id: r.slug,
    dbId: r.id,
    category: r.category,
    title: r.title,
    excerpt: r.excerpt || '',
    date: fmtDate(r.published_at),
    readTime: r.read_time || '5 min read',
    image: r.image_url || '',
    bodyHtml: r.body_html || '',
    metaTitle: r.meta_title || '',
    metaDescription: r.meta_description || '',
  };
}

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [blogs, setBlogs] = useState(defaultBlogPosts);
  const [blogsReady, setBlogsReady] = useState(!supabase);
  const [homeMeta, setHomeMeta] = useState(null);
  const [robotsTxt, setRobotsTxt] = useState(DEFAULT_ROBOTS_TXT);

  const refreshFromStorage = useCallback(async () => {
    if (!supabase) return;
    const [posts, settings] = await Promise.all([
      supabase.from('blog_posts').select('*').eq('published', true).order('published_at', { ascending: false }),
      supabase.from('site_settings').select('key,value').in('key', ['home_meta', 'robots_txt']),
    ]);
    if (!posts.error) {
      const list = (posts.data || []).map(rowToPost);
      setBlogs(list);
      setSiteCache({ blogs: list });
    }
    setBlogsReady(true);
    if (!settings.error) {
      const map = Object.fromEntries((settings.data || []).map((s) => [s.key, s.value]));
      const meta = map.home_meta && typeof map.home_meta === 'object' ? map.home_meta : null;
      const robots = typeof map.robots_txt === 'string' && map.robots_txt.trim() ? map.robots_txt : DEFAULT_ROBOTS_TXT;
      setHomeMeta(meta);
      setRobotsTxt(robots);
      setSiteCache({ homeMeta: meta, robots });
    }
    notify();
  }, []);

  useEffect(() => {
    refreshFromStorage();
  }, [refreshFromStorage]);

  const saveSetting = useCallback(
    async (key, value) => {
      if (!supabase) throw new Error('Backend is not configured.');
      const { error } = await supabase.from('site_settings').upsert({ key, value, is_public: true });
      if (error) throw error;
      await refreshFromStorage();
    },
    [refreshFromStorage]
  );

  const saveHomeMeta = useCallback((meta) => saveSetting('home_meta', meta), [saveSetting]);
  const resetHomeMeta = useCallback(() => saveSetting('home_meta', null), [saveSetting]);
  const saveRobotsTxt = useCallback((text) => saveSetting('robots_txt', text), [saveSetting]);
  const resetRobotsTxt = useCallback(() => saveSetting('robots_txt', null), [saveSetting]);

  const value = useMemo(
    () => ({
      blogs,
      blogsReady,
      homeMeta,
      saveHomeMeta,
      resetHomeMeta,
      robotsTxt,
      saveRobotsTxt,
      resetRobotsTxt,
      refreshFromStorage,
    }),
    [blogs, blogsReady, homeMeta, saveHomeMeta, resetHomeMeta, robotsTxt, saveRobotsTxt, resetRobotsTxt, refreshFromStorage]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider');
  return ctx;
}
