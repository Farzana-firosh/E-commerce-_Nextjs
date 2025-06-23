'use client';

import React from 'react';
import { useCart } from '@/app/context/CartContext';

export default function CartSummary() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
      <ul className="space-y-2">
        {cartItems.map(item => (
          <li key={item.id} className="border p-3 rounded-md">
            <p className="font-medium">{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}