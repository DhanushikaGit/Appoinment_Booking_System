import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={assets.logo} alt="Prescripto Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Your trusted healthcare platform connecting patients with qualified doctors for better health outcomes.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 hover:text-[#5f6FFF] text-base transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-[#5f6FFF] text-base transition-colors">About us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-[#5f6FFF] text-base transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#5f6FFF] text-base transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-600 text-base">+1-212-456-7890</p>
              <p className="text-gray-600 text-base">greatstockdev@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-base">
            © 2024 Prescripto - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
