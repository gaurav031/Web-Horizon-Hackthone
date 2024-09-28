import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
            <div className="min-h-screen bg-white mt-20">
                <div className="bg-gradient-to-r from-purple-700 to-red-500 p-6 flex items-center justify-between">
                    {user ? ( // Conditional rendering to check if user exists
                        <>
                            <div>
                                <h1 className="text-white text-2xl font-bold">Gaurav</h1>
                                <a href="#" className="text-white text-sm">VIEW PROFILE &gt;</a>
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
                <div className="p-6">
                    <ul>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-chart-line text-orange-500 mr-4"></i>
                            <span className="text-lg">Fare alerts</span>
                        </li>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-users text-orange-500 mr-4"></i>
                            <span className="text-lg">Travellers</span>
                        </li>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-headset text-orange-500 mr-4"></i>
                            <span className="text-lg">Customer Service</span>
                        </li>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-wallet text-orange-500 mr-4"></i>
                            <span className="text-lg">Ixigo Money</span>
                        </li>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-shield-alt text-orange-500 mr-4"></i>
                            <span className="text-lg">Privacy policy</span>
                        </li>
                        <li className="flex items-center py-4 border-b">
                            <i className="fas fa-file-alt text-orange-500 mr-4"></i>
                            <span className="text-lg">Terms of use</span>
                        </li>
                        <li className="flex items-center py-4" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            <i className="fas fa-power-off text-orange-500 mr-4"></i>
                            <span className="text-lg">Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
