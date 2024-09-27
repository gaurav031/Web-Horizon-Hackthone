import React from "react";

const FeaturedProperties = () => {
  // Static data for featured properties
  const data = [
    {
      _id: "1",
      name: "Luxury Hotel",
      city: "New York",
      cheapestPrice: 150,
      rating: 4.5,
      photos: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      _id: "2",
      name: "Cozy Apartment",
      city: "Los Angeles",
      cheapestPrice: 100,
      rating: 4.0,
      photos: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
      ]
    },
    {
      _id: "3",
      name: "Beach Resort",
      city: "Miami",
      cheapestPrice: 200,
      rating: 4.7,
      photos: [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      _id: "4",
      name: "Modern Villa",
      city: "San Francisco",
      cheapestPrice: 250,
      rating: 4.9,
      photos: [
        "https://images.pexels.com/photos/158148/ruhl-house-home-galveston-texas-158148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  ];

  return (
    <div className="flex flex-wrap justify-between gap-5 max-w-6xl mx-auto">
      {data.map((item) => (
        <div className="flex-1 flex flex-col gap-2 rounded-lg overflow-hidden shadow-md" key={item._id}>
          <img
            src={item.photos[0]}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <span className="text-lg font-bold text-gray-800">{item.name}</span>
            <span className="text-gray-600">{item.city}</span>
            <span className="text-md font-semibold">Starting from ${item.cheapestPrice}</span>
            {item.rating && (
              <div className="flex items-center mt-2">
                <button className="bg-blue-800 text-white py-1 px-2 rounded-md mr-2 font-bold">
                  {item.rating}
                </button>
                <span className="text-sm">Excellent</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
