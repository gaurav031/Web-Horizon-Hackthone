import React from "react";

const MailList = () => {
  return (
    <div className="w-full mt-12 bg-blue-900 text-white flex flex-col items-center gap-5 p-12">
      <h1 className="text-3xl font-bold">Save time, save money!</h1>
      <span className="text-lg">Sign up and we'll send the best deals to you</span>
      <div className="flex">
        <input
          type="text"
          placeholder="Your Email"
          className="w-72 h-10 p-2 border-none rounded-l-md focus:outline-none"
        />
        <button className="h-10 bg-blue-700 text-white font-medium rounded-r-md cursor-pointer px-4">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
