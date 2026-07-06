"use client";

import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useOrders } from "../hooks/useOrder";

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { isAuthenticated } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para finalizar o pedido!");
      return;
    }

    try {
      setIsSubmitting(true);

      const orderItems = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));

      await createOrder(orderItems);
      
      alert("Pedido realizado com sucesso!");
      clearCart();
      setIsCartOpen(false);
      
    } catch (error) {
      alert("Erro ao finalizar o pedido. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="relative w-full max-w-md h-full bg-[#1e1e1e] border-l border-white/5 flex flex-col z-10 shadow-2xl text-white">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#f26422]" />
            <h2 className="text-xl font-bold">Seu Carrinho</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-xl transition text-gray-400 font-bold text-xs uppercase tracking-wider">
            Fechar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 my-auto">Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-[#121212] p-3 rounded-2xl border border-white/5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <Image src={item.imagem || "/images/placeholder.png"} alt={item.name} fill className="object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="font-bold text-sm truncate">{item.name}</h4>
                  <p className="text-xs font-black text-[#f26422]">
                    R$ {(item.price * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-[#1e1e1e] p-1.5 rounded-xl border border-white/5">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white/5 rounded-lg text-gray-400 transition">
                    <Minus size={14} />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white/5 rounded-lg text-gray-400 transition">
                    <Plus size={14} />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-500 hover:text-red-500 transition">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-[#161616] flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total do pedido:</span>
              <span className="text-2xl font-black">
                <span className="text-[#f26422] text-sm font-bold mr-1">R$</span>
                {cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={isSubmitting}
              className={`w-full bg-[#f26422] hover:bg-[#d8531a] text-white font-bold py-4 rounded-2xl transition active:scale-95 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Processando..." : "Finalizar Pedido"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}