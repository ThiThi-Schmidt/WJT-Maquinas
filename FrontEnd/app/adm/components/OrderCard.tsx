'use client'

import { Order, OrderStatus } from "@/app/types/Order";

interface OrderCardProps {
  order: Order;
  onClick: (order: Order) => void;
  isSelected?: boolean;
}

export const statusConfig: Record<OrderStatus, { label: string; color: string }> = {
  PENDING: { label: "Pendente", color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20" },
  PREPARING: { label: "Em Preparo", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  SENT: { label: "Enviado", color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
  DELIVERED: { label: "Entregue", color: "text-green-500 bg-green-500/10 border-green-500/20" },
};


export function OrderCard({ order, onClick, isSelected }: OrderCardProps) {
  const status = statusConfig[order.status];

  return (
    <div
      onClick={() => onClick(order)}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${
        isSelected
          ? "bg-[#2a2a2a] border-[#f26422]"
          : "bg-[#1e1e1e] border-white/5 hover:border-white/20"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-white font-bold">Pedido #{order.id}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded-md border ${status.color}`}>
          {status.label}
        </span>
      </div>
      
      <div className="text-sm text-gray-400 flex flex-col gap-1">
        <p>Cliente: <span className="text-gray-200">{order.user?.name || "Desconhecido"}</span></p>
        <p>Total: <span className="text-[#f26422] font-bold">R$ {order.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span></p>
      </div>
    </div>
  );
}