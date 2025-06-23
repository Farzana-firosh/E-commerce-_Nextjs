'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a2980] to-[#ffb347] text-white px-4 md:px-10 py-12 mt-24 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight text-white drop-shadow">ShopEase</h2>
          <p className="text-sm text-white/80 mb-4">
            Your one-stop shop for everything you love. 🛒
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-white/10 hover:bg-yellow-400/80 text-white hover:text-[#1a2980] p-2 rounded-full transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-white/10 hover:bg-yellow-400/80 text-white hover:text-[#1a2980] p-2 rounded-full transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-white/10 hover:bg-yellow-400/80 text-white hover:text-[#1a2980] p-2 rounded-full transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-yellow-400 transition">Products</a>
            </li>
            <li>
              <a href="/cart" className="hover:text-yellow-400 transition">Cart</a>
            </li>
            <li>
              <a href="/orders" className="hover:text-yellow-400 transition">Orders</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">About Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" /> +973 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> support@shopease.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" /> Bahrain
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">Newsletter</h3>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full bg-white/90 text-[#1a2980] placeholder:text-[#bdbdbd] focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#1a2980] px-4 py-2 rounded-full font-semibold transition hover:bg-yellow-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t pt-4">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}