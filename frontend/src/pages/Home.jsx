import React, { useEffect, useState } from 'react';
import Hadder from '../components/Hadder';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import FeaturedProperties from '../components/FeaturedProperties';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';
import Whythis from '../components/Whythis';
import ChatIcon from '../components/ChatIcon'; // Import ChatIcon component

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference in localStorage
    const storedMode = localStorage.getItem("isDarkMode");
    if (storedMode === "true") {
      setIsDarkMode(true);
    }

    // Event listener for dark mode changes
    const handleDarkModeChange = () => {
      const newMode = localStorage.getItem("isDarkMode") === "true";
      setIsDarkMode(newMode);
    };

    window.addEventListener('darkModeChange', handleDarkModeChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('darkModeChange', handleDarkModeChange);
    };
  }, []);

  return (
    <div className={`relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <Navbar />
      <Hadder />
      <div className="homeContainer max-w-7xl mx-auto p-4 lg:mt-[-140px]">
        <h1 className="homeTitle text-3xl font-bold my-5 text-center mt-52">Compare Hotels Across Your Favouraite Webistes</h1>

        <Featured />

        <h1 className="homeTitle text-2xl font-bold my-8 text-center">Browse by property type</h1>
        <PropertyList />

        <Whythis />

        <h1 className="homeTitle text-3xl font-bold my-8 text-center">Homes guests love</h1>
        <FeaturedProperties />

        <MailList />
      </div>

      <ChatIcon /> {/* Add the ChatIcon component */}

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
