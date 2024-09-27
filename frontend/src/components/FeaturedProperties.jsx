import React from "react";
import {  useNavigate } from "react-router-dom"; // Import useNavigate

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
      navigate('/berlin')
      
    };
  // Static data for featured properties
  const data = [
    {
      _id: "1",
      name: "Luxury Hotel",
      city: "New York",
      cheapestPrice: 150,
      rating: 4.5,
      photos: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      _id: "2",
      name: "Cozy Apartment",
      city: "Los Angeles",
      cheapestPrice: 100,
      rating: 4.0,
      photos: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      ],
    },
    {
      _id: "3",
      name: "Beach Resort",
      city: "Miami",
      cheapestPrice: 200,
      rating: 4.7,
      photos: [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      _id: "4",
      name: "Modern Villa",
      city: "San Francisco",
      cheapestPrice: 250,
      rating: 4.9,
      photos: [
        "https://images.pexels.com/photos/158148/ruhl-house-home-galveston-texas-158148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto p-4">
      {data.map((item) => (
        <div
          className="flex flex-col rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform cursor-pointer hover:shadow-xl"
          key={item._id}
          onClick={handleSearch}
        >
          <div className="relative">
            <img
              src={item.photos[0]}
              alt={item.name}
              className="w-full h-48 sm:h-64 object-cover transition duration-300 ease-in-out hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 ease-in-out" />
          </div>
          <div className="p-4 bg-white transition-colors duration-300 ease-in-out">
            <span className="text-md sm:text-lg font-bold text-gray-800">{item.name}</span>
            <span className="block text-sm sm:text-md text-gray-600">{item.city}</span>
            <span className="text-sm sm:text-md font-semibold">
              Starting from ${item.cheapestPrice}
            </span>
            {item.rating && (
              <div className="flex items-center mt-2">
                <button className="bg-blue-800 text-white py-1 px-2 rounded-md mr-2 font-bold transition-colors duration-300 ease-in-out hover:bg-blue-600">
                  {item.rating}
                </button>
                <span className="text-sm text-gray-500">Excellent</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
