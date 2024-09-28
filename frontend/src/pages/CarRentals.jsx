import React from 'react'
import Navbar from '../components/Navbar';

const CarRentals = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Navbar />
            <div className="bg-white rounded-lg shadow-lg p-8 mt-16 w-3/4 max-w-4xl">
                <h1 className="text-3xl font-bold text-blue-900">Discover new rental car deals.</h1>
                <p className="text-lg text-gray-600">How much will you save?</p>
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="mr-2" checked />
                    <label className="text-gray-700">Drop-off location is the same</label>
                    <input type="checkbox" className="ml-4 mr-2" checked />
                    <label className="text-gray-700">Driver's age is 25 or over</label>
                </div>
                <div className="mt-4">
                    <div className="flex items-center border rounded-lg p-2">
                        <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                        <input type="text" placeholder="City, Airport or Address" className="flex-grow outline-none" />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-4">
                        <div className="flex items-center border rounded-lg p-2 mb-2 sm:mb-0 sm:mr-2 flex-grow">
                            <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
                            <input
                                type="text"
                                placeholder="Pick-up"
                                className="outline-none flex-grow"
                            />

                        </div>
                        <div className="flex items-center border rounded-lg p-2 mb-2 sm:mb-0 sm:mr-2 flex-grow">
                            <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
                            <input
                                type="text"
                                placeholder="Drop-off"
                                className="outline-none flex-grow"
                            />

                        </div>
                        <button className="bg-blue-600 text-white rounded-lg px-6 py-2 transition duration-300 ease-in-out hover:bg-blue-500">
                            Search
                        </button>
                    </div>

                </div>
                <p className="text-gray-500 mt-2">Book a car with free cancellation for flexibility</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8 w-3/4 max-w-md">
                <h2 className="text-xl font-bold text-gray-800">Why use Priceline?</h2>
                <ul className="mt-4">
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Trusted by 8 million travelers
                    </li>
                    <li className="flex items-center text-gray-700 mt-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Great deals from our rental car suppliers
                    </li>
                    <li className="flex items-center text-gray-700 mt-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Free cancellation on most bookings
                    </li>
                    <li className="flex items-center text-gray-700 mt-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        No credit card fees
                    </li>
                </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8 w-3/4 max-w-6xl">
                <h2 className="text-2xl font-bold text-gray-800">Great deals from our rental car suppliers</h2>
                <div className="grid grid-cols-6 gap-4 mt-4">
                    <img src="https://placehold.co/100x50?text=AVIS" alt="AVIS logo" />
                    <img src="https://placehold.co/100x50?text=Budget" alt="Budget logo" />
                    <img src="https://placehold.co/100x50?text=Hertz" alt="Hertz logo" />
                    <img src="https://placehold.co/100x50?text=Enterprise" alt="Enterprise logo" />
                    <img src="https://placehold.co/100x50?text=dollar" alt="dollar logo" />
                    <img src="https://placehold.co/100x50?text=Alamo" alt="Alamo logo" />
                    <img src="https://placehold.co/100x50?text=Thrifty" alt="Thrifty logo" />
                    <img src="https://placehold.co/100x50?text=ACE" alt="ACE logo" />
                    <img src="https://placehold.co/100x50?text=Sixt" alt="Sixt logo" />
                    <img src="https://placehold.co/100x50?text=fox" alt="fox logo" />
                    <img src="https://placehold.co/100x50?text=National" alt="National logo" />
                    <img src="https://placehold.co/100x50?text=Payless" alt="Payless logo" />
                    <img src="https://placehold.co/100x50?text=Advantage" alt="Advantage logo" />
                    <img src="https://placehold.co/100x50?text=AVR" alt="AVR logo" />
                    <img src="https://placehold.co/100x50?text=America" alt="America logo" />
                    <img src="https://placehold.co/100x50?text=American" alt="American logo" />
                    <img src="https://placehold.co/100x50?text=autounion" alt="autounion logo" />
                    <img src="https://placehold.co/100x50?text=CARWIZ" alt="CARWIZ logo" />
                    <img src="https://placehold.co/100x50?text=Driving" alt="Driving logo" />
                    <img src="https://placehold.co/100x50?text=Easirent" alt="Easirent logo" />
                    <img src="https://placehold.co/100x50?text=Economy" alt="Economy logo" />
                    <img src="https://placehold.co/100x50?text=Europcar" alt="Europcar logo" />
                    <img src="https://placehold.co/100x50?text=Firefly" alt="Firefly logo" />
                    <img src="https://placehold.co/100x50?text=Flexways" alt="Flexways logo" />
                    <img src="https://placehold.co/100x50?text=foco" alt="foco logo" />
                    <img src="https://placehold.co/100x50?text=green" alt="green logo" />
                    <img src="https://placehold.co/100x50?text=Infinity" alt="Infinity logo" />
                    <img src="https://placehold.co/100x50?text=kyte" alt="kyte logo" />
                    <img src="https://placehold.co/100x50?text=mex" alt="mex logo" />
                    <img src="https://placehold.co/100x50?text=Midway" alt="Midway logo" />
                    <img src="https://placehold.co/100x50?text=Next" alt="Next logo" />
                    <img src="https://placehold.co/100x50?text=NU" alt="NU logo" />
                    <img src="https://placehold.co/100x50?text=OTOQ" alt="OTOQ logo" />
                    <img src="https://placehold.co/100x50?text=Priceless" alt="Priceless logo" />
                    <img src="https://placehold.co/100x50?text=rentacar" alt="rentacar logo" />
                    <img src="https://placehold.co/100x50?text=ROUTES" alt="ROUTES logo" />
                    <img src="https://placehold.co/100x50?text=StateVan" alt="StateVan logo" />
                    <img src="https://placehold.co/100x50?text=Surprice" alt="Surprice logo" />
                    <img src="https://placehold.co/100x50?text=U-SAVE" alt="U-SAVE logo" />
                    <img src="https://placehold.co/100x50?text=unidas" alt="unidas logo" />
                    <img src="https://placehold.co/100x50?text=YORK" alt="YORK logo" />
                </div>
            </div>
        </div>
    );
}

export default CarRentals