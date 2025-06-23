'use client'
import React, { useState } from 'react'
import { ShoppingCart, ChevronDown, Menu } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useSearch } from '../context/SearchContext'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]
const accountLinks = [
  { href: '/auth', label: 'Sign In' },
  { href: '/account', label: 'Account Info' },
  { href: '/wishlist', label: 'Wishlist' },
  { href: '/settings', label: 'Settings' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { totalItems } = useCart();
const {setKeyword} = useSearch();
  return (
    <nav className="w-full bg-white/20 backdrop-blur-lg shadow flex items-center justify-between px-4 md:px-10 py-3 fixed top-0 left-0 z-50">
      {/* Left: Hamburger & Brand */}
      <div className="flex items-center gap-2 md:gap-8">
        <button className="md:hidden p-2 rounded hover:bg-[#f2e9e1]/60" onClick={() => setMobileOpen(v => !v)}>
          <Menu className="w-7 h-7 text-[#1a2980]" />
        </button>
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1a2980] to-[#ffb347] bg-clip-text text-transparent">ShopEase</span>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[#1a2980] hover:text-[#ffb347] font-medium px-2 py-1 rounded transition">{link.label}</a>
          ))}
        </div>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 hidden sm:flex justify-center px-2 md:px-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-xs md:max-w-md px-4 py-2 rounded-full border border-transparent bg-white/60 focus:ring-2 focus:ring-[#ffb347] transition placeholder:text-[#bdbdbd] text-[#1a2980] shadow"
       onChange = {(e)=> setKeyword(e.target.value)}
       />
        
      </div>
      {/* Right: Language, Account, Orders, Cart */}
      <div className="flex items-center gap-2 relative">
        {/* Language Dropdown */}
        <div className="relative hidden sm:block">
          <button onClick={() => setLangOpen(v => !v)} className="flex items-center gap-1 px-3 py-1 rounded hover:bg-[#f2e9e1]/60 text-[#1a2980] font-medium">
            EN <ChevronDown className="w-4 h-4" />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-24 bg-white/95 rounded shadow border z-50">
              {['EN', 'ES', 'FR'].map(l => (
                <button key={l} className="block w-full px-3 py-2 text-left hover:bg-[#ffb347]/20">{l}</button>
              ))}
            </div>
          )}
        </div>
        {/* Account Dropdown */}
        <div className="relative hidden sm:block">
          <button onClick={() => setAccountOpen(v => !v)} className="flex items-center gap-1 px-3 py-1 rounded hover:bg-[#f2e9e1]/60 text-[#1a2980] font-medium">
            Account <ChevronDown className="w-4 h-4" />
          </button>
          {accountOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white/95 rounded shadow border z-50">
              {accountLinks.map(item => (
                <a key={item.href} href={item.href} className="block px-4 py-2 hover:bg-[#ffb347]/20">{item.label}</a>
              ))}
            </div>
          )}
        </div>
        {/* Orders */}
        <a href="/orders" className="hidden sm:block px-3 py-1 rounded hover:bg-[#f2e9e1]/40 text-[#1a2980] font-medium">Orders</a>
        {/* Cart */}
        <a href="/cart" className="group p-2 rounded hover:bg-[#ffb347]/10 relative">
          <ShoppingCart className="w-6 h-6 text-[#ffb347] group-hover:scale-110 transition" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          )}
        </a>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/95 flex flex-col p-6 gap-4 animate-fade-in"
          onClick={() => setMobileOpen(false)}
        >
          <button className="self-end mb-4 text-[#1a2980] text-2xl font-bold" aria-label="Close Menu" onClick={() => setMobileOpen(false)}>×</button>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[#1a2980] hover:text-[#ffb347] font-medium py-2 text-lg">{link.label}</a>
          ))}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border border-transparent bg-white/80 focus:ring-2 focus:ring-[#ffb347] transition shadow my-2"
          />
          <div className="border-t border-[#e5e7eb] pt-4">
            <div className="font-medium text-[#1a2980] mb-2">Language</div>
            {['EN', 'ES', 'FR'].map(l => (
              <button key={l} className="block w-full text-left px-2 py-1 hover:bg-[#ffb347]/20">{l}</button>
            ))}
          </div>
          <div className="border-t border-[#e5e7eb] pt-4">
            <div className="font-medium text-[#1a2980] mb-2">Account</div>
            {accountLinks.map(item => (
              <a key={item.href} href={item.href} className="block px-2 py-1 hover:bg-[#ffb347]/20">{item.label}</a>
            ))}
          </div>
          <a href="/orders" className="block border-t border-[#e5e7eb] pt-4 text-[#1a2980] hover:text-[#ffb347] font-medium">Orders</a>
          <a href="/cart" className="flex items-center gap-2 mt-4 text-[#ffb347] font-semibold">
            <ShoppingCart className="w-6 h-6" /> Cart
          </a>
          <style jsx global>{`
            .animate-fade-in {
              animation: fadeInMobileNav 0.2s;
            }
            @keyframes fadeInMobileNav {
              from { opacity: 0; transform: translateY(-20px);}
              to { opacity: 1; transform: translateY(0);}
            }
          `}</style>
        </div>
      )}
    </nav>
  )
}
