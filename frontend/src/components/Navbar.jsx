import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white shadow-sm">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Prescripto logo with stylized medical cross, representing the appointment booking system brand"
        className="h-10 w-auto"
      />
      
      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1' : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1' : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1' : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1' : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Create Account Button */}
      <button className="bg-[#5f6FFF] text-white px-4 py-2 rounded-md hover:bg-[#4f5edf] transition-colors">
        CREATE ACCOUNT
      </button>
    </div>
  );
};

export default Navbar;