"use client";

export function CadastroHeader() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <a className="flex items-center gap-3 text-3xl font-bold tracking-tight">
        <img src="/images/couch.png" alt="Logo" className="h-15 w-auto" />
        <h2>WJT</h2>
      </a>
      <div>
        <h1 className="text-2xl font-bold">Criar Conta</h1>
        <p className="text-xs text-gray-400 uppercase font-black mt-2">
          Cadastre-se gratuitamente
        </p>
      </div>
    </div>
  );
}