import React, { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';

const LazyVideo = forwardRef(function LazyVideo(
    { src, className = '', poster, children, ...props },
    forwardedRef
) {
    const videoRef = useRef(null);

    useImperativeHandle(forwardedRef, () => videoRef.current);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { rootMargin: '120px', threshold: 0.1 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            playsInline
            loop
            preload="none"
            className={className}
            {...props}
        >
            {children}
        </video>
    );
});

export default LazyVideo;
