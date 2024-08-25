import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavList from './Component/NavList';
import { Footer } from './Component/Footer';
import Contact from './Component/Contact';
import Temoignage from './Component/Temoignage';
import Services from './Component/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <Router>
      <NavList />
      <Routes>
        <Route path="/" element={<NavList/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/temoignages" element={<Temoignage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;