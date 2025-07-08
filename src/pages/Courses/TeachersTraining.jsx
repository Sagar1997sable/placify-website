import React, { useState } from 'react';
import BookDemoModal from '../../components/BookDemoModal';

const bannerImg = 'https://images.pexels.com/photos/8617726/pexels-photo-8617726.jpeg';
const engageImg = 'https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg';
const onlineImg = 'https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg';

const TeachersTraining = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Teacher's Training</h1>
            <p className="text-lg text-gray-600 mb-6">
              Learn modern teaching strategies, classroom management, and educational technology to become a confident, effective educator.
            </p>
             <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </button>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Teacher's Training Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Modern classroom techniques</li>
              <li>Interactive lesson planning</li>
              <li>Child psychology basics</li>
              <li>Assessments & student feedback</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Technology in teaching (online tools)</li>
              <li>Voice, presentation & delivery</li>
              <li>Handling diverse learning styles</li>
              <li>Professional grooming for educators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={engageImg} alt="Classroom Engagement" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Classroom Mastery</h3>
            <p className="text-gray-700 text-lg">
              Learn how to engage students, manage class flow, and deliver impactful sessions in any educational setting.
            </p>
          </div>
        </div>
      </section>

      {/* Visual 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Digital-Ready Training</h3>
            <p className="text-gray-700 text-lg">
              We prepare you for online and hybrid classrooms with tools, tech, and real practice for screen-based delivery.
            </p>
          </div>
          <img src={onlineImg} alt="Online Teaching" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to shape the future as a 21st-century educator?
        </h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Book Your Free Demo
        </button>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Teacher's Training"
      />

    </div>
  );
};

export default TeachersTraining;
