import { useEffect, useState } from "react";
import { Category } from "../types/Category";
import { API_BASE_URL } from "../utils/config";
import { useAuthContext } from "../context/AuthContext";

export function useCategories() {
    const { token } = useAuthContext();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                setLoading(true);
                console.log(`${API_BASE_URL}/categories`);
                const res = await fetch(`${API_BASE_URL}/categories`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) throw new Error("Erro ao buscar categorias");

                const data = await res.json();
                setCategories(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Erro desconhecido");
                console.error("Erro:", err);
            } finally {
                setLoading(false);
            }
        };

        getAllCategories();
    }, [token]);

    return {
        categories,
        loading,
        error,
    };
}