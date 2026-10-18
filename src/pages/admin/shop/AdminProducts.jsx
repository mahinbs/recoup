import React from 'react';
import AdminResource from '../AdminResource';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';

export default function AdminProducts() {
  const { data: cats } = useAsync(async () => {
    if (!supabase) return [];
    const { data } = await supabase.from('product_categories').select('id,name').order('sort_order');
    return data || [];
  }, []);
  const options = (cats || []).map((c) => ({ value: c.id, label: c.name }));
  const catName = (id) => (cats || []).find((c) => c.id === id)?.name;

  return (
    <AdminResource
      key={options.length}
      title="Products"
      description="Everything sold in the shop. Stock changes are logged automatically in Inventory."
      table="products"
      orderBy={{ column: 'created_at', ascending: false }}
      defaults={{ published: true, track_inventory: true, stock_qty: 0, low_stock_threshold: 5, images: [] }}
      columns={[
        { key: 'image', label: 'Image', render: (r) => (Array.isArray(r.images) && r.images[0] ? <img src={r.images[0]} alt="" className="h-10 w-10 rounded-lg object-cover" /> : <span className="text-slate-300">-</span>) },
        { key: 'name', label: 'Name', render: (r) => <div><div className="font-semibold">{r.name}</div><div className="text-xs text-slate-400">{[r.sku, catName(r.category_id)].filter(Boolean).join(' / ')}</div></div> },
        { key: 'price_inr', label: 'Price', type: 'money' },
        { key: 'stock_qty', label: 'Stock', render: (r) => (r.track_inventory ? r.stock_qty : 'Not tracked') },
        { key: 'published', label: 'Live', type: 'bool' },
      ]}
      fields={[
        { key: 'name', label: 'Name', type: 'text', required: true },
        { key: 'slug', label: 'Slug', type: 'slug', from: 'name', required: true },
        { key: 'sku', label: 'SKU', type: 'text' },
        { key: 'category_id', label: 'Category', type: 'select', options },
        { key: 'short_description', label: 'Short description', type: 'textarea', rows: 2 },
        { key: 'description_html', label: 'Description (HTML)', type: 'html' },
        { key: 'price_inr', label: 'Price (INR)', type: 'number', required: true, min: 0 },
        { key: 'compare_at_price_inr', label: 'Compare-at price (INR)', type: 'number', min: 0, help: 'Shown struck through, e.g. the old price.' },
        { key: 'stock_qty', label: 'Stock quantity', type: 'number', required: true, min: 0, step: 1 },
        { key: 'low_stock_threshold', label: 'Low stock threshold', type: 'number', required: true, min: 0, step: 1 },
        { key: 'track_inventory', label: 'Inventory', type: 'bool', checkLabel: 'Track stock for this product' },
        { key: 'images', label: 'Images', type: 'images', bucket: 'products' },
        { key: 'published', label: 'Visible in shop', type: 'bool', checkLabel: 'Published' },
      ]}
    />
  );
}
