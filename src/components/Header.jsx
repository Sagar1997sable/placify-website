import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-700 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Steadfast Classes</h1>
      <nav className="space-x-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/about" className="hover:underline">About Us</NavLink>
        <NavLink to="/courses" className="hover:underline">Our Courses</NavLink>
        <NavLink to="/gallery" className="hover:underline">Gallery</NavLink>
        <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
      </nav>
    </div>
  </header>
);

export default Header;