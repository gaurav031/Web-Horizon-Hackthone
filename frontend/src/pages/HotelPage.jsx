import React from 'react';
import Navbar from '../components/Navbar';
import Hadder from '../components/Hadder';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

const HotelPage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/book');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      <Navbar />
      <Hadder />
      <div className="flex-1 max-w-6xl mx-auto p-4 mt-48 md:mt-[10px]">
        {/* Images Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <img
                alt="Hotel room with a TV and wooden furniture"
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
                src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
              />
            </div>
            {[
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
              "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww",
              "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww"
            ].map((src, index) => (
              <img
                key={index}
                alt={`Hotel Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-md"
                src={src}
              />
            ))}
          </div>
        </section>

        {/* Hotel Information */}
        <section className="mt-6 p-6 bg-white rounded-lg shadow-lg transition hover:shadow-xl">
          <h1 className="text-3xl font-bold mb-2">Hotel Blue Wellington</h1>
          <div className="flex items-center mb-4">
            <span className="text-blue-500 text-lg font-semibold">8.0</span>
            <span className="ml-2 text-gray-600">Very Good</span>
            <span className="ml-2 text-gray-600">(256 reviews)</span>
          </div>
          <p className="text-gray-600 mb-4">
            <i className="fas fa-map-marker-alt text-blue-500"></i>
            101 Allée Madeleine de L'Isle, Mumbai, Maharashtra, India, 400072
          </p>
          <div className="flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 transition-all">Save</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all">Share</button>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Popular Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "fas fa-concierge-bell", label: "24/7 Check-in" },
              { icon: "fas fa-wifi", label: "Internet services" },
              { icon: "fas fa-concierge-bell", label: "24/7 Room Service" },
              { icon: "fas fa-snowflake", label: "Air conditioned rooms" },
              { icon: "fas fa-broom", label: "Daily housekeeping" },
              { icon: "fas fa-shield-alt", label: "24/7 Security" }
            ].map((facility, index) => (
              <div key={index} className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <i className={`${facility.icon} text-3xl text-blue-500`}></i>
                <span className="mt-2 text-gray-600 text-center">{facility.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Room Selection */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Select Your Room</h2>
          <div className="space-y-4">
            {[
              {
                title: "Deluxe Double Room",
                description: "2 adults, 1 double bed",
                price: "$200 per night",
                imgSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww"
              },
              {
                title: "Standard Single Room",
                description: "1 adult, 1 single bed",
                price: "$150 per night",
                imgSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww"
              },
              {
                title: "Family Room",
                description: "4 adults, 1 double bed and 2 single beds",
                price: "$250 per night",
                imgSrc: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww"
              }
            ].map((room, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div className="flex flex-col sm:flex-row">
                  <img
                    alt={room.title}
                    className="w-full sm:w-48 h-32 object-cover rounded-lg"
                    src={room.imgSrc}
                  />
                  <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold">{room.title}</h3>
                    <p className="text-gray-600">{room.description}</p>
                    <p className="text-gray-800 font-bold">{room.price}</p>
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                      onClick={handleSearch}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;
