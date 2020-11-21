
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import cardimage from '../../assets/teste.png';

import './styles.css';


export default function CardVertical() {

  return (
    <div className="col-md-4">
    <Card>
    <Card.Img variant="top" src={cardimage} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  );
}