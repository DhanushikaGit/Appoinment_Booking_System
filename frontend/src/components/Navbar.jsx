import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  // Fix: useState should be imported from React and used correctly
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white shadow-sm">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Prescripto logo"
        className="h-10 w-auto"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1'
                : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive
                ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1'
                : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1'
                : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1'
                : 'text-gray-700 hover:text-[#5f6FFF]'
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Profile Pic or Create Account Button */}
      {token ? (
        <div className="relative flex items-center gap-2">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border-2 border-[#5f6FFF] cursor-pointer"
            onClick={() => navigate('/profile')}
          />
          {/* Dropdown Icon */}
          <img
            src={assets.dropdown_icon}
            alt="Dropdown"
            className="h-5 w-5 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 z-10 min-w-[160px]">
              <button
                className="block w-full text-left px-2 py-1 hover:bg-[#f0f4ff] rounded transition"
                onClick={() => {
                  setShowMenu(false);
                  navigate('/profile');
                }}
              >
                My Profile
              </button>
              <button
                className="block w-full text-left px-2 py-1 hover:bg-[#f0f4ff] rounded transition"
                onClick={() => {
                  setShowMenu(false);
                  navigate('/appointments');
                }}
              >
                My Appointments
              </button>
              <button
                className="block w-full text-left px-2 py-1 hover:bg-[#f0f4ff] rounded transition text-red-500"
                onClick={() => {
                  setShowMenu(false);
                  setToken(false);
                  navigate('/login');
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          className="bg-[#5f6FFF] text-white px-4 py-2 rounded-md hover:bg-[#4f5edf] transition-colors"
          onClick={() => navigate('/login')}
        >
          CREATE ACCOUNT
        </button>
      )}
    </div>
  );
};

export default Navbar;