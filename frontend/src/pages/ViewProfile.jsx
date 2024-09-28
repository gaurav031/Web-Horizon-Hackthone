import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ViewProfile = () => {
    return (
        <>
        <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md">
                    <div className="bg-gradient-to-r from-purple-500 to-red-500 p-4 rounded-t-lg">
                        <div className="flex items-center">
                            <Link to='/profile'>
                            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
                            </Link>
                           
                            <h2 className="text-white text-center flex-grow">Profile</h2>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <p className="border-b border-gray-300 py-2">Gaurav Raaz</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <div className="flex items-center justify-between border-b border-gray-300 py-2">
                                <p>gauravraaz2005@gmail.com</p>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />
                                    <span className="text-red-500 text-sm ml-1">Verify</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                            <div className="flex items-center justify-between border-b border-gray-300 py-2">
                                <p>+91 9142946180</p>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                                    <span className="text-green-500 text-sm ml-1">Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="w-full bg-orange-500 text-white py-2 rounded-lg">SAVE</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ViewProfile