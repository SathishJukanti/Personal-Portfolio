import React, { useState } from 'react'
import {Button} from '../index'

function Contact() {

  function handleSubmit(params) {
    console.log("sathish");
  }

  return (
    <div 
    className='min-h-screen w-full bg-slate-700 duration-200'>
      <div 
      className='min-h-screen w-full flex justify-center items-center'>
        <div 
        className='md:min-h-[300px] md:w-[400px] h-[500px] w-[300px]'>
          <div 
          className='flex flex-col '>  
            <div 
            className='md:h-[40px] md:w-[170px] w-[170px] flex border-b border-white md:ml-28 ml-16'>
              <h1 
              className='text-center md:ml-0 text-white text-3xl font-bold font-serif grid tracking-[.08em]'>CONTACT</h1>
            </div>
            <div>
              <p 
              className='text-[#149EA5] text-xl font-serif mt-6 text-center'>Have a question or want to work together?</p>
            </div>            
          </div>
            <div 
            className='h-[200px] w-full  mt-10 rounded-sm'>
              <form >
                <div 
                className=''>
                  <input 
                  className='bg-gray-500 text-slate-200 w-full py-1.5 focus:outline-none pl-4 rounded-sm'
                  type="text"
                  placeholder='Name'
                />
                </div>
                <div 
                className='mt-1'>
                  <input 
                  className='bg-gray-500 text-slate-200 w-full py-1.5 focus:outline-none pl-4 rounded-sm'
                  type="email"
                  placeholder='Enter email'
                />
                </div>
                <div 
                className='mt-1 min-h-[120px] w-full'>
                  <input 
                  className='bg-gray-500 text-slate-200 w-full focus:outline-none pl-4 text-top pb-24 py-1.5 rounded-sm'
                  type="text"
                  placeholder='Your Massage'
                />
                </div>
                <div 
                className='text-right pt-2'>
                  <Button 
                  title="Submit"
                  onChange={handleSubmit} 
                  />
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
