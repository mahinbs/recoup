import React from 'react';
import AdminResource from '../AdminResource';

export default function AdminCoupons() {
  return (
    <AdminResource
      title="Coupons"
      description="Percentage discounts customers can enter in the cart."
      table="coupons"
      orderBy={{ column: 'created_at', ascending: false }}
      defaults={{ active: true, percent_off: 10 }}
      columns={[
        { key: 'code', label: 'Code', render: (r) => <span className="font-mono font-semibold">{r.code}</span> },
        { key: 'percent_off', label: 'Discount', render: (r) => `${r.percent_off}%` },
        { key: 'active', label: 'Status', render: (r) => (r.active ? 'Active' : 'Inactive') },
        { key: 'valid_until', label: 'Valid until', type: 'date' },
      ]}
      fields={[
        { key: 'code', label: 'Code', type: 'text', required: true, pk: true, help: 'Saved in capitals, 3 to 30 characters.' },
        { key: 'percent_off', label: 'Percent off (1 to 90)', type: 'number', required: true, min: 1, step: 1 },
        { key: 'active', label: 'Status', type: 'bool', checkLabel: 'Active' },
        { key: 'valid_until', label: 'Valid until', type: 'date', help: 'Leave empty for no expiry.' },
      ]}
      beforeSave={(v) => {
        const code = String(v.code || '').trim().toUpperCase();
        if (code.length < 3 || code.length > 30) throw new Error('Code must be 3 to 30 characters.');
        const pct = Number(v.percent_off);
        if (!Number.isInteger(pct) || pct < 1 || pct > 90) throw new Error('Percent off must be a whole number from 1 to 90.');
        return { ...v, code };
      }}
    />
  );
}
