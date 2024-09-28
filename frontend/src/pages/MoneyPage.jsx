import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MoneyPage = () => {
    return (
        <>
            <Navbar />
            <div className="p-4 container mx-auto p-6 flex-grow mt-10 md:mt-[50px]">
                <div className="bg-black text-white text-center py-4 rounded-lg ">
                    <p className="text-sm">Available Balance</p>
                    <p className="text-4xl font-bold">₹0</p>
                    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">
                        Get the Hotel Booking AU credit card to save flat 10%
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <div className="bg-white shadow-md rounded-full px-4 py-2 mx-2 flex items-center">
                        <i className="fas fa-wallet text-blue-500"></i>
                        <span className="ml-2">Hotel Booking money</span>
                    </div>
                    <div className="bg-white shadow-md rounded-full px-4 py-2 mx-2 flex items-center">
                        <i className="fas fa-credit-card text-blue-500"></i>
                        <span className="ml-2">Hotel Booking AU Card</span>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-bold">Offers for you</h2>
                    <div className="flex mt-4 space-x-4">
                        <div className="bg-white shadow-md rounded-lg p-4 w-1/2">
                            <img src="https://www.ixigo.com/fintech-ui/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fimg%2F17c6b4a906de3910b088d9a81ec7c69b-ovfza.png&w=384&q=75" alt="IndiGo Offer" className="rounded-lg" />
                            <p className="mt-2 text-sm">Fares starting at ₹1,111</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 w-1/2">
                            <img src="https://www.ixigo.com/fintech-ui/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2FIMG%2F758a89d2f3d24b91a39b878e8a7266e3-akryo.png&w=384&q=75" alt="ixigo AU Credit Card Offer" className="rounded-lg" />
                            <p className="mt-2 text-sm">Lifetime Free Hotel Booking AU Credit Card</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 w-1/2">
                            <img src="https://www.ixigo.com/fintech-ui/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fa%2F6817af12edb8f63b28bb185bdb7eb34c-itxng.png&w=384&q=75" alt="ixigo AU Credit Card Offer" className="rounded-lg" />
                            <p className="mt-2 text-sm">Lifetime Free Hotel Booking AU Credit Card</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-bold text-center">What's New?</h2>
                    <div className="bg-white shadow-md rounded-lg p-4 mt-4 flex flex-col items-center">
                        <video controls className="rounded-lg w-52">
                            <source src="https://videos.ixigo.com/payments/cbccoffer.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="mt-2 text-sm text-center">Lifetime Free ixigo AU Credit Card</p>
                        <ul className="list-disc ml-4 mt-2 text-sm text-center">
                            <li>₹1500 Joining Bonus</li>
                            <li>10% Off on Bookings</li>
                            <li>0 Forex Markup</li>
                            <li>Free Lounge Access</li>
                        </ul>
                        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
                            Apply Now
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-bold">More Options</h2>
                    <div className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-between items-center">
                        <span>Manage Payment Methods</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 mt-4 flex justify-between items-center">
                        <span>Transaction History</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MoneyPage;
