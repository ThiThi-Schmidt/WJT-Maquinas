"use client";

import { useAuthContext } from "@/app/context/AuthContext";
import Link from "next/link"; // Adicionamos a importação do Link do Next.js!

export function AdminHeader() {
  const { user, isAuthenticated, logout } = useAuthContext();

  return (
    <div className="w-full bg-[#1e1e1e] border border-white/5 rounded-3xl p-5 flex items-center justify-between shadow-xl">
      
      {/* LADO ESQUERDO: Logo e Badge */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" href={"#logo"}>
            <img src="/images/couch.png" alt="Logo" className="h-12 w-auto" />
            <span>WJT</span>
          </a>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 bg-white/5 px-5 py-3 rounded-xl border border-white/5">
            Painel Admin
          </span>
        </h1>
      </div>
      
      {/* CENTRO: Botões de Navegação */}
      <div className="flex items-center gap-4">
        {/* Só mostra o botão de Produtos se for ADMIN */}
        {user?.role === "ADMIN" && (
          <Link 
            href="/admProduct" 
            className="text-xs border border-[#f26422] text-[#f26422] hover:bg-[#f26422] hover:text-white font-bold uppercase tracking-wider px-5 py-3 rounded-2xl transition-all active:scale-95 inline-block"
          >
            Produtos
          </Link>
        )}
        
        <a 
          href="/" 
          className="text-xs bg-[#f26422] hover:bg-[#d8531a] text-white font-bold uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg shadow-[#f26422]/10 active:scale-95 inline-block"
        > 
          Voltar 
        </a>
      </div>
      
      {/* LADO DIREITO: Info do Usuário */}
      <div className="hidden md:flex items-center space-x-4">
        {isAuthenticated && user ? (
          <>
            <span className="text-sm font-medium text-white">
              Olá, <span className="text-[#f26422]">{user.name}</span>
            </span>
            
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-sm font-semibold"
            >
              Sair
            </button>
          </>
        ) : (
          <a href="/login" className="hover:opacity-80 transition">
            <img src="/images/user.svg" alt="User" />
          </a>
        )}
      </div>
    </div>
  );
}