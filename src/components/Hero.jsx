import React from 'react';

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
           <div className='flex flex-wrap'>
            <div className='w-full '>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='tracking-tight max-w-2xl pb-8 text-4xl font-thin  lg:text-6xl'>
                     I am Muskan Katariya
                </h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent '> A Front End Developer</span>
                <p className='my-2 max-w-xl py-4 font-light tracking-tighter '>
                "Passionate front-end developer with 3 years of experience in crafting responsive, engaging interfaces. Skilled in React, JavaScript, and modern web tech, I transform complex ideas into intuitive, user-friendly designs. Driven by growth, I'm eager to tackle new challenges and innovate on the web."</p>

                    <button className='py-2 px-4 bg-purple-600 rounded cursor-pointer mx-2'> Get Resume</button>
                
            </div>
            </div>
            </div> 
        </div>
    );
}

export default Hero;
