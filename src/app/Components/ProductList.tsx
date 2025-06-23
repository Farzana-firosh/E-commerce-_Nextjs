'use client';

import React, { useEffect, useState } from "react";
import { ProductsService } from "@/app/Services/Product-service";
import ProductCard from "./ProductCard/ProductCard";
import { Product } from "../types/product";
import { useSearch } from "../context/SearchContext";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { keyword } = useSearch();

  useEffect(() => {
    ProductsService.getProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}