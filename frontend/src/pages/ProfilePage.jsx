import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null); // State to hold user data

    useEffect(() => {
        // Check for user data in localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            // If user data is found, set it in state
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Remove user data from localStorage
        setUser(null); // Reset user state to null
        window.location.reload(); // Reload the page to reflect the changes
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-red-500 container mx-auto p-6 flex-grow mt-2 md:mt-[10px]  "> 
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg container mx-auto p-6 flex-grow mt-5 md:mt-[10px]">
                    {/* Profile Section */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-red-400 p-6 rounded-t-lg container mx-auto p-6 flex-grow mt-2 md:mt-[10px]">
                        {user ? (
                            <>
                                <div>
                                    <h1 className="text-white text-2xl font-bold">{user.firstName || 'Gaurav'}</h1>
                                    <Link to='/viewprofile' className="text-white text-sm">VIEW PROFILE &gt;</Link>
                                </div>
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                                    <i className="fas fa-user text-white text-4xl"></i>
                                </div>
                            </>
                        ) : (
                            <div>
                                <h1 className="text-white text-2xl font-bold">Guest</h1>
                            </div>
                        )}
                    </div>

                    {/* Menu List */}
                    <div className="bg-white p-6 rounded-b-lg">
                        <ul className="space-y-4">
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-chart-line text-orange-500 mr-4"></i>
                                <Link to='/trip'>
                                    <span className="text-lg font-medium">Your Booking</span>
                                </Link>
                            </li>
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-users text-orange-500 mr-4"></i>
                                <Link to='/customercare'>
                                    <span className="text-lg font-medium">Travellers</span>
                                </Link>
                            </li>
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-headset text-orange-500 mr-4"></i>
                                <Link to='/customercare'>
                                    <span className="text-lg font-medium">Customer Service</span>
                                </Link>
                            </li>
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-wallet text-orange-500 mr-4"></i>
                                <Link to='/money'>
                                <span className="text-lg font-medium">Your Wallet</span>
                                </Link>
                            </li>
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-shield-alt text-orange-500 mr-4"></i>
                                <span className="text-lg font-medium">Privacy Policy</span>
                            </li>
                            <li className="flex items-center py-4 border-b hover:bg-gray-100 cursor-pointer">
                                <i className="fas fa-file-alt text-orange-500 mr-4"></i>
                                <span className="text-lg font-medium">Terms of Use</span>
                            </li>
                            <li className="flex items-center py-4 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                                <i className="fas fa-power-off text-orange-500 mr-4"></i>
                                <Link to='/'>
                                    <span className="text-lg font-medium">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
