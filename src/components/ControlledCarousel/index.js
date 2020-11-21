
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './styles.css';
import backgroundImage from '../../assets/background.png';


export default function ControlledCarousel () {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backgroundImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Aqui temos uma descrição legível.
Que informa sobre a imagem ao fundo.
Uma descrição impactante.</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backgroundImage}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Aqui temos uma descrição legível.
Que informa sobre a imagem ao fundo.
Uma descrição impactante.</h3>     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={backgroundImage}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Aqui temos uma descrição legível.
Que informa sobre a imagem ao fundo.
Uma descrição impactante.</h3>     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}