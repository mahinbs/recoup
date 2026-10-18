import React from 'react';
import AdminResource from '../AdminResource';

export default function AdminCategories() {
  return (
    <AdminResource
      title="Product categories"
      description="Groups shown as filters in the shop."
      table="product_categories"
      orderBy={{ column: 'sort_order', ascending: true }}
      defaults={{ sort_order: 100 }}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'slug', label: 'Slug' },
        { key: 'sort_order', label: 'Order' },
      ]}
      fields={[
        { key: 'name', label: 'Name', type: 'text', required: true },
        { key: 'slug', label: 'Slug', type: 'slug', from: 'name', required: true },
        { key: 'sort_order', label: 'Sort order', type: 'number', required: true, step: 1 },
      ]}
    />
  );
}
