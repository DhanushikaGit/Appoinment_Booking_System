import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { assets } from '../assets/assets';

const Banner = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className='flex bg-blue-600 rounded-lg px-4 sm:px-6 lg:px-8 my-10 mx-auto max-w-5xl w-full sm:w-10/12 md:w-9/12'>
      {/* Left side */}
      <div className='flex-1 py-6 sm:py-8 md:py-12 lg:py-16 lg:pl-4'>
        <div className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-semibold'>
          <p>Book Appointment</p>
          <p className='mt-3'>With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            window.scrollTo(0, 0);
          }}
          className='bg-white text-sm sm:text-base text-gray-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-4 hover:scale-105 transition-all'
        >
          Create Account
        </button>
      </div>
      {/* Right side */}
      <div className='hidden md:block md:w-1/2 lg:w-[350px] relative'>
        <img
          className='w-full absolute bottom-0 right-0 max-w-[280px] sm:max-w-[320px] md:max-w-[360px]'
          src={assets.appointment_img}
          alt='Doctor appointment illustration'
        />
      </div>
    </div>
  );
};

export default Banner;