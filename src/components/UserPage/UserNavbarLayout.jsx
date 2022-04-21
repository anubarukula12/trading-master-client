import React ,{useEffect}from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../Utils/images/logo.jpeg";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 const UserNavbarLayout = () => {
//   let navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("http://localhost:5000/protected", {
//         headers: {
//           Authorization: token,
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//          navigate('/signin')
//       });
//   }, []);
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
          <Nav className="me-auto">
          <LinkContainer to="/userprofile">
            <Nav.Link >Profile</Nav.Link></LinkContainer>
            {/* <LinkContainer to="/stocklist">
            <Nav.Link>StockList</Nav.Link></LinkContainer>
            <LinkContainer to="/Portfolio List"><Nav.Link>Portfolio List</Nav.Link></LinkContainer>
            <LinkContainer to="/Portfolio Performance"> <Nav.Link>Portfolio Performance</Nav.Link></LinkContainer> */}
          </Nav>
          {/* <Nav>
            <LinkContainer to="/signin">
              <Nav.Link>
                {" "}
                <FaUser /> LogOut
              </Nav.Link>
            </LinkContainer>
          </Nav>  */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default UserNavbarLayout;
