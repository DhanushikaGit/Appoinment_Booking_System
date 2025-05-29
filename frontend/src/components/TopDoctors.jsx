import React from 'react';
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const TopDoctors = () => {
  if (!doctors || doctors.length === 0) {
    return <div>No doctors available</div>;
  }
const navigate =useNavigate()
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-16'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='text-center text-lg text-black font-medium leading-loose tracking-wide py-4 px-8 rounded-xl'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((doctor) => (
          <div
       
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500'
            key={doctor._id}
          >
            <img className='bg-blue-50' src={doctor.image} alt={`${doctor.name}'s profile`} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500'>
                <span className='w-2 h-2 bg-green-500 rounded-full' />
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
              <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
              
            </div>
          </div>
        ))}
      </div>
      <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
        More
      </button>
    </div>
  );
};

export default TopDoctors;