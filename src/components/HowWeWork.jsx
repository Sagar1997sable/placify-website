import React from 'react';

// Replace these with your actual image imports
import preAssessment from '../assets/PreAssesment.png';
import trainingPlan from '../assets/Plan.png';
import execution from '../assets/Execution.png';
import mockTests from '../assets/Test.png';
import placement from '../assets/success.png';

const steps = [
  { icon: preAssessment, label: 'Pre-assessment' },
  { icon: trainingPlan, label: 'Training Plan' },
  { icon: execution, label: 'Execution' },
  { icon: mockTests, label: 'Mock Tests' },
  { icon: placement, label: 'Placement Success' },
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
          How We Work
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border p-6 shadow-md hover:shadow-xl transition-all flex flex-col items-center"
            >
              <img src={step.icon} alt={step.label} className="w-16 h-16 mb-4 object-contain" />
              <p className="text-sm font-semibold text-gray-700">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
