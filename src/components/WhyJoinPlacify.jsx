import React from 'react';

// Sample icons (replace with your real PNG paths)
import britishCouncil from '../assets/why-hm-1.png';
import expertTrainer from '../assets/why-hm-2.png';
import demo from '../assets/why-hm-3.png';
import batchSize from '../assets/why-hm-4.png';
import personalAttention from '../assets/why-hm-5.png';
import onlineOffline from '../assets/why-hm-6.png';
import groupBatch from '../assets/why-hm-7.png';
import flexibleBatch from '../assets/why-hm-8.png';
import grammar from '../assets/why-hm-9.png';
import feedback from '../assets/why-hm-10.png';
import interactive from '../assets/why-hm-11.png';
import materials from '../assets/why-hm-12.png';

const features = [
  { icon: britishCouncil, label: 'British Council Certified Trainers' },
  { icon: expertTrainer, label: '10+ Years Expert Experience Trainers' },
  { icon: demo, label: 'Free Live Demo Session' },
  { icon: batchSize, label: 'Small Batch Size' },
  { icon: personalAttention, label: 'Get Personal Attention' },
  { icon: onlineOffline, label: 'Online & Offline Batches' },
  { icon: groupBatch, label: 'Personal & Group Batches' },
  { icon: flexibleBatch, label: 'Flexible Batch Timings' },
  { icon: grammar, label: 'Practical Grammar for All Courses' },
  { icon: feedback, label: 'Personal Feedback & Evaluation' },
  { icon: interactive, label: 'Two-Way Interactive Sessions' },
  { icon: materials, label: 'Course Study Material & App' },
];

const WhyJoinPlacify = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
          Why Join Placify Institute ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all"
            >
              <img src={item.icon} alt={item.label} className="w-16 h-16 mb-4 object-contain" />
              <p className="text-sm font-semibold text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinPlacify;
