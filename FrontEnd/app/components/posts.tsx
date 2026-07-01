'use client'

import React, { useState } from 'react';
import { maquinasData, Maquina } from '../data/maquinasData';

export default function MaquinasETutoriais() {
  const [maquinaSelecionada, setMaquinaSelecionada] = useState<Maquina | null>(null);
  
  // NOVO ESTADO: Controla a abertura do modal de "Todos os Tutoriais"
  const [mostrarTodos, setMostrarTodos] = useState(false);

  return (
    <section id="maquinas-tutoriais" className="py-16 scroll-mt-24 relative bg-black">
      <div className="py-20 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          
          {/* Cabeçalho da Seção */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
               {/* BOTÃO ALTERADO: Agora ele ativa o modal geral em vez de redirecionar a página */}
              <button 
                onClick={() => setMostrarTodos(true)} 
                className="text-sm font-semibold border-b-2 border-gray-400 hover:border-white transition pb-1 text-gray-300 cursor-pointer"
              >
                Ver Todos os Tutoriais
              </button>
              <h2 className="text-3xl font-bold text-white">Equipamentos & Manutenção</h2>
            </div>
          </div>

          {/* Grid de Máquinas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {maquinasData.slice(0, 3).map((maquina) => ( // Opcional: Adicionei slice(0,3) caso queira que apareça só 3 na tela inicial, mas todos no modal
              <div key={maquina.id} className="group">
                {/* Imagem clicável que abre o modal */}
                <button 
                  onClick={() => setMaquinaSelecionada(maquina)}
                  className="block mb-4 overflow-hidden rounded-2xl w-full text-left cursor-pointer"
                >
                  <img 
                    src={maquina.imagem} 
                    alt={maquina.nome} 
                    className="w-full h-64 object-cover hover:scale-105 transition duration-300" 
                  />
                </button>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {maquina.nome}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {maquina.descricaoCurta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* MODAL 1: MÁQUINA ESPECÍFICA (O que você já tinha) */}
      {/* ----------------------------------------------------------- */}
      {maquinaSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          
          {/* Caixa do Modal */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative border border-zinc-700 shadow-2xl">
            
            {/* Botão de Fechar */}
            <button 
              onClick={() => setMaquinaSelecionada(null)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* Imagem Expandida */}
            <div className="w-full md:w-1/2">
              <img 
                src={maquinaSelecionada.imagem} 
                alt={maquinaSelecionada.nome} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Texto / Tutorial */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {maquinaSelecionada.nome}
              </h3>
              <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700">
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Guia de Uso / Manutenção</h4>
                <p className="text-gray-300 leading-relaxed">
                  {maquinaSelecionada.tutorial}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* MODAL 2: TODOS OS TUTORIAIS (Novo) */}
      {/* ----------------------------------------------------------- */}
      {mostrarTodos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          
          <div className="bg-zinc-900 rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col relative border border-zinc-700 shadow-2xl">
            
            {/* Botão de Fechar */}
            <button 
              onClick={() => setMostrarTodos(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* Título do Modal Geral */}
            <div className="p-6 md:p-8 border-b border-zinc-700 bg-zinc-900">
              <h3 className="text-2xl font-bold text-white">Todos os Guias e Tutoriais</h3>
            </div>

            {/* Lista com barra de rolagem (overflow-y-auto) */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {maquinasData.map((maquina) => (
                <div key={maquina.id} className="flex flex-col md:flex-row gap-6 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                  <img 
                    src={maquina.imagem} 
                    alt={maquina.nome} 
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-white mb-2">{maquina.nome}</h4>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Guia de Uso / Manutenção</span>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {maquina.tutorial}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}