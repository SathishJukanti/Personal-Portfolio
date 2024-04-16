import React from 'react'
import image from '../Home/image.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div 
    className='bg-slate-700 text-white'>
      <div 
      className='min-h-screen w-full flex justify-center items-center'>
        <div
        className='md:min-h-[350px] md:w-[800px] w-[250px]'>
          <div
          className='flex flex-wrap overflow-hidden justify-center'>
            <div 
            className=' md:w-[400px] w-[250px] overflow-hidden '>
              <img 
              className='shadow-xl rounded-2xl md:rounded-full border-2 border-white ' 
              src={image} alt="" />
            </div>
            <div 
            className=' md:w-[400px] w-[250px] text-white mt-8 md:m-0'>
              <h1 
              className='text-3xl font-bold font-serif text-center text-[#149EA5]'>About</h1>
              <h3 
              className='text-xl font-serif m-6'>A dedicated Front-end Developer based in Hyderabad, India.</h3>
              <p 
              className='text-sm font-serif m-6'>As a Fresher Front-end Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind CSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.</p>
              <div 
              className='ml-6 w-full'>
                <h2 
                className='text-xl font-serif'>
                  <span 
                  className='border-b-2 border-black py-1'>Tech Stack
                  </span> 
                    <div 
                    className='flex gap-6 py-2'>
                      <FaHtml5 /> 
                      <FaCss3Alt />
                      <IoLogoJavascript />
                      <FaReact /> 
                      <SiTailwindcss /> 
                      <FaPython />
                    </div>
                </h2>
                <h2 
                className='text-xl font-serif py-2 '>
                  <span 
                  className='border-b-2 border-black py-1'>Explore
                  </span>  
                  <div
                  className='flex gap-8 py-2 '>
                    <Link to="https://www.linkedin.com/in/sathish-jukanti-52a822210/">
                      <FaLinkedin /> 
                    </Link>
                    
                    <Link to="https://github.com/sathishjukanti">
                      <FaGithub />
                    </Link>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

// grid md:grid-cols-2