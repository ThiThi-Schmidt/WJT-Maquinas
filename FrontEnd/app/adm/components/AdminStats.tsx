'use client'

import { Order } from "@/app/types/Order";
import { DollarSign, ShoppingBag, Clock, Check } from "lucide-react";

interface AdminStatsProps {
  orders: Order[];
}

export function AdminStats({ orders = [] }: AdminStatsProps) {
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);
  const deliveredOrders = orders.filter((o) => o.status === "DELIVERED").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white">
      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
        <div className="p-4 bg-[#f26422]/10 rounded-xl text-[#f26422]">
          <DollarSign size={24} />
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">Faturamento</p>
          <h3 className="text-2xl font-black">
            R$ {totalRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </h3>
        </div>
      </div>

      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
        <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500">
          <ShoppingBag size={24} />
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">Total de Pedidos</p>
          <h3 className="text-2xl font-black">{totalOrders}</h3>
        </div>
      </div>

      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
        <div className="p-4 bg-yellow-500/10 rounded-xl text-yellow-500">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">Pendentes</p>
          <h3 className="text-2xl font-black">{pendingOrders}</h3>
        </div>
      </div>

      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-white/5 flex items-center gap-4">
        <div className="p-4 bg-green-500/10 rounded-xl text-green-500">
          <Check size={24} />
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">Entregue</p>
          <h3 className="text-2xl font-black">{deliveredOrders}</h3>
        </div>
      </div>
    </div>
  );
}