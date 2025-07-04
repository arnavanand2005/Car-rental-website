import React from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-white to-blue-50 px-6 py-4 shadow-lg backdrop-blur-sm border-b border-gray-100'>
        <Link to='/' className='transition-all duration-300 hover:scale-105 hover:rotate-[-2deg]'><img src={assets.logo} alt="logo" className='h-10 drop-shadow-md hover:drop-shadow-xl transition-all'/></Link>

    <div className='flex-1 flex justify-center ml-10'>
        {menuLinks.map((link, index) => (
            <Link key={index} to={link.path} 
            className='text-gray-700 
            text-xl
             tracking-wide relative px-4 py-2 mx-2 transition-colors duration-300
              hover:text-blue-600 before:content-[""] 
             before:absolute
              before:bottom-0 
             before:left-0 
             before:h-0.5 
             before:w-0
            before:bg-blue-500
            before:transition-all 
            before:duration-300 
            hover:before:w-full'
>
                {link.name}
            </Link>
        ))}
    </div>

    <div className='flex items-center gap-4'>
    </div>
  </div>
    )}
export default navbar