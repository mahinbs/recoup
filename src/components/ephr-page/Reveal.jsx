import React, { useRef, useEffect } from 'react';

const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.classList.add('ephr-visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('ephr-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`ephr-reveal ${className}`.trim()}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
