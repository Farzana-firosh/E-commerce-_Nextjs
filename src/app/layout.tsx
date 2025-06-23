import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import { OrderProvider } from "./context/OrderContext";
import Footer from './Components/Footer'

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>
        <CartProvider>
<SearchProvider> 
          <div className="w-full">
            <Navbar />

            {children}
            <Footer/>
          </div>
          </SearchProvider>
        </CartProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
