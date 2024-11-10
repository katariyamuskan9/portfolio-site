import React from 'react';
import logo  from "../assets/logo.png"
import { FaLinkedin } from 'react-icons/fa';

import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
const Navbar = () => {
    return (
        <div >
            <nav className=' mb-16 flex items-center justify-between py-2'>
                <div className='flex flex-shrink items-center'>
                   <h1 className='text-2xl lg:text-4xl font-bold'>Hello <span className='text-pink-300'>World!!</span></h1>
                </div>
                <div className='flex justify-center items-center m-8 gap-4  text-2xl'>
             <FaGithub />
              < FaLinkedin />
         <FaTwitter/>
      

                </div>
            </nav>
           
        </div>
    );
}

export default Navbar;
