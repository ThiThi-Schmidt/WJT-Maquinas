"use client";

import { useState } from "react";

import { AdminHeader } from "./components/AdminHeader";

import { OrderFilters } from "./components/OrderFilters";
import { OrderCard } from "./components/OrderCard";
import { OrderDetails } from "./components/OrderDetails";
import { AdminStats } from "./components/AdminStats";

// Componentes refatorados


export default function AdminPanel() {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("all");

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-8 flex flex-col gap-6 selection:bg-[#f26422]/30">
      
      <AdminHeader />

      <AdminStats />

      <div className="flex gap-6 items-stretch flex-1 min-h-145">
        
        {/* LADO ESQUERDO: LISTAGEM */}
        <div className="flex-1 bg-[#1e1e1e] border border-white/5 rounded-4xl p-6 flex flex-col gap-6 shadow-xl">
          <OrderFilters 
            selectedStatusFilter={selectedStatusFilter}
            setSelectedStatusFilter={setSelectedStatusFilter}
           
          />

          <div className="flex flex-col gap-4 overflow-y-auto max-h-145 pr-2 flex-1">
            
          </div>
        </div>

        {/* LADO DIREITO: DETALHES */}
        <OrderDetails 
          
        />

      </div>
    </div>
  );
}