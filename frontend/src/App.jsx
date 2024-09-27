// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/SignUp';
import List from './pages/List';
import HotelPage from './pages/HotelPage';
import Book from './pages/Book';



function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route path="/signup" element={<Signup />} />
      <Route path="/hotels" element={<List/>}/> 
      <Route path="/hotelpage" element={<HotelPage/>}/> 
      <Route path="/book" element={<Book/>}/> 
       {/*<Route path="/hotels/:id" element={<Hotel/>}/>
=======

      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotelpage" element={<HotelPage />} />
      <Route path="/book" element={<Book />} />
      {/*<Route path="/hotels/:id" element={<Hotel/>}/>
>>>>>>> 0246868adba5f4a0881e1a1541cf85be2d31f358

      <Route path="/login" element={<Login/>}/> */}
    </Routes >


  );
}

export default App;
