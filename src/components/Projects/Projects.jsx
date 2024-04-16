import React from 'react'
import {Button} from '../index'
import ReactRouter from './ReactRouter.png'
import MegaBlog from './MegaBlog.png'
import CurrencyConverter from './CurrencyConverter.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div 
    className='min-h-screen w-full'>
      <div 
      className='min-h-screen w-full bg-slate-700 flex justify-center items-center'>
        <div 
        className='md:w-[900px] w-[300px] flex flex-wrap justify-center overflow-hidden'>
          <div 
          className=' overflow-hidden'>
                <img className='md:h-[300px] rounded-lg hover:scale-110 hover:duration-500 duration-700 overflow-hidden' src={ReactRouter} alt="" />
          </div>
          <div 
          className='w-[300px] h-[300px] md:w-[400px] md:mt-4 mt-8'>
            <h1 
            className='text-2xl font-bold font-serif text-center text-[#149EA5]'>React Router</h1>

            <h3 
            className='text-md font-serif text-slate-300 md:ml-8 mt-4'>React Router is a declarative, component-based, client and server-side routing library. When a user clicks a link, React Router updates the URL and renders the corresponding component without a full page reload.</h3>

            <div 
            className='flex md:flex-wrap gap-8 text-white md:px-16 md:py-6 mt-4 ml-6'>
              <Link
              to='https://github.com/SathishJukanti/React-Projects/tree/main/05ReactRouter'
              >
                <Button title='GitHub'/>
              </Link>
              <Button 
              title='Live'/>
            </div>
          </div>
          <div 
          className=' overflow-hidden'>
                <img className='md:h-[300px] w-[487px] rounded-lg hover:scale-110 hover:duration-500 duration-700 overflow-hidden' src={MegaBlog} alt="" />
          </div>
          <div 
          className='w-[300px] h-[300px] md:w-[400px] md:mt-4 mt-8'>
            <h1 
            className='text-2xl font-bold font-serif text-center text-[#149EA5]'>Mega Blog Website</h1>

            <h3 
            className='text-md font-serif text-slate-300 md:ml-8 mt-4'>My Blog Post project is a web application that allows users to read and publish blog articles.
            </h3>
          
            <div 
            className='flex md:flex-wrap gap-8 text-white md:px-16 md:py-6 mt-4 ml-6'>
              <Link
              to='https://github.com/SathishJukanti/React-Projects/tree/main/06MegaBlog'
              >
                <Button title='GitHub'/>
              </Link>
              <Button 
              title='Live'/>
            </div>
          </div>
          <div 
          className=' overflow-hidden'>
                <img className='md:h-[300px] w-[487px] rounded-lg hover:scale-110 hover:duration-500 duration-700 overflow-hidden' src={CurrencyConverter} alt="" />
          </div>
          <div 
          className='w-[300px] h-[300px] md:w-[400px] md:mt-4 mt-8'>
            <h1 
            className='text-2xl font-bold font-serif text-center text-[#149EA5]'>Currency Converter</h1>

            <h3 
            className='text-md font-serif text-slate-300 md:ml-8 mt-4'>A currency converter is a website that provides for the easy conversion of currency values based on present-day exchange rates.</h3>

            <div 
            className='flex md:flex-wrap gap-8 text-white md:px-16 md:py-6 mt-4 ml-6'>
              <Link
              to='https://github.com/SathishJukanti/React-Projects/tree/main/04CurrencyConverter'
              >
                <Button title='GitHub'/>
              </Link> 
              <Button title='Live'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
