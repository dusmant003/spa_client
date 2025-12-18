import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaPen } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import LoginModal from '../Modal/LoginModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [isLoginOpen, setIsLoginOpen] = useState(false); // modal state
  const dropdownRef = useRef(null);

  const handleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://pragatidegreecollege.org/wp-content/uploads/2023/04/cropped-cropped-cropped-logo-300x300.jpeg" alt="logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-[#242cc9]">HKEIS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium relative" ref={dropdownRef}>
          <Link to="/" className="text-orange-500 font-semibold">Home</Link>

          {/* Courses Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdown('courses')} className="flex items-center gap-1">
              Courses <MdKeyboardArrowDown />
            </button>
            {activeDropdown === 'courses' && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 w-40 space-y-1 z-50">
                <Link to="/courses/item1" className="block hover:bg-gray-100 px-3 py-1">B.Sc</Link>
                <Link to="/courses/item2" className="block hover:bg-gray-100 px-3 py-1">B.Com</Link>
              </div>
            )}
          </div>

          {/* Academics Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdown('academics')} className="flex items-center gap-1">
              Academics <MdKeyboardArrowDown />
            </button>
            {activeDropdown === 'academics' && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 w-40 space-y-1 z-50">
                <Link to="/academics/item1" className="block hover:bg-gray-100 px-3 py-1">Departments</Link>
                <Link to="/academics/item2" className="block hover:bg-gray-100 px-3 py-1">Faculty</Link>
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdown('pages')} className="flex items-center gap-1">
              Pages <MdKeyboardArrowDown />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 w-40 space-y-1 z-50">
                <Link to="/pages/aboutus" className="block hover:bg-gray-100 px-3 py-1">AboutUs</Link>
                <Link to="/pages/events" className="block hover:bg-gray-100 px-3 py-1">Events</Link>
                <Link to="/pages/gallery" className="block hover:bg-gray-100 px-3 py-1">Gallery</Link>
                <Link to="/pages/Staff" className="block hover:bg-gray-100 px-3 py-1">Staff</Link>
                <Link to="/pages/newsandnotification" className="block hover:bg-gray-100 px-3 py-1">News And Notification</Link>
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdown('admissions')} className="flex items-center gap-1">
              Admissions <MdKeyboardArrowDown />
            </button>
            {activeDropdown === 'admissions' && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 w-40 space-y-1 z-50">
                <Link to="/admissions/item1" className="block hover:bg-gray-100 px-3 py-1">Apply</Link>
                <Link to="/admissions/item2" className="block hover:bg-gray-100 px-3 py-1">Guidelines</Link>
              </div>
            )}
          </div>

          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/pages/contactus">Contact</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer" />
          <Link to="/apply" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
            <FaPen className="text-sm" /> APPLY NOW
          </Link>
          <button
            // onClick={() => setIsLoginOpen(true)} // open modal 
            className="bg-[#242cc9] hover:bg-[#0b5d56] text-white font-bold py-2 px-4 rounded-full">
            ADMIN
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6 text-[#0e7169]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="/" className="block py-2 text-[#0e7169]">Home</Link>

          <details>
            <summary className="cursor-pointer py-2">Courses</summary>
            <div className="pl-4">
              <Link to="/courses/item1" className="block py-1">B.Sc</Link>
              <Link to="/courses/item2" className="block py-1">B.Com</Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2">Academics</summary>
            <div className="pl-4">
              <Link to="/academics/item1" className="block py-1">Departments</Link>
              <Link to="/academics/item2" className="block py-1">Faculty</Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2">Pages</summary>
            <div className="pl-4">
              <Link to="/pages/aboutus" className="block py-1">AboutUs</Link>
              <Link to="/pages/events" className="block py-1">Events</Link>
              <Link to="/pages/gallery" className="block py-1">Gallery</Link>

            </div>
          </details>

          <details>
            <summary className="cursor-pointer py-2">Admissions</summary>
            <div className="pl-4">
              <Link to="/admissions/item1" className="block py-1">Apply</Link>
              <Link to="/admissions/item2" className="block py-1">Guidelines</Link>
            </div>
          </details>

          {/* <Link to="/blog" className="block py-2">Blog</Link> */}
          <Link to="/pages/contactus" className="block py-2">Contact</Link>

          <div className="pt-4 space-y-2">
            <Link to="/apply" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-full text-center flex justify-center items-center gap-2">
              <FaPen className="text-sm" /> APPLY NOW
            </Link>
            <button
              // onClick={() => setIsLoginOpen(true)} // open modal 
              className="block w-full bg-[#242cc9] hover:bg-[#0b5d56] text-white font-bold py-2 rounded-full text-center">
              ADMIN
            </button>
          </div>
        </div>
      )}
      {/* <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
    </nav>
  );
};

export default Navbar;
