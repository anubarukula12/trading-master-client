import React from "react";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import logo from "../../Utils/images/logo.jpeg";
import { FaUser } from "react-icons/fa";
import {LinkContainer} from 'react-router-bootstrap'
const NavbarLayout = () => {
  return (
    <Container  id="navbar-container">
      <Navbar  bg="light" variant="light" fixed="top"  expand="lg" >
        <Navbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer  to="/aboutus"><Nav.Link>AboutUs</Nav.Link></LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/signin">
              <Nav.Link >
                {" "}
                <FaUser /> SignIn
              </Nav.Link>
            </LinkContainer>
            <LinkContainer  to="/signup">
            <Nav.Link eventKey={2}>
              <FaUser /> SignUp
            </Nav.Link>
            </LinkContainer>

            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default NavbarLayout;
