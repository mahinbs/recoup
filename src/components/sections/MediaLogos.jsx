import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import logo1 from '../../assets/logos/1.png';
import logo2 from '../../assets/logos/2.png';
import logo3 from '../../assets/logos/3.png';
import logo4 from '../../assets/logos/4.png';
import logo5 from '../../assets/logos/5.png';
import logo6 from '../../assets/logos/6.png';
import logo7 from '../../assets/logos/7.png';

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
                slides: { perView: 4, spacing: 30 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 30 },
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
        { name: 'Wall Street Journal', src: logo1 },
        { name: 'The Indian Express', src: logo2 },
        { name: 'NDTV', src: logo3 },
        // { name: 'India Today', src: logo4 },
        { name: 'The Times of India', src: logo5 },
        { name: 'The Hindu', src: logo6 },
        { name: 'Hindustan Times', src: logo7 },
    ];

    return (
        <div className="w-full py-8 md:py-16 lg:py-20 relative bg-white border-b border-gray-100 overflow-hidden">
            <div className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                        Recognized By
                    </p>
                </div>
                <div ref={sliderRef} className="keen-slider flex items-center hidden-scrollbar">
                    {logos.concat(logos).map((logo) => (
                        <div key={logo.name} className="keen-slider__slide flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="max-h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 pointer-events-none"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaLogos;
