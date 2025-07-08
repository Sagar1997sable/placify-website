import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiX, HiChevronDown } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutDropdownMobile, setAboutDropdownMobile] = useState(false);
    const [coursesDropdownMobile, setCoursesDropdownMobile] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinkStyle = (path) =>
        isActive(path)
            ? 'text-yellow-300 underline underline-offset-4 font-semibold'
            : 'text-white hover:text-yellow-300';

    return (
        <nav className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-12 w-auto border-2 border-yellow-300 p-1 rounded-md shadow-md bg-white" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
                    <li><Link to="/" className={navLinkStyle('/')}>Home</Link></li>

                    {/* ABOUT US */}
                    <li className="relative group">
                        <div className="flex items-center gap-1 text-white hover:text-yellow-300 cursor-pointer">
                            About Us <HiChevronDown className="mt-0.5" />
                        </div>
                        <ul className="absolute left-0 top-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex-col w-72 bg-white shadow-lg rounded-md z-30 transition-all duration-200">
                            {["Introduction", "Our Team", "Vision & Mission", "What makes us different", "Testimonials"].map(label => (
                                <li key={label}>
                                    <Link to={`/about/${label.toLowerCase().replace(/ /g, "-")}`}
                                        className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>


                    {/* COURSES */}
                    <li className="relative group">
                        <div className="flex items-center gap-1 text-white hover:text-yellow-300 cursor-pointer">
                            Our Courses <HiChevronDown className="mt-0.5" />
                        </div>
                        <ul className="absolute left-0 top-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex-col w-72 bg-white shadow-lg rounded-md z-30 transition-all duration-200">
                            {[
                                "Spoken English",
                                "Personality Development",
                                "Corporate Training",
                                "GDPI",
                                "Teachers Training",
                                "Kids Courses"
                            ].map(label => (
                                <li key={label}>
                                    <Link to={`/courses/${label.toLowerCase().replace(/ /g, "-")}`}
                                        className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>


                    <li><Link to="/blogs" className={navLinkStyle('/blogs')}>Blogs</Link></li>
                    <li><Link to="/gallery" className={navLinkStyle('/gallery')}>Gallery</Link></li>
                    <li><Link to="/contact" className={navLinkStyle('/contact')}>Contact</Link></li>

                    {/* Book Demo CTA */}
                    <li>
                        <Link to="/book-demo"
                            className="bg-yellow-400 text-blue-800 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-sm">
                            Book Demo
                        </Link>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <HiX className="text-white text-2xl" /> : <HiOutlineMenu className="text-white text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-6 space-y-4 text-sm font-medium text-white">
                    <Link to="/" onClick={() => setMobileOpen(false)} className="block">Home</Link>

                    {/* ABOUT US MOBILE */}
                    <div>
                        <button onClick={() => setAboutDropdownMobile(!aboutDropdownMobile)} className="flex justify-between items-center w-full">
                            About Us <HiChevronDown />
                        </button>
                        {aboutDropdownMobile && (
                            <ul className="pl-4 mt-2 space-y-2">
                                {["Introduction", "Our Team", "Vision & Mission", "What makes us different", "Testimonials"].map(label => (
                                    <li key={label}>
                                        <Link to={`/about/${label.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMobileOpen(false)}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* COURSES MOBILE */}
                    <div>
                        <button onClick={() => setCoursesDropdownMobile(!coursesDropdownMobile)} className="flex justify-between items-center w-full">
                            Our Courses <HiChevronDown />
                        </button>
                        {coursesDropdownMobile && (
                            <ul className="pl-4 mt-2 space-y-2">
                                {[
                                    "Spoken English",
                                    "Personality Development",
                                    "Corporate Training",
                                    "GDPI",
                                    "Teachers Training",
                                    "Kids Courses"
                                ].map(label => (
                                    <li key={label}>
                                        <Link to={`/courses/${label.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMobileOpen(false)}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <Link to="/blogs" onClick={() => setMobileOpen(false)} className="block">Blogs</Link>
                    <Link to="/gallery" onClick={() => setMobileOpen(false)} className="block">Gallery</Link>
                    <Link to="/contact" onClick={() => setMobileOpen(false)} className="block">Contact</Link>
                    <Link to="/book-demo" onClick={() => setMobileOpen(false)} className="block bg-yellow-400 text-blue-800 text-center py-2 rounded font-semibold">Book Demo</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
