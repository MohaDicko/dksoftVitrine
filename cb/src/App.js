import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Header';
import Contact from './Component/Contact';
import Temoignage from './Component/Temoignage';
import Services from './Component/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Component/Home';
import GoogleMapComponent from './Component/GoogleMapComponent';
import Project from './Component/Project';
import { Footer } from './Component/Layout/Footer';
import Accueil from './Component/Accueil';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
         <Route index element={<Home/>} />
       </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;