import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";

const Skills = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center underline text-4xl'>Skills</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaReact className='text-5xl text-cyan-300' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaHtml5 className='text-5xl text-orange-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaCss3Alt className='text-5xl text-blue-800' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <IoLogoJavascript className='text-5xl text-yellow-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaFigma className='text-5xl text-blue-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <RiTailwindCssFill className='text-5xl text-purple-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaGithub className='text-5xl text-black-300' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaNodeJs className='text-5xl text-green-300' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <SiMongodb className='text-5xl text-green-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-3'>
                    <FaBootstrap className='text-5xl text-purple-600' />
                </div>

            </div>
        </div>
    );
}

export default Skills;
