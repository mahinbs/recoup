import React from 'react';
import { Download } from 'lucide-react';
import { supabase } from '../../../lib/supabase';
import { useAsync } from '../../../lib/useAsync';
import { Button } from '../../../components/ui/Button';
import { QUIZ_NAMES, summarizeResult } from '../../../lib/ai/summary';

const fmt = (v) => (v ? new Date(v).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '-');
const csvCell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;

export default function AdminQuizResults() {
  const { data: rows, error, loading } = useAsync(async () => {
    if (!supabase) throw new Error('The backend is not configured.');
    const res = await supabase
      .from('quiz_results')
      .select('id,quiz,answers,result,name,email,phone,created_at')
      .order('created_at', { ascending: false })
      .limit(1000);
    if (res.error) throw res.error;
    return res.data;
  }, []);

  const exportCsv = () => {
    const head = ['Date', 'Quiz', 'Name', 'Email', 'Phone', 'Result summary', 'Result JSON'];
    const lines = [head.map(csvCell).join(',')].concat(
      (rows || []).map((r) =>
        [r.created_at, QUIZ_NAMES[r.quiz] || r.quiz, r.name, r.email, r.phone, summarizeResult(r.quiz, r.result), JSON.stringify(r.result)].map(csvCell).join(','),
      ),
    );
    const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-results-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">Tool results</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">Results saved from the dosha quiz, metabolic age estimator and fitness readiness check. Read only. Rows without contact details are anonymous.</p>
        </div>
        <Button type="button" variant="outline" onClick={exportCsv} disabled={!rows?.length} className="gap-2" data-testid="quiz-export">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>
      {error && <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error.message}</div>}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Tool</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && <tr><td colSpan={4} className="px-4 py-8 text-center text-slate-400">Loading…</td></tr>}
            {!loading && rows && rows.length === 0 && <tr><td colSpan={4} className="px-4 py-10 text-center text-slate-400" data-testid="empty-state">No results yet.</td></tr>}
            {(rows || []).map((r) => (
              <tr key={r.id} className="align-top hover:bg-slate-50/60">
                <td className="whitespace-nowrap px-4 py-3 text-slate-700">{fmt(r.created_at)}</td>
                <td className="px-4 py-3 text-slate-700">{QUIZ_NAMES[r.quiz] || r.quiz}</td>
                <td className="px-4 py-3 text-slate-700">
                  {r.name || r.email || r.phone ? (
                    <>
                      {r.name && <div className="font-medium">{r.name}</div>}
                      {r.email && <div className="text-xs text-slate-500">{r.email}</div>}
                      {r.phone && <div className="text-xs text-slate-500">{r.phone}</div>}
                    </>
                  ) : (
                    <span className="text-slate-400">Anonymous</span>
                  )}
                </td>
                <td className="px-4 py-3 text-slate-700">{summarizeResult(r.quiz, r.result)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
