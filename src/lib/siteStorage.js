import { defaultBlogPosts } from '../data/defaultBlogPosts';

const KEYS = {
  blogs: 'recoup_admin_blogs',
  homeMeta: 'recoup_site_home_meta',
  robots: 'recoup_site_robots_txt',
};

export const DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://recoup.health/sitemap.xml
`;

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function normalizePost(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const id = String(raw.id || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  if (!id) return null;
  return {
    id,
    category: String(raw.category || 'General').trim() || 'General',
    title: String(raw.title || '').trim() || 'Untitled',
    excerpt: String(raw.excerpt || '').trim(),
    date: String(raw.date || '').trim() || '—',
    readTime: String(raw.readTime || '').trim() || '5 min read',
    image: String(raw.image || '').trim(),
    bodyHtml: typeof raw.bodyHtml === 'string' ? raw.bodyHtml : '',
    metaTitle: typeof raw.metaTitle === 'string' ? raw.metaTitle.trim() : '',
    metaDescription: typeof raw.metaDescription === 'string' ? raw.metaDescription.trim() : '',
  };
}

export function loadBlogs() {
  if (typeof localStorage === 'undefined') return defaultBlogPosts;
  const raw = localStorage.getItem(KEYS.blogs);
  if (!raw) return defaultBlogPosts;
  const parsed = safeParse(raw, null);
  if (!Array.isArray(parsed) || parsed.length === 0) return defaultBlogPosts;
  const normalized = parsed.map(normalizePost).filter(Boolean);
  return normalized.length ? normalized : defaultBlogPosts;
}

export function saveBlogsToStorage(posts) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEYS.blogs, JSON.stringify(posts));
}

/** Homepage meta override; null = use built-in defaults */
export function loadHomeMeta() {
  if (typeof localStorage === 'undefined') return null;
  const raw = localStorage.getItem(KEYS.homeMeta);
  if (!raw) return null;
  const parsed = safeParse(raw, null);
  if (!parsed || typeof parsed !== 'object') return null;
  const title = typeof parsed.title === 'string' ? parsed.title.trim() : '';
  const description = typeof parsed.description === 'string' ? parsed.description.trim() : '';
  if (!title || !description) return null;
  return { title, description };
}

export function saveHomeMetaToStorage(meta) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEYS.homeMeta, JSON.stringify(meta));
}

export function clearHomeMetaStorage() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(KEYS.homeMeta);
}

export function loadRobotsTxt() {
  if (typeof localStorage === 'undefined') return DEFAULT_ROBOTS_TXT;
  const raw = localStorage.getItem(KEYS.robots);
  if (typeof raw === 'string' && raw.trim()) return raw;
  return DEFAULT_ROBOTS_TXT;
}

export function saveRobotsTxtToStorage(content) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEYS.robots, content);
}

export function clearRobotsStorage() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(KEYS.robots);
}

/** SEO for a single blog URL slug */
export function getBlogSeoFromStorage(slug) {
  const post = loadBlogs().find((p) => p.id === slug);
  if (!post) return null;
  if (post.metaTitle && post.metaDescription) {
    return { title: post.metaTitle, description: post.metaDescription };
  }
  return null;
}
