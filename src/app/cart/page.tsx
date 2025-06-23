'use client';

import { useCart } from "@/app/context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
  } = useCart();

  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-4 md:p-6 mt-24">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-[#1a2980] text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-20 bg-white rounded-xl shadow">
          Your cart is empty.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-4 md:p-6 overflow-x-auto">
          <table className="w-full mb-6 min-w-[600px]">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 text-xs sm:text-sm">Product</th>
                <th className="py-2 text-center text-xs sm:text-sm">Quantity</th>
                <th className="py-2 text-right text-xs sm:text-sm">Price</th>
                <th className="py-2 text-center text-xs sm:text-sm">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="py-4 flex items-center gap-2 sm:gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain bg-white rounded-lg border"
                    />
                    <span className="font-semibold text-[#1a2980] truncate max-w-[100px] sm:max-w-[180px] text-xs sm:text-base">
                      {item.title}
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className={`p-1 sm:p-2 rounded-full border border-gray-300 transition ${
                          item.quantity === 1
                            ? "text-gray-400 cursor-not-allowed bg-gray-100"
                            : "hover:bg-gray-200 text-gray-700"
                        }`}
                        aria-label="Decrease quantity"
                        type="button"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="font-semibold text-xs sm:text-lg">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="p-1 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-200 text-gray-700 transition"
                        aria-label="Increase quantity"
                        type="button"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-right font-bold text-[#ffb347] text-xs sm:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 sm:p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-500 transition"
                      aria-label="Remove item"
                      type="button"
                    >
                      <FaTrash size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="text-base sm:text-lg text-gray-600">
              Total Items: <span className="font-bold text-[#ffb347]">{totalItems}</span>
            </div>
            <div className="text-lg sm:text-2xl font-extrabold text-[#ffb347]">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button
              className="w-full md:w-auto bg-gradient-to-r from-[#1a2980] to-[#ffb347] hover:from-[#ffb347] hover:to-[#1a2980] text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow transition-all duration-200"
              disabled={cartItems.length === 0}
              onClick={() => router.push('/checkout')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}