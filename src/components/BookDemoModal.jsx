import React from 'react';

const BookDemoModal = ({ isOpen, onClose, courseName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6">Take a Free Demo for <strong>{courseName}</strong></p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input type="email" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Course</label>
            <input type="text" value={courseName} disabled className="w-full border rounded px-4 py-2 bg-gray-100" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDemoModal;
