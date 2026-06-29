"use client";

import { Clock } from "lucide-react";


interface OrderCardProps {
  order: any; // Substitua por sua tipagem correta se necessário
  isSelected: boolean;
  onClick: () => void;
}

export function OrderCard({ order, isSelected, onClick }: OrderCardProps) {
  const statusMeta = ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES];

  return (
    <div
      onClick={onClick}
      className={`p-7 rounded-4xl border transition-all flex items-center justify-between cursor-pointer group min-h-30 ${
        isSelected
          ? "bg-[#141414] border-[#f26422] shadow-lg shadow-[#f26422]/5"
          : "bg-[#121212] border-white/5 hover:border-white/15 hover:bg-[#151515]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3.5">
          <span className="text-3xl font-black tracking-tight">{order.id}</span>
          <span className="bg-[#1e1e1e] px-3 py-1 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
            {statusMeta?.icon} {statusMeta?.label}
          </span>
        </div>

        <div className="flex items-center gap-12 text-sm text-gray-400">
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">Cliente</p>
            <p className="font-bold text-gray-200 mt-1 text-base">{order.customerName}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">Horário</p>
            <p className="font-bold text-gray-200 mt-1 flex items-center gap-1">
              <Clock size={14} className="text-gray-500" />
              {order.statusHistory[0]?.time || "13:34"}
            </p>
          </div>
        </div>
      </div>

      <div className="text-right pr-2">
        <p className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">Total</p>
        <p className="text-2xl font-black text-white mt-1 group-hover:text-[#f26422] transition-colors">
          <span className="text-[#f26422] text-sm font-bold mr-0.5">R$</span>
          {order.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}