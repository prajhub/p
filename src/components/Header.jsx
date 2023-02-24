import React, {useState} from 'react';

import Logo from '../assets/img/logo.png'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import {FaBars} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'


const Header = () => {

  const [navMobile, setNavMobile] = useState(false)


  return(

    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'>
      <div className="container mx-auto">

          <div className=' flex items-center justify-between '>

            <div className='flex items-center gap-x-[110px] '>
              <a href='#'>
                <img src={Logo} alt=''/>
              </a>


              <div className='hidden lg:flex '>
                <Nav/>        
              </div>
            </div>

            

            <div className={` ${navMobile ? 'max-h-52' : 'max-h-0'} lg:hidden  absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden`}>
              <NavMobile/>
            </div>

            <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>Request Sample <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition'/></button>

            <div onClick={()=> setNavMobile(!navMobile)} className='lg:hidden text-2xl text-primary cursor-pointer'>
              <FaBars/>
            </div>

          </div>

      </div>
    </header>

  )
};

export default Header;
