"use client";

import { LoginHeader } from "./components/LoginHeader";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
  return (
    // CONTAINER PRINCIPAL: Centraliza o formulário na tela inteira
    <div
      className="min-h-screen text-white font-sans flex items-center justify-center p-4 selection:bg-[#f26422]/30"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
      
      {/* CARD DO FORMULÁRIO */}
      <div className="w-full max-w-md bg-[#03001d] border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-2xl">
        
        {/* Cabeçalho do Login */}
        <LoginHeader />

        {/* Formulário de Login */}
        <LoginForm />

        {/* RODAPÉ DO CARD */}
        <p className="text-center text-xs text-gray-400 font-medium">
          Não tem uma conta?{" "}
          <a href="#" className="text-[#ff834a] font-bold hover:underline">
            Cadastre-se gratuito
          </a>
        </p>

      </div>
    </div>
  );
}

