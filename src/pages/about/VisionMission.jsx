import React from 'react';

const bannerImg = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg';
const missionImg = 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg';

const VisionMission = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section
        className="h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 px-6 py-3 rounded">
          Our Vision & Mission
        </h1>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To be India’s leading institute for English communication and personal excellence,
            creating confident individuals ready to lead, grow, and inspire.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
              <li>Deliver high-quality training in spoken English, soft skills & personality development.</li>
              <li>Provide accessible learning to all — kids, students, homemakers & professionals.</li>
              <li>Empower learners with the confidence and communication skills to thrive in modern workplaces.</li>
            </ul>
          </div>
          <img src={missionImg} alt="Mission" className="w-full lg:w-1/2 rounded-xl shadow" />
        </div>
      </section>

    </div>
  );
};

export default VisionMission;
