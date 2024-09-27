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

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="bg-gray-100 h-16 flex justify-between items-center border-b transition-colors duration-300 px-4 relative z-50">
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
        className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none"
        aria-controls="mobile-menu" // Accessibility: controls the menu
        aria-expanded={isOpen} // Accessibility: indicates if the menu is open
      >
        {/* SVG icon for the hamburger menu */}
        <svg
          className="w-6 h-6"
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
        id="mobile-menu"
        className={`md:flex md:items-center bg-gray-100 transition-all duration-300 ease-in-out absolute top-16 left-0 w-full ${isOpen ? "flex z-50" : "hidden"
          }`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0 w-full">
          <Link
            to={"/offers"}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold"
            onClick={handleLinkClick} // Close menu on link click
          >
            Offers
          </Link>
          <Link
            to={"/customer-service"}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-bold"
            onClick={handleLinkClick} // Close menu on link click
          >
            Customer Service
          </Link>

          {/* Conditionally render Sign In/Register or User Profile */}
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                {/* Display user profile image or default icon */}
                <img
                  src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                {/* Display username */}
                <span className="text-gray-700 font-bold">{user.user}</span>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
              onClick={handleLinkClick} // Close menu on link click
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
