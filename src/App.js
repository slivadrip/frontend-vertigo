import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header';
import ControlledCarousel from './components/ControlledCarousel';
import CardVertical from './components/CardVertical';
import CardHorizontal from './components/CardHorizontal';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';


import './App.css';
import backgroundImage from './assets/background.png';

export default function App() {
  return (
    <>
      <Header />

      <SearchBar />

    <ControlledCarousel />
      <Container>
        <Row className="padding__bottom">
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
        </Row>

        <Row className="padding__bottom">
          <CardVertical />
          <CardVertical />
          <CardVertical />
       </Row>      

       <Row className="padding__bottom">
       <Col md={{ span: 2 }} > </Col>
       <CardVertical />
       <CardVertical />
      </Row>
   </Container>
   <Footer/>
    </>
  );
}