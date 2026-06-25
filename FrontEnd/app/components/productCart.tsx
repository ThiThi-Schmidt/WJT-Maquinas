"use client";

import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { Product } from "../types/Products";

// import { useCart } from "../context/CartContexts";

type ProductCartProps = {
  product: Product;
};

export default function ProductCart({ product }: ProductCartProps) {
  // const { addToCart } = useCart();

  const imageSrc = product.imagem || "/images/1.png"

  return (
    <div className="flex flex-col gap-3 w-full bg-[#111] p-4 rounded-4xl border border-white/5 shadow-lg">
      <div className="relative w-full aspect-square rounded-4xl overflow-hidden bg-[#1a1a1a]">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {product.name}
        </h3>

        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

        {product.category?.name && (
          <span className="text-[11px] text-[#f26422] font-semibold">
            {product.category.name}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-1 px-1">
        <div className="flex flex-col gap-0.5">
      

          <div className="text-xl font-black text-white">
            <span className="text-[#f26422] text-sm font-bold mr-1">R$</span>
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </div>

          <span className="text-xs text-gray-500">
            Estoque: {product.stock}
          </span>
        </div>

        <button
          // onClick={() => addToCart({ ...product, quantity: 1 })}
          className="bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 text-white p-3 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}
