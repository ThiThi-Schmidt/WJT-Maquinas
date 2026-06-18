"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { API_BASE_URL } from "../../utils/config";
import { useAuthContext } from "@/app/context/AuthContext";


export function LoginForm() {
  const router = useRouter();
  const { login } = useAuthContext();

  // Estados dos inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Substitui "senha" por "password" para manter o padrão
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("E-mail ou senha inválidos. Tente novamente.");
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();

      // Salva no contexto e sessionStorage
      login(data.token, data.user.role, data.user);

      // Redirecionamento inteligente por cargo
      if (data.user.role === "ADMIN") {
        router.push("/adm");
      } else {
        router.push("/orders");
      }
    } catch (err) {
      setError("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
      {/* MENSAGEM DE ERRO (Estilizada no tema SnapBite) */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium p-4 rounded-2xl text-center">
          {error}
        </div>
      )}

      {/* CAMPO DE EMAIL */}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
          E-mail
        </label>
        <div className="relative flex items-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-[#f26422] focus:ring-1 focus:ring-[#f26422] transition-all"
          />
        </div>
      </div>

      {/* CAMPO DE SENHA */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
            Senha
          </label>
          <a href="#" className="text-[10px] font-bold text-[#f26422] hover:underline uppercase tracking-wider">
            Esqueceu?
          </a>
        </div>
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-[#f26422] focus:ring-1 focus:ring-[#f26422] transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-500 hover:text-gray-300 transition-colors"
          >
          </button>
        </div>
      </div>

      {/* BOTÃO DE ENTRAR */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#f26422] hover:bg-[#d8531a] disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-2xl mt-2 transition-all shadow-lg shadow-[#f26422]/10 active:scale-[0.98]"
      >
        {isSubmitting ? "Entrando..." : "Entrar na conta"}
      </button>
    </form>
  );
}