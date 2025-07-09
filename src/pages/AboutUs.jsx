import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Placify Institute</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          At <strong>Placify Institute</strong>, we’re on a mission to transform lives through the power of English fluency, personality development, and essential professional skills. Whether you're a student, job seeker, or working professional — we help you gain the confidence to speak and lead.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-12 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to equip learners with lifelong communication and leadership skills,
            fostering personal growth and career advancement. We believe in building confidence, clarity,
            and character in every individual who joins us.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Placify?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Experienced Trainers',
                text: 'Learn from certified experts with over 10+ years of training experience in soft skills, English communication, and interview prep.',
              },
              {
                title: 'Flexible Batches',
                text: 'Join online or offline classes that match your availability — weekdays, weekends, or fast-track options.',
              },
              {
                title: 'Practical Learning',
                text: 'Our sessions are interactive and activity-based, focused on real-world use cases and industry demands.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center bg-blue-100">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to begin your transformation?
        </h2>
        <a
          href="/#"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:bg-blue-800 transition"
        >
          Book Your Free Demo
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
