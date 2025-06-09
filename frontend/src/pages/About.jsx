import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-2xl pt-10 text-gray-500">
        ABOUT <span className="text-gray-700 font-medium">Us</span>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={assets.about_image || '/default-about-image.jpg'}
            alt="About Prescripto"
            className="w-full md:max-w-[360px] h-[400px] rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="flex flex-col justify-center gap-6 md:w-2/3">
          <p className="text-lg text-gray-700 leading-loose">
            Welcome to Prescripto, your trusted partner in managing your healthcare needs.
          </p>
          <p className="text-lg text-gray-700 leading-loose">
            At Prescripto, we are dedicated to simplifying the appointment booking process
            for both patients and healthcare providers. Our platform offers a seamless
            experience, allowing users to schedule, manage, and track appointments with ease.
          </p>
          <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-loose">
            With a focus on security and user-friendliness, Prescripto ensures your personal
            information is protected while providing quick access to healthcare services.
            Our mission is to bridge the gap between patients and medical professionals,
            making healthcare more accessible and efficient for everyone.
          </p>
        </div>
      </div>

      <div className="text-center text-2xl my-8">
        <h2>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </h2>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8">
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-800">Efficiency</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">
      Streamlined appointment booking process saves your time. Quick access to healthcare 
      providers and real-time availability updates make managing your healthcare needs 
      effortless and efficient.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-800">Convenience</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">
      Book appointments anytime, anywhere. Our platform is accessible 24/7, allowing you 
      to schedule, reschedule, or cancel appointments at your convenience from any device.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <h3 className="text-xl font-semibold text-gray-800">Personalization</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">
      Tailored healthcare experience based on your preferences. Keep track of your medical 
      history, preferred doctors, and receive personalized recommendations for better 
      healthcare management.
    </p>
  </div>
</div>
    </div>
  );
};

export default About;