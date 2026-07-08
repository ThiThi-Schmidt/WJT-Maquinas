import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/config";
import { useAuthContext } from "../context/AuthContext";
import { Order, OrderStatus } from "../types/Order";

export function useOrders() {
  const { token } = useAuthContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllOrders = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/orders/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Erro ao buscar pedidos");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) getAllOrders();
  }, [token]);

  const createOrder = async (items: { productId: number; quantity: number }[]) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao criar pedido");
      }
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const updateOrderStatus = async (id: number, status: OrderStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Erro ao atualizar status");
      await getAllOrders();
      return true;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return { orders, loading, error, createOrder, updateOrderStatus, refreshOrders: getAllOrders };
}