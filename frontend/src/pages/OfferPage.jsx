import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OfferPage = () => {
    return (
        <div className="p-4 mt-6 bg-gray-100">
            <Navbar />
            <nav className="flex items-center space-x-2 text-gray-600 text-sm mb-4">
                <a href="#" className="hover:underline">Home</a>
                <span>/</span>
                <a href="#" className="hover:underline">Offers</a>
            </nav>
            <div className="flex justify-between items-center mb-4 flex-wrap">
                <h1 className="text-2xl font-bold w-full md:w-auto">ixigo Offers | Flight, Train, Bus and Hotel Deals</h1>
                <div className="flex flex-wrap space-x-2 mt-2 md:mt-0">
                    <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">All Offers</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Flights</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Trains</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Hotels</button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Bus Offers</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <aside className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <div className="mb-4">
                        <h3 className="text-md font-medium mb-2">Journey Type</h3>
                        <div className="flex flex-wrap space-x-2">
                            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">Domestic<br />35 Offers</button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">International<br />34 Offers</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-md font-medium mb-2">Popular Banks</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'AU Bank', offers: 5 },
                                { name: 'ICICI Bank', offers: 4 },
                                { name: 'HDFC Bank', offers: 4 },
                                { name: 'IDFC FIRST Bank', offers: 3 },
                                { name: 'OneCard', offers: 2 },
                                { name: 'MobiKwik', offers: 2 },
                                { name: 'Federal Bank Credit Card EMI', offers: 2 },
                                { name: 'BOB Card', offers: 1 },
                                { name: 'UPI', offers: 1 }
                            ].map((bank, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                    <span className="flex-1">{bank.name}</span>
                                    <span className="text-gray-500">{bank.offers} Offers</span>
                                    <input type="checkbox" className="form-checkbox" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <main className="w-full md:w-3/4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F533c900b1963987f574f8da1f607d28d-fwygn.png&w=640&q=75',
                                title: 'IndiGo Great Runaway Fest Sale is LIVE!',
                                expiry: '3 days',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F8c63857251d2bf95408fb4d1b83029e2-rnhwd.png&w=640&q=75',
                                title: 'Srilankan Airlines Sale is Live : Fly to Colombo',
                                expiry: 'Wed, 16 Oct',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F9e80930952c242f448b50368aba868f3-szhtx.png&w=640&q=75',
                                title: 'Air India Sale is LIVE!',
                                expiry: '3 days',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F1c1b0845ec13bae75d30b4968c185a3b-gmvfx.png&w=640&q=75',
                                title: 'LIVE: Myanmar Airways Sale',
                                expiry: '3 days',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F6a1c835975f9eee505e094bb8e944ae8-pwbnx.png&w=640&q=75',
                                title: 'Get Flat 12% Off On Flights with ICICI Bank Net Banking',
                                expiry: '3 days',
                                details: 'Applicable on Friday only',
                                type: 'Flights',
                                code: 'IXICICINB'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2Fd081a02b8ef9d9f9ff677d4f72999e47-peclk.png&w=640&q=75',
                                title: 'Get Flat 12% Off On Flights with Bank of Baroda Credit Cards EMI',
                                expiry: '3 days',
                                details: 'Applicable on Friday & Saturday only',
                                type: 'Flights',
                                code: 'IXIBOBEMI'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2Fe23e0150f133a9221320d95c9a74ff68-rfrro.png&w=640&q=75',
                                title: 'Offer Title 1',
                                expiry: 'Tue, 31 Dec',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            },
                            {
                                img: 'https://www.ixigo.com/offers/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Foffers_and_deals%2F67b37edcff0cbd7e6c65f9c6200f5fbc-ugodb.png&w=640&q=75',
                                title: 'Offer Title 2',
                                expiry: '3 days',
                                details: 'No Offer Code Required',
                                type: 'Flights'
                            }
                        ].map((offer, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <div className="relative">
                                    <img src={offer.img} alt={`Offer image for ${offer.title}`} className="w-full h-40 object-cover rounded-t-lg" />
                                    <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold px-2 rounded">{offer.type}</span>
                                </div>
                                <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
                                <p className="text-gray-500">{offer.details}</p>
                                <p className="text-gray-400 text-sm">Expires in {offer.expiry}</p>
                                {offer.code && (
                                    <div className="bg-yellow-100 text-yellow-600 mt-2 p-2 rounded text-center">
                                        <strong>Code:</strong> {offer.code}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default OfferPage;
