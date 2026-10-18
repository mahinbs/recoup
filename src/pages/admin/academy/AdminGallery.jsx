import React from 'react';
import AdminResource from '../AdminResource';

export default function AdminGallery() {
  return (
    <AdminResource
      title="Gallery"
      description="Photos from workshops, conferences and classes, shown on the Academy page."
      table="gallery_items"
      orderBy={{ column: 'sort_order', ascending: true }}
      columns={[
        { key: 'image_url', label: 'Photo', type: 'image' },
        { key: 'title', label: 'Title' },
        { key: 'event_name', label: 'Event' },
        { key: 'event_date', label: 'Date', type: 'date' },
        { key: 'sort_order', label: 'Order' },
        { key: 'published', label: 'Status', type: 'bool' },
      ]}
      fields={[
        { key: 'title', label: 'Title', required: true },
        { key: 'image_url', label: 'Photo', type: 'image', bucket: 'gallery', required: true },
        { key: 'caption', label: 'Caption', type: 'textarea', rows: 2 },
        { key: 'event_name', label: 'Event name' },
        { key: 'event_date', label: 'Event date', type: 'date' },
        { key: 'sort_order', label: 'Sort order', type: 'number', step: 1 },
        { key: 'published', label: 'Published', type: 'bool', checkLabel: 'Show on the website' },
      ]}
      defaults={{ sort_order: 100, published: true }}
    />
  );
}
