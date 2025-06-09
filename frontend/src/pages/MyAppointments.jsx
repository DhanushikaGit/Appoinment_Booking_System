import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 pb-3 mb-6 border-b border-gray-200">
        My Appointments
      </h1>
      
      <div className="space-y-6">
        {doctors.slice(0, 3).map((doctor) => (
          <div 
            key={doctor.id} 
            className="flex gap-6 p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col flex-grow gap-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h2>
                <p className="text-blue-600 font-medium">
                  {doctor.speciality}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">{doctor.address.line1}</p>
                <p className="text-gray-600">{doctor.address.line2}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Date & Time:</span>
                <span className="text-gray-600">
                  25, July, 2024 | 8:30 PM
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 justify-center ml-auto">
              <button 
                key={`pay-${doctor.id}`}
                className="flex-shrink-0 text-blue-600 text-center min-w-[12rem] py-2.5 px-4 border border-blue-200 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                Pay Online
              </button>
              <button 
                key={`cancel-${doctor.id}`}
                className="flex-shrink-0 text-rose-600 text-center min-w-[12rem] py-2.5 px-4 border border-rose-200 rounded-lg font-medium hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;