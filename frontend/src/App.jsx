// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import List from './pages/List';
import HotelPage from './pages/HotelPage';
import Book from './pages/Book';
import BerlinPage from './Listing/BerlinPage';
import OfferPage from './pages/OfferPage';
import CustomerCarePage from './pages/CustomerCarePage';
import ProfilePage from './pages/ProfilePage';
import TripPage from './pages/TripPage';

import MoneyPage from './pages/MoneyPage';
import ViewProfile from './pages/ViewProfile';
import Flights from './pages/Flights';
import CarRentals from './pages/CarRentals';
import Attractions from './pages/Attractions';



function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotelpage" element={<HotelPage />} />
      <Route path="/book" element={<Book />} />
      <Route path="/berlin" element={<BerlinPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/customercare" element={<CustomerCarePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/trip" element={<TripPage />} />
      <Route path="/money" element={<MoneyPage />} />
      <Route path="/viewprofile" element={<ViewProfile />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/car-rentals" element={<CarRentals />} />
      <Route path="/attractions" element={<Attractions />} />

      {/*<Route path="/hotels/:id" element={<Hotel/>}/>

      <Route path="/login" element={<Login/>}/> */}
    </Routes >


  );
}

export default App;
