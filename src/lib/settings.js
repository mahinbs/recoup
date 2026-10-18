import { useEffect, useState } from 'react';
import { supabase } from './supabase';

let cache = null;
let inflight = null;

/** Loads all public site settings once (HMS link, Razorpay key id, WhatsApp number...). */
export function loadPublicSettings(force = false) {
  if (!supabase) return Promise.resolve({});
  if (cache && !force) return Promise.resolve(cache);
  if (!inflight || force) {
    inflight = supabase
      .from('site_settings')
      .select('key,value')
      .eq('is_public', true)
      .then(({ data, error }) => {
        inflight = null;
        if (error) return cache || {};
        cache = Object.fromEntries((data || []).map((r) => [r.key, r.value]));
        return cache;
      });
  }
  return inflight;
}

export function useSettings() {
  const [settings, setSettings] = useState(cache || {});
  useEffect(() => {
    let alive = true;
    loadPublicSettings().then((s) => alive && setSettings(s));
    return () => {
      alive = false;
    };
  }, []);
  return settings;
}
