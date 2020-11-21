

import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap'

import './styles.css';

export default function Footer() {
  return (
    <footer className="footer__rnp mt-auto">
      <Col className="footer__text">
        <p>© 2020 - RNP Todos os direitos reservados.   | Adriano Pereira.</p>
      </Col>
    </footer>
  );
}