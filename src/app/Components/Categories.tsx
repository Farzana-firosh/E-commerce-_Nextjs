import React from 'react'

export default function Categories() {
  const categories = [
    { name: 'Electronics', img: '/images/TV.jpg' },
    { name: 'Fashion', img: '/images/fashion.jpg' },
    { name: 'Entertainment', img: '/images/gaming.jpg' },
    { name: 'Jewellery', img: '/images/jewellery.jpg' },
    { name: 'Kids', img: '/images/kids.jpg' },
    { name: 'Home', img: '/images/appliances.jpg' },
  ]

  return (
    <div className="flex flex-col items-center gap-6 w-full p-10 ">
      {/* Header Row */}
      <div className="w-full flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#1a2980] text-left p-2">
          Browse By Category
        </h1>
        <a
          href="/products"
          className="px-4 py-2 bg-gradient-to-r from-[#ffb347] to-[#1a2980] text-white font-semibold shadow hover:scale-105 transition text-base md:text-lg"
        >
          View All Products
        </a>
      </div>
      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
        {categories.map((items) => (
          <div
            key={items.name}
            className="flex flex-col items-center bg-gray-200 rounded-2xl shadow-lg p-6 w-36 h-44 md:w-48 md:h-56 hover:shadow-2xl transition"
          >
            <img
              src={items.img}
              alt={items.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-3 border-2 border-[#f2e9e1] shadow"
            />
            <span className="text-lg md:text-xl font-semibold text-[#1a2980] mt-2">{items.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
