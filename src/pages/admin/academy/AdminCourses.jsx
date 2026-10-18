import React from 'react';
import AdminResource from '../AdminResource';

const fields = [
  { key: 'title', label: 'Title', required: true },
  { key: 'slug', label: 'Web address (slug)', type: 'slug', from: 'title', required: true, help: 'Used in the course link: /academy/courses/<slug>' },
  {
    key: 'category',
    label: 'Category',
    type: 'select',
    required: true,
    options: [
      { value: 'fellowship', label: 'Fellowship' },
      { value: 'short_term', label: 'Short-term course' },
      { value: 'workshop', label: 'Workshop' },
      { value: 'webinar', label: 'Webinar' },
    ],
  },
  { key: 'summary', label: 'Short summary', type: 'textarea', rows: 3 },
  { key: 'description_html', label: 'Full description (HTML)', type: 'html' },
  { key: 'syllabus', label: 'Syllabus', type: 'sections', help: 'Each section is a level or module with one topic per line.' },
  { key: 'faculty', label: 'Faculty', type: 'people' },
  { key: 'duration', label: 'Duration', placeholder: 'e.g. 12 months' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'fees_inr', label: 'Fees (INR)', type: 'number', min: 0 },
  { key: 'fees_note', label: 'Fees note', placeholder: 'e.g. Instalments available' },
  { key: 'mode', label: 'Mode', placeholder: 'e.g. Hybrid' },
  { key: 'brochure_url', label: 'Brochure (PDF)', type: 'file', bucket: 'brochures', accept: 'application/pdf,.pdf' },
  { key: 'image_url', label: 'Cover image', type: 'image', bucket: 'media' },
  { key: 'sort_order', label: 'Sort order', type: 'number', step: 1 },
  { key: 'published', label: 'Published', type: 'bool', checkLabel: 'Show on the website' },
];

export default function AdminCourses() {
  return (
    <AdminResource
      title="Courses"
      description="Fellowships, short-term courses, workshops and webinars shown on RECOUP Academy."
      table="courses"
      orderBy={{ column: 'sort_order', ascending: true }}
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'duration', label: 'Duration' },
        { key: 'fees_inr', label: 'Fees', type: 'money' },
        { key: 'sort_order', label: 'Order' },
        { key: 'published', label: 'Status', type: 'bool' },
      ]}
      fields={fields}
      defaults={{ category: 'fellowship', syllabus: [], faculty: [], sort_order: 100, published: true }}
      filters={[{ key: 'category', label: 'Category', options: ['fellowship', 'short_term', 'workshop', 'webinar'] }]}
    />
  );
}
