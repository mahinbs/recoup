import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { FileText, Globe, LogOut, LayoutDashboard, ExternalLink, Menu, X, Settings, Mail, Inbox, CalendarCheck, Quote, Newspaper, Send, SlidersHorizontal, GraduationCap, CalendarDays, Images, Package, Tags, Ticket, ShoppingBag, Boxes, Star, BookOpen, MessagesSquare, ClipboardList, KeyRound } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { cn } from '../../lib/utils';

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
    isActive
      ? 'bg-primary text-white shadow-md shadow-primary/20'
      : 'text-slate-600 hover:bg-slate-100 hover:text-primary-dark'
  }`;

const NAV = [
  { title: 'Overview', items: [{ to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true }] },
  {
    title: 'Leads',
    items: [
      { to: '/admin/leads', label: 'Leads', icon: Inbox },
      { to: '/admin/appointments', label: 'Appointments', icon: CalendarCheck },
      { to: '/admin/outbox', label: 'Email outbox', icon: Send },
    ],
  },
  {
    title: 'Website',
    items: [
      { to: '/admin/blogs', label: 'Blog posts', icon: FileText },
      { to: '/admin/testimonials', label: 'Testimonials', icon: Quote },
      { to: '/admin/newsletter', label: 'Newsletter', icon: Newspaper },
      { to: '/admin/site', label: 'Home SEO & robots', icon: Globe },
    ],
  },
  {
    title: 'Academy',
    items: [
      { to: '/admin/academy/courses', label: 'Courses', icon: GraduationCap },
      { to: '/admin/academy/batches', label: 'Batches & banners', icon: CalendarDays },
      { to: '/admin/academy/gallery', label: 'Photo gallery', icon: Images },
    ],
  },
  {
    title: 'Shop',
    items: [
      { to: '/admin/shop/products', label: 'Products', icon: Package },
      { to: '/admin/shop/categories', label: 'Categories', icon: Tags },
      { to: '/admin/shop/orders', label: 'Orders', icon: ShoppingBag },
      { to: '/admin/shop/inventory', label: 'Inventory', icon: Boxes },
      { to: '/admin/shop/coupons', label: 'Offers & coupons', icon: Ticket },
      { to: '/admin/shop/reviews', label: 'Reviews', icon: Star },
    ],
  },
  {
    title: 'AI & tools',
    items: [
      { to: '/admin/ai/knowledge', label: 'Knowledge base', icon: BookOpen },
      { to: '/admin/ai/chats', label: 'Assistant chats', icon: MessagesSquare },
      { to: '/admin/ai/quizzes', label: 'Quiz results', icon: ClipboardList },
    ],
  },
  {
    title: 'System',
    items: [
      { to: '/admin/config', label: 'Settings', icon: SlidersHorizontal },
      { to: '/admin/settings', label: 'My account', icon: KeyRound },
    ],
  },
];

export default function AdminLayout() {
  const { logout } = useAdminAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-md md:hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setMobileNavOpen(true)}
          className="rounded-xl text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </Button>
        <Link to="/admin" className="text-center" onClick={closeMobileNav}>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">RECOUP</span>
          <span className="text-base font-bold text-primary-dark leading-none">Admin</span>
        </Link>
        <span className="w-10" aria-hidden />
      </header>

      {/* Mobile backdrop */}
      <Button
        type="button"
        variant="ghost"
        aria-label="Close menu"
        className={cn(
          'fixed inset-0 z-[45] min-h-dvh w-full max-w-none !rounded-none border-0 !bg-slate-900/40 !p-0 shadow-none backdrop-blur-[2px] transition-opacity duration-200 hover:!bg-slate-900/50 md:!hidden',
          mobileNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeMobileNav}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-[100] flex w-[min(18rem,100vw-2rem)] max-w-[18rem] flex-col border-r border-slate-200 bg-white shadow-2xl transition-transform duration-200 ease-out md:relative md:inset-auto md:z-auto md:max-w-none md:w-64 md:shrink-0 md:translate-x-0 md:shadow-none md:min-h-screen',
          mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-6 md:block">
          <Link to="/admin" className="block min-w-0 flex-1" onClick={closeMobileNav}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">RECOUP</span>
            <span className="block text-lg font-bold text-primary-dark leading-tight">Admin</span>
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={closeMobileNav}
            className="shrink-0 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 md:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </Button>
        </div>
        <nav className="flex-1 space-y-5 overflow-y-auto p-4">
          {NAV.map((group) => (
            <div key={group.title}>
              <p className="mb-1 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">{group.title}</p>
              <div className="space-y-1">
                {group.items.map(({ to, label, icon: Icon, end }) => (
                  <NavLink key={to} to={to} end={end} className={linkClass} onClick={closeMobileNav}>
                    <Icon className="h-5 w-5 shrink-0" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="space-y-2 border-t border-slate-100 p-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              closeMobileNav();
              window.open('/', '_blank', 'noopener,noreferrer');
            }}
            className="h-auto w-full justify-start gap-3 rounded-xl py-3 text-left text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            <ExternalLink className="h-5 w-5 shrink-0" />
            View live site
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              closeMobileNav();
              logout();
            }}
            className="h-auto w-full justify-start gap-3 rounded-xl py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            Sign out
          </Button>
        </div>
      </aside>

      <main className="min-h-0 max-h-screen flex-1 overflow-auto pt-14 md:pt-0">
        <div className="max-w-6xl p-6 lg:p-10">
          <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <LayoutDashboard className="h-4 w-4" />
            Control panel
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
