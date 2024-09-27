import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <ul className="space-y-2">
          <li className="font-semibold">Countries</li>
          <li className="hover:text-blue-300 cursor-pointer">Regions</li>
          <li className="hover:text-blue-300 cursor-pointer">Cities</li>
          <li className="hover:text-blue-300 cursor-pointer">Districts</li>
          <li className="hover:text-blue-300 cursor-pointer">Airports</li>
          <li className="hover:text-blue-300 cursor-pointer">Hotels</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Homes</li>
          <li className="hover:text-blue-300 cursor-pointer">Apartments</li>
          <li className="hover:text-blue-300 cursor-pointer">Resorts</li>
          <li className="hover:text-blue-300 cursor-pointer">Villas</li>
          <li className="hover:text-blue-300 cursor-pointer">Hostels</li>
          <li className="hover:text-blue-300 cursor-pointer">Guest houses</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Unique places to stay</li>
          <li className="hover:text-blue-300 cursor-pointer">Reviews</li>
          <li className="hover:text-blue-300 cursor-pointer">Unpacked: Travel articles</li>
          <li className="hover:text-blue-300 cursor-pointer">Travel communities</li>
          <li className="hover:text-blue-300 cursor-pointer">Seasonal and holiday deals</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Car rental</li>
          <li className="hover:text-blue-300 cursor-pointer">Flight Finder</li>
          <li className="hover:text-blue-300 cursor-pointer">Restaurant reservations</li>
          <li className="hover:text-blue-300 cursor-pointer">Travel Agents</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Customer Service</li>
          <li className="hover:text-blue-300 cursor-pointer">Partner Help</li>
          <li className="hover:text-blue-300 cursor-pointer">Careers</li>
          <li className="hover:text-blue-300 cursor-pointer">Sustainability</li>
          <li className="hover:text-blue-300 cursor-pointer">Press center</li>
          <li className="hover:text-blue-300 cursor-pointer">Safety Resource Center</li>
          <li className="hover:text-blue-300 cursor-pointer">Investor relations</li>
          <li className="hover:text-blue-300 cursor-pointer">Terms & conditions</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        Copyright © 2022 Lamabooking.
      </div>
    </div>
  );
};

export default Footer;
