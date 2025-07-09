import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';


const HeroSection = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const form = useRef();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseFromURL = params.get('course');
    if (courseFromURL) {
      setSelectedCourse(courseFromURL);
      setShowModal(true);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show "submitting" toast centered
    const loadingToast = toast.info(
      <div className="text-center">
        <div className="font-semibold">Submitting Request...</div>
        <div className="text-sm text-gray-400 mt-1">
          Please wait while we are submitting your request
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
        draggable: false,
      }
    );

    emailjs.sendForm(
        'service_ult3bgp',      // e.g. 'placify_smtp'
        'template_8n00gt6',     // e.g. 'template_abc123'
        form.current,
        'LXNja3-ytcDSOIlTr'       // e.g. 'B3lG1xxxxxxxxx'
      )
      .then(() => {
        // Update to success toast
        toast.update(loadingToast, {
          render: (
            <div className="flex items-center gap-3 p-2">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <div>
                <div className="font-semibold">Success</div>
                <div>Your request has been submitted successfully. We will get back to you soon.</div>
              </div>
            </div>
          ),
          type: "success",
          isLoading: false,
          icon: false, // ✅ disables small green tick
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
          closeButton: true,
        });

        setShowModal(false);
        setSelectedCourse("");
        form.current.reset();
      })
      .catch((err) => {
        toast.update(loadingToast, {
          render: "❌ Something went wrong. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
          closeButton: true,
        });
        console.error("EmailJS error", err);
      });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
          Welcome to <span className="text-yellow-500">Placify Institute</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Master in{' '}
          <TypeAnimation
            sequence={['English', 2000, 'Communication', 2000, 'Confidence', 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-600"
          />
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Unlock fluency, boost your confidence, and transform your career through spoken English,
          soft skills, GD-PI prep, and more — designed for kids, professionals, and future leaders.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          Book a Free Demo
        </button>
      </section>

      {/* ✅ Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-xl relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedCourse('');
              }}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-blue-700 mb-2">Get in Touch</h3>
            <p className="mb-6 text-gray-600">Take a free demo and begin your journey!</p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border rounded"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded"
                required
              />

              <select
                name="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2 border rounded bg-white"
                required
              >
                <option value="">Select Course</option>
                <option value="Spoken English">Spoken English</option>
                <option value="Personality Development">Personality Development</option>
                <option value="Aptitude Training">Aptitude Training</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="GDPI">GDPI</option>
                <option value="Teachers Training">Teachers Training</option>
                <option value="Kids Training">Kids Training</option>
              </select>

              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
