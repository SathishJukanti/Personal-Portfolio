import React from 'react'
import {About, Projects, Contact} from '../index'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"




function Home() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
      <div 
      className='w-full min-h-screen'>
        <div 
        className='bg-slate-700'>
          <div 
          className='min-h-screen w-full flex justify-center items-center'>
            <div 
            className='md:min-h-[300px] md:min-w-[800px] min-h-[500px] w-[250px]'>
              <div 
              className='grid md:grid-cols-2 flex-row-reverse md:backdrop-blur-sm '>
                <div 
                className='md:w-[400px] w-[250px] min-h-full overflow-hidden'>
                  <img 
                  className=' rounded-xl shadow-xl-white hover:scale-110 hover:duration-500 duration-700 '
                  src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div 
                className='md:w-[400px] w-[250px] mt-12 backdrop-blur-sm md:backdrop:blur-none '>
                  <h1
                  className='md:text-4xl text-2xl text-[#149EA5] font-serif text-center font-bold pt-2 '
                  >Front-End React <br /> Developer</h1>
                  
                  <p
                  className='text-center text-gray-300 text-lg pt-8 p-3 text-wrap'
                  >Hi, I'm Sathish Jukanti. A Passionate Front-End React Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='w-full min-h-screen'>
        <About />
      </div>
      <div className='w-full min-h-screen'>
        <Projects />
      </div>
      <div className='w-full min-h-screen'>
        <Contact />
      </div>
    </>
  )
}

export default Home
