import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, PlayCircle } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { useAsync } from '../lib/useAsync';

/** YouTube/Vimeo links become embeds; anything else is played as a plain video file. */
function VideoPlayer({ url, title }) {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  const embed = yt ? `https://www.youtube-nocookie.com/embed/${yt[1]}` : vimeo ? `https://player.vimeo.com/video/${vimeo[1]}` : null;
  return embed ? (
    <iframe className="aspect-video w-full rounded-2xl" src={embed} title={`Video: ${title}`} loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen />
  ) : (
    <video className="aspect-video w-full rounded-2xl bg-black" src={url} controls preload="none" aria-label={`Video: ${title}`} />
  );
}

export default function Testimonials() {
  useEffect(() => {
    document.title = 'Patient Success Stories | RECOUP Health Bangalore';
  }, []);
  const { data, loading, error } = useAsync(async () => {
    if (!supabase) return [];
    const { data: rows, error: err } = await supabase.from('testimonials').select('*').eq('published', true).order('sort_order').order('created_at', { ascending: false });
    if (err) throw err;
    return rows;
  }, []);
  const items = data || [];
  const videos = items.filter((t) => t.video_url);
  const texts = items.filter((t) => !t.video_url);

  return (
    <div className="bg-white min-h-screen pt-20">
      <Section className="pt-16 md:pt-24 pb-10 section-tint text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Success stories</span>
          <h1 className="font-bold text-primary-dark mb-6">Real people. Real recovery.</h1>
          <p className="text-gray-600 text-lg">Hear from patients who finally found answers and a plan that worked.</p>
        </div>
      </Section>

      <Section className="py-12 section-white">
        <div className="max-w-7xl mx-auto">
          {loading && <p className="text-center text-gray-400">Loading stories…</p>}
          {error && <p className="text-center text-gray-500">We could not load the stories right now. Please try again shortly.</p>}
          {!loading && !error && items.length === 0 && <p className="text-center text-gray-500" data-testid="testimonials-empty">New stories are coming soon.</p>}

          {videos.length > 0 && (
            <div className="mb-14">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-primary-dark"><PlayCircle className="h-6 w-6" /> Watch their stories</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((t) => (
                  <figure key={t.id} data-testid="testimonial-video" className="space-y-3">
                    <VideoPlayer url={t.video_url} title={t.name} />
                    <figcaption>
                      <p className="font-semibold text-primary-dark">{t.name}</p>
                      {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
                      {t.content && <p className="mt-2 text-sm text-gray-600">{t.content}</p>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {texts.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {texts.map((t) => (
                <blockquote key={t.id} data-testid="testimonial-card" className="relative flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                  <Quote className="mb-4 h-8 w-8 text-primary-light" />
                  <p className="flex-grow leading-relaxed text-gray-700">{t.content}</p>
                  <footer className="mt-6 flex items-center gap-4">
                    {t.image_url ? (
                      <img src={t.image_url} alt={t.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{t.name.slice(0, 1)}</span>
                    )}
                    <div>
                      <p className="font-semibold text-primary-dark">{t.name}</p>
                      {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Link to="/book?from=testimonials"><Button size="lg">Book a consultation</Button></Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
