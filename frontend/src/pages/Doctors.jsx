import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Adjust this path

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality && doctors.length > 0) {
      const filtered = doctors.filter(doc =>
        doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  // List of specialties
  const specialties = [
    'general physician',
    'gynecologist',
    'dermatologist',
    'pediatricians',
    'neurologist',
    'gastroenterologist'
  ];

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>

      <div className='flex flex-col sm:flex-row gap-6 mt-6'>
        {/* Sidebar */}
        <div className='flex flex-col gap-4 text-gray-600'>
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() => navigate(`/doctors/${spec}`)}
              className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality?.toLowerCase() === spec ? 'bg-indigo-100 text-black' : ''
              }`}
            >
              {spec.charAt(0).toUpperCase() + spec.slice(1)}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        {/* Doctors Grid */}
<div className='grid grid-cols-auto gap-16 pt-5 gap-y-6 px-3 sm:px-0 w-full'>
  {filterDoc.map((doctor) => (
    <div
      onClick={() => navigate(`/doctor/${doctor._id}`)}
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

      </div>
    </div>
  );
};

export default Doctors;
