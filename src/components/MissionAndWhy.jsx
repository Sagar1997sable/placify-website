import React from 'react';
import { FaBullseye, FaCheckCircle, FaHandsHelping, FaLightbulb, FaChalkboardTeacher } from 'react-icons/fa';

const mission = `At Placify Institute, our mission is to empower learners with fluent English, practical communication skills, and confidence — enabling them to succeed in every phase of life, whether academic, professional, or personal.`

const whyPoints = [
  { icon: <FaCheckCircle />, text: 'Certified & Experienced Trainers' },
  { icon: <FaBullseye />, text: 'Customized Learning Plans' },
  { icon: <FaLightbulb />, text: 'Interactive & Practical Training' },
  { icon: <FaChalkboardTeacher />, text: 'Focus on Communication & Confidence' },
  { icon: <FaHandsHelping />, text: 'Supportive Learning Environment' },
  { icon: <FaCheckCircle />, text: 'Affordable & Flexible Programs' },
];

const MissionAndWhy = () => {
  return (
    <>
      {/* ✅ Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {mission}
          </p>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border shadow-md hover:shadow-xl flex items-start gap-4 transition-all"
              >
                <div className="text-blue-600 text-2xl">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndWhy;
