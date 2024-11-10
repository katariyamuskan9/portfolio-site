import React from 'react';
import AboutImg from "../assets/About.jpg";
import {About_text} from "../constants/index"

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className=' underline my-20 text-center text-4xl'>About<span className='text-neutral-500'>Us</span></h1>
<div className='flex flex-wrap'>
    <div className='w-full  lg:w-1/2 lg:p-8'>
    <div className='flex justify-center items-center pb-4 '>
<img width={300} height={400} className='rounded-2xl ' src={AboutImg} alt='girl with laptop'/>
    </div>

    </div>
    <div className='w-full  lg:w-1/2 lg:p-8'>
    <div className='flex justify-center items-center '>
<p className='text-md max-w-2xl'>{About_text}</p>
    </div>

    </div>
    <div>

    </div>
</div>
        </div>
    );
}

export default About;
