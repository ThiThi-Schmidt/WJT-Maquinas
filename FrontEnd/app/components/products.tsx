"use client";

import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { categoriesList } from "../data/categoriesList";
import { Search } from "lucide-react";
import ProductCart from "./productCart"; // Garanta que o import está correto aqui

export default function Products() {
  const [typedItem, setTypedItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | number>("all");
  const { products, loading, error } = useProducts();

  // 🛡️ Garante que sempre teremos uma lista, mesmo que o backend mande algo errado
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

  if (loading) return <div className="text-center text-white py-10 font-bold">Carregando produtos...</div>;
  if (error) return <div className="text-center text-red-500 py-10 font-bold">Erro: {error}</div>;

  return (
    <div className="w-full">
      {/* 1. CONTAINER DOS FILTROS (Fecha certinho no final dos botões) */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <div className="relative w-full max-w-md shrink-0">
          <input 
            type="text" 
            placeholder="O que você procura hoje?" 
            value={typedItem}
            onChange={(e) => setTypedItem(e.target.value)}
            className="w-full bg-[#1e1e1e]/90 border border-white/5 backdrop-blur-sm py-3 pl-12 pr-4 rounded-2xl outline-none focus:border-[#f26422] transition text-sm text-white"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-6 py-2.5 rounded-2xl font-bold text-sm transition-all shrink-0 ${
            selectedCategory === "all"
              ? "bg-[#f26422] text-white"
              : "bg-[#1e1e1e] text-gray-500 hover:bg-[#252525] border border-white/5"
          }`}
        >
          Todos 🛠️
        </button>

        {categoriesList.map((cat) => {
          const isActive = cat.id === selectedCategory;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)} 
              className={`px-6 py-2.5 rounded-2xl font-bold text-sm transition-all shrink-0 ${
                isActive
                  ? "bg-[#f26422] text-white"
                  : "bg-[#1e1e1e] text-gray-500 hover:bg-[#252525] border border-white/5"
              }`}
            >
              {cat.name} {cat.icon}
            </button>
          );
        })}
      </div> {/* <--- A TAG MUDOU PARA CÁ! Fechando a barra de filtros */}

      {/* 2. GRID DE PRODUTOS (Agora fica totalmente fora e livre para renderizar abaixo) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10 font-medium">
            Nenhum item encontrado nessa categoria ou busca.
          </div>
        )}
      </div>
    </div>
  );
}