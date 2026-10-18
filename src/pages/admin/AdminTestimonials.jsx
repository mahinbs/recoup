import React from 'react';
import AdminResource from './AdminResource';

export default function AdminTestimonials() {
  return (
    <AdminResource
      title="Testimonials"
      description="Patient success stories shown on the Testimonials page. Add a video link (YouTube, Vimeo or a direct video file) to show a video story."
      table="testimonials"
      orderBy={{ column: 'sort_order', ascending: true }}
      defaults={{ published: true, sort_order: 100 }}
      columns={[
        { key: 'image_url', label: 'Photo', type: 'image' },
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'content', label: 'Story' },
        { key: 'video_url', label: 'Video', render: (r) => (r.video_url ? 'Yes' : '-') },
        { key: 'published', label: 'Status', type: 'bool' },
      ]}
      fields={[
        { key: 'name', label: 'Name', required: true },
        { key: 'role', label: 'Role / city' },
        { key: 'content', label: 'Story', type: 'textarea', rows: 5, required: true },
        { key: 'image_url', label: 'Photo', type: 'image', bucket: 'media', folder: 'testimonials' },
        { key: 'video_url', label: 'Video link', placeholder: 'https://www.youtube.com/watch?v=…' },
        { key: 'sort_order', label: 'Order (lower shows first)', type: 'number' },
        { key: 'published', label: 'Show on website', type: 'bool', checkLabel: 'Published' },
      ]}
    />
  );
}
