import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Hadder = ({ type }) => {
  const navigate = useNavigate();
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
  const [selectedOption, setSelectedOption] = useState("Stays");

  const handleOptionClick = (label) => {
    setSelectedOption(label);
    // Redirect based on the selected option
    switch (label) {
      case "Stays":
        navigate("/");
        break;
      case "Flights":
        navigate("/flights");
        break;
      case "Car rentals":
        navigate("/car-rentals");
        break;
      case "Attractions":
        navigate("/attractions");
        break;
      case "Airport taxis":
        navigate("/airport-taxis");
        break;
      default:
        break;
    }
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels");
    console.log("Search:", { destination, dates, options });
  };

  return (
    <div
      className="bg-cover bg-center text-white flex justify-center relative mt-4 h-[320px] mb-[40px] p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587115462907-cc1e5923b043?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className={`w-full max-w-6xl ${type === "list" ? "my-5" : "my-10"}`}>
        <div className="flex flex-wrap gap-4 mb-12 font-bold text-black">
          {[
            { label: "Stays", icon: faBed },
            { label: "Flights", icon: faPlane },
            { label: "Car rentals", icon: faCar },
            { label: "Attractions", icon: faBed },
            { label: "Airport taxis", icon: faTaxi },
          ].map((option) => (
            <div
              key={option.label}
              className={`flex items-center gap-2 border p-2 rounded-full hover:cursor-pointer ${selectedOption === option.label ? "bg-blue-600 text-white" : "border-white"
                }`}
              onClick={() => handleOptionClick(option.label)} // Use the new function here
            >
              <FontAwesomeIcon icon={option.icon} />
              <span className="text-sm md:text-base">{option.label}</span>
            </div>
          ))}
        </div>

        {type !== "list" && (
          <>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="text-sm md:text-base mb-8">
              Get rewarded for your travels – unlock instant savings of 10% or more with a free
              booking account
            </p>

            <div className="bg-white text-black border-4 border-yellow-400 flex flex-col md:flex-row items-center justify-between py-4 px-5 rounded-lg">
              {/* Destination Input */}
              <div className="flex items-center gap-2 w-full mb-4 md:mb-0">
                <FontAwesomeIcon icon={faBed} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none flex-grow py-2 px-2 md:py-1 md:px-3"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              {/* Date Picker */}
              <div className="flex items-center gap-2 relative w-full mb-4 md:mb-0">
                <FontAwesomeIcon icon={faCalendarDays} className="text-gray-500" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-500 cursor-pointer"
                >
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
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

              {/* Options Selector */}
              <div className="relative w-full mb-4 md:mb-0">
                <div
                  onClick={() => setOpenOptions(!openOptions)}
                  className="cursor-pointer text-gray-500 text-center md:text-left"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </div>
                {openOptions && (
                  <div className="absolute top-12 bg-white text-gray-600 shadow-lg rounded-lg p-4 z-20 w-full">
                    {["adult", "children", "room"].map((opt) => (
                      <div className="flex justify-between mb-2" key={opt}>
                        <span>{opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={options[opt] <= 0 && opt !== "adult"}
                            onClick={() => handleOption(opt, "d")}
                            className="w-8 h-8 border border-blue-500 text-blue-500"
                          >
                            -
                          </button>
                          <span>{options[opt]}</span>
                          <button
                            onClick={() => handleOption(opt, "i")}
                            className="w-8 h-8 border border-blue-500 text-blue-500"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-blue-700 text-white py-2 px-4 font-semibold rounded-lg w-full md:w-auto"
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