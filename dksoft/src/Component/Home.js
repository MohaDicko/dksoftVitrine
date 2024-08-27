import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavList from './Layout/Header/NavList';
import Services from './Services';
import Contact from './Contact';
import { Footer } from './Footer';
import Temoignage from './Temoignage';




export default function HomePage() {
  
  

  return (
    <>
    
        <NavList></NavList>
        <Services />
        <Temoignage/>
        <Contact></Contact>
        <Footer></Footer>
       
    
    </>
  );
}