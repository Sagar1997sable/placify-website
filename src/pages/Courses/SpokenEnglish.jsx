import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const bannerImg = "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg";
const speakingImg = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg";
const confidenceImg = "https://images.unsplash.com/photo-1588702547919-26089e690ecc";

const SpokenEnglish = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Spoken English Course</h1>
            <p className="text-lg text-gray-600 mb-6">
              Unlock the power of confident English communication — from casual conversations to professional presentations. Designed for all levels!
            </p>
            <Link
              to="/?course=Spoken%20English"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Spoken English Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fluency through daily conversation practice</li>
              <li>Grammar correction for natural sentence structure</li>
              <li>Vocabulary building for real-life scenarios</li>
              <li>Pronunciation and accent improvement</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Interview & presentation skills</li>
              <li>Confidence-building activities</li>
              <li>Public speaking and group discussions</li>
              <li>Real-life role-play and voice modulation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Feature 1 */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={speakingImg} alt="Speaking Practice" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Speak with Confidence</h3>
            <p className="text-gray-700 text-lg">
              From greetings to storytelling — gain fluency and spontaneity with practical, real-world speaking drills led by certified trainers.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Feature 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Boost Your Confidence</h3>
            <p className="text-gray-700 text-lg">
              Our environment is supportive and interactive — helping you feel confident while speaking in interviews, meetings, and public forums.
            </p>
          </div>
          <img src={confidenceImg} alt="Confidence Training" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Ready to take your English to the next level?
        </h3>
        <Link
              to="/?course=Spoken%20English"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book Your Free Demo
            </Link>
      </section>

      
    </div>
  );
};

export default SpokenEnglish;
