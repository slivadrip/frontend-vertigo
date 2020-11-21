import React, { Component } from "react";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import CardVertical from '../../components/CardVertical';
import SearchBar from '../../components/SearchBar';
import "./styles.css";

export default class Fetch extends Component {

  render() {

    return (
      <>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Buscar</Breadcrumb.Item>
          </Breadcrumb>
        </Container>

        <SearchBar />

        <Container>

          <Row>
            <Col md="12">
              <h1 class="text__header">Resultados da Busca</h1>
            </Col>
          </Row>

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