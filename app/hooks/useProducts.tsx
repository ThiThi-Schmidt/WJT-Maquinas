import { useEffect, useState } from "react";

import { API_BASE_URL } from "../utils/config";
import { Products } from "../types/Products";
import { useAuthContext } from "../context/AuthContext";

export function useProducts() {
  const { token } = useAuthContext();
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!res.ok) throw new Error("Erro ao buscar produtos");

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

    if (token) {
      getAllProducts();
    }
  }, [token]);

  return {
    products,
    loading,
    error,
  };
}