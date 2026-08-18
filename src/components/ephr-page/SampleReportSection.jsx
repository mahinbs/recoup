import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText, ShieldCheck, Info, Loader2 } from 'lucide-react';
import samplePdfUrl from '../../assets/new-images/SampleEPHReport.pdf?url';
import { cn } from '../../lib/utils';

const FLIP_MS = 500;
const RENDER_WIDTH = 720;

async function renderPdfPage(pdf, pageNum) {
  const page = await pdf.getPage(pageNum);
  const unscaled = page.getViewport({ scale: 1 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const scale = Math.min((RENDER_WIDTH / unscaled.width) * dpr, 2.4);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvas, canvasContext: context, viewport }).promise;
  const url = canvas.toDataURL('image/jpeg', 0.84);
  canvas.width = 0;
  canvas.height = 0;
  return url;
}

function useSampleEphrPages() {
  const [pages, setPages] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let loadingTask;

    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        const { default: pdfWorker } = await import(
          'pdfjs-dist/build/pdf.worker.min.mjs?url'
        );
        pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

        const pdfSrc =
          typeof samplePdfUrl === 'string'
            ? samplePdfUrl
            : samplePdfUrl?.href || samplePdfUrl?.default || '';
        if (!pdfSrc) {
          throw new Error('Sample report file is missing.');
        }

        const response = await fetch(pdfSrc);
        if (!response.ok) {
          throw new Error('Unable to load the sample report.');
        }
        const data = new Uint8Array(await response.arrayBuffer());
        loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const urls = new Array(pdf.numPages).fill(null);
        urls[0] = await renderPdfPage(pdf, 1);
        if (cancelled) return;
        setPages(urls.slice());
        setStatus('ready');

        for (let i = 2; i <= pdf.numPages; i += 1) {
          urls[i - 1] = await renderPdfPage(pdf, i);
          if (cancelled) return;
          setPages(urls.slice());
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setStatus('error');
        }
      }
    })();

    return () => {
      cancelled = true;
      loadingTask?.destroy?.();
    };
  }, []);

  return { pages, status, error };
}

function ReportPage({ src, pageNumber }) {
  if (!src) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-white">
        <Loader2 className="w-6 h-6 animate-spin text-primary" aria-hidden />
        <span className="sr-only">Loading page {pageNumber}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Sample EPHR report, page ${pageNumber}`}
      className="sr-pdf-page"
      draggable={false}
    />
  );
}

const SampleReportSection = () => {
  const { pages, status, error } = useSampleEphrPages();
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(null);
  const timeoutRef = useRef(null);
  const total = pages.length;

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const goTo = (target) => {
    if (!total || flip) return;
    const next = Math.max(0, Math.min(total - 1, target));
    if (next === page) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || Math.abs(next - page) > 1) {
      setPage(next);
      return;
    }

    setFlip({ dir: next > page ? 'next' : 'prev', from: page, to: next });
    timeoutRef.current = setTimeout(() => {
      setPage(next);
      setFlip(null);
    }, FLIP_MS);
  };

  const scrollToPreview = () => {
    document.getElementById('sample-report-preview')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const currentIndex = flip ? flip.to : page;
  const showBook = status === 'ready' && total > 0;

  return (
    <section id="sample-report" className="relative w-full bg-[#f7f4fb] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl border border-primary/10 bg-white/80 backdrop-blur-sm shadow-xl shadow-primary/5 overflow-visible lg:overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Sample EPHR Report
              </span>
              <h2 className="font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Explore a Sample EPHR
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                See how your health story comes together in one comprehensive
                report.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Flip through the pages of a sample Entire Person Health Report
                and discover how we turn complex data into clear insights and
                personalized recommendations.
              </p>

              <button
                type="button"
                onClick={scrollToPreview}
                className="inline-flex items-center justify-center gap-2 w-fit px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm shadow-lg shadow-primary/25 hover:bg-primary-darker transition-colors"
              >
                <FileText className="w-4 h-4" />
                Explore the Sample Report
              </button>

              <div className="flex items-center gap-2 mt-5 text-sm text-slate-600">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Secure & Confidential</span>
              </div>

              <div className="mt-8 flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-700">Illustrative sample:</strong>{' '}
                  This preview is for demonstration purposes only. Your actual
                  EPHR is personalized based on your health assessment,
                  laboratory investigations, and physician evaluation.
                </p>
              </div>

              <Link
                to="/contact?from=ephr&section=sample_report"
                className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors w-fit"
              >
                Book your assessment →
              </Link>
            </div>

            <div
              id="sample-report-preview"
              className="relative bg-gradient-to-br from-[#f3ecfa] to-[#ebe3f7] p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-primary/10 overflow-visible"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-x-10 top-3 h-full rounded-2xl bg-white/60 border border-white/80 translate-y-2 pointer-events-none" />
                <div className="absolute inset-x-8 top-1.5 h-full rounded-2xl bg-white/80 border border-white shadow-sm translate-y-1 pointer-events-none" />

                <div className="relative flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    aria-label="Previous page"
                    onClick={() => goTo(page - 1)}
                    disabled={!showBook || page === 0 || !!flip}
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors z-10 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    className="sample-ephr-flip relative flex-1 aspect-[210/297] max-h-[min(72vh,560px)] z-[1]"
                    style={{ perspective: '1800px' }}
                  >
                    {!showBook && (
                      <div className="sr-leaf sr-leaf-base flex flex-col items-center justify-center gap-3 px-6 text-center">
                        {status === 'error' ? (
                          <p className="text-sm text-slate-500">
                            {error?.message || 'Unable to load the sample report.'}
                          </p>
                        ) : (
                          <>
                            <Loader2 className="w-7 h-7 animate-spin text-primary" />
                            <p className="text-xs text-slate-500">Loading sample report…</p>
                          </>
                        )}
                      </div>
                    )}

                    {showBook && (
                      <div className="sr-book">
                        <div className="sr-leaf sr-leaf-base">
                          <ReportPage
                            src={pages[flip ? flip.to : page]}
                            pageNumber={(flip ? flip.to : page) + 1}
                          />
                        </div>
                        {flip && (
                          <div className={`sr-leaf sr-leaf-flip sr-flip-${flip.dir}`}>
                            <div className="sr-leaf-face sr-leaf-front">
                              <ReportPage src={pages[flip.from]} pageNumber={flip.from + 1} />
                            </div>
                            <div className="sr-leaf-face sr-leaf-back">
                              <div className="sr-leaf-back-brand">RECOUP Health</div>
                            </div>
                          </div>
                        )}
                        <div className="sr-book-shadow" />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    aria-label="Next page"
                    onClick={() => goTo(page + 1)}
                    disabled={!showBook || page === total - 1 || !!flip}
                    className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/30 transition-colors z-10 disabled:opacity-40"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">
                    {showBook ? `${currentIndex + 1} / ${total}` : '—'}
                  </span>
                  {showBook && (
                    <div className="flex flex-wrap justify-center gap-1 max-w-[240px]">
                      {pages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Go to page ${i + 1}`}
                          onClick={() => goTo(i)}
                          disabled={!!flip}
                          className={cn(
                            'h-1.5 rounded-full transition-all disabled:pointer-events-none',
                            i === page
                              ? 'w-4 bg-primary'
                              : 'w-1.5 bg-slate-300 hover:bg-slate-400',
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportSection;
