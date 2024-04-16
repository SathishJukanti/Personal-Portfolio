import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import SathishJukanti from './SathishJukanti.png'




function Header() {
  return (
    <header 
    className='sticky shadow z-50 top-0'>
        <nav 
        className='backdrop-blur-sm  border-gray-200 px-4 lg:px-6 py-2.5 border-b-2 border-b-[#149EA5]'>
            <div 
            className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <Link 
                to='/' 
                className='flex items-center'>
                    <img
                    src={SathishJukanti}
                    className='mr-3 h-12'
                    alt='logo'
                    />
                </Link>
                <div>
                    <IoMenu className='md:hidden block h-[25px] w-[25px]'/>
                    <div 
                    className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
                    id='mobile-menu-2'>
                        <ul 
                        className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'>
                            <li>
                            <NavLink
                            to='/'
                            className={({isActive}) => 
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#149EA5] lg:p-0`
                            }
                            >
                                Home
                            </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='about'
                                className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#149EA5] lg:p-0`
                                }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='projects'
                                className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#149EA5] lg:p-0`
                                }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='contact'
                                className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-500' : 'text-gray-400'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#149EA5] lg:p-0`
                                }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </nav>
    </header>
  )
}

export default Header