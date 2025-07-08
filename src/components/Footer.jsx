import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-10 pb-5 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <img src={logo} alt="logo" className="h-16 mb-3" />
          <p className="text-sm text-gray-300">
            Placify Institute is dedicated to empowering individuals through fluent English communication,
            personality development, and corporate training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about-us" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/courses" className="hover:text-yellow-300">Courses</a></li>
            <li><a href="/gallery" className="hover:text-yellow-300">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1" />
            23/1 Nanda Nagar, Indore<br />In front of Sai Temple
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt /> +91 7566513585
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope /> hello@placifyinstitue.com
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://wa.me/917566513585"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 flex items-center gap-2"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-4 h-4"
              >
                <path d="M16.001 3c-7.18 0-13 5.82-13 13 0 2.307.615 4.53 1.78 6.5l-1.837 5.337 5.542-1.82a12.93 12.93 0 006.515 1.816c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.65a10.558 10.558 0 01-5.276-1.45l-.378-.225-3.286 1.08 1.062-3.195-.243-.41a10.543 10.543 0 01-1.674-5.77c0-5.842 4.758-10.6 10.6-10.6s10.6 4.758 10.6 10.6-4.758 10.6-10.6 10.6zm5.781-7.828c-.316-.158-1.871-.922-2.162-1.027-.29-.105-.503-.158-.717.158-.211.316-.823 1.027-1.009 1.24-.184.211-.369.237-.685.079-.316-.158-1.334-.492-2.543-1.568-.94-.838-1.574-1.874-1.758-2.19-.184-.316-.02-.487.138-.645.143-.143.316-.369.474-.553.158-.184.211-.316.316-.527.105-.211.053-.395-.026-.553-.079-.158-.717-1.733-.982-2.37-.258-.619-.521-.534-.717-.534-.184 0-.395-.026-.605-.026-.211 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.632s1.131 3.053 1.289 3.264c.158.211 2.223 3.395 5.388 4.758.753.326 1.34.52 1.796.664.754.238 1.44.204 1.981.124.605-.089 1.871-.76 2.137-1.492.263-.726.263-1.35.184-1.492-.079-.132-.29-.211-.605-.369z" />
              </svg>
              Chat on WhatsApp
            </a>
          </li>
        </ul>


        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SpokenEnglishPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
