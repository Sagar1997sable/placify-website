import React from 'react';

const banner = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg';
const confidence = 'https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg';
const stats = 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg';

const Introduction = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Banner */}
      <section className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 px-6 py-4 rounded">
          Welcome to Placify Institute
        </h1>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={confidence} alt="Confidence Training" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Empowering Through Communication & Confidence</h2>
            <p className="text-gray-700 text-lg">
              At Placify Institute, we don't just teach English. We nurture bold thinkers, confident speakers, and
              future leaders through a holistic blend of Spoken English, Personality Development, and Career Readiness training.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Placify’s Journey: Numbers that Matter</h2>
            <p className="text-gray-700 text-lg mb-4">
              With over <strong>30,000+ students trained</strong>, <strong>1000+ corporate professionals mentored</strong>,
              and <strong>10+ years of experience</strong>, Placify Institute has become a beacon for personal and professional growth.
            </p>
            <p className="text-gray-700 text-lg">
              From kids to job seekers, homemakers to executives — our community is proof that communication is power.
            </p>
          </div>
          <img src={stats} alt="Placify Stats" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

    </div>
  );
};

export default Introduction;
