const STORAGE_KEY = 'recoup_admin_password_hash';

export function getStoredPasswordHash() {
  if (typeof localStorage === 'undefined') return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v && /^[0-9a-f]{64}$/i.test(v) ? v.toLowerCase() : null;
}

export function setStoredPasswordHash(hexLowercase) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, hexLowercase);
}

export function clearStoredPasswordHash() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

/** SHA-256 of UTF-8 string, hex lowercase (for client-only admin gate). */
export async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
