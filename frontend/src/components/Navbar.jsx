import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 h-16 flex justify-between items-center border-b transition-colors duration-300 px-4">
      {/* Logo */}
      <Link to="/" className="no-underline">
        <img src="https://i.im.ge/2024/09/27/kdlet6.logo-removebg-preview.png" alt="logo" className="w-34 h-12" />
      </Link>

      {/* Hamburger icon for mobile view */}
      <button onClick={toggleMenu} className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navigation Links */}
      <div className={`flex-col md:flex md:flex-row md:items-center absolute md:static bg-gray-100 transition-all duration-300 ${isOpen ? "top-16 left-0 w-full" : "top-[-200px]"} md:top-0 md:w-auto`}>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Link to={"/offers"} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold">
            Offers
          </Link>
          <Link to={"/customer-service"} className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold">
            Customer Service
          </Link>
          <img src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg" alt="Profile Photo" className="w-12 h-12 rounded-full" />
          <Link to={"/login"} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
            Sign in / Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
