import React from 'react';
import AdminResource from './AdminResource';
import { useSiteContent } from '../../context/SiteContentContext';

export default function AdminBlogs() {
  const { refreshFromStorage } = useSiteContent();
  return (
    <AdminResource
      title="Blog posts"
      description="Articles shown on the Blog page. Posts marked Hidden stay in the admin but are not shown on the website."
      table="blog_posts"
      orderBy={{ column: 'published_at', ascending: false }}
      defaults={{ published: true, category: 'General', read_time: '5 min read' }}
      beforeSave={async (values) => {
        const v = { ...values };
        if (!v.slug && v.title) v.slug = String(v.title).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
        if (!/^[a-z0-9][a-z0-9-]*$/.test(v.slug || '')) throw new Error('The URL slug can only contain lowercase letters, numbers and hyphens.');
        setTimeout(refreshFromStorage, 600);
        return v;
      }}
      columns={[
        { key: 'image_url', label: 'Cover', type: 'image' },
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'published_at', label: 'Date', type: 'date' },
        { key: 'published', label: 'Status', type: 'bool' },
      ]}
      fields={[
        { key: 'title', label: 'Title', required: true },
        { key: 'slug', label: 'URL slug', type: 'slug', from: 'title' },
        { key: 'category', label: 'Category' },
        { key: 'read_time', label: 'Read time' },
        { key: 'image_url', label: 'Cover image', type: 'image', bucket: 'media', folder: 'blog' },
        { key: 'excerpt', label: 'Short summary', type: 'textarea', rows: 3 },
        { key: 'body_html', label: 'Article body (HTML)', type: 'html', rows: 14 },
        { key: 'meta_title', label: 'SEO title', help: 'Shown in Google results. Leave empty to use the default.' },
        { key: 'meta_description', label: 'SEO description', type: 'textarea', rows: 2 },
        { key: 'published', label: 'Show on website', type: 'bool', checkLabel: 'Published' },
      ]}
    />
  );
}
