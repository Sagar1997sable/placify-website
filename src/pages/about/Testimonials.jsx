import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Aditi Sharma',
    text: 'Placify helped me build confidence in speaking English. The role-plays and feedback made all the difference!',
  },
  {
    name: 'Ravi Kumar',
    text: 'The corporate communication training was outstanding! I aced my interviews with ease.',
  },
  {
    name: 'Sonal Mehta',
    text: 'The teachers are amazing and they give personal attention to each student. Highly recommended!',
  },
  {
    name: 'Arjun Patel',
    text: 'Placify’s mock interviews were a game changer. I speak better, think faster, and feel confident.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Title */}
      <section className="py-16 bg-blue-50 text-center">
        <h1 className="text-4xl font-bold text-blue-700">What Our Students Say</h1>
        <p className="text-gray-600 mt-3">Real voices. Real results.</p>
      </section>

      {/* Testimonial Slider */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
