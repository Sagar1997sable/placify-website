import React from 'react';
// Add your cool background image

const courses = [
  {
    title: 'Spoken English',
    description: 'Enhance your fluency and confidence in real-life English conversations.',
  },
  {
    title: 'Personality Development',
    description: 'Build leadership, soft skills, public speaking, and a winning attitude.',
  },
  {
    title: 'Corporate Training',
    description: 'Master communication, time management, and workplace success.',
  },
  {
    title: "GD & PI",
    description: "Excel at Group Discussions & Personal Interviews for your dream career.",
  },
  {
    title: "Teacher's Training",
    description: "Develop professional teaching techniques and classroom confidence.",
  },
  {
    title: 'Kids Courses',
    description: 'Fun and engaging learning for kids to build strong language foundations.',
  },
  {
    title: 'Aptitude Training',
    description: 'Sharpen problem-solving, logical reasoning, and quantitative skills for exams and placements.',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-700">
          Our Courses & Programs
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-left hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default CoursesSection;
