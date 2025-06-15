import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/doctors', label: 'ALL DOCTORS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="relative flex items-center justify-between text-sm py-4 px-6 mb-5 border-b border-gray-400 bg-white shadow-sm">
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Prescripto logo"
        className="h-10 w-auto cursor-pointer"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#5f6FFF] border-b-2 border-[#5f6FFF] pb-1'
                  : 'text-gray-700 hover:text-[#5f6FFF]'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Menu */}
      {token ? (
        <div className="relative flex items-center gap-2">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border-2 border-[#5f6FFF] cursor-pointer"
            onClick={() => navigate('/profile')}
          />
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
                  navigate('/myprofile');
                }}
              >
                My Profile
              </button>
              <button
                className="block w-full text-left px-2 py-1 hover:bg-[#f0f4ff] rounded transition"
                onClick={() => {
                  setShowMenu(false);
                  navigate('/myappointments');
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

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <img 
          src={showMobileMenu ? assets.cross_icon : assets.menu_icon} 
          alt={showMobileMenu ? "Close menu" : "Open menu"} 
          className="w-6 h-6"
        />
      </button>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-6 py-2 ${
                      isActive
                        ? 'text-[#5f6FFF] bg-[#f0f4ff]'
                        : 'text-gray-700 hover:bg-[#f0f4ff]'
                    }`
                  }
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;