import React, { useState } from 'react';
import BookDemoModal from '../../components/BookDemoModal';

const bannerImg = 'https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg';
const speakingImg = 'https://images.pexels.com/photos/7413913/pexels-photo-7413913.jpeg';
const confidenceImg = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg';

const PersonalityDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Personality Development</h1>
            <p className="text-lg text-gray-600 mb-6">
              Build confidence, communication, and leadership with our expertly designed Personality Development course.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </button>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Personality Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Self-confidence & positive attitude</li>
              <li>Body language & grooming tips</li>
              <li>Voice modulation & speaking skills</li>
              <li>Effective communication & listening</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Public speaking & presentation</li>
              <li>Time & stress management</li>
              <li>Goal setting & self-motivation</li>
              <li>Group discussions & role plays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={speakingImg} alt="Speaking Skills" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Enhance Communication</h3>
            <p className="text-gray-700 text-lg">
              Learn how to express your thoughts clearly and confidently in both professional and social settings.
            </p>
          </div>
        </div>
      </section>

      {/* Visual 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Unlock Your Best Self</h3>
            <p className="text-gray-700 text-lg">
              Personality development isn’t just about speaking — it's about shaping confidence, mindset, and charisma.
            </p>
          </div>
          <img src={confidenceImg} alt="Confidence Building" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Want to improve your communication and confidence?
        </h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Join the Free Demo Now
        </button>
      </section>

      {/* Modal */}
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Personality Development"
      />
    </div>
  );
};

export default PersonalityDevelopment;
