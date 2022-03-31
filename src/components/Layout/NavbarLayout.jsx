import React, { Component } from "react";
import { Navbar, Nav, NavDropdown ,Container} from "react-bootstrap";
import logo from '../Utils/images/logo.jpeg';
import {FaUser} from 'react-icons/fa';
class NavbarLayout extends Component {
  render() {
    return (
      <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">AboutUs</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Stock List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portfolio List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portfolio Performance</NavDropdown.Item>
          
            </NavDropdown>
          </Nav>
          <Nav>
      <Nav.Link href="#deets"><FaUser/> SignIn</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       <FaUser/> SignUp
      </Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    );
  }
}
export default NavbarLayout;
