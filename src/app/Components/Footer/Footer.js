import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-10">
      <h1 className="text-3xl font-thin tracking-tight sm:text-4xl flex justify-center p-4">
        Contact Me
      </h1>
      <p className="text-center mx-auto p-3 w-full md:w-9/12 lg:w-7/12">
        Thank you for visiting my portfolio! If you're looking for a dedicated
        and skilled Front-End or React Developer to join your team full-time,
        I'd love to hear from you. Please feel free to contact me at{" "}
        <a
          href="mailto:mt1027319@gmail.com"
          className="text-blue-400 hover:underline"
        >
          mt1027319@gmail.com
        </a>{" "}
        to discuss potential opportunities. I look forward to the possibility of
        contributing to your projects and driving innovation together.
      </p>
    </div>
  );
};

export default Footer;
