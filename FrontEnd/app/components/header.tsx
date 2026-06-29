"use client";

import { useState, useEffect } from "react"; // Adicionado apenas isso nos imports
import { useAuthContext } from "../context/AuthContext";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuthContext();
  const { setIsCartOpen, setIsOrdersOpen, cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  // 1. Criamos um estado simples para guardar qual link está ativo
  const [ativo, setAtivo] = useState("");

  // 2. Criamos o verificador de scroll simples
  useEffect(() => {
    const rastrearScroll = () => {
      const secoes = ["logo", "loja", "sobre-nos", "clientes", "maquinas-tutoriais", "contato"];
      
      for (let id of secoes) {
        const elemento = document.getElementById(id);
        if (elemento) {
          const posicao = elemento.getBoundingClientRect();
          // Se a seção estiver visível na parte de cima da tela, ele marca como ativo
          if (posicao.top <= 150 && posicao.bottom >= 150) {
            setAtivo(id);
          }
        }
      }
    };

    window.addEventListener("scroll", rastrearScroll);
    return () => window.removeEventListener("scroll", rastrearScroll);
  }, []);

  return (
    <nav
      className="py-6 text-white sticky top-0 z-50 shadow-md"
      style={{
        backgroundColor: "#162e56",
        backgroundImage: `
          radial-gradient(circle, rgba(27, 60, 115, 0.8) 0%, rgba(23, 36, 61, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M0 0l12 12M12 0L0 12' stroke='%23000' stroke-width='1.2' opacity='0.4'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" href="#logo">
          <img src="/images/couch.png" alt="Logo" className="h-12 w-auto" />
          <span>WJT</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 text-sm font-medium text-white/70">
            <li className="hover:text-white transition duration-200">
              <a href="#logo" className={ativo === "logo" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Início</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#loja" className={ativo === "loja" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Loja</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#sobre-nos" className={ativo === "sobre-nos" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Sobre nós</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#maquinas-tutoriais" className={ativo === "maquinas-tutoriais" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Ajuda</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#contato" className={ativo === "contato" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Contato</a>
            </li>
          </ul>
        </div>

        {/* Área do usuário (Mantida exatamente igual) */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && user ? (
            <>
              <span className="text-sm font-medium text-white">
                Olá, <span className="text-[#ff7b00]">{user.name}</span>
              </span>
              {user.role === "ADMIN" && (
                <a
                  href="/adm"
                  className="px-4 py-2 rounded-lg bg-[#ff7b00] hover:bg-[#e56d00] transition text-sm font-semibold">
                  Admin
                </a>
              )}
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-sm font-semibold">
                Sair
              </button>
              <a className="hover:opacity-80 transition">
                <img src="/images/cart.svg" alt="Cart" />
              </a>
            </>
          ) : (
            <>
              <a href="/login" className="hover:opacity-80 transition">
                <img src="/images/user.svg" alt="User" />
              </a>
              <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-[#f26422] hover:bg-[#d8531a] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-[#f26422]/20 active:scale-95 relative"
        >
          <ShoppingBag size={20} />
          Carrinho
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-white text-[#f26422] text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-md border border-[#f26422]">
              {totalItems}
            </span>
          )}
        </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}