"use client";

interface OrderFiltersProps {
  selectedStatusFilter: string;
  setSelectedStatusFilter: (status: string) => void;
  counts: {
    all: number;
    pending: number;
    production: number;
    sent: number;
    delivered: number;
  };
}

export function OrderFilters({ selectedStatusFilter, setSelectedStatusFilter, counts }: OrderFiltersProps) {


  return (
    <div className="flex items-center gap-2 border-b border-white/5 pb-5 overflow-x-auto scrollbar-hide">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Filtros:</span>
      
      
    </div>
  );
}