import React from 'react';
import { Section } from '../ui/Section';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const animation = { duration: 25000, easing: (t) => t };

const MediaLogos = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: 3,
            spacing: 30,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 4, spacing: 40 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 50 },
            },
            "(min-width: 1280px)": {
                slides: { perView: 6, spacing: 50 },
            },
        },
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    });

    const logos = [
        { name: "Forbes", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=Forbes" },
        { name: "The Times of India", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=Times+of+India" },
        { name: "The Hindu", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=The+Hindu" },
        { name: "The Economic Times", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=Economic+Times" },
        { name: "NDTV", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=NDTV" },
        { name: "Healthline", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=Healthline" },
        { name: "CNN", url: "https://placehold.co/400x150/000000/FFFFFF/svg?text=CNN" },
    ];

    return (
        <Section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                        Recognized By
                    </p>
                </div>
                <div ref={sliderRef} className="keen-slider h-12 flex items-center hidden-scrollbar">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="keen-slider__slide flex items-center justify-center">
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="max-h-7 md:max-h-9 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 pointer-events-none rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MediaLogos;
