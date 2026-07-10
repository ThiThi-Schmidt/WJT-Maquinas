"use client";

import { useEffect, useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminStats } from "./components/AdminStats";
import { OrderFilters } from "./components/OrderFilters";
import { OrderDetails } from "./components/OrderDetails";
import { OrderCard } from "./components/OrderCard"; 
import { Order } from "../types/Order";
import { useOrders } from "../hooks/useOrder";




export default function AdminPanel() {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(undefined);
  const { orders, updateOrderStatus } = useOrders(); 
  

  const handleUpdateStatus = async (orderId: number, newStatus: any) => {

    setSelectedOrder((pedidoAtual) => 
      pedidoAtual?.id === orderId ? { ...pedidoAtual, status: newStatus } : pedidoAtual
    );
  };

  useEffect(() => {
    if (selectedOrder) {
      const pedidoAtualizado = orders.find((o) => o.id === selectedOrder.id);
      if (pedidoAtualizado) {
        setSelectedOrder(pedidoAtualizado);
      }
    }
  }, [orders]);

  const filteredOrders = selectedStatusFilter === "all" 
    ? orders 
    : orders.filter((o) => o.status === selectedStatusFilter);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8 flex flex-col gap-6 selection:bg-[#f26422]/30">
      <AdminHeader />
      <AdminStats orders={orders} />

      <div className="flex gap-6 items-stretch flex-1 min-h-145">
        <div className="flex-1 bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex flex-col gap-6 shadow-xl">
          <OrderFilters 
            selectedStatusFilter={selectedStatusFilter}
            setSelectedStatusFilter={setSelectedStatusFilter}
            orders={orders}/>

          <div className="flex flex-col gap-4 overflow-y-auto max-h-145 pr-2 flex-1">
            {filteredOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                isSelected={selectedOrder?.id === order.id}
                onClick={(orderClicado) => setSelectedOrder(orderClicado)}
              />
            ))}
            
            {filteredOrders.length === 0 && (
              <p className="text-gray-500 text-center mt-10">Nenhum pedido encontrado</p>
            )}
          </div>
        </div>
        
        <OrderDetails 
          order={selectedOrder as any} 
          onUpdateStatus={updateOrderStatus}
        />
      </div>
    </div>
  );
}