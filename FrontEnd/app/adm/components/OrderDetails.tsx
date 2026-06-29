"use client";

import { X, UserIcon, Phone, MapPin } from "lucide-react";


interface OrderDetailsProps {
  order: any | null; // Substitua por sua tipagem correta se necessário
  onClose: () => void;
}

export function OrderDetails({ order, onClose }: OrderDetailsProps) {
  if (!order) {
    return (
      <div className="w-full max-w-sm bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex flex-col gap-5 shadow-xl sticky top-6 justify-center items-center">
        <div className="text-center text-gray-500 text-xs font-medium">
          Selecione um pedido na lista para visualizar o prontuário aqui.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex flex-col gap-5 shadow-xl sticky top-6">
      {/* Topo do Prontuário */}
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="text-sm font-black uppercase tracking-wider">Prontuário do Pedido</h3>
        <button 
          onClick={onClose}
          className="p-1.5 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition"
        >
          <X size={16} />
        </button>
      </div>

      {/* Protocolo */}
      <div className="flex flex-col gap-1 bg-[#121212] border border-white/5 p-4 rounded-2xl">
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Protocolo</span>
        <div className="flex justify-between items-center">
          <span className="text-xl font-black">{order.id}</span>
          <span className="text-xs font-bold text-green-400">
            {ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES]?.label}
          </span>
        </div>
      </div>

      {/* Infos Cliente */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Informações do Cliente</h4>
        <div className="flex flex-col gap-3 text-xs font-medium text-gray-300">
          <div className="flex items-center gap-2.5">
            <UserIcon size={15} className="text-gray-500" />
            <span className="text-gray-200 font-bold">{order.customerName}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={15} className="text-gray-500" />
            <span>{order.customerPhone}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-gray-500 mt-0.5 shrink-0" />
            <span className="leading-relaxed">{order.address}</span>
          </div>
        </div>
      </div>

      {/* Produtos */}
      <div className="flex flex-col gap-2 border-t border-b border-white/5 py-4 my-1">
        <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider mb-1">Produtos comprados</h4>
        <div className="flex flex-col gap-2.5 max-h-40 overflow-y-auto pr-1">
          {order.items.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs font-bold">
              <span className="text-gray-400">
                {item.quantity}x <span className="text-white font-medium">{item.name}</span>
              </span>
              <span>
                R$ {(item.price * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Observações */}
      {order.notes && (
        <div className="bg-yellow-500/5 border border-yellow-500/10 p-3.5 rounded-xl text-xs text-yellow-500/90 font-medium">
          <strong>Observação:</strong> {order.notes}
        </div>
      )}

      {/* Totalizadores */}
      <div className="mt-auto flex flex-col gap-2 bg-[#121212] border border-white/5 p-4 rounded-2xl text-xs font-medium text-gray-400">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="text-gray-200">R$ {order.subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxa de Entrega:</span>
          <span className="text-gray-200">R$ {order.deliveryFee.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-1 text-white font-black text-sm">
          <span>Total Geral:</span>
          <span className="text-[#f26422] text-xl">
            R$ {order.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
}