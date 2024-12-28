import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Center from './Components.jsx/Center';
import Home from './Components.jsx/Home';
import Practice from './Components.jsx/Practice';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Center />} />
        <Route path="/home" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
