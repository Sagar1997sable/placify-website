import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const bannerImg = 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg';
const teamImg = 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg';
const leadershipImg = 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg';

const CorporateTraining = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Corporate Training</h1>
            <p className="text-lg text-gray-600 mb-6">
              Transform your workforce with practical soft skills, communication mastery, leadership and team collaboration training.
            </p>
            <Link
              to="/?course=Corporate%20Training"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Corporate Training Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Effective workplace communication</li>
              <li>Leadership and delegation</li>
              <li>Professional email & writing skills</li>
              <li>Public speaking and confidence building</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Time and stress management</li>
              <li>Conflict resolution and team handling</li>
              <li>Presentation and meeting etiquette</li>
              <li>Interview & HR communication skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={teamImg} alt="Team Communication" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Collaborate Effectively</h3>
            <p className="text-gray-700 text-lg">
              Learn modern communication strategies, presentation techniques, and collaborative tools to enhance workplace productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Empower Leadership</h3>
            <p className="text-gray-700 text-lg">
              Help your teams grow into leaders with personalized training in motivation, decision-making, and team mentorship.
            </p>
          </div>
          <img src={leadershipImg} alt="Leadership Skills" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Want to empower your team with corporate-ready communication skills?
        </h3>
        <Link
          to="/?course=Corporate%20Training"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Book a Free Demo
        </Link>
      </section>
      
    </div>
  );
};

export default CorporateTraining;
