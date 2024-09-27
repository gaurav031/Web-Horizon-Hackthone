// Signup.js
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6"; // Add this line
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="w-28 h-28" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-gray-500">Please fill in the details below</p>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
