// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (email && password) {
      // Split the email and take the part before "@"
      let username = email.split("@")[0];

      // Set the user (username) in localStorage
      localStorage.setItem("user", JSON.stringify({ user: username }));

      alert("Logged IN");
      navigate("/"); // Redirect to home or dashboard after saving the user
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="w-28 h-28" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
          <p className="text-gray-500">Please enter your details</p>
        </div>

        <form>
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

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-checkbox"
                className="mr-2"
              />
              <label htmlFor="remember-checkbox" className="text-sm text-gray-500">
                Remember for 30 days
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={handleLogin}
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-200"
            >
              <img src={GoogleSvg} alt="Google Logo" className="w-5 h-5" />
              Log In with Google
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
