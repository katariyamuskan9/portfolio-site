import React from 'react';
import { IoHome } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdDisplaySettings } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaInfoCircle } from 'react-icons/fa';
const SideNav = ({ scrollToSection, homeRef, aboutRef,skillsRef, expRef, projectRef  }) => {
    return (
        <div className=' rounded-2xl border-4 border-neutral-800 fixed bottom-8 left-1/2 transform -translate-x-1/2 w-72  max-w-xs   bg-purple-700/80 px-2   py-4 '>
            <ul className='flex items-center justify-center    flex-wrap gap-10'>
                <li onClick={()=>scrollToSection(homeRef)} className='group relative cursor-pointer '><IoHome className='text-xl' /> <span class="absolute  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
     Home
      </span></li>
      <li onClick={()=>scrollToSection(aboutRef)} className=' group relative cursor-pointer '><FaInfoCircle className="text-xl" /> <span class="absolute  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        About
      </span></li>
                <li onClick={()=>scrollToSection(skillsRef)} className=' group relative cursor-pointer '><GiSkills className='text-xl'/> <span class="absolute  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Skills
      </span></li>
                <li onClick={()=>scrollToSection(expRef)} className=' group relativecursor-pointer '><MdDisplaySettings className='text-xl' /> <span class="absolute  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Experience
      </span></li>
                <li onClick={()=>scrollToSection(projectRef)} className=' group relative cursor-pointer '><GoProjectRoadmap className='text-xl' /> <span class="absolute  text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Projects
      </span></li>
            </ul>
         

  
        </div>
    );
}

export default SideNav;
