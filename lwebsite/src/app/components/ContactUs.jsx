"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700">Get in Touch</h2>
      <p className="text-lg text-center text-gray-600 mt-2">We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="col-span-1 md:col-span-2 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <label className="ml-2 text-gray-700 text-sm">
              I agree to let this website store my information so they can respond to my inquiry.
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
