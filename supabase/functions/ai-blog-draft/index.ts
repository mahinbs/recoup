// Drafts a blog article with OpenAI for an admin to review and edit. Admin only.
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  const apiKey = Deno.env.get('OPENAI_API_KEY');
  if (!apiKey) return json({ error: 'AI drafting is not configured' }, 503);

  // only signed-in admins may call this
  const authed = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
    global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } },
  });
  const { data: isAdmin } = await authed.rpc('is_admin');
  if (isAdmin !== true) return json({ error: 'Not allowed' }, 403);

  const { topic, audience } = await req.json().catch(() => ({}));
  if (!topic || String(topic).length > 300) return json({ error: 'Enter a topic (up to 300 characters)' }, 400);

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You write patient-education articles for RECOUP Health, an integrative rehabilitation clinic in Bangalore. Plain, warm English. Educational only: never diagnose or promise cures. Return JSON with keys title, excerpt, body_html (use h2, h3, p, ul, li only), meta_title, meta_description.' },
        { role: 'user', content: `Topic: ${topic}\nAudience: ${audience ?? 'general public'}` },
      ],
      response_format: { type: 'json_object' },
    }),
  });
  if (!res.ok) return json({ error: 'The AI service did not respond' }, 502);
  const out = await res.json();
  try { return json(JSON.parse(out.choices[0].message.content)); } catch { return json({ error: 'Unexpected AI reply' }, 502); }
});
