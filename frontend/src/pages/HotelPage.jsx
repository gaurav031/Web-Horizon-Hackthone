import React from 'react';

const HotelPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto p-4">
        {/* Hotel Images */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <img
              alt="Hotel room with a TV and wooden furniture"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-x8urth6IRv1hHqrvfaJB4LJy.png?st=2024-09-27T07%3A41%3A25Z&se=2024-09-27T09%3A41%3A25Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Hotel signboard"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Bm5EgRTp8UfUEtvLGZ89V9ft.png?st=2024-09-27T07%3A41%3A22Z&se=2024-09-27T09%3A41%3A22Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
            />
            <img
              alt="Hotel dining area"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-4V7zB4je7WHCF1fZLrmtLiMf.png?st=2024-09-27T07%3A41%3A30Z&se=2024-09-27T09%3A41%3A30Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
            />
            <img
              alt="Hotel bedroom"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-euP5PYafgkngYYHErSSLEx04.png?st=2024-09-27T07%3A41%3A28Z&se=2024-09-27T09%3A41%3A28Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
            />
            <img
              alt="Hotel bathroom"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-BObQxPPMRQQbR16eDa6LBHDL.png?st=2024-09-27T07%3A41%3A27Z&se=2024-09-27T09%3A41%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
            />
          </div>
        </div>

        {/* Hotel Information */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Hotel Blue Wellington</h1>
          <div className="flex items-center mt-2">
            <span className="text-blue-500 text-lg font-semibold">8.0</span>
            <span className="ml-2 text-gray-600">Very Good</span>
            <span className="ml-2 text-gray-600">(256 reviews)</span>
          </div>
          <p className="mt-2 text-gray-600">
            <i className="fas fa-map-marker-alt"></i>
            101 Allée Madeleine de L'Isle, Opp. Golden State, Near Saki Vihar Complex, C/O Saki Vihar Road, Sakinaka, Andheri East, Mumbai (All), Maharashtra, India, 400072
          </p>
          <div className="flex mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 transition">Save</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Share</button>
          </div>
        </div>

        {/* Popular Facilities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Popular Facilities</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <i className="fas fa-concierge-bell text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">24/7 Check-in</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-wifi text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">Internet services</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-concierge-bell text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">24/7 Room Service</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-snowflake text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">Air conditioned rooms</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-broom text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">Daily housekeeping</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-shield-alt text-3xl text-gray-600"></i>
              <span className="mt-2 text-gray-600">24/7 Security</span>
            </div>
          </div>
        </div>

        {/* Room Selection */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Select your room</h2>
          <div className="mt-4">
            {/* Room Type 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105">
              <div className="flex">
                <img
                  alt="Deluxe Double Room"
                  className="w-48 h-32 object-cover rounded-lg"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-o38zj2kC4auQlD5B3Am6OYMv.png?st=2024-09-27T07%3A41%3A26Z&se=2024-09-27T09%3A41%3A26Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Deluxe Double Room</h3>
                  <p className="text-gray-600">2 adults, 1 double bed</p>
                  <p className="text-gray-600 text-lg font-bold">$200 per night</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition">Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Type 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105">
              <div className="flex">
                <img
                  alt="Standard Single Room"
                  className="w-48 h-32 object-cover rounded-lg"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-R47PRAcxFz90RFT9Kg1G4YXo.png?st=2024-09-27T07%3A41%3A31Z&se=2024-09-27T09%3A41%3A31Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Standard Single Room</h3>
                  <p className="text-gray-600">1 adult, 1 single bed</p>
                  <p className="text-gray-600 text-lg font-bold">$150 per night</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition">Book Now</button>
                </div>
              </div>
            </div>
            {/* Room Type 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105">
              <div className="flex">
                <img
                  alt="Family Room"
                  className="w-48 h-32 object-cover rounded-lg"
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-ZWQkKc9fObcy6RJMEExFZyUd.png?st=2024-09-27T07%3A41%3A24Z&se=2024-09-27T09%3A41%3A24Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Family Room</h3>
                  <p className="text-gray-600">4 adults, 1 double bed and 2 single beds</p>
                  <p className="text-gray-600 text-lg font-bold">$250 per night</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
