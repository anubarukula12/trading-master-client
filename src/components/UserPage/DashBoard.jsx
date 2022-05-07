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
      <Navbar variant="light" expand="lg">
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
            <LinkContainer to="/userprofile">
              <Nav.Link>Pofile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolioperformanve">
              <Nav.Link>PortfolioPerformance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolios">
              <Nav.Link>UserPortfolioList</Nav.Link>
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
