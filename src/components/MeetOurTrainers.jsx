import React from 'react';
import anshulImg from '../assets/Anshul.jpg';
import hitendraImg from '../assets/hitendra_singh.jpg';
import soniaImg from '../assets/Sonia_awasthi.jpg';
import ajayImg from '../assets/Ajay Thakur.jpg';

const trainers = [
  
  {
    name: 'Hitendra Singh Parihar',
    description: "Soft Skills Trainer with 6+ years' experience delivering impactful, customized learning in communication, leadership, and team collaboration.",
    image: hitendraImg,
  },

  {
    name: 'Anshul Saxena',
    description: 'Experienced Aptitude Trainer with 8+ years mentoring 30,000+ students in Quant, Reasoning, Verbal Ability, and Soft Skills.',
    image: anshulImg,
  },
  
  {
    name: 'Sonia Awasthi',
    description: "Freelance trainer with 12+ years' experience in soft skills, communication, interview prep, and leadership training.",
    image: soniaImg,
  },
  {
    name: 'Ajay Singh Thakur',
    description: "Empowering tech talent with 11+ years' expertise in Java, MERN Stack, and full-stack training.",
    image: ajayImg,
  },
];

const MeetOurTrainers = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Meet Our Trainers</h2>

      <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-72 object-contain rounded-t-lg"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{trainer.name}</h3>
              <p className="text-sm text-gray-600">{trainer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTrainers;
