const STORAGE_KEY = 'recoup_contact_messages';

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function normalizeMessage(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const id = String(raw.id || '').trim();
  if (!id) return null;
  return {
    id,
    fullName: String(raw.fullName || '').trim(),
    organization: String(raw.organization || '').trim(),
    email: String(raw.email || '').trim(),
    phone: String(raw.phone || '').trim(),
    message: String(raw.message || '').trim(),
    from: String(raw.from || '').trim(),
    section: String(raw.section || '').trim(),
    createdAt: String(raw.createdAt || '').trim() || new Date().toISOString(),
    read: Boolean(raw.read),
  };
}

export function loadContactMessages() {
  if (typeof localStorage === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  const parsed = safeParse(raw, null);
  if (!Array.isArray(parsed)) return [];
  return parsed.map(normalizeMessage).filter(Boolean);
}

export function saveContactMessages(messages) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function addContactMessage(payload) {
  const messages = loadContactMessages();
  const entry = normalizeMessage({
    ...payload,
    id: payload.id || `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: payload.createdAt || new Date().toISOString(),
    read: false,
  });
  if (!entry) return null;
  const next = [entry, ...messages];
  saveContactMessages(next);
  return entry;
}

export function deleteContactMessage(id) {
  const next = loadContactMessages().filter((m) => m.id !== id);
  saveContactMessages(next);
  return next;
}

export function markContactMessageRead(id, read = true) {
  const next = loadContactMessages().map((m) =>
    m.id === id ? { ...m, read: Boolean(read) } : m
  );
  saveContactMessages(next);
  return next;
}

export function clearContactMessages() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
