import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
// import Mainpage from "../Mainpage";
// import Projects from "./Projects";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState("Abhishek"); // Example user name

  // Toggle Profile Dropdown
  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicked outside
  const closeDropdown = () => {
    setIsProfileOpen(false);
  };

  // Close mobile menu when clicked anywhere else
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pl-10 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <NavLink to="/Projects" className="hover:text-blue-400">Projects</NavLink>
          <NavLink href="/Aboutus" className="hover:text-blue-400">About Us</NavLink>
        </div>

        {/* Profile Dropdown on Right */}
        <div className="relative">
          <div
            className="cursor-pointer flex items-center space-x-2 ml-6"
            onClick={toggleProfileDropdown}
          >
            <AiOutlineUser className="text-2xl" />
            <span>{userName}</span>
          </div>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>{userName}</span>
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="#my-profile" className="block px-4 py-2 hover:bg-gray-700">My Profile</a>
                  </li>
                  <li>
                    <a href="#my-orders" className="block px-4 py-2 hover:bg-gray-700">My Orders</a>
                  </li>
                  <li>
                    <a href="#notifications" className="block px-4 py-2 hover:bg-gray-700">Notifications</a>
                  </li>
                  <li>
                    <a href="#logout" className="block px-4 py-2 hover:bg-gray-700">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-gray-800 w-3/4 max-w-md mx-auto p-6 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <FaTimes
                className="text-white text-2xl cursor-pointer"
                onClick={closeMobileMenu}
              />
            </div>
            <ul className="space-y-6 text-center">
              <li><a href="#home" className="block text-white py-2">Home</a></li>
              <li><a href="#projects" className="block text-white py-2">Projects</a></li>
              <li><a href="#about-us" className="block text-white py-2">About Us</a></li>
              <li><a href="#my-orders" className="block text-white py-2">My Orders</a></li>
              <li><a href="#logout" className="block text-white py-2">Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
