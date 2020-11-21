
import React, { useState, useEffect } from 'react';
import {Navbar, Nav,NavDropdown, Image } from 'react-bootstrap'
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";


import './styles.css';


export default function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg__gray navbar__gray">
    <div className="container">
    <Navbar.Brand href="#home">
    <Image src="https://www.rnp.br/sites/site-publico/themes/bootstrap_barrio/sitepublico/logo.png" fluid />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"/>    
      <Nav className="alignRight">
        <Nav.Link  href='/fetch'>Item Menu</Nav.Link>
        <Nav.Link >Item Menu</Nav.Link>
        <Nav.Link >Item Menu</Nav.Link>

        <NavDropdownMenu title="Item Menu" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Item Sub-Menu </NavDropdown.Item>
          <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu">
            <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu 2">
              <NavDropdown.Item href="#action/9.1">
              Item Sub-Menu-3
              </NavDropdown.Item>
            </DropdownSubmenu>
          </DropdownSubmenu>
        </NavDropdownMenu>

        <NavDropdownMenu title="Item Menu" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Item Sub-Menu </NavDropdown.Item>
          <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu">
            <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu 2">
              <NavDropdown.Item href="#action/9.1">
              Item Sub-Menu-3
              </NavDropdown.Item>
            </DropdownSubmenu>
          </DropdownSubmenu>
        </NavDropdownMenu>


        <NavDropdownMenu title="Item Menu" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1">Item Sub-Menu </NavDropdown.Item>
          <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu">
            <DropdownSubmenu href="#action/3.7" title="Item Sub-Menu 2">
              <NavDropdown.Item href="#action/9.1">
              Item Sub-Menu-3
              </NavDropdown.Item>
            </DropdownSubmenu>
          </DropdownSubmenu>
        </NavDropdownMenu>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>

  );
}