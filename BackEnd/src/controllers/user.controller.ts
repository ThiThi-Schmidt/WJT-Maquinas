import type { Request, Response } from "express";
import { UserService } from "../services/userService.js";
import type { Role } from "../../generated/prisma/enums.js";

const userService = new UserService();

export class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const users = await userService.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.getById(id);

      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      const user = await userService.create(
        name,
        email,
        password,
        role as Role | undefined
      );

      res.status(201).json(user);
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error);
      res.status(400).json({ error: error.message || "Erro ao cadastrar usuário" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, email, password, role } = req.body;

      const user = await userService.update(id, name, email, password, role);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await userService.delete(id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }
}