"use client";

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <a className="flex items-center gap-3 text-3xl font-bold tracking-tight" >
           <img src="/images/couch.png" alt="Logo" className="h-15 w-auto" />
           <h2>WJT</h2>
        </a>  
      <div>
        <p className="text-xs text-gray-400 uppercase font-black">
          Equipamentos de alta qualidade!
        </p>
      </div>
    </div>
  );
}