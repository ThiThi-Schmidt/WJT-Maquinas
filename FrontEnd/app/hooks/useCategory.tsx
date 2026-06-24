import { useEffect, useState } from "react";
import { Category } from "../types/Category";
import { API_BASE_URL } from "../utils/config";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE_URL}/categories`);
        if (!res.ok) throw new Error("Erro ao buscar categorias");

        const data = await res.json();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    getAllCategories();
  }, []);

  return { categories, loading, error };
}