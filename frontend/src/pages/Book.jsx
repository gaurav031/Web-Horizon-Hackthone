import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <>
            <Navbar />

            <div className="p-6 bg-gray-100 mt-[30px]">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-1">
                            <div className="border p-4 rounded-lg">
                                <h2 className="text-lg font-bold mb-4">Fare Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>1 Room, 1 Night</span>
                                    <span>₹1,620</span>

            <div className="p-6 bg-gray-100 ">
                    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg  mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="border p-4 rounded-lg">
                                    <h2 className="text-lg font-bold mb-4">Fare Summary</h2>
                                    <div className="flex justify-between mb-2">
                                        <span>1 Room, 1 Night</span>
                                        <span>₹1,620</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes & Charges</span>
                                        <span>₹315.50</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Discounts</span>
                                        <span>₹121.50</span>
                                    </div>
                                    <div className="flex justify-between font-bold mb-2">
                                        <span>Net Payable Amount</span>
                                        <span>₹1,814.00</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Pay now</span>
                                        <span>₹0.00</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Pay at hotel</span>
                                        <span>₹1,814.00</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-4">
                                        Total amount should be paid at the hotel in local currency based on the hotel location
                                    </p>

                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes & Charges</span>
                                    <span>₹315.50</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Discounts</span>
                                    <span>₹121.50</span>
                                </div>
                                <div className="flex justify-between font-bold mb-2">
                                    <span>Net Payable Amount</span>
                                    <span>₹1,814.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Pay now</span>
                                    <span>₹0.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Pay at hotel</span>
                                    <span>₹1,814.00</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    Total amount should be paid at the hotel in local currency based on the hotel location
                                </p>
                            </div>
                            <div className="border p-4 rounded-lg mt-4">
                                <h2 className="text-lg font-bold mb-4">Offers For You</h2>
                                <input type="text" placeholder="Have a promo code? Redeem here" className="w-full p-2 border rounded-lg" />
                            </div>
                            <div className="text-sm text-gray-600 mt-4">
                                <p>
                                    By clicking on Pay Now/Book Now, I confirm that I have read, understood, and agree with the <a href="#" className="text-blue-600">Cancellation Policy</a>, <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">User Agreement</a>.
                                </p>
                                <p className="mt-2">
                                    Please note that this rate will not provide a tax invoice. You will be given a commercial receipt to serve as proof of transaction.
                                </p>
                                <div className="flex mt-4">
                                    <img src="https://placehold.co/50x20" alt="Visa" className="mr-2" />
                                    <img src="https://placehold.co/50x20" alt="Mastercard" className="mr-2" />
                                    <img src="https://placehold.co/50x20" alt="Amex" className="mr-2" />
                                    <img src="https://placehold.co/50x20" alt="Netbanking" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="border p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-bold mb-4">Enter Your Details</h2>
                                <div className="flex items-center mb-4">
                                    <input type="radio" name="gender" id="mr" className="mr-2" />
                                    <label htmlFor="mr" className="mr-4">Mr.</label>
                                    <input type="radio" name="gender" id="ms" className="mr-2" />
                                    <label htmlFor="ms" className="mr-4">Ms.</label>
                                    <input type="radio" name="gender" id="miss" className="mr-2" />
                                    <label htmlFor="miss">Miss.</label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="First Name" className="p-2 border rounded-lg" />
                                    <input type="text" placeholder="Last Name" className="p-2 border rounded-lg" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="email" placeholder="Email Address" className="p-2 border rounded-lg" />
                                    <div className="flex">
                                        <select className="p-2 border rounded-l-lg">
                                            <option value="+91">+91</option>
                                        </select>
                                        <input type="text" placeholder="Mobile No." className="p-2 border rounded-r-lg" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <select className="w-full p-2 border rounded-lg">
                                        <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-bold mb-4">Hotel Blue Wellington</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    J.B. Metal Building, 1st Floor, Opp. quaint Suites, Near Saki Vihar Complex, Off. Saki Vihar Road, Sakina, Andheri East, Mumbai-400 072, 400072
                                </p>
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <p className="font-bold">Check In</p>
                                        <p>Fri, 27 Sep</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">1 Night</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Check Out</p>
                                        <p>Sat, 28 Sep</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <p className="font-bold">1 Deluxe Double Room</p>
                                        <p>2 Guests</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-bold mb-4">Room Details</h2>
                                <p className="mb-4">Deluxe Double Room</p>
                                <p className="text-sm text-gray-600 mb-4">1 king bed, 11 sqm, 1 queen bed or 1 double bed, City view, Sleeps 2</p>
                                <h3 className="font-bold mb-2">Room Benefits</h3>
                                <ul className="list-disc list-inside">
                                    <li>Parking</li>
                                    <li>Free WiFi</li>
                                </ul>
                            </div>
                            <div className="border p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-bold mb-4">Cancellation Policy</h2>
                                <p className="text-sm text-gray-600 mb-4">100% amount will be deducted on cancellation.</p>
                                <div className="flex justify-between items-center mb-4">
                                    <span>Non Refundable</span>
                                    <div className="w-full h-1 bg-red-600 mx-4"></div>
                                    <span>Check-in</span>
                                </div>
                                <a href="#" className="text-blue-600">View Cancellation Policy</a>
                            </div>
                            <div className="border p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-bold mb-4">Special Request</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    We will forward your request to the hotel. Please note that this is subject to availability and based on the hotel policies.
                                </p>
                                <a href="#" className="text-blue-600">Add Request</a>

                                <Link to='/trip' >
                                <button className="w-full bg-orange-500 text-white p-4 rounded-lg font-bold">Book Now</button>

                                </Link>
                            </div>
                            <button className="w-full bg-orange-500 text-white p-4 rounded-lg font-bold">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}



export default Book