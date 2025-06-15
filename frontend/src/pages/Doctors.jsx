import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Adjust path as needed

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const applyFilter = () => {
    if (speciality && doctors?.length > 0) {
      const filtered = doctors.filter(
        (doc) =>
          doc.speciality &&
          doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors || []);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  const specialties = [
    'general physician',
    'gynecologist',
    'dermatologist',
    'pediatricians',
    'neurologist',
    'gastroenterologist',
  ];

  return (
    <div className="container mx-auto px-4">
      <p className="text-gray-600 mb-4">Browse through the doctors specialist</p>

      {/* Filter Button for Mobile */}
      <div className="sm:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v3.586a1 1 0 01-.293.707l-2 2A1 1 0 0110 21v-5.586a1 1 0 00-.293-.707L3.293 8.293A1 1 0 013 7.586V4z"
            />
          </svg>
          Filter Specialties
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Sidebar */}
        <div
          className={`flex-col gap-4 text-gray-600 ${
            isFilterOpen ? 'flex' : 'hidden'
          } sm:flex sm:w-1/4`}
        >
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() => {
                navigate(`/doctors/${spec}`);
                setIsFilterOpen(false); // Close filter on selection
              }}
              className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality?.toLowerCase() === spec ? 'bg-indigo-100 text-black' : ''
              }`}
            >
              {spec.charAt(0).toUpperCase() + spec.slice(1)}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 w-full">
          {filterDoc.map((doctor) => (
            <div
              onClick={() => navigate(`/doctor/${doctor._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
              key={doctor._id}
            >
              <img
                className="bg-blue-50 w-full h-48 object-cover"
                src={doctor.image || '/default-doctor-image.jpg'}
                alt={`${doctor.name}'s profile`}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;