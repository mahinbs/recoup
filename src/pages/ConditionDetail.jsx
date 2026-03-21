import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { conditions } from '../conditions/conditions';

const ConditionDetail = () => {
    const { slug } = useParams();

    const condition = useMemo(
        () => conditions.find((c) => c.slug === slug),
        [slug]
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!condition) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24 pb-20 px-4">
                <div className="text-center max-w-md">
                    <h1 className="text-2xl font-bold text-primary-dark mb-4">Program Not Found</h1>
                    <p className="text-gray-500 mb-8">
                        The program you are looking for does not exist or may have been moved.
                    </p>
                    <Link
                        to="/conditions"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
                    >
                        <ArrowLeft size={18} /> Back to all programs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="bg-slate-50 min-h-screen pt-24 pb-20">
            <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <Link
                    to="/conditions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft size={16} /> Back to all programs
                </Link>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 font-medium mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Recoup Program
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6">
                    {condition.fullTitle}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-10">
                    {condition.desc}
                </p>

                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                    <img
                        src={condition.cover}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>

            <div
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 [&_a]:text-primary [&_a:hover]:text-primary-light [&_a]:font-semibold"
                dangerouslySetInnerHTML={{ __html: condition.html }}
            />
        </article>
    );
};

export default ConditionDetail;
