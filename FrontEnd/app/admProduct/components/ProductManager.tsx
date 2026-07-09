"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  imagem: string | null;
  categoryId: number;
  category?: {
    id: number;
    name: string;
  };
}

export default function ProductManager() {

  const API_URL = "http://localhost:3001/products"; 

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imagem, setImagem] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Erro ao buscar produtos da API");
      const data = await res.json();
      setProducts(data);
    } catch (err: any) {
      setErrorMessage(err.message || "Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const clearForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setCategoryId("");
    setImagem("");
    setEditingId(null);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setErrorMessage("Você precisa estar logado como Admin.");
      return;
    }

    const productData = {
      name,
      description: description || undefined,
      price: Number(price.toString().replace(",", ".")),
      stock: Number(stock),
      imagem: imagem || undefined,
      categoryId: Number(categoryId),
    };

    try {
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao processar requisição.");
      }

      clearForm();
      fetchProducts();
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  const handleEditClick = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setDescription(product.description || "");
    setPrice(product.price.toString());
    setStock(product.stock.toString());
    setCategoryId(product.categoryId.toString());
    setImagem(product.imagem || "");
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    setErrorMessage("");

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao deletar produto.");
      }

      fetchProducts();
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="bg-[#1e1e1e] border border-white/5 rounded-3xl p-6 shadow-xl text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#f26422]">Controle de Estoque</h2>
        <a 
          href="/adm" 
          className="text-xs bg-[#f26422] hover:bg-[#d8531a] text-white font-bold uppercase tracking-wider px-5 py-3 rounded-2xl transition-all shadow-lg shadow-[#f26422]/10 active:scale-95 inline-block"
        > 
          Voltar 
        </a>
        {editingId && (
          <button onClick={clearForm} className="text-xs bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded-xl font-semibold">
            Cancelar Edição
          </button>
        )}
      </div>

      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-sm">
          ⚠️ {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 h-fit">
          <h3 className="text-lg font-semibold mb-4 text-zinc-300">
            {editingId ? "Editar Produto" : "Novo Produto"}
          </h3>
          <form onSubmit={handleSaveProduct} className="flex flex-col gap-4">
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Nome do Produto</label>
              <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none" placeholder="Ex: Sofá Retrátil" />
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1">Descrição (Opcional)</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none resize-none h-20" placeholder="Detalhes do produto..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Preço (R$)</label>
                <input required type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none" placeholder="0.00" />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Estoque</label>
                <input required type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none" placeholder="0" />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1">ID da Categoria</label>
              <input required type="number" disabled={!!editingId} value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none disabled:opacity-40" placeholder="Ex: 1" />
              {editingId && <span className="text-[10px] text-zinc-500 mt-1 block">A categoria não pode ser alterada na edição neste controller.</span>}
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1">URL da Imagem</label>
              <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} className="w-full p-3 rounded-xl bg-[#121212] border border-white/10 text-sm focus:border-[#f26422] outline-none" placeholder="/images/exemplos.png" />
            </div>

            <button type="submit" className="bg-[#f26422] hover:bg-[#d8531a] text-white py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-[#f26422]/10 mt-2">
              {editingId ? "Salvar Alterações" : "Cadastrar Produto"}
            </button>
          </form>
        </div>
        <div className="lg:col-span-2 bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
          <h3 className="text-lg font-semibold mb-4 text-zinc-300">Produtos no Banco</h3>
          
          {loading ? (
            <p className="text-sm text-zinc-500">Carregando produtos...</p>
          ) : products.length === 0 ? (
            <p className="text-sm text-zinc-500">Nenhum produto cadastrado no momento.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-zinc-400 font-medium">
                    <th className="pb-3 pl-2">Item</th>
                    <th className="pb-3">Preço</th>
                    <th className="pb-3">Qtd</th>
                    <th className="pb-3">Categoria</th>
                    <th className="pb-3 text-right pr-2">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-white/[0.02] transition">
                      <td className="py-4 pl-2 font-medium flex items-center gap-3">
                        {product.imagem && (
                          <img src={product.imagem} alt={product.name} className="w-8 h-8 rounded-lg object-cover bg-zinc-800" />
                        )}
                        <div>
                          <p>{product.name}</p>
                          <span className="text-[11px] text-zinc-500">ID: {product.id}</span>
                        </div>
                      </td>
                      <td className="py-4 text-zinc-300">
                        {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${product.stock > 0 ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                          {product.stock} un
                        </span>
                      </td>
                      <td className="py-4 text-zinc-400">
                        {product.category?.name || `ID: ${product.categoryId}`}
                      </td>
                      <td className="py-4 text-right pr-2 space-x-2">
                        <button onClick={() => handleEditClick(product)} className="text-xs bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white px-3 py-1.5 rounded-xl border border-blue-500/20 transition-all">
                          Editar
                        </button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="text-xs bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1.5 rounded-xl border border-red-500/20 transition-all">
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}