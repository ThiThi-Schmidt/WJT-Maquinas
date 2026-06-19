import { useEffect, useState } from "react";

import { API_BASE_URL } from "../utils/config";
import { Products } from "../types/Products";
import { useAuthContext } from "../context/AuthContext";

export function useProducts() {
  const { token } = useAuthContext();
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/products`); 
      
      if (!res.ok) throw new Error("Erro ao buscar produtos no servidor");

      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts(); 
  }, []);

  const createProduct = async (productData: Omit<Products, "id">) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao criar produto");
      }

      await getAllProducts();
      return true;
    } catch (err) {
      console.error("Erro ao criar:", err);
      throw err;
    }
  };

  const updateProduct = async (id: number, productData: Partial<Products>) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao atualizar produto");
      }

      await getAllProducts();
      return true;
    } catch (err) {
      console.error("Erro ao atualizar:", err);
      throw err;
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao deletar produto");
      }

      await getAllProducts();
      return true;
    } catch (err) {
      console.error("Erro ao deletar:", err);
      throw err;
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct, 
    deleteProduct, 
    refreshProducts: getAllProducts, 
  };
}
