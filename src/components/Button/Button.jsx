import React from 'react'

function Button({title, type}) {
  return (
    <>
        <button
            className='py-2 px-8 border-2 border-white text-white hover:bg-[#149EA5] hover:border-[#149EA5] duration-300'
            type={type}
            >{title}
        </button>
    </>
  )
}

export default Button