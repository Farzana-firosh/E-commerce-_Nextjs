'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-[#1a2980] mt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight drop-shadow">
        About <span className="text-[#ffb347]">ShopEase</span>
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <p className="text-md md:text-lg mb-6 text-gray-700 text-justify">
          <span className="font-semibold text-[#1a2980]">ShopEase</span> is your go-to destination for the best online shopping experience. Whether it's fashion,
          electronics, or lifestyle, we bring top-notch products at unbeatable prices.
        </p>

        <p className="text-md md:text-lg mb-6 text-gray-700 text-justify">
          Founded in <span className="font-semibold text-[#ffb347]">2025</span>, our mission is to make shopping fun, fast, and affordable. We value customer satisfaction
          and aim to create a seamless buying journey from browsing to checkout.
        </p>

        <p className="text-md md:text-lg text-gray-700 text-justify">
          With trusted delivery partners and secure payment gateways, we ensure every order reaches your doorstep
          safe and sound. <span className="font-semibold text-[#1a2980]">ShopEase</span> — where comfort meets convenience.
        </p>
      </div>
    </div>
  );
}