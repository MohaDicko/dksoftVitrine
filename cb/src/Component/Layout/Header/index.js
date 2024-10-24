import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Outlet } from 'react-router-dom';
import NavList from './NavList';

import { Footer } from '../Footer';
import { Card } from '@material-tailwind/react';


export default function Layout() {
  
  

  return (
    <>
    
      <NavList/>
     
        <div className="w-full">  
          <Outlet />
        </div>
      <Footer></Footer>
    </>
  );
}