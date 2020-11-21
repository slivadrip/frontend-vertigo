
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import cardimage from '../../assets/teste.png';

import './styles.css';


export default function CardHorizontal() {
  return (
    <div className="col-md-4">

      <Card>
        <div className="row">
          <div className="col-md-6">
            <Card.Body>
              <Card.Title>Aqui temos o titulo.</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

          </Card.Text>
            </Card.Body>
          </div>
          <div className="col-md-6">
            <Card.Img src={cardimage} />
          </div>
        </div>
      </Card>
    </div>
  );
}