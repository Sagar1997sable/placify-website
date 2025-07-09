import React from 'react';

const differences = [
  {
    title: 'British Council Certified Trainers',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    desc: 'Our educators are certified professionals with a deep understanding of language pedagogy and practical communication.',
  },
  {
    title: 'Personalized Mentoring',
    img: 'https://cdn-icons-png.flaticon.com/512/4762/4762314.png',
    desc: 'We assess every student and tailor learning paths to suit individual strengths and areas of improvement.',
  },
  {
    title: 'Live Practical Sessions',
    img: 'https://cdn-icons-png.flaticon.com/512/3771/3771554.png',
    desc: 'Interactive role-plays, group discussions, and presentations that simulate real-world communication.',
  },
  {
    title: 'Holistic Soft Skills Focus',
    img: 'https://cdn-icons-png.flaticon.com/512/4359/4359980.png',
    desc: 'Training includes confidence-building, grooming, articulation, and corporate etiquette — all in one course.',
  },
  {
    title: 'Demo & Feedback Driven',
    img: 'https://cdn-icons-png.flaticon.com/512/4213/4213179.png',
    desc: 'We believe in performance-based growth through regular feedback sessions and personalized improvement strategies.',
  },
  {
    title: 'Child to Corporate Coverage',
    img: 'https://cdn-icons-png.flaticon.com/512/3824/3824412.png',
    desc: 'Courses crafted for every stage — from foundational English for kids to advanced communication for professionals.',
  },
];

const bgImage =
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const WhatMakesUsDifferent = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero with Background Image */}
      <section
        className="py-24 text-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${bgImage})`,
        }}
      >
        <h1 className="text-4xl font-bold mb-4">What Makes Placify Different?</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          Experience education designed not just to teach — but to transform. Here’s what sets us apart.
        </p>
      </section>

      {/* Features with Light Pattern Background */}
      <section
        className="py-16 px-6"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {differences.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <img src={item.img} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatMakesUsDifferent;
