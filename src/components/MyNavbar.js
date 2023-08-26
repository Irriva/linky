import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from 'react-router-dom';
import "./card.css";
import React, { Component } from "react";

export class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <div className="m-3 nav-item">
                <Navbar.Brand href="/">Newsily</Navbar.Brand>
                </div>
              
              <div className="m-3">
                <Link to="/Bussiness" className="nav-item">Bussiness</Link>
                </div>
                {/* <div className="m-3 ">
                <Link to="/Politics"className="nav-item">Politics</Link>
                </div> */}
                
                <div className="m-3 ">
                <Link to="/science"className="nav-item">science</Link>
                </div>
                <div className="m-3 ">
                <Link to="/sports"className="nav-item">sports</Link>
                </div>
                <div className="m-3">
                <Link to="/fashion"className="nav-item">fashion</Link>
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
