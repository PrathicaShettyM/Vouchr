import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/register");
  };

  const handleProfileRedirect = () => {
    if (user?.role === "ADMIN") {
      navigate("/admin/profile");
    } else if (user?.role === "VOLUNTEER") {
      navigate("/volunteer/profile");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group cursor-pointer">
            <span className="text-blue-900 font-bold text-2xl tracking-wide group-hover:text-blue-700 transition-all duration-300">
              Vouchr
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/event-details">Event Details</NavLink>
            <NavLink to="/chat">Chat</NavLink>
            <NavLink to="/donation">Donation</NavLink>
            <NavLink to="/about">About Us</NavLink>
            {user?.role === 'VOLUNTEER' && (
              <NavLink to="/attendance">Attendance</NavLink>
            )}
            {user?.role === 'ADMIN' && (
              <NavLink to="/create-event">Create Event</NavLink>
            )}
            <div className="flex items-center space-x-3 ml-4">
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    Logout
                  </button>
                  <button
                    onClick={handleProfileRedirect}
                    className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    <FaUser size={20} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    <FaUser size={20} />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-blue-900 hover:text-blue-700 focus:outline-none transition-all duration-300 cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/dashboard">Dashboard</MobileNavLink>
              <MobileNavLink to="/events">Events</MobileNavLink>
              <MobileNavLink to="/event-details">Event Details</MobileNavLink>
              <MobileNavLink to="/chat">Chat</MobileNavLink>
              <MobileNavLink to="/donation">Donation</MobileNavLink>
              <MobileNavLink to="/about">About Us</MobileNavLink>
              {user?.role === 'VOLUNTEER' && (
                <MobileNavLink to="/attendance">Attendance</MobileNavLink>
              )}
              {user?.role === 'ADMIN' && (
                <MobileNavLink to="/create-event">Create Event</MobileNavLink>
              )}
              <div className="pt-2 px-3 flex items-center space-x-3">
                {user ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium flex-1 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      Logout
                    </button>
                    <button
                      onClick={handleProfileRedirect}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 cursor-pointer"
                    >
                      <FaUser size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLoginClick}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium flex-1 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 cursor-pointer"
                    >
                      <FaUser size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`text-blue-900 hover:text-blue-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 cursor-pointer relative overflow-hidden group ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 cursor-pointer relative overflow-hidden group"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
  </Link>
);

export default Navbar;
