import React from 'react';
import Navbar from '../components/Navbar';
import Hadder from '../components/Hadder';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

const HotelPage = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/book');
    };

    return (
        <div className="bg-gray-100 font-sans">
            <Navbar />
            <Hadder />
            <div className="max-w-6xl mx-auto p-4 mt-4 md:mt-8 "> {/* Add margin-top here */}
                {/* Hotel Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <img
                            alt="Hotel room with a TV and wooden furniture"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            alt="Hotel signboard"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                        />
                        <img
                            alt="Hotel dining area"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww"
                        />
                        <img
                            alt="Hotel bedroom"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                        />
                        <img
                            alt="Hotel bathroom"
                            className="w-full h-full object-cover rounded-lg"
                            src="https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww"
                        />
                    </div>
                </div>

                {/* Hotel Information */}
                <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold">Hotel Blue Wellington</h1>
                    <div className="flex items-center mt-2">
                        <span className="text-blue-500 text-lg font-semibold">8.0</span>
                        <span className="ml-2 text-gray-600">Very Good</span>
                        <span className="ml-2 text-gray-600">(256 reviews)</span>
                    </div>
                    <p className="mt-2 text-gray-600">
                        <i className="fas fa-map-marker-alt"></i>
                        101 Allée Madeleine de L'Isle, Opp. Golden State, Near Saki Vihar Complex, C/O Saki Vihar Road, Sakinaka, Andheri East, Mumbai (All), Maharashtra, India, 400072
                    </p>
                    <div className="flex mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 transition">Save</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Share</button>
                    </div>
                </div>

                {/* Popular Facilities */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Popular Facilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
                        {[ 
                            { icon: "fas fa-concierge-bell", label: "24/7 Check-in" },
                            { icon: "fas fa-wifi", label: "Internet services" },
                            { icon: "fas fa-concierge-bell", label: "24/7 Room Service" },
                            { icon: "fas fa-snowflake", label: "Air conditioned rooms" },
                            { icon: "fas fa-broom", label: "Daily housekeeping" },
                            { icon: "fas fa-shield-alt", label: "24/7 Security" },
                        ].map((facility, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <i className={`${facility.icon} text-3xl text-gray-600`}></i>
                                <span className="mt-2 text-gray-600">{facility.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Room Selection */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Select your room</h2>
                    <div className="mt-4 space-y-4">
                        {[ 
                            {
                                title: "Deluxe Double Room",
                                description: "2 adults, 1 double bed",
                                price: "$200 per night",
                                imgSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
                            },
                            {
                                title: "Standard Single Room",
                                description: "1 adult, 1 single bed",
                                price: "$150 per night",
                                imgSrc: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww",
                            },
                            {
                                title: "Family Room",
                                description: "4 adults, 1 double bed and 2 single beds",
                                price: "$250 per night",
                                imgSrc: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww",
                            },
                        ].map((room, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <div className="flex flex-col md:flex-row">
                                    <img
                                        alt={room.title}
                                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                                        src={room.imgSrc}
                                    />
                                    <div className="md:ml-4 mt-4 md:mt-0">
                                        <h3 className="text-lg font-semibold">{room.title}</h3>
                                        <p className="text-gray-600">{room.description}</p>
                                        <p className="text-gray-600">{room.price}</p>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2" onClick={handleSearch}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HotelPage;
