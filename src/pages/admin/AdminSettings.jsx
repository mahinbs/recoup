import React, { useState } from "react";
import { KeyRound, ShieldCheck } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { cn } from "../../lib/utils";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/25 focus:border-primary outline-none transition-all text-slate-800";

export default function AdminSettings() {
  const { isPasswordProtected, changePassword, clearPasswordProtection } =
    useAdminAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [clearConfirmOpen, setClearConfirmOpen] = useState(false);

  const resetForm = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage(null);
    if (isPasswordProtected && !currentPassword.trim()) {
      setError("Enter your current password.");
      return;
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }
    setBusy(true);
    try {
      const wasProtected = isPasswordProtected;
      const result = await changePassword({
        currentPassword,
        newPassword,
      });
      if (!result.ok) {
        setError(result.error || "Something went wrong.");
        return;
      }
      setMessage(
        wasProtected
          ? "Password updated successfully."
          : "Admin password is now set. Sign in with it next time.",
      );
      resetForm();
    } finally {
      setBusy(false);
    }
  };

  const runClearProtection = () => {
    clearPasswordProtection();
    setMessage(
      "Password protection removed. Login accepts any password again.",
    );
    resetForm();
    setClearConfirmOpen(false);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-primary-dark tracking-tight">
          Settings
        </h1>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Admin password is stored only in this browser (hashed). When a
          password is set, sign-in requires it. Connect a backend for
          production-grade auth.
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 max-w-xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <KeyRound className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary-dark">
              Admin password
            </h2>
          </div>
        </div>

        {message && (
          <div className="mb-5 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden />
            {message}
          </div>
        )}
        {error && (
          <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="admin-current-password"
            >
              Current password
            </label>
            <input
              id="admin-current-password"
              type="password"
              className={cn(
                inputClass,
                "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-90",
              )}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
              disabled={!isPasswordProtected}
              required={isPasswordProtected}
              placeholder={
                isPasswordProtected
                  ? "Enter your current password"
                  : "No password on file yet"
              }
            />
            {!isPasswordProtected && (
              <p className="text-xs text-slate-400">
                After you set a password, you’ll use this field when changing
                it.
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="admin-new-password"
            >
              New password
            </label>
            <input
              id="admin-new-password"
              type="password"
              className={inputClass}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              placeholder="At least 8 characters"
            />
            <p className="text-xs text-slate-400">Minimum 8 characters.</p>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="admin-confirm-password"
            >
              Confirm new password
            </label>
            <input
              id="admin-confirm-password"
              type="password"
              className={inputClass}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
              placeholder="Re-enter new password"
            />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={busy}
              className="rounded-xl px-6 py-2.5 font-bold shadow-primary/15"
            >
              {isPasswordProtected ? "Update password" : "Set password"}
            </Button>
          </div>
        </form>

        {isPasswordProtected && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-3">
              Troubleshooting or demo reset
            </p>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => {
                setError("");
                setMessage(null);
                setClearConfirmOpen(true);
              }}
              className="rounded-xl border-slate-200 px-5 font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              Remove password protection
            </Button>
          </div>
        )}
      </section>

      <ConfirmDialog
        open={clearConfirmOpen}
        onOpenChange={setClearConfirmOpen}
        title="Remove password protection?"
        description="Anyone will be able to open the admin panel with any password until you set a new one. Your session stays active."
        confirmLabel="Remove protection"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={runClearProtection}
      />
    </div>
  );
}
