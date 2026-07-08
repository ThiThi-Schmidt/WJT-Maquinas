"use client";

import { useUsers } from '../hooks/useUser';
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { ShoppingBag, ShoppingCart, Settings, User } from "lucide-react"; 
import { useCart } from "../context/CartContext";

export default function Header() {
  const { deleteUser, loading } = useUsers();
  const { user, isAuthenticated, logout } = useAuthContext();
  const { setIsCartOpen, setIsOrdersOpen, cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [menuAberto, setMenuAberto] = useState(false);

  const [ativo, setAtivo] = useState("");
  useEffect(() => {
    const rastrearScroll = () => {
      const secoes = ["logo", "loja", "sobre-nos", "clientes", "comentarios", "maquinas-tutoriais", "contato"];
      
      for (let id of secoes) {
        const elemento = document.getElementById(id);
        if (elemento) {
          const posicao = elemento.getBoundingClientRect();
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

        <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" href={"#logo"}>
          <img src="/images/couch.png" alt="Logo" className="h-12 w-auto" />
          <span>WJT</span>
        </a>

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
              <a href="#comentarios" className={ativo === "comentarios" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Comentários</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#maquinas-tutoriais" className={ativo === "maquinas-tutoriais" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Ajuda</a>
            </li>
            <li className="hover:text-white transition duration-200">
              <a href="#contato" className={ativo === "contato" ? "border-b-2 border-[#ff7b00] pb-1 text-white" : ""}>Contato</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#f26422] hover:bg-[#d8531a] text-white px-5 py-3 rounded-xl transition font-semibold"
          >
            <ShoppingCart size={20} />
            <span>Carrinho</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">
                {cartItems.length}
              </span>
            )}
          </button>

          {isAuthenticated && user ? (
            <>
              <div className="relative flex items-center gap-3">
                <span className="text-sm font-medium text-white">
                  Olá, <span className="text-[#ff7b00]">{user.name}</span>
                </span>

            
                <button
                  onClick={() => setMenuAberto(!menuAberto)}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition duration-200"
                  title="Configurações da conta"
                >
                  <Settings size={18} className={`transition-transform duration-300 ${menuAberto ? "rotate-45 text-[#ff7b00]" : ""}`} />
                </button>

                {menuAberto && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a2438] border border-white/10 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => {
                        setMenuAberto(false);
                        alert("Disparar modal/página de edição"); 
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white transition"
                    >
                      Editar Perfil
                    </button>
                    
                    <button
                    onClick={async () => { // <-- 1. Adicione a palavra "async" aqui
                      setMenuAberto(false);
                      if(confirm("Tem certeza que deseja excluir sua conta? Esta ação é irreversível.")) {
                        try {
                          // 2. Chama a função passando o ID do usuário (já vi que a variável user existe no seu código)
                          await deleteUser(user.id); 
                          
                          alert("Conta excluída com sucesso!");
                          
                          // 3. Como a conta foi excluída, chama a sua função de logout para deslogar a pessoa
                          logout(); 
                        } catch (error) {
                          alert("Erro ao excluir conta. Tente novamente.");
                        }
                      }
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                  >
                    Excluir Conta
                  </button>
                  </div>
                )}
              </div>

              {user.role === "ADMIN" && (
                <a
                  href="/adm"
                  className="px-4 py-2 rounded-lg bg-[#ff7b00] hover:bg-[#e56d00] transition text-sm font-semibold"
                >
                  Admin
                </a>
              )}

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
    </nav>
  );
}