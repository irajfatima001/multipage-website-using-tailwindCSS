"use client";
import React, { useState } from "react";
//import Navbar from '../components/Navbar';

const ContactUs: React.FC = () => {
  const [formData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="bg-black pt-10 pb-10">
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-8 italic font-serif text-orange-400">Contact Us</h1>
      <form className="bg-black  rounded-lg p-8 border-2 border-orange-200 shadow-xl">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200 italic"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            className="mt-1 block w-full bg-transparent border border-orange-200 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200 italic"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            className="mt-1 block w-full bg-transparent border border-orange-200 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-200 italic"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            rows={4}
            required
            className="mt-1 block w-full bg-transparent border border-orange-200 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-400 text-white font-semibold py-2 rounded-md hover:bg-red-700"
        >
          Send Message
        </button>
      </form>
    </div></div>
  );
};

export default ContactUs;
