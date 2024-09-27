import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Hadder = ({ type }) => {
<<<<<<< HEAD
    const navigate = useNavigate();
=======
  const navigate = useNavigate();
>>>>>>> 826be94b07b29a5cd32399b215a62d2faa6d9f5f
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
<<<<<<< HEAD
    navigate('/hotels')
=======
    navigate("/hotels");
>>>>>>> 826be94b07b29a5cd32399b215a62d2faa6d9f5f
    console.log("Search:", { destination, dates, options });
  };

  return (
    <div className="bg-slate-200 text-black flex justify-center relative h-[350px] mb-[100px]">
      <div className={`w-full max-w-6xl ${type === "list" ? "my-5" : "my-10"}`}>
        <div className="flex gap-10 mb-12">
          <div className="flex items-center gap-2 border border-white p-2 rounded-full">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="text-4xl font-bold mb-4">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="mb-8">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free booking account
            </p>
            <button className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-lg mb-6">
              Sign in / Register
            </button>
            <div className="bg-white text-black border-4 border-yellow-400 flex items-center justify-between py-4 px-5 rounded-lg">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 relative">
                <FontAwesomeIcon icon={faCalendarDays} className="text-gray-500" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-500 cursor-pointer"
                >
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="absolute top-16 z-20"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="relative">
                <div
                  onClick={() => setOpenOptions(!openOptions)}
                  className="cursor-pointer text-gray-500"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </div>
                {openOptions && (
                  <div className="absolute top-12 bg-white text-gray-600 shadow-lg rounded-lg p-4 z-20">
                    <div className="flex justify-between mb-2">
                      <span>Adult</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Children</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Room</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="w-8 h-8 border border-blue-500 text-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-lg"
              >
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hadder;
