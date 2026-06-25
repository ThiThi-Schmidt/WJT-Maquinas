import { Request, Response } from "express";
import { CategoryService } from "../services/category.service.js";

class CategoryController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const service = new CategoryService();
      const categories = await service.getAll();

      return res.status(200).json(categories);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return res.status(500).json({
        error: "Erro ao buscar categorias.",
      });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      const service = new CategoryService();
      const category = await service.create(name);

      return res.status(201).json(category);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);

      return res.status(400).json({
        error: error instanceof Error ? error.message : "Erro ao criar categoria.",
      });
    }
  }
}

export { CategoryController };