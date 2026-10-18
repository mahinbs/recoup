import React from 'react';
import { Info } from 'lucide-react';
import AdminResource from './AdminResource';

export default function AdminOutbox() {
  return (
    <div>
      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
        <Info className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          Every new lead, booking request and order automatically queues the right emails here (a notification to your team and an
          acknowledgment to the visitor). They are delivered once an email sender is connected to this project; until then they stay queued
          and nothing is lost.
        </p>
      </div>
      <AdminResource
        title="Email outbox"
        table="notification_outbox"
        canCreate={false}
        filters={[{ key: 'status', label: 'Status', options: ['queued', 'sent', 'failed'] }]}
        columns={[
          { key: 'created_at', label: 'Queued', type: 'datetime' },
          { key: 'kind', label: 'Type' },
          { key: 'to_email', label: 'To' },
          { key: 'subject', label: 'Subject' },
          { key: 'status', label: 'Status' },
        ]}
        fields={[
          { key: 'kind', label: 'Type', readOnly: true },
          { key: 'to_email', label: 'To', readOnly: true },
          { key: 'subject', label: 'Subject', readOnly: true },
          { key: 'body', label: 'Message', type: 'textarea', rows: 8, readOnly: true },
          { key: 'status', label: 'Status', type: 'select', options: ['queued', 'sent', 'failed'], required: true },
          { key: 'error', label: 'Error', type: 'textarea', readOnly: true },
        ]}
      />
    </div>
  );
}
