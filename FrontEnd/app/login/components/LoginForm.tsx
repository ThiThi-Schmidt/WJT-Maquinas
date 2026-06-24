"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../utils/config";
import { useAuthContext } from "@/app/context/AuthContext";

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "E-mail ou senha inválidos.");
        return;
      }

      // salva token + usuário no contexto/sessionStorage
      login(data.token, data.user);

      // redireciona conforme o cargo
      if (data.user.role === "ADMIN") {
        router.push("/adm");
      } else {
        router.push("/");
      }

    } catch (err) {
      setError("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium p-4 rounded-2xl text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
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

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center px-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            Senha
          </label>
        </div>

        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            placeholder="12345..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-[#f26422] focus:ring-1 focus:ring-[#f26422] transition-all"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-500 hover:text-gray-300 transition-colors"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#ee6f34] hover:bg-[#d8531a] disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-2xl mt-2 transition-all shadow-lg shadow-[#f26422]/10 active:scale-[0.98]"
      >
        {isSubmitting ? "Entrando..." : "Entrar na conta"}
      </button>
    </form>
  );
}