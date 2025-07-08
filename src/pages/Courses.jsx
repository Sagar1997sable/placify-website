import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const Courses = () => (
  <section className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-6">Our Courses</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/spoken-english">Spoken English—Basic</Link></li>
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/personality-development">Personality Development</Link></li>
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/corporate-training">Corporate Training</Link></li>
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/gdpi">GD & PI Preparation</Link></li>
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/teachers-training">Teacher’s Training</Link></li>
      <li><Link className="block bg-gray-100 p-3 rounded shadow hover:bg-gray-200" to="/courses/kids-courses">Kids Courses</Link></li>
    </ul>
    <Routes>
      <Route path=":courseId" element={<CourseDetail />} />
    </Routes>
  </section>
);

const CourseDetail = () => {
  const { courseId } = useParams();
  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-semibold">Course: {courseId.replace('-', ' ')}</h3>
      <p>Details about {courseId} will be shown here.</p>
    </div>
  );
};

export default Courses;
