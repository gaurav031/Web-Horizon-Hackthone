import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const MailList = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Email submitted successfully!");
  };

  return (
    <div className="w-full mt-12 bg-white text-gray-800 flex flex-col items-center gap-6 p-12 rounded-2xl shadow-lg border border-gray-300 transition-all duration-500 hover:shadow-xl">
      <h1 className="text-4xl font-bold text-slate-700 mb-2">Save time, save money!</h1>
      <p className="text-lg text-center font-medium text-gray-600">Sign up and we'll send the best deals directly to your inbox.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="relative flex w-full">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 p-4 pr-16 bg-white text-gray-800 border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bg-slate-600 text-white h-10 px-6 rounded-full font-semibold shadow-md hover:bg-slate-700 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
        {successMessage && <p className="text-green-500 font-medium mt-3 transition duration-300">{successMessage}</p>}
      </form>

      <div className="flex items-center space-x-4 mt-4">
        <span className="text-sm font-medium text-gray-500">Follow us:</span>
        <a href="#" className="text-slate-600 hover:text-slate-800 transition duration-300">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className="text-slate-600 hover:text-slate-800 transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-slate-600 hover:text-slate-800 transition duration-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default MailList;
