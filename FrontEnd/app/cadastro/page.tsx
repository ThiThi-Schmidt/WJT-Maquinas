"use client";

import Link from "next/link";
import { CadastroHeader } from "./components/CadastroHeader";
import { CadastroForm } from "./components/CadastroForm";

export default function Cadastro() {
  return (
    <div
      className="min-h-screen text-white font-sans flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-[#03001d] border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-8 shadow-2xl">

        <CadastroHeader />

        <CadastroForm />

        <p className="text-center text-xs text-gray-400 font-medium">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="text-[#ff834a] font-bold hover:underline"
          >
            Entrar
          </Link>
        </p>

      </div>
    </div>
  );
}