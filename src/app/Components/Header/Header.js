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
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-transparent fs-5">
        <Container>
          <NavbarBrand className="fs-4" href="#home">Mayank</NavbarBrand>
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
