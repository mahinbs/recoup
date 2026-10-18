import React from 'react';
import AdminResource from './AdminResource';
import ExportButton from './ExportButton';

export default function AdminNewsletter() {
  return (
    <AdminResource
      title="Newsletter subscribers"
      description="People who signed up for health updates from the blog or footer. Export the list to send a newsletter from your email tool."
      table="newsletter_subscribers"
      extraHeader={<ExportButton table="newsletter_subscribers" filename="newsletter" />}
      columns={[
        { key: 'email', label: 'Email' },
        { key: 'source', label: 'Signed up from' },
        { key: 'created_at', label: 'Date', type: 'datetime' },
        { key: 'unsubscribed_at', label: 'Status', render: (r) => (r.unsubscribed_at ? 'Unsubscribed' : 'Subscribed') },
      ]}
      fields={[
        { key: 'email', label: 'Email', type: 'email', required: true },
        { key: 'source', label: 'Source' },
        { key: 'unsubscribed_at', label: 'Unsubscribed on', type: 'date' },
      ]}
      defaults={{ source: 'admin' }}
    />
  );
}
