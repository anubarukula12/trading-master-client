import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../Utils/images/logo.jpeg";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
const DashBoard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/userprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
  }, []);
  if (!localStorage.getItem("token")) {
    navigate("/signin");
  }
  const logoutHandler = () => {
    localStorage.removeItem("token");
  };

  return (
    <Container id="navbar-container">
      <Navbar variant="dark" bg="primary" fixed="top" expand="lg">
        <Navbar.Brand href="#home">
         <h3>TRADING MASTER</h3>
     
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/userprofile">
              <Nav.Link>Pofile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolioperformance">
              <Nav.Link>Portfolio Performance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolios">
              <Nav.Link>Portfolio List</Nav.Link>
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
export default DashBoard;
