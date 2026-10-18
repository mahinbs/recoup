import { submitContactToSheet } from './submitContactToSheet';
import { supabase } from './supabase';

const legacySheetOn = (import.meta.env.VITE_LEGACY_SHEET || 'on') !== 'off';

/**
 * Saves a lead in the Supabase `leads` table (primary). The legacy Google Sheet copy
 * is kept as a secondary, best-effort copy so the client's current process keeps working.
 * kind: contact | academy_inquiry | booking | callback | brochure | chat | other
 */
export async function submitInquiry(payload, kind = 'contact', extra = {}) {
  let saved = false;
  if (supabase) {
    const { error } = await supabase.from('leads').insert({
      kind,
      full_name: String(payload.fullName || '').trim().slice(0, 200),
      email: String(payload.email || '').trim() || null,
      phone: String(payload.phone || '').trim() || null,
      organization: String(payload.organization || '').trim() || null,
      message: String(payload.message || '').trim() || null,
      source_page: String(payload.from || '').slice(0, 200) || null,
      source_section: String(payload.section || '').slice(0, 200) || null,
      ...extra,
    });
    if (error) throw error;
    saved = true;
  }
  if (legacySheetOn) {
    try {
      await submitContactToSheet({ ...payload, from: payload.from, section: payload.section });
      saved = true;
    } catch (err) {
      if (!saved) throw err;
    }
  }
  if (!saved) throw new Error('No place to save the message');
}
