import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom';

import React, { Component } from "react";

export class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <div className="m-3">
                <Link to="/Bussiness">Bussines</Link>
                </div>
                <div className="m-3">
                <Link to="/Politics">Politics</Link>
                </div>
                <div className="m-3">
                <Link to="/science">science</Link>
                </div>
                <div className="m-3">
                <Link to="/sports">sports</Link>
                </div>
                <div className="m-3">
                <Link to="/fashion">fashion</Link>
                </div>
                <div className="m-3">
                <Link to="/Politics">Politics</Link>
                </div>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
