"use client";
import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [formData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    specialRequests: '',
  });

  return (
    <div className='bg-black pt-10 pb-10'>
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-5xl font-bold text-center mb-8 text-orange-600">Make a Reservation</h1>
      
      <form className="bg-black shadow-lg rounded-lg p-8 border-2 border-orange-400">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            className="mt-2 block w-full bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            className="mt-2 block w-full  bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-200">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            required
            className="mt-2 block w-full  bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="time" className="block text-sm font-medium text-gray-200">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            required
            className="mt-2 block w-full bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-200">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            required
            className="mt-2 block w-full  bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          >
            {/* For the sake of example, let's add options for 1 to 10 guests */}
            {/* {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))} */}
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-200">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            rows={4}
            className="mt-2 block w-full bg-transparent border border-orange-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition duration-200"
          />
        </div>
        
        <button type="submit" className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition duration-200">
          Reserve Now
        </button>
      </form>
    </div></div>
  );
};

export default Reservation;
