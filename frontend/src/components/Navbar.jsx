import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold user data

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check for user data in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // If user data is found, set it in state
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array ensures this runs once when component mounts

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Reset user state to null
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div className="bg-white h-16 fixed top-0 left-0 w-full flex justify-between items-center shadow-md px-4 z-50 transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="no-underline">
        <img
          src="https://i.im.ge/2024/09/27/kdlet6.logo-removebg-preview.png"
          alt="logo"
          className="w-34 h-12"
        />
      </Link>

      {/* Hamburger icon for mobile view */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none transition-all duration-300"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center absolute md:static bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "top-16 left-0 w-full" : "top-[-300px]"
          } md:top-0 md:w-auto md:space-x-4`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
          <Link
            to="/offer"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-semibold"
          >
            Offers
          </Link>
          <Link
            to="/customercare"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-semibold"
          >
            Customer Service
          </Link>

          {/* Conditionally render Sign In/Register or User Profile */}
          {user ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                {/* Display user profile image or default icon */}
                 <Link to="/profile">
                 <img
                  src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg"
                  alt="Profile"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                 </Link>
               
                {/* Display username */}
                <span className="text-gray-700 font-bold">{user.user}</span>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300 font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold"
            >
              Sign in / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;