import React, { useEffect, useContext, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets'; // Verify this path
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, currencySymbol } = useContext(AppContext) || {
    doctors: [],
    currencySymbol: 'Rs',
  };
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getAvailableSlots = async () => {
    try {
      const slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        currentDate.setHours(10, 0, 0, 0);

        const daySlots = [];
        while (currentDate <= endTime) {
          daySlots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
        slots.push(daySlots);
      }
      setDocSlots(slots);
    } catch (err) {
      console.error('Error generating slots:', err);
      setError('Error generating available slots');
    }
  };

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      setLoading(true);
      try {
        if (!doctors || !Array.isArray(doctors)) {
          setError('Doctors data is not available or invalid');
          return;
        }
        const foundDoc = doctors.find((doc) => doc._id === docId);
        if (foundDoc) {
          setDocInfo(foundDoc);
          await getAvailableSlots();
        } else {
          setError('Doctor not found');
        }
      } catch (err) {
        setError('Error fetching doctor info');
        console.error('Error fetching doctor info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorInfo();
  }, [doctors, docId]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!docInfo) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Doctor information not available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Doctor Image */}
        <div className="w-full sm:w-72">
          <img
            src={docInfo.image || assets?.default_doctor_image || '/default-doctor-image.jpg'}
            alt={docInfo.name || 'Doctor'}
            className="bg-blue-100 w-full rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-medium text-gray-900">{docInfo.name || 'Unknown Doctor'}</h1>
            <img
              src={assets?.verified_icon || '/verified-icon.png'}
              alt="Verified"
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
            <p>
              {docInfo.degree || 'N/A'} - {docInfo.speciality || 'N/A'}
            </p>
            <span className="py-0.5 px-2 border border-gray-300 text-xs rounded-full">
              {docInfo.experience || 'N/A'}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-1">
              <h2 className="text-sm font-medium text-gray-900">About</h2>
              <img
                src={assets?.info_icon || '/info-icon.png'}
                alt="Info"
                className="w-4 h-4"
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{docInfo.about || 'No information available'}</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-600">
              Appointment fee:
              <span className="font-medium text-gray-800 ml-2">
                {currencySymbol || 'Rs'}{docInfo.fees || 'N/A'}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Select Appointment Time</h2>

        {/* Days Selection */}
        <div className="flex gap-3 items-center w-full overflow-x-auto pb-4">
          {docSlots.length > 0 ? (
            docSlots.map((daySlot, index) => (
              <button
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center p-4 min-w-[100px] rounded-lg transition-all ${
                  slotIndex === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {daySlot[0] && (
                  <>
                    <p className="font-medium">{daysOfWeek[daySlot[0].datetime.getDay()]}</p>
                    <p className="text-sm mt-1">{daySlot[0].datetime.getDate()}</p>
                  </>
                )}
              </button>
            ))
          ) : (
            <p className="text-gray-500">No slots available</p>
          )}
        </div>

        {/* Time Slots with Scroll Buttons */}
        {docSlots.length > 0 && docSlots[slotIndex] && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">Available Time Slots</p>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scroll-smooth whitespace-nowrap"
                style={{ maxWidth: '400px' }}
              >
                {docSlots[slotIndex].map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSlotTime(slot.time)}
                    className={`text-sm py-2 px-4 rounded-md transition-colors min-w-[80px] ${
                      slotTime === slot.time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {slot.time.toLowerCase()}
                  </button>
                ))}
              </div>
              <button
                onClick={scrollRight}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6">
              Book an Appointment
            </button>
          </div>
        )}
      </div>

      {/* Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo?.speciality || ''} />
    </div>
  );
};

export default Appointment;