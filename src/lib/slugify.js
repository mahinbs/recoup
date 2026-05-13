/** URL-safe slug from a display title */
export function slugifyTitle(title) {
  const base = String(title || 'post')
    .toLowerCase()
    .trim()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || 'post';
}

/** Ensure slug is unique among existing ids */
export function uniqueSlug(base, existingIds, excludeId) {
  let s = base || 'post';
  const taken = new Set(existingIds.filter((id) => id !== excludeId));
  if (!taken.has(s)) return s;
  let n = 2;
  while (taken.has(`${s}-${n}`)) n += 1;
  return `${s}-${n}`;
}
