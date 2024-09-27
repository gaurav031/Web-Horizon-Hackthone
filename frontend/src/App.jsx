// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import HotelList from './components/HotelList';


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<HotelList/>}/> 
       {/*<Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>

   
  );
}

export default App;
