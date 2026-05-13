import React, { useEffect, useState } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useSiteContent } from '../../context/SiteContentContext';
import { pageMetaByPath } from '../../seo/pageMeta';

const homeDefaults = pageMetaByPath['/'];

export default function AdminSiteSettings() {
  const { homeMeta, saveHomeMeta, resetHomeMeta, robotsTxt, saveRobotsTxt, resetRobotsTxt } = useSiteContent();
  const [title, setTitle] = useState(homeMeta?.title ?? homeDefaults.title);
  const [description, setDescription] = useState(homeMeta?.description ?? homeDefaults.description);
  const [robots, setRobots] = useState(robotsTxt);

  useEffect(() => {
    setTitle(homeMeta?.title ?? homeDefaults.title);
    setDescription(homeMeta?.description ?? homeDefaults.description);
  }, [homeMeta]);

  useEffect(() => {
    setRobots(robotsTxt);
  }, [robotsTxt]);

  const handleSaveHome = (e) => {
    e.preventDefault();
    saveHomeMeta({ title: title.trim(), description: description.trim() });
  };

  const handleResetHome = () => {
    if (!window.confirm('Clear custom homepage meta and use built-in defaults?')) return;
    resetHomeMeta();
  };

  const handleSaveRobots = (e) => {
    e.preventDefault();
    saveRobotsTxt(robots);
  };

  const handleResetRobots = () => {
    if (!window.confirm('Reset robots.txt text to the default template?')) return;
    resetRobotsTxt();
  };

  const downloadRobots = () => {
    const blob = new Blob([robots], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/25 focus:border-primary outline-none transition-all text-slate-800';

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-primary-dark tracking-tight">Site & robots</h1>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Control the homepage meta tags shown in the browser and exported SEO defaults. Robots.txt edits are stored locally;
          use <strong className="text-slate-700 font-semibold">Download</strong> to replace the file in{' '}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">public/robots.txt</code> before deploy.
        </p>
      </div>

      <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-primary-dark mb-1">Homepage meta</h2>
        <p className="text-sm text-slate-500 mb-6">Applies to the <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">/</code> route.</p>
        <form onSubmit={handleSaveHome} className="space-y-5 max-w-2xl">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Meta title</label>
            <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} required />
            <p className="text-xs text-slate-400">{title.length} characters</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Meta description</label>
            <textarea
              className={`${inputClass} min-h-[120px] resize-y`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <p className="text-xs text-slate-400">{description.length} characters</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="submit" variant="primary" size="md" className="rounded-xl px-6 py-2.5 shadow-primary/15">
              Save homepage meta
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleResetHome}
              className="gap-2 rounded-xl border-slate-200 px-5 py-2.5 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              Use built-in defaults
            </Button>
          </div>
        </form>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-primary-dark mb-1">robots.txt</h2>
        <p className="text-sm text-slate-500 mb-6">
          Stored in this browser until you download and deploy to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">public/robots.txt</code> on your host.
        </p>
        <form onSubmit={handleSaveRobots} className="space-y-5">
          <textarea
            className={`${inputClass} min-h-[220px] font-mono text-xs leading-relaxed`}
            value={robots}
            onChange={(e) => setRobots(e.target.value)}
            spellCheck={false}
          />
          <div className="flex flex-wrap gap-3">
            <Button type="submit" variant="primary" size="md" className="rounded-xl px-6 py-2.5 font-bold shadow-primary/15">
              Save robots text
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={downloadRobots}
              className="gap-2 rounded-xl border-slate-200 px-5 py-2.5 font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              Download robots.txt
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleResetRobots}
              className="gap-2 rounded-xl border-slate-200 px-5 py-2.5 font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              Reset to default
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
