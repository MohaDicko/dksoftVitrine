import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './Services';
import Temoignage from './Temoignage';
import Project from './Project';
import Accueil from './Accueil';
import { Card, Typography } from '@material-tailwind/react';


import image from '../images/veto4.jpg';
import Contact from './Contact';


export default function HomePage() {
  
  

  return (
    <>
    <div className=" w-full">
        <Card className="mb-12 mt-0 ">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src={image} // Corrigé le chemin de l'image
          />
        </Card>
        
      </div>
      <div className=''>
        <Accueil/>
      <Services />
      <Project></Project>
      <Temoignage/>
      <Contact/>
       
        </div>
        
       
    
    </>
  );
}