import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <h1>CONTACT <span className="text-gray-700 font-medium">US</span></h1>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <img 
            className="w-full md:max-w-[460px] h-[400px] rounded-lg object-cover shadow-md" 
            src={assets.contact_image || '/default-contact-image.jpg'} 
            alt="Contact Us" 
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">OUR OFFICE</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 leading-relaxed">
                  54709 Willms Station <br/> 
                  Suite 350, Washington, USA
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-600 leading-relaxed">
                  <p>Tel: (450) 564-562</p>
                  <p>Email: prescripto@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Careers at PRESCRIPTO
              </h3>
              <p className="text-gray-600 mb-4">
                Learn more about our team and job openings
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact