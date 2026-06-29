"use client";

import { Clipboard, CheckCircle2 } from "lucide-react";

interface AdminStatsProps {
  totalPending: number;
  totalProduction: number;
  totalSent: number;
  totalDelivered: number;
}

export function AdminStats({ totalPending, totalProduction, totalSent, totalDelivered }: AdminStatsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Recebidos */}
      <div className="bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex items-center justify-between shadow-lg">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Recebidos</span>
          <span className="text-4xl font-black">{totalPending}</span>
        </div>
        <div className="bg-yellow-500/10 p-3.5 rounded-2xl text-yellow-500 border border-yellow-500/10">
          <Clipboard size={24} />
        </div>
      </div>

      {/* Em Produção */}
      <div className="bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex items-center justify-between shadow-lg">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Em Produção</span>
          <span className="text-4xl font-black">{totalProduction}</span>
        </div>
        <div className="bg-blue-500/10 p-3.5 rounded-2xl text-blue-500 border border-blue-500/10 flex items-center justify-center">
          <span className="text-2xl leading-none">👨‍🍳</span>
        </div>
      </div>

      {/* Enviados */}
      <div className="bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex items-center justify-between shadow-lg">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Enviados</span>
          <span className="text-4xl font-black">{totalSent}</span>
        </div>
        <div className="bg-orange-500/10 p-3.5 rounded-2xl text-orange-500 border border-orange-500/10 flex items-center justify-center">
          <span className="text-2xl leading-none">🛵</span>
        </div>
      </div>

      {/* Entregues */}
      <div className="bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex items-center justify-between shadow-lg">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Entregues</span>
          <span className="text-4xl font-black">{totalDelivered}</span>
        </div>
        <div className="bg-green-500/10 p-3.5 rounded-2xl text-green-500 border border-green-500/10">
          <CheckCircle2 size={24} />
        </div>
      </div>
    </section>
  );
}