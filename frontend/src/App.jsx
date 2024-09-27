// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<>i am Home</>} />
        <Route path="/about" element={<>i am About</>} />
        <Route path="*" element={<>i am nothing</>} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;
