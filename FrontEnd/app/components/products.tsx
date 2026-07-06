"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import { categoriesList } from "../data/categoriesList";
import ProductCart from "./productCart";

export default function Products() {
  const [typedItem, setTypedItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | number>("all");
  const { products, loading, error } = useProducts();

  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = safeProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.categoryId === Number(selectedCategory);

    const matchesSearch = product.name
      .toLowerCase()
      .includes(typedItem.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="text-center text-white py-10 font-bold">
        Carregando produtos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 font-bold">
        Erro: {error}
      </div>
    );
  }

  return (
    <section id="loja" className="py-16 scroll-mt-24 bg-black">
  <div className="w-full px-4 md:px-6">
    <div className="w-full flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="O que você procura hoje?"
            value={typedItem}
            onChange={(e) => setTypedItem(e.target.value)}
            className="w-full bg-[#1e1e1e]/90 border border-white/5 backdrop-blur-sm py-3 pl-12 pr-4 rounded-2xl outline-none focus:border-[#f26422] transition text-sm text-white"
          />
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`w-full text-left px-6 py-2.5 rounded-2xl font-bold text-sm transition-all ${
              selectedCategory === "all"
                ? "bg-[#ff7b00] text-white"
                : "bg-[#1e1e1e] text-gray-300 hover:bg-[#252525] border border-white/5"}`}>
            Todos
          </button>
          {categoriesList.map((cat) => {
            const isActive = cat.id === selectedCategory;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-6 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                  isActive
                    ? "bg-[#ff7b00] text-white"
                    : "bg-[#1e1e1e] text-gray-300 hover:bg-[#252525] border border-white/5"}`}>
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full h-full">
              <ProductCart product={product} />
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10 font-medium">
              Nenhum item encontrado nessa categoria ou busca.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}