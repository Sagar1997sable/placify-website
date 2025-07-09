import React from 'react';

const team = [
  {
    name: 'Hitendra Singh Parihar',
    role: 'Soft Skills Trainer',
    desc: '6+ years of delivering impactful communication and leadership training.',
    img: require('../../assets/hitendra_singh.jpg'),
  },
  
  {
    name: 'Anshul Saxena',
    role: 'Aptitude Trainer',
    desc: 'Expert in Quant, Reasoning, Verbal Ability with 8+ years mentoring 30,000+ students.',
    img: require('../../assets/Anshul.jpg'),
  },
  
  {
    name: 'Sonia Awasthi',
    role: 'Personality Coach',
    desc: '12+ years in soft skills, interview prep & professional grooming.',
    img: require('../../assets/Sonia_awasthi.jpg'),
  },
  {
    name: 'Ajay Singh Thakur',
    role: 'Tech Trainer',
    desc: 'Full-stack expert & mentor with 11+ years in Java, MERN stack.',
    img: require('../../assets/Ajay Thakur.jpg'),
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="h-[350px] bg-blue-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-800">Meet the Experts Behind Placify</h1>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-5 text-center transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 shadow"
              />
              <h3 className="text-lg font-semibold text-blue-700">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
