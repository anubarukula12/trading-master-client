import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../Utils/images/logo.jpeg";

const logoutHandler = () => {
  localStorage.removeItem('token');
};
// Here, we display our Navbar
const AdminNavbar = () => {

  return (
    <Container id="navbar-container">
    <Navbar  variant="light" expand="lg" >
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
        <LinkContainer to="/country">
            <Nav.Link >Country List</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/stocks">
            <Nav.Link >StockList</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/excelupload">
            <Nav.Link>Excel Upload</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/userlist">
            <Nav.Link>Users</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/signin">
            <Nav.Link onClick={logoutHandler}>
              {" "}
              <FaUser /> LogOut
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);
};
export default AdminNavbar;
