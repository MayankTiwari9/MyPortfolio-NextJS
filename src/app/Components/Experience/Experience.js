import React from "react";
import { Image } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col p-5 sm:p-0">
      <h1 className="text-white flex justify-center items-center p-5 text-4xl sm:text-5xl md:text-6xl font-thin">
        Experience
      </h1>
      <div className="flex flex-col text-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 justify-center items-center m-auto text-base sm:text-lg">
        <Image
          className="m-4 w-24 sm:w-32 md:w-40"
          src="/Images/LRITLogo.png"
        />
        <h3 className="m-2 text-center">Software Developer Intern</h3>
        <h3 className="m-2 text-center">February 2024 - April 2024</h3>
      </div>
    </div>
  );
};

export default Experience;
