import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl font-bold text-white">
                Vouchr
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering volunteer impact through innovative technology and meaningful connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'For Volunteers', 'For Organizations', 'Success Stories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
            <ul className="space-y-3">
              {['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'].map((tech) => (
                <li key={tech}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="w-5 h-5 text-blue-400" />
                <span>hello@vouchr.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            

          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Vouchr. All rights reserved. Empowering Volunteer Impact.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Accessibility
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Cookies
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;