import React from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white border-b bg-gradient-to-r from-white-70 to-blue-50 border-gray-200 shadow-sm font-inter">
      <Link to="/" className="flex items-center text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out">
        <img src={assets.logo} alt="Logo" className="h-12 w-auto inline-block mr-2 rounded-md" />
      </Link>

      <div className="flex-1 flex justify-center">
        <div className="flex gap-10">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative text-xl text-gray-800 font-medium py-2 group overflow-hidden
                         hover:text-blue-600 transition-colors duration-300 ease-in-out"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600
                                transform -translate-x-1/2 transition-all duration-300 ease-out
                                group-hover:w-full group-hover:left-0 group-hover:translate-x-0">
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50
                        focus-within:border-blue-500 focus-within:shadow-md transition-all duration-300 ease-in-out">
          <input
            type="text"
            className="bg-transparent w-48 outline-none text-lg placeholder-gray-500"
            placeholder="Search products"
          />
          <span className="text-xl text-gray-600">
            <img src={assets.search_icon} alt="" />
          </span>
        </div>

        <button className="relative text-xl text-gray-800 font-medium py-2 px-1 group overflow-hidden
                           transition-colors duration-300 ease-in-out">
          <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Dashboard
          </span>
          <span className="absolute inset-0 bg-blue-100 transform translate-y-full
                           group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md">
          </span>
        </button>

        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                           transition-all duration-300 ease-in-out transform hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;