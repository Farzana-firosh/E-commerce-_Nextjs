'use client';

import { ProductsService } from '@/app/Services/Product-service';
import { useCart } from '@/app/context/CartContext';
import { useEffect, useState } from 'react';
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import React from 'react';

type Props = {
  params: Promise<{ productId: string }>;

};

export default function ProductDetail({ params }: Props) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  // Unwrap params using React.use
  const actualParams = React.use(params);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await ProductsService.getProductById(actualParams.productId);
      setProduct(data);
    };

    fetchProduct();
  }, [actualParams.productId]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg">
        Loading product...
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg mt-28">
      {/* Product Image */}
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[420px] object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-2 text-[#1a2980] truncate">
          {product.title}
        </h1>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) =>
              i < Math.round(product.rating.rate) ? (
                <FaStar key={i} />
              ) : (
                <FaStar key={i} className="opacity-30" />
              )
            )}
            <span className="font-semibold ml-2">{product.rating.rate}</span>
            <span className="text-sm text-gray-500 ml-1">
              ({product.rating.count} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <p className="text-2xl text-pink-600 font-extrabold mb-4">
          ${product.price}
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity === 1}
            className={`p-2 rounded-full border border-gray-300 transition ${
              quantity === 1
                ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
            aria-label="Decrease quantity"
            type="button"
          >
            <FaMinus />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 text-gray-700 transition"
            aria-label="Increase quantity"
            type="button"
          >
            <FaPlus />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-[#1a2980] to-[#ffb347] hover:from-[#ffb347] hover:to-[#1a2980] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200"
          type="button"
        >
          {quantity > 1
            ? `Add ${quantity} items to Cart`
            : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}