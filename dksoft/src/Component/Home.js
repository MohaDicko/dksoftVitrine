import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavList from './Layout/Header/NavList';
import Services from './Services';
import Contact from './Contact';
import { Footer } from './Layout/Footer';
import Temoignage from './Temoignage';
import Project from './Project';
import Accueil from './Accueil';





export default function HomePage() {
  
  

  return (
    <>
    
        <NavList></NavList>
        <Accueil></Accueil>
        <Services />
        <Project></Project>
        <Temoignage/>
        <Contact></Contact>
        <Footer></Footer>
       
    
    </>
  );
}