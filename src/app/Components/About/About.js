"use client";

import React from "react";
import "./about.css";
import { Button, Image } from "react-bootstrap";

const About = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1AB9G1NxTIAL5dS7wiWRMHXbiHzKGrEc6/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      id="about"
      className="about-main d-flex justify-content-center align-items-center  text-white bg-dark "
    >
      <div className="d-flex justify-content-center align-items-center w-50">
        <Image
          className="bg-dark rounded-circle"
          style={{ height: "300px" }}
          src="/Images/MyImage-removebg-preview.jpg"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column w-50">
        <h1 className="text-6xl">About Me</h1>
        <p>
          Hello! I'm Mayank, a creative and driven web developer. I thrive on
          turning imaginative ideas into digital realities, constantly seeking
          innovative ways to blend design and technology. I possess a strong
          foundation in FRONT-END development, as well as a keen eye for
          responsive design and user-centered interfaces.
        </p>
        <Button onClick={handleResumeClick}>Resume</Button>
      </div>
    </div>
  );
};

export default About;
