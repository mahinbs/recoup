import { defaultBlogPosts } from '../data/defaultBlogPosts';

/**
 * In-memory cache of content loaded from Supabase. SiteContentContext fills it;
 * the SEO helper (pageMeta.js) reads it synchronously.
 */
export const DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://recoup.health/sitemap.xml
`;

const cache = { blogs: defaultBlogPosts, homeMeta: null, robots: DEFAULT_ROBOTS_TXT };

export function setSiteCache(next) {
  Object.assign(cache, next);
}

export function loadBlogs() {
  return cache.blogs;
}

export function loadHomeMeta() {
  const m = cache.homeMeta;
  if (!m || typeof m !== 'object') return null;
  const title = typeof m.title === 'string' ? m.title.trim() : '';
  const description = typeof m.description === 'string' ? m.description.trim() : '';
  return title && description ? { title, description } : null;
}

export function loadRobotsTxt() {
  return cache.robots || DEFAULT_ROBOTS_TXT;
}

/** SEO for a single blog URL slug */
export function getBlogSeoFromStorage(slug) {
  const post = cache.blogs.find((p) => p.id === slug);
  if (!post) return null;
  if (post.metaTitle && post.metaDescription) {
    return { title: post.metaTitle, description: post.metaDescription };
  }
  return null;
}
