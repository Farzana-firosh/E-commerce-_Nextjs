'use client';

import React, { useState } from 'react';

export default function BillingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Billing Info</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="text"
        name="address"
        placeholder="Shipping Address"
        value={form.address}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
      />
    </form>
  );
}