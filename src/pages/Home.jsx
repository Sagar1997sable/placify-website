import React from 'react';
import MeetOurTrainers from '../components/MeetOurTrainers'; // make sure the path is correct
import CoursesSection from '../components/CoursesSection';
import HeroSection from '../components/HeroSection';
import WhyJoinPlacify from '../components/WhyJoinPlacify';
import HowWeWork from '../components/HowWeWork';
import MissionAndWhy from '../components/MissionAndWhy';
import StatsHighlight from '../components/StatsHighlight';

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
     

      <HeroSection />
      <StatsHighlight />
      <WhyJoinPlacify />
      <HowWeWork/>
      <CoursesSection />
      {/* Meet Our Trainers Section */}
      <MeetOurTrainers />
      <MissionAndWhy />


    </>
  );
};

export default Home;
