import React, { useState, useEffect } from 'react';

const NewNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2 transition-all duration-500 ${
        scrolled ? 'w-full bg-white shadow-lg' : 'w-[90%] bg-white m-auto mt-4'
      }`}
    >
      {/* Logo */}
      <div className="text-green-500 font-bold text-xl flex items-center">
        <div className="rounded-full border-2 border-green-500 p-2 mr-2">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0 0V4m0 10l4-4m-4 4l-4-4" />
          </svg>
        </div>
        CheckMyPeople
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-gray-800">
        <li className="hover:text-green-500">
          <a href="#home" className="font-semibold">HOME</a>
        </li>
        <li className="hover:text-green-500">
          <a href="#about" className="font-semibold">ABOUT</a>
        </li>
        <li className="hover:text-green-500 relative group">
          <a href="#property" className="font-semibold">PROPERTY</a>
          {/* Dropdown */}
          <div className="hidden group-hover:block absolute top-8 left-0 bg-white shadow-lg p-2 text-sm">
            <a href="#residential" className="block px-4 py-2 hover:bg-gray-100">Residential</a>
            <a href="#commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial</a>
          </div>
        </li>
        <li className="hover:text-green-500 relative group">
          <a href="#pages" className="font-semibold">PAGES</a>
          {/* Dropdown */}
          <div className="hidden group-hover:block absolute top-8 left-0 bg-white shadow-lg p-2 text-sm">
            <a href="#blog" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
          </div>
        </li>
        <li className="hover:text-green-500">
          <a href="#contact" className="font-semibold">CONTACT</a>
        </li>
      </ul>

      {/* Add Property Button */}
      <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600">
        Add Property
      </button>
    </nav>
  );
};

export default NewNav;