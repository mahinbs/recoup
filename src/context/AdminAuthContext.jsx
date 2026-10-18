import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';

const AdminAuthContext = createContext(null);

/**
 * Real admin sign-in through Supabase Auth. A signed-in user is an admin only when their
 * verified email is on the `admin_allowlist` table (checked on the server by is_admin()).
 */
export function AdminAuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(Boolean(supabase));

  const checkAdmin = useCallback(async (s) => {
    if (!supabase || !s) {
      setIsAdmin(false);
      return;
    }
    const { data, error } = await supabase.rpc('is_admin');
    setIsAdmin(!error && data === true);
  }, []);

  useEffect(() => {
    if (!supabase) return undefined;
    let alive = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!alive) return;
      setSession(data.session);
      await checkAdmin(data.session);
      if (alive) setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      // never await supabase calls inside this callback
      setTimeout(() => checkAdmin(s), 0);
    });
    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, [checkAdmin]);

  const login = useCallback(
    async (password = '', email = '') => {
      if (!supabase) return { ok: false, error: 'The backend is not configured.' };
      const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) return { ok: false, error: 'Invalid email or password.' };
      setSession(data.session);
      await checkAdmin(data.session);
      return { ok: true };
    },
    [checkAdmin]
  );

  const sendMagicLink = useCallback(async (email) => {
    if (!supabase) return { ok: false, error: 'The backend is not configured.' };
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    return error ? { ok: false, error: error.message } : { ok: true };
  }, []);

  const logout = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  }, []);

  const changePassword = useCallback(async ({ newPassword }) => {
    if (!supabase) return { ok: false, error: 'The backend is not configured.' };
    if (!newPassword || newPassword.length < 8) {
      return { ok: false, error: 'New password must be at least 8 characters.' };
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    return error ? { ok: false, error: error.message } : { ok: true };
  }, []);

  const value = useMemo(
    () => ({
      authed: isAdmin,
      isAdmin,
      loading,
      session,
      user: session?.user ?? null,
      login,
      sendMagicLink,
      logout,
      changePassword,
    }),
    [isAdmin, loading, session, login, sendMagicLink, logout, changePassword]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
