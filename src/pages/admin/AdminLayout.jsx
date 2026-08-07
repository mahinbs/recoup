import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { FileText, Globe, LogOut, LayoutDashboard, ExternalLink, Menu, X, Settings, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { cn } from '../../lib/utils';

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
    isActive
      ? 'bg-primary text-white shadow-md shadow-primary/20'
      : 'text-slate-600 hover:bg-slate-100 hover:text-primary-dark'
  }`;

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
        <Link to="/admin/blogs" className="text-center" onClick={closeMobileNav}>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">Recoup</span>
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
          <Link to="/admin/blogs" className="block min-w-0 flex-1" onClick={closeMobileNav}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Recoup</span>
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
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          <NavLink to="/admin/blogs" className={linkClass} end={false} onClick={closeMobileNav}>
            <FileText className="h-5 w-5 shrink-0" />
            Blog posts
          </NavLink>
          <NavLink to="/admin/messages" className={linkClass} onClick={closeMobileNav}>
            <Mail className="h-5 w-5 shrink-0" />
            Messages
          </NavLink>
          <NavLink to="/admin/site" className={linkClass} onClick={closeMobileNav}>
            <Globe className="h-5 w-5 shrink-0" />
            Site & robots
          </NavLink>
          <NavLink to="/admin/settings" className={linkClass} onClick={closeMobileNav}>
            <Settings className="h-5 w-5 shrink-0" />
            Settings
          </NavLink>
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
        <div className="max-w-5xl p-6 lg:p-10">
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
