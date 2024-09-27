import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Book = () => {
    return (
        <>
            <Navbar />
            <div className="p-4 flex justify-center items-center bg-gray-100 min-h-screen">
                <div className="max-w-5xl bg-white p-6 rounded-xl shadow-2xl w-full transition-all duration-300 ease-in-out transform hover:scale-105">
                    {/* Fare Summary */}
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-2/5 border-r border-gray-200 pr-6">
                            <div className="border-b pb-6 mb-6">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fare Summary</h2>
                                <p className="flex justify-between text-base font-medium">
                                    <span>1 Room, 1 Night</span>
                                    <span className="font-semibold text-gray-700">₹1,620</span>
                                </p>
                                <p className="flex justify-between text-base">
                                    <span>Taxes & Charges</span>
                                    <span className="font-semibold text-gray-700">₹315.50</span>
                                </p>
                                <p className="flex justify-between text-base text-red-600 font-semibold">
                                    <span>Discount</span>
                                    <span>- ₹121.50</span>
                                </p>
                                <p className="flex justify-between font-bold text-lg text-gray-800">
                                    <span>Net Payable Amount</span>
                                    <span>₹1,814.00</span>
                                </p>
                                <div className="mt-4">
                                    <div className="flex justify-between mt-2 text-sm font-semibold">
                                        <span>Pay now</span>
                                        <span>₹1,814.00</span>
                                    </div>
                                    <div className="flex justify-between mt-2 text-sm font-semibold">
                                        <span>Pay at hotel</span>
                                        <span>₹1,814.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b pb-6">
                                <h2 className="text-lg font-semibold mb-4 text-gray-800">Offers For You</h2>
                                <input
                                    type="text"
                                    placeholder="Have a promo code? Redeem here"
                                    className="w-full border p-3 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        {/* Details Form and Hotel Info */}
                        <div className="w-full md:w-3/5 pl-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enter Your Details</h2>
                            <form className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="flex items-center">
                                        <input type="radio" name="title" id="mr" className="mr-2" />
                                        <label htmlFor="mr" className="text-lg">Mr.</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" name="title" id="ms" className="mr-2" />
                                        <label htmlFor="ms" className="text-lg">Ms.</label>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-1/2 border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-1/2 border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                />
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        placeholder="+91"
                                        className="w-1/5 border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mobile No"
                                        className="w-4/5 border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nationality"
                                    className="w-full border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                />
                            </form>

                            {/* Hotel Info */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Hotel Blue Wellington</h3>
                                <p className="text-base text-gray-500 mt-2">J.B. Metal Building, Off Saki Vihar Complex, Mumbai</p>
                                <div className="flex justify-between mt-4 text-sm">
                                    <p>Check-in: Fri 27 Sep</p>
                                    <p>Check-out: Sat 28 Sep</p>
                                </div>
                                <p className="text-sm mt-2">1 Deluxe Double Room | 2 Guests</p>
                                <div className="mt-4">
                                    <h4 className="font-semibold text-sm">Room Benefits</h4>
                                    <ul className="list-disc ml-6">
                                        <li>Parking</li>
                                        <li>Free WiFi</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Cancellation Policy</h3>
                                <p className="text-red-500 mt-2 text-sm">
                                    100% amount will be deducted on cancellation.
                                </p>
                                <p className="text-sm text-gray-500 mt-2">Non Refundable</p>
                            </div>

                            {/* Special Request */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800">Special Request</h3>
                                <textarea
                                    className="w-full border p-3 rounded-lg text-lg transition-all duration-300 ease-in-out hover:border-orange-400 focus:ring-2 focus:ring-orange-500"
                                    placeholder="Please add your special request..."
                                ></textarea>
                            </div>

                            {/* Book Now Button */}
                            <div className="mt-8">
                                <button className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-orange-600">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}



export default Book