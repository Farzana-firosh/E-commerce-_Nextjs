'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { useOrder } from '@/app/context/OrderContext';
import { useRouter } from 'next/navigation';

export default function OrderSummary() {
  const { cartItems, clearCart } = useCart();
  const { saveOrder } = useOrder();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      status: 'Processing',
    };

    saveOrder(newOrder);      // Save to context + localStorage
    clearCart();              // Clear the cart
    router.push('/orders');   // Redirect to orders page
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <p className="mb-2">Items: {cartItems.length}</p>
      <p className="mb-4 font-bold">Total: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-[#1a2980] text-white px-4 py-2 rounded hover:bg-[#162b66]"
      >
        Place Order
      </button>
    </div>
  );
}