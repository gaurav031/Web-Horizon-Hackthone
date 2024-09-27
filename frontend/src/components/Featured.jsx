import React from 'react';

const Featured = () => {
  // Static data for cities and properties
  const citiesData = [
    { city: "Berlin", properties: 123 },
    { city: "Madrid", properties: 456 },
    { city: "London", properties: 789 },
    { city: "Paris", properties: 312 }, // Added new city
  ];

  return (
    <div className="flex justify-center w-full my-8">
      <div className="w-full max-w-5xl flex justify-between gap-5 z-10">
        {citiesData.map((item, index) => (
          <div
            key={index}
            className="relative text-white rounded-lg overflow-hidden h-64 flex-1 group cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black"
          >
            <img
              src={
                item.city === "Berlin"
                  ? "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                  : item.city === "Madrid"
                    ? "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                    : item.city === "London"
                      ? "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                      : "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Updated Paris image link
              }
              alt={item.city}
              className="w-full h-full object-cover brightness-75 transition duration-300 ease-in-out"
            />
            <div className="absolute bottom-5 left-5">
              <h1 className="text-3xl font-bold">{item.city}</h1>
              <h2 className="text-lg mt-2">{item.properties} properties</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
