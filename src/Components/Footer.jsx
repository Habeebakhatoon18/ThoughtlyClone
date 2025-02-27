import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import CallButton from './CallButton';

const Footer = () => {
  return (
    <footer className="bg-[#f1f1ee] py-16 px-6 min-h-screen md:px-30 lg:px-30">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and address column */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold mb-4">thoughtly</h2>
            <p className="text-gray-600 text-sm">
              41E 11th St, 11th Floor,<br />
              New York, NY 10003
            </p>
          </div>

          {/* Product column */}
          <div className="md:col-span-2">
            <h3 className="text-gray-400 font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Platform</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Agent Accelerator</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Media Inquiries</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Refer a Friend</a></li>
            </ul>
          </div>

          {/* Support column */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Middle section with social links and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 mb-10 space-y-6 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1">
              <FaInstagram size={18} /> <span>Instagram</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1">
              <FaLinkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1">
              <FaTwitter size={18} /> <span>X (Twitter)</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Join the Community
            </a>
          </div>

          <div className="flex w-full md:w-auto">
            <CallButton/>
            </div>
        </div>

        {/* Bottom section with copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-500">HIPAA</span>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Copyright © 2025 Thoughtly, Inc.</p>
              <p className="text-gray-500 text-sm">All rights reserved.</p>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
