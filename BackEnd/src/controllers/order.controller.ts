import type { Request, Response } from "express";
import { OrderService } from "../services/order.service.js";

const orderService = new OrderService();

export class OrderController {
  async create(req: Request, res: Response) {
    try {
      const userId = Number(req.user);
      const { items } = req.body; 

      const order = await orderService.create(userId, items);
      
      return res.status(201).json(order);
    } catch (err: any) {
      console.error("Erro ao criar pedido:", err);
      return res.status(400).json({ error: err.message || "Erro ao criar pedido" });
    }
  }

  async getMyOrders(req: Request, res: Response) {
    try {
      const userId = Number(req.user);
      const orders = await orderService.getUserOrders(userId);
      return res.json(orders);
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao buscar seus pedidos" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const orders = await orderService.getAllOrders();
      return res.json(orders);
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao buscar todos os pedidos" });
    }
  }
}