import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
 const Footer =()=>{
    return (
      <div className="fixed-bottom">
        <Container id="footer">
          <Navbar  variant="dark" expand="lg" className="justify-content-center bg-success">
            <NavbarBrand >Copyright © 2022 Anuradha Barukula</NavbarBrand>
          </Navbar>
        </Container>
      </div>
    );
  }

export default Footer;
