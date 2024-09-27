import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [fullName, setFullName] = useState(""); // State for full name
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = () => {
    if (email && password && fullName) {
      // Split the email and take the part before "@"
      let username = email.split("@")[0];

      // Set the user (username) and full name in localStorage
      localStorage.setItem("user", JSON.stringify({ user: username }));

      alert("Account created successfully!");
      navigate("/"); // Redirect to home or dashboard after successful signup
    } else {
      alert("Please fill in all fields");
    }
  };

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
              value={fullName} // Bind input to fullName state
              onChange={(e) => setFullName(e.target.value)} // Update state on input change
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email} // Bind input to email state
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password} // Bind input to password state
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
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
            onClick={handleSignup}
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
