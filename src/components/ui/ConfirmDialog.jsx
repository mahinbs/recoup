import React, { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './Button';

/**
 * Accessible confirmation modal (controlled). Renders via portal to `document.body`.
 *
 * @param {boolean} open
 * @param {(open: boolean) => void} onOpenChange - Pass `false` to close (backdrop, Escape, Cancel).
 * @param {string} title
 * @param {string} [description]
 * @param {() => void} onConfirm - Called when the user confirms; dialog closes afterward.
 * @param {string} [confirmLabel]
 * @param {string} [cancelLabel]
 * @param {'default' | 'danger'} [variant] - `danger` styles the confirm action as destructive.
 * @param {string} [className] - Optional class on the card panel.
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  className,
}) {
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange(false);
  };

  const content = (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-[2px] transition-opacity"
        aria-label="Dismiss"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        className={cn(
          'relative w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xl shadow-slate-300/40',
          className
        )}
      >
        <div className="flex gap-4">
          {variant === 'danger' && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertTriangle className="h-5 w-5" strokeWidth={2} aria-hidden />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h2 id={titleId} className="text-lg font-bold text-primary-dark leading-snug">
              {title}
            </h2>
            {description ? (
              <p id={descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => onOpenChange(false)}
            className="rounded-xl border-slate-200 px-5 py-2.5 text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={variant === 'danger' ? 'danger' : 'primary'}
            size="md"
            onClick={handleConfirm}
            className={cn(
              'rounded-xl px-5 py-2.5 font-bold',
              variant === 'danger' ? 'shadow-red-600/20' : 'shadow-primary/15'
            )}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
