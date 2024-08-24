import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarr from './Component/Navbarr';
import { Footer } from './Component/Footer';
import Contact from './Component/Contact';
import Temoignage from './Component/Temoignage';
import Service from './Component/Service'; // Assurez-vous que le chemin est correct
import Home from './Component/Home'; // Créez un composant Home pour la page d'accueil

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/temoignages" element={<Temoignage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;