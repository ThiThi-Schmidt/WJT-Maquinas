"use client";

import { LoginHeader } from "./components/LoginHeader";
import { LoginForm } from "./components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
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
      <div className="w-full max-w-md bg-[#03001d] border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-2xl">
        <LoginHeader />
        <LoginForm />
        <p className="text-center text-xs text-gray-400 font-medium">
          Não tem uma conta?{" "}
          <Link
           href="/cadastro" className="text-[#ff834a] font-bold hover:underline">
            Cadastre-se gratuito
          </Link>
        </p>

      </div>
    </div>
  );
}

