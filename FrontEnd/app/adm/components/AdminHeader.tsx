"use client";

import { Flame, LogOut } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="w-full bg-[#1e1e1e] border border-white/5 rounded-3xl p-5 flex items-center justify-between shadow-xl">
      {/* Lado Esquerdo: Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#f26422] p-1.5 rounded-xl text-white flex items-center justify-center">
          <Flame size={28} className="fill-white" />
        </div>
        <h1 className="text-2xl font-black text-white tracking-tighter">
          Snap<span className="text-[#f26422]">Bite</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
            Painel Admin
          </span>
        </h1>
      </div>
      
      {/* Lado Direito: Ações */}
      <div className="flex items-center gap-6">
        <button className="text-xs bg-[#f26422] hover:bg-[#d8531a] text-white font-bold uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg shadow-[#f26422]/10 active:scale-95">
          + Adicionar Produto
        </button>
        
        <div className="flex items-center gap-3 bg-[#121212] px-4 py-2 rounded-2xl border border-white/5">
          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            Dono: <span className="text-white">SnapBite Corp</span>
          </div>
          <div className="w-px h-4 bg-white/10 mx-1" /> 
          <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-default">
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}