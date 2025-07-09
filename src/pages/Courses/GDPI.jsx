import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const bannerImg = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg';
const gdImg = 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg';
const piImg = 'https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg';

const GDPI = () => {
  

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">GD & PI Preparation</h1>
            <p className="text-lg text-gray-600 mb-6">
              Crack group discussions and personal interviews with confidence, strategy, and communication mastery.
            </p>
            <Link
              to="/?course=GDPI"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="GDPI Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Group discussion structure & etiquette</li>
              <li>How to initiate, support, and conclude a GD</li>
              <li>Real-time practice with performance feedback</li>
              <li>Common GD topics & strategies</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Interview body language & attire</li>
              <li>Mock HR & technical interviews</li>
              <li>Answering strengths, weaknesses, and goals</li>
              <li>Time-bound thinking and speaking clarity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={gdImg} alt="Group Discussion" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Master Group Discussions</h3>
            <p className="text-gray-700 text-lg">
              Practice GDs in real settings, learn topic handling, and get structured feedback to improve clarity, logic, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Visual 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Crack Every Interview</h3>
            <p className="text-gray-700 text-lg">
              With our mock interview modules, build fluency and confidence to handle technical, HR, and personality-based questions.
            </p>
          </div>
          <img src={piImg} alt="Personal Interview" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to ace your next group discussion or interview?
        </h3>
        <Link
          to="/?course=GDPI"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Join the Free Demo Now
        </Link>
      </section>
    </div>
  );
};

export default GDPI;
