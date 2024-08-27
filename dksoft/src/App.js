import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Header/NavList';
import Contact from './Component/Contact';
import Temoignage from './Component/Temoignage';
import Services from './Component/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Component/Home';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/temoignages" element={<Temoignage />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;