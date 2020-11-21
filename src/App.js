import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import ControlledCarousel from './components/ControlledCarousel';
import CardVertical from './components/CardVertical';
import CardHorizontal from './components/CardHorizontal';
import SearchBar from './components/SearchBar';


import './App.css';
import backgroundImage from './assets/background.png';

export default function App(){
  return (
    <>
    <Header/>

   <SearchBar/>


   <ControlledCarousel/>
    <div className="container">
    <div className="row padding__bottom">
        <CardHorizontal/>
        <CardHorizontal/>
        <CardHorizontal/>
    </div>
  
    <div className="row padding__bottom">
      <CardVertical/>
      <CardVertical/>
      <CardVertical/>
      </div>
      
    </div>
    </>
  );
}