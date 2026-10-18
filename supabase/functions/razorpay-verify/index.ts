// Verifies Razorpay's payment signature, then marks the order paid (the database creates the invoice).
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

async function hmacHex(secret: string, message: string) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const { order_id, tracking_token, razorpay_payment_id, razorpay_order_id, razorpay_signature } = await req.json().catch(() => ({}));
  const secret = Deno.env.get('RAZORPAY_KEY_SECRET');
  if (!secret) return json({ error: 'Online payment is not configured' }, 503);

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const { data: order } = await supabase.from('orders').select('id,razorpay_order_id,tracking_token')
    .eq('id', order_id).eq('tracking_token', tracking_token).maybeSingle();
  if (!order || order.razorpay_order_id !== razorpay_order_id) return json({ error: 'Order not found' }, 404);

  const expected = await hmacHex(secret, `${razorpay_order_id}|${razorpay_payment_id}`);
  if (expected !== razorpay_signature) {
    await supabase.from('orders').update({ payment_status: 'failed' }).eq('id', order.id);
    return json({ error: 'Payment could not be verified' }, 400);
  }
  await supabase.from('orders').update({
    payment_status: 'paid', status: 'processing', razorpay_payment_id,
  }).eq('id', order.id);
  return json({ ok: true });
});
