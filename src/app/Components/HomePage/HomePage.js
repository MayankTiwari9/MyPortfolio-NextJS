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
          <div className="flex justify-center items-center gap-x-4">
            <a href="https://github.com/MayankTiwari9">
              <img
                class="rounded-t-lg w-10 sm:w-16 md:w-25 lg:w-58"
                src="/icons/square-github.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/mayank-tiwari-45048818a/">
              <img
                class="rounded-t-lg w-10 sm:w-16 md:w-25 lg:w-58"
                src="/icons/linkedin.svg"
                alt=""
              />
            </a>
          </div>
        </Container>
        <a href="/#about">
          <Button class="btn btn-outline-primary">Read More About Me</Button>
        </a>
      </div>
    </>
  );
};

export default HomePage;
