import React from "react";
import "./HomePage.css";
import { Button, Col, Container, Image, NavLink, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <div
        id="home"
        className="title bgstyle min-vh-100 d-flex flex-column justify-content-center align-items-center flex-wrap m-0"
      >
        <h1 className="fs-1">Mayank Tiwari</h1>
        <p className="animate-text">
          I design and develop experiences that makes people's lives simple.
        </p>
        <Container className="m-4">
          <Row className="d-flex flex-row justify-content-center  mx-auto">
            <Col xs={1}>
              <NavLink href="https://github.com/MayankTiwari9" target="_blank">
                <Image src="/icons/square-github.svg" />
              </NavLink>
            </Col>
            <Col xs={1}>
              <NavLink
                href="https://www.linkedin.com/in/mayank-tiwari-45048818a/"
                target="_blank"
              >
                <Image src="/icons/linkedin.svg" />
              </NavLink>
            </Col>
          </Row>
        </Container>
        <a href="/#about"><Button class="btn btn-outline-primary">Read More About Me</Button></a>
      </div>
    </>
  );
};

export default HomePage;
