import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
 const Footer =()=>{
    return (
      <div className="fixed-bottom">
        <Container id="footer">
          <Navbar  variant="dark" bg="primary" expand="lg" className="justify-content-center" fixed="bottom">
            <NavbarBrand >Copyright © 2022 Anuradha Barukula</NavbarBrand>
          </Navbar>
        </Container>
      </div>
    );
  }

export default Footer;
