import { useEffect, useState } from "react";

import { API_BASE_URL } from "../utils/config";
import { useAuthContext } from "../context/AuthContext";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "CLIENT" | "USER"; 
  createdAt?: string;
}

export function useUsers() {
  const { token } = useAuthContext();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllUsers = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao buscar usuários");
      }

      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getAllUsers();
    }
  }, [token]);


  const createUser = async (userData: Omit<User, "id"> & { password?: string }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao criar conta");
      }

      if (token) await getAllUsers();
      
      return true;
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
      throw err;
    }
  };

  const updateProfile = async (profileData: Partial<Omit<User, "id">> & { password?: string }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao atualizar perfil");
      }

      if (token) await getAllUsers();
      return true;
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
      throw err;
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao deletar usuário");
      }

      await getAllUsers();
      return true;
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
      throw err;
    }
  };

  return {
    users,
    loading,
    error,
    createUser,      
    updateProfile,   
    deleteUser,       
    refreshUsers: getAllUsers,
  };
}
