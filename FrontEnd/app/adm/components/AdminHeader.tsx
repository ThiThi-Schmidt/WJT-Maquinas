"use client";

import { useAuthContext } from "@/app/context/AuthContext";







export function AdminHeader() {
  const { user, isAuthenticated, logout } = useAuthContext();

  return (
    <div className="w-full bg-[#1e1e1e] border border-white/5 rounded-3xl p-5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" href={"#logo"}>
            <img src="/images/couch.png" alt="Logo" className="h-12 w-auto" />
            <span>WJT</span>
          </a>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 bg-white/5 px-5  py-3 rounded-xl border border-white/5">
            Painel Admin
          </span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && user ? (
            <>
              <span className="text-sm font-medium text-white">
                Olá, <span className="text-[#ff7b00]">{user.name}</span>
              </span>

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
  );
}