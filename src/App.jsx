import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
//import Introduction from './pages/Introduction';
import BookDemo from './pages/BookDemo';
import Courses from './pages/Courses';
import Trainers from './pages/Trainers';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SpokenEnglish from './pages/Courses/SpokenEnglish';
import PersonalityDevelopment from './pages/Courses/PersonalityDevelopment';
import CorporateTraining from './pages/Courses/CorporateTraining';
import GDPI from './pages/Courses/GDPI';
import TeachersTraining from './pages/Courses/TeachersTraining';
import KidsCourses from './pages/Courses/KidsCourses.jsx';
import Introduction from './pages/about/Introduction.jsx';
import OurTeam from './pages/about/OurTeam.jsx';
import VisionMission from './pages/about/VisionMission.jsx';
import Testimonials from './pages/about/Testimonials.jsx';
import ScrollToTop from './components/ScrollToTop';
import AptitudeTraining from './pages/Courses/AptitudeTraining';
import WhatMakesUsDifferent from './pages/about/WhatMakesUsDifferent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/spoken-english" element={<SpokenEnglish />} />
          <Route path="/courses/personality-development" element={<PersonalityDevelopment />} />
          <Route path="/courses/corporate-training" element={<CorporateTraining />} />
          <Route path="/courses/gdpi" element={<GDPI />} />
          <Route path="/courses/teachers-training" element={<TeachersTraining />} />
          <Route path="/courses/kids-courses" element={<KidsCourses />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/vision-&-mission" element={<VisionMission />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/courses/aptitude-training" element={<AptitudeTraining />} />
          <Route path="/about/what-makes-us-different" element={<WhatMakesUsDifferent />} />

        </Routes>
      </main>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true} // ✅ cleaner look like your screenshot
        closeOnClick
        pauseOnHover
        draggable
        newestOnTop={true}     // ✅ shows new toast above older ones
        theme="light"
      />
    </div>
  );
};

export default App;
