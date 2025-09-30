"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { products } from "@/data/product";
import { useState } from "react";

export default function Home() {
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <Header cartCount={cartCount} />

      <ProductList onAdd={handleAddToCart} />
    </main>
  );
}
