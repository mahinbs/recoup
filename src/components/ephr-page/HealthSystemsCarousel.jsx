import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Reveal from './Reveal';
import 'swiper/css';
import 'swiper/css/free-mode';

const systems = [
    { name: 'Metabolic Health', img: 'https://images.pexels.com/photos/15837848/pexels-photo-15837848.jpeg' },
    { name: 'Hormonal Balance', img: 'https://images.pexels.com/photos/8076105/pexels-photo-8076105.jpeg' },
    {
        name: 'Inflammation',
        img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'Nutritional Status',
        img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'Cardiovascular Function',
        img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'Digestive Health',
        img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    },
    {
        name: 'Stress & Recovery',
        img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    },
    { name: 'Sleep Health', img: 'https://images.pexels.com/photos/3807760/pexels-photo-3807760.jpeg' },
];

const HealthSystemsCarousel = () => {
    return (
        <section className="ephr-section py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-7xl mb-16">
                <Reveal>
                    <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 tracking-tight">
                        Health Systems <span className="italic font-light text-primary">Assessed</span>
                    </h2>
                    <p className="font-sans text-xl text-slate-600 font-light border-l-2 border-primary/30 pl-4">
                        Each system is evaluated individually — and in relation to the others.
                    </p>
                </Reveal>
            </div>

            <div className="w-full relative px-6 md:px-0">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    freeMode
                    grabCursor
                    speed={600}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                        1280: { slidesPerView: 4.5 },
                    }}
                    className="!pl-6 md:!pl-32 !pb-12"
                >
                    {systems.map((sys) => (
                        <SwiperSlide key={sys.name} className="h-auto">
                            <div className="h-full rounded-2xl overflow-hidden shadow-lg group relative aspect-[3/4]">
                                <img
                                    src={sys.img}
                                    alt={sys.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="w-8 h-1 bg-primary mb-4" />
                                    <h3 className="font-serif text-2xl text-white leading-tight drop-shadow-md">
                                        {sys.name}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HealthSystemsCarousel;
