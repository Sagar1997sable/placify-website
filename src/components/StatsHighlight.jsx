import React from 'react';

const stats = [
  { number: '30,000+', label: 'Students Trained' },
  { number: '10+', label: 'Years of Experience' },
  { number: '1000+', label: 'Corporate Professionals Trained' },
];

const StatsHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-700 mb-2">{item.number}</h3>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHighlight;
