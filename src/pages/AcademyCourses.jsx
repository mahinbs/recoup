import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Laptop, Wallet } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { supabase } from '../lib/supabase';
import { useAsync } from '../lib/useAsync';

const TABS = [
  { value: 'all', label: 'All' },
  { value: 'fellowship', label: 'Fellowship' },
  { value: 'short_term', label: 'Short-term' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'webinar', label: 'Webinar' },
];
const CATEGORY_LABEL = { fellowship: 'Fellowship', short_term: 'Short-term', workshop: 'Workshop', webinar: 'Webinar' };

function formatFees(course) {
  return course.fees_inr === null || course.fees_inr === undefined
    ? 'Fees on request'
    : `₹${Number(course.fees_inr).toLocaleString('en-IN')}`;
}

export default function AcademyCourses() {
  const [tab, setTab] = useState('all');

  useEffect(() => {
    document.title = 'Courses | RECOUP Academy';
  }, []);

  const { data, error, loading } = useAsync(async () => {
    if (!supabase) return null;
    const { data: rows, error: err } = await supabase
      .from('courses')
      .select('id,slug,title,category,summary,duration,mode,fees_inr,image_url,sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true });
    if (err) throw err;
    return rows || [];
  }, []);

  const courses = (data || []).filter((c) => tab === 'all' || c.category === tab);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Section className="pt-16 md:pt-24 pb-10 section-tint text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">RECOUP Academy</span>
          <h1 className="font-bold text-primary-dark mb-6">Courses and Programmes</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fellowships, short-term courses, workshops and webinars for physicians, therapists, nutritionists and allied health professionals.
          </p>
        </div>
      </Section>

      <Section className="py-10 section-white">
        <div className="max-w-7xl mx-auto">
          <div role="tablist" aria-label="Course category" className="mb-8 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.value}
                type="button"
                role="tab"
                aria-selected={tab === t.value}
                onClick={() => setTab(t.value)}
                data-testid={`course-tab-${t.value}`}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  tab === t.value ? 'bg-primary text-white' : 'bg-primary/5 text-primary hover:bg-primary/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {!supabase && (
            <p className="rounded-xl bg-slate-50 p-6 text-center text-gray-600" data-testid="courses-unavailable">
              Course listings are not available right now. Please write to academy@recoup.health and we will share the details.
            </p>
          )}
          {supabase && loading && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-busy="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-64 animate-pulse rounded-xl bg-slate-100" />
              ))}
            </div>
          )}
          {supabase && error && (
            <p role="alert" className="rounded-xl bg-red-50 p-6 text-center text-red-700">
              We could not load the courses. Please refresh the page or try again in a few minutes.
            </p>
          )}
          {supabase && !loading && !error && courses.length === 0 && (
            <p className="rounded-xl bg-slate-50 p-6 text-center text-gray-600" data-testid="courses-empty">
              {tab === 'all' ? 'No courses are open at the moment.' : 'No courses in this category right now.'} Please check back soon or contact admissions.
            </p>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <Link key={c.id} to={`/academy/courses/${c.slug}`} className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" data-testid="course-card">
                <Card className="group flex h-full flex-col overflow-hidden border-none bg-white shadow-sm hover:shadow-xl">
                  {c.image_url && <img src={c.image_url} alt="" loading="lazy" className="h-44 w-full object-cover" />}
                  <CardContent className="flex flex-grow flex-col p-6">
                    <span className="mb-3 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {CATEGORY_LABEL[c.category] || c.category}
                    </span>
                    <h2 className="mb-3 text-xl font-bold text-primary-dark group-hover:text-primary transition-colors">{c.title}</h2>
                    {c.summary && <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-500">{c.summary}</p>}
                    <ul className="mb-5 mt-auto space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden="true" /> {c.duration || 'Contact admissions'}</li>
                      <li className="flex items-center gap-2"><Laptop className="h-4 w-4 text-primary" aria-hidden="true" /> {c.mode || 'Contact admissions'}</li>
                      <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" aria-hidden="true" /> {formatFees(c)}</li>
                    </ul>
                    <span className="flex items-center text-sm font-bold text-primary-light transition-transform group-hover:translate-x-1">
                      View details <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
