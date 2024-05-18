"use client";

import React from "react";
import { Button, Image } from "react-bootstrap";
import "./about.css";

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
      className="about-main min-h-screen flex flex-col md:flex-row justify-center items-center text-white bg-dark p-5"
    >
      <div className="flex justify-center items-center w-full md:w-1/2 mb-4 md:mb-0">
        <Image
          className="bg-dark rounded-circle"
          style={{ height: "300px" }}
          src="/Images/MyImage-removebg-preview.jpg"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">About Me</h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 px-2">
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
