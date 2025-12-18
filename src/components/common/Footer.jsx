import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#07294d] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo and Description */}
        <div>
          <div className="text-3xl font-bold text-white mb-4">
            <span className="text-orange-500">HKE</span>IS
          </div>
          <p className="text-sm text-gray-300 mb-6">
            We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 p-2 rounded-md"><FaPhoneAlt /></span>
              +2 123 654 7898
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 p-2 rounded-md"><FaMapMarkerAlt /></span>
              25/B Milford Road, New York
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-500 p-2 rounded-md"><FaEnvelope /></span>
              info@example.com
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>› About Us</li>
            <li>› FAQ's</li>
            <li>› Testimonials</li>
            <li>› Terms Of Service</li>
            <li>› Privacy Policy</li>
            <li>› Update News</li>
          </ul>
        </div>

        {/* Our Campus */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Our Campus</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>› Campus Safety</li>
            <li>› Student Activities</li>
            <li>› Academic Department</li>
            <li>› Planning & Admin</li>
            <li>› Office Of Chancellor</li>
            <li>› Facility Services</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none mb-4"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full w-full transition-all">
            SUBSCRIBE NOW ✈
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-6 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <p>© Copyright 2025 <span className="text-orange-500">HKEIS</span>. All Rights Reserved.</p>
        <div className="flex gap-4 text-white">
          <a href="#" className="bg-orange-500 p-2 rounded-md hover:bg-orange-600"><FaFacebookF /></a>
          <a href="#" className="bg-orange-500 p-2 rounded-md hover:bg-orange-600"><FaLinkedinIn /></a>
          <a href="#" className="bg-orange-500 p-2 rounded-md hover:bg-orange-600"><FaWhatsapp /></a>
          <a href="#" className="bg-orange-500 p-2 rounded-md hover:bg-orange-600"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
