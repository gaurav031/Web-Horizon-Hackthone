// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/SignUp';
import List from './pages/List';
import HotelPage from './pages/HotelPage';
import Book from './pages/Book';
import BerlinPage from './Listing/BerlinPage';



function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/hotels" element={<List/>}/> 
      <Route path="/hotelpage" element={<HotelPage/>}/> 
      <Route path="/book" element={<Book/>}/> 
      <Route path="/berlin" element={<BerlinPage/>}/> 
      
       {/*<Route path="/hotels/:id" element={<Hotel/>}/>

      <Route path="/login" element={<Login/>}/> */}
    </Routes >


  );
}

export default App;