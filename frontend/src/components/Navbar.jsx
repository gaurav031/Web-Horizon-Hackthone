import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Retrieve user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Check for dark mode preference in localStorage
    const storedMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedMode === "true");
  }, []);

  useEffect(() => {
    // Update selected language state whenever language changes
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const changeLanguage = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng)
      .then(() => {
        setSelectedLanguage(lng);
      })
      .catch((error) => {
        console.error("Language change error:", error);
      });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode); // Store the new mode in localStorage
      window.dispatchEvent(new Event('darkModeChange')); // Dispatch the custom event
      return newMode;
    });
  };

  // Mapping language codes to display names
  const languageOptions = {
    en: "English",
    hi: "Hindi",
    fr: "French",
    es: "Spanish",
  };

  return (
    <div className={`h-16 fixed top-0 left-0 w-full flex justify-between items-center shadow-md px-4 z-50 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <Link to="/" className="no-underline">
        <img
          src="https://i.im.ge/2024/09/27/kdlet6.logo-removebg-preview.png"
          alt="logo"
          className="w-34 h-12 bg-white p-2 rounded-sm"
        />
      </Link>

      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none"
      >
        <svg
          className={`${isDarkMode ? 'text-white' : 'text-gray-800'} w-6 h-6`}
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

      <div
        className={`flex-col md:flex md:flex-row md:items-center absolute md:static ${isDarkMode ? 'bg-gray-800' : 'bg-white'} md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? 'top-16 left-0 w-full' : 'top-[-300px]'} md:top-0 md:w-auto md:space-x-4`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
          <Link
            to="/offer"
            className={`px-4 py-2 hover:text-gray-900 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          >
            {t("Offers")}
          </Link>
          <Link
            to="/customercare"
            className={`px-4 py-2 hover:text-gray-900 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          >
            {t("CustomerService")}
          </Link>

           {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? t("lightMode") : t("darkMode")}
          </button>

          {/* Language selection dropdown */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={changeLanguage}
              className={`px-4 py-2 font-semibold ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-600 border-gray-300'} rounded`}
            >
              {Object.entries(languageOptions).map(([lng, name]) => (
                <option key={lng} value={lng}>
                  {name}
                </option>
              ))}
            </select>
            <br />
            
          </div>

          {user ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <img
                    src="https://i.im.ge/2024/09/27/kdlCkq.profile.jpeg"
                    alt="Profile"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
                </Link>
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{user.user}</span>
              </div>
              
              {/* Hide logout button on small screens */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300 font-semibold hidden md:block"
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold"
            >
              {t("signIn")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
