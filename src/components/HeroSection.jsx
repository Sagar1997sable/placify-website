import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <>
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
          Welcome to <span className="text-yellow-500">Placify Institute</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Master in{' '}
          <TypeAnimation
            sequence={['English', 2000, 'Communication', 2000, 'Confidence', 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-600"
          />
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Unlock fluency, boost your confidence, and transform your career through spoken English,
          soft skills, GD-PI prep, and more — designed for kids, professionals, and future leaders.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          Book a Free Demo
        </button>
      </section>

      {/* ✅ Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-xl relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedCourse('');
              }}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-blue-700 mb-2">Get in Touch</h3>
            <p className="mb-6 text-gray-600">Take a free demo and begin your journey!</p>

            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border rounded"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded"
              />

              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2 border rounded bg-white"
              >
                <option value="">Select Course</option>
                <option value="Spoken English">Spoken English</option>
                <option value="Personality Development">Personality Development</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="GDPI">GDPI</option>
                <option value="Teachers Training">Teachers Training</option>
                <option value="Kids Training">Kids Training</option>
              </select>

              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
