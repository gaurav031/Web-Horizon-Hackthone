import React from 'react';
import Hadder from '../components/Hadder';
import Navbar from '../components/Navbar';

const Attractions = () => {
    return (
        <div className="bg-white text-gray-800 font-sans container mx-auto p-6">
            <Navbar />
            <h1 className="text-3xl font-bold mb-6">Top 50 Tourist Attractions In India</h1>
            <p className="mb-6">Explore the list of best tourist destinations in India including Taj Mahal, Red Fort, India Gate & many more on Hotel Booking.</p>
            <p className="mb-6">Travelling from <span className="text-blue-500 cursor-pointer">Select City</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/3233266/pexels-photo-3233266.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Taj Mahal, Agra" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">1 Taj Mahal, Agra</div>
                    <div className="text-sm mt-2">Majestically located on the banks of Yamuna River, the Taj Mahal is a symbol of love that Mughal Emperor Shah Jahan had built in the memory of his beloved wife Mumtaz Mahal.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/3233266/pexels-photo-3233266.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Red Fort, Delhi" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">2 Red Fort, Delhi</div>
                    <div className="text-sm mt-2">Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed under the reign of Mughal Emperor Shah Jahan. It is famous for its intricate architecture and floral designs.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/3233266/pexels-photo-3233266.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Golden Temple, Amritsar" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">3 Golden Temple, Amritsar</div>
                    <div className="text-sm mt-2">Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimage site among Sikhs. It will leave you in awe with its jaw-dropping gold and marble edifice.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>
            </div>

            <div className="bg-red-600 text-white text-center p-4 rounded-lg my-6">
                <p className="text-lg">Discover every bit of Melbourne.</p>
                <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK NOW</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/13019844/pexels-photo-13019844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Location Recommendation" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">Tell us your location for better recommendations</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">CHOOSE YOUR ORIGIN CITY</div>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/16958933/pexels-photo-16958933/free-photo-of-kanda-myoujin-shrine-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Amer Fort, Jaipur" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">4 Amer Fort, Jaipur</div>
                    <div className="text-sm mt-2">Perched high on a hill and overlooking the Maota Lake, the Amer Fort is an impressive UNESCO World Heritage Site and showcases a beautiful fusion of Mughal and Rajput architecture.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>

                {/* Card 5 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hawa Mahal, Jaipur" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">5 Hawa Mahal, Jaipur</div>
                    <div className="text-sm mt-2">Also called as The Palace of Winds, this iconic red and pink sandstone structure boasts of 953 windows and is built by Maharaja Sawai Pratap Singh to allow the court ladies to enjoy the street activities.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Card 6 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/19649140/pexels-photo-19649140/free-photo-of-facade-of-the-ipiranga-museum-in-sao-paulo.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Humayun's Tomb, Delhi" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">6 Humayun's Tomb, Delhi</div>
                    <div className="text-sm mt-2">The royal mausoleum of Mughal Emperor Humayun, this structure is a precursor to the Taj Mahal and is a UNESCO World Heritage Site. It is a beautiful example of Mughal architecture and was completed between 1565 and 1572.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>

                {/* Card 7 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/6484130/pexels-photo-6484130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gateway of India, Mumbai" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">7 Gateway of India, Mumbai</div>
                    <div className="text-sm mt-2">An arch-monument built in the Indo-Saracenic style, the Gateway of India is an iconic symbol of Mumbai and was constructed in 1924 to commemorate the visit of King George V and Queen Mary.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>

                {/* Card 8 */}
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <img src="https://images.pexels.com/photos/13393414/pexels-photo-13393414.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Qutub Minar, Delhi" className="rounded-lg w-full h-48 object-cover" />
                    <div className="text-lg font-bold mt-4">8 Qutub Minar, Delhi</div>
                    <div className="text-sm mt-2">A UNESCO World Heritage Site, Qutub Minar is the tallest brick minaret in the world. The tower was constructed in 1193 and features intricate carvings and verses from the Quran.</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-4 text-center cursor-pointer hover:bg-blue-400 transition-colors">EXPLORE</div>
                    <div className="bg-blue-500 text-white p-2 rounded mt-2 text-center cursor-pointer hover:bg-blue-400 transition-colors">BOOK HOTELS</div>
                </div>
            </div>
        </div>
    );
};

export default Attractions;