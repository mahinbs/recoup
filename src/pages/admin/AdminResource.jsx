import React, { useMemo, useState } from 'react';
import { Pencil, Plus, Trash2, X, Upload, Loader2 } from 'lucide-react';
import { supabase, uploadFile } from '../../lib/supabase';
import { useAsync } from '../../lib/useAsync';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';

/**
 * Generic admin list + editor for one Supabase table.
 *
 * Props
 *  title, description        page heading
 *  table                     table name
 *  select                    columns for the list (default '*')
 *  orderBy                   { column, ascending }
 *  columns                   [{ key, label, type?: 'bool'|'date'|'datetime'|'money'|'image', render?(row) }]
 *  fields                    editor fields (see FieldInput for types)
 *  defaults                  values for a new row
 *  canCreate / canDelete     default true
 *  rowActions                optional (row, reload) => node, shown beside Edit
 *  beforeSave(values, isNew) optional transform, may throw
 *  filters                   optional [{ key, label, options:[value,...] }] quick filter by column
 */
export default function AdminResource({
  title,
  description,
  table,
  select = '*',
  orderBy = { column: 'created_at', ascending: false },
  columns,
  fields,
  defaults = {},
  canCreate = true,
  canDelete = true,
  rowActions,
  beforeSave,
  filters = [],
  extraHeader = null,
  pageSize = 200,
}) {
  const [filterValues, setFilterValues] = useState({});
  const { data: rows, error, loading, reload } = useAsync(async () => {
    let q = supabase.from(table).select(select).order(orderBy.column, { ascending: orderBy.ascending }).limit(pageSize);
    Object.entries(filterValues).forEach(([k, v]) => {
      if (v) q = q.eq(k, v);
    });
    const res = await q;
    if (res.error) throw res.error;
    return res.data;
  }, [table, select, JSON.stringify(filterValues)]);

  const [editing, setEditing] = useState(null); // { id?, values }
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');
  const [confirm, setConfirm] = useState(null);

  const startNew = () => {
    setFormError('');
    setEditing({ id: null, values: { ...defaults } });
  };
  const startEdit = (row) => {
    setFormError('');
    setEditing({ id: row.id ?? row[fields.find((f) => f.pk)?.key], values: { ...row } });
  };

  const pkKey = fields.find((f) => f.pk)?.key || 'id';

  const save = async (e) => {
    e.preventDefault();
    setFormError('');
    setSaving(true);
    try {
      let values = { ...editing.values };
      for (const f of fields) {
        if (f.required && (values[f.key] === undefined || values[f.key] === null || values[f.key] === '')) {
          throw new Error(`${f.label} is required.`);
        }
        if (f.type === 'number' && values[f.key] !== undefined && values[f.key] !== null && values[f.key] !== '') {
          values[f.key] = Number(values[f.key]);
          if (Number.isNaN(values[f.key])) throw new Error(`${f.label} must be a number.`);
        }
        if ((f.type === 'number' || f.type === 'date' || f.type === 'text' || f.type === 'select') && values[f.key] === '' && f.nullable !== false && !f.required) {
          values[f.key] = null;
        }
      }
      if (beforeSave) values = (await beforeSave(values, !editing.id)) || values;
      // only send editable columns
      const payload = {};
      for (const f of fields) if (!f.readOnly && f.key in values) payload[f.key] = values[f.key];
      const isNew = !editing.id;
      const res = isNew
        ? await supabase.from(table).insert(payload)
        : await supabase.from(table).update(payload).eq(pkKey, editing.id);
      if (res.error) throw res.error;
      setEditing(null);
      reload();
    } catch (err) {
      setFormError(err.message || 'Could not save.');
    } finally {
      setSaving(false);
    }
  };

  const remove = (row) =>
    setConfirm({
      title: 'Delete this item?',
      description: 'This cannot be undone.',
      confirmLabel: 'Delete',
      onConfirm: async () => {
        const res = await supabase.from(table).delete().eq(pkKey, row[pkKey]);
        setConfirm(null);
        if (res.error) alert(res.error.message);
        else reload();
      },
    });

  const setValue = (key, value) => setEditing((s) => ({ ...s, values: { ...s.values, [key]: value } }));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">{title}</h1>
          {description && <p className="mt-1 max-w-2xl text-sm text-slate-500">{description}</p>}
        </div>
        <div className="flex items-center gap-3">
          {extraHeader}
          {canCreate && (
            <Button type="button" onClick={startNew} className="gap-2">
              <Plus className="h-4 w-4" /> Add new
            </Button>
          )}
        </div>
      </div>

      {filters.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-3">
          {filters.map((f) => (
            <label key={f.key} className="flex items-center gap-2 text-sm text-slate-600">
              {f.label}
              <select
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                value={filterValues[f.key] || ''}
                onChange={(e) => setFilterValues((s) => ({ ...s, [f.key]: e.target.value }))}
              >
                <option value="">All</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      )}

      {error && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error.message}</div>}

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="px-4 py-3 font-semibold">
                  {c.label}
                </th>
              ))}
              <th className="px-4 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-slate-400">
                  Loading…
                </td>
              </tr>
            )}
            {!loading && rows && rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-slate-400" data-testid="empty-state">
                  Nothing here yet.{canCreate ? ' Use “Add new” to create the first one.' : ''}
                </td>
              </tr>
            )}
            {(rows || []).map((row) => (
              <tr key={row[pkKey]} className="align-top hover:bg-slate-50/60">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-slate-700">
                    <Cell column={c} row={row} />
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-1">
                    {rowActions && rowActions(row, reload)}
                    <button type="button" aria-label="Edit" onClick={() => startEdit(row)} className="rounded-lg p-2 text-slate-500 hover:bg-primary/10 hover:text-primary">
                      <Pencil className="h-4 w-4" />
                    </button>
                    {canDelete && (
                      <button type="button" aria-label="Delete" onClick={() => remove(row)} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <form onSubmit={save} className="my-8 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-primary-dark">{editing.id ? 'Edit' : 'Add'} {title.toLowerCase()}</h2>
              <button type="button" aria-label="Close" onClick={() => setEditing(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            {formError && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{formError}</div>}
            <div className="grid gap-4 md:grid-cols-2">
              {fields.map((f) => (
                <div key={f.key} className={f.wide || ['textarea', 'html', 'sections', 'people', 'images', 'lines', 'json'].includes(f.type) ? 'md:col-span-2' : ''}>
                  <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor={`f-${f.key}`}>
                    {f.label}
                    {f.required && <span className="text-red-500"> *</span>}
                  </label>
                  <FieldInput field={f} value={editing.values[f.key]} onChange={(v) => setValue(f.key, v)} values={editing.values} setValue={setValue} isNew={!editing.id} />
                  {f.help && <p className="mt-1 text-xs text-slate-400">{f.help}</p>}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <Button type="button" variant="ghost" onClick={() => setEditing(null)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving} className="gap-2">
                {saving && <Loader2 className="h-4 w-4 animate-spin" />} Save
              </Button>
            </div>
          </form>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(confirm)}
        title={confirm?.title}
        description={confirm?.description}
        confirmLabel={confirm?.confirmLabel}
        variant="danger"
        onOpenChange={(o) => !o && setConfirm(null)}
        onConfirm={() => confirm?.onConfirm?.()}
      />
    </div>
  );
}

function Cell({ column, row }) {
  if (column.render) return column.render(row);
  const v = row[column.key];
  if (column.type === 'bool') {
    return <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${v ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{v ? 'Live' : 'Hidden'}</span>;
  }
  if (v === null || v === undefined || v === '') return <span className="text-slate-300">-</span>;
  if (column.type === 'date') return new Date(v).toLocaleDateString('en-IN');
  if (column.type === 'datetime') return new Date(v).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
  if (column.type === 'money') return `₹${Number(v).toLocaleString('en-IN')}`;
  if (column.type === 'image') return <img src={v} alt="" className="h-10 w-10 rounded-lg object-cover" />;
  const s = String(v);
  return s.length > 90 ? `${s.slice(0, 90)}…` : s;
}

const inputClass =
  'w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:bg-slate-50 disabled:text-slate-500';

export function FieldInput({ field, value, onChange, values, setValue, isNew }) {
  const id = `f-${field.key}`;
  const disabled = Boolean(field.readOnly);
  const v = value ?? '';
  switch (field.type) {
    case 'textarea':
      return <textarea id={id} rows={field.rows || 3} className={inputClass} value={v} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
    case 'html':
      return <textarea id={id} rows={field.rows || 10} className={`${inputClass} font-mono text-xs`} value={v} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
    case 'number':
      return <input id={id} type="number" step={field.step || 'any'} min={field.min} className={inputClass} value={v} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
    case 'date':
      return <input id={id} type="date" className={inputClass} value={v ? String(v).slice(0, 10) : ''} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
    case 'select':
      return (
        <select id={id} className={inputClass} value={v} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
          {!field.required && <option value="">-</option>}
          {field.options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const label = typeof o === 'string' ? o : o.label;
            return (
              <option key={val} value={val}>
                {label}
              </option>
            );
          })}
        </select>
      );
    case 'bool':
      return (
        <label className="flex items-center gap-3 py-2">
          <input id={id} type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary" checked={Boolean(value)} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
          <span className="text-sm text-slate-600">{field.checkLabel || 'Yes'}</span>
        </label>
      );
    case 'slug':
      return (
        <input
          id={id}
          className={inputClass}
          value={v}
          disabled={disabled}
          placeholder={field.placeholder || 'auto-filled from the title'}
          onChange={(e) => onChange(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
          onFocus={() => {
            if (!v && field.from && values[field.from]) {
              onChange(String(values[field.from]).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80));
            }
          }}
        />
      );
    case 'image':
    case 'file':
      return <UploadField id={id} field={field} value={v} onChange={onChange} />;
    case 'images':
      return <ImagesField field={field} value={Array.isArray(value) ? value : []} onChange={onChange} />;
    case 'lines':
      return (
        <textarea
          id={id}
          rows={field.rows || 4}
          className={inputClass}
          placeholder="One item per line"
          value={Array.isArray(value) ? value.join('\n') : ''}
          onChange={(e) => onChange(e.target.value.split('\n'))}
          onBlur={() => onChange((Array.isArray(value) ? value : []).map((s) => s.trim()).filter(Boolean))}
        />
      );
    case 'sections':
      return <SectionsField value={Array.isArray(value) ? value : []} onChange={onChange} />;
    case 'people':
      return <PeopleField value={Array.isArray(value) ? value : []} onChange={onChange} />;
    case 'json':
      return <JsonField id={id} value={value} onChange={onChange} />;
    default:
      return <input id={id} type={field.type === 'email' ? 'email' : 'text'} className={inputClass} value={v} disabled={disabled} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} />;
  }
}

function UploadField({ id, field, value, onChange }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const pick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr('');
    try {
      onChange(await uploadFile(field.bucket || 'media', file, field.folder || ''));
    } catch (er) {
      setErr(er.message || 'Upload failed');
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input id={id} className={inputClass} value={value} placeholder="https://… or upload a file" onChange={(e) => onChange(e.target.value)} />
        <label className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          Upload
          <input type="file" className="hidden" accept={field.accept || (field.type === 'image' ? 'image/*' : undefined)} onChange={pick} data-testid={`upload-${field.key}`} />
        </label>
      </div>
      {field.type === 'image' && value && <img src={value} alt="" className="h-20 rounded-lg object-cover" />}
      {err && <p className="text-xs text-red-600">{err}</p>}
    </div>
  );
}

function ImagesField({ field, value, onChange }) {
  const [busy, setBusy] = useState(false);
  const add = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setBusy(true);
    try {
      const urls = [];
      for (const f of files) urls.push(await uploadFile(field.bucket || 'products', f, field.folder || ''));
      onChange([...value, ...urls]);
    } catch (er) {
      alert(er.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {value.map((u, i) => (
          <div key={u + i} className="relative">
            <img src={u} alt="" className="h-20 w-20 rounded-lg object-cover" />
            <button type="button" aria-label="Remove image" onClick={() => onChange(value.filter((_, j) => j !== i))} className="absolute -right-2 -top-2 rounded-full bg-white p-1 shadow">
              <X className="h-3 w-3 text-red-600" />
            </button>
          </div>
        ))}
      </div>
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />} Add images
        <input type="file" multiple accept="image/*" className="hidden" onChange={add} data-testid={`upload-${field.key}`} />
      </label>
    </div>
  );
}

function SectionsField({ value, onChange }) {
  const set = (i, patch) => onChange(value.map((s, j) => (j === i ? { ...s, ...patch } : s)));
  return (
    <div className="space-y-3">
      {value.map((s, i) => (
        <div key={i} className="rounded-xl border border-slate-200 p-3">
          <div className="mb-2 flex gap-2">
            <input className={inputClass} placeholder="Section title (e.g. Module 1)" value={s.title || ''} onChange={(e) => set(i, { title: e.target.value })} />
            <button type="button" aria-label="Remove section" onClick={() => onChange(value.filter((_, j) => j !== i))} className="rounded-lg p-2 text-red-500 hover:bg-red-50">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <textarea className={inputClass} rows={3} placeholder="One topic per line" value={(s.items || []).join('\n')} onChange={(e) => set(i, { items: e.target.value.split('\n') })} />
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...value, { title: '', items: [] }])}>
        <Plus className="mr-1 h-4 w-4" /> Add section
      </Button>
    </div>
  );
}

function PeopleField({ value, onChange }) {
  const set = (i, patch) => onChange(value.map((s, j) => (j === i ? { ...s, ...patch } : s)));
  return (
    <div className="space-y-2">
      {value.map((p, i) => (
        <div key={i} className="flex gap-2">
          <input className={inputClass} placeholder="Name" value={p.name || ''} onChange={(e) => set(i, { name: e.target.value })} />
          <input className={inputClass} placeholder="Role / qualification" value={p.role || ''} onChange={(e) => set(i, { role: e.target.value })} />
          <button type="button" aria-label="Remove person" onClick={() => onChange(value.filter((_, j) => j !== i))} className="rounded-lg p-2 text-red-500 hover:bg-red-50">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...value, { name: '', role: '' }])}>
        <Plus className="mr-1 h-4 w-4" /> Add person
      </Button>
    </div>
  );
}

function JsonField({ id, value, onChange }) {
  const [text, setText] = useState(() => JSON.stringify(value ?? null, null, 2));
  const [bad, setBad] = useState(false);
  return (
    <>
      <textarea
        id={id}
        rows={6}
        className={`${inputClass} font-mono text-xs ${bad ? 'border-red-400' : ''}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          try {
            onChange(JSON.parse(e.target.value));
            setBad(false);
          } catch {
            setBad(true);
          }
        }}
      />
      {bad && <p className="mt-1 text-xs text-red-600">Not valid JSON yet.</p>}
    </>
  );
}
