import React, { useState } from "react";
import Logo from "../assets/Synergy-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-2 md:px-10 px-5 md:w-full w-dvw bg-white/70 backdrop-blur shadow-md z-50 rounded-[35px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        <div className="text-xl font-semibold text-gray-800">
          <img src={Logo} alt="" className="w-[150px]" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-light">
          <a href="#About" className="hover:text-red-500 text-[20px]">
            About
          </a>
          <a href="#Products" className="hover:text-red-500 text-[20px]">
            Products
          </a>
          <a href="#Services" className="hover:text-red-500 text-[20px]">
            Services
          </a>

          <a href="#Footer" className="hover:text-red-500 text-[20px]">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#About" className="block py-2 text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#Products" className="block py-2 text-gray-700 hover:text-blue-600">
            Products
          </a>
          <a href="#Services" className="block py-2 text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#Contact" className="block py-2 text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
