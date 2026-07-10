"use client";

import { Order } from "@/app/types/Order";

interface OrderFiltersProps {
  selectedStatusFilter: string;
  setSelectedStatusFilter: (status: string) => void;
  orders: Order[]; 
}

export function OrderFilters({ selectedStatusFilter, setSelectedStatusFilter, orders = [] }: OrderFiltersProps) {

  const filters = [
    { id: "all", label: "Todos", count: orders.length },
    { id: "PENDING", label: "Pendente", count: orders.filter(o => o.status === "PENDING").length },
    { id: "SENT", label: "Enviado", count: orders.filter(o => o.status === "SENT").length },
    { id: "DELIVERED", label: "Entregue", count: orders.filter(o => o.status === "DELIVERED").length },
  ];

  return (
    <div className="flex items-center gap-2 border-b border-white/5 pb-5 overflow-x-auto scrollbar-hide">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Filtros:</span>
      
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setSelectedStatusFilter(filter.id)}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
            selectedStatusFilter === filter.id
              ? "bg-[#f26422] text-white"
              : "bg-[#2a2a2a] text-gray-400 hover:bg-white/10 hover:text-white"
          }`}>
          {filter.label}
          <span className={`px-2 py-0.5 rounded-md text-xs ${
            selectedStatusFilter === filter.id ? "bg-white/20" : "bg-[#1e1e1e]"
          }`}>
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
}