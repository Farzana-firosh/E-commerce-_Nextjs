import React, { Suspense } from "react";
import GotoCartButton from '../Components/GotoCartButton';
import ProductList from "../Components/ProductList";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";

export const metadata: Metadata = {
  title: "Product List Page",
};

export default async function ProductPage(props: any) {
  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");

  const headersList = await headers();
  const referer = headersList.get("referer");

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1a2980] mb-6 mt-16 text-center">Products</h1>
        
        <Suspense fallback={<div className="text-red-500 text-lg">Loading...</div>}>
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}