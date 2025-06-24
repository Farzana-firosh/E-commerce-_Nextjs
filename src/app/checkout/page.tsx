'use client';

import React from 'react';
import CartSummary from '../Components/Checkout/CartSummary';
import BillingForm from '../Components/Checkout/BillingForm';
import OrderSummary from '../Components/Checkout/OrderSummary';

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#1a2980] text-center tracking-tight drop-shadow">
        Checkout
      </h1>
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl p-8">
        
        <div className="space-y-8">
          <div className="bg-[#f9fafb] rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-[#1a2980] mb-4">Billing Information</h2>
            <BillingForm />
          </div>
          <div className="bg-[#f9fafb] rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-[#1a2980] mb-4">Your Cart</h2>
            <CartSummary />
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-[#f9fafb] rounded-xl shadow p-6 h-fit">
          <h2 className="text-xl font-semibold text-[#1a2980] mb-4">Order Summary</h2>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}