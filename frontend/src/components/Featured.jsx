import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Featured = () => {
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate('/berlin');

  };

  // Static data for cities and properties
  const citiesData = [
    { city: "Berlin", properties: 123 },
    { city: "Madrid", properties: 456 },
    { city: "London", properties: 789 },
    { city: "Paris", properties: 312 },
  ];

  return (
    <>
      <div className=" flex flex-col justify-center items-center py-10 bg-white">
      {/* Heading */}
      

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link to='https://www.booking.com/'>
        <img
          src="https://www.skyscanner.co.in/images/websites/h_bc.png"
          alt="Booking.com logo"
        
          className="h-12 transition-transform transform hover:scale-110"
        />
        </Link>

        <Link to='https://www.makemytrip.com/'>
        <img
          src="https://www.skyscanner.co.in/images/websites/h_mq.png"
          alt="Make My Trip logo"
          className="h-12 transition-transform transform hover:scale-110"
        />
        </Link>

        <Link to='https://www.booking.com/'>
        <img
          src="https://www.skyscanner.co.in/images/websites/d_ct.png"
          alt="Trip.com logo"
          className="h-12 transition-transform transform hover:scale-110"
        />
        </Link>

        
        <Link to='https://in.trip.com/?locale=en-in'>
        <img
          src="https://www.skyscanner.co.in/images/websites/h_hc.png"
          alt="Agoda logo"
          className="h-12 transition-transform transform hover:scale-110"
        /> 
        </Link>

        
        <Link to='https://in.hotels.com/?locale=en_IN&pos=HCOM_IN&siteid=300000036'>
        <img
          src="https://www.skyscanner.co.in/images/websites/h_xp.png"
          alt="Expedia logo"
          className="h-12 transition-transform transform hover:scale-110"
        />
        </Link>
        
       
      </div>
    </div>
    <h1 className="homeTitle text-3xl font-bold my-5 text-center mt-5">
        Dream Place
      </h1>
      <div className="flex justify-center w-full my-8 px-4">
      
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
       
          {citiesData.map((item, index) => (
            <div
              key={index}
              className={`relative text-white rounded-lg overflow-hidden h-64 flex-1 group cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black ${index === 0 ? 'mt-4 sm:mt-0' : ''}`}
              onClick={handleSearch}

            >
              <img
                src={
                  item.city === "Berlin"
                    ? "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    : item.city === "Madrid"
                      ? "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                      : item.city === "London"
                        ? "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                        : "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </>

  );
};

export default Featured;
