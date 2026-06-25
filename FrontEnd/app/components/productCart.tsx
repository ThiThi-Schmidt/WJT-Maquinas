"use client";

import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { Products } from "../types/Products";


type ProductCartProps = {
  product: Products;
};

export default function ProductCart({ product }: ProductCartProps) {
  const imageSrc = product.imagem || "/images/1.png";

  return (
    <div className="flex flex-col gap-3 w-full bg-[#111827] rounded-4xl p-4 border border-white/5">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#0f172a]">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {product.name}
        </h3>

        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed font-medium">
          {product.description || "Sem descrição"}
        </p>
      </div>

      <div className="flex items-center justify-between mt-1 px-1">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-[#f26422] text-[#f26422]" />
            <span className="text-xs font-bold text-gray-300">4.8</span>
          </div>

          <div className="text-xl font-black text-white">
            <span className="text-[#f26422] text-sm font-bold mr-1">R$</span>
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </div>

          <span className="text-xs text-gray-400">
            Estoque: {product.stock}
          </span>
        </div>

        <button
          className="bg-[#1e1e1e] hover:bg-[#252525] border border-white/5 text-white p-3 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}