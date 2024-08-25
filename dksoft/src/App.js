import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarr from './Component/Navbarr';
import { Footer } from './Component/Footer';
import Contact from './Component/Contact';
import Temoignage from './Component/Temoignage';
import Services from './Component/Services';

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Navbarr />} />
        <Route path="/services" element={<Services />} />
        <Route path="/temoignages" element={<Temoignage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;