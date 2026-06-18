"use client";

import { LoginHeader } from "./components/LoginHeader";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
  return (
    // CONTAINER PRINCIPAL: Centraliza o formulário na tela inteira
    <div className="min-h-screen bg-[#121212] text-white font-sans flex items-center justify-center p-4 selection:bg-[#f26422]/30">
      
      {/* CARD DO FORMULÁRIO */}
      <div className="w-full max-w-md bg-[#1e1e1e] border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-2xl">
        
        {/* Cabeçalho do Login */}
        <LoginHeader />

        {/* Formulário de Login */}
        <LoginForm />

        {/* RODAPÉ DO CARD */}
        <p className="text-center text-xs text-gray-500 font-medium">
          Não tem uma conta?{" "}
          <a href="#" className="text-[#f26422] font-bold hover:underline">
            Cadastre-se gratuito
          </a>
        </p>

      </div>
    </div>
  );
}