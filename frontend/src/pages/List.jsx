import React from 'react';
import Navbar from '../components/Navbar';
import Hadder from '../components/Hadder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight, faCheck, faUtensils, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { hotel } from '../data/hotel';
import Footer from '../components/Footer';

const List = () => {
    return (
        <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hadder />
            <div className="container mx-auto p-6 flex-grow">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Filters Section */}
                    <div className="w-full md:w-1/4 bg-white p-4 rounded shadow-md mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-4">Filters</h2>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Most Popular</h3>
                            {['Free Cancellation', 'Free Breakfast', 'Rated Exceptional (9+)', 'Parking Available'].map((label, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={`filter-${index}`} type="checkbox" />
                                    <label htmlFor={`filter-${index}`}>{label}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Price</h3>
                            <div className="h-24 bg-gray-200 rounded mb-2"></div>
                            <div className="text-sm text-gray-600">₹0 - ₹10,000</div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">User Rating</h3>
                            {['exceptional', 'excellent', 'very-good', 'good', 'pleasant'].map((rating, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={rating} name="user-rating" type="radio" />
                                    <label htmlFor={rating}>{rating.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} 9+</label>
                                </div>
                            ))}
                        </div>
                        {/* Facilities Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Facilities</h3>
                            {['Room Service', 'CCTV Security', 'Non-Smoking Rooms'].map((facility, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={facility} type="checkbox" />
                                    <label htmlFor={facility}>{facility}</label>
                                </div>
                            ))}
                        </div>
                        {/* Star Rating Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Star Rating</h3>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div className="flex items-center mb-2" key={star}>
                                    <input className="mr-2" id={`${star}-star`} type="checkbox" />
                                    <label htmlFor={`${star}-star`}>{star} Star ({star})</label>
                                </div>
                            ))}
                        </div>
                        {/* Accommodation Type Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Accommodation Type</h3>
                            {['Homestay', 'Hotel', 'Apartment', 'Hostel', 'Resort', 'Guest House'].map((type, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={type} type="checkbox" />
                                    <label htmlFor={type}>{type} (1)</label>
                                </div>
                            ))}
                        </div>
                        {/* Payment Mode Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Payment Mode</h3>
                            {['Pay at Hotel', 'Prepaid'].map((mode, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={mode} type="checkbox" />
                                    <label htmlFor={mode}>{mode}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Listings Section */}
                    <div className="w-100vw md:w-full ml-0 md:ml-4 overflow-y-auto" style={{ maxHeight: 'calc(210vh - 100px)' }}>
                        <div className="flex justify-between items-center mb-4 pr-5">
                            <h2 className="text-xl font-bold">Your Hotels</h2>
                            <select className="border rounded-lg p-2">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>User Rating</option>
                            </select>
                        </div>

                        {/* Hotel Listing */}
                        {hotel.map((hotels) => (
                            <div className="bg-white rounded shadow-md flex mb-4 p-4" key={hotels.id}>
                                <div className="relative w-1/3">
                                    <img
                                        src={hotels.image}
                                        alt="Hotel lobby with reception desk and seating area"
                                        className="w-full h-full object-cover rounded-l"
                                    />
                                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Last Minute Deal</div>
                                    <div className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <button className="bg-white text-gray-500 rounded-full p-1 hover:bg-gray-200 transition">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <button className="bg-white text-gray-500 rounded-full p-1 hover:bg-gray-200 transition">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-2/3 p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-bold">{hotels.name}<span className="text-gray-500">★★★★☆</span></h2>
                                            <p className="text-gray-500">{hotels.distance}</p>
                                            <div className="flex items-center mt-2">
                                                <span className="text-blue-500 font-bold text-lg">{hotels.rating}</span>
                                                <span className="ml-2 text-blue-500 font-bold">{hotels.ratingText}</span>
                                                <span className="ml-2 text-gray-500">• {hotels.ratingsCount}</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-green-500 font-bold"><FontAwesomeIcon icon={faCheck} /> Free Wifi</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-green-500 font-bold"><FontAwesomeIcon icon={faUtensils} /> Restaurant</span>
                                                <span className="text-green-500 font-bold ml-4"><FontAwesomeIcon icon={faConciergeBell} /> Concierge</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold">₹{hotels.price} <span className="text-gray-500">per night</span></p>
                                            <button className="bg-blue-500 text-white rounded mt-2 p-2 transition hover:bg-blue-600">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer className="fixed bottom-0 left-0 right-0" />
        </div>
    );
};

export default List;
