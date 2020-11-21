import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import CardVertical from '../../components/CardVertical';
import SearchBar from '../../components/SearchBar';
import "./styles.css";

export default class Fetch extends Component {

  render() {

    return (
      <>
      <SearchBar />

      <Container>
        <Row className="padding__bottom">
        <CardVertical />
          <CardVertical />
          <CardVertical />
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
      </>
    );
  }
}