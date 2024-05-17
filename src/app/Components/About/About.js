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
      className="about-main d-flex justify-content-center align-items-center text-white bg-dark "
    >
      <div className="d-flex justify-content-center align-items-center w-50">
        <Image
          className="bg-dark rounded-circle"
          style={{ height: "300px" }}
          src="/Images/MyImage-removebg-preview.jpg"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column w-50">
        <h1>About Me</h1>
        <p>
          My name is Mayank Tiwari. A passionate and detail-oriented software
          developer. Proficient in modern technologies like JavaScript, React,
          Next.Js and Node.js, with a strong focus on clean code and innovative
          solutions. Committed to continuous learning and staying up-to-date
          with industry trends. Enthusiastic about collaborating with
          cross-functional teams to drive project success.
        </p>
        <Button onClick={handleResumeClick}>Resume</Button>
      </div>
    </div>
  );
};

export default About;
