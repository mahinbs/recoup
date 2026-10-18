import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ArrowLeft, CalendarDays, ChevronDown, Clock, GraduationCap, Laptop, MapPin, Wallet } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { supabase } from '../lib/supabase';
import { useAsync } from '../lib/useAsync';
import { ContactInquiryForm } from '../components/contact/ContactInquiryForm';
import BrochureRequestForm from '../components/academy/BrochureRequestForm';

const CATEGORY_LABEL = { fellowship: 'Fellowship', short_term: 'Short-term course', workshop: 'Workshop', webinar: 'Webinar' };
const ASK = 'Contact admissions';

function todayIso() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function fmtDate(v) {
  if (!v) return '';
  const d = new Date(`${String(v).slice(0, 10)}T00:00:00`);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function AcademyCourseDetail() {
  const { slug } = useParams();

  const { data, error, loading } = useAsync(async () => {
    if (!supabase) return { course: null, batches: [] };
    const { data: course, error: err } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();
    if (err) throw err;
    if (!course) return { course: null, batches: [] };
    let batches = [];
    const res = await supabase
      .from('course_batches')
      .select('*')
      .eq('course_id', course.id)
      .eq('published', true)
      .or(`start_date.is.null,start_date.gte.${todayIso()}`)
      .order('start_date', { ascending: true, nullsFirst: false });
    if (!res.error) batches = res.data || [];
    return { course, batches };
  }, [slug]);

  const course = data?.course;

  useEffect(() => {
    document.title = course ? `${course.title} | RECOUP Academy` : 'Course | RECOUP Academy';
  }, [course]);

  const html = useMemo(
    () => (course?.description_html ? DOMPurify.sanitize(course.description_html) : ''),
    [course]
  );

  const shell = (children) => <div className="bg-white min-h-screen pt-20">{children}</div>;

  if (loading) {
    return shell(
      <Section className="pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl space-y-4" aria-busy="true">
          <div className="h-10 w-2/3 animate-pulse rounded bg-slate-100" />
          <div className="h-5 w-full animate-pulse rounded bg-slate-100" />
          <div className="h-64 animate-pulse rounded-xl bg-slate-100" />
        </div>
      </Section>
    );
  }

  if (error || !course) {
    const unavailable = !supabase || error;
    return shell(
      <Section className="pt-16 md:pt-24">
        <div className="mx-auto max-w-xl text-center" data-testid="course-not-found">
          <h1 className="mb-4 font-bold text-primary-dark">{unavailable ? 'Course details unavailable' : 'Course not found'}</h1>
          <p className="mb-8 text-gray-600">
            {unavailable
              ? 'We could not load this course right now. Please try again shortly, or write to academy@recoup.health.'
              : 'This course may have been renamed or is no longer open for enrolment.'}
          </p>
          <Link to="/academy/courses" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all courses
          </Link>
        </div>
      </Section>
    );
  }

  const syllabus = Array.isArray(course.syllabus) ? course.syllabus.filter((s) => s && (s.title || (s.items || []).length)) : [];
  const faculty = Array.isArray(course.faculty) ? course.faculty.filter((f) => f && f.name) : [];
  const batches = data.batches;
  const fees =
    course.fees_inr === null || course.fees_inr === undefined
      ? null
      : `₹${Number(course.fees_inr).toLocaleString('en-IN')}`;

  const facts = [
    { icon: Clock, label: 'Duration', value: course.duration || ASK },
    { icon: GraduationCap, label: 'Eligibility', value: course.eligibility || ASK },
    { icon: Laptop, label: 'Mode', value: course.mode || ASK },
    { icon: Wallet, label: 'Fees', value: fees || 'Fees on request', note: course.fees_note },
  ];

  return shell(
    <>
      <Section className="pt-14 md:pt-20 pb-10 section-tint">
        <div className="mx-auto max-w-5xl">
          <Link to="/academy/courses" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All courses
          </Link>
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-primary">{CATEGORY_LABEL[course.category] || course.category}</span>
          <h1 className="mb-5 font-bold text-primary-dark" data-testid="course-title">{course.title}</h1>
          {course.summary && <p className="max-w-3xl text-lg text-gray-600">{course.summary}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquiry" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">Enquire now</a>
            <a href="#brochure" className="rounded-full border border-primary/30 px-7 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">Get brochure</a>
          </div>
        </div>
      </Section>

      <Section className="py-12 section-white">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {course.image_url && <img src={course.image_url} alt="" className="w-full rounded-2xl object-cover" />}

            {html && (
              <div>
                <h2 className="mb-4 text-2xl font-bold text-primary-dark">About this course</h2>
                <div
                  className="space-y-4 leading-relaxed text-gray-700 [&_a]:text-primary [&_a]:underline [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary-dark [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
                  data-testid="course-description"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            )}

            {syllabus.length > 0 && (
              <div data-testid="course-syllabus">
                <h2 className="mb-4 text-2xl font-bold text-primary-dark">Syllabus</h2>
                <div className="space-y-3">
                  {syllabus.map((s, i) => (
                    <SyllabusItem key={i} index={i} section={s} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            )}

            {faculty.length > 0 && (
              <div data-testid="course-faculty">
                <h2 className="mb-4 text-2xl font-bold text-primary-dark">Faculty</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {faculty.map((f, i) => (
                    <li key={i} className="rounded-xl border border-primary/10 bg-white p-4 shadow-sm">
                      <p className="font-semibold text-primary-dark">{f.name}</p>
                      {f.role && <p className="text-sm text-gray-500">{f.role}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div data-testid="course-batches">
              <h2 className="mb-4 text-2xl font-bold text-primary-dark">Upcoming batches</h2>
              {batches.length === 0 ? (
                <p className="rounded-xl bg-slate-50 p-5 text-gray-600">No batch dates are announced yet. Send an enquiry and we will tell you when the next one opens.</p>
              ) : (
                <ul className="space-y-3">
                  {batches.map((b) => (
                    <li key={b.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-sm">
                      <div>
                        <p className="font-semibold text-primary-dark">{b.title}</p>
                        <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" aria-hidden="true" />{b.start_date ? `Starts ${fmtDate(b.start_date)}` : 'Dates to be announced'}</span>
                          {b.location && <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" aria-hidden="true" />{b.location}</span>}
                          {b.seats != null && <span>{b.seats} seats</span>}
                        </p>
                      </div>
                      {b.registration_url && (
                        <a href={b.registration_url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                          Register
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="course-facts">
              <h2 className="mb-4 text-lg font-bold text-primary-dark">Course at a glance</h2>
              <dl className="space-y-4">
                {facts.map(({ icon, label, value, note }) => (
                  <div key={label} className="flex gap-3">
                    {React.createElement(icon, { className: 'mt-0.5 h-5 w-5 shrink-0 text-primary', 'aria-hidden': true })}
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</dt>
                      <dd className="text-sm text-gray-800">{value}</dd>
                      {note && <dd className="text-xs text-gray-500">{note}</dd>}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            <div id="brochure" className="scroll-mt-28">
              <BrochureRequestForm course={course} />
            </div>
          </aside>
        </div>
      </Section>

      <Section id="enquiry" className="py-12 section-tint scroll-mt-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm md:p-10" data-testid="enquiry-form">
          <ContactInquiryForm
            from={`academy/${course.slug}`}
            section="course_enquiry"
            idPrefix="course-enquiry"
            heading={`Enquire about ${course.title}`}
            kind="academy_inquiry"
            extra={{ course_id: course.id }}
          />
        </div>
      </Section>
    </>
  );
}

function SyllabusItem({ section, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const items = (section.items || []).filter(Boolean);
  return (
    <div className="overflow-hidden rounded-xl border border-primary/10 bg-white">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`syllabus-${index}`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary-dark hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {section.title || `Module ${index + 1}`}
          <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      {open && (
        <ul id={`syllabus-${index}`} className="list-disc space-y-1.5 px-5 pb-5 pl-10 text-sm text-gray-600">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
