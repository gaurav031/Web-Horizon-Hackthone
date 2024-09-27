import React, { useEffect, useState } from 'react';

const HotelList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/room.json'); // Update with the correct path
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt={`Image of ${room.title}`}
                className="w-full h-48 object-cover"
                src={room.image}
                height="200" // Set the correct height for layout stability
                width="300"  // Set the correct width for layout stability
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{room.title}</h2>
                  <span className="text-xl font-bold">${room.price}</span>
                </div>
                <p className="text-gray-500">{room.description}</p>
                <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded">
                  BOOKED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelList;
