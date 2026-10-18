// Creates a Razorpay order for an existing shop order. The amount always comes from the database.
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const { order_id, tracking_token } = await req.json().catch(() => ({}));
  const keyId = Deno.env.get('RAZORPAY_KEY_ID'), keySecret = Deno.env.get('RAZORPAY_KEY_SECRET');
  if (!keyId || !keySecret) return json({ error: 'Online payment is not configured' }, 503);

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const { data: order } = await supabase.from('orders').select('id,order_number,total_inr,payment_status,tracking_token')
    .eq('id', order_id).eq('tracking_token', tracking_token).maybeSingle();
  if (!order || order.payment_status === 'paid') return json({ error: 'Order not found' }, 404);

  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: { Authorization: 'Basic ' + btoa(`${keyId}:${keySecret}`), 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: Math.round(Number(order.total_inr) * 100), currency: 'INR', receipt: order.order_number }),
  });
  const rp = await res.json();
  if (!res.ok) return json({ error: 'Could not start the payment' }, 502);
  await supabase.from('orders').update({ razorpay_order_id: rp.id }).eq('id', order.id);
  return json({ key_id: keyId, razorpay_order_id: rp.id, amount: rp.amount, currency: rp.currency, order_number: order.order_number });
});
