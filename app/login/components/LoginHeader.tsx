"use client";

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Logo circular com a chama do SnapBite */}
      <div className="bg-[#f26422] p-3 rounded-2xl text-white flex items-center justify-center shadow-lg shadow-[#f26422]/20">
        
      </div>
      <div>
        <h1 className="text-2xl font-black tracking-tight">
          WJT
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Equipamentos de alta qualidade!
        </p>
      </div>
    </div>
  );
}