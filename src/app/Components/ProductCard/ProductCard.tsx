"use client";

import { Product } from "@/app/types/product";
import { useCart } from "@/app/context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 


type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents triggering the card link
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`} passHref className="block">
      <div className="bg-white/90 shadow-xl rounded-2xl p-5 flex flex-col justify-between h-[400px] w-full max-w-xs border border-[#ffb347]/40 hover:scale-105 hover:shadow-2xl transition-transform duration-200 group cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden bg-white flex items-center justify-center mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <button
            className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-md transition 
              ${favorite ? "text-pink-500" : "text-gray-400"} 
              hover:bg-[#ffb347]/40 hover:text-pink-600`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFavorite((f) => !f);
            }}
            aria-label="Add to favorites"
          >
            {favorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          </button>
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg text-[#1a2980] mb-1 truncate">
          {product.title}
        </h2>

        {/* Category */}
        <span className="text-xs text-[#ffb347] font-semibold uppercase tracking-wide mb-2">
          {product.category}
        </span>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-extrabold text-xl text-[#ffb347]">
            ${product.price}
          </span>
          <button
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-gradient-to-r from-[#1a2980] to-[#ffb347] hover:from-[#ffb347] hover:to-[#1a2980] text-white font-semibold px-4 py-2 rounded-full shadow transition-all duration-200 min-w-[120px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;