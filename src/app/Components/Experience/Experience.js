import React from 'react';
import './Experience.css';
import { Image } from 'react-bootstrap';

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col p-5 '>
      <h1 className='text-white flex justify-center items-center p-5 text-6xl font-thin'>Experience</h1>
      <div className='flex flex-col text-white w-1/4 justify-center items-center m-auto text-lg'>
        <Image className='m-4' src='/Images/LRITLogo.png'/>
        <h3 className='m-2'>Software Developer Intern</h3>
        <h3 className='m-2'>February 2024 - April 2024</h3>
      </div>
    </div>
  )
}

export default Experience
