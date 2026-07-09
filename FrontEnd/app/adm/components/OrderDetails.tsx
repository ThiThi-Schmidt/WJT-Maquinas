'use client'

import { Order, OrderStatus } from "@/app/types/Order";
import { statusConfig } from "./OrderCard";
import Image from "next/image";

interface OrderDetailsProps {
  order: Order;
  onUpdateStatus: (id: number, status: OrderStatus) => void;
}

export function OrderDetails({ order, onUpdateStatus }: OrderDetailsProps) {

  if (!order) {
    return (
      <div className="w-[500px] bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 text-white h-full flex items-center justify-center">
        <p className="text-gray-400 font-medium">
          Selecione um pedido na lista para visualizar os detalhes.
        </p>
      </div>
    );
  }
  const currentStatus = statusConfig[order.status];
  const availableStatuses: OrderStatus[] = ["PENDING", "SENT", "DELIVERED"];

  return (
    <div className=" w-[500px] bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 text-white h-full flex flex-col">
      <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
        <div>
          <h2 className="text-2xl font-black">Pedido #{order.id}</h2>
          <p className="text-gray-400 mt-1">Data: {new Date(order.createdAt).toLocaleString("pt-BR")}</p>
        </div>
        <div className={`px-4 py-2 rounded-lg border font-bold ${currentStatus.color}`}>
          {currentStatus.label}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Dados do Cliente</h3>
        <div className="bg-[#121212] p-4 rounded-xl border border-white/5">
          <p className="text-gray-300"><strong className="text-white">Nome:</strong> {order.user?.name || "N/A"}</p>
          <p className="text-gray-300"><strong className="text-white">Email:</strong> {order.user?.email || "N/A"}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-6">
        <h3 className="text-lg font-bold mb-4">Itens ({order.items.length})</h3>
        <div className="flex flex-col gap-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex gap-4 items-center bg-[#121212] p-3 rounded-xl border border-white/5">
               <div className="flex-1">
                 <p className="font-bold">{item.product?.name || `Produto #${item.productId}`}</p>
                 <p className="text-sm text-gray-400">{item.quantity}x de R$ {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
               </div>
               <div className="font-black text-[#f26422]">
                 R$ {(item.quantity * item.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
               </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/5">
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Alterar Status</h3>
        <div className="flex flex-wrap gap-2">
          {availableStatuses.map((status) => (
            <button
              key={status}
              onClick={() => onUpdateStatus(order.id, status)}
              disabled={order.status === status}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                order.status === status
                  ? "bg-white/10 text-white cursor-not-allowed"
                  : "bg-[#2a2a2a] text-gray-400 hover:bg-[#f26422] hover:text-white"
              }`}
            >
              {statusConfig[status].label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}