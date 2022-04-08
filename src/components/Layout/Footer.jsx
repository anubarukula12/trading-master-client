import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
 const Footer =()=>{
    return (
      <div className="fixed-bottom">
        <Container>
          <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
            <NavbarBrand>Copyright © 2022 Anuradha Barukula</NavbarBrand>
          </Navbar>
        </Container>
      </div>
    );
  }

export default Footer;
