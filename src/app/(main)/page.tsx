'use client';

import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { ShoppingBag, ShoppingCart, Box, ArrowRightCircle } from 'lucide-react';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard/ProductCard';
import { Product } from '../types/product';
import { ProductsService } from '../Services/Product-service';
import OfferBanner from '../Components/OfferBanner';

export default function Homepage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductsService.getProducts().then((products) => {
      setFeaturedProducts(products.slice(0, 4)); 
    });
  }, []);

  return (
    <div className="flex flex-col">
      <Banner />

      <div className="w-full overflow-x-hidden flex flex-col items-center py-10 px-2 md:px-8 gap-10">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
          <h1 className="w-full text-3xl md:text-4xl font-bold text-[#1a2980] text-center">
            Discover the Ultimate Shopping Experience with ShopEase
          </h1>
        </section>

        {/* Features Section */}
        <section className="w-full flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8 gap-4 border border-[#f2e9e1] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#f5f7fa] rounded-full p-4 mb-2 shadow-sm flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-[#1a2980]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1a2980] text-center">
              Endless Choices
            </h2>
            <p className="text-center text-[#222] text-sm">
              Find everything you need from electronics to fashion.
            </p>
            <a
              href="/products"
              className="flex items-center gap-2 px-5 py-2 mt-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#1a2980] text-white font-semibold shadow hover:scale-105 transition"
            >
              Shop <ArrowRightCircle size={18} />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8 gap-4 border border-[#f2e9e1] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#f5f7fa] rounded-full p-4 mb-2 shadow-sm flex items-center justify-center">
              <Box className="w-10 h-10 text-[#1a2980]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1a2980] text-center">
              Swift Delivery
            </h2>
            <p className="text-center text-[#222] text-sm">
              Fast and safe delivery for every order.
            </p>
            <a
              href="/track"
              className="flex items-center gap-2 px-5 py-2 mt-2 rounded-full bg-gradient-to-r from-[#1a2980] to-[#ffb347] text-white font-semibold shadow hover:scale-105 transition"
            >
              Track <ArrowRightCircle size={18} />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="flex-1 flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8 gap-4 border border-[#f2e9e1] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#f5f7fa] rounded-full p-4 mb-2 shadow-sm flex items-center justify-center">
              <ShoppingCart className="w-10 h-10 text-[#1a2980]" />
            </div>
            <h2 className="text-lg font-semibold text-[#1a2980] text-center">
              Easy Returns
            </h2>
            <p className="text-center text-[#222] text-sm">
              Not satisfied? Returning items is simple and quick.
            </p>
            <a
              href="/returns"
              className="flex items-center gap-2 px-5 py-2 mt-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#1a2980] text-white font-semibold shadow hover:scale-105 transition"
            >
              Return <ArrowRightCircle size={18} />
            </a>
          </div>
        </section>
      </div>

      <Categories />
      <OfferBanner/>

      <section className="w-full px-4 md:px-10 py-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#1a2980]">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}