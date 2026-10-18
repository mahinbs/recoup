import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client. The URL and the public (anon / publishable) key are meant to be
 * visible in the browser; every table is protected by row-level security.
 * Never put the secret service_role key in this project.
 */
const url = import.meta.env.VITE_SUPABASE_URL || 'https://xophoqawuxmfkchlckbj.supabase.co';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(url && key);

export const supabase = isSupabaseConfigured
  ? createClient(url, key, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

/** Public URL of a file in a storage bucket. */
export function publicUrl(bucket, path) {
  if (!supabase || !path) return '';
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

/** Upload a file to a bucket (admin only) and return its public URL. */
export async function uploadFile(bucket, file, folder = '') {
  if (!supabase) throw new Error('Backend is not configured.');
  const safe = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '');
  const path = `${folder ? folder.replace(/\/+$/, '') + '/' : ''}${Date.now()}-${safe}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    contentType: file.type || undefined,
    cacheControl: '31536000',
    upsert: false,
  });
  if (error) throw error;
  return publicUrl(bucket, path);
}
