import React from 'react';
import AdminResource from './AdminResource';
import ExportButton from './ExportButton';

const KINDS = ['contact', 'academy_inquiry', 'booking', 'callback', 'brochure', 'chat', 'other'];
const STATUSES = ['new', 'contacted', 'qualified', 'closed', 'spam'];

export default function AdminLeads() {
  return (
    <AdminResource
      title="Leads"
      description="Everyone who filled in a form on the site: contact, Academy enquiries, brochure requests and assistant callbacks. Update the status as your team follows up."
      table="leads"
      select="*, courses(title)"
      canCreate={false}
      filters={[
        { key: 'kind', label: 'Type', options: KINDS },
        { key: 'status', label: 'Status', options: STATUSES },
      ]}
      extraHeader={<ExportButton table="leads" />}
      columns={[
        { key: 'created_at', label: 'Received', type: 'datetime' },
        { key: 'kind', label: 'Type' },
        { key: 'full_name', label: 'Name' },
        { key: 'phone', label: 'Phone' },
        { key: 'email', label: 'Email' },
        { key: 'message', label: 'Message' },
        { key: 'status', label: 'Status', render: (r) => <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${r.status === 'new' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{r.status}</span> },
      ]}
      fields={[
        { key: 'full_name', label: 'Name', readOnly: true },
        { key: 'email', label: 'Email', readOnly: true },
        { key: 'phone', label: 'Phone', readOnly: true },
        { key: 'organization', label: 'Organisation', readOnly: true },
        { key: 'kind', label: 'Type', readOnly: true },
        { key: 'source_page', label: 'Page', readOnly: true },
        { key: 'source_section', label: 'Section', readOnly: true },
        { key: 'message', label: 'Message', type: 'textarea', readOnly: true, rows: 5 },
        { key: 'status', label: 'Status', type: 'select', options: STATUSES, required: true },
        { key: 'admin_notes', label: 'Internal notes', type: 'textarea' },
      ]}
    />
  );
}
