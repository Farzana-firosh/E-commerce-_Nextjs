'use client';

import { useCart } from "@/app/context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation"; // <-- import useRouter

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
  } = useCart();

  const router = useRouter(); // <-- initialize router

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-8 text-[#1a2980]">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-20 bg-white rounded-xl shadow">
          Your cart is empty.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <table className="w-full mb-6">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Product</th>
                <th className="py-2 text-center">Quantity</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain bg-white rounded-lg border"
                    />
                    <span className="font-semibold text-[#1a2980] truncate max-w-[180px]">{item.title}</span>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className={`p-2 rounded-full border border-gray-300 transition ${
                          item.quantity === 1
                            ? "text-gray-400 cursor-not-allowed bg-gray-100"
                            : "hover:bg-gray-200 text-gray-700"
                        }`}
                        aria-label="Decrease quantity"
                        type="button"
                      >
                        <FaMinus />
                      </button>
                      <span className="font-semibold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 text-gray-700 transition"
                        aria-label="Increase quantity"
                        type="button"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-right font-bold text-[#ffb347]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-500 transition"
                      aria-label="Remove item"
                      type="button"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="text-lg text-gray-600">
              Total Items: <span className="font-bold text-[#ffb347]">{totalItems}</span>
            </div>
            <div className="text-2xl font-extrabold text-[#ffb347]">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button
              className="bg-gradient-to-r from-[#1a2980] to-[#ffb347] hover:from-[#ffb347] hover:to-[#1a2980] text-white font-semibold px-8 py-3 rounded-full shadow transition-all duration-200"
              disabled={cartItems.length === 0}
              onClick={() => router.push('/checkout')} // <-- navigate to checkout
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}