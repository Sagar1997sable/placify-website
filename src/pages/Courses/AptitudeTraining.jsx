import React from 'react';
import { Link } from 'react-router-dom';

const bannerImg = 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg';
const problemSolvingImg = 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg';
const logicalReasoningImg = 'https://images.pexels.com/photos/5380656/pexels-photo-5380656.jpeg';

const AptitudeTraining = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Aptitude Training</h1>
            <p className="text-lg text-gray-600 mb-6">
              Boost your numerical and logical reasoning with practical aptitude training — ideal for competitive exams, placements, and problem-solving skills.
            </p>
            <Link
              to="/?course=Aptitude%20Training"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Aptitude Training Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Quantitative aptitude techniques</li>
              <li>Number systems & time management</li>
              <li>Data interpretation and graphs</li>
              <li>Basic arithmetic and problem solving</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Logical reasoning patterns</li>
              <li>Verbal and non-verbal logic</li>
              <li>Mock tests and evaluation</li>
              <li>Exam-focused shortcuts and tips</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Feature 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={problemSolvingImg} alt="Problem Solving" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Problem Solving Made Easy</h3>
            <p className="text-gray-700 text-lg">
              Learn to tackle quantitative problems quickly and accurately using mental math, strategic elimination, and real-world application drills.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Feature 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Crack Logical Reasoning</h3>
            <p className="text-gray-700 text-lg">
              Strengthen your logical and analytical skills with practice sets, real exam patterns, and time-tested reasoning techniques.
            </p>
          </div>
          <img src={logicalReasoningImg} alt="Logical Reasoning" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Want to master aptitude for placements and exams?
        </h3>
        <Link
          to="/?course=Aptitude%20Training"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition"
        >
          Book Your Free Demo
        </Link>
      </section>
    </div>
  );
};

export default AptitudeTraining;
