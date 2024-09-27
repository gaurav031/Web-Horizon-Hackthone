// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';

import List from './pages/List';



function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/> 
       {/*<Route path="/hotels/:id" element={<Hotel/>}/>

      <Route path="/login" element={<Login/>}/> */}
    </Routes>


  );
}

export default App;
