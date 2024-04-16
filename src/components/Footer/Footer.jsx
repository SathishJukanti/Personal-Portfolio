import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {


  return (
    <footer className='bg-slate-300 border-y w-full '>
      <div 
      className='mx-auto w-full p-4 py-6 lg:py-10 flex justify-center'>
        <div 
        className='md:flex md:justify-between '>   
          <h1 className='flex text-center gap-2'>
            <FaRegCopyright className='mt-1'/>
            2024 Sathish Jukanti
          </h1>                
        </div>
      </div>
    </footer>
  )
}

export default Footer