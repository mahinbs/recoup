import React from 'react';
import AdminResource from '../AdminResource';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';

export default function AdminBatches() {
  const { data: courses } = useAsync(async () => {
    if (!supabase) return [];
    const { data, error } = await supabase.from('courses').select('id,title').order('sort_order', { ascending: true });
    if (error) throw error;
    return data || [];
  }, []);

  const fields = [
    { key: 'course_id', label: 'Course', type: 'select', options: (courses || []).map((c) => ({ value: c.id, label: c.title })), help: 'Optional. Leave blank for a general announcement.' },
    { key: 'title', label: 'Batch title', required: true, placeholder: 'e.g. January 2027 cohort' },
    { key: 'start_date', label: 'Start date', type: 'date' },
    { key: 'end_date', label: 'End date', type: 'date' },
    { key: 'seats', label: 'Seats', type: 'number', min: 0, step: 1 },
    { key: 'location', label: 'Location' },
    { key: 'mode', label: 'Mode', placeholder: 'in_person, online or hybrid' },
    { key: 'registration_url', label: 'Registration link' },
    { key: 'show_banner', label: 'Announcement banner', type: 'bool', checkLabel: 'Show in the website banner and pop-up' },
    { key: 'published', label: 'Published', type: 'bool', checkLabel: 'Show on the website' },
  ];

  return (
    <AdminResource
      title="Batches"
      description="Upcoming intakes. Batches with the banner switched on are announced across the public site until their start date."
      table="course_batches"
      select="*, courses(title)"
      orderBy={{ column: 'start_date', ascending: false }}
      columns={[
        { key: 'title', label: 'Batch' },
        { key: 'course', label: 'Course', render: (r) => r.courses?.title || <span className="text-slate-300">-</span> },
        { key: 'start_date', label: 'Starts', type: 'date' },
        { key: 'seats', label: 'Seats' },
        { key: 'show_banner', label: 'Banner', type: 'bool' },
        { key: 'published', label: 'Status', type: 'bool' },
      ]}
      fields={fields}
      defaults={{ show_banner: true, published: true }}
      beforeSave={(values) => {
        const v = { ...values };
        if (v.seats !== null && v.seats !== undefined && v.seats !== '') v.seats = Math.round(Number(v.seats));
        return v;
      }}
    />
  );
}
