import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import ControlledCarousel from '../../components/ControlledCarousel';
import CardVertical from '../../components/CardVertical';
import CardHorizontal from '../../components/CardHorizontal';
import SearchBar from '../../components/SearchBar';
import "./styles.css";

export default class Main extends Component {

  render() {

    return (
      <>

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

      </>
    );
  }
}