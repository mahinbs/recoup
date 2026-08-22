const SHEET_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL ||
  'https://script.google.com/macros/s/AKfycbzhSqyL3gTdVTO8rid8p_BTHz_9cyDAaMj448Mf9v_0IN5VkDvqRBhxANFCjqw5FrJ7_g/exec';

export async function submitContactToSheet(payload) {
  if (!SHEET_WEBAPP_URL) {
    throw new Error('Google Sheets web app URL is not configured.');
  }

  const body = JSON.stringify({
    fullName: payload.fullName || '',
    organization: payload.organization || '',
    email: payload.email || '',
    phone: payload.phone || '',
    message: payload.message || '',
    from: payload.from || '',
    section: payload.section || '',
  });

  try {
    const response = await fetch(SHEET_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body,
      redirect: 'follow',
    });

    if (response.type === 'opaque' || response.ok) {
      return true;
    }

    throw new Error(`Sheet request failed (${response.status})`);
  } catch (error) {
    // Apps Script web apps often 302 in a way that surfaces as a TypeError
    // in the browser even after the row was written successfully.
    if (error instanceof TypeError) {
      return true;
    }
    throw error;
  }
}
