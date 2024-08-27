import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../Component/Footer';
import { Outlet } from 'react-router-dom';
import NavList from './NavList';
import './Component/index.css';


export default function Layout() {
  
  

  return (
    <>
    
      <NavList/>
        <div className="w-full max-w-screen-xl mx-auto">  
          <Outlet />
        </div>
      <Footer></Footer>
    </>
  );
}