import React, { useState } from "react";
import './App.css'; // Assuming you move styles to an external CSS file
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TripPage = () => {
  const [isCancelled, setIsCancelled] = useState(false); // State to track if booking is cancelled

  const handleCancelBooking = () => {
    setIsCancelled(true); // Change the booking status to "cancelled"
  };

  return (
    <>
      <div className="p-4 bg-gray-100">
        <Navbar />

        {/* Tabs for navigation */}
        <div className="flex space-x-4 mb-4 mt-20">
          <button className="tab-inactive rounded-full px-4 py-2">Flights</button>
          <button className="tab-inactive rounded-full px-4 py-2">Trains</button>
          <button className="tab-inactive rounded-full px-4 py-2">Buses</button>
          <button className="tab-active rounded-full px-4 py-2">Hotels</button>
        </div>

        {/* Sub-tabs for filtering */}
        <div className="flex space-x-8 mb-4">
          <button className="sub-tab-active">Upcoming</button>
          <button className="sub-tab-inactive">Past</button>
          <button className="sub-tab-inactive">Cancelled</button>
          <button className="sub-tab-inactive">Failed</button>
        </div>

        {/* Hotel Booking Information */}
        <div className="border-t pt-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://pix8.agoda.net/hotelImages/29738825/-1/7c3e9a30caa1c2782fac360384f0665a.jpg?ce=0&s=1024x768"
              alt="Hotel room with a bed and a window"
              className="w-20 h-20 rounded"
            />
            <div>
              <div className="font-bold text-lg">Hotel Blue Wellington</div>
              <div className="text-gray-500">Andheri East</div>
              <div className="text-gray-500">27 Sep - 28 Sep, 2 Guests</div>

              {/* Conditional rendering for booking status */}
              <div className={`font-bold ${isCancelled ? "text-red-600" : "text-green-600"}`}>
                {isCancelled ? "BOOKING CANCELLED" : "BOOKING COMPLETE"}
              </div>
            </div>
          </div>

          {/* Cancel button */}
          {!isCancelled && ( // Show the cancel button only if the booking is not cancelled
            <button
              onClick={handleCancelBooking}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Cancel Booking
            </button>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TripPage;
