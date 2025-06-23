'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-[#1a2980] mt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight drop-shadow">
        Contact Us
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="space-y-4 text-gray-700 mb-6">
          <p className="text-lg flex items-center gap-2">
            <span className="text-[#ffb347] text-2xl">📍</span>
            <strong>Office Address:</strong> 123 Market Street, Manama, Bahrain
          </p>
          <p className="text-lg flex items-center gap-2">
            <span className="text-[#ffb347] text-2xl">📧</span>
            <strong>Email:</strong> support@shopease.com
          </p>
          <p className="text-lg flex items-center gap-2">
            <span className="text-[#ffb347] text-2xl">📞</span>
            <strong>Phone:</strong> +973 1234 5678
          </p>
        </div>

        <form className="mt-6 space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-[#ffb347]/40 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ffb347] bg-[#f9fafb] text-[#1a2980] placeholder:text-[#bdbdbd] shadow-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-[#ffb347]/40 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ffb347] bg-[#f9fafb] text-[#1a2980] placeholder:text-[#bdbdbd] shadow-sm"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-[#ffb347]/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ffb347] bg-[#f9fafb] text-[#1a2980] placeholder:text-[#bdbdbd] shadow-sm resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#1a2980] to-[#ffb347] hover:from-[#ffb347] hover:to-[#1a2980] text-white font-semibold px-8 py-3 rounded-full shadow transition-all duration-200 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}