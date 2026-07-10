"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "../../utils/config";

export function CadastroForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CLIENT");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
        });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao cadastrar.");
        return;
      }

      setSuccess("Conta criada com sucesso!");

      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch {
      setError("Erro ao conectar com o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium p-4 rounded-2xl text-center">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium p-4 rounded-2xl text-center">
          {success}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
          Nome
        </label>

        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 px-4 text-sm focus:outline-none focus:border-[#f26422]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
          E-mail
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
          className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 px-4 text-sm focus:outline-none focus:border-[#f26422]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
          Senha
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full bg-[#121212] border border-white/5 rounded-2xl py-4 pl-4 pr-24 text-sm focus:outline-none focus:border-[#f26422]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
      </div>
      <button
        disabled={isSubmitting}
        className="w-full bg-[#ee6f34] hover:bg-[#d8531a] disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition">
        {isSubmitting ? "Cadastrando..." : "Criar Conta"}
      </button>
    </form>
  );
}