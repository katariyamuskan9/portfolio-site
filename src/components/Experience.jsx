import React from 'react';
import {EXPERIENCES} from "../constants/index"

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='underline text-4xl text-center my-20'>Experience</h1>
            <div>
                {EXPERIENCES.map((exp,index)=>(

                    <div className= 'mb-4 flex flex-wrap lg:justify-center gap-10  '>
                        <div className='w-full lg:w-1/4 border-r-2 border-cyan-100  '>
                            <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4  '>
                                <h6 className=' mb-2 font-semibold'> {exp.role}-{" "}<span className=' text-sm text-purple-100'>{exp.company}</span></h6>
                                <p className='mb-4 text-neutral-400 '>{exp.Description}</p>
                                <ul className='flex flex-wrap'>
                                {exp.Technologies.map((item,index)=>(
                                            <li className='mr-2 mt-2 bg-neutral-900 px-2 text-sm font-medium text-purple-500'>{item}</li>
                                ))}
                                </ul>
                                </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
