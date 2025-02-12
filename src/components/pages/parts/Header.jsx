import React from 'react'
import CallToAction from './CallToAction'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react';

const Header = () => {
  const [isShow, setIsShow]= React.useState(false)
  const handleShow = () => setIsShow (!isShow);


  return (
    <>
      <header className='py-6 bg-black'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              className='text-white text-3xl font-bold  hover:text-white text-[clamp(20px,_5.5vw,_30px)]'
            >
              Creative <span className='text-accent'>Visual</span> Designs
            </Link>
            <nav className={`fixed lg:static top-[80px] left-0 h-screen lg:h-auto z-50 bg-black lg:white w-full lg:w-auto transition-all ease-out duration-500  ${isShow ? "left-0" : "left-full"}`}>
              <ul className='flex flex-col items-center mt-24 lg:mt-0 lg:flex-row gap-10'>
                <li>
                  <Link className=' text-white text-3xl text-lg' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className=' text-white text-3xl text-lg' to='/services'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className=' text-white text-3xl text-lg' to='/updates'>
                    Updates
                  </Link>
                </li>
                <li>
                  <Link className=' text-white text-3xl text-lg' to='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <button className='lg:hidden' onClick={handleShow}><Menu stroke={"#fff"} size={30} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
