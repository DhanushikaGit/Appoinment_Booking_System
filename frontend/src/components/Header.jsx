import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-blue-300 rounded-lg px-6 md:px-10 lg:px-20 py-8'>
            {/* Left side */}
            <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold leading-tight mb-4'>
                    Book Appointment<br />With Trusted Doctors
                </p>
                <div className='mb-4'>
                    <img src= {assets.group_profiles}  alt="Group Profile" className='mx-auto md:mx-0 mb-2' />
                    <p className='text-gray-700'>
                        Simply browse through our extensive list of trusted doctors,<br />
                        and schedule your appointment hassle-free.
                    </p>
                </div>
                <a
                    href="#speciality"
                    className='flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
                >
                    Book Appointment
                    <img src={assets.arrow_icon} alt="Arrow Icon" className='w-4 h-4' />
                </a>
            </div>

            {/* Right side */}
            <div className='md:w-1/2 flex justify-center items-center mt-6 md:mt-0'>
                <img
                    className='w-full max-w-md animate-float'
                    src={assets.header_img}
                    alt="Header Visual"
                />
            </div>
        </div>
    );
};

export default Header;
