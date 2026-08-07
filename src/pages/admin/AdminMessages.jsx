import React, { useMemo, useState } from 'react';
import { Mail, Trash2, Eye, EyeOff, Inbox } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import {
  loadContactMessages,
  deleteContactMessage,
  markContactMessageRead,
  clearContactMessages,
} from '../../lib/contactStorage';

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export default function AdminMessages() {
  const [messages, setMessages] = useState(() => loadContactMessages());
  const [selectedId, setSelectedId] = useState(null);
  const [confirmConfig, setConfirmConfig] = useState(null);

  const selected = useMemo(
    () => messages.find((m) => m.id === selectedId) || null,
    [messages, selectedId]
  );

  const unreadCount = useMemo(
    () => messages.filter((m) => !m.read).length,
    [messages]
  );

  const openMessage = (msg) => {
    setSelectedId(msg.id);
    if (!msg.read) {
      setMessages(markContactMessageRead(msg.id, true));
    }
  };

  const handleDelete = (id) => {
    setConfirmConfig({
      title: 'Delete message?',
      description: 'This contact message will be removed from this browser.',
      confirmLabel: 'Delete',
      onConfirm: () => {
        const next = deleteContactMessage(id);
        setMessages(next);
        if (selectedId === id) setSelectedId(null);
        setConfirmConfig(null);
      },
    });
  };

  const handleClearAll = () => {
    setConfirmConfig({
      title: 'Clear all messages?',
      description: 'All contact messages stored in this browser will be deleted.',
      confirmLabel: 'Clear all',
      onConfirm: () => {
        clearContactMessages();
        setMessages([]);
        setSelectedId(null);
        setConfirmConfig(null);
      },
    });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight">
            Contact messages
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            Submissions from “Send Us a Message” — stored in this browser only.
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-bold">
                {unreadCount} unread
              </span>
            )}
          </p>
        </div>
        {messages.length > 0 && (
          <Button type="button" variant="outline" onClick={handleClearAll} className="shrink-0">
            Clear all
          </Button>
        )}
      </div>

      {messages.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">No messages yet</p>
          <p className="text-sm text-slate-400 mt-1">
            When someone submits the contact form, it will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-2">
            {messages.map((msg) => (
              <button
                key={msg.id}
                type="button"
                onClick={() => openMessage(msg)}
                className={`w-full text-left rounded-xl border p-4 transition-all ${
                  selectedId === msg.id
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span
                    className={`font-semibold text-sm truncate ${
                      msg.read ? 'text-slate-700' : 'text-primary-dark'
                    }`}
                  >
                    {msg.fullName || 'Anonymous'}
                  </span>
                  {!msg.read && (
                    <span className="shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
                  )}
                </div>
                <p className="text-xs text-slate-500 truncate">{msg.email || 'No email'}</p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  {msg.message || '—'}
                </p>
                <p className="text-[11px] text-slate-400 mt-2">{formatDate(msg.createdAt)}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            {selected ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-primary-dark">
                      {selected.fullName || 'Anonymous'}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">{formatDate(selected.createdAt)}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title={selected.read ? 'Mark unread' : 'Mark read'}
                      onClick={() =>
                        setMessages(markContactMessageRead(selected.id, !selected.read))
                      }
                      className="rounded-xl"
                    >
                      {selected.read ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="Delete"
                      onClick={() => handleDelete(selected.id)}
                      className="rounded-xl text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <dt className="text-slate-400 font-medium mb-0.5">Email</dt>
                    <dd className="text-slate-800 break-all">
                      {selected.email ? (
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-primary hover:underline inline-flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {selected.email}
                        </a>
                      ) : (
                        '—'
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium mb-0.5">Phone</dt>
                    <dd className="text-slate-800">{selected.phone || '—'}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium mb-0.5">Organization</dt>
                    <dd className="text-slate-800">{selected.organization || '—'}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium mb-0.5">Source</dt>
                    <dd className="text-slate-800">
                      {[selected.from, selected.section].filter(Boolean).join(' → ') || '—'}
                    </dd>
                  </div>
                </dl>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Message
                  </h3>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-wrap rounded-xl bg-slate-50 border border-slate-100 p-4">
                    {selected.message || '—'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center h-full min-h-[240px] flex items-center justify-center">
                <p className="text-slate-400 text-sm">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(confirmConfig)}
        onOpenChange={(next) => {
          if (!next) setConfirmConfig(null);
        }}
        title={confirmConfig?.title || ''}
        description={confirmConfig?.description}
        confirmLabel={confirmConfig?.confirmLabel || 'Confirm'}
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={() => confirmConfig?.onConfirm?.()}
      />
    </div>
  );
}
