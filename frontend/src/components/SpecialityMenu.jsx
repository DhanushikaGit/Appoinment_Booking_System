import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';

const SpecialityMenu = () => {
  console.log('specialityData:', specialityData);

  if (!specialityData || !Array.isArray(specialityData)) {
    return <div className="text-center py-20 text-red-600">Error: Speciality data is not available.</div>;
  }

  return (
    <div className='flex flex-col items-center gap-6 py-20 text-gray-900 bg-gradient-to-b from-white to-gray-50' id='speciality'>
      <h1 className='text-3xl font-medium'>Find By Speciality</h1>
      <p className='text-center text-lg text-black font-medium leading-loose tracking-wide py-4 px-8 rounded-xl'>
        Browse our curated list of trusted specialists and book your appointment with ease.
      </p>
      <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto scrollbar-hide'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            to={`/doctors/${item.speciality.toLowerCase()}`}
            key={index}
            className='flex flex-col items-center bg-white p-6 rounded-xl shadow-lg cursor-pointer flex-shrink-0 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-64'
          >
            <img
              src={item.image || '/path/to/fallback-image.jpg'}
              alt={item.speciality || 'Speciality'}
              className='w-20 sm:w-28 mb-4 rounded-full object-cover'
            />
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800'>{item.speciality || 'Unknown Speciality'}</h2>
              <p className='text-gray-600 text-sm mt-2 leading-snug'>
                {item.description || 'Expert care in this specialty.'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;