import React, { Component } from 'react';
import {contact} from "../constants"
import { FaLinkedin } from 'react-icons/fa';

import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
class Contact extends Component {
    render() {
        return (
            <div className='my-4 border-b border-neutral-900 pb-20'>
                <h1 className='underline my-10 text-center text-4xl'>Get in Touch</h1>
                <div className='text-center'>
               
                    <p className='p-2'>{contact.address}</p>
                    <p className='p-2'>{contact.phoneno}</p>
                    <p className='p-2 mb-4'>{contact.email}</p>
                    <div className='flex flex-wrap gap-4 items-center justify-center text-center'>
                    <FaGithub />
              < FaLinkedin />
         <FaTwitter/>
                    </div>
                    <p className='mt-20 text-neutral-400 '>Developed by muskan 💖</p>
                </div>
            </div>
        );
    }
}

export default Contact;
