import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Hadder = () => {
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <div className="bg-blue-500 p-6 text-white">
      <div className="container mx-auto">
        <div className="flex space-x-6">
          <div className="cursor-pointer hover:text-gray-300">Stays</div>
          <div className="cursor-pointer hover:text-gray-300">Flights</div>
          <div className="cursor-pointer hover:text-gray-300">Car rentals</div>
          <div className="cursor-pointer hover:text-gray-300">Attractions</div>
          <div className="cursor-pointer hover:text-gray-300">Airport taxis</div>
        </div>
        <h1 className="text-4xl font-bold mt-6">A lifetime of discounts? It's Genius.</h1>
        <p className="mt-4">Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded mt-4">Sign in / Register</button>
        
        <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full p-2 rounded-md text-black"
            />
          </div>
          <div className="flex-1 relative">
            <span
              onClick={() => setOpenDate(!openDate)}
              className="cursor-pointer p-2 bg-white text-blue-500 rounded-md inline-block"
            >
              {`${dates[0].startDate.toLocaleDateString()} to ${dates[0].endDate.toLocaleDateString()}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="absolute top-12"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="flex-1 relative">
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="cursor-pointer p-2 bg-white text-blue-500 rounded-md inline-block"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="absolute top-12 bg-white text-black p-4 rounded-md shadow-lg">
                <div className="flex justify-between items-center">
                  <span>Adult</span>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => handleOption('adult', 'd')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      onClick={() => handleOption('adult', 'i')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>Children</span>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={options.children <= 0}
                      onClick={() => handleOption('children', 'd')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      onClick={() => handleOption('children', 'i')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>Room</span>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => handleOption('room', 'd')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      onClick={() => handleOption('room', 'i')}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1">
            <button
              onClick={handleSearch}
              className="w-full p-2 bg-white text-blue-500 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadder;
