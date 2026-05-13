import React, { useMemo, useState } from 'react';
import { Plus, Pencil, Trash2, X, RotateCcw } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ConfirmDialog } from '../../components/ui/ConfirmDialog';
import { useSiteContent } from '../../context/SiteContentContext';
import { defaultBlogPosts, defaultArticleBodyHtml } from '../../data/defaultBlogPosts';
import { slugifyTitle, uniqueSlug } from '../../lib/slugify';

const emptyDraft = () => ({
  id: '',
  category: '',
  title: '',
  excerpt: '',
  date: '',
  readTime: '5 min read',
  image: '',
  bodyHtml: defaultArticleBodyHtml,
  metaTitle: '',
  metaDescription: '',
});

export default function AdminBlogs() {
  const { blogs, saveBlogs } = useSiteContent();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(emptyDraft);
  const [error, setError] = useState('');
  const [confirmConfig, setConfirmConfig] = useState(null);

  const sorted = useMemo(
    () => [...blogs].sort((a, b) => (a.title || '').localeCompare(b.title || '')),
    [blogs]
  );

  const openCreate = () => {
    setEditingId(null);
    setDraft(emptyDraft());
    setError('');
    setModalOpen(true);
  };

  const openEdit = (post) => {
    setEditingId(post.id);
    setDraft({
      id: post.id,
      category: post.category,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      readTime: post.readTime,
      image: post.image,
      bodyHtml: post.bodyHtml || defaultArticleBodyHtml,
      metaTitle: post.metaTitle || '',
      metaDescription: post.metaDescription || '',
    });
    setError('');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setError('');
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError('');
    const ids = blogs.map((b) => b.id);
    let id = editingId || uniqueSlug(slugifyTitle(draft.title), ids);
    if (!draft.title.trim()) {
      setError('Title is required.');
      return;
    }
    if (!editingId && ids.includes(id)) {
      id = uniqueSlug(id, ids);
    }

    const nextPost = {
      id: editingId || id,
      category: draft.category.trim() || 'General',
      title: draft.title.trim(),
      excerpt: draft.excerpt.trim(),
      date: draft.date.trim() || '—',
      readTime: draft.readTime.trim() || '5 min read',
      image: draft.image.trim(),
      bodyHtml: draft.bodyHtml.trim() || defaultArticleBodyHtml,
      metaTitle: draft.metaTitle.trim(),
      metaDescription: draft.metaDescription.trim(),
    };

    let next;
    if (editingId) {
      next = blogs.map((b) => (b.id === editingId ? nextPost : b));
    } else {
      next = [...blogs, nextPost];
    }
    saveBlogs(next);
    closeModal();
  };

  const requestDeleteArticle = (id) => {
    const post = blogs.find((b) => b.id === id);
    setConfirmConfig({
      kind: 'delete',
      id,
      title: post?.title?.trim() || 'this article',
    });
  };

  const executeConfirm = () => {
    if (!confirmConfig) return;
    if (confirmConfig.kind === 'delete') {
      saveBlogs(blogs.filter((b) => b.id !== confirmConfig.id));
    } else {
      saveBlogs([...defaultBlogPosts]);
    }
  };

  const confirmCopy =
    confirmConfig?.kind === 'delete'
      ? {
          title: 'Delete this article?',
          description: `“${confirmConfig.title}” will be removed. This cannot be undone.`,
          confirmLabel: 'Delete',
        }
      : confirmConfig?.kind === 'restore'
        ? {
            title: 'Restore default posts?',
            description:
              'All current articles will be replaced with the original four defaults. This cannot be undone.',
            confirmLabel: 'Restore defaults',
          }
        : { title: '', description: '', confirmLabel: 'Confirm' };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/25 focus:border-primary outline-none transition-all text-slate-800';

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-primary-dark tracking-tight">Blog posts</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="primary"
            onClick={openCreate}
            className="gap-2 rounded-xl px-5 py-2.5 text-sm shadow-primary/20"
          >
            <Plus className="h-5 w-5" />
            New article
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4 hidden md:table-cell">Category</th>
                <th className="px-6 py-4 hidden lg:table-cell">URL</th>
                <th className="px-6 py-4 w-32 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sorted.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-primary-dark">{post.title}</div>
                    <div className="text-slate-400 text-xs mt-1 md:hidden">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 hidden md:table-cell">{post.category}</td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded-lg text-primary-dark">/blog/{post.id}</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => openEdit(post)}
                        className="rounded-xl text-primary hover:bg-primary/10"
                        aria-label="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => requestDeleteArticle(post.id)}
                        className="rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {sorted.length === 0 && (
          <div className="p-12 text-center text-slate-500">No posts yet. Add an article or restore defaults.</div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
              <h2 className="text-lg font-bold text-primary-dark">{editingId ? 'Edit article' : 'New article'}</h2>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <form onSubmit={handleSave} className="overflow-y-auto p-6 space-y-5">
              {error && (
                <div className="rounded-xl bg-red-50 text-red-700 text-sm font-medium px-4 py-3 border border-red-100">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Title</label>
                  <input
                    className={inputClass}
                    value={draft.title}
                    onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Category</label>
                  <input
                    className={inputClass}
                    value={draft.category}
                    onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
                    placeholder="e.g. Wellness"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Display date</label>
                  <input
                    className={inputClass}
                    value={draft.date}
                    onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                    placeholder="Jan 01, 2025"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Read time</label>
                  <input
                    className={inputClass}
                    value={draft.readTime}
                    onChange={(e) => setDraft((d) => ({ ...d, readTime: e.target.value }))}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Cover image URL</label>
                  <input
                    className={inputClass}
                    value={draft.image}
                    onChange={(e) => setDraft((d) => ({ ...d, image: e.target.value }))}
                    placeholder="https://…"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Excerpt</label>
                  <textarea
                    className={`${inputClass} min-h-[88px] resize-y`}
                    value={draft.excerpt}
                    onChange={(e) => setDraft((d) => ({ ...d, excerpt: e.target.value }))}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Article body (HTML)</label>
                  <textarea
                    className={`${inputClass} min-h-[200px] resize-y font-mono text-xs leading-relaxed`}
                    value={draft.bodyHtml}
                    onChange={(e) => setDraft((d) => ({ ...d, bodyHtml: e.target.value }))}
                  />
                  <p className="text-xs text-slate-400">Sanitized on the public site for safety.</p>
                </div>
                <div className="md:col-span-2 border-t border-slate-100 pt-4 mt-2 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">SEO (optional)</p>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Meta title</label>
                    <input
                      className={inputClass}
                      value={draft.metaTitle}
                      onChange={(e) => setDraft((d) => ({ ...d, metaTitle: e.target.value }))}
                      placeholder="Overrides &lt;title&gt; for this article"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Meta description</label>
                    <textarea
                      className={`${inputClass} min-h-[72px] resize-y`}
                      value={draft.metaDescription}
                      onChange={(e) => setDraft((d) => ({ ...d, metaDescription: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button type="submit" variant="primary" size="md" className="rounded-xl px-6 py-2.5 font-bold shadow-primary/15">
                  Save article
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={closeModal}
                  className="rounded-xl border-slate-200 px-6 py-2.5 font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={confirmConfig !== null}
        onOpenChange={(next) => {
          if (!next) setConfirmConfig(null);
        }}
        title={confirmCopy.title}
        description={confirmCopy.description}
        confirmLabel={confirmCopy.confirmLabel}
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={executeConfirm}
      />
    </div>
  );
}
