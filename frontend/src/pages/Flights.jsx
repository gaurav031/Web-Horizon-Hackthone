import React from 'react';
import Navbar from '../components/Navbar';

const Flights = () => {
    return (

        <div className="bg-gray-100 min-h-screen py-8">
            <Navbar />
            <div className="max-w-7xl mx-auto p-4 m-[50px]">
                {/* Search Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                            One Way
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-500 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
                            Round Trip
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input className="p-4 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="From" type="text" />
                        <input className="p-4 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="To" type="text" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <input className="p-4 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="Departure" type="text" />
                        <input className="p-4 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="Return" type="text" />
                        <input className="p-4 border border-gray-300 rounded-lg w-full focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" placeholder="1 Traveller, Economy" type="text" />
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-gray-500">Special Fares (Optional):</span>
                        <button className="px-4 py-2 border border-gray-300 text-gray-500 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">Student</button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-500 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">Senior Citizen</button>

                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-green-500 font-bold">Best Flight Offers</span>
                        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105">Search</button>
                    </div>
                </div>

                {/* Do More Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Do More With ixigo</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'fas fa-plane-departure', text: 'Flight Tracker' },
                            { icon: 'fas fa-passport', text: 'Book Visa' },
                            { icon: 'fas fa-shield-alt', text: 'Travel Insurance' },
                            { icon: 'fas fa-calendar-alt', text: 'Plan' },
                            { icon: 'fas fa-car', text: 'Car Rentals' },
                            { icon: 'fas fa-users', text: 'Group Booking' },
                            { icon: 'fas fa-taxi', text: 'Airport Cabs' },
                            { icon: 'fas fa-credit-card', text: 'Credit Card' },
                            { icon: 'fas fa-bell', text: 'Fare Alerts' },
                        ].map(({ icon, text }, index) => (
                            <div key={index} className="text-center p-4 hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                <i className={`${icon} text-blue-500 text-3xl mb-2`} />
                                <p className="font-semibold">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flight Offers Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Today's Flight Offers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                imgSrc: 'https://images.ixigo.com/image/upload/img/17c6b4a906de3910b088d9a81ec7c69b-ovfza.png',
                                title: 'IndiGo',
                                description: 'Fares starting at ₹1,111',
                            },
                            {
                                imgSrc: 'https://images.ixigo.com/image/upload/IMG/758a89d2f3d24b91a39b878e8a7266e3-akryo.png',
                                title: 'Lifetime Free ixigo AU Credit Card',
                                description: (
                                    <ul className="list-disc pl-5">
                                        <li>₹1500 Joining Bonus</li>
                                        <li>10% Off on Bookings</li>
                                        <li>Free Lounge Access</li>
                                        <li>Zero Forex Markup</li>
                                    </ul>
                                ),
                            },
                            {
                                imgSrc: 'https://images.ixigo.com/image/upload/a/6817af12edb8f63b28bb185bdb7eb34c-itxng.png',
                                title: 'HDFC BANK',
                                description: 'Get upto ₹2000 Off on Domestic Flights with HDFC Bank EasyEMI on Credit Cards',
                            },
                            {
                                imgSrc: 'https://images.ixigo.com/image/upload/img/f6f50cba1c148aa604347fcb05b5f225-xoxvf.png',
                                title: 'BOBCARD',
                                description: (
                                    <>
                                        Flat 12% Off On Flights with BOBCARD
                                        <p>Code: IXIBOBEMI</p>
                                    </>
                                ),
                            },
                        ].map((offer, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                                <img alt={offer.title} className="w-full h-40 object-cover rounded-md mb-4" src={offer.imgSrc} />
                                <p className="text-lg font-bold">{offer.title}</p>
                                <p>{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flights;