'use client';

import React from 'react';
import { useOrder } from '@/app/context/OrderContext';

export default function OrdersPage() {
  const { orders } = useOrder();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-28">
      <h1 className="text-3xl font-bold mb-8 text-[#1a2980] text-center tracking-tight">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-20 bg-white rounded-xl shadow">
          No orders yet. Start shopping!
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-[#ffb347]/30 rounded-2xl shadow-lg p-6 space-y-3"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-xs text-gray-400">Order ID:</span>
                  <span className="font-mono text-sm text-[#1a2980]">
                    {order.id}
                  </span>
                  <span className="mx-2 hidden md:inline text-gray-300">|</span>
                  <span className="text-xs text-gray-400">Placed On:</span>
                  <span className="font-semibold text-sm text-[#ffb347]">
                    {order.date}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'Processing'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <ul className="list-disc pl-6 text-gray-700">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="font-medium text-[#1a2980]">{item.title}</span>
                    <span className="text-sm text-gray-500">
                      &times; {item.quantity} &mdash; ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <span className="text-lg font-bold text-pink-600">
                  Total: ${order.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}