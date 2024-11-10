import React from 'react';
import {project} from "../constants/index";
import Portfolio from "../assets/portfolio.png"

const Projects = () => {
    return (
        <div className='pb-4 border-b border-neutral-900'>
<h1 className='my-20 underline text-center text-4xl'>Projects</h1>  

<div>
    {project.map((item)=>(
        <div className='mb-8 flex flex-wrap gap-20 lg:justify-center'>
            <div className='w-full lg:w-1/4'>
<img width={300} height={300} className='mb-6 rounded-xl' src={Portfolio}  alt={item.project} />

            </div>
            <div className='w-full lg:w-3/4 max-w-xl'>
<h6 className='mb-2 font-semibold'>{item.title}</h6>
<p className='mb-4 text-neutral-400'>{item.desc}</p>

            </div>

        </div>
    ))}
</div>
        </div>
    );
}

export default Projects;
