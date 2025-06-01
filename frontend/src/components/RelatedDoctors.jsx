import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors?.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    } else {
      setRelDocs([]);
    }
  }, [doctors, speciality, docId]);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-16">
        <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
        <p className="text-center text-lg text-black font-medium leading-loose tracking-wide py-4 px-8 rounded-xl">
          Simply browse through our extensive list of trusted doctors.
        </p>
        {relDocs.length > 0 ? (
          <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {relDocs.slice(0, 5).map((doctor) => (
              <div
                onClick={() => {
                  navigate(`/doctor/${doctor._id}`);
                  window.scrollTo(0, 0);
                }}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
                key={doctor._id}
              >
                <img
                  className="w-full  object-cover"
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
        ) : (
          <p className="text-gray-500">No related doctors found for this speciality.</p>
        )}
        <button
          onClick={() => {
            navigate('/doctors');
            window.scrollTo(0, 0);
          }}
          className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default RelatedDoctors;