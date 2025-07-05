import React, {useState} from 'react'
import {assets , menuLinks} from '../assets/assets'
import { Link ,useLocation , useNavigation} from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  return (

    // write tailwind css in the class name
    <div className='flex justify-between items-center px-6 md:px-16 lg:px-24 bg-white p-4 shadow-md'>
      <Link className='' to="/"><img src={assets.logo} alt="logo-pic" className='h-8'/></Link>

      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t 
      border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max:sm:p-4 transition-all
      duration-300 ease-in-out sm:static sm:bg-transparent sm:p-0 sm:shadow-none bg-white z-50 ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'} ${location.pathname === '/' ? 'bg-light' : 'bg-white'}`}>
        {menuLinks.map((link,index) => (
          <Link to={link.path} key={index} className='text-gray-700 hover:text-blue-500 transition duration-300 text-xl'>
            {link.name}
          </Link>
        ))} 
      </div>

      
    </div>

  )
}
export default Navbar;
