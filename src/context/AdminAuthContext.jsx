import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  clearStoredPasswordHash,
  getStoredPasswordHash,
  setStoredPasswordHash,
  sha256Hex,
} from '../lib/adminPassword';

const AUTH_KEY = 'recoup_admin_auth';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [authed, setAuthed] = useState(() => {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(AUTH_KEY) === '1';
  });

  const [isPasswordProtected, setIsPasswordProtected] = useState(() => !!getStoredPasswordHash());

  const login = useCallback(async (password = '') => {
    const stored = getStoredPasswordHash();
    if (stored) {
      const hash = await sha256Hex(password);
      if (hash !== stored) {
        return { ok: false, error: 'Invalid password.' };
      }
    }
    localStorage.setItem(AUTH_KEY, '1');
    setAuthed(true);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  }, []);

  const changePassword = useCallback(async ({ currentPassword, newPassword }) => {
    const stored = getStoredPasswordHash();
    if (stored) {
      const cur = await sha256Hex(currentPassword);
      if (cur !== stored) {
        return { ok: false, error: 'Current password is incorrect.' };
      }
    }
    if (!newPassword || newPassword.length < 8) {
      return { ok: false, error: 'New password must be at least 8 characters.' };
    }
    const newHash = await sha256Hex(newPassword);
    setStoredPasswordHash(newHash);
    setIsPasswordProtected(true);
    return { ok: true };
  }, []);

  const clearPasswordProtection = useCallback(() => {
    clearStoredPasswordHash();
    setIsPasswordProtected(false);
  }, []);

  const value = useMemo(
    () => ({
      authed,
      login,
      logout,
      isPasswordProtected,
      changePassword,
      clearPasswordProtection,
    }),
    [authed, login, logout, isPasswordProtected, changePassword, clearPasswordProtection]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return ctx;
}
