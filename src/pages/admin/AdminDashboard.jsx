import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Inbox, CalendarCheck, ShoppingBag, GraduationCap, Newspaper, Boxes, MessagesSquare, ClipboardList, Send, IndianRupee } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';

const card = (to, icon, label, value, hint) => ({ to, icon, label, value, hint });

export default function AdminDashboard() {
  const stats = useAsync(async () => {
    const { data, error } = await supabase.rpc('admin_stats');
    if (error) throw error;
    return data;
  }, []);
  const recent = useAsync(async () => {
    const [leads, appts] = await Promise.all([
      supabase.from('leads').select('id,kind,full_name,message,status,created_at').order('created_at', { ascending: false }).limit(5),
      supabase.from('appointment_requests').select('id,full_name,service,status,created_at').order('created_at', { ascending: false }).limit(5),
    ]);
    return { leads: leads.data || [], appts: appts.data || [] };
  }, []);
  const setup = useAsync(async () => {
    const { data } = await supabase.from('site_settings').select('key,value');
    const m = Object.fromEntries((data || []).map((r) => [r.key, r.value]));
    return [
      { ok: Array.isArray(m.notification_emails) && m.notification_emails.length > 0, label: 'Team email address for notifications', to: '/admin/config' },
      { ok: typeof m.hms_booking_url === 'string' && m.hms_booking_url.trim() !== '', label: 'Hospital booking (HMS) page address', to: '/admin/config' },
      { ok: typeof m.razorpay_key_id === 'string' && m.razorpay_key_id.trim() !== '', label: 'Razorpay key for online payments', to: '/admin/config' },
    ];
  }, []);

  const s = stats.data || {};
  const cards = [
    card('/admin/leads', Inbox, 'New leads', s.leads_new, `${s.leads_total ?? 0} in total`),
    card('/admin/appointments', CalendarCheck, 'New appointment requests', s.appointments_new),
    card('/admin/shop/orders', ShoppingBag, 'Open orders', s.orders_open, `${s.orders_total ?? 0} in total`),
    card('/admin/shop/orders', IndianRupee, 'Revenue (paid orders)', s.revenue_paid_inr === undefined ? undefined : `₹${Number(s.revenue_paid_inr).toLocaleString('en-IN')}`),
    card('/admin/shop/inventory', Boxes, 'Low-stock products', s.low_stock, `${s.products ?? 0} products`),
    card('/admin/academy/courses', GraduationCap, 'Courses', s.courses),
    card('/admin/newsletter', Newspaper, 'Newsletter subscribers', s.subscribers),
    card('/admin/ai/chats', MessagesSquare, 'Assistant conversations', s.chats),
    card('/admin/ai/quizzes', ClipboardList, 'Quiz results', s.quiz_results),
    card('/admin/outbox', Send, 'Emails waiting to send', s.outbox_queued),
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-dark">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">A live view of leads, bookings, orders and content.</p>

      {stats.error && <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{stats.error.message}</div>}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-testid="dashboard-cards">
        {cards.map(({ to, icon: Icon, label, value, hint }) => (
          <Link key={label} to={to} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-sm font-medium">{label}</span>
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-3 text-3xl font-bold text-primary-dark">{stats.loading ? '…' : value ?? 0}</p>
            {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-primary-dark">Set-up checklist</h2>
          <ul className="space-y-3">
            {(setup.data || []).map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="flex items-center gap-3 text-sm text-slate-700 hover:text-primary">
                  {c.ok ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Circle className="h-5 w-5 text-slate-300" />}
                  <span className={c.ok ? 'text-slate-500 line-through' : ''}>{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-primary-dark">Latest leads</h2>
          {(recent.data?.leads || []).length === 0 ? (
            <p className="text-sm text-slate-400">No leads yet.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {recent.data.leads.map((l) => (
                <li key={l.id} className="py-2 text-sm">
                  <span className="font-semibold text-slate-800">{l.full_name}</span>
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{l.kind}</span>
                  <p className="truncate text-slate-500">{l.message || '-'}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
