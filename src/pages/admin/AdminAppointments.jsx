import React from 'react';
import AdminResource from './AdminResource';
import ExportButton from './ExportButton';

const STATUSES = ['new', 'contacted', 'booked', 'closed', 'spam'];

export default function AdminAppointments() {
  return (
    <AdminResource
      title="Appointment requests"
      description="Consultation requests from the booking page, with the patient's contact details and whether they were sent on to the hospital booking system."
      table="appointment_requests"
      canCreate={false}
      filters={[{ key: 'status', label: 'Status', options: STATUSES }]}
      extraHeader={<ExportButton table="appointment_requests" filename="appointments" />}
      columns={[
        { key: 'created_at', label: 'Received', type: 'datetime' },
        { key: 'full_name', label: 'Name' },
        { key: 'phone', label: 'Phone' },
        { key: 'service', label: 'Service' },
        { key: 'preferred_date', label: 'Preferred', render: (r) => [r.preferred_date, r.preferred_time].filter(Boolean).join(' ') || '-' },
        { key: 'mode', label: 'Mode' },
        { key: 'redirected_to_hms', label: 'Sent to HMS', render: (r) => (r.redirected_to_hms ? 'Yes' : 'No') },
        { key: 'status', label: 'Status' },
      ]}
      fields={[
        { key: 'full_name', label: 'Name', readOnly: true },
        { key: 'phone', label: 'Phone', readOnly: true },
        { key: 'email', label: 'Email', readOnly: true },
        { key: 'service', label: 'Service', readOnly: true },
        { key: 'preferred_date', label: 'Preferred date', readOnly: true },
        { key: 'preferred_time', label: 'Preferred time', readOnly: true },
        { key: 'mode', label: 'Mode', readOnly: true },
        { key: 'notes', label: 'Patient notes', type: 'textarea', readOnly: true },
        { key: 'status', label: 'Status', type: 'select', options: STATUSES, required: true },
        { key: 'admin_notes', label: 'Internal notes', type: 'textarea' },
      ]}
    />
  );
}
