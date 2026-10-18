// Sends queued emails from public.notification_outbox using Resend (https://resend.com).
// Call it on a schedule (Supabase Cron every minute) or from a database webhook.
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async () => {
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const key = Deno.env.get('RESEND_API_KEY');
  const from = Deno.env.get('MAIL_FROM') ?? 'RECOUP Health <connect@recoup.health>';
  if (!key) return new Response(JSON.stringify({ error: 'RESEND_API_KEY is not set' }), { status: 500 });

  const { data: rows, error } = await supabase
    .from('notification_outbox').select('*').eq('status', 'queued').order('created_at').limit(25);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  let sent = 0, failed = 0;
  for (const m of rows ?? []) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [m.to_email], subject: m.subject, text: m.body }),
    });
    if (res.ok) {
      sent++;
      await supabase.from('notification_outbox').update({ status: 'sent', sent_at: new Date().toISOString(), error: null }).eq('id', m.id);
    } else {
      failed++;
      await supabase.from('notification_outbox').update({ status: 'failed', error: (await res.text()).slice(0, 500) }).eq('id', m.id);
    }
  }
  return new Response(JSON.stringify({ sent, failed }), { headers: { 'Content-Type': 'application/json' } });
});
