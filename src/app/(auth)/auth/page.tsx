"use client";
import React, { useState } from "react";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [signUp, setSignUp] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 -z-20 animate-gradient bg-gradient-to-br from-[#1a2980] via-[#f2e9e1] to-[#ffb347]" />
      
      <div className="absolute inset-0 pointer-events-none z-[-15] bg-stripes opacity-10" />
      <div
        className="absolute inset-0 z-[-14] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #ffb34733 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, #1a298033 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-[-100px] left-[-60px] w-[260px] h-[260px] bg-[#ffb347] opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-[#1a2980] opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-[60%] left-[-100px] w-[180px] h-[180px] bg-[#f2e9e1] opacity-40 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[120px] h-[120px] bg-[#ffb347] opacity-20 rounded-full blur-2xl -z-10"></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-2xl border border-white/20">
        {/* Logo and Back */}
        <div className="flex items-center justify-between mb-8">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <ChevronLeft className="w-6 h-6 text-[#1a2980] border border-[#ffb347] bg-[#f2e9e1] rounded-full p-1" />
            <span className="text-[#1a2980] font-medium hover:underline">
              Home
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-7 h-7 text-[#ffb347]" />
            <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#1a2980] to-[#ffb347]">
              ShopEase
            </span>
          </div>
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a2980] to-[#ffb347]">
          {signUp ? "Create Your Account" : "Welcome Back!"}
        </h2>
        <p className="text-center text-sm text-[#1a2980] mb-8 drop-shadow">
          {signUp
            ? "Join ShopEase and start your shopping journey."
            : "Login to continue shopping the best deals."}
        </p>
        {/* Form */}
        <form className="space-y-6">
          {signUp && (
            <div>
              <label className="block mb-1 text-sm font-medium text-[#f2e9e1] drop-shadow">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl px-4 py-3 bg-white/20 border border-[#e5e7eb]/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb347] focus:border-[#ffb347] transition placeholder:text-[#bbb] text-[#222]"
                placeholder="Your Name"
              />
            </div>
          )}
          <div>
            <label className="block mb-1 text-sm font-medium text-[#f2e9e1] drop-shadow">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl px-4 py-3 bg-white/20 border border-[#e5e7eb]/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb347] focus:border-[#ffb347] transition placeholder:text-[#bbb] text-[#222]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-[#f2e9e1] drop-shadow">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl px-4 py-3 bg-white/20 border border-[#e5e7eb]/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb347] focus:border-[#ffb347] transition placeholder:text-[#bbb] text-[#222]"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffb347] to-[#1a2980] text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            {signUp ? "Create Account" : "Login"}
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-[#f2e9e1]/40"></div>
          <span className="mx-3 text-[#f2e9e1] text-xs font-semibold drop-shadow">
            or
          </span>
          <div className="flex-grow h-px bg-[#f2e9e1]/40"></div>
        </div>
        <div className="text-center">
          <button
            className="text-xs text-[#1a2980] bg-[#ffb347]/20 px-4 py-1 rounded-full shadow hover:bg-[#ffb347]/40 transition"
            onClick={() => router.push("/")}
            type="button"
          >
            Continue as Guest
          </button>
        </div>
        <div className="mt-8 text-center">
          <span className="text-[#f2e9e1] text-sm drop-shadow">
            {signUp ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            className="ml-2 text-[#1a2980] hover:underline text-sm font-semibold"
            onClick={() => setSignUp(!signUp)}
          >
            {signUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 7s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .bg-stripes {
          background-image: repeating-linear-gradient(
            135deg,
            #fff 0px,
            #fff 2px,
            transparent 2px,
            transparent 20px
          );
        }
      `}</style>
    </div>
  );
}
