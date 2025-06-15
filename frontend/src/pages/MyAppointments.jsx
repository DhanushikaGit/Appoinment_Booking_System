import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 pb-3 mb-6 border-b border-gray-200">
        My Appointments
      </h1>
      
      <div className="space-y-6">
        {doctors.slice(0, 3).map((doctor) => (
          <div 
            key={doctor._id} // Changed from id to _id to match MongoDB's ID format
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Doctor Image */}
            <div className="w-full sm:w-32 h-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex flex-col flex-grow gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h2>
                <p className="text-blue-600 font-medium">
                  {doctor.speciality}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-gray-700">Address:</p>
                {doctor.address.line1 && (
                  <p key={`${doctor._id}-addr1`} className="text-gray-600 text-sm sm:text-base">
                    {doctor.address.line1}
                  </p>
                )}
                {doctor.address.line2 && (
                  <p key={`${doctor._id}-addr2`} className="text-gray-600 text-sm sm:text-base">
                    {doctor.address.line2}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span key={`${doctor._id}-datetime-label`} className="font-medium text-gray-700">
                  Date & Time:
                </span>
                <span key={`${doctor._id}-datetime`} className="text-gray-600 text-sm sm:text-base">
                  25, July, 2024 | 8:30 PM
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-col items-stretch sm:items-end gap-3 justify-center mt-4 sm:mt-0 sm:ml-auto">
              <button 
                key={`${doctor._id}-pay`}
                className="flex-1 sm:flex-initial text-blue-600 text-center min-w-0 sm:min-w-[12rem] py-2.5 px-4 border border-blue-200 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                onClick={() => console.log('Pay for appointment', doctor._id)}
              >
                Pay Online
              </button>
              <button 
                key={`${doctor._id}-cancel`}
                className="flex-1 sm:flex-initial text-rose-600 text-center min-w-0 sm:min-w-[12rem] py-2.5 px-4 border border-rose-200 rounded-lg font-medium hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 text-sm sm:text-base"
                onClick={() => console.log('Cancel appointment', doctor._id)}
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