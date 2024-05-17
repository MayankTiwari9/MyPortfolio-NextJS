import React from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" className="px-3 fixed-top navbar-trransparent">
        <Container>
          <NavbarBrand className="navbar-brand" href="#home">Mayank</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#resume">Resume</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
            </Nav>
          </NavbarCollapse>  
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
